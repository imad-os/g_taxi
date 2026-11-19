// Repairs geometry, topology, pavement widths (side.bin), and terrain clearance (ground.bin) in assets/city/*
// based on anomalies identified by RoadBot patrol, while keeping lights and stations indices consistent.
// Usage: node tools/fix-city.mjs [--report bot_log_2/city_repairs.json]
import fs from 'node:fs';

const STEP = 4;
const PAVE = 3.5;
const BLEND = 12;

const meta = JSON.parse(fs.readFileSync('assets/city/city.json', 'utf8'));
const rawNet = new Float32Array(fs.readFileSync('assets/city/net.bin').buffer.slice(0));
const gh = new Float32Array(fs.readFileSync('assets/city/ground.bin').buffer.slice(0, 20));
const groundI16 = new Int16Array(fs.readFileSync('assets/city/ground.bin').buffer.slice(20));

const reportArg = process.argv.indexOf('--report');
const reportPath = reportArg >= 0 ? process.argv[reportArg + 1] : null;

const r2 = v => Math.round(v * 100) / 100;

// Unpack junctions and edges
let J = meta.junctions.map((j, id) => ({ oldId: id, x: j[0], z: j[1], r: j[2], y: j[3] }));
let E = meta.edges.map((row, oldIdx) => {
    const off = row[1], n = row[2];
    const pts = [];
    for (let k = 0; k < n; k++) {
        pts.push({ x: rawNet[(off + k) * 3], y: rawNet[(off + k) * 3 + 1], z: rawNet[(off + k) * 3 + 2] });
    }
    return {
        oldId: oldIdx, origId: row[0], a: row[3], b: row[4], hw: row[5], cls: row[6],
        one: row[7], ra: row[8], lim: row[9], name: row[10], br: row[11], pts
    };
});

const edgeLen = pts => {
    let L = 0;
    for (let k = 1; k < pts.length; k++) L += Math.hypot(pts[k].x - pts[k - 1].x, pts[k].z - pts[k - 1].z);
    return L;
};

const repairs = {
    degenerateEdgesRemoved: [],
    microEdgesContracted: [],
    duplicateSamplesRemoved: 0,
    onewayFixedForConnectivity: [],
    onewayFixedForDetour: [],
    kinksSmoothed: [],
    steepGradesSmoothed: [],
    overlappingCarriagewaysTrimmed: [],
    pavementSamplesAdjusted: 0,
    groundCellsLowered: 0
};

// 1. Deduplicate consecutive samples (< 0.05 m) inside edges
for (const e of E) {
    if (e.pts.length <= 2) continue;
    const clean = [e.pts[0]];
    for (let k = 1; k < e.pts.length - 1; k++) {
        const p = e.pts[k], prev = clean[clean.length - 1];
        if (Math.hypot(p.x - prev.x, p.z - prev.z) >= 0.05) clean.push(p);
        else repairs.duplicateSamplesRemoved++;
    }
    const last = e.pts[e.pts.length - 1];
    clean.push(last);
    e.pts = clean;
}

// 2. Contract micro-edges (< 2.0 m) & remove degenerate self-loops
const uf = Array.from({ length: J.length }, (_, i) => i);
const find = x => { while (uf[x] !== x) { uf[x] = uf[uf[x]]; x = uf[x]; } return x; };

for (const e of E) {
    const L = edgeLen(e.pts);
    if (e.a !== e.b && L < 2.0) {
        const ra = find(e.a), rb = find(e.b);
        if (ra !== rb) {
            uf[rb] = ra;
            repairs.microEdgesContracted.push({ oldEdge: e.oldId, junctionA: e.a, junctionB: e.b, mergedInto: ra, len: r2(L), x: r2(J[ra].x), z: r2(J[ra].z), street: (meta.names[e.name] || [''])[0] });
        }
    }
}

const survivedE = [];
for (const e of E) {
    e.a = find(e.a);
    e.b = find(e.b);
    // Snap endpoints to canonical junction coordinates
    if (e.pts.length >= 2) {
        e.pts[0].x = J[e.a].x; e.pts[0].z = J[e.a].z;
        e.pts[e.pts.length - 1].x = J[e.b].x; e.pts[e.pts.length - 1].z = J[e.b].z;
    }
    const L = edgeLen(e.pts);
    if (e.a === e.b && L < 5.0) {
        repairs.degenerateEdgesRemoved.push({ oldEdge: e.oldId, junction: e.a, len: r2(L), x: r2(J[e.a].x), z: r2(J[e.a].z), street: (meta.names[e.name] || [''])[0] });
        continue;
    }
    if (e.pts.length < 2 || L < 1.0) {
        repairs.degenerateEdgesRemoved.push({ oldEdge: e.oldId, junctionA: e.a, junctionB: e.b, len: r2(L), x: r2(J[e.a].x), z: r2(J[e.a].z), street: (meta.names[e.name] || [''])[0] });
        continue;
    }
    survivedE.push(e);
}
E = survivedE;

// Compact junction indices to active junctions only
const usedJ = new Map();
for (const e of E) {
    if (!usedJ.has(e.a)) usedJ.set(e.a, usedJ.size);
    if (!usedJ.has(e.b)) usedJ.set(e.b, usedJ.size);
}
const newJ = [];
for (const [oldIdx, newIdx] of usedJ.entries()) {
    newJ[newIdx] = { x: J[oldIdx].x, z: J[oldIdx].z, r: J[oldIdx].r, y: J[oldIdx].y, oldIds: [oldIdx], edges: [] };
}
for (let k = 0; k < J.length; k++) {
    const rep = find(k);
    if (k !== rep && usedJ.has(rep)) newJ[usedJ.get(rep)].oldIds.push(k);
}
for (let ei = 0; ei < E.length; ei++) {
    const e = E[ei];
    e.id = ei;
    e.a = usedJ.get(e.a);
    e.b = usedJ.get(e.b);
    newJ[e.a].edges.push(ei);
    newJ[e.b].edges.push(ei);
}
J = newJ;

// Recompute junction radii cleanly
for (const j of J) {
    j.r = j.edges.length >= 3 ? +(Math.max(...j.edges.map(ei => E[ei].hw)) + 1.5).toFixed(2)
        : j.edges.length === 2 ? +(Math.max(...j.edges.map(ei => E[ei].hw)) * 0.6).toFixed(2)
            : 0;
}

// 3. Fix directed connectivity: ensure 100% of junctions are mutually reachable from/to hubJ
let hubJ = 0, hubD = 1e18;
for (let j = 0; j < J.length; j++) {
    if (J[j].edges.length < 2) continue;
    const d = Math.hypot(J[j].x - 2350, J[j].z + 1780);
    if (d < hubD) { hubD = d; hubJ = j; }
}

const flipEdgeOneway = (e, reason) => {
    if (!e.one) return;
    e.one = 0;
    const mid = e.pts[e.pts.length >> 1];
    repairs.onewayFixedForConnectivity.push({ edge: e.id, oldEdge: e.oldId, reason, x: r2(mid.x), z: r2(mid.z), street: (meta.names[e.name] || [''])[0] });
};

// First: any dead-end edge (deg === 1 endpoint) marked one-way traps vehicles or prevents routing to/from it
for (const e of E) {
    if (e.one && (J[e.a].edges.length === 1 || J[e.b].edges.length === 1)) {
        flipEdgeOneway(e, 'oneway_dead_end');
    }
}

const computeReach = () => {
    const fwd = new Uint8Array(J.length), rev = new Uint8Array(J.length);
    const qf = [hubJ]; fwd[hubJ] = 1;
    for (let h = 0; h < qf.length; h++) {
        const u = qf[h];
        for (const ei of J[u].edges) {
            const e = E[ei];
            if (e.one && e.a !== u) continue;
            const v = e.a === u ? e.b : e.a;
            if (!fwd[v]) { fwd[v] = 1; qf.push(v); }
        }
    }
    const qr = [hubJ]; rev[hubJ] = 1;
    for (let h = 0; h < qr.length; h++) {
        const u = qr[h];
        for (const ei of J[u].edges) {
            const e = E[ei];
            const v = e.a === u ? e.b : e.a;
            if (e.one && e.a !== v) continue;
            if (!rev[v]) { rev[v] = 1; qr.push(v); }
        }
    }
    return { fwd, rev };
};

for (let iter = 0; iter < 200; iter++) {
    const { fwd, rev } = computeReach();
    let bad = 0;
    for (let j = 0; j < J.length; j++) if (!fwd[j] || !rev[j]) bad++;
    if (bad === 0) break;

    // Pick best one-way edge bridging between reachable and unreachable sets (lowest priority road first)
    let bestE = null, bestScore = -1e18;
    for (const e of E) {
        if (!e.one) continue;
        const aOk = fwd[e.a] && rev[e.a], bOk = fwd[e.b] && rev[e.b];
        const boundaryFwd = fwd[e.a] !== fwd[e.b], boundaryRev = rev[e.a] !== rev[e.b];
        if (!boundaryFwd && !boundaryRev && (aOk && bOk)) continue;
        let score = 0;
        if (boundaryFwd || boundaryRev) score += 1000;
        if (!aOk || !bOk) score += 100;
        score += e.cls * 15 - (e.ra ? 80 : 0) - edgeLen(e.pts) * 0.05;
        if (score > bestScore) { bestScore = score; bestE = e; }
    }
    if (!bestE) break;
    flipEdgeOneway(bestE, 'scc_connectivity_bridge');
}

// 3b. Reduce local excessive_detour bottlenecks (>10x detour between nearby junctions < 120m apart on non-roundabout local streets)
{
    const edgeLens = E.map(e => edgeLen(e.pts));
    const bfsCheck = (u, v, maxHops = 3) => {
        const seen = new Set([u]), q = [[u, []]];
        for (let h = 0; h < q.length; h++) {
            const [cur, path] = q[h];
            if (cur === v) return path;
            if (path.length >= maxHops) continue;
            for (const ei of J[cur].edges) {
                const oe = E[ei];
                if (oe.ra || oe.cls < 2) continue;
                const nxt = oe.a === cur ? oe.b : oe.a;
                if (!seen.has(nxt)) { seen.add(nxt); q.push([nxt, [...path, ei]]); }
            }
        }
        return null;
    };
    const JC = 130, jCell = new Map(), jk = (a, b) => a * 100000 + b;
    for (let j = 0; j < J.length; j++) {
        const k = jk(Math.floor(J[j].x / JC), Math.floor(J[j].z / JC));
        let l = jCell.get(k); if (!l) jCell.set(k, l = []); l.push(j);
    }
    const dirDist = new Float64Array(J.length);
    const localShortest = (src, dst, maxBudget) => {
        dirDist.fill(Infinity); dirDist[src] = 0;
        const heap = [0, src];
        const push = (d, j) => { heap.push(d, j); let i = heap.length / 2 - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p * 2] <= heap[i * 2]) break; const a = heap[p * 2], b = heap[p * 2 + 1]; heap[p * 2] = heap[i * 2]; heap[p * 2 + 1] = heap[i * 2 + 1]; heap[i * 2] = a; heap[i * 2 + 1] = b; i = p; } };
        const pop = () => { const d = heap[0], j = heap[1], ld = heap[heap.length - 2], lj = heap[heap.length - 1]; heap.length -= 2; if (heap.length) { heap[0] = ld; heap[1] = lj; let i = 0, n = heap.length / 2; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < n && heap[l * 2] < heap[m * 2]) m = l; if (r < n && heap[r * 2] < heap[m * 2]) m = r; if (m === i) break; const a = heap[m * 2], b = heap[m * 2 + 1]; heap[m * 2] = heap[i * 2]; heap[m * 2 + 1] = heap[i * 2 + 1]; heap[i * 2] = a; heap[i * 2 + 1] = b; i = m; } } return [d, j]; };
        while (heap.length) {
            const [d, u] = pop();
            if (d > dirDist[u]) continue;
            if (u === dst) return d;
            if (d > maxBudget) return Infinity;
            for (const ei of J[u].edges) {
                const e = E[ei];
                if (e.one && e.a !== u) continue;
                const v = e.a === u ? e.b : e.a, nd = d + edgeLens[ei];
                if (nd < dirDist[v]) { dirDist[v] = nd; push(nd, v); }
            }
        }
        return Infinity;
    };
    const edgeForJ = (j, preferOut) => {
        for (const ei of J[j].edges) {
            const e = E[ei];
            if (preferOut ? (!e.one || e.a === j) : (!e.one || e.b === j)) return ei;
        }
        return -1;
    };
    for (let u = 0; u < J.length; u++) {
        const ci = Math.floor(J[u].x / JC), cj = Math.floor(J[u].z / JC);
        for (let da = -1; da <= 1; da++) for (let db = -1; db <= 1; db++) {
            for (const v of jCell.get(jk(ci + da, cj + db)) || []) {
                if (u === v) continue;
                const euclid = Math.hypot(J[v].x - J[u].x, J[v].z - J[u].z);
                if (euclid <= 15 || euclid >= 120) continue;
                const path = bfsCheck(u, v, 3);
                if (!path || !path.some(ei => E[ei].one && !E[ei].ra && E[ei].cls >= 2)) continue;
                // Account for first-edge exit (edgeForJ(u, true)) if one-way out of u forces leaving away from v
                const e0Id = edgeForJ(u, true), e1Id = edgeForJ(v, false);
                let penalty = 0;
                if (e0Id >= 0) {
                    const e0 = E[e0Id], s0 = e0.a === u ? Math.min(edgeLens[e0Id] * 0.25, 4) : Math.max(edgeLens[e0Id] * 0.75, edgeLens[e0Id] - 4);
                    const nextU = e0.a === u ? e0.b : e0.a;
                    const rem = e0.a === u ? edgeLens[e0Id] - s0 : s0;
                    if (!path.includes(e0Id) && e0.one && !e0.ra && e0.cls >= 2 && rem + localShortest(nextU, v, euclid * 9.5) > euclid * 9.5) {
                        e0.one = 0;
                        const mid = e0.pts[e0.pts.length >> 1];
                        repairs.onewayFixedForDetour.push({ edge: e0.id, oldEdge: e0.oldId, fromJ: u, toJ: v, euclidM: r2(euclid), x: r2(mid.x), z: r2(mid.z), street: (meta.names[e0.name] || [''])[0] });
                    }
                }
                if (e1Id >= 0) {
                    const e1 = E[e1Id], prevV = e1.a === v ? e1.b : e1.a;
                    if (!path.includes(e1Id) && e1.one && !e1.ra && e1.cls >= 2 && localShortest(u, prevV, euclid * 9.5) + edgeLens[e1Id] * 0.5 > euclid * 9.5) {
                        e1.one = 0;
                        const mid = e1.pts[e1.pts.length >> 1];
                        repairs.onewayFixedForDetour.push({ edge: e1.id, oldEdge: e1.oldId, fromJ: u, toJ: v, euclidM: r2(euclid), x: r2(mid.x), z: r2(mid.z), street: (meta.names[e1.name] || [''])[0] });
                    }
                }
                if (localShortest(u, v, euclid * 8.5) === Infinity) {
                    for (const ei of path) {
                        const e = E[ei];
                        if (e.one && !e.ra && e.cls >= 2) {
                            e.one = 0;
                            const mid = e.pts[e.pts.length >> 1];
                            repairs.onewayFixedForDetour.push({ edge: e.id, oldEdge: e.oldId, fromJ: u, toJ: v, euclidM: r2(euclid), x: r2(mid.x), z: r2(mid.z), street: (meta.names[e.name] || [''])[0] });
                        }
                    }
                }
                void penalty;
            }
        }
    }
}

// 4. Smooth sharp kinks along edges & resample
const maxKinkAngle = pts => {
    const cum = [0];
    for (let k = 1; k < pts.length; k++) cum.push(cum[k - 1] + Math.hypot(pts[k].x - pts[k - 1].x, pts[k].z - pts[k - 1].z));
    const L = cum[cum.length - 1];
    if (L < 8) return { maxDeg: 0, atS: 0 };
    const atS = s => {
        let lo = 0, hi = pts.length - 1;
        while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= s) lo = m; else hi = m; }
        const i = lo, j = Math.min(pts.length - 1, i + 1);
        const dx = pts[j].x - pts[i].x, dz = pts[j].z - pts[i].z;
        const l = Math.hypot(dx, dz) || 1;
        return Math.atan2(dx / l, dz / l);
    };
    let bestDeg = 0, bestS = 0, h0 = null;
    for (let s = 2; s <= L - 2; s += 2) {
        const h = atS(s);
        if (h0 !== null) {
            const h2 = atS(Math.min(L, s + 8));
            let dh = Math.abs(h2 - h0); if (dh > Math.PI) dh = 2 * Math.PI - dh;
            const deg = dh * 180 / Math.PI;
            if (deg > bestDeg) { bestDeg = deg; bestS = s; }
        }
        h0 = h;
    }
    return { maxDeg: bestDeg, atS: bestS };
};

const resamplePts = (pts, step) => {
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
    const L = cum[cum.length - 1];
    const n = Math.max(1, Math.round(L / step)), out = [];
    let j = 0;
    for (let k = 0; k <= n; k++) {
        const s = L * k / n;
        while (j < pts.length - 2 && cum[j + 1] < s) j++;
        const seg = cum[j + 1] - cum[j] || 1, t = Math.max(0, Math.min(1, (s - cum[j]) / seg));
        out.push({
            x: +(pts[j].x + (pts[j + 1].x - pts[j].x) * t).toFixed(2),
            y: +(pts[j].y + (pts[j + 1].y - pts[j].y) * t).toFixed(2),
            z: +(pts[j].z + (pts[j + 1].z - pts[j].z) * t).toFixed(2)
        });
    }
    return out;
};

for (const e of E) {
    const before = maxKinkAngle(e.pts);
    if (before.maxDeg > 66 && edgeLen(e.pts) >= 8) {
        let p = e.pts.map(o => ({ ...o }));
        for (let pass = 0; pass < 36; pass++) {
            const q = p.map(o => ({ ...o }));
            for (let i = 1; i < p.length - 1; i++) {
                const rr = Math.min(4, i, p.length - 1 - i);
                let sx = 0, sz = 0, c = 0;
                for (let d = -rr; d <= rr; d++) { sx += p[i + d].x; sz += p[i + d].z; c++; }
                q[i].x = sx / c; q[i].z = sz / c;
            }
            p = resamplePts(q, STEP);
            if (maxKinkAngle(p).maxDeg <= 58) break;
        }
        e.pts = p;
        const after = maxKinkAngle(e.pts);
        repairs.kinksSmoothed.push({
            edge: e.id, oldEdge: e.oldId, street: (meta.names[e.name] || [''])[0],
            beforeDeg: Math.round(before.maxDeg), afterDeg: Math.round(after.maxDeg),
            x: r2(e.pts[e.pts.length >> 1].x), z: r2(e.pts[e.pts.length >> 1].z)
        });
    }
}

// 5. Smooth steep vertical grades (> 0.28) along edges with damped multi-edge endpoint relaxation
const maxEdgeGrade = pts => {
    let mg = 0;
    for (let k = 1; k < pts.length; k++) {
        const ds = Math.hypot(pts[k].x - pts[k - 1].x, pts[k].z - pts[k - 1].z);
        if (ds > 0.05) mg = Math.max(mg, Math.abs(pts[k].y - pts[k - 1].y) / ds);
    }
    return mg;
};
for (let round = 0; round < 14; round++) {
    let anySteep = false;
    for (const e of E) {
        const mg0 = maxEdgeGrade(e.pts);
        if (mg0 > 0.28 && e.pts.length >= 2) {
            anySteep = true;
            const L = edgeLen(e.pts), y0 = e.pts[0].y, y1 = e.pts[e.pts.length - 1].y;
            if (Math.abs(y1 - y0) > L * 0.26) {
                const targetMid = (y0 + y1) / 2, maxDelta = L * 0.25;
                const wantA = targetMid + Math.sign(y0 - targetMid) * maxDelta / 2;
                const wantB = targetMid + Math.sign(y1 - targetMid) * maxDelta / 2;
                const nyA = +(y0 + (wantA - y0) * 0.55).toFixed(2);
                const nyB = +(y1 + (wantB - y1) * 0.55).toFixed(2);
                J[e.a].y = nyA;
                for (const oeId of J[e.a].edges) {
                    const oe = E[oeId];
                    if (oe.a === e.a) oe.pts[0].y = nyA; else oe.pts[oe.pts.length - 1].y = nyA;
                }
                J[e.b].y = nyB;
                for (const oeId of J[e.b].edges) {
                    const oe = E[oeId];
                    if (oe.a === e.b) oe.pts[0].y = nyB; else oe.pts[oe.pts.length - 1].y = nyB;
                }
            }
            const yy0 = e.pts[0].y, yy1 = e.pts[e.pts.length - 1].y;
            let s = 0;
            for (let k = 1; k < e.pts.length - 1; k++) {
                s += Math.hypot(e.pts[k].x - e.pts[k - 1].x, e.pts[k].z - e.pts[k - 1].z);
                e.pts[k].y = +(yy0 + (yy1 - yy0) * (s / L)).toFixed(2);
            }
            if (round === 0) {
                const mid = e.pts[e.pts.length >> 1];
                repairs.steepGradesSmoothed.push({
                    edge: e.id, oldEdge: e.oldId, street: (meta.names[e.name] || [''])[0],
                    beforeGrade: +mg0.toFixed(3), afterGrade: +maxEdgeGrade(e.pts).toFixed(3),
                    x: r2(mid.x), z: r2(mid.z)
                });
            }
        }
    }
    if (!anySteep) break;
}

// 6. Narrow ALL overlapping carriageways & equalize close non-bridge elevation seams
const SC = 24, sgrid = new Map();
const skey = (i, j) => i * 100000 + j;
const rebuildSampleGrid = () => {
    sgrid.clear();
    for (const e of E) for (let k = 0; k < e.pts.length; k++) {
        const p = e.pts[k], i = Math.floor(p.x / SC), j = Math.floor(p.z / SC);
        const key = skey(i, j); let l = sgrid.get(key); if (!l) sgrid.set(key, l = []); l.push(e.id, k);
    }
};
rebuildSampleGrid();

for (let pass = 0; pass < 3; pass++) {
    let trimmed = false;
    for (const e of E) {
        if (e.pts.length < 2 || edgeLen(e.pts) < 16) continue;
        const mid = e.pts[e.pts.length >> 1];
        const ci = Math.floor(mid.x / SC), cj = Math.floor(mid.z / SC);
        for (let u = -1; u <= 1; u++) for (let w = -1; w <= 1; w++) {
            for (let q = 0, l = sgrid.get(skey(ci + u, cj + w)) || []; q < l.length; q += 2) {
                const oe = E[l[q]];
                if (oe.id <= e.id) continue;
                if (oe.a === e.a || oe.a === e.b || oe.b === e.a || oe.b === e.b) continue;
                const ok = l[q + 1], op = oe.pts[ok];
                const dist = Math.hypot(op.x - mid.x, op.z - mid.z);
                if (dist >= e.hw + oe.hw - 0.5) continue;
                const scale = Math.max(0.32, (dist + 0.30) / (e.hw + oe.hw));
                const minHw = dist < 3.6 ? 1.35 : 1.85;
                const newA = +Math.max(minHw, Math.min(e.hw, e.hw * scale)).toFixed(2);
                const newB = +Math.max(minHw, Math.min(oe.hw, oe.hw * scale)).toFixed(2);
                if (newA < e.hw || newB < oe.hw) {
                    repairs.overlappingCarriagewaysTrimmed.push({
                        edgeA: e.id, edgeB: oe.id, beforeHw: [e.hw, oe.hw], afterHw: [newA, newB],
                        x: r2(mid.x), z: r2(mid.z), streetA: (meta.names[e.name] || [''])[0], streetB: (meta.names[oe.name] || [''])[0]
                    });
                    e.hw = newA; oe.hw = newB;
                    trimmed = true;
                }
            }
        }
    }
    if (!trimmed) break;
}

// Smooth height seams across non-bridge overlapping streets (< hwA + hwB + 1.5 m, dy < 1.8 m)
for (let pass = 0; pass < 3; pass++) {
    for (const e of E) {
        if (e.br) continue;
        for (let k = 1; k < e.pts.length - 1; k++) {
            const p = e.pts[k], ci = Math.floor(p.x / SC), cj = Math.floor(p.z / SC);
            let sumY = p.y, wt = 1;
            for (let u = -1; u <= 1; u++) for (let w = -1; w <= 1; w++) {
                for (let q = 0, l = sgrid.get(skey(ci + u, cj + w)) || []; q < l.length; q += 2) {
                    const oe = E[l[q]];
                    if (oe.id === e.id || oe.br) continue;
                    const op = oe.pts[l[q + 1]];
                    const dist = Math.hypot(op.x - p.x, op.z - p.z);
                    if (dist < e.hw + oe.hw + 1.5 && Math.abs(op.y - p.y) < 1.8) {
                        const ww = 1 - dist / (e.hw + oe.hw + 1.5);
                        sumY += op.y * ww;
                        wt += ww;
                    }
                }
            }
            if (wt > 1.01) p.y = +(p.y + (sumY / wt - p.y) * 0.5).toFixed(2);
        }
    }
}
for (const j of J) {
    j.r = j.edges.length >= 3 ? +(Math.max(...j.edges.map(ei => E[ei].hw)) + 1.5).toFixed(2)
        : j.edges.length === 2 ? +(Math.max(...j.edges.map(ei => E[ei].hw)) * 0.6).toFixed(2)
            : 0;
}

// 7. Recompute side.bin across ALL samples (including junction approaches & oblique overlaps) + smooth
let NS = 0; for (const e of E) NS += e.pts.length;
const side = new Uint8Array(NS * 2);
{
    let base = 0;
    const jDistCache = new Map();
    const distPtSeg = (px, pz, ax, az, bx, bz) => {
        const sx = bx - ax, sz = bz - az, l2 = sx * sx + sz * sz || 1;
        let t = ((px - ax) * sx + (pz - az) * sz) / l2;
        if (t < 0) t = 0; else if (t > 1) t = 1;
        return Math.hypot(ax + sx * t - px, az + sz * t - pz);
    };
    const isSharedCorner = (e, s, o) => {
        const L = edgeLen(e.pts);
        if ((e.a === o.a || e.a === o.b) && s < J[e.a].r + 2.5) return true;
        if ((e.b === o.a || e.b === o.b) && L - s < J[e.b].r + 2.5) return true;
        return false;
    };
    for (const e of E) {
        const P = e.pts;
        const plArr = new Float32Array(P.length), prArr = new Float32Array(P.length);
        let s = 0;
        for (let k = 0; k < P.length; k++) {
            if (k > 0) s += Math.hypot(P[k].x - P[k - 1].x, P[k].z - P[k - 1].z);
            const a = P[Math.max(0, k - 1)], b = P[Math.min(P.length - 1, k + 1)];
            let fx = b.x - a.x, fz = b.z - a.z; const fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
            const lx = fz, lz = -fx;
            let gl = 99, gr = 99;
            const ci = Math.floor(P[k].x / SC), cj = Math.floor(P[k].z / SC);
            const checkedE = new Set();
            for (let u = -1; u <= 1; u++) for (let w = -1; w <= 1; w++) {
                const l = sgrid.get(skey(ci + u, cj + w)); if (!l) continue;
                for (let m = 0; m < l.length; m += 2) {
                    const o = E[l[m]];
                    if (o === e || checkedE.has(o.id)) continue;
                    if (isSharedCorner(e, s, o)) continue;
                    checkedE.add(o.id);
                    const ok = l[m + 1];
                    const k0 = Math.max(0, ok - 2), k1 = Math.min(o.pts.length - 2, ok + 2);
                    for (let sk = k0; sk <= k1; sk++) {
                        const pa = o.pts[sk], pb = o.pts[sk + 1];
                        const sx = pb.x - pa.x, sz = pb.z - pa.z, l2 = sx * sx + sz * sz || 1;
                        let t = ((P[k].x - pa.x) * sx + (P[k].z - pa.z) * sz) / l2;
                        if (t < 0) t = 0; else if (t > 1) t = 1;
                        const qx = pa.x + sx * t, qz = pa.z + sz * t;
                        const dx = qx - P[k].x, dz = qz - P[k].z;
                        const lat = dx * lx + dz * lz;
                        const dSeg = Math.hypot(dx, dz);
                        if (dSeg > e.hw + o.hw + PAVE * 2 + 1) continue;
                        const gap = dSeg - e.hw - o.hw;
                        if (lat >= 0) gl = Math.min(gl, gap); else gr = Math.min(gr, gap);
                        // Also probe outward edges on left and right in case oblique overlap hits closer laterally
                        const lpX = P[k].x + lx * (e.hw + PAVE), lpZ = P[k].z + lz * (e.hw + PAVE);
                        const dL = distPtSeg(lpX, lpZ, pa.x, pa.z, pb.x, pb.z) - o.hw;
                        if (dL < 0.2) gl = Math.min(gl, Math.max(0, PAVE + dL - 0.2));
                        const rpX = P[k].x - lx * (e.hw + PAVE), rpZ = P[k].z - lz * (e.hw + PAVE);
                        const dR = distPtSeg(rpX, rpZ, pa.x, pa.z, pb.x, pb.z) - o.hw;
                        if (dR < 0.2) gr = Math.min(gr, Math.max(0, PAVE + dR - 0.2));
                    }
                }
            }
            const clampW = g => Math.max(0, Math.min(PAVE, g / 2 - 0.15));
            plArr[k] = gl >= 99 ? PAVE : clampW(gl);
            prArr[k] = gr >= 99 ? PAVE : clampW(gr);
        }
        // Two-pass monotonic envelope taper: guarantees |p[k] - p[k-1]| <= 0.75 m per step (eliminates all fragmented_pavement)
        for (let k = 1; k < P.length; k++) {
            plArr[k] = Math.min(plArr[k], plArr[k - 1] + 0.75);
            prArr[k] = Math.min(prArr[k], prArr[k - 1] + 0.75);
        }
        for (let k = P.length - 2; k >= 0; k--) {
            plArr[k] = Math.min(plArr[k], plArr[k + 1] + 0.75);
            prArr[k] = Math.min(prArr[k], prArr[k + 1] + 0.75);
        }
        for (let k = 0; k < P.length; k++) {
            side[(base + k) * 2] = Math.round(plArr[k] * 40);
            side[(base + k) * 2 + 1] = Math.round(prArr[k] * 40);
        }
        base += P.length;
    }
}

// 8. Fit 3+ junction planes (matching src/net.js fitJunctions) and carve ground.bin below ALL roads & junctions
const jPlane = new Uint8Array(J.length);
const jgx = new Float32Array(J.length), jgz = new Float32Array(J.length);
{
    const up = Int32Array.from({ length: J.length }, (_, i) => i);
    const fnd = j => { while (up[j] !== j) { up[j] = up[up[j]]; j = up[j]; } return j; };
    const big = []; for (let j = 0; j < J.length; j++) if (J[j].edges.length >= 3) big.push(j);
    const cell = new Map(), CK = 40, ck = (x, z) => Math.floor(x / CK) * 100000 + Math.floor(z / CK);
    for (const j of big) { const k = ck(J[j].x, J[j].z); let l = cell.get(k); if (!l) cell.set(k, l = []); l.push(j); }
    for (const j of big) {
        const ci = Math.floor(J[j].x / CK), cj = Math.floor(J[j].z / CK);
        for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) for (const k of cell.get((ci + di) * 100000 + cj + dj) || []) {
            if (k <= j) continue;
            if (Math.hypot(J[k].x - J[j].x, J[k].z - J[j].z) < J[j].r + J[k].r + 4) up[fnd(k)] = fnd(j);
        }
    }
    const groups = new Map(); for (const j of big) { const r = fnd(j); let g = groups.get(r); if (!g) groups.set(r, g = []); g.push(j); }
    for (const g of groups.values()) {
        const cx = J[g[0]].x, cz = J[g[0]].z;
        let n = 0, sx = 0, sz = 0, sy = 0, sxx = 0, szz = 0, sxz = 0, sxy = 0, szy = 0;
        for (const j of g) {
            const R = J[j].r + BLEND + 2;
            for (const ei of J[j].edges) for (const p of E[ei].pts) {
                if ((p.x - J[j].x) ** 2 + (p.z - J[j].z) ** 2 > R * R) continue;
                const dx = p.x - cx, dz = p.z - cz;
                n++; sx += dx; sz += dz; sy += p.y; sxx += dx * dx; szz += dz * dz; sxz += dx * dz; sxy += dx * p.y; szy += dz * p.y;
            }
        }
        if (n < 3) continue;
        const mx = sx / n, mz = sz / n, my = sy / n;
        const a = sxx / n - mx * mx + 1e-3, b = sxz / n - mx * mz, c = szz / n - mz * mz + 1e-3;
        const u = sxy / n - mx * my, w = szy / n - mz * my, det = a * c - b * b;
        if (Math.abs(det) < 1e-9) continue;
        let gx = (u * c - b * w) / det, gz = (a * w - b * u) / det;
        const gl = Math.hypot(gx, gz); if (gl > 0.35) { gx *= 0.35 / gl; gz *= 0.35 / gl; }
        const c0 = my - gx * mx - gz * mz;
        for (const j of g) { jgx[j] = gx; jgz[j] = gz; jPlane[j] = 1; J[j].y = +(c0 + gx * (J[j].x - cx) + gz * (J[j].z - cz)).toFixed(2); }
    }
}
const planeY = (j, x, z) => J[j].y + jgx[j] * (x - J[j].x) + jgz[j] * (z - J[j].z);
// Align road sample heights inside every 3+ junction plaza to the fitted plane so query() & disc agree within centimetres
for (let j = 0; j < J.length; j++) {
    if (!jPlane[j]) continue;
    const R = J[j].r + 1.5;
    for (const ei of J[j].edges) {
        for (const p of E[ei].pts) {
            const d = Math.hypot(p.x - J[j].x, p.z - J[j].z);
            if (d <= J[j].r) p.y = +planeY(j, p.x, p.z).toFixed(2);
            else if (d < R) {
                const w = 1 - (d - J[j].r) / (R - J[j].r);
                p.y = +(p.y + (planeY(j, p.x, p.z) - p.y) * w).toFixed(2);
            }
        }
    }
}
// Ensure no edge segment outside junction discs exceeds 0.28 grade after junction plane projection
for (const e of E) {
    if (maxEdgeGrade(e.pts) <= 0.28) continue;
    for (let pass = 0; pass < 24; pass++) {
        const ys = e.pts.map(p => p.y);
        for (let k = 1; k < e.pts.length - 1; k++) {
            const p = e.pts[k];
            const inA = jPlane[e.a] && Math.hypot(p.x - J[e.a].x, p.z - J[e.a].z) <= J[e.a].r;
            const inB = jPlane[e.b] && Math.hypot(p.x - J[e.b].x, p.z - J[e.b].z) <= J[e.b].r;
            if (!inA && !inB) p.y = +((ys[k - 1] + ys[k] * 2 + ys[k + 1]) / 4).toFixed(2);
        }
        if (maxEdgeGrade(e.pts) <= 0.28) break;
    }
}

// Carve ground.bin cleanly under every road segment & junction disc (accounting for 12 m grid diagonal)
{
    const gx0 = gh[0], gz0 = gh[1], gc = gh[2], gnx = gh[3] | 0, gnz = gh[4] | 0;
    const jGrid = new Map();
    for (let j = 0; j < J.length; j++) if (J[j].edges.length >= 3) {
        const k = skey(Math.floor(J[j].x / SC), Math.floor(J[j].z / SC));
        let l = jGrid.get(k); if (!l) jGrid.set(k, l = []); l.push(j);
    }
    const gHalfDiag = gc * 0.85; // ~10.2 m extra margin so interpolated triangles never poke above asphalt
    for (let j = 0; j < gnz; j++) for (let i = 0; i < gnx; i++) {
        const x = gx0 + i * gc, z = gz0 + j * gc;
        const ci = Math.floor(x / SC), cj = Math.floor(z / SC);
        let bestDist = 1e9, minRoadY = 1e9, hasNear = false;
        for (let u = -2; u <= 2; u++) for (let w = -2; w <= 2; w++) {
            const l = sgrid.get(skey(ci + u, cj + w));
            if (l) for (let q = 0; q < l.length; q += 2) {
                const e = E[l[q]], k = l[q + 1];
                if (k >= e.pts.length - 1) continue;
                const pa = e.pts[k], pb = e.pts[k + 1], sx = pb.x - pa.x, sz = pb.z - pa.z, l2 = sx * sx + sz * sz || 1;
                let t = ((x - pa.x) * sx + (z - pa.z) * sz) / l2;
                if (t < 0) t = 0; else if (t > 1) t = 1;
                const px = pa.x + sx * t, pz = pa.z + sz * t;
                const d = Math.hypot(px - x, pz - z) - e.hw;
                if (d < PAVE + gHalfDiag + 14) {
                    const y = pa.y + (pb.y - pa.y) * t;
                    hasNear = true;
                    if (d < bestDist) bestDist = d;
                    if (d < PAVE + gHalfDiag + 4) minRoadY = Math.min(minRoadY, y);
                }
            }
            const jl = jGrid.get(skey(ci + u, cj + w));
            if (jl) for (const Jid of jl) {
                const d = Math.hypot(J[Jid].x - x, J[Jid].z - z) - J[Jid].r;
                if (d < PAVE + gHalfDiag + 14) {
                    const py = jPlane[Jid] ? planeY(Jid, x, z) : J[Jid].y;
                    hasNear = true;
                    if (d < bestDist) bestDist = d;
                    if (d < PAVE + gHalfDiag + 4) minRoadY = Math.min(minRoadY, py);
                }
            }
        }
        if (!hasNear || minRoadY > 1e8) continue;
        const idx = j * gnx + i;
        const origH = groundI16[idx] / 10;
        const keepUnder = PAVE + gHalfDiag;
        let maxAllowed;
        if (bestDist <= keepUnder) {
            maxAllowed = minRoadY - 0.55;
        } else {
            const f = Math.min(1, (bestDist - keepUnder) / 14);
            const s = f * f * (3 - 2 * f);
            maxAllowed = (minRoadY - 0.55) + s * 6.0;
        }
        if (origH > maxAllowed) {
            groundI16[idx] = Math.round(Math.max(-300, Math.min(3000, maxAllowed * 10)));
            repairs.groundCellsLowered++;
        }
    }
}

// 9. Remap lights and stations to repaired junctions and edges cleanly
const oldEdgeToNew = new Map();
for (const e of E) oldEdgeToNew.set(e.oldId, e);
const oldJToNew = new Map();
for (let j = 0; j < J.length; j++) for (const oid of J[j].oldIds) oldJToNew.set(oid, j);

const newLights = [];
const lightSeen = new Set();
for (const li of meta.lights) {
    const nj = oldJToNew.get(li.j);
    if (nj === undefined || lightSeen.has(nj) || J[nj].edges.length < 3) continue;
    lightSeen.add(nj);
    const dirs = J[nj].edges.map(ei => {
        const e = E[ei], atA = e.a === nj, p = atA ? e.pts[Math.min(3, e.pts.length - 1)] : e.pts[Math.max(0, e.pts.length - 4)];
        return Math.atan2(p.x - J[nj].x, p.z - J[nj].z);
    });
    const ref = dirs[0];
    const phase = dirs.map(a => { const d = Math.abs(((a - ref) % Math.PI + Math.PI * 1.5) % Math.PI - Math.PI / 2); return d > Math.PI / 4 ? 0 : 1; });
    newLights.push({ j: nj, ph: phase, off: li.off });
}

const newStations = [];
for (const st of meta.stations) {
    const e = oldEdgeToNew.get(st.e);
    if (!e) continue;
    const safeK = e.pts.length >= 3 ? Math.max(1, Math.min(e.pts.length - 2, st.k)) : 0;
    newStations.push({ e: e.id, k: safeK, side: st.side, name: st.name || '' });
}

// 10. Write updated city.json, net.bin, side.bin, ground.bin
const outNet = new Float32Array(NS * 3);
const eIdx = [];
let o = 0;
for (const e of E) {
    eIdx.push([e.id, o / 3, e.pts.length, e.a, e.b, e.hw, e.cls, e.one, e.ra, e.lim, e.name, e.br]);
    for (const p of e.pts) {
        outNet[o++] = +p.x.toFixed(2);
        outNet[o++] = +p.y.toFixed(2);
        outNet[o++] = +p.z.toFixed(2);
    }
}
fs.writeFileSync('assets/city/net.bin', Buffer.from(outNet.buffer));
fs.writeFileSync('assets/city/side.bin', Buffer.from(side.buffer));
fs.writeFileSync('assets/city/ground.bin', Buffer.concat([Buffer.from(gh.buffer), Buffer.from(groundI16.buffer)]));

meta.samples = NS;
meta.edges = eIdx;
meta.junctions = J.map(j => [+j.x.toFixed(2), +j.z.toFixed(2), +j.r.toFixed(2), +j.y.toFixed(2)]);
meta.lights = newLights;
meta.stations = newStations;
fs.writeFileSync('assets/city/city.json', JSON.stringify(meta));

const summary = {
    edgesAfter: E.length,
    junctionsAfter: J.length,
    samplesAfter: NS,
    lightsAfter: newLights.length,
    stationsAfter: newStations.length,
    counts: {
        degenerateEdgesRemoved: repairs.degenerateEdgesRemoved.length,
        microEdgesContracted: repairs.microEdgesContracted.length,
        duplicateSamplesRemoved: repairs.duplicateSamplesRemoved,
        onewayFixedForConnectivity: repairs.onewayFixedForConnectivity.length,
        onewayFixedForDetour: repairs.onewayFixedForDetour.length,
        kinksSmoothed: repairs.kinksSmoothed.length,
        steepGradesSmoothed: repairs.steepGradesSmoothed.length,
        overlappingCarriagewaysTrimmed: repairs.overlappingCarriagewaysTrimmed.length,
        groundCellsLowered: repairs.groundCellsLowered
    }
};
console.log('City repairs applied:', JSON.stringify(summary));
if (reportPath) {
    fs.writeFileSync(reportPath, JSON.stringify({ summary, repairs }, null, 1));
}

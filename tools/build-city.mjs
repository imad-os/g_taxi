// Builds the drivable city of Tangier TAXI from real data, as ONE connected road network (not a route):
//  - roads: OpenStreetMap (osm/roads.json, ODbL, (c) OpenStreetMap contributors): every main road and every named street
//    in the city box, split at junctions, the largest connected part kept (no island streets)
//  - heights: AWS Terrain Tiles (raw/terrain.bin, core/tools/terrain.mjs), smoothed into one height field, so two roads
//    always meet at the same height at a junction
//  - buildings: OpenStreetMap footprints + blocks filled in along the streets where OSM has none
//  - traffic lights (big junctions, not roundabouts), fuel stations (spread along main roads)
// Output: assets/city/city.json (index), net.bin (road samples), ground.bin (terrain grid), bld.bin (buildings).
// `node tools/build-city.mjs --plot out.png` also draws the network for checking.
import fs from 'node:fs';
import { PNG } from 'pngjs';
import { toXY } from '../core/tools/geo.mjs';

export const BOX = { x0: -2200, x1: 7200, z0: -3600, z1: 2200 };   // metres in the game frame (x east, z south)
const STEP = 4;               // sample spacing along a road (m)
const PAVE = 3.5;             // pavement width
const GCELL = 12;             // ground grid cell (m)
const KEEP = { trunk: 1, trunk_link: 1, primary: 1, primary_link: 1, secondary: 1, secondary_link: 1, tertiary: 1, tertiary_link: 1, unclassified: 1, residential: 1 };
const CLS = { trunk: 0, trunk_link: 0, primary: 1, primary_link: 1, secondary: 2, secondary_link: 2, tertiary: 3, tertiary_link: 3, unclassified: 4, residential: 5 };
const HALF = [7.5, 6.5, 5.6, 5, 4.2, 4];            // half width of the asphalt by class (two-way)
const LIMIT = [80, 60, 60, 50, 40, 40];             // speed limit km/h by class (Moroccan town limits; trunk roads 80)

const roads = JSON.parse(fs.readFileSync('osm/roads.json', 'utf8'));
const tmeta = JSON.parse(fs.readFileSync('raw/terrain.json', 'utf8'));
const tgrid = new Float32Array(fs.readFileSync('raw/terrain.bin').buffer.slice(0));
const bfile = fs.existsSync('osm/buildings.json') ? JSON.parse(fs.readFileSync('osm/buildings.json', 'utf8')) : { b: [] };
const inBox = (p, m = 0) => p.x > BOX.x0 + m && p.x < BOX.x1 - m && p.z > BOX.z0 + m && p.z < BOX.z1 - m;

function terrain(x, z) {
    const fx = (x - tmeta.x0) / tmeta.step, fz = (z - tmeta.z0) / tmeta.step;
    const i = Math.max(0, Math.min(tmeta.nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(tmeta.nz - 2, Math.floor(fz)));
    const a = Math.max(0, Math.min(1, fx - i)), b = Math.max(0, Math.min(1, fz - j));
    const g = (ii, jj) => tgrid[jj * tmeta.nx + ii];
    return (g(i, j) * (1 - a) + g(i + 1, j) * a) * (1 - b) + (g(i, j + 1) * (1 - a) + g(i + 1, j + 1) * a) * b;
}

// ---- the road height field: terrain blurred (Gaussian ~35 m), the sea raised to 1.2 m; a road's height is this field at
// its centre line, so every road crossing the same point has the same height (junctions are flat and seamless)
const HC = 10, hnx = Math.ceil((BOX.x1 - BOX.x0) / HC) + 1, hnz = Math.ceil((BOX.z1 - BOX.z0) / HC) + 1;
const H = new Float32Array(hnx * hnz);
for (let j = 0; j < hnz; j++) for (let i = 0; i < hnx; i++) H[j * hnx + i] = Math.max(1.2, terrain(BOX.x0 + i * HC, BOX.z0 + j * HC));
function blur(src, r) {
    const k = []; let s = 0; for (let i = -r; i <= r; i++) { const v = Math.exp(-i * i / (2 * (r / 2) ** 2)); k.push(v); s += v; }
    for (let i = 0; i < k.length; i++) k[i] /= s;
    const t = new Float32Array(src.length), o = new Float32Array(src.length);
    for (let j = 0; j < hnz; j++) for (let i = 0; i < hnx; i++) { let a = 0; for (let q = -r; q <= r; q++) a += src[j * hnx + Math.max(0, Math.min(hnx - 1, i + q))] * k[q + r]; t[j * hnx + i] = a; }
    for (let j = 0; j < hnz; j++) for (let i = 0; i < hnx; i++) { let a = 0; for (let q = -r; q <= r; q++) a += t[Math.max(0, Math.min(hnz - 1, j + q)) * hnx + i] * k[q + r]; o[j * hnx + i] = a; }
    return o;
}
const HF = blur(blur(H, 4), 3);
function field(x, z) {
    const fx = (x - BOX.x0) / HC, fz = (z - BOX.z0) / HC;
    const i = Math.max(0, Math.min(hnx - 2, Math.floor(fx))), j = Math.max(0, Math.min(hnz - 2, Math.floor(fz)));
    const a = Math.max(0, Math.min(1, fx - i)), b = Math.max(0, Math.min(1, fz - j));
    const g = (ii, jj) => HF[jj * hnx + ii];
    return (g(i, j) * (1 - a) + g(i + 1, j) * a) * (1 - b) + (g(i, j + 1) * (1 - a) + g(i + 1, j + 1) * a) * b;
}

// ---- graph: OSM nodes (by rounded coordinates) -> edges between junctions
const nodes = new Map();      // key -> { id, x, z, ways: Set, deg }
const ways = [];
for (const w of roads.ways) {
    if (!KEEP[w.h] || w.tu) continue;
    if (w.h === 'residential' && !w.n) continue;            // unnamed lanes: left out (driveways, alleys)
    let run = [];
    const flush = () => { if (run.length > 1) ways.push({ w, keys: run }); run = []; };
    for (let k = 0; k < w.g.length; k += 2) {
        const key = w.g[k].toFixed(5) + ',' + w.g[k + 1].toFixed(5);
        const p = toXY(w.g[k], w.g[k + 1]);
        if (!inBox(p, 30)) { flush(); continue; }
        if (!nodes.has(key)) nodes.set(key, { key, x: p.x, z: p.z, links: new Set(), ways: new Set() });
        run.push(key);
    }
    flush();
}
for (const W of ways) for (let k = 0; k < W.keys.length; k++) {
    const n = nodes.get(W.keys[k]); n.ways.add(W);
    if (k > 0) { n.links.add(W.keys[k - 1]); nodes.get(W.keys[k - 1]).links.add(W.keys[k]); }
}
// a junction: 3+ links, an end, or where two different ways meet
const isJ = n => n.links.size !== 2 || n.ways.size > 1;
let edges = [];
for (const W of ways) {
    let cur = [W.keys[0]];
    for (let k = 1; k < W.keys.length; k++) {
        cur.push(W.keys[k]);
        if (isJ(nodes.get(W.keys[k])) || k === W.keys.length - 1) { if (cur.length > 1) edges.push({ w: W.w, keys: cur }); cur = [W.keys[k]]; }
    }
}
// largest connected part
{
    const adj = new Map();
    for (const e of edges) { const a = e.keys[0], b = e.keys[e.keys.length - 1]; (adj.get(a) || adj.set(a, []).get(a)).push(b); (adj.get(b) || adj.set(b, []).get(b)).push(a); }
    const comp = new Map(); let best = -1, bestN = 0, c = 0;
    for (const k of adj.keys()) {
        if (comp.has(k)) continue;
        const st = [k]; comp.set(k, c); let n = 0;
        while (st.length) { const u = st.pop(); n++; for (const v of adj.get(u)) if (!comp.has(v)) { comp.set(v, c); st.push(v); } }
        if (n > bestN) { bestN = n; best = c; }
        c++;
    }
    edges = edges.filter(e => comp.get(e.keys[0]) === best);
    // dead-end stubs under 30 m: dropped (twice: a stub can hide behind another)
    for (let pass = 0; pass < 2; pass++) {
        const deg = new Map();
        for (const e of edges) for (const k of [e.keys[0], e.keys[e.keys.length - 1]]) deg.set(k, (deg.get(k) || 0) + 1);
        edges = edges.filter(e => {
            const a = e.keys[0], b = e.keys[e.keys.length - 1];
            if (deg.get(a) > 1 && deg.get(b) > 1) return true;
            let L = 0; for (let k = 1; k < e.keys.length; k++) { const p = nodes.get(e.keys[k - 1]), q = nodes.get(e.keys[k]); L += Math.hypot(p.x - q.x, p.z - q.z); }
            return L >= 30;
        });
    }
}
// junction table
const J = new Map();
for (const e of edges) for (const k of [e.keys[0], e.keys[e.keys.length - 1]]) {
    if (!J.has(k)) { const n = nodes.get(k); J.set(k, { id: J.size, x: n.x, z: n.z, edges: [] }); }
}

// ---- polylines: resample 1 m, round the corners (ends fixed), resample STEP
function resample(pts, step) {
    let L = 0; const cum = [0];
    for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z); cum.push(L); }
    const n = Math.max(1, Math.round(L / step)), out = [];
    let j = 0;
    for (let k = 0; k <= n; k++) {
        const s = L * k / n;
        while (j < pts.length - 2 && cum[j + 1] < s) j++;
        const seg = cum[j + 1] - cum[j] || 1, t = Math.max(0, Math.min(1, (s - cum[j]) / seg));
        out.push({ x: pts[j].x + (pts[j + 1].x - pts[j].x) * t, z: pts[j].z + (pts[j + 1].z - pts[j].z) * t });
    }
    return out;
}
function smooth(p, r, it) {
    for (let k = 0; k < it; k++) {
        const q = p.map(o => ({ ...o }));
        for (let i = 1; i < p.length - 1; i++) {
            const rr = Math.min(r, i, p.length - 1 - i);   // shrinks toward the ends: the end points stay on the junction
            let sx = 0, sz = 0, n = 0;
            for (let j = -rr; j <= rr; j++) { sx += p[i + j].x; sz += p[i + j].z; n++; }
            q[i].x = sx / n; q[i].z = sz / n;
        }
        p = q;
    }
    return p;
}
const names = [''], nameIdx = new Map([['', 0]]);
const nameOf = (fr, ar) => { const key = fr + '|' + (ar || ''); if (!nameIdx.has(key)) { nameIdx.set(key, names.length); names.push([fr, ar || '']); } return nameIdx.get(key); };
const E = [];
for (const e of edges) {
    const cls = CLS[e.w.h];
    let pts = e.keys.map(k => { const n = nodes.get(k); return { x: n.x, z: n.z }; });
    pts = resample(pts, 1);
    pts = smooth(pts, 5, 4);
    pts = resample(pts, STEP);
    if (pts.length < 2) continue;
    const lanes = e.w.l || (cls <= 1 ? 2 : 1) * (e.w.o ? 1 : 2);
    let hw = HALF[cls];
    if (e.w.o) hw = Math.max(3.6, Math.min(hw, lanes * 1.8 + 0.6));           // one-way: as wide as its lanes
    if (e.w.l >= 4) hw = Math.max(hw, e.w.l * 1.75);
    const ja = J.get(e.keys[0]), jb = J.get(e.keys[e.keys.length - 1]);
    const id = E.length;
    ja.edges.push(id); jb.edges.push(id);
    E.push({ id, cls, hw: +hw.toFixed(2), one: e.w.o ? 1 : 0, ra: e.w.j === 'roundabout' || e.w.j === 'circular' ? 1 : 0, br: e.w.br ? 1 : 0,
        name: e.w.n ? nameOf(e.w.n, e.w.nar) : 0, lim: e.w.j === 'roundabout' ? 40 : LIMIT[cls], a: ja.id, b: jb.id, pts });
}
const JL = [...J.values()];
// junction radius: the widest road meeting there (flat, no kerb, plain asphalt)
for (const j of JL) { j.r = j.edges.length >= 3 ? Math.max(...j.edges.map(i => E[i].hw)) + 1.5 : j.edges.length === 2 ? Math.max(...j.edges.map(i => E[i].hw)) * 0.6 : 0; }

// heights
for (const e of E) for (const p of e.pts) p.y = field(p.x, p.z);

// ---- spatial index of road samples (for the builder's own checks)
const SC = 24, sgrid = new Map();
const skey = (i, j) => i * 100000 + j;
for (const e of E) for (let k = 0; k < e.pts.length; k++) {
    const p = e.pts[k], i = Math.floor(p.x / SC), j = Math.floor(p.z / SC);
    const key = skey(i, j); let l = sgrid.get(key); if (!l) sgrid.set(key, l = []); l.push(e.id, k);
}
// the nearest road surface edge: distance beyond the asphalt edge (negative = on the road) and that road's height
function nearRoad(x, z, R = 2) {
    let best = 1e9, by = 0, bc = 0;
    const ci = Math.floor(x / SC), cj = Math.floor(z / SC);
    for (let a = -R; a <= R; a++) for (let b = -R; b <= R; b++) {
        const l = sgrid.get(skey(ci + a, cj + b)); if (!l) continue;
        for (let q = 0; q < l.length; q += 2) {
            const e = E[l[q]], p = e.pts[l[q + 1]];
            const d = Math.hypot(p.x - x, p.z - z) - e.hw;
            if (d < best) { best = d; by = p.y; bc = e.cls; }
        }
    }
    return { d: best, y: by, cls: bc };
}

// ---- ground grid: real terrain, carved under and beside the roads (below the road surface, blending back over 30 m)
const gnx = Math.ceil((BOX.x1 - BOX.x0) / GCELL) + 1, gnz = Math.ceil((BOX.z1 - BOX.z0) / GCELL) + 1;
const ground = new Int16Array(gnx * gnz);
const groundF = new Float32Array(gnx * gnz);
for (let j = 0; j < gnz; j++) for (let i = 0; i < gnx; i++) {
    const x = BOX.x0 + i * GCELL, z = BOX.z0 + j * GCELL;
    const t = terrain(x, z);
    let h = t < 0.6 ? -2.5 : t;
    const r = nearRoad(x, z, 2);
    if (r.d < 48) {
        const flat = r.y - 0.35;
        const k = r.d < PAVE + 3 ? 0 : Math.min(1, (r.d - PAVE - 3) / 30);
        const s = k * k * (3 - 2 * k);
        h = t < 0.6 && r.d > PAVE + 6 ? h : flat + (Math.max(h, flat - 6) - flat) * s;
        if (r.d < PAVE + 3) h = Math.min(h, flat);
    }
    groundF[j * gnx + i] = h;
    ground[j * gnx + i] = Math.round(Math.max(-300, Math.min(3000, h * 10)));
}
const groundAt = (x, z) => {
    const fx = (x - BOX.x0) / GCELL, fz = (z - BOX.z0) / GCELL;
    const i = Math.max(0, Math.min(gnx - 2, Math.floor(fx))), j = Math.max(0, Math.min(gnz - 2, Math.floor(fz)));
    const a = Math.max(0, Math.min(1, fx - i)), b = Math.max(0, Math.min(1, fz - j));
    const g = (ii, jj) => groundF[jj * gnx + ii];
    return (g(i, j) * (1 - a) + g(i + 1, j) * a) * (1 - b) + (g(i, j + 1) * (1 - a) + g(i + 1, j + 1) * a) * b;
};

// ---- buildings: OSM footprints first, then blocks along the streets where there is room
const OC = 3, occ = new Set();
const okey = (x, z) => Math.floor(x / OC) * 100000 + Math.floor(z / OC);
function clearOf(poly) {   // every corner + the middle off the roads (asphalt + pavement + 0.8 m) and on land
    let cx = 0, cz = 0; for (const p of poly) { cx += p[0]; cz += p[1]; } cx /= poly.length; cz /= poly.length;
    const test = poly.concat([[cx, cz]]);
    for (let k = 0; k < poly.length; k++) { const a = poly[k], b = poly[(k + 1) % poly.length]; test.push([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]); }
    for (const p of test) {
        if (!inBox({ x: p[0], z: p[1] }, 40)) return false;
        if (nearRoad(p[0], p[1], 1).d < PAVE + 0.8) return false;
        if (terrain(p[0], p[1]) < 1.5) return false;
    }
    return true;
}
function occupy(poly, mark) {
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (const p of poly) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[1]); z1 = Math.max(z1, p[1]); }
    for (let x = x0; x <= x1 + OC; x += OC) for (let z = z0; z <= z1 + OC; z += OC) {
        const k = okey(Math.min(x, x1), Math.min(z, z1));
        if (!mark && occ.has(k)) return false;
        if (mark) occ.add(k);
    }
    return true;
}
const blds = [];   // { p: [[x,z]...], h, y }
function baseOf(poly) { let m = 1e9; for (const p of poly) m = Math.min(m, groundAt(p[0], p[1])); return m; }
for (const b of bfile.b) {
    const poly = [];
    for (let k = 0; k < b.g.length; k += 2) { const p = toXY(b.g[k], b.g[k + 1]); poly.push([p.x, p.z]); }
    if (poly.length > 3 && Math.hypot(poly[0][0] - poly[poly.length - 1][0], poly[0][1] - poly[poly.length - 1][1]) < 0.1) poly.pop();
    if (poly.length < 3 || poly.length > 24 || !clearOf(poly)) continue;
    let area = 0; for (let k = 0; k < poly.length; k++) { const a = poly[k], c = poly[(k + 1) % poly.length]; area += a[0] * c[1] - c[0] * a[1]; }
    if (Math.abs(area) / 2 < 25) continue;
    let h = b.h || (b.lv ? b.lv * 3.2 + 1 : 0);
    if (!h) h = 7 + (Math.abs(Math.round(poly[0][0] * 13 + poly[0][1] * 7)) % 10);
    occupy(poly, true);
    blds.push({ p: poly, h: Math.min(80, h), y: baseOf(poly) });
}
let seed = 12345; const rnd = () => { seed ^= seed << 13; seed >>>= 0; seed ^= seed >> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; };
for (const e of E) {
    if (e.cls === 0 && !e.name) continue;                       // open trunk roads: no street front
    const P = e.pts; let carry = rnd() * 8;
    for (let k = 1; k < P.length; k++) {
        const a = P[k - 1], b = P[k];
        const L = Math.hypot(b.x - a.x, b.z - a.z); if (L < 0.01) continue;
        const fx = (b.x - a.x) / L, fz = (b.z - a.z) / L, lx = fz, lz = -fx;
        for (carry += L; carry > 0;) {
            const t = 1 - carry / L; carry -= 9 + rnd() * 7;
            if (t < 0) break;
            const ox = a.x + (b.x - a.x) * t, oz = a.z + (b.z - a.z) * t;
            for (const sg of [1, -1]) {
                if (rnd() < 0.12) continue;                      // a gap now and then (yards, lots)
                const w = 8 + rnd() * 7, dep = 9 + rnd() * 9, set = e.hw + PAVE + 1 + rnd() * 1.5;
                const cx = ox + lx * sg * (set + dep / 2), cz = oz + lz * sg * (set + dep / 2);
                const hwv = w / 2, hd = dep / 2;
                const poly = [[-hwv, -hd], [hwv, -hd], [hwv, hd], [-hwv, hd]].map(([u, v]) => [cx + fx * u + lx * sg * v, cz + fz * u + lz * sg * v]);
                if (!occupy(poly, false) || !clearOf(poly)) continue;
                occupy(poly, true);
                const town = Math.hypot(cx - 2500, cz + 1700) < 2200;
                const floors = e.cls <= 2 ? 3 + Math.floor(rnd() * (town ? 6 : 3)) : 1 + Math.floor(rnd() * (town ? 4 : 3));
                blds.push({ p: poly, h: floors * 3.1 + 1.2, y: baseOf(poly) });
            }
        }
    }
}

// ---- traffic lights: junctions of 3+ roads where two are tertiary or bigger, not on roundabouts; two phases by direction
const lights = [];
for (const j of JL) {
    if (j.edges.length < 3) continue;
    const es = j.edges.map(i => E[i]);
    if (es.some(e => e.ra) || es.filter(e => e.cls <= 2).length < 2 || es.filter(e => e.cls <= 3).length < 3) continue;
    if (lights.some(l => Math.hypot(JL[l.j].x - j.x, JL[l.j].z - j.z) < 160)) continue;   // close pairs: one set of lights
    const dirs = j.edges.map(i => {   // direction from the junction along the edge
        const e = E[i], P = e.pts, atA = e.a === j.id, p = atA ? P[Math.min(3, P.length - 1)] : P[Math.max(0, P.length - 4)];
        return Math.atan2(p.x - j.x, p.z - j.z);
    });
    const ref = dirs[0];
    const phase = dirs.map(a => { let d = Math.abs(((a - ref) % Math.PI + Math.PI * 1.5) % Math.PI - Math.PI / 2); return d > Math.PI / 4 ? 0 : 1; });
    lights.push({ j: j.id, ph: phase, off: Math.floor(rnd() * 40) });
}

// ---- fuel stations: along main roads, spread over the city (farthest-point picking), on the right of the way
const cand = [];
for (const e of E) if (e.cls <= 2 && !e.ra && e.pts.length > 30 && Math.hypot(e.pts[e.pts.length >> 1].x - 2300, e.pts[e.pts.length >> 1].z + 1300) < 3300) cand.push({ e, k: e.pts.length >> 1 });
const st = [];
const start = cand.reduce((b, c) => Math.hypot(c.e.pts[c.k].x - 2500, c.e.pts[c.k].z + 1700) < Math.hypot(b.e.pts[b.k].x - 2500, b.e.pts[b.k].z + 1700) ? c : b);
st.push(start);
while (st.length < 8) {
    let best = null, bd = -1;
    for (const c of cand) { const p = c.e.pts[c.k]; let d = 1e9; for (const s of st) d = Math.min(d, Math.hypot(p.x - s.e.pts[s.k].x, p.z - s.e.pts[s.k].z)); if (d > bd) { bd = d; best = c; } }
    st.push(best);
}
const stations = st.map(s => ({ e: s.e.id, k: s.k, side: -1 }));
for (let b = blds.length - 1; b >= 0; b--) { const p = blds[b].p[0]; if (st.some(s => Math.hypot(s.e.pts[s.k].x - p[0], s.e.pts[s.k].z - p[1]) < 26)) blds.splice(b, 1); }

// ---- pavement width per side and sample: two streets side by side (a dual carriageway, a parallel lane) share the
// space between them, so no pavement is drawn over the other street's asphalt (0..PAVE m, in 1/40 m steps)
const side = new Uint8Array(NSAMP() * 2);
function NSAMP() { let n = 0; for (const e of E) n += e.pts.length; return n; }
{
    let base = 0;
    const jzone = (e, k) => { const L = (e.pts.length - 1) * STEP, s = k * STEP; return s < JL[e.a].r + 2 || L - s < JL[e.b].r + 2; };
    for (const e of E) {
        const P = e.pts;
        for (let k = 0; k < P.length; k++) {
            const a = P[Math.max(0, k - 1)], b = P[Math.min(P.length - 1, k + 1)];
            let fx = b.x - a.x, fz = b.z - a.z; const fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
            const lx = fz, lz = -fx;
            let gl = 99, gr = 99;
            const ci = Math.floor(P[k].x / SC), cj = Math.floor(P[k].z / SC);
            if (!jzone(e, k)) for (let u = -1; u <= 1; u++) for (let w = -1; w <= 1; w++) {
                const l = sgrid.get(skey(ci + u, cj + w)); if (!l) continue;
                for (let m = 0; m < l.length; m += 2) {
                    const o = E[l[m]]; if (o === e) continue;
                    if (jzone(o, l[m + 1])) continue;
                    const q = o.pts[l[m + 1]], dx = q.x - P[k].x, dz = q.z - P[k].z;
                    if (Math.abs(dx * fx + dz * fz) > 3) continue;
                    const lat = dx * lx + dz * lz, gap = Math.abs(lat) - e.hw - o.hw;
                    if (lat > 0) gl = Math.min(gl, gap); else gr = Math.min(gr, gap);
                }
            }
            const w = g => Math.round(Math.max(0, Math.min(PAVE, g / 2 - 0.1)) * 40);
            side[(base + k) * 2] = gl >= 99 ? PAVE * 40 : w(gl); side[(base + k) * 2 + 1] = gr >= 99 ? PAVE * 40 : w(gr);
        }
        base += P.length;
    }
}

// ---- write
fs.mkdirSync('assets/city', { recursive: true });
let NS = 0; for (const e of E) NS += e.pts.length;
const net = new Float32Array(NS * 3); let o = 0;
const eIdx = [];
for (const e of E) { eIdx.push([e.id, o / 3, e.pts.length, e.a, e.b, e.hw, e.cls, e.one, e.ra, e.lim, e.name, e.br]); for (const p of e.pts) { net[o++] = +p.x.toFixed(2); net[o++] = +p.y.toFixed(2); net[o++] = +p.z.toFixed(2); } }
fs.writeFileSync('assets/city/net.bin', Buffer.from(net.buffer));
fs.writeFileSync('assets/city/side.bin', Buffer.from(side.buffer));
const head = new Float32Array([BOX.x0, BOX.z0, GCELL, gnx, gnz]);
fs.writeFileSync('assets/city/ground.bin', Buffer.concat([Buffer.from(head.buffer), Buffer.from(ground.buffer)]));
// buildings: count, then per building: n, h, y, n x (x, z)   (Float32)
const bf = []; for (const b of blds) { bf.push(b.p.length, +b.h.toFixed(1), +b.y.toFixed(2)); for (const p of b.p) bf.push(+p[0].toFixed(2), +p[1].toFixed(2)); }
fs.writeFileSync('assets/city/bld.bin', Buffer.from(new Float32Array(bf).buffer));
const index = {
    license: 'Roads and building footprints: (c) OpenStreetMap contributors, ODbL 1.0. Heights: AWS Terrain Tiles.',
    box: BOX, step: STEP, pave: PAVE, samples: NS, buildings: blds.length,
    edges: eIdx, junctions: JL.map(j => [+j.x.toFixed(2), +j.z.toFixed(2), +j.r.toFixed(2), +field(j.x, j.z).toFixed(2)]),
    lights, stations, names
};
fs.writeFileSync('assets/city/city.json', JSON.stringify(index));
let km = 0; for (const e of E) km += (e.pts.length - 1) * STEP / 1000;
console.log('edges', E.length, 'junctions', JL.length, 'km', km.toFixed(0), 'samples', NS, 'buildings', blds.length, '(osm', bfile.b.length + ')', 'lights', lights.length, 'stations', stations.length);
for (const f of ['side.bin', 'net.bin', 'ground.bin', 'bld.bin', 'city.json']) console.log(f, (fs.statSync('assets/city/' + f).size / 1024).toFixed(0) + ' KB');

const plotArg = process.argv.indexOf('--plot');
if (plotArg > 0) {
    const W = 1880, Hh = Math.round(W * (BOX.z1 - BOX.z0) / (BOX.x1 - BOX.x0));
    const png = new PNG({ width: W, height: Hh }); png.data.fill(255);
    const sx = W / (BOX.x1 - BOX.x0);
    const put = (x, z, c, r = 0) => { const px = Math.round((x - BOX.x0) * sx), py = Math.round((z - BOX.z0) * sx); for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) { const X = px + a, Y = py + b; if (X < 0 || Y < 0 || X >= W || Y >= Hh) continue; const q = (Y * W + X) * 4; png.data[q] = c[0]; png.data[q + 1] = c[1]; png.data[q + 2] = c[2]; } };
    for (let j = 0; j < gnz; j++) for (let i = 0; i < gnx; i++) { const h = groundF[j * gnx + i]; const c = h < 0 ? [170, 205, 240] : [235 - Math.min(80, h / 2), 235 - Math.min(60, h / 3), 220 - Math.min(80, h / 2)]; put(BOX.x0 + i * GCELL, BOX.z0 + j * GCELL, c, 1); }
    for (const b of blds) put(b.p[0][0], b.p[0][1], [190, 170, 150], 1);
    const COL = [[200, 30, 30], [230, 110, 0], [210, 160, 0], [60, 140, 60], [90, 90, 90], [120, 120, 120]];
    for (const e of E) for (let k = 1; k < e.pts.length; k++) { const a = e.pts[k - 1], b = e.pts[k], L = Math.hypot(b.x - a.x, b.z - a.z); for (let t = 0; t <= L; t += 1.5) put(a.x + (b.x - a.x) * t / L, a.z + (b.z - a.z) * t / L, e.one ? [40, 90, 220] : COL[e.cls], e.cls <= 2 ? 1 : 0); }
    for (const l of lights) put(JL[l.j].x, JL[l.j].z, [255, 0, 200], 3);
    for (const s of stations) { const p = E[s.e].pts[s.k]; put(p.x, p.z, [0, 0, 0], 6); put(p.x, p.z, [0, 220, 120], 4); }
    fs.writeFileSync(process.argv[plotArg + 1], PNG.sync.write(png));
    console.log('plot', process.argv[plotArg + 1]);
}

// The city's road network at run time (data from tools/build-city.mjs): every street is an edge (samples every 4 m)
// between two junctions. It answers the same question as a race Track (core/src/vehicle.js calls `query`): which road
// is under this point, how high is its surface, which way does it face, is it the kerb / pavement. A grid of 16 m cells
// lists the segments near each cell, so a query reads a handful of segments. No allocation in queries.
import { VERSION } from './version.js';

const CELL = 16;
export const PAVE = 3.5;
export const WALL = 3.25;        // invisible wall at the outer edge of the pavement (metres beyond the asphalt)

export class Net {
    static async load(onProgress) {
        const get = (f, bin) => fetch('assets/city/' + f + '?v=' + VERSION).then(r => { if (!r.ok) throw new Error(f + ' ' + r.status); return bin ? r.arrayBuffer() : r.json(); });
        const [meta, net, ground, bld, side] = await Promise.all([get('city.json'), get('net.bin', 1), get('ground.bin', 1), get('bld.bin', 1), get('side.bin', 1)]);
        onProgress && onProgress(1);
        return new Net(meta, net, ground, bld, side);
    }
    constructor(meta, netBuf, groundBuf, bldBuf, sideBuf) {
        this.meta = meta;
        this.box = meta.box;
        const raw = new Float32Array(netBuf), N = this.n = raw.length / 3;
        this.px = new Float32Array(N); this.py = new Float32Array(N); this.pz = new Float32Array(N);
        for (let i = 0; i < N; i++) { this.px[i] = raw[i * 3]; this.py[i] = raw[i * 3 + 1]; this.pz[i] = raw[i * 3 + 2]; }
        // pavement width left / right of each sample (less where another street runs right beside it)
        const sd = new Uint8Array(sideBuf);
        this.pl = new Float32Array(N); this.pr = new Float32Array(N);
        for (let i = 0; i < N; i++) { this.pl[i] = sd[i * 2] / 40; this.pr[i] = sd[i * 2 + 1] / 40; }
        // edges: [id, off, n, a, b, hw, cls, one, ra, lim, name, br]
        const E = meta.edges, NE = this.ne = E.length;
        this.eOff = new Int32Array(NE); this.eN = new Int32Array(NE); this.eA = new Int32Array(NE); this.eB = new Int32Array(NE);
        this.eHw = new Float32Array(NE); this.eCls = new Uint8Array(NE); this.eOne = new Uint8Array(NE); this.eRa = new Uint8Array(NE);
        this.eLim = new Uint8Array(NE); this.eName = new Int32Array(NE); this.eLen = new Float32Array(NE);
        this.sE = new Int32Array(N);          // edge of each sample
        this.sS = new Float32Array(N);        // distance along its edge
        this.tx = new Float32Array(N); this.tz = new Float32Array(N);
        this.sJ = new Int32Array(N).fill(-1); // junction whose flat zone this sample is in
        const J = meta.junctions, NJ = this.nj = J.length;
        this.jx = new Float32Array(NJ); this.jz = new Float32Array(NJ); this.jr = new Float32Array(NJ); this.jy = new Float32Array(NJ);
        this.jEdges = []; for (let j = 0; j < NJ; j++) { this.jx[j] = J[j][0]; this.jz[j] = J[j][1]; this.jr[j] = J[j][2]; this.jy[j] = J[j][3]; this.jEdges.push([]); }
        for (let e = 0; e < NE; e++) {
            const r = E[e];
            this.eOff[e] = r[1]; this.eN[e] = r[2]; this.eA[e] = r[3]; this.eB[e] = r[4]; this.eHw[e] = r[5]; this.eCls[e] = r[6];
            this.eOne[e] = r[7]; this.eRa[e] = r[8]; this.eLim[e] = r[9]; this.eName[e] = r[10];
            this.jEdges[r[3]].push(e); this.jEdges[r[4]].push(e);   // same order as tools/build-city.mjs (light phases index it)
            const o = r[1], n = r[2];
            let s = 0;
            for (let k = 0; k < n; k++) {
                const i = o + k;
                this.sE[i] = e;
                if (k > 0) s += Math.hypot(this.px[i] - this.px[i - 1], this.pz[i] - this.pz[i - 1]);
                this.sS[i] = s;
                const a = k > 0 ? i - 1 : i, b = k < n - 1 ? i + 1 : i;
                let dx = this.px[b] - this.px[a], dz = this.pz[b] - this.pz[a];
                const l = Math.hypot(dx, dz) || 1; this.tx[i] = dx / l; this.tz[i] = dz / l;
            }
            this.eLen[e] = s;
            const ra = this.jr[r[3]], rb = this.jr[r[4]];
            for (let k = 0; k < n; k++) {
                const i = o + k, si = this.sS[i];
                if (si < ra + 2) this.sJ[i] = r[3]; else if (s - si < rb + 2) this.sJ[i] = r[4];
            }
        }
        this.lights = meta.lights; this.stations = meta.stations; this.names = meta.names;
        // light index per junction (-1 = none) and the phase of each edge at it
        this.jLight = new Int32Array(NJ).fill(-1);
        for (let k = 0; k < this.lights.length; k++) this.jLight[this.lights[k].j] = k;
        this.buildGrid();
        // ground grid (Int16 decimetres)
        const gh = new Float32Array(groundBuf, 0, 5);
        this.g = { x0: gh[0], z0: gh[1], c: gh[2], nx: gh[3] | 0, nz: gh[4] | 0, h: new Int16Array(groundBuf, 20, (gh[3] | 0) * (gh[4] | 0)) };
        this.bld = new Float32Array(bldBuf);
    }

    buildGrid() {
        const B = this.box;
        this.gx0 = B.x0 - 64; this.gz0 = B.z0 - 64;
        const nx = this.gnx = Math.ceil((B.x1 - B.x0 + 128) / CELL), nz = this.gnz = Math.ceil((B.z1 - B.z0 + 128) / CELL);
        const count = new Int32Array(nx * nz + 1);
        const each = (fn) => {
            for (let i = 0; i < this.n - 1; i++) {
                const e = this.sE[i]; if (this.sE[i + 1] !== e) continue;
                const R = this.eHw[e] + PAVE + 9;
                const x0 = Math.min(this.px[i], this.px[i + 1]) - R, x1 = Math.max(this.px[i], this.px[i + 1]) + R;
                const z0 = Math.min(this.pz[i], this.pz[i + 1]) - R, z1 = Math.max(this.pz[i], this.pz[i + 1]) + R;
                const a0 = Math.max(0, Math.floor((x0 - this.gx0) / CELL)), a1 = Math.min(nx - 1, Math.floor((x1 - this.gx0) / CELL));
                const b0 = Math.max(0, Math.floor((z0 - this.gz0) / CELL)), b1 = Math.min(nz - 1, Math.floor((z1 - this.gz0) / CELL));
                for (let b = b0; b <= b1; b++) for (let a = a0; a <= a1; a++) fn(b * nx + a, i);
            }
        };
        each((c) => count[c + 1]++);
        for (let c = 0; c < nx * nz; c++) count[c + 1] += count[c];
        const fill = count.slice(0, nx * nz), list = new Int32Array(count[nx * nz]);
        each((c, i) => { list[fill[c]++] = i; });
        this.cellStart = count; this.cellList = list;
    }

    groundAt(x, z) {
        const G = this.g, fx = (x - G.x0) / G.c, fz = (z - G.z0) / G.c;
        const i = Math.max(0, Math.min(G.nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(G.nz - 2, Math.floor(fz)));
        const a = Math.max(0, Math.min(1, fx - i)), b = Math.max(0, Math.min(1, fz - j));
        const h = G.h, nx = G.nx;
        return ((h[j * nx + i] * (1 - a) + h[j * nx + i + 1] * a) * (1 - b) + (h[(j + 1) * nx + i] * (1 - a) + h[(j + 1) * nx + i + 1] * a) * b) / 10;
    }

    // The road under (x, z): the segment whose asphalt edge is nearest. Fills out like Track.query plus
    // edge, junc (junction id when in a junction's flat zone, else -1), lim (speed limit km/h). hint: prefer this edge on ties.
    query(x, z, hint, out) {
        const a = Math.floor((x - this.gx0) / CELL), b = Math.floor((z - this.gz0) / CELL);
        let best = -1, bestE = 1e9, bt = 0;
        const he = hint >= 0 && hint < this.n ? this.sE[hint] : -1;
        if (a >= 0 && b >= 0 && a < this.gnx && b < this.gnz) {
            const c = b * this.gnx + a, L = this.cellList;
            for (let k = this.cellStart[c], end = this.cellStart[c + 1]; k < end; k++) {
                const i = L[k];
                const ax = this.px[i], az = this.pz[i], sx = this.px[i + 1] - ax, sz = this.pz[i + 1] - az;
                const len2 = sx * sx + sz * sz || 1;
                let t = ((x - ax) * sx + (z - az) * sz) / len2;
                if (t < 0) t = 0; else if (t > 1) t = 1;
                const qx = ax + sx * t - x, qz = az + sz * t - z;
                const dist = Math.sqrt(qx * qx + qz * qz);
                let ed = dist - this.eHw[this.sE[i]];
                if (this.sE[i] === he) ed -= 0.05;
                if (ed < bestE) { bestE = ed; best = i; bt = t; }
            }
        }
        if (best < 0) {   // nowhere near a road (should not happen inside the walls)
            out.i = 0; out.t = 0; out.s = 0; out.d = 1e3; out.y = this.groundAt(x, z); out.nx = 0; out.ny = 1; out.nz = 0;
            out.hl = out.hr = 0; out.wall = 1e9; out.off = 2; out.lx = 1; out.lz = 0; out.fx = 0; out.fz = 1; out.edge = -1; out.junc = -1; out.lim = 50;
            return out;
        }
        const i = best, e = this.sE[i];
        const ax = this.px[i], az = this.pz[i], sx = this.px[i + 1] - ax, sz = this.pz[i + 1] - az;
        const len = Math.hypot(sx, sz) || 1;
        const t = bt;
        const lx = sz / len, lz = -sx / len;
        const d = (x - (ax + sx * t)) * lx + (z - (az + sz * t)) * lz;
        const hw = this.eHw[e];
        let y = this.py[i] + (this.py[i + 1] - this.py[i]) * t;
        const slope = (this.py[i + 1] - this.py[i]) / len;
        let dydd = 0, off = 0;
        let junc = this.sJ[i];
        if (junc >= 0) { const jx = x - this.jx[junc], jz = z - this.jz[junc]; if (jx * jx + jz * jz > (this.jr[junc] + 3) ** 2) junc = -1; }
        const edge = d >= 0 ? d - hw : -d - hw;
        const pv = d >= 0 ? this.pl[i] + (this.pl[i + 1] - this.pl[i]) * t : this.pr[i] + (this.pr[i + 1] - this.pr[i]) * t;
        if (edge > 0 && junc < 0) {
            off = 1;
            if (pv > 0.6) {   // a kerb only where there is a real pavement
                const k = edge < 0.4 ? edge / 0.4 : 1;
                y += 0.15 * k;
                if (edge < 0.4) dydd = (d >= 0 ? 1 : -1) * 0.15 / 0.4;
            }
            if (edge > pv) off = 2;
        }
        out.wall = pv >= PAVE - 0.05 ? hw + WALL : 1e9;   // no wall where the pavement is shared with the next street
        const fx = sx / len, fz = sz / len;
        let nx = dydd * fz - lz * slope, ny = lz * fx - lx * fz, nz = lx * slope - dydd * fx;
        if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
        const nl = Math.hypot(nx, ny, nz) || 1;
        out.i = i; out.t = t; out.s = this.sS[i] + t * len; out.d = d; out.y = y; out.nx = nx / nl; out.ny = ny / nl; out.nz = nz / nl;
        out.hl = hw; out.hr = hw; out.off = off; out.lx = lx; out.lz = lz; out.fx = fx; out.fz = fz;
        out.edge = e; out.junc = junc; out.lim = this.eLim[e];
        return out;
    }

    // point on edge e at distance s from its start, d metres to the left of the centre line
    at(e, s, d, out) {
        const o = this.eOff[e], n = this.eN[e];
        if (s < 0) s = 0; if (s > this.eLen[e]) s = this.eLen[e];
        let lo = 0, hi = n - 1;
        while (hi - lo > 1) { const m = (lo + hi) >> 1; if (this.sS[o + m] <= s) lo = m; else hi = m; }
        const i = o + lo, j = Math.min(o + n - 1, i + 1);
        const seg = this.sS[j] - this.sS[i] || 1, t = Math.max(0, Math.min(1, (s - this.sS[i]) / seg));
        const fx = this.tx[i] + (this.tx[j] - this.tx[i]) * t, fz = this.tz[i] + (this.tz[j] - this.tz[i]) * t, fl = Math.hypot(fx, fz) || 1;
        out.fx = fx / fl; out.fz = fz / fl; out.lx = out.fz; out.lz = -out.fx;
        out.x = this.px[i] + (this.px[j] - this.px[i]) * t + out.lx * d;
        out.z = this.pz[i] + (this.pz[j] - this.pz[i]) * t + out.lz * d;
        out.y = this.py[i] + (this.py[j] - this.py[i]) * t;
        out.i = i; out.hw = this.eHw[e];
        return out;
    }

    // may a car drive edge e starting from junction j?
    canLeave(e, j) { return !this.eOne[e] || this.eA[e] === j; }
    other(e, j) { return this.eA[e] === j ? this.eB[e] : this.eA[e]; }

    // shortest drive from (edge e0 at s0, heading dir0 = +1 toward b / -1 toward a) to (edge e1 at s1), one-way streets
    // respected. Returns { len, edges: [[edge, dir], ...] } or null. Dijkstra on junctions with a binary heap.
    route(e0, s0, dir0, e1, s1) {
        const NJ = this.nj;
        if (!this._dist) { this._dist = new Float64Array(NJ); this._prev = new Int32Array(NJ); this._pe = new Int32Array(NJ); }
        const dist = this._dist, prev = this._prev, pe = this._pe;
        dist.fill(Infinity); prev.fill(-1); pe.fill(-1);
        const heap = [];
        const push = (d, j) => { heap.push(d, j); let i = heap.length / 2 - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p * 2] <= heap[i * 2]) break; const a = heap[p * 2], b = heap[p * 2 + 1]; heap[p * 2] = heap[i * 2]; heap[p * 2 + 1] = heap[i * 2 + 1]; heap[i * 2] = a; heap[i * 2 + 1] = b; i = p; } };
        const pop = () => { const d = heap[0], j = heap[1]; const ld = heap[heap.length - 2], lj = heap[heap.length - 1]; heap.length -= 2; if (heap.length) { heap[0] = ld; heap[1] = lj; let i = 0; const n = heap.length / 2; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < n && heap[l * 2] < heap[m * 2]) m = l; if (r < n && heap[r * 2] < heap[m * 2]) m = r; if (m === i) break; const a = heap[m * 2], b = heap[m * 2 + 1]; heap[m * 2] = heap[i * 2]; heap[m * 2 + 1] = heap[i * 2 + 1]; heap[i * 2] = a; heap[i * 2 + 1] = b; i = m; } } return [d, j]; };
        // start: the junction ahead (and behind if the street is two-way: a U-turn costs 60 m)
        const L0 = this.eLen[e0];
        const ahead = dir0 > 0 ? this.eB[e0] : this.eA[e0], behind = dir0 > 0 ? this.eA[e0] : this.eB[e0];
        const toAhead = dir0 > 0 ? L0 - s0 : s0;
        dist[ahead] = toAhead; push(toAhead, ahead); pe[ahead] = e0;
        if (!this.eOne[e0] && dist[behind] > L0 - toAhead + 60) { dist[behind] = L0 - toAhead + 60; push(dist[behind], behind); pe[behind] = e0; }
        // same street, ahead of us
        let direct = Infinity;
        if (e1 === e0) { const ds = (s1 - s0) * dir0; if (ds >= 0) direct = ds; }
        const tA = this.eA[e1], tB = this.eB[e1], L1 = this.eLen[e1];
        while (heap.length) {
            const [d, j] = pop();
            if (d > dist[j]) continue;
            if (d > direct) break;
            for (const e of this.jEdges[j]) {
                if (!this.canLeave(e, j)) continue;
                const k = this.other(e, j), nd = d + this.eLen[e] * (this.eCls[e] >= 5 ? 1.15 : 1);
                if (nd < dist[k]) { dist[k] = nd; prev[k] = j; pe[k] = e; push(nd, k); }
            }
        }
        // finish on e1 from either end
        let endJ = -1, total = direct;
        if (dist[tA] + s1 < total && this.canLeave(e1, tA)) { total = dist[tA] + s1; endJ = tA; }
        if (dist[tB] + (L1 - s1) < total && (!this.eOne[e1] || this.eA[e1] === tB)) { total = dist[tB] + (L1 - s1); endJ = tB; }
        if (total === Infinity) return null;
        const edges = [];
        if (endJ >= 0) {
            edges.push([e1, endJ === tA ? 1 : -1]);
            let j = endJ;
            for (let guard = 0; guard < 5000 && prev[j] >= 0; guard++) {
                const e = pe[j], p = prev[j];
                edges.push([e, this.eA[e] === p && this.eB[e] === j ? 1 : -1]);
                j = p;
            }
            // the first leg: along e0 toward the junction the search started from
            edges.push([e0, j === this.eB[e0] ? 1 : -1]);
            edges.reverse();
        } else edges.push([e0, dir0]);
        return { len: total, edges };
    }

    // distance along edge e nearest to (x, z), searching around s (cheap: a few samples)
    project(e, s, x, z) {
        const o = this.eOff[e], n = this.eN[e];
        let k = Math.max(0, Math.min(n - 2, Math.round(s / 4)));
        while (k > 0 && this.sS[o + k] > s) k--;
        let best = s, bd = 1e18;
        for (let m = Math.max(0, k - 3); m <= Math.min(n - 2, k + 3); m++) {
            const i = o + m, ax = this.px[i], az = this.pz[i], sx = this.px[i + 1] - ax, sz = this.pz[i + 1] - az;
            const l2 = sx * sx + sz * sz || 1;
            let t = ((x - ax) * sx + (z - az) * sz) / l2; t = t < 0 ? 0 : t > 1 ? 1 : t;
            const dx = ax + sx * t - x, dz = az + sz * t - z, d2 = dx * dx + dz * dz;
            if (d2 < bd) { bd = d2; best = this.sS[i] + t * Math.sqrt(l2); }
        }
        return best;
    }
    // index of edge e in junction j's list (traffic light phase)
    slot(e, j) { return this.jEdges[j].indexOf(e); }

    // the street's name: Arabic for Arabic, else the name without its Arabic part (OSM often has both in one)
    edgeName(e, lang) {
        const n = this.names[this.eName[e]]; if (!n) return '';
        if (lang === 'ar') return n[1] || n[0];
        return n[0].replace(/[\u0600-\u06FF\u0750-\u077F\u2D30-\u2D7F]+/g, '').replace(/\s+/g, ' ').trim() || n[0];
    }
}

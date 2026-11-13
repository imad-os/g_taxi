// The city on screen, built in 200 m squares around the taxi and dropped again behind it (streaming): only the
// squares within reach exist, so the whole of Tangier costs the TV no more than a few kilometres of street.
// Each square = four merged meshes (road, ground + street furniture, small details, buildings): a few dozen draw
// calls for everything in view. At most a few milliseconds of building per frame.
import * as THREE from 'three';
import { partData } from '../core/src/assets.js';
import { worldMaterial, buildingMaterial, seaMaterial, skyMaterial } from '../core/src/shaders.js';
import { cityRoadMaterial } from './city-shaders.js';
import { PAVE } from './net.js';

export const CS = 200;
const VERGE = 2.2;

class Geo {
    constructor() { this.p = []; this.n = []; this.c = []; this.i = []; this.extra = null; }
    get count() { return this.p.length / 3; }
    vert(x, y, z, nx, ny, nz, r, g, b, a) {
        this.p.push(x, y, z); this.n.push(nx * 127 | 0, ny * 127 | 0, nz * 127 | 0, 0); this.c.push(r, g, b, a || 0);
        return this.count - 1;
    }
    quad(a, b, c, d) { this.i.push(a, b, c, a, c, d); }
    model(model, part, x, y, z, yaw, scale, tint) {
        const d = partData(model, part);
        const cs = Math.cos(yaw), sn = Math.sin(yaw), s = scale || 1;
        const base = this.count;
        for (let k = 0; k < d.part.n; k++) {
            const px = d.pos[k * 3] * s, py = d.pos[k * 3 + 1] * s, pz = d.pos[k * 3 + 2] * s;
            const nx = d.nrm[k * 4] / 127, ny = d.nrm[k * 4 + 1] / 127, nz = d.nrm[k * 4 + 2] / 127;
            let r = d.col[k * 4], g = d.col[k * 4 + 1], b = d.col[k * 4 + 2];
            if (tint) { r = r * tint[0] | 0; g = g * tint[1] | 0; b = b * tint[2] | 0; }
            this.p.push(x + px * cs + pz * sn, y + py, z - px * sn + pz * cs);
            this.n.push(Math.round((nx * cs + nz * sn) * 127), Math.round(ny * 127), Math.round((-nx * sn + nz * cs) * 127), 0);
            this.c.push(Math.min(255, r), Math.min(255, g), Math.min(255, b), d.col[k * 4 + 3] === 64 ? 64 : 0);
        }
        for (let k = 0; k < d.idx.length; k++) this.i.push(base + d.idx[k]);
    }
    // box: centre bottom (x, y, z), half sizes (along a = (ax, az), up, along b = (-az, ax)), colour
    box(x, y, z, ha, h, hb, ax, az, r, g, b, glow) {
        const bx = -az, bz = ax, P = [];
        for (let k = 0; k < 8; k++) { const sa = k & 1 ? ha : -ha, sy = k & 2 ? h : 0, sb = k & 4 ? hb : -hb; P.push(x + ax * sa + bx * sb, y + sy, z + az * sa + bz * sb); }
        const F = [[0, 4, 6, 2, -1, 0, 0], [1, 3, 7, 5, 1, 0, 0], [0, 1, 5, 4, 0, -1, 0], [2, 6, 7, 3, 0, 1, 0], [0, 2, 3, 1, 0, 0, -1], [4, 5, 7, 6, 0, 0, 1]];
        for (const f of F) {
            const nx = f[4] * ax + f[6] * bx, ny = f[5], nz = f[4] * az + f[6] * bz;
            const q = f.slice(0, 4).map(i => this.vert(P[i * 3], P[i * 3 + 1], P[i * 3 + 2], nx, ny, nz, r, g, b, glow ? 64 : 0));
            // wind the quad so its front faces outward
            const A = f[0] * 3, B2 = f[1] * 3, C = f[2] * 3;
            const ux = P[B2] - P[A], uy = P[B2 + 1] - P[A + 1], uz = P[B2 + 2] - P[A + 2], vx = P[C] - P[A], vy = P[C + 1] - P[A + 1], vz = P[C + 2] - P[A + 2];
            const tn = (uy * vz - uz * vy) * nx + (uz * vx - ux * vz) * ny + (ux * vy - uy * vx) * nz;
            if (tn >= 0) this.quad(q[0], q[1], q[2], q[3]); else this.quad(q[0], q[3], q[2], q[1]);
        }
    }
    build(withNormals) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.p), 3));
        if (withNormals) g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(this.n), 4, true));
        g.setAttribute('col', new THREE.BufferAttribute(new Uint8Array(this.c), 4, true));
        g.setIndex(new THREE.BufferAttribute(this.count > 65535 ? new Uint32Array(this.i) : new Uint16Array(this.i), 1));
        if (this.extra) for (const k in this.extra) { const v = this.extra[k]; g.setAttribute(k, new THREE.BufferAttribute(new Float32Array(v.a), v.n)); }
        g.computeBoundingSphere();
        return g;
    }
}

function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
const PALETTE = [[240, 238, 230], [244, 242, 236], [236, 226, 204], [226, 212, 186], [222, 200, 172], [232, 230, 224], [214, 222, 228], [236, 214, 204], [246, 246, 244]];

export class CityWorld {
    constructor(scene, net, quality) {
        this.scene = scene; this.net = net;
        this.reach = quality.tier === 'low' ? 520 : quality.tier === 'mid' ? 680 : 860;
        this.mats = { world: worldMaterial(), road: cityRoadMaterial(), bld: buildingMaterial() };
        this.chunks = new Map();     // key -> { segs: [], blds: [], lights: [], st: [], built: null }
        const key = (x, z) => Math.floor(x / CS) * 1000 + Math.floor(z / CS) + 500500;
        this.key = key;
        const get = (k) => { let c = this.chunks.get(k); if (!c) this.chunks.set(k, c = { k, segs: [], blds: [], heads: [], st: [], jn: [], built: null }); return c; };
        for (let i = 0; i < net.n - 1; i++) if (net.sE[i + 1] === net.sE[i]) get(key((net.px[i] + net.px[i + 1]) / 2, (net.pz[i] + net.pz[i + 1]) / 2)).segs.push(i);
        for (let j = 0; j < net.nj; j++) if (net.jEdges[j].length >= 3) get(key(net.jx[j], net.jz[j])).jn.push(j);
        const B = net.bld;
        for (let o = 0; o < B.length;) { const n = B[o]; get(key(B[o + 3], B[o + 4])).blds.push(o); o += 3 + n * 2; }
        for (const s of net.stations) { const i = net.eOff[s.e] + s.k; get(key(net.px[i], net.pz[i])).st.push(s); }
        // traffic light heads: one per street arriving at a junction with lights
        this.heads = [];
        const q = {};
        for (let L = 0; L < net.lights.length; L++) {
            const li = net.lights[L], j = li.j, es = net.jEdges[j];
            for (let k = 0; k < es.length; k++) {
                const e = es[k];
                const atB = net.eB[e] === j;
                if (net.eOne[e] && !atB) continue;                      // one-way street leaving the junction: nobody arrives
                const s = atB ? net.eLen[e] - net.jr[j] - 1.5 : net.jr[j] + 1.5;
                const right = atB ? -1 : 1, hw = net.eHw[e];
                net.at(e, s, right * (hw + 0.7), q);
                const fx = atB ? q.fx : -q.fx, fz = atB ? q.fz : -q.fz;   // travel direction of the arriving cars
                const h = { L, ph: li.ph[k], x: q.x, y: q.y + 0.15, z: q.z, fx, fz };
                this.heads.push(h);
                get(key(q.x, q.z)).heads.push(h);
            }
        }
        // lamps: 3 per head (red, amber, green), one instanced mesh for the whole city, colours set on phase changes
        const lg = new THREE.BoxGeometry(0.24, 0.24, 0.08);
        this.lamps = new THREE.InstancedMesh(lg, new THREE.MeshBasicMaterial({ color: 0xffffff }), Math.max(1, this.heads.length * 3));
        const m = new THREE.Matrix4(), col = new THREE.Color(0x222222);
        for (let h = 0; h < this.heads.length; h++) {
            const H = this.heads[h];
            for (let c = 0; c < 3; c++) {
                m.makeRotationY(Math.atan2(H.fx, H.fz));
                m.setPosition(H.x - H.fx * 0.2, H.y + 3.75 - c * 0.3, H.z - H.fz * 0.2);
                this.lamps.setMatrixAt(h * 3 + c, m);
                this.lamps.setColorAt(h * 3 + c, col);
            }
        }
        this.lamps.frustumCulled = false;
        scene.add(this.lamps);
        this.lampState = new Int8Array(this.heads.length).fill(-1);
        // sea + sky
        const g = new THREE.PlaneGeometry(40000, 40000, 1, 1); g.rotateX(-Math.PI / 2);
        this.sea = new THREE.Mesh(g, seaMaterial()); this.sea.position.y = 0; this.sea.frustumCulled = false; this.sea.renderOrder = -1;
        scene.add(this.sea);
        this.sky = new THREE.Mesh(new THREE.SphereGeometry(5000, 16, 8), skyMaterial());
        this.sky.frustumCulled = false; this.sky.renderOrder = 10; scene.add(this.sky);
        this.live = [];
        this.buildMs = 0; this.built = 0;
    }

    // light colours (state per head: 0 green, 1 amber, 2 red), from the traffic module
    setLamps(stateOf) {
        const on = [new THREE.Color(0xff2a1a), new THREE.Color(0xffb000), new THREE.Color(0x22ff66)], off = new THREE.Color(0x1d1d1d);
        let dirty = false;
        for (let h = 0; h < this.heads.length; h++) {
            const H = this.heads[h], s = stateOf(H.L, H.ph);
            if (s === this.lampState[h]) continue;
            this.lampState[h] = s; dirty = true;
            this.lamps.setColorAt(h * 3, s === 2 ? on[0] : off);
            this.lamps.setColorAt(h * 3 + 1, s === 1 ? on[1] : off);
            this.lamps.setColorAt(h * 3 + 2, s === 0 ? on[2] : off);
        }
        if (dirty) this.lamps.instanceColor.needsUpdate = true;
    }

    // streaming: build the squares within reach (nearest first, `maxMs` per call), drop the ones far behind
    stream(px, pz, maxMs, all) {
        const t0 = performance.now();
        const R = this.reach, ci = Math.floor(px / CS), cj = Math.floor(pz / CS), n = Math.ceil(R / CS) + 1;
        const want = [];
        for (let a = -n; a <= n; a++) for (let b = -n; b <= n; b++) {
            const cx = (ci + a + 0.5) * CS, cz = (cj + b + 0.5) * CS;
            const d = Math.hypot(cx - px, cz - pz) - CS * 0.71;
            if (d > R) continue;
            const c = this.chunks.get((ci + a) * 1000 + (cj + b) + 500500) || this.emptyChunk(ci + a, cj + b);
            if (!c.built) want.push([d, c]);
        }
        want.sort((x, y) => x[0] - y[0]);
        for (const [, c] of want) {
            if (!all && performance.now() - t0 > maxMs) break;
            this.buildChunk(c);
        }
        // drop
        for (let k = this.live.length - 1; k >= 0; k--) {
            const c = this.live[k];
            if (Math.hypot(c.cx - px, c.cz - pz) - CS * 0.71 > R + 260) { this.dropChunk(c); this.live.splice(k, 1); }
        }
        this.buildMs = performance.now() - t0;
    }
    emptyChunk(i, j) {   // squares with no road still get their ground
        const k = i * 1000 + j + 500500;
        const c = { k, segs: [], blds: [], heads: [], st: [], jn: [], built: null };
        this.chunks.set(k, c); return c;
    }

    buildChunk(c) {
        const net = this.net, k = c.k - 500500;
        const ci = Math.round(k / 1000), cj = k - ci * 1000;
        const x0 = ci * CS, z0 = cj * CS;
        const road = new Geo(), core = new Geo(), detail = new Geo(), bg = new Geo();
        road.extra = { ds: { a: [], n: 4 } };
        const DS = road.extra.ds.a;
        const rnd = rng(c.k * 7919 + 13);
        // ---- streets: runs of consecutive segments of one edge
        const segs = c.segs;
        let r0 = 0;
        for (let k2 = 1; k2 <= segs.length; k2++) {
            if (k2 < segs.length && segs[k2] === segs[k2 - 1] + 1 && net.sE[segs[k2]] === net.sE[segs[r0]]) continue;
            this.street(road, DS, detail, core, segs[r0], segs[k2 - 1] + 1, rnd);
            r0 = k2;
        }
        // junction plazas: plain asphalt discs
        for (const j of c.jn) {
            const r = net.jr[j] + 0.4, y = net.jy[j] + 0.012, N = 18;
            const base = road.count;
            road.vert(net.jx[j], y, net.jz[j], 0, 1, 0, 0, 0, 0); DS.push(0, 0, 99, 1);
            for (let a = 0; a <= N; a++) { const t = a / N * Math.PI * 2; road.vert(net.jx[j] + Math.cos(t) * r, y, net.jz[j] + Math.sin(t) * r, 0, 1, 0, 0, 0, 0); DS.push(0, 0, 99, 1); }
            for (let a = 0; a < N; a++) road.i.push(base, base + 2 + a, base + 1 + a);
        }
        // ---- ground (grid cells inside this square)
        const G = net.g, gi0 = Math.max(0, Math.floor((x0 - G.x0) / G.c)), gi1 = Math.min(G.nx - 1, Math.ceil((x0 + CS - G.x0) / G.c));
        const gj0 = Math.max(0, Math.floor((z0 - G.z0) / G.c)), gj1 = Math.min(G.nz - 1, Math.ceil((z0 + CS - G.z0) / G.c));
        if (gi1 > gi0 && gj1 > gj0) {
            const W = gi1 - gi0 + 1, base = core.count, H = G.h, nx = G.nx;
            const at = (i, j) => H[Math.max(0, Math.min(G.nz - 1, j)) * nx + Math.max(0, Math.min(nx - 1, i))] / 10;
            for (let j = gj0; j <= gj1; j++) for (let i = gi0; i <= gi1; i++) {
                const h = at(i, j);
                const ddx = (at(i + 1, j) - at(i - 1, j)) / (2 * G.c), ddz = (at(i, j + 1) - at(i, j - 1)) / (2 * G.c);
                const nl = Math.hypot(ddx, 1, ddz), ny = 1 / nl;
                const nz2 = (Math.sin(i * 0.9) + Math.sin(j * 1.3)) * 0.5;
                let r, g, b;
                if (h < 0.5) { r = 196; g = 182; b = 146; } else if (h < 3) { r = 222 + nz2 * 8; g = 206 + nz2 * 8; b = 162; }
                else if (ny < 0.82) { r = 132 + nz2 * 10; g = 118 + nz2 * 8; b = 96; } else { r = 116 + nz2 * 16; g = 132 + nz2 * 14; b = 76 + nz2 * 6; }
                core.vert(G.x0 + i * G.c, h, G.z0 + j * G.c, -ddx / nl, ny, -ddz / nl, r, g, b);
            }
            for (let j = 0; j < gj1 - gj0; j++) for (let i = 0; i < W - 1; i++) {
                const a = base + j * W + i;
                if (at(gi0 + i, gj0 + j) < -2.4 && at(gi0 + i + 1, gj0 + j + 1) < -2.4 && at(gi0 + i + 1, gj0 + j) < -2.4) continue;
                core.quad(a, a + W, a + W + 1, a + 1);
            }
        }
        // ---- buildings
        for (const o of c.blds) this.building(bg, o);
        // ---- traffic light poles + housings
        for (const h of c.heads) {
            const ax = h.fz, az = -h.fx;       // across the street
            core.box(h.x, h.y, h.z, 0.07, 3.4, 0.07, ax, az, 70, 72, 76);
            core.box(h.x - h.fx * 0.05, h.y + 3.3, h.z - h.fz * 0.05, 0.2, 0.95, 0.12, ax, az, 30, 30, 32);
        }
        // ---- fuel stations: canopy over the pavement and the right lane, pumps, a tall sign
        for (const s of c.st) this.station(core, detail, s);

        const out = { k: c.k, meshes: [], cx: x0 + CS / 2, cz: z0 + CS / 2 };
        const add = (geo, mat, kind) => {
            if (!geo.count) return;
            const m = new THREE.Mesh(geo.build(kind !== 'road'), mat);
            m.matrixAutoUpdate = false; m.updateMatrix(); m.userData.kind = kind;
            this.scene.add(m); out.meshes.push(m);
        };
        add(road, this.mats.road, 'road');
        add(core, this.mats.world, 'core');
        add(detail, this.mats.world, 'detail');
        add(bg, this.mats.bld, 'bld');
        c.built = out;
        this.live.push(c);
        c.cx = out.cx; c.cz = out.cz;
        this.built++;
    }
    dropChunk(c) {
        for (const m of c.built.meshes) { this.scene.remove(m); m.geometry.dispose(); }
        c.built = null;
    }

    // one street run: samples i0..i1 of one edge (rows across: verge, pavement, kerb, asphalt ... mirrored)
    street(road, DS, detail, core, i0, i1, rnd) {
        const net = this.net, e = net.sE[i0], hw = net.eHw[e], cls = net.eCls[e], one = net.eOne[e];
        const D = [0, 0, 0, hw, 0, -hw, 0, 0, 0];
        const COLS = 9;
        const base = road.count;
        const L = net.eLen[e], ja = net.eA[e], jb = net.eB[e];
        for (let i = i0; i <= i1; i++) {
            const x = net.px[i], y = net.py[i], z = net.pz[i], lx = net.tz[i], lz = -net.tx[i], s = net.sS[i];
            const junc = net.sJ[i] >= 0;
            // zebra: the 4 m just outside a junction's zone with 3+ streets
            const za = net.jEdges[ja].length >= 3 && s > net.jr[ja] + 2 && s < net.jr[ja] + 6;
            const zb = net.jEdges[jb].length >= 3 && L - s > net.jr[jb] + 2 && L - s < net.jr[jb] + 6;
            const fl = (junc ? 1 : 0) + (one ? 2 : 0) + (za || zb ? 4 : 0);
            // pavement on each side (narrower where another street runs alongside: then no kerb and no verge)
            const pl = net.pl[i], pr = net.pr[i], fullL = pl >= PAVE - 0.05, fullR = pr >= PAVE - 0.05;
            D[0] = hw + pl + (fullL ? VERGE : 0); D[1] = hw + pl; D[2] = hw + Math.min(0.35, pl);
            D[6] = -hw - Math.min(0.35, pr); D[7] = -hw - pr; D[8] = -hw - pr - (fullR ? VERGE : 0);
            const kl = !junc && pl > 0.6 ? 0.15 : 0, kr = !junc && pr > 0.6 ? 0.15 : 0;
            for (let k = 0; k < COLS; k++) {
                const d = D[k];
                const yy = k === 0 ? (fullL ? -0.55 : kl) : k === 8 ? (fullR ? -0.55 : kr) : k === 1 || k === 2 ? kl : k === 6 || k === 7 ? kr : 0;
                road.vert(x + lx * d, y + yy, z + lz * d, 0, 1, 0, 0, 0, 0);
                DS.push(d, s, hw, fl);
            }
            if (i > i0) {
                const a = base + (i - i0 - 1) * COLS, b = base + (i - i0) * COLS;
                for (let k = 0; k < COLS - 1; k++) road.quad(a + k, a + k + 1, b + k + 1, b + k);
            }
            if (junc || i === i1) continue;
            // street lights on the bigger streets, trees on the smaller ones, palms by the sea
            const yaw = Math.atan2(net.tx[i], net.tz[i]);
            // only where that side has its own pavement and the spot is clear of every street and junction
            // (a dual carriageway's other half or a crossing street can be closer than the pavement's width)
            const pl0 = net.pl[i], pr0 = net.pr[i];
            if (cls <= 3 && i % 10 === 0 && pl0 > 1.4) { const d = hw + 0.9; if (this.clear(x + lx * d, z + lz * d, 0.6)) detail.model('light_modern', 'body', x + lx * d, y + 0.15, z + lz * d, yaw + Math.PI / 2, 1); }
            if (cls <= 3 && i % 10 === 5 && pr0 > 1.4) { const d = -(hw + 0.9); if (this.clear(x + lx * d, z + lz * d, 0.6)) detail.model('light_modern', 'body', x + lx * d, y + 0.15, z + lz * d, yaw - Math.PI / 2, 1); }
            if (i % 6 === 3 && rnd() < (cls >= 4 ? 0.45 : 0.3)) {
                const sg = rnd() < 0.5 ? 1 : -1, d = sg * (hw + PAVE - 0.7);
                if ((sg > 0 ? pl0 : pr0) < PAVE - 0.05 || !this.clear(x + lx * d, z + lz * d, 1.6)) continue;
                const sea = y < 9 && cls <= 2;
                const kind = sea ? 'palm_tall' : rnd() < 0.5 ? 'tree' : 'tree_oak';
                const sc = kind[0] === 'p' ? 0.5 + rnd() * 0.1 : kind === 'tree' ? 0.32 + rnd() * 0.08 : 0.4 + rnd() * 0.1;
                detail.model(kind, 'body', x + lx * d, y + 0.15, z + lz * d, rnd() * 6.28, sc);
            }
        }
    }

    // nothing drivable within m metres of (x, z): no street's asphalt, no junction
    clear(x, z, m) {
        const q = this.net.query(x, z, -1, this.cq || (this.cq = {}));
        return q.edge < 0 || (Math.abs(q.d) - q.hl >= m && q.junc < 0);
    }

    station(core, detail, s) {
        const net = this.net, e = s.e, i = net.eOff[e] + s.k;
        const x = net.px[i], y = net.py[i] + 0.15, z = net.pz[i], fx = net.tx[i], fz = net.tz[i], lx = fz, lz = -fx, hw = net.eHw[e];
        const dC = -(hw + PAVE * 0.35);                    // canopy centre: over the pavement and the right lane
        const cx = x + lx * dC, cz = z + lz * dC;
        core.box(cx, y + 4.6, cz, 8, 0.6, (PAVE + 3.5) / 2, fx, fz, 236, 236, 232);          // roof
        core.box(cx, y + 4.55, cz, 8.05, 0.12, (PAVE + 3.5) / 2 + 0.05, fx, fz, 20, 150, 90);  // green band
        for (const u of [-6, 6]) {
            const px = x + lx * -(hw + PAVE - 0.4) + fx * u, pz = z + lz * -(hw + PAVE - 0.4) + fz * u;
            core.box(px, y, pz, 0.2, 4.6, 0.2, fx, fz, 210, 210, 206);
            const qx = x + lx * -(hw + 1.6) + fx * u * 0.6, qz = z + lz * -(hw + 1.6) + fz * u * 0.6;
            core.box(qx, y, qz, 0.5, 1.7, 0.3, fx, fz, 30, 160, 95);        // pump
            core.box(qx, y + 1.2, qz, 0.52, 0.35, 0.32, fx, fz, 250, 250, 250, true);
        }
        const sx = x + lx * -(hw + PAVE + 1.5) + fx * 11, sz = z + lz * -(hw + PAVE + 1.5) + fz * 11;
        core.box(sx, y, sz, 0.18, 7, 0.18, fx, fz, 180, 180, 180);
        core.box(sx, y + 5.2, sz, 0.15, 2.2, 1.3, fx, fz, 20, 150, 90);
        core.box(sx, y + 6.0, sz, 0.17, 0.8, 1.0, fx, fz, 255, 210, 40, true);
    }

    building(g, o) {
        const B = this.net.bld, n = B[o], h = B[o + 1], base = B[o + 2];
        const pts = [];
        let cx = 0, cz = 0;
        for (let k = 0; k < n; k++) { const x = B[o + 3 + k * 2], z = B[o + 4 + k * 2]; pts.push(new THREE.Vector2(x, z)); cx += x; cz += z; }
        cx /= n; cz /= n;
        const pal = PALETTE[(Math.abs(Math.round(pts[0].x * 3 + pts[0].y * 7)) % PALETTE.length)];
        const col = h > 24 ? [200, 206, 212] : pal;
        const y0 = base - 3, y1 = base + h;
        if (!g.extra) g.extra = { wuv: { a: [], n: 2 } };
        const uv = g.extra.wuv.a;
        let run = 0;
        for (let k = 0; k < n; k++) {
            const a = pts[k], c = pts[(k + 1) % n];
            const ex = c.x - a.x, ez = c.y - a.y, L = Math.hypot(ex, ez);
            if (L < 0.05) continue;
            let nx = -ez / L, nz = ex / L;
            const out = nx * ((a.x + c.x) / 2 - cx) + nz * ((a.y + c.y) / 2 - cz) > 0;
            if (!out) { nx = -nx; nz = -nz; }
            const v0 = g.vert(a.x, y0, a.y, nx, 0, nz, col[0], col[1], col[2]);
            const v1 = g.vert(c.x, y0, c.y, nx, 0, nz, col[0], col[1], col[2]);
            const v2 = g.vert(c.x, y1, c.y, nx, 0, nz, col[0], col[1], col[2]);
            const v3 = g.vert(a.x, y1, a.y, nx, 0, nz, col[0], col[1], col[2]);
            uv.push(run, -3, run + L, -3, run + L, h, run, h);
            if (out) g.quad(v0, v1, v2, v3); else g.quad(v0, v3, v2, v1);
            run += L;
        }
        const tris = THREE.ShapeUtils.triangulateShape(pts, []);
        const rb = g.count;
        const rc = [col[0] * 0.84 | 0, col[1] * 0.82 | 0, col[2] * 0.78 | 0];
        for (const p of pts) { g.vert(p.x, y1, p.y, 0, 1, 0, rc[0], rc[1], rc[2]); uv.push(0, 0); }
        for (const t of tris) {
            const A = pts[t[0]], Bp = pts[t[1]], C = pts[t[2]];
            const up = (Bp.y - A.y) * (C.x - A.x) - (Bp.x - A.x) * (C.y - A.y);
            if (up > 0) g.i.push(rb + t[0], rb + t[1], rb + t[2]); else g.i.push(rb + t[0], rb + t[2], rb + t[1]);
        }
    }

    cull(cx, cz, far, detailFar) {
        for (let k = 0; k < this.live.length; k++) {
            const c = this.live[k];
            const d = Math.hypot(c.cx - cx, c.cz - cz) - CS * 0.71;
            const ms = c.built.meshes;
            for (let m = 0; m < ms.length; m++) ms[m].visible = d < (ms[m].userData.kind === 'detail' ? detailFar : ms[m].userData.kind === 'bld' ? far * 0.85 : far);
        }
    }

    dispose() {
        for (const c of this.live) this.dropChunk(c);
        this.live = [];
        this.scene.remove(this.lamps); this.lamps.geometry.dispose(); this.lamps.material.dispose();
        this.scene.remove(this.sea); this.sea.geometry.dispose(); this.sea.material.dispose();
        this.scene.remove(this.sky); this.sky.geometry.dispose(); this.sky.material.dispose();
        for (const k in this.mats) this.mats[k].dispose();
    }
}

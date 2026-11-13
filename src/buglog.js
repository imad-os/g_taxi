// Bug reports: the last minute of driving (a sample every 0.25 s) and, when the player presses the controller's Capture
// button (or Pause > Report a bug), a full picture of the moment: the taxi, its four wheels (the height the physics drives
// on vs the height drawn under them, by casting a ray on the drawn road), a grid of those around the car, the street,
// the junction, the camera, and a screenshot. Sent with MyPC.bug (My PC saves it in Firebase for the developer).
// Light: one small object per sample in a 240 slot ring; nothing else runs until a capture.
import * as THREE from 'three';
import { VERSION } from './version.js';

const EVERY = 0.25, KEEP = 240;
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;

export class BugLog {
    constructor() { this.ring = new Array(KEEP); this.n = 0; this.t = 0; this.events = []; this.busy = false; this.ray = new THREE.Raycaster(); this.ray.far = 12; }
    reset() { this.n = 0; this.t = 0; this.events.length = 0; }
    event(kind, what) { this.events.push([r2(this.time || 0), kind, String(what).slice(0, 80)]); if (this.events.length > 60) this.events.shift(); }

    // per 60 Hz tick
    tick(dt, shift) {
        this.time = shift.time;
        if ((this.t -= dt) > 0) return;
        this.t = EVERY;
        const v = shift.me.veh, q = shift.qp, w = v.wheels;
        // t, x, y, z, yaw, km/h, edge, s, d (from the centreline), road y under the car, wheels touching, lowest wheel's compression, gear, steer, throttle, brake
        let lo = 0, nc = 0; for (const h of w) { if (h.contact) nc++; if (h.comp > lo) lo = h.comp; }
        this.ring[this.n++ % KEEP] = [r2(shift.time), r2(v.px), r2(v.py), r2(v.pz), r3(Math.atan2(v.R[6], v.R[8])), Math.round(v.fwdSpeed * 36) / 10,
            q.edge, r2(q.s || 0), r2(q.d || 0), r2(q.y), nc, r3(lo), v.gearbox ? v.mgear : v.gear, r2(v.input.steer), r2(v.input.throttle), r2(v.input.brake)];
    }
    samples() { const out = [], k = Math.min(this.n, KEEP); for (let i = this.n - k; i < this.n; i++) out.push(this.ring[i % KEEP]); return out; }

    // drawn surfaces under (x, z): [kind, y] from the top, within 6 m above / below y0
    drawn(city, x, z, y0) {
        const ms = [];
        for (const c of city.live) if (c.built && Math.abs(c.cx - x) < 140 && Math.abs(c.cz - z) < 140) for (const m of c.built.meshes) if (m.userData.kind === 'road' || m.userData.kind === 'core') ms.push(m);
        this.ray.set(new THREE.Vector3(x, y0 + 6, z), new THREE.Vector3(0, -1, 0));
        return this.ray.intersectObjects(ms, false).slice(0, 4).map(h => {
            // the road mesh's own numbers at that face: across (d), along (s), half width, flags (1 junction 2 one-way 4 zebra)
            const ds = h.object.geometry.attributes.ds, f = h.face;
            return ds && f ? [h.object.userData.kind, r3(h.point.y), r2(ds.getX(f.a)), r2(ds.getY(f.a)), r2(ds.getZ(f.a)), ds.getW(f.a)] : [h.object.userData.kind, r3(h.point.y)];
        });
    }

    // everything about now (a few ms: ~60 rays on the meshes near the car)
    state(shift, extra) {
        const v = shift.me.veh, net = shift.net, q = {}, city = shift.city;
        const wheels = v.wheels.map((h, k) => {
            const x = h.contact ? h.cx : v.px, z = h.contact ? h.cz : v.pz;
            net.query(x, z, -1, q);
            const d = this.drawn(city, x, z, q.y);
            return { k, contact: h.contact, comp: r3(h.comp), x: r2(x), z: r2(z), roadY: r3(q.y), drawnY: d.length ? d[0][1] : null, diff: d.length ? r3(d[0][1] - q.y) : null, hits: d,
                edge: q.edge, d: r2(q.d), off: q.off, junc: q.junc };
        });
        // a 9 x 9 grid every 2.5 m around the car: where the drawn road and the driven road disagree
        const grid = [], fx = v.R[6], fz = v.R[8], lx = v.R[0], lz = v.R[2];
        let worst = 0;
        for (let a = -4; a <= 4; a++) for (let b = -4; b <= 4; b++) {
            const x = v.px + fx * a * 2.5 + lx * b * 2.5, z = v.pz + fz * a * 2.5 + lz * b * 2.5;
            net.query(x, z, -1, q);
            const d = this.drawn(city, x, z, q.y), dy = d.length ? r3(d[0][1] - q.y) : null;
            if (dy !== null && Math.abs(dy) > Math.abs(worst)) worst = dy;
            grid.push([a, b, r2(x), r2(z), r3(q.y), dy, q.edge, q.junc, q.off, d.length ? d[0][0] : '']);
        }
        net.query(v.px, v.pz, -1, q);
        const e = q.edge, j = q.junc, cam = shift.cam.cam.position;
        const near = (jj) => jj >= 0 ? { j: jj, x: r2(net.jx[jj]), z: r2(net.jz[jj]), r: r2(net.jr[jj]), y: r3(net.jy[jj]), plane: net.jPlane ? net.jPlane[jj] : 0, gx: net.jgx ? r3(net.jgx[jj]) : 0, gz: net.jgz ? r3(net.jgz[jj]) : 0, edges: net.jEdges[jj].length } : null;
        return {
            game: 'tangier-taxi', version: VERSION, at: new Date().toISOString(), time: r2(shift.time),
            car: { x: r2(v.px), y: r3(v.py), z: r3(v.pz), yaw: r3(Math.atan2(v.R[6], v.R[8])), up: [r3(v.R[3]), r3(v.R[4]), r3(v.R[5])], kmh: Math.round(v.fwdSpeed * 36) / 10, cgY: r3(v.cgY),
                gearbox: v.gearbox || 'auto', gear: v.gearbox ? v.mgear : v.gear, rpm: Math.round(v.rpm), stalled: !!v.stalled, model: shift.opts && shift.opts.car },
            road: e >= 0 ? { edge: e, name: net.edgeName ? net.edgeName(e) : '', cls: net.eCls[e], len: r2(net.eLen[e]), hw: r2(net.eHw[e]), oneway: net.eOne[e], round: net.eRa[e],
                s: r2(q.s), d: r2(q.d), off: q.off, y: r3(q.y), wall: r2(q.wall), limit: q.lim, a: near(net.eA[e]), b: near(net.eB[e]) } : null,
            junction: near(j), wheels, worstDrawnMinusRoad: worst, grid,
            gridCols: 'ahead(x2.5m), right(x2.5m), x, z, roadY, drawnY - roadY, edge, junction, off (0 asphalt 1 kerb 2 pavement), drawn kind',
            camera: { mode: shift.cam.mode, x: r2(cam.x), y: r2(cam.y), z: r2(cam.z) },
            taxi: { money: Math.round(shift.taxi.money), fuel: r2(shift.taxi.fuel), ride: !!shift.taxi.ride, prompt: shift.taxi.prompt },
            quality: shift.quality && shift.quality.tier, scale: shift.scale, chunks: city.live.length,
            log: this.samples(), logCols: 't, x, y, z, yaw, km/h, edge, s, d, roadY, wheels on the ground, max compression, gear, steer, throttle, brake',
            events: this.events.slice(), cards: (shift.taxi.log || []).slice(-8).map(c => ({ kind: c.kind, title: c.title, total: c.total })),
            ...extra
        };
    }

    // the picture: call right after renderer.render (same task, the drawing buffer is still there)
    shot(canvas) {
        try {
            const W = 960, H = Math.round(960 * canvas.height / Math.max(1, canvas.width)), c = document.createElement('canvas');
            c.width = W; c.height = H; c.getContext('2d').drawImage(canvas, 0, 0, W, H);
            let u = c.toDataURL('image/jpeg', 0.72);
            if (u.length > 590000) u = c.toDataURL('image/jpeg', 0.45);
            return u.length > 590000 ? '' : u;
        } catch (e) { return ''; }
    }
}

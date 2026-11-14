// Road bot (owner request 2026-11-14): a driver that plays by itself to find broken roads for the developer.
// Dev only: `?dev&fresh&bot&proof` (tools/roadbot.mjs opens it in a browser and saves what it finds; see docs/ROADBOT.md).
// It picks a destination, asks net.route for the way, and drives it in the right lane (pure pursuit on the route line,
// speed from the curve ahead), with no traffic, endless fuel and no fines. While it drives it looks for:
//   cut    the route jumps: one street ends far from where the next begins
//   kink   the street line itself turns sharply (> 70° within 8 m) outside a junction
//   grass  the drawn top surface is ground (grass / sand) where the network says asphalt
//   height the drawn road is more than 15 cm above / below the road the car drives on
//   hole   nothing drawn at all under a point the network says is asphalt
//   offroad the bot left the asphalt while following the route (a turn it could not take: a weird corner / roundabout)
//   bump   a wheel hit hard (suspension at its stop, or the car jumped / dropped quickly)
//   stuck  no progress for 4 s with the gas on (a wall / kerb / step in the way); the bot is moved on 15 m
//   lost   the car is on a street the route does not use for 3 s (the route led where the car could not follow)
// Every finding = { id, kind, t, x, y, z, edge, junc, street, detail, trail (last 10 s of samples) } + a JPEG of the frame.
// One finding per kind per 20 m square. The page keeps them until the tool takes them (window.TT.bot.take()).
import * as THREE from 'three';

const SPOT = 20;

export class RoadBot {
    constructor(shift, opts) {
        this.S = shift; this.net = shift.net; this.opts = opts || {};
        this.rnd = mulberry(this.opts.seed || 1);
        this.path = null;            // { x: [], z: [], e: [], len } points every 2 m along the route, right lane
        this.k = 0;                  // index of the path point nearest the car
        this.found = []; this.seen = new Set(); this.shots = []; this.pics = {}; this.n = 0;
        this.trail = []; this.tt = 0; this.ct = 0; this.stuckT = 0; this.lostT = 0; this.offT = 0;
        this.trips = 0; this.km = 0; this.lx = null; this.lz = null; this.t = 0;
        this.ray = new THREE.Raycaster(); this.ray.far = 14; this.v3 = new THREE.Vector3(); this.down = new THREE.Vector3(0, -1, 0);
        this.q = {}; this.a = {};
        this.status = 'start';
    }

    // ---- the plan ----
    plan() {
        const net = this.net, S = this.S, v = S.me.veh, q = S.qp;
        if (!(q.edge >= 0)) return false;
        const hd = (v.R[6] * q.fx + v.R[8] * q.fz) >= 0 ? 1 : -1;
        for (let tries = 0; tries < 40; tries++) {
            const ang = this.rnd() * Math.PI * 2, dist = 400 + this.rnd() * 1100;
            net.query(v.px + Math.sin(ang) * dist, v.pz + Math.cos(ang) * dist, -1, this.q);
            const e = this.q.edge; if (e < 0 || net.eLen[e] < 30 || net.eCls[e] >= 6) continue;
            const r = net.route(q.edge, q.s, hd, e, net.eLen[e] / 2);
            if (!r || r.len < 250 || r.len > 4000) continue;
            this.build(r);
            this.dest = { e, name: net.edgeName(e, 'en') || '#' + e };
            this.status = 'trip ' + (this.trips + 1) + ' to ' + this.dest.name + ' (' + Math.round(r.len) + ' m)';
            return true;
        }
        return false;
    }
    // the route as a line every 2 m in the right lane; cut / kink checks on the way
    build(r) {
        const net = this.net, a = this.a, X = [], Z = [], E = [], D = [];
        let px = null, pz = null;
        for (let i = 0; i < r.edges.length; i++) {
            const e = r.edges[i][0], dir = r.edges[i][1], L = net.eLen[e];
            let s0 = dir > 0 ? 0 : L, s1 = dir > 0 ? L : 0;
            if (i === 0) s0 = this.S.qp.edge === e ? this.S.qp.s : s0;
            if (i === r.edges.length - 1) s1 = L / 2;
            const off = net.eOne[e] ? 0 : -dir * net.eHw[e] * 0.5;
            net.at(e, s0, 0, a);
            if (px !== null) {
                const gap = Math.hypot(a.x - px, a.z - pz);
                if (gap > 3) this.note('cut', a.x, a.y, a.z, e, 'route jumps ' + gap.toFixed(1) + ' m from #' + E[E.length - 1] + ' to #' + e, true);
            }
            const n = Math.max(1, Math.round(Math.abs(s1 - s0) / 2));
            for (let k = 0; k <= n; k++) {
                const s = s0 + (s1 - s0) * k / n;
                net.at(e, s, off, a); X.push(a.x); Z.push(a.z); E.push(e); D.push(dir);
            }
            net.at(e, s1, 0, a); px = a.x; pz = a.z;
            this.kinks(e);
        }
        this.path = { x: X, z: Z, e: E, d: D, n: X.length, edges: new Set(r.edges.map(x => x[0])) };
        this.k = 0;
    }
    kinks(e) {
        const net = this.net, a = this.a, L = net.eLen[e];
        if (this.kinked && this.kinked.has(e)) return;
        (this.kinked || (this.kinked = new Set())).add(e);
        let h0 = null;
        for (let s = 10; s < L - 10; s += 4) {
            net.at(e, s, 0, a); const h = Math.atan2(a.fx, a.fz);
            if (h0 !== null) {
                net.at(e, Math.min(L, s + 8), 0, this.q); const h2 = Math.atan2(this.q.fx, this.q.fz);
                let dh = Math.abs(h2 - h0); if (dh > Math.PI) dh = 2 * Math.PI - dh;
                if (dh > 1.22) { this.note('kink', a.x, a.y, a.z, e, 'street turns ' + Math.round(dh * 57.3) + '° within 12 m at s=' + Math.round(s), true); return; }
            }
            h0 = h;
        }
    }

    // ---- driving: called by the shift every tick after the player's input (it replaces it) ----
    drive(dt) {
        const S = this.S, v = S.me.veh, net = this.net, T = S.taxi;
        if (!(S.qp.edge >= 0)) return;   // the first tick: nothing known under the car yet
        this.t += dt;
        T.fuel = 40; T.money = Math.max(T.money, 1000);
        if (!this.path || this.k >= this.path.n - 3) {
            if (this.path) { this.trips++; }
            if (this.opts.spread && this.trips && this.trips % this.opts.spread === 0 && !this.jumped) { this.jump(); this.jumped = true; }
            else this.jumped = false;
            this.path = null;
            if (!this.plan()) { this.jump(); return; }
        }
        const P = this.path, fx = v.R[6], fz = v.R[8], lx = fz, lz = -fx;
        // nearest point ahead (search a little window forward)
        let best = this.k, bd = 1e9;
        for (let i = this.k; i < Math.min(P.n, this.k + 40); i++) { const d = (P.x[i] - v.px) ** 2 + (P.z[i] - v.pz) ** 2; if (d < bd) { bd = d; best = i; } }
        this.k = best;
        const sp = Math.abs(v.fwdSpeed);
        const look = Math.min(P.n - 1, this.k + Math.round((5 + sp * 0.55) / 2));
        const dx = P.x[look] - v.px, dz = P.z[look] - v.pz;
        const ang = Math.atan2(dx * lx + dz * lz, dx * fx + dz * fz);
        // the way on is behind (a U-turn at a dead end, a sharp turn missed): back up with the wheels the other way
        if (Math.abs(ang) > 1.7) this.back = true; else if (Math.abs(ang) < 0.9) this.back = false;
        if (this.back) { v.input.steer = -Math.sign(ang); v.input.throttle = 0; v.input.brake = 0.7; v.input.handbrake = 0; v.input.clutch = 0; if (v.gearbox) v.gearbox = null; this.watch(dt, v, sp); return; }
        v.input.steer = Math.max(-1, Math.min(1, ang * 2.2));
        // speed from the curve over the next ~36 m
        let turn = 0; const k2 = Math.min(P.n - 1, this.k + 18);
        for (let i = this.k + 2; i < k2; i += 2) {
            const h1 = Math.atan2(P.x[i] - P.x[i - 2], P.z[i] - P.z[i - 2]), h2 = Math.atan2(P.x[i + 2 < P.n ? i + 2 : i] - P.x[i], P.z[i + 2 < P.n ? i + 2 : i] - P.z[i]);
            let d = Math.abs(h2 - h1); if (d > Math.PI) d = 2 * Math.PI - d; turn = Math.max(turn, d);
        }
        const lim = Math.min(S.qp.lim || 50, this.opts.kmh || 50);
        const want = Math.max(12, lim - turn * 70) / 3.6;
        v.input.throttle = sp < want ? Math.min(1, (want - sp) * 0.5 + 0.2) : 0;
        v.input.brake = sp > want + 1.5 ? Math.min(1, (sp - want) * 0.3) : 0;
        v.input.handbrake = 0; v.input.clutch = 0;
        if (v.gearbox) v.gearbox = null;
        this.watch(dt, v, sp);
    }

    // move the taxi somewhere else in town (a random street), facing along it
    jump() {
        const net = this.net, v = this.S.me.veh, a = this.a;
        for (let tries = 0; tries < 50; tries++) {
            const e = Math.floor(this.rnd() * net.ne);
            if (net.eLen[e] < 40 || net.eCls[e] >= 6) continue;
            net.at(e, net.eLen[e] / 2, net.eOne[e] ? 0 : -net.eHw[e] * 0.5, a);
            v.setPose(a.x, a.y + v.cgY + 0.45, a.z, Math.atan2(a.fx, a.fz));
            v.vx = v.vy = v.vz = 0;
            net.query(a.x, a.z, e, this.S.qp);
            this.path = null; this.stuckT = 0; this.lostT = 0; this.trail.length = 0; this.lx = null;
            this.S.city.stream(a.x, a.z, 0, true);
            return;
        }
    }

    // ---- looking for trouble ----
    watch(dt, v, sp) {
        const S = this.S, net = this.net, q = S.qp, P = this.path;
        if (this.lx !== null) this.km += Math.hypot(v.px - this.lx, v.pz - this.lz) / 1000;
        this.lx = v.px; this.lz = v.pz;
        if ((this.tt -= dt) <= 0) {
            this.tt = 0.25;
            let comp = 0; for (const w of v.wheels) if (w.comp > comp) comp = w.comp;
            this.trail.push([Math.round(this.t * 100) / 100, r2(v.px), r2(v.py), r2(v.pz), Math.round(sp * 36) / 10, q.edge, r2(q.d || 0), q.junc, r2(q.y), r3(comp), r2(v.input.steer)]);
            if (this.trail.length > 40) this.trail.shift();
            // left the asphalt
            const hw = net.eHw[q.edge] || 3;
            if (q.edge >= 0 && Math.abs(q.d) > hw + 1.2 && q.junc < 0) { if ((this.offT += 0.25) >= 0.75) { this.note('offroad', v.px, v.py, v.pz, q.edge, (Math.abs(q.d) - hw).toFixed(1) + ' m off the asphalt'); this.offT = -3; } }
            else if (this.offT > 0) this.offT = 0; else this.offT = Math.min(0, this.offT + 0.25);
            // hard hits
            if (comp > 0.3 || Math.abs(v.vy) > 3.2) this.note('bump', v.px, v.py, v.pz, q.edge, 'suspension ' + comp.toFixed(2) + ' m, vertical ' + v.vy.toFixed(1) + ' m/s');
            // stuck
            if (sp < 1 && (v.input.throttle > 0.3 || this.back)) { if ((this.stuckT += 0.25) >= 4) { this.note('stuck', v.px, v.py, v.pz, q.edge, 'no progress for 4 s'); this.skip(15); } } else this.stuckT = 0;
            // lost
            if (P && q.edge >= 0 && q.junc < 0 && !P.edges.has(q.edge)) { if ((this.lostT += 0.25) >= 3) { this.note('lost', v.px, v.py, v.pz, q.edge, 'on #' + q.edge + ', not on the route'); this.path = null; this.lostT = 0; } }
            else this.lostT = 0;
        }
        // the drawn surface across the road 8 m ahead, once a second
        if ((this.ct -= dt) <= 0) { this.ct = 1; this.surface(v); }
    }
    skip(m) {
        const P = this.path, v = this.S.me.veh; if (!P) return this.jump();
        const k = Math.min(P.n - 2, this.k + Math.round(m / 2));
        const h = Math.atan2(P.x[k + 1] - P.x[k], P.z[k + 1] - P.z[k]);
        net0(this.net, P.x[k], P.z[k], this.q);
        v.setPose(P.x[k], this.q.y + v.cgY + 0.45, P.z[k], h); v.vx = v.vy = v.vz = 0;
        this.k = k; this.stuckT = 0;
    }
    surface(v) {
        const net = this.net, S = this.S, q = this.q, fx = v.R[6], fz = v.R[8], lx = fz, lz = -fx;
        const ms = [];
        for (const c of S.city.live) if (c.built && Math.abs(c.cx - v.px) < 130 && Math.abs(c.cz - v.pz) < 130) for (const m of c.built.meshes) if (m.userData.kind === 'road' || m.userData.kind === 'core') ms.push(m);
        if (!ms.length) return;
        for (const ahead of [8, 16]) for (let b = -2; b <= 2; b++) {
            const x = v.px + fx * ahead + lx * b * 2.5, z = v.pz + fz * ahead + lz * b * 2.5;
            net.query(x, z, -1, q);
            if (q.edge < 0) continue;
            const inside = q.junc >= 0 ? true : Math.abs(q.d) < net.eHw[q.edge] - 0.4;
            if (!inside) continue;
            this.v3.set(x, q.y + 6, z); this.ray.set(this.v3, this.down);
            const hit = this.ray.intersectObjects(ms, false)[0];
            if (!hit) { this.note('hole', x, q.y, z, q.edge, 'nothing drawn under asphalt'); continue; }
            const dy = hit.point.y - q.y;
            if (hit.object.userData.kind === 'core') {
                const col = hit.object.geometry.attributes.col, f = hit.face;
                const r = col.getX(f.a), g = col.getY(f.a), bl = col.getZ(f.a);   // normalized 0..1
                const green = g > r + 0.02 && g > bl + 0.1, sand = r > 0.7 && bl < 0.68 && Math.abs(r - g) < 0.1;
                if ((green || sand) && dy > -0.05) this.note('grass', x, hit.point.y, z, q.edge, (green ? 'grass' : 'ground') + ' drawn ' + dy.toFixed(2) + ' m over the asphalt' + (q.junc >= 0 ? ' (junction ' + q.junc + ')' : ''));
                else if (dy > 0.15) this.note('height', x, hit.point.y, z, q.edge, 'pavement / object ' + dy.toFixed(2) + ' m over the asphalt');
            } else if (Math.abs(dy) > 0.15) this.note('height', x, hit.point.y, z, q.edge, 'drawn road ' + dy.toFixed(2) + ' m from the driven road');
        }
    }

    note(kind, x, y, z, edge, detail, quiet) {
        const key = kind + ':' + Math.round(x / SPOT) + ':' + Math.round(z / SPOT);
        if (this.seen.has(key)) return;
        this.seen.add(key);
        this.net.query(x, z, -1, this.q);
        const f = { id: ++this.n, kind, t: Math.round(this.t * 10) / 10, x: r2(x), y: r2(y), z: r2(z), edge, junc: this.q.junc, d: r2(this.q.d || 0),
            street: edge >= 0 ? this.net.edgeName(edge, 'en') || '' : '', detail, car: [r2(this.S.me.veh.px), r2(this.S.me.veh.pz)], trail: this.trail.slice(-40) };
        this.found.push(f);
        if (!quiet || kind === 'cut') this.shots.push(f.id);   // the frame drawn next is saved with it
    }
    // for the tool: everything new since the last call
    take() { const f = this.found; this.found = []; return { found: f, status: this.status, trips: this.trips, km: Math.round(this.km * 100) / 100, t: Math.round(this.t) }; }
}
function net0(net, x, z, q) { return net.query(x, z, -1, q); }
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

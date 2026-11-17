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

    laneOffset(e, dir) {
        const net = this.net, hw = net.eHw[e];
        if (net.eOne[e]) return hw > 3.9 ? -(hw - 1.9) : 0;
        return -dir * Math.min(hw * 0.5, 2.5);
    }

    // ---- the plan ----
    plan() {
        const net = this.net, S = this.S, v = S.me.veh, q = S.qp;
        if (!(q.edge >= 0)) return false;
        const hd = (v.R[6] * q.fx + v.R[8] * q.fz) >= 0 ? 1 : -1;
        for (let tries = 0; tries < 40; tries++) {
            const ang = this.rnd() * Math.PI * 2, dist = 300 + this.rnd() * 1200;
            net.query(v.px + Math.sin(ang) * dist, v.pz + Math.cos(ang) * dist, -1, this.q);
            const e = this.q.edge; if (e < 0 || net.eLen[e] < 8 || net.eCls[e] >= 6) continue;
            const r = net.route(q.edge, q.s, hd, e, net.eLen[e] / 2);
            if (!r || r.len < 150 || r.len > 4000) continue;
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
        let px = null, pz = null, prevE = -1, prevDir = 0;
        for (let i = 0; i < r.edges.length; i++) {
            const e = r.edges[i][0], dir = r.edges[i][1], L = net.eLen[e];
            let s0 = dir > 0 ? 0 : L, s1 = dir > 0 ? L : 0;
            if (i === 0) s0 = this.S.qp.edge === e ? this.S.qp.s : s0;
            if (i === r.edges.length - 1) s1 = L / 2;
            const off = this.laneOffset(e, dir);
            net.at(e, s0, 0, a);
            if (px !== null) {
                const gap = Math.hypot(a.x - px, a.z - pz);
                const prevEndJ = prevDir > 0 ? net.eB[prevE] : net.eA[prevE];
                const curStartJ = dir > 0 ? net.eA[e] : net.eB[e];
                if (gap > 3 || prevEndJ !== curStartJ) {
                    const msg = 'route jumps ' + gap.toFixed(1) + ' m from #' + prevE + ' (J' + prevEndJ + ') to #' + e + ' (J' + curStartJ + ')';
                    this.note('cut', a.x, a.y, a.z, e, msg, true);
                }
            }
            const n = Math.max(1, Math.round(Math.abs(s1 - s0) / 2));
            for (let k = 0; k <= n; k++) {
                const s = s0 + (s1 - s0) * k / n;
                net.at(e, s, off, a); X.push(a.x); Z.push(a.z); E.push(e); D.push(dir);
            }
            net.at(e, s1, 0, a); px = a.x; pz = a.z; prevE = e; prevDir = dir;
            this.kinks(e);
        }
        this.path = { x: X, z: Z, e: E, d: D, n: X.length, edges: new Set(r.edges.map(x => x[0])) };
        this.k = 0;
    }
    kinks(e) {
        const net = this.net, a = this.a, L = net.eLen[e];
        if (this.kinked && this.kinked.has(e)) return;
        (this.kinked || (this.kinked = new Set())).add(e);
        if (L < 8) return;
        const sStart = Math.min(L * 0.25, Math.max(2, net.jr[net.eA[e]] * 0.6));
        const sEnd = Math.max(sStart, L - Math.min(L * 0.25, Math.max(2, net.jr[net.eB[e]] * 0.6)));
        let h0 = null;
        for (let s = sStart; s <= sEnd; s += 2) {
            net.at(e, s, 0, a); const h = Math.atan2(a.fx, a.fz);
            if (h0 !== null) {
                net.at(e, Math.min(L, s + 8), 0, this.q); const h2 = Math.atan2(this.q.fx, this.q.fz);
                let dh = Math.abs(h2 - h0); if (dh > Math.PI) dh = 2 * Math.PI - dh;
                if (dh > 1.22) { this.note('kink', a.x, a.y, a.z, e, 'street turns ' + Math.round(dh * 57.3) + '° within 10 m at s=' + Math.round(s), true); return; }
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
    jump(targetEdge) {
        const net = this.net, v = this.S.me.veh, a = this.a;
        for (let tries = 0; tries < 50; tries++) {
            const e = targetEdge >= 0 ? targetEdge : Math.floor(this.rnd() * net.ne);
            if (targetEdge === undefined && (net.eLen[e] < 40 || net.eCls[e] >= 6)) continue;
            net.at(e, net.eLen[e] / 2, this.laneOffset(e, 1), a);
            v.setPose(a.x, a.y + v.cgY + 0.45, a.z, Math.atan2(a.fx, a.fz));
            v.vx = v.vy = v.vz = 0;
            net.query(a.x, a.z, e, this.S.qp);
            this.path = null; this.stuckT = 0; this.lostT = 0; this.trail.length = 0; this.lx = null;
            this.S.city.stream(a.x, a.z, 0, true);
            return;
        }
    }

    // warp to inspect a specific coordinate/edge in the 3D scene (for patrol verification + screenshots)
    warpTo(x, z, edge) {
        const net = this.net, S = this.S, v = S.me.veh, q = this.q;
        net.query(x, z, edge >= 0 ? edge : -1, q);
        const yaw = Math.atan2(q.fx || 0, q.fz || 1);
        v.setPose(x, q.y + v.cgY + 0.45, z, yaw);
        v.vx = v.vy = v.vz = 0;
        net.query(x, z, edge >= 0 ? edge : -1, S.qp);
        this.path = null; this.stuckT = 0; this.lostT = 0; this.trail.length = 0; this.lx = null;
        S.city.stream(x, z, 0, true);
        for (let k = 0; k < 60; k++) S.cam.update(0.05, S.me);
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
            // only treat as asphalt if inside the street width or inside the drawn junction disc (jr + 0.2)
            const inside = q.junc >= 0
                ? (net.jEdges[q.junc].length >= 3 && Math.hypot(x - net.jx[q.junc], z - net.jz[q.junc]) <= net.jr[q.junc] + 0.2) || Math.abs(q.d) < net.eHw[q.edge] - 0.4
                : Math.abs(q.d) < net.eHw[q.edge] - 0.4;
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

    // ---- Full road network node & route patrol across every junction (0..nj-1) and edge (0..ne-1) ----
    patrolAllNodes(opts = {}) {
        const net = this.net, NJ = net.nj, NE = net.ne;
        const coordAnomalies = [], pathfindingErrors = [];
        const counts = { coord: {}, path: {} };
        const addCoord = (kind, item) => { counts.coord[kind] = (counts.coord[kind] || 0) + 1; coordAnomalies.push(Object.assign({ kind }, item)); };
        const addPath = (kind, item) => { counts.path[kind] = (counts.path[kind] || 0) + 1; pathfindingErrors.push(Object.assign({ kind }, item)); };
        const q = {}, o = {};

        // 1. Check every junction node coordinate & geometry
        const box = net.box;
        for (let j = 0; j < NJ; j++) {
            const x = net.jx[j], y = net.jy[j], z = net.jz[j], r = net.jr[j];
            if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z) || !Number.isFinite(r)
                || x < box.x0 || x > box.x1 || z < box.z0 || z > box.z1) {
                addCoord('out_of_bounds_node', { junction: j, x: r2(x), y: r2(y), z: r2(z), r: r2(r) });
            }
            const deg = net.jEdges[j].length;
            if (deg === 0) addPath('isolated_node', { junction: j, x: r2(x), z: r2(z) });
            if (deg === 1) {
                const e = net.jEdges[j][0];
                addPath('dead_end_node', { junction: j, edge: e, x: r2(x), y: r2(y), z: r2(z), street: net.edgeName(e, 'en'), oneway: !!net.eOne[e], len: r2(net.eLen[e]) });
            }
            // one-way sink or source at multi-edge junction
            if (deg >= 2) {
                let inC = 0, outC = 0;
                for (const e of net.jEdges[j]) {
                    if (!net.eOne[e]) { inC++; outC++; }
                    else if (net.eA[e] === j) outC++;
                    else inC++;
                }
                if (inC > 0 && outC === 0) addPath('oneway_sink_node', { junction: j, x: r2(x), y: r2(y), z: r2(z), inDeg: inC, outDeg: outC, edges: net.jEdges[j].slice() });
                else if (outC > 0 && inC === 0) addPath('oneway_source_node', { junction: j, x: r2(x), y: r2(y), z: r2(z), inDeg: inC, outDeg: outC, edges: net.jEdges[j].slice() });
            }
            // multi-way (+ / x) crossing geometry & junction plane height consistency
            if (deg >= 3) {
                let worstH = 0;
                for (let a = 0; a < 8; a++) for (const f of [0, 0.7]) {
                    const sx = x + Math.cos(a * Math.PI / 4) * r * f, sz = z + Math.sin(a * Math.PI / 4) * r * f;
                    net.query(sx, sz, -1, q);
                    if (q.edge >= 0 && net.eA[q.edge] !== j && net.eB[q.edge] !== j) continue;
                    const py = net.jPlane[j] ? net.planeY(j, sx, sz) : y;
                    const dy = q.y - py;
                    if (Math.abs(dy) > Math.abs(worstH)) worstH = dy;
                }
                if (Math.abs(worstH) > 0.12) {
                    addCoord('junction_height_mismatch', { junction: j, x: r2(x), y: r2(y), z: r2(z), deltaY: r3(worstH), deg });
                }
                // acute angles between edges leaving this junction
                const dirs = [];
                for (const e of net.jEdges[j]) {
                    const atA = net.eA[e] === j, len = net.eLen[e];
                    net.at(e, atA ? Math.min(len, 6) : Math.max(0, len - 6), 0, o);
                    dirs.push({ e, ang: Math.atan2(atA ? o.fx : -o.fx, atA ? o.fz : -o.fz), ra: !!net.eRa[e] });
                }
                dirs.sort((u, v) => u.ang - v.ang);
                let minAngle = 180;
                for (let k = 0; k < dirs.length; k++) {
                    const nxt = dirs[(k + 1) % dirs.length];
                    let da = (nxt.ang - dirs[k].ang) * 180 / Math.PI;
                    if (da < 0) da += 360;
                    if (da < minAngle) minAngle = da;
                }
                if (minAngle < 25 && deg >= 4) {
                    addCoord('acute_multi_junction', { junction: j, x: r2(x), y: r2(y), z: r2(z), deg, minAngleDeg: r2(minAngle), hasRoundabout: dirs.some(d => d.ra) });
                }
            }
        }

        // Check closely spaced junction pairs (overlapping plazas / clustered intersections)
        const jCell = new Map(), JC = 40, jkey = (a, b) => a * 100000 + b;
        for (let j = 0; j < NJ; j++) {
            if (net.jEdges[j].length < 3) continue;
            const ci = Math.floor(net.jx[j] / JC), cj = Math.floor(net.jz[j] / JC);
            const k = jkey(ci, cj);
            let l = jCell.get(k); if (!l) jCell.set(k, l = []); l.push(j);
        }
        for (let j = 0; j < NJ; j++) {
            if (net.jEdges[j].length < 3) continue;
            const ci = Math.floor(net.jx[j] / JC), cj = Math.floor(net.jz[j] / JC);
            for (let da = -1; da <= 1; da++) for (let db = -1; db <= 1; db++) {
                for (const k of jCell.get(jkey(ci + da, cj + db)) || []) {
                    if (k <= j) continue;
                    const dist = Math.hypot(net.jx[k] - net.jx[j], net.jz[k] - net.jz[j]);
                    if (dist < net.jr[j] + net.jr[k] + 2) {
                        addCoord('overlapping_junction_plazas', { junctionA: j, junctionB: k, x: r2((net.jx[j] + net.jx[k]) / 2), z: r2((net.jz[j] + net.jz[k]) / 2), dist: r2(dist), sumRadii: r2(net.jr[j] + net.jr[k]) });
                    }
                }
            }
        }

        // 2. Check every edge and its samples for coordinate, kink, height, ground-overlap, and pavement anomalies
        for (let e = 0; e < NE; e++) {
            const off = net.eOff[e], n = net.eN[e], L = net.eLen[e], ja = net.eA[e], jb = net.eB[e], hw = net.eHw[e];
            const street = net.edgeName(e, 'en');
            if (n < 2 || L < 1.0) {
                addCoord('degenerate_edge', { edge: e, junctionA: ja, junctionB: jb, len: r2(L), samples: n, street });
                continue;
            }
            // Endpoint coordinate match with junctions
            const dA = Math.hypot(net.px[off] - net.jx[ja], net.pz[off] - net.jz[ja]);
            const dB = Math.hypot(net.px[off + n - 1] - net.jx[jb], net.pz[off + n - 1] - net.jz[jb]);
            if (dA > 1.0) addCoord('junction_endpoint_mismatch', { edge: e, junction: ja, end: 'A', gapM: r2(dA), x: r2(net.px[off]), z: r2(net.pz[off]), jx: r2(net.jx[ja]), jz: r2(net.jz[ja]), street });
            if (dB > 1.0) addCoord('junction_endpoint_mismatch', { edge: e, junction: jb, end: 'B', gapM: r2(dB), x: r2(net.px[off + n - 1]), z: r2(net.pz[off + n - 1]), jx: r2(net.jx[jb]), jz: r2(net.jz[jb]), street });

            let maxGrade = 0, maxGradeAt = -1, groundHit = null, dupSegs = 0, prevPl = net.pl[off], prevPr = net.pr[off], paveDrops = 0;
            for (let k = 0; k < n; k++) {
                const i = off + k, px = net.px[i], py = net.py[i], pz = net.pz[i];
                if (!Number.isFinite(px) || !Number.isFinite(py) || !Number.isFinite(pz)
                    || px < box.x0 || px > box.x1 || pz < box.z0 || pz > box.z1) {
                    addCoord('out_of_bounds_sample', { edge: e, sample: i, x: r2(px), y: r2(py), z: r2(pz), street });
                    break;
                }
                if (k > 0) {
                    const ds = Math.hypot(px - net.px[i - 1], pz - net.pz[i - 1]);
                    if (ds < 0.05) dupSegs++;
                    else {
                        const gr = Math.abs(py - net.py[i - 1]) / ds;
                        if (gr > maxGrade) { maxGrade = gr; maxGradeAt = i; }
                    }
                    if (Math.abs(net.pl[i] - prevPl) > 2.2 || Math.abs(net.pr[i] - prevPr) > 2.2) paveDrops++;
                    prevPl = net.pl[i]; prevPr = net.pr[i];
                }
                const gy = net.groundAt(px, pz);
                if (gy > py - 0.05 && !groundHit) {
                    groundHit = { edge: e, sample: i, x: r2(px), y: r2(py), z: r2(pz), groundY: r2(gy), overBy: r3(gy - py), street };
                }
            }
            if (dupSegs > 0) addCoord('duplicate_samples', { edge: e, count: dupSegs, x: r2(net.px[off]), z: r2(net.pz[off]), street });
            if (maxGrade > 0.30 && maxGradeAt >= 0) addCoord('steep_grade', { edge: e, grade: r3(maxGrade), x: r2(net.px[maxGradeAt]), y: r2(net.py[maxGradeAt]), z: r2(net.pz[maxGradeAt]), street });
            if (groundHit) addCoord('ground_over_road', groundHit);
            if (paveDrops >= 3 && L > 20) addCoord('fragmented_pavement', { edge: e, transitions: paveDrops, x: r2(net.px[off + (n >> 1)]), z: r2(net.pz[off + (n >> 1)]), street });

            // Kink check along the edge
            if (L >= 8) {
                const sStart = Math.min(L * 0.25, Math.max(2, net.jr[ja] * 0.6));
                const sEnd = Math.max(sStart, L - Math.min(L * 0.25, Math.max(2, net.jr[jb] * 0.6)));
                let h0 = null;
                for (let s = sStart; s <= sEnd; s += 2) {
                    net.at(e, s, 0, o); const h = Math.atan2(o.fx, o.fz);
                    if (h0 !== null) {
                        net.at(e, Math.min(L, s + 8), 0, q); const h2 = Math.atan2(q.fx, q.fz);
                        let dh = Math.abs(h2 - h0); if (dh > Math.PI) dh = 2 * Math.PI - dh;
                        if (dh > 1.22) {
                            addCoord('kink', { edge: e, s: Math.round(s), angleDeg: Math.round(dh * 57.3), x: r2(o.x), y: r2(o.y), z: r2(o.z), street, roundabout: !!net.eRa[e] });
                            break;
                        }
                    }
                    h0 = h;
                }
            }

            // Parallel / overlapping carriageway check at midpoint (detects misaligned double carriageways or crossing overlaps)
            if (L >= 16) {
                const mid = off + (n >> 1);
                const mx = net.px[mid], mz = net.pz[mid], mfx = net.tx[mid], mfz = net.tz[mid];
                const aCell = Math.floor((mx - net.gx0) / 16), bCell = Math.floor((mz - net.gz0) / 16);
                if (aCell >= 0 && bCell >= 0 && aCell < net.gnx && bCell < net.gnz) {
                    const c = bCell * net.gnx + aCell;
                    const seenOther = new Set();
                    for (let kk = net.cellStart[c], end = net.cellStart[c + 1]; kk < end; kk++) {
                        const si = net.cellList[kk], oe = net.sE[si];
                        if (oe <= e || seenOther.has(oe)) continue;
                        if (net.eA[oe] === ja || net.eA[oe] === jb || net.eB[oe] === ja || net.eB[oe] === jb) continue;
                        const dist = Math.hypot(net.px[si] - mx, net.pz[si] - mz);
                        const minClear = hw + net.eHw[oe] - 0.5;
                        if (dist < minClear) {
                            seenOther.add(oe);
                            const dot = Math.abs(mfx * net.tx[si] + mfz * net.tz[si]);
                            addCoord('overlapping_carriageways', { edgeA: e, edgeB: oe, x: r2(mx), z: r2(mz), dist: r2(dist), combinedHalfWidths: r2(hw + net.eHw[oe]), parallelCos: r3(dot), onewayA: !!net.eOne[e], onewayB: !!net.eOne[oe], streetA: street, streetB: net.edgeName(oe, 'en') });
                        }
                    }
                }
            }
        }

        // 3. Pathfinding patrol across ALL junctions using directed reachability + net.route()
        // Hub: junction near city centre (2350, -1780)
        let hubJ = 0, hubD = 1e18;
        for (let j = 0; j < NJ; j++) {
            if (net.jEdges[j].length < 2) continue;
            const d = Math.hypot(net.jx[j] - 2350, net.jz[j] + 1780);
            if (d < hubD) { hubD = d; hubJ = j; }
        }
        // Directed BFS forward & reverse from hubJ
        const fwdReach = new Uint8Array(NJ), revReach = new Uint8Array(NJ);
        {
            const qf = [hubJ]; fwdReach[hubJ] = 1;
            for (let head = 0; head < qf.length; head++) {
                const u = qf[head];
                for (const e of net.jEdges[u]) {
                    if (!net.canLeave(e, u)) continue;
                    const v = net.other(e, u);
                    if (!fwdReach[v]) { fwdReach[v] = 1; qf.push(v); }
                }
            }
            const qr = [hubJ]; revReach[hubJ] = 1;
            for (let head = 0; head < qr.length; head++) {
                const u = qr[head];
                for (const e of net.jEdges[u]) {
                    const v = net.other(e, u);
                    if (!net.canLeave(e, v)) continue;
                    if (!revReach[v]) { revReach[v] = 1; qr.push(v); }
                }
            }
        }
        for (let j = 0; j < NJ; j++) {
            if (!fwdReach[j]) addPath('unreachable_from_hub', { junction: j, x: r2(net.jx[j]), y: r2(net.jy[j]), z: r2(net.jz[j]), deg: net.jEdges[j].length });
            else if (!revReach[j]) addPath('oneway_trap_no_return', { junction: j, x: r2(net.jx[j]), y: r2(net.jy[j]), z: r2(net.jz[j]), deg: net.jEdges[j].length });
        }

        // Nearest-neighbor patrol tour visiting EVERY junction node (0..NJ-1) and executing net.route() between consecutive nodes
        const visited = new Uint8Array(NJ), tour = [];
        let cur = hubJ;
        const jGrid = new Map(), JCELL = 150;
        for (let j = 0; j < NJ; j++) {
            const k = Math.floor(net.jx[j] / JCELL) * 100000 + Math.floor(net.jz[j] / JCELL);
            let l = jGrid.get(k); if (!l) jGrid.set(k, l = []); l.push(j);
        }
        for (let step = 0; step < NJ; step++) {
            visited[cur] = 1;
            tour.push(cur);
            if (step === NJ - 1) break;
            const cx = net.jx[cur], cz = net.jz[cur], ci = Math.floor(cx / JCELL), cj = Math.floor(cz / JCELL);
            let best = -1, bd = 1e18;
            for (let rad = 0; rad <= 6 && best < 0; rad++) {
                for (let da = -rad; da <= rad; da++) for (let db = -rad; db <= rad; db++) {
                    if (Math.abs(da) !== rad && Math.abs(db) !== rad) continue;
                    for (const cand of jGrid.get((ci + da) * 100000 + (cj + db)) || []) {
                        if (visited[cand]) continue;
                        const d = (net.jx[cand] - cx) ** 2 + (net.jz[cand] - cz) ** 2;
                        if (d < bd) { bd = d; best = cand; }
                    }
                }
            }
            if (best < 0) {
                for (let cand = 0; cand < NJ; cand++) {
                    if (visited[cand]) continue;
                    const d = (net.jx[cand] - cx) ** 2 + (net.jz[cand] - cz) ** 2;
                    if (d < bd) { bd = d; best = cand; }
                }
            }
            cur = best;
        }

        const edgeForJ = (j, preferOut) => {
            for (const e of net.jEdges[j]) {
                if (preferOut ? net.canLeave(e, j) : (!net.eOne[e] || net.eB[e] === j)) return e;
            }
            return -1;
        };

        let routesTested = 0, routesSucceeded = 0, totalRouteMeters = 0;
        const maxRoutes = opts.maxRoutes || NJ;
        const cutSeen = new Set();
        for (let t = 0; t < Math.min(tour.length - 1, maxRoutes); t++) {
            const j0 = tour[t], j1 = tour[t + 1];
            const e0 = edgeForJ(j0, true), e1 = edgeForJ(j1, false);
            if (e0 < 0 || e1 < 0) {
                addPath('route_no_legal_exit_or_entry', { fromJunction: j0, toJunction: j1, fromEdge: e0, toEdge: e1, x: r2(net.jx[j0]), z: r2(net.jz[j0]), toX: r2(net.jx[j1]), toZ: r2(net.jz[j1]) });
                continue;
            }
            const dir0 = net.eA[e0] === j0 ? 1 : -1;
            const s0 = dir0 > 0 ? Math.min(net.eLen[e0] * 0.25, 4) : Math.max(net.eLen[e0] * 0.75, net.eLen[e0] - 4);
            const s1 = net.eLen[e1] / 2;
            routesTested++;
            const r = net.route(e0, s0, dir0, e1, s1);
            if (!r) {
                addPath('route_failed', { fromJunction: j0, toJunction: j1, fromEdge: e0, toEdge: e1, x: r2(net.jx[j0]), z: r2(net.jz[j0]), toX: r2(net.jx[j1]), toZ: r2(net.jz[j1]) });
                continue;
            }
            routesSucceeded++;
            totalRouteMeters += r.len;
            const euclid = Math.hypot(net.jx[j1] - net.jx[j0], net.jz[j1] - net.jz[j0]);
            if (euclid > 15 && euclid < 120 && r.len > euclid * 10) {
                addPath('excessive_detour', { fromJunction: j0, toJunction: j1, x: r2(net.jx[j0]), z: r2(net.jz[j0]), euclidM: r2(euclid), routeM: r2(r.len), ratio: r2(r.len / euclid) });
            }
            // Validate every edge transition in the returned route
            let prevE = -1, prevD = 0, px = 0, pz = 0;
            for (let i = 0; i < r.edges.length; i++) {
                const [re, rd] = r.edges[i];
                if (net.eOne[re] && rd < 0) {
                    addPath('wrong_way_in_route', { edge: re, fromJunction: j0, toJunction: j1, x: r2(net.px[net.eOff[re]]), z: r2(net.pz[net.eOff[re]]), street: net.edgeName(re, 'en') });
                }
                const L = net.eLen[re], sStart = rd > 0 ? 0 : L, sEnd = rd > 0 ? L : 0;
                net.at(re, sStart, 0, o);
                if (i > 0) {
                    const gap = Math.hypot(o.x - px, o.z - pz);
                    const pEndJ = prevD > 0 ? net.eB[prevE] : net.eA[prevE];
                    const cStartJ = rd > 0 ? net.eA[re] : net.eB[re];
                    if ((gap > 3 || pEndJ !== cStartJ) && !cutSeen.has(prevE + '>' + re)) {
                        cutSeen.add(prevE + '>' + re);
                        addPath('route_discontinuity', { prevEdge: prevE, nextEdge: re, prevEndJ: pEndJ, nextStartJ: cStartJ, gapM: r2(gap), x: r2(o.x), y: r2(o.y), z: r2(o.z) });
                    }
                }
                net.at(re, sEnd, 0, o);
                px = o.x; pz = o.z; prevE = re; prevD = rd;
            }
        }

        return {
            summary: {
                patrolledAt: new Date().toISOString(),
                totalNodes: NJ,
                nodesPatrolled: tour.length,
                totalEdges: NE,
                totalSamples: net.n,
                hubJunction: hubJ,
                routesTested,
                routesSucceeded,
                routesFailed: routesTested - routesSucceeded,
                totalRouteKm: r2(totalRouteMeters / 1000),
                totalPathfindingErrors: pathfindingErrors.length,
                totalCoordinateAnomalies: coordAnomalies.length,
                pathfindingErrorCounts: counts.path,
                coordinateAnomalyCounts: counts.coord
            },
            pathfindingErrors,
            coordinateAnomalies: coordAnomalies
        };
    }

    note(kind, x, y, z, edge, detail, quiet) {
        const key = kind + ':' + Math.round(x / SPOT) + ':' + Math.round(z / SPOT);
        if (this.seen.has(key)) return;
        this.seen.add(key);
        this.net.query(x, z, -1, this.q);
        const car = this.S.me.veh;
        const dist = Math.hypot(x - car.px, z - car.pz);
        const f = { id: ++this.n, kind, t: Math.round(this.t * 10) / 10, x: r2(x), y: r2(y), z: r2(z), edge, junc: this.q.junc, d: r2(this.q.d || 0),
            street: edge >= 0 ? this.net.edgeName(edge, 'en') || '' : '', detail, car: [r2(car.px), r2(car.pz)], trail: this.trail.slice(-40) };
        this.found.push(f);
        if (!quiet || (kind === 'cut' && dist < 80)) this.shots.push(f.id);   // capture only when the spot is actually in view
    }
    // for the tool: everything new since the last call
    take() { const f = this.found; this.found = []; return { found: f, status: this.status, trips: this.trips, km: Math.round(this.km * 100) / 100, t: Math.round(this.t) }; }
}
function net0(net, x, z, q) { return net.query(x, z, -1, q); }
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

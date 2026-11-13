// Traffic of the city: the traffic lights (two phases per junction, all-red between) and the other cars. Each car is
// a full physics car (core/src/vehicle.js) driven along the streets: keeps to its lane, picks a street at every junction
// (never the wrong way up a one-way street), slows for bends and turns, stops at red lights, gives way at junctions
// without lights, keeps its distance to the car ahead. Cars far from the taxi are moved to free streets near it.
import { Vehicle, SPECS } from '../core/src/vehicle.js';
import { CarView, carDims } from '../core/src/carview.js';

export const CYCLE = 36;
// state of phase ph at light L at time t: 0 green, 1 amber, 2 red
export function lightState(net, L, ph, t) {
    const tt = (t + net.lights[L].off) % CYCLE;
    if (ph === 0) return tt < 14 ? 0 : tt < 17 ? 1 : 2;
    return tt < 18 ? 2 : tt < 32 ? 0 : tt < 35 ? 1 : 2;
}

const MODELS = [['tr_sedan', 0xe7e3d8], ['tr_suv', 0x40464f], ['tr_van', 0xf2f2f2], ['tr_sedan', 0x8c1d1d], ['tr_delivery', 0xf4f4f4],
    ['tr_truck', 0x2c5aa0], ['tr_taxi', 0xd8c23a], ['tr_sedan', 0xc9c9c9], ['tr_suv', 0x1b2a4a], ['tr_sedan', 0x2b2f36], ['tr_taxi', 0xd8c23a], ['tr_sedan', 0x9aa3ad]];

let seed = 99;
const rnd = () => { seed ^= seed << 13; seed >>>= 0; seed ^= seed >> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; };

export class TrafficCar {
    constructor(scene, k) {
        const [m, paint] = MODELS[k % MODELS.length];
        this.spec = Object.assign({}, m === 'tr_truck' || m === 'tr_delivery' ? SPECS.t_heavy : SPECS.t_small, { model: m });
        this.veh = new Vehicle(this.spec, carDims(m));
        this.veh.assist.air = 0;
        this.view = new CarView(scene, m, paint);
        this.traffic = true; this.player = -1; this.wreck = 0; this.active = false; this.id = k;
        this.e = 0; this.dir = 1; this.s = 0; this.ne = -1; this.nd = 1; this.phase = -1;
        this.mood = 0.85 + rnd() * 0.15; this.stuck = 0; this.claim = -1; this.hitT = 0;
        this.at = {}; this.at2 = {};
    }
}

export class Traffic {
    constructor(scene, net, count) {
        this.net = net;
        this.cars = [];
        for (let k = 0; k < count; k++) this.cars.push(new TrafficCar(scene, k));
        this.t = 0;
        this.busy = new Map();     // junction -> { car, t } (junctions without lights: first come first served)
        this.reach = 340;
    }
    lane(e, dir) {
        const n = this.net, hw = n.eHw[e];
        if (n.eOne[e]) return hw > 3.9 ? -(hw - 1.9) : 0;
        return -dir * Math.min(hw * 0.5, 2.2);
    }
    pickNext(c) {
        const n = this.net, J = c.dir > 0 ? n.eB[c.e] : n.eA[c.e];
        const opts = [];
        let wsum = 0;
        for (const e of n.jEdges[J]) {
            if (e === c.e && n.jEdges[J].length > 1) continue;
            if (!n.canLeave(e, J)) continue;
            if (n.eN[e] < 4) continue;
            const w = n.eCls[e] <= 2 ? 3 : n.eCls[e] <= 3 ? 2 : 1;
            opts.push(e, w); wsum += w;
        }
        if (!opts.length) { c.ne = c.e; c.nd = -c.dir; return; }   // dead end: turn back
        let r = rnd() * wsum;
        for (let k = 0; k < opts.length; k += 2) { r -= opts[k + 1]; if (r <= 0 || k === opts.length - 2) { c.ne = opts[k]; c.nd = n.eA[opts[k]] === J ? 1 : -1; break; } }
    }
    place(c, e, s, dir, speed) {
        const n = this.net, a = n.at(e, s, this.lane(e, dir), c.at);
        const fx = a.fx * dir, fz = a.fz * dir, v = c.veh;
        v.setPose(a.x, a.y + v.cgY + 0.42, a.z, Math.atan2(fx, fz));
        v.hint = a.i; for (const w of v.wheels) w.hint = a.i;
        v.vx = fx * speed; v.vz = fz * speed; v.gear = 1; v.reverse = false;
        c.e = e; c.dir = dir; c.s = s; c.active = true; c.wreck = 0; c.stuck = 0; c.phase = -1; c.claim = -1;
        c.mood = 0.82 + rnd() * 0.18;
        this.pickNext(c);
    }
    // a free spot on a street 140..reach m from (px, pz), not in front of the camera if possible
    spawn(c, px, pz, fx, fz, all, q) {
        const n = this.net;
        for (let tries = 0; tries < 24; tries++) {
            const ang = rnd() * Math.PI * 2, r = 150 + rnd() * (this.reach - 170);
            const x = px + Math.sin(ang) * r, z = pz + Math.cos(ang) * r;
            if (tries < 16 && (Math.sin(ang) * fx + Math.cos(ang) * fz) > 0.55 && r < 260) continue;   // right in view: elsewhere
            n.query(x, z, -1, q);
            if (q.edge < 0 || q.junc >= 0 || n.eCls[q.edge] >= 5 && rnd() < 0.6) continue;
            const e = q.edge, L = n.eLen[e];
            if (L < 30 || q.s < 12 || q.s > L - 12) continue;
            const dir = n.eOne[e] ? 1 : rnd() < 0.5 ? 1 : -1;
            const a = n.at(e, q.s, this.lane(e, dir), c.at2);
            let free = true;
            for (const o of all) { if (o === c || (o.traffic && !o.active)) continue; const dx = o.veh.px - a.x, dz = o.veh.pz - a.z; if (dx * dx + dz * dz < 18 * 18) { free = false; break; } }
            if (!free) continue;
            this.place(c, e, q.s, dir, 6 + rnd() * 4);
            return true;
        }
        return false;
    }

    // per 60 Hz tick: who drives where. `all` = every car incl. the taxi (for following), player = the taxi's racer
    update(dt, all, player, q) {
        this.t += dt;
        const n = this.net, pv = player.veh;
        const pfx = Math.sin(pv.yaw()), pfz = Math.cos(pv.yaw());
        for (const [j, b] of this.busy) if (this.t - b.t > 0.3) this.busy.delete(j);
        for (const c of this.cars) {
            const v = c.veh;
            if (!c.active || c.wreck > 0) {
                if (c.wreck > 0) { c.wreck -= dt; v.input.throttle = 0; v.input.brake = 1; v.input.steer = 0; if (c.wreck > 0) continue; }
                this.spawn(c, pv.px, pv.pz, pfx, pfz, all, q);
                continue;
            }
            const dx = v.px - pv.px, dz = v.pz - pv.pz, far = dx * dx + dz * dz > (this.reach + 40) ** 2;
            if (far || c.stuck > 7 || v.R[4] < 0.3) { c.active = false; v.setPose(0, -500, 0, 0); continue; }
            this.drive(c, dt, all);
        }
    }

    drive(c, dt, all) {
        const n = this.net, v = c.veh;
        let L = n.eLen[c.e];
        c.s = n.project(c.e, c.s, v.px, v.pz);
        if ((c.dir > 0 && c.s > L - 0.6) || (c.dir < 0 && c.s < 0.6)) {
            const J = c.dir > 0 ? n.eB[c.e] : n.eA[c.e];
            if (c.claim === J) { /* keeps the junction until it is out of it */ }
            c.e = c.ne; c.dir = c.nd; L = n.eLen[c.e]; c.s = c.dir > 0 ? 0.6 : L - 0.6; c.phase = -1;
            this.pickNext(c);
        }
        const rem = c.dir > 0 ? L - c.s : c.s;
        const speed = Math.max(0, v.fwdSpeed);
        // the point to aim at: along this street, then the next one
        const la = 5.5 + speed * 0.55;
        const T = c.at;
        if (la < rem) n.at(c.e, c.s + c.dir * la, this.lane(c.e, c.dir), T);
        else { const s2 = Math.min(n.eLen[c.ne], la - rem); n.at(c.ne, c.nd > 0 ? s2 : n.eLen[c.ne] - s2, this.lane(c.ne, c.nd), T); }
        const R = v.R, rx = T.x - v.px, rz = T.z - v.pz;
        const lat = rx * R[0] + rz * R[2], fw = rx * R[6] + rz * R[8];
        const wb = 2.6, l2 = Math.max(4, rx * rx + rz * rz);
        const want = Math.atan2(2 * wb * lat, l2);
        const lock = v.lockAt(speed);
        v.input.steer = Math.max(-1, Math.min(1, want / Math.max(0.05, lock)));
        if (fw < 0) v.input.steer = lat >= 0 ? 1 : -1;
        // target speed
        let vt = n.eLim[c.e] / 3.6 * c.mood;
        // bend ahead (heading change over the next 25 m)
        const A = n.at(c.e, c.s, 0, c.at2), ax = A.fx * c.dir, az = A.fz * c.dir;
        const tx = T.fx * (la < rem ? c.dir : c.nd), tz = T.fz * (la < rem ? c.dir : c.nd);
        const turn = Math.acos(Math.max(-1, Math.min(1, ax * tx + az * tz)));
        if (turn > 0.05) vt = Math.min(vt, Math.sqrt(2.6 * la / turn));
        // the junction ahead: a turn there, a red light, or another car crossing it first
        const J = c.dir > 0 ? n.eB[c.e] : n.eA[c.e], jr = n.jr[J];
        const toJ = rem - jr;
        if (toJ < 60) {
            const stopAt = toJ - 2.5;
            let stop = false;
            const Li = n.jLight[J];
            if (Li >= 0) {
                if (c.phase < 0) { const k = n.slot(c.e, J); c.phase = k >= 0 ? n.lights[Li].ph[k] : 0; }
                const st = lightState(n, Li, c.phase, this.t);
                if (st === 2 || (st === 1 && stopAt > speed * speed / 7)) stop = stopAt > -1;
            } else if (n.jEdges[J].length >= 3 && toJ < 9) {
                const b = this.busy.get(J);
                if (!b || b.car === c) this.busy.set(J, { car: c, t: this.t }); else if (stopAt > -0.5) stop = true;
            }
            if (stop) vt = Math.min(vt, Math.sqrt(2 * 3.2 * Math.max(0, stopAt - 0.8)));
            // the turn into the next street
            const B = n.at(c.ne, c.nd > 0 ? 3 : n.eLen[c.ne] - 3, 0, c.at2);
            const bx = B.fx * c.nd, bz = B.fz * c.nd;
            const ang = Math.acos(Math.max(-1, Math.min(1, ax * bx + az * bz)));
            if (ang > 0.45) { const vturn = ang > 2.5 ? 3 : 4 + 5 * (1 - ang / Math.PI); vt = Math.min(vt, Math.sqrt(vturn * vturn + 2 * 2.6 * Math.max(0, toJ))); }
        }
        // the car ahead (any car, the taxi too)
        const fx = R[6], fz = R[8];
        for (const o of all) {
            if (o === c || (o.traffic && !o.active)) continue;
            const ox = o.veh.px - v.px, oz = o.veh.pz - v.pz;
            const ahead = ox * fx + oz * fz;
            if (ahead < 2 || ahead > 40) continue;
            const side = Math.abs(ox * R[0] + oz * R[2]);
            if (side > 2.6) continue;
            const gap = ahead - 6.5;
            const ov = Math.max(0, o.veh.vx * fx + o.veh.vz * fz);
            vt = Math.min(vt, Math.max(0, ov + gap * 0.6));
            if (gap < 0.5) vt = 0;
        }
        const err = vt - speed;
        v.input.throttle = Math.max(0, Math.min(1, err * 0.45));
        v.input.brake = err < -0.3 ? Math.max(0, Math.min(1, -err * 0.35)) : 0;
        if (vt < 0.3) { v.input.throttle = 0; v.input.brake = 1; }
        v.input.handbrake = 0;
        if (speed < 0.4 && vt > 2.5) c.stuck += dt; else c.stuck = 0;
    }

    dispose() { for (const c of this.cars) c.view.dispose(); }
}

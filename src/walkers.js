// People walking on the pavements around the taxi (scenery: not passengers). A small fixed list, recycled: a walker
// too far from the taxi comes back somewhere within sight. They keep to pavements of their own (never one shared
// with the next street) and turn back at a junction or where the pavement ends. No allocation per frame.
import { PAVE } from './net.js';

let seed = 0x5eed1234;
const rnd = () => { seed ^= seed << 13; seed >>>= 0; seed ^= seed >> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; };

export class Walkers {
    constructor(net, n) {
        this.net = net; this.q = {}; this.at = {};
        this.list = [];
        for (let k = 0; k < n; k++) this.list.push({ x: 0, y: -1e4, z: 0, yaw: 0, e: -1, s: 0, side: 1, dir: 1, sp: 1.3, d: 0, t: rnd() * 3, kind: k % 6, state: 'stroll', live: false });
    }
    // a pavement place for walker p around (x, z): r0..r1 metres away
    place(p, x, z, r0, r1, hd) {
        const net = this.net, q = this.q;
        for (let tries = 0; tries < 12; tries++) {
            const a = rnd() < 0.75 ? hd + (rnd() - 0.5) * 2.2 : rnd() * Math.PI * 2, r = r0 + rnd() * (r1 - r0);   // mostly ahead, where they are seen
            net.query(x + Math.sin(a) * r, z + Math.cos(a) * r, -1, q);
            const e = q.edge;
            if (e < 0 || q.junc >= 0 || net.eCls[e] === 0 || net.eLen[e] < 40) continue;
            const side = rnd() < 0.5 ? 1 : -1, i = q.i;
            if ((side > 0 ? net.pl[i] : net.pr[i]) < PAVE - 0.05) continue;
            const s = Math.max(net.jr[net.eA[e]] + 6, Math.min(net.eLen[e] - net.jr[net.eB[e]] - 6, q.s));
            p.e = e; p.s = s; p.side = side; p.dir = rnd() < 0.5 ? 1 : -1; p.sp = 1.1 + rnd() * 0.5;
            p.d = side * (net.eHw[e] + 1.1 + rnd() * (PAVE - 2.2)); p.kind = (rnd() * 6) | 0; p.live = true;
            if (this.move(p, 0)) return true;
        }
        p.live = false; p.y = -1e4;
        return false;
    }
    move(p, dt) {
        const net = this.net, e = p.e;
        p.s += p.dir * p.sp * dt;
        const a = net.jr[net.eA[e]] + 5, b = net.eLen[e] - net.jr[net.eB[e]] - 5;
        if (p.s < a) { p.s = a; p.dir = 1; } else if (p.s > b) { p.s = b; p.dir = -1; }
        let o = net.at(e, p.s, p.d, this.at);
        // the pavement ends here (another street alongside, a crossing street): step back and turn round
        const q = net.query(o.x, o.z, -1, this.q);
        const i = net.eOff[e] + Math.min(net.eN[e] - 1, Math.max(0, Math.round(p.s / 4)));
        if ((p.side > 0 ? net.pl[i] : net.pr[i]) < PAVE - 0.05 || Math.abs(q.d) - q.hl < 0.6 || q.junc >= 0) {
            if (dt === 0) return false;
            p.s -= p.dir * p.sp * dt; p.dir = -p.dir;
            o = net.at(e, p.s, p.d, this.at);
        }
        p.x = o.x; p.y = o.y + 0.15; p.z = o.z;
        p.yaw = Math.atan2(o.fx * p.dir, o.fz * p.dir);
        p.t += dt;
        return true;
    }
    // x, z: the taxi; hd: its heading (atan2 of its forward x, z)
    update(dt, x, z, hd) {
        for (const p of this.list) {
            if (p.live && (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z) > 240 * 240) p.live = false;
            if (!p.live) { if ((p.wait = (p.wait || 0) - dt) <= 0) { p.wait = 0.3 + rnd() * 0.3; this.place(p, x, z, p.e < 0 ? 15 : 60, 180, hd); } continue; }
            this.move(p, dt);
        }
    }
}

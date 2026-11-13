// Who sees the taxi break the rules: fixed speed cameras on the bigger streets and police officers standing at
// some roadsides. Speeding is fined only by a camera (when the taxi passes it) or an officer who sees it; a red light,
// the wrong way and the pavement only by an officer. Places are picked once from the street network (same every
// shift), each on a pavement clear of every street.
import { PAVE } from './net.js';

let seed = 0xca3e1a;
const rnd = () => { seed ^= seed << 13; seed >>>= 0; seed ^= seed >> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; };
export const POLICE_SEES = 90;     // m
export const CAM_RANGE = 30;       // m: a camera measures the taxi passing within this of it

export class Enforce {
    constructor(net) {
        this.net = net;
        this.cams = [];      // { e, s, dir, x, z, yaw, side }: dir = the travel direction it watches (+1 a -> b)
        this.police = [];    // { e, s, x, z, yaw }
        const q = {}, at = {};
        const spot = (e, s, d) => {
            net.at(e, s, d, at);
            net.query(at.x, at.z, -1, q);
            if (q.edge >= 0 && (Math.abs(q.d) - q.hl < 0.8 || q.junc >= 0)) return null;
            return { x: at.x, y: at.y, z: at.z, fx: at.fx, fz: at.fz, lx: at.lx, lz: at.lz };
        };
        const far = (list, x, z, m) => list.every(p => (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z) > m * m);
        for (let e = 0; e < net.ne; e++) {
            const cls = net.eCls[e], L = net.eLen[e];
            if (cls <= 3 && L >= 160 && rnd() < 0.16) {
                const dir = net.eOne[e] ? 1 : rnd() < 0.5 ? 1 : -1;
                const s = L * (0.35 + rnd() * 0.3), side = -dir;           // on the right of the traffic it watches
                const i = net.eOff[e] + Math.min(net.eN[e] - 1, Math.round(s / 4));
                if ((side > 0 ? net.pl[i] : net.pr[i]) >= PAVE - 0.05) {
                    const p = spot(e, s, side * (net.eHw[e] + 0.9));
                    if (p && far(this.cams, p.x, p.z, 400)) { this.cams.push(Object.assign(p, { e, s, dir, side, yaw: Math.atan2(-dir * p.fx, -dir * p.fz) })); }
                }
            }
            if (cls <= 4 && L >= 90 && rnd() < 0.05) {
                const side = rnd() < 0.5 ? 1 : -1, s = L * (0.3 + rnd() * 0.4);
                const i = net.eOff[e] + Math.min(net.eN[e] - 1, Math.round(s / 4));
                const s2 = s + 5.5 * side, i2 = net.eOff[e] + Math.min(net.eN[e] - 1, Math.max(0, Math.round(s2 / 4)));   // the patrol car parks there
                if ((side > 0 ? net.pl[i] : net.pr[i]) >= PAVE - 0.05 && (side > 0 ? net.pl[i2] : net.pr[i2]) >= PAVE - 0.05 && s2 > 8 && s2 < L - 8 && spot(e, s2, side * (net.eHw[e] + 1.75))) {
                    const p = spot(e, s, side * (net.eHw[e] + 1.4));
                    if (p && far(this.police, p.x, p.z, 500)) { this.police.push(Object.assign(p, { e, s, side, yaw: Math.atan2(-side * p.lx, -side * p.lz) })); }
                }
            }
        }
    }
    // the nearest officer within POLICE_SEES of (x, z), or null
    officer(x, z) {
        let best = null, bd = POLICE_SEES * POLICE_SEES;
        for (const p of this.police) { const d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z); if (d < bd) { bd = d; best = p; } }
        return best;
    }
}

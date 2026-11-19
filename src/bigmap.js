// The full city map (owner request 2026-11-19): Pause > City map, or the − button while driving. The whole of Tangier
// with the fuel stations, the people waiting for a taxi, the destination and the GPS route to it (the passenger's
// destination, the station of Go fuel up, or else the nearest person waiting). The game is paused meanwhile.
// Remote: ◀ ▲ ▼ ▶ move the map, OK zooms in (after the closest zoom: the whole city again), Back closes.
// Controller: stick / D-pad move, R zoom in, L zoom out, Y back on the taxi, − / B / + close.
// Drawn only when something changes (a move or a zoom), never every frame.

const ZOOMS = [1, 2, 4, 8];            // x the whole-city scale
const C = { bg: '#121b26', sea: '#0c2740', big: '#e8c35a', mid: '#c9d2dc', small: '#5d6b7b', route: '#2cff8f', fuel: '#ff3b30', ped: '#22e568', dest: '#ffd23f', taxi: '#21c8ef' };

// the points of a route from the taxi to its stop, in world metres: fn(x, z) for each (shared with the HUD's small map)
export function routePoints(S, R, fn) {
    const net = S.net, E = R.route.edges, sNow = S.qp.edge === (E[0] && E[0][0]) ? S.qp.s : -1;
    let count = 0;
    for (let r = 0; r < E.length; r++) {
        const e = E[r][0], dir = E[r][1], o = net.eOff[e], n = net.eN[e];
        for (let m = 0; m < n; m++) {
            const i = o + (dir > 0 ? m : n - 1 - m), si = net.sS[i];
            if (r === 0 && sNow >= 0 && (dir > 0 ? si < sNow : si > sNow)) continue;
            if (r === E.length - 1 && e === R.e && (dir > 0 ? si > R.s : si < R.s)) break;
            fn(net.px[i], net.pz[i]);
            if (++count > 6000) return;
        }
    }
    fn(R.x, R.z);
}

export class BigMap {
    constructor(S, canvas) {
        this.S = S; this.c = canvas; this.x = canvas.getContext('2d');
        const net = S.net, B = net.box, v = S.me.veh;
        this.W = canvas.width; this.H = canvas.height;
        this.fit = Math.max((B.x1 - B.x0) / this.W, (B.z1 - B.z0) / this.H) * 1.02;   // metres per pixel, whole city
        this.z = 0; this.cx = (B.x0 + B.x1) / 2; this.cz = (B.z0 + B.z1) / 2;
        this.pan = { x: 0, z: 0 };
        // edge boxes once (vector streets when zoomed in: only those on screen)
        if (!net._ebox) {
            const b = net._ebox = new Float32Array(net.ne * 4);
            for (let e = 0; e < net.ne; e++) {
                let a = 1e9, c = -1e9, d = 1e9, f = -1e9;
                for (let k = 0, o = net.eOff[e]; k < net.eN[e]; k++) { const X = net.px[o + k], Z = net.pz[o + k]; if (X < a) a = X; if (X > c) c = X; if (Z < d) d = Z; if (Z > f) f = Z; }
                b[e * 4] = a; b[e * 4 + 1] = c; b[e * 4 + 2] = d; b[e * 4 + 3] = f;
            }
        }
        // the GPS route: the ride / fuel station, else the way to the nearest person waiting
        const T = S.taxi;
        this.R = (T.fuelGo && T.fuelGo.route) ? T.fuelGo : (T.ride && T.ride.ped.state === 'in' && T.ride.route) ? T.ride : null;
        this.kind = this.R ? (this.R === T.fuelGo ? 'fuel' : 'ride') : '';
        if (!this.R && S.qp.edge >= 0) {
            let best = null, bd = 1e9;
            for (const p of T.peds) { if (p.state !== 'wait') continue; const d = Math.hypot(p.x - v.px, p.z - v.pz); if (d < bd) { bd = d; best = p; } }
            if (best) {
                const r = net.route(S.qp.edge, S.qp.s, (v.R[6] * S.qp.fx + v.R[8] * S.qp.fz) >= 0 ? 1 : -1, best.e, best.s);
                if (r) { this.R = { e: best.e, s: best.s, x: best.x, z: best.z, route: r, name: '' }; this.kind = 'ped'; }
            }
        }
        this.dirty = true;
    }
    get mpp() { return this.fit / ZOOMS[this.z]; }
    zoom(d) {
        const v = this.S.me.veh;
        if (d > 0 && this.z === ZOOMS.length - 1) { this.z = 0; const B = this.S.net.box; this.cx = (B.x0 + B.x1) / 2; this.cz = (B.z0 + B.z1) / 2; }
        else {
            const was = this.z; this.z = Math.max(0, Math.min(ZOOMS.length - 1, this.z + d));
            if (was === 0 && this.z > 0) { this.cx = v.px; this.cz = v.pz; }     // zooming in from the whole city: on the taxi
        }
        this.clamp(); this.dirty = true;
    }
    centre() { const v = this.S.me.veh; if (!this.z) this.z = 2; this.cx = v.px; this.cz = v.pz; this.clamp(); this.dirty = true; }
    move(dx, dz) { this.cx += dx * this.W * this.mpp * 0.18; this.cz += dz * this.H * this.mpp * 0.18; this.clamp(); this.dirty = true; }
    clamp() {
        const B = this.S.net.box, hw = this.W * this.mpp / 2, hh = this.H * this.mpp / 2;
        this.cx = hw * 2 >= B.x1 - B.x0 ? (B.x0 + B.x1) / 2 : Math.max(B.x0 + hw, Math.min(B.x1 - hw, this.cx));
        this.cz = hh * 2 >= B.z1 - B.z0 ? (B.z0 + B.z1) / 2 : Math.max(B.z0 + hh, Math.min(B.z1 - hh, this.cz));
    }
    // the stick moves the map smoothly (called every game tick while the map is open)
    tick(dt, sx, sz) {
        if (Math.abs(sx) < 0.2 && Math.abs(sz) < 0.2) return;
        this.cx += sx * dt * this.W * this.mpp * 0.8; this.cz += sz * dt * this.H * this.mpp * 0.8; this.clamp(); this.dirty = true;
    }
    draw(base) {
        if (!this.dirty) return false;
        this.dirty = false;
        const S = this.S, net = S.net, B = net.box, x = this.x, W = this.W, H = this.H, m = this.mpp, T = S.taxi, v = S.me.veh;
        const ox = this.cx - W * m / 2, oz = this.cz - H * m / 2;
        const X = (wx) => (wx - ox) / m, Z = (wz) => (wz - oz) / m;
        x.fillStyle = C.bg; x.fillRect(0, 0, W, H);
        if (m >= 3.5 && base) {
            // far out: the HUD's pre-drawn city (5 m per pixel), scaled
            const s = 5 / m;
            x.imageSmoothingEnabled = true;
            x.drawImage(base, X(B.x0), Z(B.z0), base.width * s, base.height * s);
        } else {
            // close in: the streets drawn as lines (only those on screen), widths in metres
            const G = net.g; x.fillStyle = C.sea;
            const st = 1, cs = G.c;
            for (let j = 0; j < G.nz; j += st) { const zz = Z(G.z0 + j * cs); if (zz < -cs / m || zz > H + cs / m) continue;
                for (let i = 0; i < G.nx; i += st) { if (G.h[j * G.nx + i] >= -20) continue; const xx = X(G.x0 + i * cs); if (xx < -cs / m || xx > W + cs / m) continue; x.fillRect(xx - cs / m / 2, zz - cs / m / 2, cs / m + 1, cs / m + 1); } }
            const eb = net._ebox, x1 = ox + W * m, z1 = oz + H * m;
            x.lineCap = 'round'; x.lineJoin = 'round';
            for (const pass of [0, 1]) for (let e = 0; e < net.ne; e++) {
                const cls = net.eCls[e];
                if ((pass === 0) !== (cls >= 4)) continue;
                if (eb[e * 4 + 1] < ox || eb[e * 4] > x1 || eb[e * 4 + 3] < oz || eb[e * 4 + 2] > z1) continue;
                x.strokeStyle = cls <= 1 ? C.big : cls <= 3 ? C.mid : C.small;
                x.lineWidth = Math.max(1.3, net.eHw[e] * 1.6 / m);
                x.beginPath();
                for (let k = 0, o = net.eOff[e]; k < net.eN[e]; k++) { const px = X(net.px[o + k]), pz = Z(net.pz[o + k]); if (k) x.lineTo(px, pz); else x.moveTo(px, pz); }
                x.stroke();
            }
        }
        const u = Math.max(1, Math.min(1.6, 3 / m));        // markers a little bigger when zoomed in
        // GPS route (dashed to a person waiting)
        if (this.R) {
            x.save();
            x.strokeStyle = '#0b3d22'; x.lineWidth = 9 * u; x.lineCap = 'round'; x.lineJoin = 'round';
            const path = () => { x.beginPath(); x.moveTo(X(v.px), Z(v.pz)); routePoints(S, this.R, (a, b) => x.lineTo(X(a), Z(b))); };
            path(); x.stroke();
            x.strokeStyle = C.route; x.lineWidth = 5 * u; if (this.kind === 'ped') x.setLineDash([12, 9]);
            path(); x.stroke();
            x.restore();
        }
        // fuel stations: a red pin with a white pump
        for (const s of net.stations) {
            const i = net.eOff[s.e] + s.k, px = X(net.px[i]), pz = Z(net.pz[i]);     // the pumps (beside the street, by the real station)
            if (px < -20 || px > W + 20 || pz < -20 || pz > H + 20) continue;
            const r = 9 * u;
            x.fillStyle = '#fff'; x.beginPath(); x.arc(px, pz, r + 2, 0, 7); x.fill();
            x.fillStyle = C.fuel; x.beginPath(); x.arc(px, pz, r, 0, 7); x.fill();
            x.fillStyle = '#fff'; x.fillRect(px - r * 0.42, pz - r * 0.5, r * 0.55, r * 1.0); x.fillRect(px + r * 0.18, pz - r * 0.3, r * 0.28, r * 0.14); x.fillRect(px + r * 0.34, pz - r * 0.3, r * 0.14, r * 0.6);
            x.fillStyle = C.fuel; x.fillRect(px - r * 0.3, pz - r * 0.38, r * 0.31, r * 0.28);
        }
        // people waiting: green figures
        for (const p of T.peds) {
            if (p.state !== 'wait') continue;
            const px = X(p.x), pz = Z(p.z), r = 7 * u;
            x.fillStyle = '#06331b'; x.beginPath(); x.arc(px, pz, r + 2, 0, 7); x.fill();
            x.fillStyle = C.ped; x.beginPath(); x.arc(px, pz - r * 0.35, r * 0.38, 0, 7); x.fill();
            x.beginPath(); x.moveTo(px - r * 0.6, pz + r * 0.7); x.quadraticCurveTo(px, pz - r * 0.2, px + r * 0.6, pz + r * 0.7); x.closePath(); x.fill();
        }
        // destination: a yellow flag
        if (this.R && this.kind !== 'ped') {
            const px = X(this.R.x), pz = Z(this.R.z), r = 10 * u;
            x.strokeStyle = '#111'; x.lineWidth = 3; x.beginPath(); x.moveTo(px, pz); x.lineTo(px, pz - r * 2.2); x.stroke();
            x.fillStyle = C.dest; x.strokeStyle = '#111'; x.lineWidth = 1.5;
            x.beginPath(); x.moveTo(px, pz - r * 2.2); x.lineTo(px + r * 1.5, pz - r * 1.75); x.lineTo(px, pz - r * 1.3); x.closePath(); x.fill(); x.stroke();
            x.beginPath(); x.arc(px, pz, 4, 0, 7); x.fill(); x.stroke();
        }
        // the taxi: an arrow pointing where it heads
        const yaw = Math.atan2(v.R[6], v.R[8]), r = 11 * u;
        x.save(); x.translate(X(v.px), Z(v.pz)); x.rotate(Math.PI - yaw);
        x.fillStyle = C.taxi; x.strokeStyle = '#fff'; x.lineWidth = 2;
        x.beginPath(); x.moveTo(0, -r); x.lineTo(r * 0.7, r * 0.8); x.lineTo(0, r * 0.35); x.lineTo(-r * 0.7, r * 0.8); x.closePath(); x.fill(); x.stroke();
        x.restore();
        // scale bar
        const bar = [50, 100, 200, 500, 1000, 2000].find(b => b / m > 90) || 2000;
        x.fillStyle = 'rgba(0,0,0,.55)'; x.fillRect(W - bar / m - 34, H - 36, bar / m + 24, 26);
        x.strokeStyle = '#fff'; x.lineWidth = 2; x.beginPath(); x.moveTo(W - bar / m - 22, H - 18); x.lineTo(W - 22, H - 18); x.stroke();
        x.fillStyle = '#fff'; x.font = '15px sans-serif'; x.textAlign = 'center'; x.fillText(bar >= 1000 ? bar / 1000 + ' km' : bar + ' m', W - bar / m / 2 - 22, H - 22);
        return true;
    }
}

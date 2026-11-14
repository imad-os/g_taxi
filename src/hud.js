// What is on screen while driving: cash, the speed limit sign, the street, the map (turns with the taxi, the route in
// green), speed / gear / revs / fuel / limiter, the ride (where to, time, meter), what A does now, and cards for
// fines, accidents and paid rides. DOM, rewritten about 12 times a second (text only when it changes).
import { I18n } from './i18n.js';
import { FUEL_PRICE } from './taxi.js';
import { Gauges, turnArrow } from './gauges.js';

const MPP = 5;        // map: metres per pixel of the pre-drawn city
const el = (cls, parent, tag) => { const e = document.createElement(tag || 'div'); e.className = cls; if (parent) parent.appendChild(e); return e; };
const dh = (v) => (v < 0 ? '−' : '') + Math.abs(Math.round(v)).toLocaleString('en-US') + ' DH';

export class Hud {
    constructor(root) {
        this.root = root;
        this.box = null;
    }
    begin(shift, btnLabel) {
        this.shift = shift; this.label = btnLabel;
        const r = this.root; r.innerHTML = ''; r.style.display = 'block';
        this.cash = el('h-cash', r); this.cashV = el('v', this.cash); this.rides = el('s', this.cash);
        this.sign = el('h-sign', r); this.signV = el('n', this.sign); this.street = el('h-street', r);
        this.warn = el('h-warn', r);
        this.area = el('h-area', r); const mp = el('h-map', r); this.mapC = el('', mp, 'canvas'); this.mapC.width = this.mapC.height = 260; this.mapX = this.mapC.getContext('2d');
        this.gauges = new Gauges(r); this.gs = {};
        this.turn = el('h-turn', r); this.turnC = el('', this.turn, 'canvas'); this.turnC.width = this.turnC.height = 96; this.turnX = this.turnC.getContext('2d');
        this.turnD = el('d', this.turn); this.turnN = el('n', this.turn);
        this.ride = el('h-ride', r);
        this.prompt = el('h-prompt', r);
        this.cards = el('h-cards', r);
        this.toastE = el('h-toast', r);
        this.cache = {};
        this.t = 0; this.toastT = 0;
        this.drawBase(shift.net);
    }
    set(e, k, v) { if (this.cache[k] !== v) { this.cache[k] = v; e.textContent = v; } }

    // the whole city once, small: streets by size, stations; the map shows a turning piece of it
    drawBase(net) {
        const B = net.box, W = Math.ceil((B.x1 - B.x0) / MPP), H = Math.ceil((B.z1 - B.z0) / MPP);
        const c = document.createElement('canvas'); c.width = W; c.height = H;
        const x = c.getContext('2d');
        x.fillStyle = '#16202c'; x.fillRect(0, 0, W, H);
        // sea from the ground grid
        const G = net.g; x.fillStyle = '#0d2a44';
        for (let j = 0; j < G.nz; j += 2) for (let i = 0; i < G.nx; i += 2) if (G.h[j * G.nx + i] < -20) x.fillRect((G.x0 + i * G.c - B.x0) / MPP - 3, (G.z0 + j * G.c - B.z0) / MPP - 3, 6, 6);
        x.lineCap = 'round'; x.lineJoin = 'round';
        for (const pass of [0, 1]) for (let e = 0; e < net.ne; e++) {
            const cls = net.eCls[e];
            if ((pass === 0) !== (cls >= 4)) continue;
            x.strokeStyle = cls <= 1 ? '#e8c35a' : cls <= 3 ? '#c9d2dc' : '#6d7b8b';
            x.lineWidth = cls <= 1 ? 3 : cls <= 3 ? 2.2 : 1.3;
            x.beginPath();
            const o = net.eOff[e], n = net.eN[e];
            for (let k = 0; k < n; k++) { const px = (net.px[o + k] - B.x0) / MPP, pz = (net.pz[o + k] - B.z0) / MPP; if (k) x.lineTo(px, pz); else x.moveTo(px, pz); }
            x.stroke();
        }
        this.base = c;
    }

    update(dt, input) {
        const S = this.shift, v = S.me.veh, T = S.taxi;
        this.t += dt;
        // cards and toasts as they come (not throttled)
        while (T.events.length) { const e = T.events.shift(); this.card(e); T.log.push(e); if (T.log.length > 20) T.log.shift(); }
        while (T.toasts.length) { const m = T.toasts.shift(); this.toastE.textContent = I18n.line(m.text); this.toastE.className = 'h-toast on ' + m.kind; this.toastT = 3.2; }
        if (this.toastT > 0 && (this.toastT -= dt) <= 0) this.toastE.className = 'h-toast';
        for (const c of this.cards.children) { c._t -= dt; if (c._t <= 0 && !c._gone) { c._gone = true; c.classList.add('out'); setTimeout(() => c.remove(), 400); } }
        if (this.t < 0.08) return;
        const step = this.t; this.t = 0;
        const kmh = Math.round(Math.abs(v.fwdSpeed) * 3.6);
        this.set(this.cashV, 'cash', dh(T.money));
        this.cashV.className = 'v' + (T.money < 0 ? ' neg' : '');
        this.set(this.rides, 'rides', I18n.t('rides') + ' ' + T.stats.rides);
        const q = S.qp;
        const lim = q.edge >= 0 ? q.lim : 0;
        this.set(this.signV, 'lim', lim ? String(lim) : '');
        this.sign.style.display = lim ? '' : 'none';
        this.set(this.street, 'street', q.edge >= 0 ? S.net.edgeName(q.edge, I18n.lang) : '');
        if ((this.areaT = (this.areaT || 0) - step) <= 0) { this.areaT = 0.5; this.set(this.area, 'area', S.net.areaName(v.px, v.pz, I18n.lang)); }
        const w = T.wrongNow ? I18n.t('wrongWay') : T.speeding ? I18n.t('slowDown') : v.stalled ? I18n.t('stalled') : '';
        this.set(this.warn, 'warn', w); this.warn.className = 'h-warn' + (w ? ' on' : '');
        // the instrument cluster
        const g = v.gearbox ? (v.mgear < 0 ? 'R' : v.mgear === 0 ? 'N' : String(v.mgear)) : (v.reverse ? 'R' : 'D' + v.gear);
        const G = this.gs;
        G.kmh = kmh; G.rpm = v.rpm; G.maxRpm = v.spec.rpm; G.gear = g; G.fuel = T.fuel; G.tank = T.tank; G.low = T.fuel < 4;
        G.hand = v.input.handbrake > 0 || v.hold; G.engine = !!(v.stalled || v.fuelCut); G.limiter = T.limiter; G.clutchBox = v.gearbox === 'clutch';
        G.clutch = (v.input.clutch || 0) > 0.5; G.ride = !!(T.ride && T.ride.ped.state === 'in'); G.over = !!(lim && kmh > lim + 5);
        this.gauges.draw(G);
        // the next turn (Settings > Route arrows)
        const tn = S.arrows && S.guide ? S.guide.turn : null;
        if (tn) {
            const k = tn.dir + (tn.dist < 30 ? 'n' : '');
            if (this.cache.turnK !== k) { this.cache.turnK = k; turnArrow(this.turnX, tn.dir); }
            this.set(this.turnD, 'turnD', I18n.t(tn.dir === 'arrive' ? 'arrive' : tn.dir === 'uturn' ? 'turnU' : tn.dir === 'left' ? 'turnL' : 'turnR') + ' · ' + I18n.t('inM', Math.max(0, Math.round(tn.dist / 10) * 10)));
            this.set(this.turnN, 'turnN', tn.edge >= 0 ? S.net.edgeName(tn.edge, I18n.lang) : (T.ride && T.ride.name) || '');
            this.turn.className = 'h-turn on' + (tn.dist < 40 ? ' near' : '');
        } else if (this.turn.className !== 'h-turn') this.turn.className = 'h-turn';
        // ride
        const R = T.ride;
        if (R && R.ped.state === 'in') {
            const left = Math.max(0, R.eta - R.t);
            const d = R.route ? R.route.len : 0;
            const txt = I18n.t('to') + ' ' + (R.name || '—') + '\n' + (d / 1000).toFixed(1) + ' km · ' + (left > 0 ? I18n.t('eta') + ' ' + Math.floor(left / 60) + ':' + String(Math.floor(left % 60)).padStart(2, '0') : I18n.t('late')) + '\n' + I18n.t('fare') + ' ' + T.meter() + ' DH';
            this.set(this.ride, 'ride', txt);
            this.ride.className = 'h-ride on' + (left <= 0 ? ' late' : '');
        } else { this.set(this.ride, 'ride', ''); this.ride.className = 'h-ride'; }
        // prompt
        const p = T.prompt;
        const key = p === 'help' ? 'help_' : p;
        let ptxt = '';
        if (p === 'helpWait') ptxt = I18n.t('helpWait');
        else if (p === 'pickup') { const n = T.nearPed(v), Q = n && n.quote; ptxt = this.label() + '  ' + (Q ? I18n.t('pickupTo', Q.name || '—', Q.km.toFixed(1), Q.fare) : I18n.t('pickup')); }
        else if (p) ptxt = this.label() + '  ' + I18n.t(key) + (p === 'refuel' ? '  (' + FUEL_PRICE + ' DH/L)' : '');
        this.set(this.prompt, 'prompt', ptxt); this.prompt.className = 'h-prompt' + (ptxt ? ' on' : '');
        this.map(S, v, T, step);
        void input;
    }

    map(S, v, T) {
        const x = this.mapX, W = 260, net = S.net, B = net.box;
        const yaw = Math.atan2(v.R[6], v.R[8]);
        const k = 1.25;              // screen px per base px (radius ~520 m)
        x.save();
        x.fillStyle = '#16202c'; x.fillRect(0, 0, W, W);
        x.translate(W / 2, W * 0.62);
        x.rotate(Math.PI + yaw);     // heading up (z grows to the south, the map image too)
        x.scale(k, k);
        const px = (v.px - B.x0) / MPP, pz = (v.pz - B.z0) / MPP;
        x.drawImage(this.base, -px, -pz);
        // route
        const R = T.ride;
        if (R && R.route && R.ped.state === 'in') {
            x.strokeStyle = '#2cff8f'; x.lineWidth = 3.2 / k; x.beginPath();
            // from the taxi along the route: the first street only ahead of the taxi, the last one only up to the stop
            const E = R.route.edges, sNow = S.qp.edge === (E[0] && E[0][0]) ? S.qp.s : -1;
            x.moveTo(0, 0);
            let count = 0;
            for (let r = 0; r < E.length; r++) {
                const e = E[r][0], dir = E[r][1], o = net.eOff[e], n = net.eN[e];
                for (let m = 0; m < n; m++) {
                    const i = o + (dir > 0 ? m : n - 1 - m), si = net.sS[i];
                    if (r === 0 && sNow >= 0 && (dir > 0 ? si < sNow : si > sNow)) continue;
                    if (r === E.length - 1 && e === R.e && (dir > 0 ? si > R.s : si < R.s)) break;
                    x.lineTo((net.px[i] - v.px) / MPP, (net.pz[i] - v.pz) / MPP);
                    if (++count > 2000) break;
                }
            }
            const dx = (R.x - v.px) / MPP, dz = (R.z - v.pz) / MPP;
            x.lineTo(dx, dz);
            x.stroke();
            x.fillStyle = '#2cff8f'; x.beginPath(); x.arc(dx, dz, 5 / k, 0, 7); x.fill();
        }
        // people waiting, stations
        x.fillStyle = '#ffd400';
        for (const p of T.peds) if (p.state === 'wait') { x.beginPath(); x.arc((p.x - v.px) / MPP, (p.z - v.pz) / MPP, 3.6 / k, 0, 7); x.fill(); }
        const enf = S.enforce;
        if (enf) {
            x.fillStyle = '#ff4b3e';
            for (const c of enf.cams) { const X = (c.x - v.px) / MPP, Z = (c.z - v.pz) / MPP; if (X * X + Z * Z < 12000) { x.beginPath(); x.arc(X, Z, 3.4 / k, 0, 7); x.fill(); } }
            x.fillStyle = '#3d7bff';
            for (const c of enf.police) { const X = (c.x - v.px) / MPP, Z = (c.z - v.pz) / MPP; if (X * X + Z * Z < 12000) { x.beginPath(); x.arc(X, Z, 3.8 / k, 0, 7); x.fill(); } }
        }
        x.fillStyle = '#19d17a';
        for (const s of net.stations) { const i = net.eOff[s.e] + s.k; x.fillRect((net.px[i] - v.px) / MPP - 4 / k, (net.pz[i] - v.pz) / MPP - 4 / k, 8 / k, 8 / k); }
        x.restore();
        // the taxi: an arrow in the middle
        x.fillStyle = '#21c8ef'; x.strokeStyle = '#fff'; x.lineWidth = 1.5;
        x.beginPath(); x.moveTo(W / 2, W * 0.62 - 9); x.lineTo(W / 2 + 6, W * 0.62 + 7); x.lineTo(W / 2, W * 0.62 + 3); x.lineTo(W / 2 - 6, W * 0.62 + 7); x.closePath(); x.fill(); x.stroke();
    }

    card(ev) {
        const c = el('h-card ' + ev.kind, null);
        el('t', c).textContent = I18n.t(ev.title);
        for (const [k, v] of ev.lines) {
            const row = el('r', c);
            el('l', row, 'span').textContent = I18n.line(k);
            el('a' + (v < 0 ? ' neg' : v > 0 ? ' pos' : ''), row, 'span').textContent = v ? dh(v) : '';
        }
        if (ev.lines.length > 1 || ev.total) { const row = el('r tot', c); el('l', row, 'span').textContent = I18n.t('total'); el('a' + (ev.total < 0 ? ' neg' : ' pos'), row, 'span').textContent = dh(ev.total); }
        c._t = ev.kind === 'crash' ? 7 : 5.5;
        this.cards.appendChild(c);
        while (this.cards.children.length > 3) this.cards.firstChild.remove();
        if (this.onCard) this.onCard(ev);
    }
    end() { this.root.innerHTML = ''; this.root.style.display = 'none'; this.base = null; }
}

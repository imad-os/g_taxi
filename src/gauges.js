// The instrument cluster, like a real car's (owner request 2026-11-14): a rev counter with the gear and the fuel gauge,
// a speedometer with the digital speed, and warning lights (handbrake, engine, fuel, limiter, clutch, the TAXI sign).
// One canvas; the dial faces are drawn once into an offscreen canvas, then only the needles, numbers and lights
// about 12 times a second. Also the GPS turn sign (an arrow, the distance and the street).
const W = 640, H = 350, A0 = 0.75 * Math.PI, SW = 1.5 * Math.PI;      // dials sweep 270° clockwise from bottom left
const ang = (f) => A0 + Math.max(0, Math.min(1, f)) * SW;
const FONT = (px, w) => (w || 700) + ' ' + px + "px CP, system-ui, sans-serif";

export class Gauges {
    constructor(parent) {
        this.c = document.createElement('canvas'); this.c.width = W; this.c.height = H; this.c.className = 'h-gauges';
        parent.appendChild(this.c);
        this.x = this.c.getContext('2d');
        this.face = null; this.faceKey = '';
        this.T = { x: 165, y: 150, r: 128 };    // rev counter
        this.S = { x: 470, y: 150, r: 140 };    // speedometer
    }
    // the dials without needles (again when the car's rev range changes)
    drawFace(maxK, red) {
        const c = document.createElement('canvas'); c.width = W; c.height = H;
        const x = c.getContext('2d');
        const dial = (D, max, step, label, redFrom) => {
            const g = x.createRadialGradient(D.x, D.y - D.r * 0.3, D.r * 0.1, D.x, D.y, D.r);
            g.addColorStop(0, '#1d2a3c'); g.addColorStop(1, '#070b12');
            x.fillStyle = g; x.beginPath(); x.arc(D.x, D.y, D.r, 0, 7); x.fill();
            x.lineWidth = 5; x.strokeStyle = '#8a97a8'; x.stroke();
            if (redFrom !== undefined) { x.strokeStyle = '#e8321f'; x.lineWidth = 9; x.beginPath(); x.arc(D.x, D.y, D.r - 12, ang(redFrom / max), ang(1)); x.stroke(); }
            for (let v = 0; v <= max + 1e-6; v += step / 2) {
                const big = Math.abs(v / step - Math.round(v / step)) < 1e-6, a = ang(v / max), r1 = D.r - 8, r0 = r1 - (big ? 16 : 8);
                x.strokeStyle = '#e8edf3'; x.lineWidth = big ? 3.5 : 2;
                x.beginPath(); x.moveTo(D.x + Math.cos(a) * r0, D.y + Math.sin(a) * r0); x.lineTo(D.x + Math.cos(a) * r1, D.y + Math.sin(a) * r1); x.stroke();
                if (big) {
                    x.fillStyle = '#ffffff'; x.font = FONT(D.r > 135 ? 22 : 24); x.textAlign = 'center'; x.textBaseline = 'middle';
                    const rt = r0 - 20; x.fillText(String(Math.round(label ? v / label : v)), D.x + Math.cos(a) * rt, D.y + Math.sin(a) * rt);
                }
            }
        };
        dial(this.T, maxK * 1000, 1000, 1000, red);
        dial(this.S, 160, 20);
        // the fuel arc inside the rev counter, bottom
        const T = this.T;
        x.lineWidth = 9; x.strokeStyle = 'rgba(255,255,255,.18)'; x.beginPath(); x.arc(T.x, T.y, T.r * 0.84, 0.66 * Math.PI, 0.34 * Math.PI, true); x.stroke();
        x.fillStyle = '#c9d2dc'; x.font = FONT(18, 700); x.textAlign = 'center'; x.textBaseline = 'middle';
        x.fillText('E', T.x - T.r * 0.62, T.y + T.r * 0.62); x.fillText('F', T.x + T.r * 0.62, T.y + T.r * 0.62);
        x.font = FONT(17, 600); x.fillStyle = '#9fb0c4';
        x.fillText('x1000 rpm', T.x, T.y - T.r * 0.36); x.fillText('km/h', this.S.x, this.S.y - this.S.r * 0.36);
        this.face = c;
    }
    needle(D, f, color) {
        const x = this.x, a = ang(f);
        x.strokeStyle = color; x.lineWidth = 5; x.lineCap = 'round';
        x.beginPath(); x.moveTo(D.x, D.y); x.lineTo(D.x + Math.cos(a) * (D.r - 22), D.y + Math.sin(a) * (D.r - 22)); x.stroke();
        x.fillStyle = '#2b3646'; x.beginPath(); x.arc(D.x, D.y, 9, 0, 7); x.fill();
    }
    lamp(cx, cy, txt, on, color) {
        const x = this.x; x.font = FONT(21); x.textAlign = 'center'; x.textBaseline = 'middle';
        const w = x.measureText(txt).width + 18;
        x.fillStyle = on ? color : 'rgba(255,255,255,.1)'; x.beginPath(); x.roundRect ? x.roundRect(cx - w / 2, cy - 16, w, 32, 8) : x.rect(cx - w / 2, cy - 16, w, 32); x.fill();
        x.fillStyle = on ? '#0b0f16' : 'rgba(255,255,255,.42)'; x.fillText(txt, cx, cy + 1);
    }
    // s: { kmh, rpm, maxRpm, gear, fuel, tank, low, hand, engine, limiter, clutch, ride, over }
    draw(s) {
        const maxK = Math.ceil(s.maxRpm / 1000 + 0.6), key = maxK + ':' + s.maxRpm;
        if (key !== this.faceKey) { this.faceKey = key; this.drawFace(maxK, s.maxRpm * 0.92); }
        const x = this.x, T = this.T, S = this.S;
        x.clearRect(0, 0, W, H);
        x.drawImage(this.face, 0, 0);
        // fuel: the arc under the hub fills from E (left) to F (right)
        const ff = Math.max(0, Math.min(1, s.fuel / s.tank)), a1 = 0.66 * Math.PI, fang = a1 - ff * 0.32 * Math.PI;
        x.strokeStyle = s.low ? '#ff4b3e' : '#3ad07a'; x.lineWidth = 9; x.beginPath(); x.arc(T.x, T.y, T.r * 0.84, a1, fang, true); x.stroke();
        // gear and speed
        x.textAlign = 'center'; x.textBaseline = 'middle';
        x.fillStyle = '#f2c418'; x.font = FONT(56); x.fillText(s.gear, T.x, T.y + T.r * 0.42);
        x.fillStyle = s.over ? '#ff4b3e' : '#ffffff'; x.font = FONT(58); x.fillText(String(s.kmh), S.x, S.y + S.r * 0.42);
        this.needle(T, s.rpm / (maxK * 1000), '#ff6a3d');
        this.needle(S, s.kmh / 160, '#ff6a3d');
        // warning lights along the bottom
        const y = H - 20;
        x.fillStyle = 'rgba(7,11,18,.78)'; x.beginPath(); x.roundRect ? x.roundRect(28, y - 21, 584, 42, 12) : x.rect(28, y - 21, 584, 42); x.fill();
        this.lamp(70, y, 'P', s.hand, '#ff4b3e');
        this.lamp(140, y, 'ENG', s.engine, '#f2a818');
        this.lamp(222, y, 'FUEL', s.low, '#f2a818');
        if (s.clutchBox) this.lamp(292, y, 'C', s.clutch, '#8fdcf0');
        this.lamp(392, y, s.limiter ? 'LIM ' + s.limiter : 'LIM', !!s.limiter, '#2cff8f');
        this.lamp(505, y, 'TAXI', true, s.ride ? '#ff4b3e' : '#2cff8f');
    }
}

// the GPS turn sign: an arrow (left / right / arrive), drawn on a small canvas
export function turnArrow(x, dir) {
    const W2 = x.canvas.width; x.clearRect(0, 0, W2, W2);
    x.save(); x.translate(W2 / 2, W2 / 2); x.scale(W2 / 100, W2 / 100);
    x.fillStyle = '#2cff8f'; x.strokeStyle = '#2cff8f'; x.lineWidth = 12; x.lineCap = 'round'; x.lineJoin = 'round';
    if (dir === 'arrive') { x.beginPath(); x.arc(0, -10, 18, 0, 7); x.fill(); x.beginPath(); x.moveTo(-14, 0); x.lineTo(0, 34); x.lineTo(14, 0); x.fill(); x.fillStyle = '#0b1420'; x.beginPath(); x.arc(0, -10, 7, 0, 7); x.fill(); }
    else if (dir === 'uturn') {
        x.beginPath(); x.moveTo(14, 38); x.lineTo(14, -6); x.arc(-4, -6, 18, 0, Math.PI, true); x.lineTo(-22, 14); x.stroke();
        x.beginPath(); x.moveTo(-40, 8); x.lineTo(-4, 8); x.lineTo(-22, 34); x.closePath(); x.fill();
    } else {
        const s = dir === 'left' ? -1 : 1;
        x.beginPath(); x.moveTo(-s * 14, 38); x.lineTo(-s * 14, -2); x.quadraticCurveTo(-s * 14, -16, 0, -16); x.lineTo(s * 12, -16); x.stroke();
        x.beginPath(); x.moveTo(s * 34, -16); x.lineTo(s * 10, -36); x.lineTo(s * 10, 4); x.closePath(); x.fill();
    }
    x.restore();
}

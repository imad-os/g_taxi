// Controls of the taxi. Game controllers first (MyPC.gamepad: every button, analog triggers, sticks), by LETTER on
// every controller (My PC delivers button 0 = the button printed A):
//   ZR accelerate (analog)   ZL brake / reverse (analog)   left stick or D-pad ◀ ▶ steer
//   A  pick up / drop off / refuel / call help (the action shown on screen)     B  handbrake
//   X  clutch (hold; "Manual + clutch" gearbox)     R  gear up     L  gear down     Y  camera
//   D-pad ▲ ▼  speed limiter + / −                 +  pause menu      Capture (the square button)  report a bug
// TV remote alone: ◀ ▶ steer, ▲ accelerate, ▼ brake / reverse, OK = the action, Back = pause menu.
export const BTN = { A: 0, B: 1, X: 2, Y: 3, L: 4, R: 5, ZL: 6, ZR: 7, MINUS: 8, PLUS: 9, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15, CAPTURE: 17 };

export class Input {
    constructor() {
        this.pads = {};                 // dev -> { b: Float32Array(24), a: Float32Array(4) }
        this.acts = {};                 // remote / keyboard actions held (dev 'keys'...)
        this.ctl = { steer: 0, throttle: 0, brake: 0, handbrake: 0, clutch: 0 };
        this.edge = { action: 0, up: 0, down: 0, camera: 0, map: 0 };
        this.prev = {};
        this.hit = new Uint8Array(24);   // pressed since the last poll (a tap shorter than a frame still counts)
        this.actHit = {};
        this.menuCb = null;
        this.dead = 0.14;
        this.steerNow = 0;
    }
    pad(dev) { return this.pads[dev] || (this.pads[dev] = { b: new Float32Array(24), a: new Float32Array(4) }); }
    onAction(action, pressed, repeat, dev) {
        if (repeat) { if (this.menuCb) this.menuCb(action, dev, true); return; }
        const pad = dev && dev.indexOf('pad') === 0;
        if (!pad) { (this.acts[dev] || (this.acts[dev] = {}))[action] = pressed; if (pressed) this.actHit[action] = 1; }
        if (pressed && this.menuCb) this.menuCb(action, dev, false);
    }
    onButton(i, pressed, value, dev) { this.pad(dev).b[i] = pressed ? Math.max(0.01, value || 1) : 0; if (pressed && i < 24) this.hit[i] = 1; if (pressed) { this.lastBtn = i; this.btnSeen = (this.btnSeen || 0) + 1; } }
    onAxes(axes, dev) { const p = this.pad(dev); for (let k = 0; k < 4 && k < axes.length; k++) p.a[k] = axes[k]; }
    btn(i) { let v = 0; for (const d in this.pads) { const x = this.pads[d].b[i]; if (x > v) v = x; } return v; }
    axis(k) { let v = 0; for (const d in this.pads) { const x = this.pads[d].a[k]; if (Math.abs(x) > Math.abs(v)) v = x; } return v; }
    act(name) { for (const d in this.acts) if (this.acts[d][name]) return 1; return 0; }
    rise(name, on) { const r = on && !this.prev[name] ? 1 : 0; this.prev[name] = on; return r; }

    poll(dt) {
        const c = this.ctl;
        let ax = this.axis(0);
        ax = Math.abs(ax) > this.dead ? (ax - Math.sign(ax) * this.dead) / (1 - this.dead) : 0;
        const digital = (this.btn(BTN.LEFT) > 0 || this.act('left') ? 1 : 0) - (this.btn(BTN.RIGHT) > 0 || this.act('right') ? 1 : 0);
        // + = left (the car's frame); the stick gets a gentle curve, the D-pad / arrows ramp in so a tap is a small turn
        if (digital) { this.steerNow += (digital - this.steerNow) * Math.min(1, dt * 9); c.steer = this.steerNow; }
        else { this.steerNow = 0; c.steer = -Math.sign(ax) * Math.pow(Math.abs(ax), 1.2); }
        c.throttle = Math.max(this.btn(BTN.ZR), this.act('up'));
        c.brake = Math.max(this.btn(BTN.ZL), this.act('down'));
        c.handbrake = this.btn(BTN.B) > 0.3 ? 1 : 0;
        // the clutch pedal: a trigger's own travel; a plain button goes in at once and comes out over 0.9 s (a digital button can't feather it)
        const cl = this.btn(BTN.X);
        c.clutch = cl > 0.02 && cl < 0.98 ? cl : cl >= 0.98 ? 1 : Math.max(0, c.clutch - dt / 0.9);
        const e = this.edge;
        // a press that came and went since the last poll (a tap shorter than a frame) is still one press
        const H = this.hit;
        const tap = (name, held, hit) => { const r = held ? (!this.prev[name] || hit ? 1 : 0) : (hit ? 1 : 0); this.prev[name] = held; return r; };
        e.action = tap('action', this.btn(BTN.A) > 0.3 || !!this.act('jump'), H[BTN.A] === 1 || this.actHit.jump === 1);
        e.camera = tap('camera', this.btn(BTN.Y) > 0.3, H[BTN.Y] === 1);
        e.up = tap('up', this.btn(BTN.UP) > 0.3, H[BTN.UP] === 1);
        e.down = tap('down', this.btn(BTN.DOWN) > 0.3, H[BTN.DOWN] === 1);
        e.gearUp = tap('gu', this.btn(BTN.R) > 0.3, H[BTN.R] === 1);
        e.gearDown = tap('gd', this.btn(BTN.L) > 0.3, H[BTN.L] === 1);
        e.map = tap('map', this.btn(BTN.MINUS) > 0.3, H[BTN.MINUS] === 1);
        // Capture: 17 on a Switch Pro in Chrome; some systems number it higher, so any button from 17 up (16 = Home is My PC's)
        let capH = false, capT = false; for (let b = BTN.CAPTURE; b < 24; b++) { if (this.btn(b) > 0.3) capH = true; if (H[b] === 1) capT = true; }
        e.capture = tap('cap', capH, capT);
        H.fill(0); this.actHit = {};
    }
    clearHeld() { this.hit.fill(0); this.actHit = {}; for (const d in this.acts) this.acts[d] = {}; for (const d in this.pads) { this.pads[d].b.fill(0); this.pads[d].a.fill(0); } this.prev = {}; }
    hasPad() { for (const d in this.pads) return true; return false; }
}

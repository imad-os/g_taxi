// Controls of the taxi. Game controllers first (MyPC.gamepad: every button, analog triggers, sticks), by LETTER on
// every controller (My PC delivers button 0 = the button printed A):
//   ZR accelerate (analog)   ZL brake / reverse (analog)   left stick or D-pad ◀ ▶ steer
//   A  pick up / drop off / refuel / call help (the action shown on screen)     B  handbrake
//   X  clutch (hold; "Manual + clutch" gearbox)     R  gear up     L  gear down     Y  camera
//   D-pad ▲ ▼  speed limiter + / −                 +  pause menu
// TV remote alone: ◀ ▶ steer, ▲ accelerate, ▼ brake / reverse, OK = the action, Back = pause menu.
export const BTN = { A: 0, B: 1, X: 2, Y: 3, L: 4, R: 5, ZL: 6, ZR: 7, MINUS: 8, PLUS: 9, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15 };

export class Input {
    constructor() {
        this.pads = {};                 // dev -> { b: Float32Array(24), a: Float32Array(4) }
        this.acts = {};                 // remote / keyboard actions held (dev 'keys'...)
        this.ctl = { steer: 0, throttle: 0, brake: 0, handbrake: 0, clutch: 0 };
        this.edge = { action: 0, up: 0, down: 0, camera: 0, map: 0 };
        this.prev = {};
        this.menuCb = null;
        this.dead = 0.14;
        this.steerNow = 0;
    }
    pad(dev) { return this.pads[dev] || (this.pads[dev] = { b: new Float32Array(24), a: new Float32Array(4) }); }
    onAction(action, pressed, repeat, dev) {
        if (repeat) { if (this.menuCb) this.menuCb(action, dev, true); return; }
        const pad = dev && dev.indexOf('pad') === 0;
        if (!pad) (this.acts[dev] || (this.acts[dev] = {}))[action] = pressed;
        if (pressed && this.menuCb) this.menuCb(action, dev, false);
    }
    onButton(i, pressed, value, dev) { this.pad(dev).b[i] = pressed ? Math.max(0.01, value || 1) : 0; }
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
        if (digital) { this.steerNow += (digital - this.steerNow) * Math.min(1, dt * 5); c.steer = this.steerNow; }
        else { this.steerNow = 0; c.steer = -Math.sign(ax) * Math.pow(Math.abs(ax), 1.5); }
        c.throttle = Math.max(this.btn(BTN.ZR), this.act('up'));
        c.brake = Math.max(this.btn(BTN.ZL), this.act('down'));
        c.handbrake = this.btn(BTN.B) > 0.3 ? 1 : 0;
        // the clutch pedal: a trigger's own travel; a plain button goes in at once and comes out over 0.9 s (a digital button can't feather it)
        const cl = this.btn(BTN.X);
        c.clutch = cl > 0.02 && cl < 0.98 ? cl : cl >= 0.98 ? 1 : Math.max(0, c.clutch - dt / 0.9);
        const e = this.edge;
        e.action = this.rise('action', this.btn(BTN.A) > 0.3 || this.act('jump'));
        e.camera = this.rise('camera', this.btn(BTN.Y) > 0.3);
        e.up = this.rise('up', this.btn(BTN.UP) > 0.3);
        e.down = this.rise('down', this.btn(BTN.DOWN) > 0.3);
        e.gearUp = this.rise('gu', this.btn(BTN.R) > 0.3);
        e.gearDown = this.rise('gd', this.btn(BTN.L) > 0.3);
        e.map = this.rise('map', this.btn(BTN.MINUS) > 0.3);
    }
    clearHeld() { for (const d in this.acts) this.acts[d] = {}; for (const d in this.pads) { this.pads[d].b.fill(0); this.pads[d].a.fill(0); } this.prev = {}; }
    hasPad() { for (const d in this.pads) return true; return false; }
}

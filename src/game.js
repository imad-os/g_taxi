// A shift on the streets: the city (streaming), the taxi, the traffic, the people, the camera, effects, the taxi's job.
// Physics at 120 Hz (two steps per 60 Hz tick), like the race game.
import * as THREE from 'three';
import { Vehicle, SPECS } from '../core/src/vehicle.js';
import { CarView, carDims } from '../core/src/carview.js';
import { carCar, HIT } from '../core/src/collide.js';
import { ChaseCam } from '../core/src/camera.js';
import { FX } from '../core/src/fx.js';
import { U, carMaterial, worldMaterial } from '../core/src/shaders.js';
import { CityWorld } from './city.js';
import { Traffic, lightState } from './traffic.js';
import { Taxi } from './taxi.js';
import { People } from './people.js';
import { Walkers } from './walkers.js';
import { Enforce } from './enforce.js';
import { BugLog } from './buglog.js';
import { RouteGuide } from './guide.js';
import { RoadBot } from './roadbot.js';
import { levelOf } from './level.js';

// the petit taxi: a 1.5 l diesel city saloon (real numbers: 66 kW, 200 Nm, 5 gears), Tangier's turquoise
SPECS.taxi = { model: 'tr_taxi', cls: 'T', mass: 1180, power: 66, torque: 200, rpm: 4600, gears: [3.73, 2.05, 1.32, 0.97, 0.76], final: 4.21,
    cda: 0.68, cl: 0, mu: 1.0, steer: 0.62, nitro: 0, drive: 'f', turbo: 1, cyl: 4, diesel: 1, shift: 0.4 };
export const TAXI_PAINT = 0x1aa3c4, TAXI_ROOF = 0xf2c418;
// the cars a driver can pick (all in petit-taxi colours): the classic taxi, and two everyday cars of Tangier Asphalt
export const CARS = ['taxi', 'city', 'hatch'];
SPECS.taxi_city = Object.assign({}, SPECS.city, { cls: 'T', nitro: 0 });
SPECS.taxi_hatch = Object.assign({}, SPECS.hatch, { cls: 'T', nitro: 0 });
// city steering (owner request 2026-11-14: "make it better to turn the tight turns"): more lock (40°), less taken away with
// speed, a little more than the strict grip limit, and a quicker wheel (core/src/vehicle.js lockAt: steerFade / steerSlack / steerRate)
for (const k of ['taxi', 'taxi_city', 'taxi_hatch']) Object.assign(SPECS[k], { steer: 0.7, steerFade: 0.02, steerSlack: 0.22, steerRate: 3.6 });
const specOf = car => car === 'city' ? SPECS.taxi_city : car === 'hatch' ? SPECS.taxi_hatch : SPECS.taxi;

export function setDay() {
    U.uSun.value.set(0.45, 0.75, -0.48).normalize(); U.uSunCol.value.setRGB(1.0, 0.95, 0.86);
    U.uSky.value.setRGB(0.55, 0.72, 0.95); U.uGround.value.setRGB(0.42, 0.38, 0.32); U.uFog.value.setRGB(0.76, 0.83, 0.92); U.uNight.value = 0;
}

const SUB = 2;
const corners = new Float32Array(8);

export class Shift {
    constructor(renderer, net, quality, opts) {
        this.renderer = renderer; this.net = net; this.quality = quality; this.opts = opts;
        this.scene = new THREE.Scene();
        setDay();
        const far = quality.tier === 'low' ? 480 : quality.tier === 'mid' ? 620 : 800;
        U.uFogFar.value = far; U.uFogNear.value = far * 0.3;
        this.far = far; this.detailFar = far * 0.5;
        this.city = new CityWorld(this.scene, net, quality);
        this.city.reach = far + 60;
        // the taxi
        const spec = specOf(opts.car);
        this.me = { veh: new Vehicle(spec, carDims(spec.model), opts.upgrades), spec, player: 0, wreck: 0, traffic: false, active: true };
        this.me.view = new CarView(this.scene, spec.model, TAXI_PAINT, TAXI_ROOF);
        const v = this.me.veh;
        v.gearbox = opts.gearbox === 'auto' ? null : opts.gearbox;
        v.mgear = 1;
        this.q = {}; this.qp = {};
        this.taxi = new Taxi(net, opts.saved);
        this.taxi.lang = opts.lang;
        this.level = levelOf(opts.level); this.taxi.level = this.level;
        this.enforce = new Enforce(net); this.taxi.enf = this.enforce; this.city.addEnforce(this.enforce);
        this.start(opts.start);
        this.traffic = new Traffic(this.scene, net, opts.bot ? 0 : Math.max(3, Math.round((quality.tier === 'low' ? 9 : 13) * this.level.traffic)));
        this.bot = opts.bot ? new RoadBot(this, opts.bot) : null;   // dev: the road bot drives (tools/roadbot.mjs)
        this.all = [this.me].concat(this.traffic.cars);
        this.walkers = new Walkers(net, quality.tier === 'low' ? 8 : 16);
        this.people = new People(this.scene, 10 + this.walkers.list.length);
        this.cam = new ChaseCam(16 / 9, far + 60);
        this.cam.shakeOn = quality.tier !== 'low';
        this.fx = new FX(this.scene, quality.tier, carMaterial(0x888888));
        // the destination beacon: a tall green column (seen over the roofs)
        const bg = new THREE.CylinderGeometry(1.4, 1.4, 60, 10, 1, true); bg.translate(0, 30, 0);
        const c = new Uint8Array(bg.attributes.position.count * 4);
        for (let i = 0; i < bg.attributes.position.count; i++) { const y = bg.attributes.position.getY(i); c[i * 4] = 40; c[i * 4 + 1] = 255; c[i * 4 + 2] = 140; c[i * 4 + 3] = y < 1 ? 200 : 0; }
        bg.setAttribute('col', new THREE.BufferAttribute(c, 4, true));
        this.beacon = new THREE.Mesh(bg, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
            vertexShader: 'attribute vec4 col; varying vec4 vC; void main(){ vC = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
            fragmentShader: 'varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 0.9, 1.0); }' }));
        this.beacon.visible = false; this.beacon.renderOrder = 4; this.beacon.frustumCulled = false;
        this.scene.add(this.beacon);
        // the race game's sound module expects a race: players + other racers (for their engine voices)
        this.race = { players: [this.me], racers: this.all };
        this.lightT = 0; this.routeT = 0; this.time = 0;
        this.city.stream(v.px, v.pz, 0, true);
        this.city.setLamps((L, ph) => lightState(net, L, ph, this.traffic.t));
        this.frameMs = 16.7; this.scale = quality.scale || 1; this.lateFrames = 0; this.goodFrames = 0;
        this.size = new THREE.Vector2();
        this.shiftMsg = '';
        this.bug = new BugLog();
        this.guide = new RouteGuide(this.scene, net);
        this.arrows = opts.arrows !== false;
    }

    // put the taxi on a street near the saved place (or the city centre), facing along it
    start(at) {
        const net = this.net, q = this.q;
        const x = at ? at.x : 2350, z = at ? at.z : -1780;
        let best = -1, bd = 1e18;
        for (let e = 0; e < net.ne; e++) {
            if (net.eCls[e] > 3 || net.eLen[e] < 60) continue;
            const i = net.eOff[e] + (net.eN[e] >> 1), d = Math.hypot(net.px[i] - x, net.pz[i] - z);
            if (d < bd) { bd = d; best = e; }
        }
        const e = best, a = net.at(e, net.eLen[e] / 2, net.eOne[e] ? 0 : -net.eHw[e] * 0.5, {});
        const v = this.me.veh;
        v.setPose(a.x, a.y + v.cgY + 0.45, a.z, Math.atan2(a.fx, a.fz));
        void q;
    }

    // people on foot in the taxi's way (walkers, waiting passengers): a hit is always paid for
    pedHits(v, taxi) {
        const R = v.R, chk = (p) => {
            const dx = p.x - v.px, dz = p.z - v.pz;
            if (dx * dx + dz * dz > 16) return false;
            return Math.abs(dx * R[0] + dz * R[2]) < 1.1 && Math.abs(dx * R[6] + dz * R[8]) < 2.5 && Math.abs(p.y - v.py) < 2.5;
        };
        const kmh = Math.abs(v.fwdSpeed) * 3.6;
        for (const p of this.walkers.list) if (p.live && chk(p)) { p.live = false; p.wait = 6; taxi.hitPed(kmh); this.bug.event('walker', Math.round(kmh)); this.onSound && this.onSound('hit', this.me, 5); }
        for (const p of taxi.peds) if (p.state === 'wait' && chk(p)) { p.state = 'gone'; taxi.hitPed(kmh); this.onSound && this.onSound('hit', this.me, 5); }
    }

    // per 60 Hz tick
    update(dt, input) {
        this.time += dt;
        const me = this.me, v = me.veh, c = input.ctl, taxi = this.taxi;
        v.input.steer = c.steer; v.input.throttle = c.throttle; v.input.brake = c.brake; v.input.handbrake = c.handbrake; v.input.clutch = c.clutch;
        if (this.bot) this.bot.drive(dt);
        const E = input.edge;
        if (E.camera) this.cam.mode = (this.cam.mode + 1) % 3;
        if (v.gearbox && (E.gearUp || E.gearDown)) { const why = v.shift(E.gearUp ? 1 : -1); if (why === 'clutch') taxi.toast('needClutch', 'warn'); }
        if (E.up) taxi.limiter = taxi.limiter ? Math.min(130, taxi.limiter + 10) : Math.max(30, Math.ceil(Math.abs(v.fwdSpeed) * 3.6 / 10) * 10);
        if (E.down && taxi.limiter) taxi.limiter = taxi.limiter <= 30 ? 0 : taxi.limiter - 10;
        if (E.action) taxi.action(v, this.qp);
        // at the pump / waiting for help: parked (held on the brakes; a held brake pedal would put the automatic in reverse)
        v.hold = !!(taxi.refuel || taxi.helpT > 0); if (v.hold) { v.input.throttle = 0; v.input.brake = 0; }
        // traffic decides, then physics for every car
        this.traffic.update(dt, this.all, me, this.q);
        const h = dt / SUB, all = this.all, net = this.net, q = this.q;
        for (let s = 0; s < SUB; s++) {
            for (let k = 0; k < all.length; k++) {
                const r = all[k]; if (!r.active) continue;
                r.veh.step(h, net, q);
                r.veh.groundY = q.y;
                const j = this.wall(r.veh);
                if (j > 0 && r === me) this.onHit(null, HIT.rel);
            }
            for (let a = 0; a < all.length; a++) {
                const A = all[a]; if (!A.active) continue;
                for (let b = a + 1; b < all.length; b++) {
                    const B = all[b]; if (!B.active) continue;
                    const j = carCar(A.veh, B.veh);
                    if (j <= 0) continue;
                    if (HIT.rel > 3) this.fx.spark(HIT.px, HIT.py, HIT.pz, A.veh.vx, A.veh.vz, Math.min(12, 2 + HIT.rel * 0.5 | 0));
                    if (A === me || B === me) this.onHit(A === me ? B : A, HIT.rel, A === me);
                    else if (HIT.rel > 4) { A.wreck = A.wreck || 0; B.stuck = (B.stuck || 0) + 1; }
                }
            }
        }
        net.query(v.px, v.pz, v.hint, this.qp);
        taxi.update(dt, v, this.qp, (L, ph) => lightState(net, L, ph, this.traffic.t));
        this.bug.tick(dt, this);
        // a new route every 4 s while carrying someone (follows the taxi's detours)
        if (taxi.ride && taxi.ride.ped.state === 'in' && (this.routeT -= dt) <= 0 && this.qp.edge >= 0) {
            this.routeT = 4;
            const R = taxi.ride, heading = (v.R[6] * this.qp.fx + v.R[8] * this.qp.fz) >= 0 ? 1 : -1;
            const r = net.route(this.qp.edge, this.qp.s, heading, R.e, R.s);
            if (r) { R.route = r; R.left = r.len; this.guide.t = 0; }
        }
        this.guide.update(dt, taxi.ride, this.qp, this.arrows, (v.R[6] * this.qp.fx + v.R[8] * this.qp.fz) >= 0 ? 1 : -1);
        if ((this.lightT -= dt) <= 0) { this.lightT = 0.25; this.city.setLamps((L, ph) => lightState(net, L, ph, this.traffic.t)); }
        U.uTime.value += dt;
        // tyres: skid marks and smoke for the taxi
        const fx = this.fx;
        for (let w = 0; w < 4; w++) {
            const wh = v.wheels[w], slide = Math.max(wh.slipLat, wh.slipLong);
            if (wh.contact && slide > 0.35 && v.speed > 4) { fx.skids.add(w, wh.cx, wh.cy, wh.cz, v.R[0], v.R[2], slide); if (Math.random() < slide * 0.4) fx.puff(wh.cx, wh.cy, wh.cz, v.vx, v.vz, slide); }
            else fx.skids.add(w, 0, 0, 0, 0, 0, 0);
        }
        fx.update(dt);
        this.walkers.update(dt, v.px, v.pz, Math.atan2(v.R[6], v.R[8]));
        if (Math.abs(v.fwdSpeed) > 1.5) this.pedHits(v, taxi);
        this.people.update(dt, taxi.peds, this.walkers.list, this.cam.cam.position);
        this.cam.update(dt, me);
        // beacon over the destination
        const R = taxi.ride;
        this.beacon.visible = !!(R && R.ped.state === 'in');
        if (this.beacon.visible) this.beacon.position.set(R.x, R.y, R.z);
    }

    // the taxi hit something: the accident is assessed by the job (fault: who drove into whom)
    onHit(other, rel, meFirst) {
        const v = this.me.veh;
        this.bug.event(other ? 'car' : 'wall', Math.round(rel * 36) / 10 + ' km/h');
        this.cam.kick(Math.min(0.8, rel * 0.04));
        if (this.onSound) this.onSound('hit', this.me, rel);
        let fault = true;
        if (other) {
            // closing speed each car brought along the contact normal (HIT.n points from A to B)
            const nx = HIT.nx * (meFirst ? 1 : -1), nz = HIT.nz * (meFirst ? 1 : -1);   // from the taxi toward the other car
            const mine = v.vx * nx + v.vz * nz, theirs = -(other.veh.vx * nx + other.veh.vz * nz);
            fault = mine > theirs + 0.6 || other.veh.speed < 0.8;
        }
        this.taxi.hit(rel, other, fault);
    }

    // invisible wall at the outer edge of the pavement (not in junctions); like core collide.js carWall for one street
    wall(v) {
        const R = v.R, q = this.q;
        let ax = R[0], az = R[2], al = Math.hypot(ax, az) || 1; ax /= al; az /= al;
        let fx = R[6], fz = R[8], fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
        let k = 0;
        for (let sx = -1; sx <= 1; sx += 2) for (let sz = -1; sz <= 1; sz += 2) {
            corners[k++] = v.px - R[6] * v.cgZ + ax * v.half.x * sx + fx * v.half.z * sz;
            corners[k++] = v.pz - R[8] * v.cgZ + az * v.half.x * sx + fz * v.half.z * sz;
        }
        let best = 0, bx = 0, bz = 0, bnx = 0, bnz = 0;
        for (let c = 0; c < 4; c++) {
            const x = corners[c * 2], z = corners[c * 2 + 1];
            this.net.query(x, z, v.hint, q);
            if (q.junc >= 0 || q.edge < 0) continue;
            const over = Math.abs(q.d) - q.wall;
            if (over > best) { best = over; bx = x; bz = z; const sg = q.d >= 0 ? -1 : 1; bnx = q.lx * sg; bnz = q.lz * sg; }
        }
        if (best <= 0) return 0;
        v.px += bnx * best; v.pz += bnz * best;
        const py = v.py + 0.15, rx = bx - v.px, ry = py - v.py, rz = bz - v.pz;
        const pvx = v.vx + (v.wy * rz - v.wz * ry), pvy = v.vy + (v.wz * rx - v.wx * rz), pvz = v.vz + (v.wx * ry - v.wy * rx);
        const vn = pvx * bnx + pvz * bnz;
        if (vn >= 0) return 0;
        const kk = v.invMassAt(rx, ry, rz, bnx, 0, bnz);
        const j = -(1 + 0.15) * vn / kk;
        v.impulse(bnx * j, 0, bnz * j, rx, ry, rz);
        const tx = pvx - bnx * vn, tz = pvz - bnz * vn, tl = Math.hypot(tx, tz);
        if (tl > 0.05) { const jt = Math.min(j * 0.3, tl / kk); v.impulse(-tx / tl * jt, 0, -tz / tl * jt, rx, ry, rz); }
        HIT.j = j; HIT.rel = -vn; HIT.nx = bnx; HIT.nz = bnz; HIT.px = bx; HIT.py = py; HIT.pz = bz;
        void pvy;
        return j;
    }

    render(ms) {
        const R = this.renderer, cam = this.cam.cam;
        this.budget(ms);
        R.getSize(this.size);
        cam.aspect = this.size.x / this.size.y; cam.updateProjectionMatrix();
        const v = this.me.veh;
        this.city.stream(v.px, v.pz, this.quality.tier === 'low' ? 3 : 5, false);
        this.city.cull(cam.position.x, cam.position.z, this.far, this.detailFar);
        this.city.sky.position.copy(cam.position);
        for (const o of this.all) {
            if (!o.active) { o.view.root.visible = false; o.view.shadow.visible = false; continue; }
            const dx = o.veh.px - cam.position.x, dz = o.veh.pz - cam.position.z;
            o.view.sync(o.veh, Math.sqrt(dx * dx + dz * dz), 0, o.veh.input.brake > 0.2 ? 1 : 0);
        }
        this.fx.streaks.update(1 / 60, cam, 0, false);
        R.render(this.scene, cam);
    }
    budget(ms) {
        if (!ms) return;
        if (ms > 18.5) this.lateFrames++; else this.lateFrames = Math.max(0, this.lateFrames - 1);
        if (ms < 15.5) this.goodFrames++; else this.goodFrames = 0;
        const min = this.quality.minScale || 0.5, max = this.quality.scale || 1;
        if (this.lateFrames > 10 && this.scale > min) { this.scale = Math.max(min, this.scale - 0.1); this.lateFrames = 0; this.onScale && this.onScale(this.scale); }
        else if (this.goodFrames > 240 && this.scale < max) { this.scale = Math.min(max, this.scale + 0.05); this.goodFrames = 0; this.onScale && this.onScale(this.scale); }
    }
    dispose() {
        this.city.dispose(); this.traffic.dispose(); this.guide.dispose(); this.me.view.dispose(); this.people.dispose();
        this.scene.remove(this.beacon); this.beacon.geometry.dispose(); this.beacon.material.dispose();
        const f = this.fx;
        for (const o of [f.sparks.points, f.smoke.points, f.skids.mesh, f.streaks.lines]) { o.geometry.dispose(); o.material.dispose(); }
        void worldMaterial;
    }
}

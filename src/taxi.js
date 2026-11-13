// The taxi's job and the rules of the road: passengers who wave from the pavement, the meter, the trip (route, time),
// pay docked for lateness and accidents, fines (Moroccan code de la route amounts), accident assessment with costs,
// fuel (consumption from the engine's real output, stations, running dry = roadside help), the speed limiter.
// Pure logic: game.js draws the people and reads `events` / `prompt` for the screen.

export const FUEL_PRICE = 13.4;      // DH per litre (diesel at the pump, 2026)
const TANK = 40;                     // litres
const BURN = 4;                      // game time runs faster than a real shift: fuel burns 4x (a tank lasts ~3 h of play)
export const FARE = { flag: 7, km: 4 };   // DH: pick-up + per km on the meter
// fines (DH), code de la route (loi 52-05): classes 700 / 500 / 300; speeding by how far over the limit
export const FINES = { red: 700, wrong: 700, pave: 500, fault: 300 };
export function speedFine(over) { return over < 20 ? 300 : over < 30 ? 500 : over < 40 ? 700 : 1000; }

let seed = 7;
const rnd = () => { seed ^= seed << 13; seed >>>= 0; seed ^= seed >> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; };

export class Taxi {
    constructor(net, saved) {
        this.net = net;
        const s = saved || {};
        this.money = s.money ?? 300;
        this.fuel = s.fuel ?? 9;
        this.tank = TANK;
        this.stats = Object.assign({ rides: 0, earned: 0, fines: 0, repairs: 0, fuel: 0, km: 0, best: 0 }, s.stats);
        this.peds = [];              // waiting / walking people: { x, y, z, yaw, e, s, side, state: 'wait'|'walk'|'in'|'out', t, wave }
        this.ride = null;            // { ped, e, s, side, x, z, route, len, eta, t, km, hits, fines, fare }
        this.log = [];               // the last cards shown (pause screen, tests)
        this.events = [];            // cards for the screen: { kind, title, lines: [[text, dh]], total }
        this.toasts = [];            // short lines: { text, kind }
        this.prompt = '';            // what A does now: pickup | dropoff | refuel | stop | help | ''
        this.limiter = 0;            // km/h, 0 = off
        this.cool = { speed: 0, pave: 0 };
        this.overT = 0; this.overMax = 0; this.paveT = 0; this.wrongT = 0; this.wrongE = -1;
        this.lastE = -1; this.lastRem = 1e9; this.lastJ = -1;
        this.crash = null;           // accident being assessed (hits within 1.2 s count as one)
        this.refuel = false; this.helpT = 0;
        this.redT = -10; this.wrongNow = 0;
        this.time = 0;
        this.dirty = false;
    }
    save() { return { money: Math.round(this.money), fuel: +this.fuel.toFixed(2), stats: this.stats }; }
    pay(dh, why) { this.money += dh; this.dirty = true; if (why) this.stats[why] += Math.abs(dh); }
    toast(text, kind) { this.toasts.push({ text, kind: kind || 'info', t: 0 }); }
    fine(kind, amount, detail) {
        this.pay(-amount, 'fines');
        if (this.ride) this.ride.fines++;
        this.events.push({ kind: 'fine', title: 'fine_' + kind, lines: [[detail || '', -amount]], total: -amount });
    }

    // ---- per tick ----
    // v: the taxi (Vehicle), q: the network query under it (edge, s, junc, lim, off), dt seconds
    update(dt, v, q, lightOf) {
        this.time += dt;
        const net = this.net, speed = Math.abs(v.fwdSpeed), kmh = speed * 3.6;
        // odometer + meter
        const dist = speed * dt;
        this.stats.km += dist / 1000;
        if (this.ride && this.ride.ped.state === 'in') { this.ride.km += dist / 1000; this.ride.t += dt; }
        this.fuelTick(dt, v);
        // speed limiter
        v.topSpeedCap = this.limiter ? this.limiter / 3.6 : 1e9;
        // which way along the street, the junction ahead
        if (q.edge >= 0 && q.junc < 0) {
            const e = q.edge, tx = q.fx, tz = q.fz;
            const along = v.vx * tx + v.vz * tz;
            const dir = along >= 0 ? 1 : -1;
            if (e !== this.lastE) { this.lastE = e; this.lastRem = 1e9; this.wrongT = 0; }
            const J = dir > 0 ? net.eB[e] : net.eA[e];
            const rem = dir > 0 ? net.eLen[e] - q.s : q.s;
            // red light: crossing the stop line on red
            const Li = net.jLight[J];
            if (Li >= 0 && speed > 2) {
                const line = net.jr[J] + 1;
                if (this.lastRem > line && rem <= line && this.lastJ === J) {
                    const k = net.slot(e, J), ph = k >= 0 ? net.lights[Li].ph[k] : 0;
                    if (lightOf(Li, ph) === 2) { this.fine('red', FINES.red, ''); this.redT = this.time; }
                }
            }
            this.lastRem = rem; this.lastJ = J;
            // wrong way up a one-way street
            if (net.eOne[e] && dir < 0 && speed > 2) { this.wrongT += dt; this.wrongNow = 1; } else { this.wrongT = Math.max(0, this.wrongT - dt); this.wrongNow = 0; }
            if (this.wrongT > 2.5 && this.wrongE !== e) { this.wrongE = e; this.fine('wrong', FINES.wrong, net.edgeName(e, this.lang) || ''); this.redT = this.time; }
            // speeding: over the limit (5 km/h tolerance) for 3 s
            const lim = q.lim;
            this.limit = lim;
            if (kmh > lim + 5) { this.overT += dt; this.overMax = Math.max(this.overMax, kmh - lim); } else { this.overT = Math.max(0, this.overT - dt * 2); if (this.overT === 0) this.overMax = 0; }
            if (this.overT > 3 && this.time > this.cool.speed) {
                this.fine('speed', speedFine(this.overMax), Math.round(lim + this.overMax) + ' km/h / ' + lim);
                this.cool.speed = this.time + 40; this.overT = 0; this.overMax = 0;
            }
            // on the pavement
            if (q.off >= 1 && Math.abs(q.d) > q.hl + 1.2 && speed > 3) this.paveT += dt; else this.paveT = Math.max(0, this.paveT - dt);
            if (this.paveT > 1.2 && this.time > this.cool.pave) { this.fine('pave', FINES.pave, ''); this.cool.pave = this.time + 30; this.paveT = 0; }
        } else this.wrongNow = 0;
        this.speeding = this.overT > 0;
        this.peopleTick(dt, v, q);
        this.crashTick(dt);
        // what A does now
        this.prompt = '';
        if (v.fuelCut && this.fuel <= 0.01) this.prompt = this.helpT > 0 ? 'helpWait' : 'help';
        else if (this.refuel) this.prompt = 'stop';
        else if (this.nearStation(v) && speed < 1.2 && this.fuel < this.tank - 0.5) this.prompt = 'refuel';
        else if (this.ride && this.ride.ped.state === 'in' && this.atDest(v) && speed < 1.6) this.prompt = 'dropoff';
        else if (!this.ride && speed < 1.6 && this.nearPed(v)) this.prompt = 'pickup';
    }

    // fuel: litres per hour = idle 0.7 + 0.26 per kW the engine gives (a diesel's brake specific consumption)
    fuelTick(dt, v) {
        if (this.helpT > 0) {
            this.helpT -= dt;
            if (this.helpT <= 0) {
                const L = 6, cost = 150 + Math.round(L * FUEL_PRICE * 1.5);
                this.fuel += L; this.pay(-cost, 'fuel'); v.fuelCut = false; v.stalled = false;
                this.events.push({ kind: 'help', title: 'helpDone', lines: [['helpService', -150], ['helpFuel', -(cost - 150)]], total: -cost });
            }
            return;
        }
        if (this.refuel) {
            const add = Math.min(this.tank - this.fuel, 5 * dt);
            this.fuel += add; this.pay(-add * FUEL_PRICE, 'fuel'); this.refuelL += add;
            if (this.fuel >= this.tank - 0.01 || this.money < 0) this.stopRefuel();
            return;
        }
        if (v.fuelCut || v.stalled) return;
        const thr = v.input.throttle, rpm = Math.max(v.rpm, 800);
        const kw = Math.max(0, v.engineTorque(rpm) * thr * rpm * Math.PI / 30 / 1000);
        const lph = 0.7 + 0.26 * kw;
        this.fuel -= lph / 3600 * dt * BURN;
        if (this.fuel <= 0) { this.fuel = 0; v.fuelCut = true; this.toast('outOfFuel', 'bad'); this.dirty = true; }
        if (this.fuel < 4 && !this.lowSaid) { this.lowSaid = true; this.toast('lowFuel', 'warn'); }
        if (this.fuel > 6) this.lowSaid = false;
    }
    stopRefuel() {
        this.refuel = false;
        if (this.refuelL > 0.05) this.events.push({ kind: 'fuel', title: 'refuelDone', lines: [['litres:' + this.refuelL.toFixed(1), -Math.round(this.refuelL * FUEL_PRICE)]], total: -Math.round(this.refuelL * FUEL_PRICE) });
        this.dirty = true;
    }
    nearStation(v) {
        const net = this.net;
        for (const s of net.stations) {
            const i = net.eOff[s.e] + s.k;
            if (Math.hypot(net.px[i] - v.px, net.pz[i] - v.pz) < 16) return true;
        }
        return false;
    }

    // ---- A: the action of the moment ----
    action(v, q) {
        const p = this.prompt;
        if (p === 'help') { this.helpT = 9; this.toast('helpComing', 'info'); }
        else if (p === 'refuel') { this.refuel = true; this.refuelL = 0; }
        else if (p === 'stop') this.stopRefuel();
        else if (p === 'pickup') this.pickup(v, q);
        else if (p === 'dropoff') this.dropoff(v);
    }

    // ---- people ----
    spawnPed(v, q2) {
        const net = this.net;
        for (let tries = 0; tries < 20; tries++) {
            const a = rnd() * Math.PI * 2, r = 110 + rnd() * 330;
            net.query(v.px + Math.sin(a) * r, v.pz + Math.cos(a) * r, -1, q2);
            const e = q2.edge;
            if (e < 0 || q2.junc >= 0 || net.eCls[e] === 0 || net.eLen[e] < 30 || q2.s < 10 || q2.s > net.eLen[e] - 10) continue;
            const side = rnd() < 0.5 ? 1 : -1;
            const at = net.at(e, q2.s, side * (net.eHw[e] + 1.7), {});
            if (this.peds.some(p => Math.hypot(p.x - at.x, p.z - at.z) < 60)) continue;
            this.peds.push({ x: at.x, y: at.y + 0.15, z: at.z, yaw: Math.atan2(-side * at.lx, -side * at.lz), e, s: q2.s, side, state: 'wait', t: rnd() * 3, kind: (rnd() * 6) | 0 });
            return;
        }
    }
    peopleTick(dt, v, q) {
        const want = this.ride ? 1 : 4;
        if (this.peds.filter(p => p.state === 'wait').length < want && (this.time % 0.5) < dt) this.spawnPed(v, this.q2 || (this.q2 = {}));
        for (let k = this.peds.length - 1; k >= 0; k--) {
            const p = this.peds[k];
            p.t += dt;
            if (p.state === 'wait' && Math.hypot(p.x - v.px, p.z - v.pz) > 650) { this.peds.splice(k, 1); continue; }
            if (p.state === 'walk') {   // to the taxi's door
                const R = v.R, dx = v.px + R[0] * 1.1 * (p.side > 0 ? 1 : -1) - p.x, dz = v.pz + R[2] * 1.1 * (p.side > 0 ? 1 : -1) - p.z, d = Math.hypot(dx, dz);
                if (d < 0.6 || p.t > 3) { p.state = 'in'; this.ride.t = 0; this.toast('boarded', 'ok'); }
                else { const st = Math.min(d, 2.2 * dt); p.x += dx / d * st; p.z += dz / d * st; p.yaw = Math.atan2(dx, dz); }
            }
            if (p.state === 'out') {    // walks away on the pavement, then is gone
                p.x += Math.sin(p.yaw) * 1.4 * dt; p.z += Math.cos(p.yaw) * 1.4 * dt;
                if (p.t > 4) this.peds.splice(k, 1);
            }
            if (p.state === 'gone') this.peds.splice(k, 1);
        }
    }
    nearPed(v) {
        let best = null, bd = 11;
        for (const p of this.peds) { if (p.state !== 'wait') continue; const d = Math.hypot(p.x - v.px, p.z - v.pz); if (d < bd) { bd = d; best = p; } }
        return best;
    }
    pickup(v, q) {
        const p = this.nearPed(v); if (!p) return;
        const net = this.net;
        // a destination 0.8 to 3.5 km away by road, on a street the taxi can reach
        const q2 = this.q2 || (this.q2 = {});
        const dir = q.edge >= 0 ? (v.vx * q.fx + v.vz * q.fz >= 0 ? 1 : -1) : 1;
        if (Math.abs(v.fwdSpeed) < 0.5 && q.edge >= 0) { const R = v.R; if (R[6] * q.fx + R[8] * q.fz < 0) { /* facing backwards */ } }
        const heading = q.edge >= 0 ? ((v.R[6] * q.fx + v.R[8] * q.fz) >= 0 ? 1 : -1) : dir;
        for (let tries = 0; tries < 30; tries++) {
            const a = rnd() * Math.PI * 2, r = 800 + rnd() * 2700;
            net.query(v.px + Math.sin(a) * r, v.pz + Math.cos(a) * r, -1, q2);
            const e = q2.edge;
            if (e < 0 || q2.junc >= 0 || net.eLen[e] < 30 || net.eCls[e] === 0) continue;
            const s = Math.max(10, Math.min(net.eLen[e] - 10, q2.s));
            const route = net.route(q.edge >= 0 ? q.edge : e, q.edge >= 0 ? q.s : 0, heading, e, s);
            if (!route || route.len < 600 || route.len > 6000) continue;
            const side = rnd() < 0.5 ? 1 : -1;
            const at = net.at(e, s, side * (net.eHw[e] + 1.7), {});
            p.state = 'walk'; p.t = 0;
            this.ride = { ped: p, e, s, side, x: at.x, y: at.y, z: at.z, route, len: route.len, eta: route.len / 8.2 + 45, t: 0, km: 0, hits: 0, fines: 0, scare: 0,
                name: net.edgeName(e, this.lang), routeT: 0 };
            this.toast('pickup', 'ok');
            return;
        }
        this.toast('noDest', 'warn');
    }
    atDest(v) { const r = this.ride; return r && Math.hypot(r.x - v.px, r.z - v.pz) < this.net.eHw[r.e] + 14; }
    meter() { const r = this.ride; return r ? FARE.flag + FARE.km * r.km : 0; }
    dropoff(v) {
        const r = this.ride; if (!r) return;
        const fare = this.meter();
        const lines = [['meterKm:' + r.km.toFixed(1), Math.round(fare)]];
        let total = fare;
        const late = r.t - r.eta;
        if (late > 0) { const k = Math.min(0.6, Math.ceil(late / 15) * 0.1); lines.push(['lateBy:' + Math.round(late), -Math.round(fare * k)]); total -= fare * k; }
        if (r.hits > 0) { const k = Math.min(1, r.hits * 0.25); lines.push(['bumps:' + r.hits, -Math.round(fare * k)]); total -= fare * k; }
        if (late <= 0 && r.hits === 0 && r.fines === 0) { const tip = Math.max(2, Math.round(fare * (0.1 + rnd() * 0.1))); lines.push(['tip', tip]); total += tip; }
        total = Math.max(0, Math.round(total));
        this.pay(total, 'earned');
        this.stats.rides++; this.stats.best = Math.max(this.stats.best, total);
        this.events.push({ kind: 'ride', title: 'rideDone', lines, total });
        const p = r.ped; p.state = 'out'; p.t = 0; p.x = v.px + v.R[0] * 2.2 * r.side; p.z = v.pz + v.R[2] * 2.2 * r.side; p.y = r.y + 0.15; p.yaw = Math.atan2(v.R[6], v.R[8]);
        if (!this.peds.includes(p)) this.peds.push(p);
        this.ride = null;
    }

    // ---- accidents ----
    // a hit: rel = closing speed (m/s), other = the other car (null = a wall), fault = the taxi caused it
    hit(rel, other, fault) {
        if (rel < 1.3) return;
        if (!this.crash) this.crash = { t: 0, rel: 0, car: false, fault: false, wall: false };
        const c = this.crash;
        c.rel = Math.max(c.rel, rel); c.t = 0;
        if (other) { c.car = true; c.fault = c.fault || fault; } else c.wall = true;
    }
    crashTick(dt) {
        const c = this.crash; if (!c) return;
        c.t += dt;
        if (c.t < 1.2) return;
        this.crash = null;
        const kmh = Math.round(c.rel * 3.6);
        const fault = c.wall || c.fault || this.time - this.redT < 4;
        const lines = [['impact:' + kmh, 0]];
        const own = Math.min(14000, Math.round(c.rel * c.rel * 18 / 10) * 10);
        let total = 0;
        if (fault) { lines.push(['repairOwn', -own]); total -= own; }
        else lines.push(['repairInsured', 0]);
        if (c.car && fault) {
            const third = Math.min(14000, Math.round(own * 0.9 / 10) * 10);
            lines.push(['repairOther', -third]); total -= third;
            lines.push(['fineFault', -FINES.fault]); total -= FINES.fault; this.stats.fines += FINES.fault;
        }
        this.money += total; this.stats.repairs += -total - (c.car && fault ? FINES.fault : 0); this.dirty = true;
        if (this.ride && this.ride.ped.state === 'in') {
            this.ride.hits++;
            if (c.rel > 8.5) {   // a real crash: the passenger gets out and does not pay
                const p = this.ride.ped; p.state = 'gone'; this.ride = null;
                lines.push(['passengerLeft', 0]);
            }
        }
        this.events.push({ kind: 'crash', title: fault ? (c.car ? 'crashYou' : 'crashWall') : 'crashThem', lines, total });
    }
}

// The taxi's rules in a real browser: a whole ride (pick-up, drive there, drop-off card), speeding fine, a crash card,
// refuelling at a station, running dry + roadside help, the manual gearbox. node tests/rules.mjs <out folder>
// Saves a screenshot per step and fails (exit 1) when a step does not give what it should.
import fs from 'node:fs';
import { open } from './shot.mjs';

const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data)); if (!ok) bad++; };

async function session(q) {
    const s = await open(q, { w: 1280, h: 720 });
    const P = s.page;
    await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
    await P.waitForTimeout(1500);
    const pad = (i, v) => P.evaluate(([i, v]) => window.TT.input.onButton(i, v > 0, v, 'pad0'), [i, v]);
    const tap = async i => { await pad(i, 1); await P.waitForTimeout(120); await pad(i, 0); await P.waitForTimeout(120); };
    // put the taxi on sample i of edge e (net arrays), facing along it, stopped
    const put = (e, k, side) => P.evaluate(([e, k, side]) => {
        const S = window.TT.shift, n = S.net, v = S.me.veh, i = n.eOff[e] + k;
        const nx = n.tz[i], nz = -n.tx[i], d = side * n.eHw[e] * 0.5;
        v.setPose(n.px[i] + nx * d, n.py[i] + v.cgY + 0.45, n.pz[i] + nz * d, Math.atan2(n.tx[i], n.tz[i]));
        S.city.stream(v.px, v.pz, 1e9, true);
    }, [e, k, side]);
    const events = () => P.evaluate(() => window.TT.hud.cardsShown || null);
    return { s, P, pad, tap, put, events };
}
const taxiOf = P => P.evaluate(() => { const T = window.TT.shift.taxi, v = window.TT.shift.me.veh; return { money: Math.round(T.money), fuel: +T.fuel.toFixed(2), prompt: T.prompt, stats: T.stats, kmh: +(v.fwdSpeed * 3.6).toFixed(1), gear: v.gear, mgear: v.mgear, stalled: v.stalled, fuelCut: v.fuelCut, ride: T.ride && { state: T.ride.ped.state, x: Math.round(T.ride.x), z: Math.round(T.ride.z) } }; });
const lastEvents = P => P.evaluate(() => window.TT.shift.taxi.log.slice(-4).map(e => ({ kind: e.kind, title: e.title, total: e.total })));

// ---------- 1. a whole ride + crash + speeding (automatic) ----------
{
    const { s, P, pad, tap, put } = await session('?dev&fresh&proof');
    // pick-up: a waiting passenger next to the taxi
    await P.evaluate(() => {
        const S = window.TT.shift, v = S.me.veh, T = S.taxi;
        let p = T.peds.find(p => p.state === 'wait'); if (!p) { T.spawnPed(v, {}); p = T.peds.find(p => p.state === 'wait'); }
        p.x = v.px + v.R[0] * 3; p.z = v.pz + v.R[2] * 3; p.y = v.py - 0.4;
    });
    await P.waitForTimeout(600);
    check((await taxiOf(P)).prompt === 'pickup', 'pick-up prompt next to a waving passenger');
    await tap(0); await P.waitForTimeout(3500);
    let t = await taxiOf(P);
    check(t.ride && t.ride.state === 'in', 'passenger on board', t.ride);
    await P.screenshot({ path: out + '/1-onboard.png' });
    // drive there: jump the taxi to the destination, then stop
    await P.evaluate(() => { const S = window.TT.shift, r = S.taxi.ride; r.km = r.len / 1000; S.taxi.ride.t0 = S.taxi.time - 120; });
    await P.evaluate(() => {
        const S = window.TT.shift, r = S.taxi.ride, n = S.net, v = S.me.veh;
        let bi = 0, bd = 1e18; for (let i = n.eOff[r.e]; i < n.eOff[r.e] + n.eN[r.e]; i++) { const d = Math.hypot(n.px[i] - r.x, n.pz[i] - r.z); if (d < bd) { bd = d; bi = i; } }
        v.setPose(n.px[bi], n.py[bi] + v.cgY + 0.45, n.pz[bi], Math.atan2(n.tx[bi], n.tz[bi])); S.city.stream(v.px, v.pz, 1e9, true);
    });
    await P.waitForTimeout(1500);
    t = await taxiOf(P);
    check(t.prompt === 'dropoff', 'drop-off prompt at the destination', t.prompt);
    await tap(0); await P.waitForTimeout(3000);
    t = await taxiOf(P);
    check(t.stats.rides === 1 && t.money > 300, 'ride paid', { rides: t.stats.rides, money: t.money });
    await P.screenshot({ path: out + '/2-paid.png' });

    // speeding: this street's limit set to 20 km/h, drive at ~45
    const m0 = t.money;
    await P.evaluate(() => { const S = window.TT.shift; S.net.eLim.fill(20); });
    await pad(7, 0.7);
    for (let k = 0; k < 14; k++) { await P.waitForTimeout(700); if ((await taxiOf(P)).stats.fines > 0) break; }
    t = await taxiOf(P);
    check(t.stats.fines > 0 && t.money < m0, 'speeding fine', { kmh: t.kmh, fines: t.stats.fines, money: t.money });
    await P.screenshot({ path: out + '/3-speeding.png' });
    await pad(7, 0);

    // a crash into a wall at 40 km/h (the taxi's fault)
    const r0 = t.stats.repairs;
    await P.evaluate(() => window.TT.shift.taxi.hit(11, null, false));
    await P.waitForTimeout(2200);
    t = await taxiOf(P);
    check(t.stats.repairs > r0, 'crash card with a repair cost', { repairs: t.stats.repairs });
    await P.screenshot({ path: out + '/4-crash.png' });
    console.log('events', JSON.stringify(await lastEvents(P)));
    await s.close();
}

// ---------- 2. fuel: station refill, then running dry + roadside help ----------
{
    const { s, P, pad, tap, put } = await session('?dev&fresh&proof');
    const st = await P.evaluate(() => window.TT.shift.net.stations[0]);
    await put(st.e, st.k, st.side || 1);
    await P.waitForTimeout(1500);
    let t = await taxiOf(P);
    check(t.prompt === 'refuel', 'refuel prompt at a station', t.prompt);
    await P.screenshot({ path: out + '/5-station.png' });
    await tap(0);
    await P.waitForTimeout(4000);
    t = await taxiOf(P);
    check(t.fuel > 15 && t.stats.fuel > 0 && Math.abs(t.kmh) < 1, 'refuelled and paid, parked at the pump', { kmh: t.kmh, fuel: t.fuel, paid: Math.round(t.stats.fuel), money: t.money });
    await P.screenshot({ path: out + '/6-refuelling.png' });
    for (let k = 0; k < 20 && (await taxiOf(P)).prompt === 'stop'; k++) await P.waitForTimeout(800);

    // run dry
    await P.evaluate(() => { window.TT.shift.taxi.fuel = 0.003; });
    await pad(7, 1);
    for (let k = 0; k < 12; k++) { await P.waitForTimeout(500); if ((await taxiOf(P)).fuelCut) break; }
    await pad(7, 0);
    await pad(6, 1); for (let k = 0; k < 40; k++) { await P.waitForTimeout(150); if (Math.abs((await taxiOf(P)).kmh) < 1) break; } await pad(6, 0);
    await P.waitForTimeout(800);
    t = await taxiOf(P);
    check(t.fuelCut && t.prompt === 'help', 'out of fuel: roadside help offered', { fuelCut: t.fuelCut, prompt: t.prompt });
    await P.screenshot({ path: out + '/7-dry.png' });
    const m0 = t.money;
    console.log('events', JSON.stringify(await lastEvents(P)), JSON.stringify(t));
    await tap(0);
    await P.waitForTimeout(1000); console.log('after A', JSON.stringify(await taxiOf(P)), await P.evaluate(() => window.TT.shift.taxi.helpT));
    await P.waitForTimeout(10000);
    console.log('events', JSON.stringify(await lastEvents(P)));
    t = await taxiOf(P);
    check(!t.fuelCut && t.fuel > 5 && t.money < m0 - 150, 'help came: fuel back, service paid', { fuel: t.fuel, money: t.money });
    await P.screenshot({ path: out + '/8-help.png' });
    await s.close();
}

// ---------- 3. manual gearbox + clutch ----------
{
    const { s, P, pad, tap } = await session('?dev&fresh&proof&gear=clutch');
    let t = await taxiOf(P);
    check(t.mgear === 1, 'clutch gearbox starts in 1st', t.mgear);
    // let the clutch out with no throttle: the engine stalls
    await P.evaluate(() => window.TT.input.onButton(2, false, 0, 'pad0'));
    await pad(7, 0); await P.waitForTimeout(2500);
    t = await taxiOf(P);
    check(t.stalled, 'clutch out at idle in 1st: stalled', { stalled: t.stalled, kmh: t.kmh });
    await P.screenshot({ path: out + '/9-stalled.png' });
    // clutch in (X) restarts, then pull away: throttle while letting the clutch out
    await pad(2, 1); await P.waitForTimeout(500);
    await pad(7, 0.6); await P.waitForTimeout(300); await pad(2, 0);
    await P.waitForTimeout(3000);
    t = await taxiOf(P);
    check(!t.stalled && t.kmh > 8, 'pulled away in 1st', { kmh: t.kmh, stalled: t.stalled });
    // shift to 2nd: clutch, R, release
    await pad(7, 0); await pad(2, 1); await P.waitForTimeout(150); await tap(5); await pad(2, 0); await pad(7, 0.6);
    await P.waitForTimeout(3000);
    t = await taxiOf(P);
    check(t.mgear === 2 && t.kmh > 15, 'shifted to 2nd', { mgear: t.mgear, kmh: t.kmh });
    await P.screenshot({ path: out + '/10-second.png' });
    await s.close();
}
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

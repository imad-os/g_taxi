// 0.4.6 checks (owner 2026-11-16): fuel warnings at the orange level, Pause > Go fuel up (arrows + map line + sign to the nearest
// station), real fuel stations, A at the pump fills up and pays. node tests/v046.mjs <out folder>
import fs from 'node:fs';
import { open } from './shot.mjs';
const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data).slice(0, 500)); if (!ok) bad++; };
const s = await open('?dev&fresh&level=easy', { w: 1920, h: 1080 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.waitForTimeout(1500);
let r = await P.evaluate(() => {
    const S = window.TT.shift, net = S.net, v = S.me.veh, q = S.qp;
    const heading = (v.R[6] * q.fx + v.R[8] * q.fz) >= 0 ? 1 : -1;
    let ok = 0, named = 0, far = 0;
    for (const st of net.stations) { const i = net.eOff[st.e] + net.sS[0] * 0 + st.k; if (st.name) named++; if (net.route(q.edge, q.s, heading, st.e, net.sS[i])) ok++; }
    return { stations: net.stations.length, named, reachable: ok };
});
check(r.stations >= 15 && r.named >= 12 && r.reachable === r.stations, 'real fuel stations from OpenStreetMap, all reachable by road from the start', r);
// orange level
await P.evaluate(() => { window.TT.shift.taxi.fuel = 9.5; });
await P.waitForTimeout(1200);
r = await P.evaluate(() => ({ chip: document.querySelector('.h-fuelw').className, text: document.querySelector('.h-fuelw').textContent, toast: document.querySelector('.h-toast').textContent, cls: document.querySelector('.h-toast').className }));
check(/on/.test(r.chip) && /Go fuel up/.test(r.text) && /Go fuel up/.test(r.toast) && /warn/.test(r.cls), 'under 10 L: an orange warning toast and a chip that stays', r);
await P.screenshot({ path: out + '/1-orange-warning.png' });
// the pause menu
await P.evaluate(() => window.TT.pauseShift());
await P.waitForTimeout(400);
await P.screenshot({ path: out + '/2-pause-go-fuel.png' });
const items = await P.evaluate(() => [...document.querySelectorAll('.ui [data-f]')].map(e => e.textContent));
check(/Go fuel up/.test(items[1]), 'Pause: Go fuel up is the second item', items);
await P.evaluate(() => { const U = window.TT.ui; U.f = 1; U.paint(); U.input('confirm', 'keys'); });
await P.waitForTimeout(2500);
r = await P.evaluate(() => { const S = window.TT.shift, G = S.taxi.fuelGo; return G && { state: window.TT.state, name: G.name, km: +(G.route.len / 1000).toFixed(2), arrows: S.guide.mesh.count, turn: S.guide.turn, sign: document.querySelector('.h-turn').className, box: document.querySelector('.h-ride').textContent, beacon: S.beacon.visible }; });
check(r && r.state === 'drive' && r.arrows >= 3 && r.turn && /on/.test(r.sign) && r.beacon && /DH\/L/.test(r.box), 'Go fuel up: back in the game with green arrows, the turn sign, a box and a beacon at the nearest station', r);
await P.screenshot({ path: out + '/3-guidance.png' });
// arrows show even with Route arrows off
await P.evaluate(() => { window.TT.shift.arrows = false; window.TT.shift.guide.t = 0; });
await P.waitForTimeout(800);
check(await P.evaluate(() => window.TT.shift.guide.mesh.count) >= 3, 'the arrows to the station show even when Settings > Route arrows is off');
// drive there (teleport to 40 m before the station, then roll in), A fills up and pays
await P.evaluate(() => {
    const S = window.TT.shift, net = S.net, G = S.taxi.fuelGo, v = S.me.veh, a = {};
    const st = net.stations.reduce((b, st) => { const i = net.eOff[st.e] + st.k; return Math.hypot(net.px[i] - G.x, net.pz[i] - G.z) < 1 ? st : b; }, null);
    net.at(st.e, Math.max(0, G.s - 30), net.eOne[st.e] ? 0 : -net.eHw[st.e] * 0.5, a);
    v.setPose(a.x, a.y + v.cgY + 0.45, a.z, Math.atan2(a.fx, a.fz)); window.TT.shift.taxi.limiter = 25;
    window.TT.input.onButton(7, true, 0.6, 'pad0');
});
await P.waitForFunction(() => window.TT.shift.taxi.nearStation(window.TT.shift.me.veh), null, { timeout: 30000 }).catch(() => {});
await P.evaluate(() => { window.TT.input.onButton(7, false, 0, 'pad0'); window.TT.input.onButton(6, true, 1, 'pad0'); });
await P.waitForFunction(() => Math.abs(window.TT.shift.me.veh.fwdSpeed) < 0.5, null, { timeout: 20000 }).catch(() => {});
await P.evaluate(() => window.TT.input.onButton(6, false, 0, 'pad0'));
await P.waitForTimeout(800);
r = await P.evaluate(() => { const T = window.TT.shift.taxi; return { prompt: T.prompt, fuelGo: !!T.fuelGo, fuel: +T.fuel.toFixed(1), money: Math.round(T.money) }; });
check(r.prompt === 'refuel' && !r.fuelGo, 'at the pump: the guidance ends and A offers to fuel up', r);
await P.screenshot({ path: out + '/4-at-pump.png' });
const m0 = r.money, f0 = r.fuel;
await P.evaluate(() => { window.TT.input.onButton(0, true, 1, 'pad0'); }); await P.waitForTimeout(150); await P.evaluate(() => window.TT.input.onButton(0, false, 0, 'pad0'));
await P.waitForTimeout(3500);
r = await P.evaluate(() => { const T = window.TT.shift.taxi; return { fuel: +T.fuel.toFixed(1), money: Math.round(T.money), refuel: T.refuel }; });
check(r.refuel && r.fuel > f0 + 5 && r.money < m0, 'A fills the tank and the price is taken from the cash', { before: [f0, m0], after: r });
await P.screenshot({ path: out + '/5-refuelling.png' });
await s.close();
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

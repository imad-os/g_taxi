// 0.2.0 checks: passengers to pick from (arrow, quote by route), the Kasbah City car, police on the pavement,
// a pedestrian hit, the pause menu, starting over. node tests/v020.mjs <out folder>
import fs from 'node:fs';
import { open } from './shot.mjs';
const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data)); if (!ok) bad++; };
const s = await open('?dev&fresh&proof&car=city', { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.waitForTimeout(6000);
const pad = (i, v) => P.evaluate(([i, v]) => window.TT.input.onButton(i, v > 0, v, 'pad0'), [i, v]);
let r = await P.evaluate(() => { const S = window.TT.shift, v = S.me.veh; return { model: S.me.spec.model, waiting: S.taxi.peds.filter(p => p.state === 'wait').map(p => ({ d: Math.round(Math.hypot(p.x - v.px, p.z - v.pz)), to: p.dest.name, km: +p.dest.km.toFixed(1), fare: p.dest.fare })), cams: S.enforce.cams.length, police: S.enforce.police.length }; });
check(r.model === 'car_city' && r.waiting.length >= 4, 'Kasbah City; passengers waiting around', r);
// a waiting passenger 30 m ahead on the right pavement: the arrow over the head
await P.evaluate(() => {
    const S = window.TT.shift, v = S.me.veh, T = S.taxi, p = T.peds.find(p => p.state === 'wait');
    p.x = v.px + v.R[6] * 28 - v.R[0] * 6.5; p.z = v.pz + v.R[8] * 28 - v.R[2] * 6.5; p.y = v.py - 0.3;
});
await P.waitForTimeout(800);
await P.screenshot({ path: out + '/1-passenger-arrow.png' });
// drive up to them: the prompt quotes the trip
await P.evaluate(() => { const S = window.TT.shift, v = S.me.veh, p = S.taxi.peds.find(p => p.state === 'wait'); p.x = v.px - v.R[0] * 3.2; p.z = v.pz - v.R[2] * 3.2; });
await P.waitForTimeout(1200);
r = await P.evaluate(() => ({ prompt: window.TT.shift.taxi.prompt, text: document.querySelector('.h-prompt').textContent }));
check(r.prompt === 'pickup' && /DH/.test(r.text), 'pick-up prompt with the destination and the price', r);
await P.screenshot({ path: out + '/2-quote.png' });
await pad(0, 1); await P.waitForTimeout(150); await pad(0, 0); await P.waitForTimeout(3500);
r = await P.evaluate(() => { const R = window.TT.shift.taxi.ride; return R && { state: R.ped.state, fare: R.fare, km: +(R.len / 1000).toFixed(2) }; });
check(r && r.state === 'in' && r.fare > 7, 'on board, fare fixed by the route', r);
await P.screenshot({ path: out + '/3-route.png' });
// police officer + patrol car on the pavement
await P.evaluate(() => {
    const S = window.TT.shift, n = S.net, v = S.me.veh, c = S.enforce.police[0];
    const o = n.at(c.e, c.s - c.side * 30, -c.side * n.eHw[c.e] * 0.45, {});
    v.setPose(o.x, o.y + v.cgY + 0.45, o.z, Math.atan2(o.fx * c.side, o.fz * c.side)); S.city.stream(v.px, v.pz, 1e9, true);
});
await P.waitForTimeout(1500);
await P.screenshot({ path: out + '/4-police.png' });
// a pedestrian walks into the taxi's way
await pad(7, 0.6); await P.waitForTimeout(1500);
await P.evaluate(() => { const S = window.TT.shift, v = S.me.veh; S.taxi.peds.push({ x: v.px + v.R[6] * 3, y: v.py - 0.4, z: v.pz + v.R[8] * 3, yaw: 0, state: 'wait', t: 0, kind: 1, dest: { e: 0, s: 0, name: '', km: 1, fare: 10 } }); });
await P.waitForTimeout(300); await pad(7, 0);
r = await P.evaluate(() => window.TT.shift.taxi.log.map(e => e.title));
check(r.includes('fine_ped'), 'hitting a pedestrian is always paid', r);
await P.waitForTimeout(500);
await P.screenshot({ path: out + '/5-pedestrian.png' });
// pause menu, then start over
await P.evaluate(() => window.TT.pauseShift());
await P.waitForTimeout(500);
await P.screenshot({ path: out + '/6-pause.png' });
await P.evaluate(() => { const U = window.TT.ui; U.f = 4; U.input('confirm'); });
await P.waitForTimeout(400);
await P.screenshot({ path: out + '/7-start-over.png' });
await P.evaluate(() => { const U = window.TT.ui; U.f = 1; U.input('confirm'); });
await P.waitForTimeout(3000);
r = await P.evaluate(() => ({ state: window.TT.state, money: Math.round(window.TT.shift.taxi.money), rides: window.TT.shift.taxi.stats.rides, fines: window.TT.shift.taxi.stats.fines }));
check(r.state === 'drive' && r.money === 300 && r.rides === 0 && r.fines === 0, 'started over: 300 DH, clean record', r);
await s.close();
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

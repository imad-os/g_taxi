// 0.4.5 checks (owner 2026-11-15: "still unplayable for kids"): no pavement fines below Real life, accidents with cars free
// on Easy (counted), passenger stars per ride, the Stats screen (pause and title). node tests/v045.mjs <out folder>
import fs from 'node:fs';
import { open } from './shot.mjs';
const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data).slice(0, 400)); if (!ok) bad++; };
const s = await open('?dev&fresh&level=easy', { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.waitForTimeout(1000);
let r = await P.evaluate(() => {
    const S = window.TT.shift, T = S.taxi, v = S.me.veh, m = T.money;
    T.crash = { t: 2, rel: 10, car: true, fault: true, wall: false }; T.crashTick(0.01);
    const crash = m - T.money;
    const pave = T.level.pave;
    // two rides: one perfect, one late with a bump
    for (const [t, hits] of [[30, 0], [200, 1]]) {
        T.ride = { ped: { state: 'in', fake: 1 }, e: 0, s: 0, len: 1500, name: 'Rue Test ' + hits, fare: 26, t, eta: 100, hits, fines: 0, side: 1, x: v.px, y: v.py, z: v.pz, km: 1.5 };
        T.dropoff(v); T.peds = T.peds.filter(p => !p.fake);
    }
    return { crash, pave, crashes: T.stats.crashes, rated: T.stats.rated, stars: T.stats.stars, last: T.stats.last, toasts: T.toasts.map(t => t.text) };
});
check(r.crash === 0 && r.crashes === 1 && r.toasts.includes('crashFree'), 'Easy: a 36 km/h crash into a car costs nothing, counted as an accident', r);
check(r.pave === false, 'Easy: no pavement fines');
check(r.rated === 2 && r.last[0][3] === 2 && r.last[1][3] === 5, 'each ride gets stars (5 on time, 2 late + bumped)', r.last);
await P.waitForTimeout(800);
await P.screenshot({ path: out + '/1-ride-stars.png' });
await P.evaluate(() => window.TT.pauseShift());
await P.waitForTimeout(300);
await P.evaluate(() => { const U = window.TT.ui; U.f = 5; U.paint(); U.input('confirm', 'keys'); });
await P.waitForTimeout(400);
const txt = await P.evaluate(() => window.TT.ui.screen + ' | ' + document.querySelector('.ui .panel').textContent);
check(/^stats/.test(txt) && /3\.5/.test(txt) && /Rue Test 0/.test(txt) && /Accidents1/.test(txt), 'pause > Stats: average 3.5, the rides, accidents', txt.slice(0, 300));
await P.screenshot({ path: out + '/2-stats.png' });
await P.evaluate(() => window.TT.ui.input('cancel', 'keys'));
await P.waitForTimeout(200);
check(await P.evaluate(() => window.TT.ui.screen === 'pause'), 'Back returns to the pause menu');
// Real life still fines the pavement and charges crashes
const s2 = await open('?dev&fresh&level=real', { w: 640, h: 360 });
await s2.page.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
r = await s2.page.evaluate(() => { const T = window.TT.shift.taxi, m = T.money; T.crash = { t: 2, rel: 10, car: true, fault: true, wall: false }; T.crashTick(0.01); return { crash: m - T.money, pave: T.level.pave }; });
check(r.crash > 1000 && r.pave !== false, 'Real life: crashes and the pavement still cost', r);
await s2.close(); await s.close();
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

// 0.4.0 checks: Settings menu (title + pause), difficulty (trip lengths that grow with rides, police sight, camera
// tolerance, traffic), route arrows on the road + the next-turn sign, the gauge cluster, HUD sizes, the Capture button
// on any button from 17 up and the button test. node tests/v040.mjs <out folder>
import fs from 'node:fs';
import { open } from './shot.mjs';

const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data).slice(0, 400)); if (!ok) bad++; };

// ---- the title and its Settings, with the remote
{
    const s = await open('', { w: 1920, h: 1080 });
    const P = s.page;
    await P.waitForFunction(() => window.TT && window.TT.state === 'menu', null, { timeout: 90000 });
    await P.waitForTimeout(500);
    await P.screenshot({ path: out + '/1-title.png' });
    await P.evaluate(() => { const U = window.TT.ui; U.input('down', 'keys'); U.input('confirm', 'keys'); });
    await P.waitForTimeout(300);
    const rows = await P.evaluate(() => [...document.querySelectorAll('.ui [data-f]')].map(e => e.textContent));
    check(rows.length === 6 && /Difficulty/.test(rows.join()) && /Normal/.test(rows[2]) && /Route arrows/.test(rows.join()) && /HUD size/.test(rows.join()), 'title > Settings lists every setting, Normal by default', rows);
    await P.evaluate(() => { const U = window.TT.ui; U.input('down', 'keys'); U.input('down', 'keys'); U.input('confirm', 'keys'); });
    await P.waitForTimeout(200);
    const lv = await P.evaluate(() => window.TT.settings.level);
    check(lv === 'hard', 'OK on Difficulty changes it (Normal -> Hard)', lv);
    await P.screenshot({ path: out + '/2-settings.png' });
    await P.evaluate(() => { const U = window.TT.ui; U.input('confirm', 'keys'); U.input('confirm', 'keys'); U.input('confirm', 'keys'); U.input('cancel', 'keys'); });   // Real life, Easy, Normal, Back
    check(await P.evaluate(() => window.TT.settings.level === 'normal' && window.TT.ui.screen === 'title'), 'Back returns to the title');
    await s.close();
}

// ---- difficulty: trips, police, cameras, traffic
for (const level of ['easy', 'normal', 'hard', 'real']) {
    const s = await open('?dev&fresh&level=' + level, { w: 640, h: 360 });
    const P = s.page;
    await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
    const r = await P.evaluate(() => {
        const S = window.TT.shift, T = S.taxi, q = {};
        const km = (rides) => { T.stats.rides = rides; const l = []; for (let k = 0; k < 40; k++) { const d = T.pickDest(S.me.veh.px, S.me.veh.pz, q); if (d) l.push(d.km); } return [Math.min(...l), Math.max(...l)].map(v => +v.toFixed(2)); };
        // fines and costs: a share of the full amount (Real life = all of it)
        const m0 = T.money; T.fine('red', 700, ''); const red = m0 - T.money; T.money = m0;
        return { first: km(0), after20: km(20), see: S.level.see, tol: S.level.tol, cars: S.traffic.cars.length, red };
    });
    console.log(level, JSON.stringify(r));
    if (level === 'easy') check(r.first[1] <= 0.85 && r.after20[1] > 1.2 && r.see === 30 && r.tol === 20 && r.red === 180, 'Easy: first trips up to 0.8 km; police see 30 m, cameras +20; a 700 DH fine costs 180', r);
    if (level === 'normal') check(r.first[1] <= 1.05 && r.after20[1] > 1.5 && r.see === 45 && r.tol === 15 && r.red === 280, 'Normal (= 0.4.0 Easy): first trips up to 1 km; police see 45 m, cameras +15; fines at 40 %', r);
    if (level === 'hard') check(r.first[1] <= 1.35 && r.after20[1] > 2.5 && r.see === 70 && r.red === 420, 'Hard (= 0.4.0 Normal): police see 70 m; fines at 60 %', r);
    if (level === 'real') check(r.after20[1] > 3.5 && r.see === 90 && r.tol === 5 && r.red === 700, 'Real life (= 0.3.0): police 90 m, cameras +5, full fines, longest trips', r);
    globalThis['cars_' + level] = r.cars;
    await s.close();
}
check(globalThis.cars_easy <= globalThis.cars_normal && globalThis.cars_normal < globalThis.cars_hard && globalThis.cars_hard < globalThis.cars_real, 'fewer cars on easier levels', [globalThis.cars_easy, globalThis.cars_normal, globalThis.cars_hard, globalThis.cars_real]);

// ---- a ride: arrows on the road, the turn sign, the gauges; HUD sizes
{
    const s = await open('?dev&fresh', { w: 1920, h: 1080 });
    const P = s.page;
    await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
    await P.waitForTimeout(1500);
    await P.evaluate(() => { window._bugs = []; MyPC.bug = (note, data, img) => { window._bugs.push(note); return Promise.resolve('zz0123456789abcdefgh'); }; });
    await P.evaluate(() => {
        const S = window.TT.shift, v = S.me.veh, T = S.taxi;
        let p = T.peds.find(p => p.state === 'wait'); if (!p) { T.spawnPed(v, {}); p = T.peds.find(p => p.state === 'wait'); }
        p.x = v.px + v.R[0] * 3; p.z = v.pz + v.R[2] * 3; p.y = v.py - 0.4;
    });
    await P.waitForTimeout(800);
    await P.evaluate(() => window.TT.input.onButton(0, true, 1, 'pad0')); await P.waitForTimeout(150); await P.evaluate(() => window.TT.input.onButton(0, false, 0, 'pad0'));
    await P.waitForFunction(() => { const R = window.TT.shift.taxi.ride; return R && R.ped.state === 'in' && R.route; }, null, { timeout: 20000 });
    await P.waitForTimeout(1500);
    const g = await P.evaluate(() => { const S = window.TT.shift; return { arrows: S.guide.mesh.count, turn: S.guide.turn, sign: document.querySelector('.h-turn').className, text: document.querySelector('.h-turn').textContent }; });
    check(g.arrows >= 5 && g.turn && /on/.test(g.sign), 'passenger on board: arrows on the road and the next-turn sign', g);
    await P.screenshot({ path: out + '/3-route-arrows.png' });
    // Settings > Route arrows off: none on the road, no sign
    await P.evaluate(() => { const S = window.TT.shift; S.arrows = false; S.guide.t = 0; });
    await P.waitForTimeout(800);
    const off = await P.evaluate(() => ({ arrows: window.TT.shift.guide.mesh.count, sign: document.querySelector('.h-turn').className }));
    check(off.arrows === 0 && off.sign === 'h-turn', 'Route arrows off: nothing on the road, no sign', off);
    await P.evaluate(() => { window.TT.shift.arrows = true; window.TT.shift.guide.t = 0; });
    for (const hs of ['small', 'xl']) {
        await P.evaluate((hs) => { window.TT.settings.hud = hs; window.TT.applyHud(); }, hs);
        await P.waitForTimeout(600);
        const w = await P.evaluate(() => document.querySelector('.h-gauges').getBoundingClientRect().width);
        globalThis['w_' + hs] = w;
        await P.screenshot({ path: out + '/4-hud-' + hs + '.png' });
    }
    check(globalThis.w_xl > globalThis.w_small * 1.5, 'HUD size: Extra large is much bigger than Small', [globalThis.w_small, globalThis.w_xl]);
    await P.evaluate(() => { window.TT.settings.hud = 'normal'; window.TT.applyHud(); });
    // Capture on a button numbered 20 (some systems number Capture above 17)
    await P.evaluate(() => window.TT.input.onButton(20, true, 1, 'pad0')); await P.waitForTimeout(200); await P.evaluate(() => window.TT.input.onButton(20, false, 0, 'pad0'));
    await P.waitForFunction(() => window._bugs.length === 1, null, { timeout: 10000 }).catch(() => {});
    check(await P.evaluate(() => window._bugs.length === 1), 'Capture works on any button from 17 up (here 20)');
    // pause > Settings has every setting; Controls shows the button test
    await P.evaluate(() => window.TT.pauseShift());
    await P.waitForTimeout(300);
    await P.screenshot({ path: out + '/5-pause.png' });
    await P.evaluate(() => { const U = window.TT.ui; U.f = 1; U.paint(); U.input('confirm', 'keys'); });
    await P.waitForTimeout(300);
    const pr = await P.evaluate(() => [...document.querySelectorAll('.ui [data-f]')].map(e => e.textContent));
    check(pr.length === 7 && /Speed limiter/.test(pr.join()), 'pause > Settings: every setting + the limiter', pr);
    await P.screenshot({ path: out + '/6-pause-settings.png' });
    await P.evaluate(() => { const U = window.TT.ui; U.input('cancel', 'keys'); U.f = 2; U.paint(); U.input('confirm', 'keys'); });
    await P.waitForTimeout(200);
    await P.evaluate(() => window.TT.input.onButton(17, true, 1, 'pad0')); await P.waitForTimeout(300); await P.evaluate(() => window.TT.input.onButton(17, false, 0, 'pad0'));
    await P.waitForTimeout(300);
    const bt = await P.evaluate(() => document.querySelector('.btest').textContent);
    check(/button 17/.test(bt), 'Controls: the button test shows the number of the button pressed', bt);
    await P.screenshot({ path: out + '/7-button-test.png' });
    await s.close();
}
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

// Drives the taxi in a real browser (Chromium, SwiftShader) and saves screenshots: the street at the start, driving,
// the map, then a scripted pick-up. node tests/drive.mjs <out folder> [query]
// The pad is simulated through the game's own Input (the same values MyPC.gamepad would give).
import fs from 'node:fs';
import { open } from './shot.mjs';

const out = process.argv[2] || 'proof';
const q = process.argv[3] || '?dev&fresh';
fs.mkdirSync(out, { recursive: true });
const s = await open(q, { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.waitForTimeout(2500);
await P.screenshot({ path: out + '/1-start.png' });
const pad = (i, v) => P.evaluate(([i, v]) => { const T = window.TT; T.input.onButton(i, v > 0, v, 'pad0'); }, [i, v]);
const info = () => P.evaluate(() => { const T = window.TT, v = T.shift.me.veh, q = T.shift.qp; return { kmh: +(v.fwdSpeed * 3.6).toFixed(1), x: Math.round(v.px), z: Math.round(v.pz), edge: q.edge, lim: q.lim, off: q.off, money: Math.round(T.shift.taxi.money), fuel: +T.shift.taxi.fuel.toFixed(2), gear: v.gear, rpm: Math.round(v.rpm), built: T.shift.city.built, live: T.shift.city.live.length, traffic: T.shift.traffic.cars.filter(c => c.active).length, peds: T.shift.taxi.peds.length, prompt: T.shift.taxi.prompt, ev: T.shift.taxi.stats }; });
console.log('start', JSON.stringify(await info()));
await pad(7, 0.6);
for (let k = 0; k < 6; k++) { await P.waitForTimeout(1500); console.log('drive', JSON.stringify(await info())); }
await pad(7, 0);
await P.screenshot({ path: out + '/2-driving.png' });
await pad(6, 1); for (let k = 0; k < 60; k++) { await P.waitForTimeout(100); if ((await info()).kmh < 2) break; } await pad(6, 0); await P.waitForTimeout(400);
console.log('stopped', JSON.stringify(await info()));
// teleport a waiting passenger next to the taxi and pick them up
const ok = await P.evaluate(() => {
    const T = window.TT, S = T.shift, v = S.me.veh, taxi = S.taxi;
    let p = taxi.peds.find(p => p.state === 'wait');
    if (!p) { taxi.spawnPed(v, {}); p = taxi.peds.find(p => p.state === 'wait'); }
    if (!p) return 'no ped';
    p.x = v.px + v.R[0] * 3; p.z = v.pz + v.R[2] * 3; p.y = v.py - 0.4; p.yaw = Math.atan2(-v.R[0], -v.R[2]);
    return 'ok';
});
console.log('ped', ok);
await P.waitForTimeout(800);
await P.screenshot({ path: out + '/3-waving.png' });
console.log('prompt', JSON.stringify(await info()));
await pad(0, 1); await P.waitForTimeout(150); await pad(0, 0);
await P.waitForTimeout(3500);
await P.screenshot({ path: out + '/4-onboard.png' });
console.log('ride', JSON.stringify(await P.evaluate(() => { const r = window.TT.shift.taxi.ride; return r && { state: r.ped.state, len: Math.round(r.len), eta: Math.round(r.eta), name: r.name, legs: r.route.edges.length }; })));
const fps = await P.evaluate(() => { const a = window.TT.fpsLog.slice(-300), w = window.TT.workLog.slice(-300); return { fps: +(1000 / (a.reduce((x, y) => x + y, 0) / a.length)).toFixed(1), work: +(w.reduce((x, y) => x + y, 0) / w.length).toFixed(2) }; });
console.log('perf (software GL)', JSON.stringify(fps));
await s.close();

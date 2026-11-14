// Steering: the tightest circle the taxi drives with the stick held fully over, at 15 / 25 / 35 km/h (speed held by the
// limiter), and how fast the wheels reach full lock. node tests/steer.mjs [car] [folder for a picture]   (owner request 2026-11-14: tight turns)
import { open } from './shot.mjs';
const car = process.argv[2] || 'taxi', dir = process.argv[3], out = {};
for (const kmh of [15, 25, 35]) {
    const s = await open('?dev&fresh&level=easy&car=' + car, { w: dir ? 1280 : 480, h: dir ? 720 : 270 });
    const P = s.page;
    await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
    await P.evaluate((k) => { const S = window.TT.shift; S.traffic.cars.forEach(c => { c.veh.px += 5000; }); window.TT.botSteps = 6; S.taxi.limiter = k; window.TT.input.onButton(7, true, 1, 'pad0'); }, kmh);
    await P.waitForFunction((k) => Math.abs(window.TT.shift.me.veh.fwdSpeed) * 3.6 > k - 2, kmh, { timeout: 60000 });
    const r = await P.evaluate(async () => {
        const S = window.TT.shift, v = S.me.veh, I = window.TT.input, wait = (n) => new Promise(r => { const t0 = S.time; const f = () => S.time - t0 >= n ? r() : requestAnimationFrame(f); f(); });
        I.onAxes([-1, 0, 0, 0], 'pad0');
        const t0 = S.time; let tl = null;
        await wait(0.1); for (let k = 0; k < 40 && tl === null; k++) { if (Math.abs(v.steerNow) >= 0.95 * v.lockAt(v.fwdSpeed)) tl = S.time - t0; await wait(0.05); }
        await wait(0.8);
        const y0 = Math.atan2(v.R[6], v.R[8]), ts = S.time; await wait(1.0);
        let dy = Math.atan2(v.R[6], v.R[8]) - y0; while (dy > Math.PI) dy -= 2 * Math.PI; while (dy < -Math.PI) dy += 2 * Math.PI;
        const w = dy / (S.time - ts), sp = Math.abs(v.fwdSpeed);
        return { kmh: Math.round(sp * 36) / 10, lock: +v.steerNow.toFixed(3), radius: +(sp / Math.abs(w)).toFixed(1), toFullLock: tl === null ? null : +tl.toFixed(2) };
    });
    if (dir && kmh === 15) await P.screenshot({ path: dir + '/tight-turn.png' });
    out[kmh] = r; console.log(kmh, JSON.stringify(r));
    await s.close();
}

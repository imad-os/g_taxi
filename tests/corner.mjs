// Cornering like a daily car (owner 2026-11-15: "on turning it drifts like racing cars", "the smoke is exaggerated"):
// at 30 / 45 / 60 km/h, full stick for 1.2 s (no handbrake): the tyres' slide (rear = drift) and how many tyre-smoke /
// skid frames. node tests/corner.mjs   (must print "all passed")
import { open } from './shot.mjs';
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, JSON.stringify(data)); if (!ok) bad++; };
for (const kmh of (process.env.KMH ? [+process.env.KMH] : [30, 45, 60])) {
    const s = await open('?dev&fresh&level=easy', { w: 480, h: 270 });
    const P = s.page;
    await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
    await P.evaluate((k) => { const S = window.TT.shift; S.traffic.cars.forEach(c => { c.veh.px += 5000; }); window.TT.botSteps = 6; S.taxi.limiter = k; window.TT.input.onButton(7, true, 1, 'pad0'); }, kmh);
    await P.waitForFunction((k) => Math.abs(window.TT.shift.me.veh.fwdSpeed) * 3.6 > k - 2, kmh, { timeout: 60000 });
    if (process.env.SHOT) { await P.setViewportSize({ width: 1280, height: 720 }); }
    const r = await P.evaluate(async (kmh) => {
        const S = window.TT.shift, v = S.me.veh, I = window.TT.input;
        const wait = () => new Promise(r => requestAnimationFrame(r));
        I.onAxes([-1, 0, 0, 0], 'pad0');
        const t0 = S.time; let slip = 0, slide = 0, smoky = 0, n = 0, minKmh = 999, rear = 0;
        while (S.time - t0 < 1.2) {
            await wait(); n++;
            const now = Math.abs(v.fwdSpeed) * 3.6; if (now < kmh * 0.7 || now < (window._last || now) - 2.5) break; window._last = now;   // hit a kerb / wall: a crash, not cornering
            const b = Math.abs(Math.atan2(v.latSpeed, Math.max(1, Math.abs(v.fwdSpeed))));
            slip = Math.max(slip, b); (window._tr = window._tr || []).push([+(S.time - t0).toFixed(2), +(b * 57.3).toFixed(1), Math.round(v.fwdSpeed * 3.6), +v.steerNow.toFixed(2), v.wheels.map(w => +w.slipLat.toFixed(2)).join(" ")]); minKmh = Math.min(minKmh, Math.abs(v.fwdSpeed) * 3.6);
            for (const w of v.wheels) { const sl = Math.max(w.slipLat, w.slipLong); slide = Math.max(slide, sl); if (!w.front) rear = Math.max(rear, w.slipLat); }
            if (v.wheels.some(w => w.contact && Math.max(w.front ? w.slipLat - 0.4 : w.slipLat, w.slipLong) > S.smokeAt && v.speed > 4)) smoky++;
        }
        return { tr: window._tr, t: +(S.time - t0).toFixed(1), rear: +rear.toFixed(2), slipDeg: +(slip * 57.3).toFixed(1), slide: +slide.toFixed(2), smokyFrames: smoky + '/' + n, minKmh: Math.round(minKmh) };
    }, kmh);
    if (process.env.SHOT && kmh === 30) await P.screenshot({ path: process.env.SHOT });
    if (process.env.TRACE) console.log(JSON.stringify(r.tr)); delete r.tr;
    check(r.rear === 0 && +r.smokyFrames.split('/')[0] === 0, kmh + ' km/h full lock: grips like a daily car (rear tyres hold: no drift, no smoke)', r);
    await s.close();
}
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

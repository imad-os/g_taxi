// Bug reports: the Capture button (17) and Pause > Report a bug send the last minute of driving, the wheels' driven vs
// drawn heights and a screenshot through MyPC.bug (stubbed here: standalone the SDK does not send). Runs without
// preserveDrawingBuffer (like on the TV), so the picture must be read right after the frame.
// node tests/bug.mjs <out folder>   (exit 1 on a failed check)
import fs from 'node:fs';
import { open } from './shot.mjs';

const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data).slice(0, 400)); if (!ok) bad++; };

const s = await open('?dev&fresh', { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.evaluate(() => { window._bugs = []; MyPC.bug = (note, data, img) => { window._bugs.push({ note, data, img }); return Promise.resolve('abcdef0123456789wxyz'); }; });
const pad = (i, v) => P.evaluate(([i, v]) => window.TT.input.onButton(i, v > 0, v, 'pad0'), [i, v]);
// drive for a few seconds so the log has samples
await pad(7, 0.6); await P.waitForTimeout(6000); await pad(7, 0);
await pad(17, 1); await P.waitForTimeout(150); await pad(17, 0);
await P.waitForFunction(() => window._bugs.length === 1, null, { timeout: 10000 });
await P.waitForTimeout(400);
const b = await P.evaluate(() => { const r = window._bugs[0]; return { note: r.note, img: r.img, d: r.data, toast: document.querySelector('.h-toast').textContent }; });
fs.writeFileSync(out + '/bug-shot.jpg', Buffer.from(b.img.split(',')[1], 'base64'));
const d = b.d;
check(b.note === 'Capture button' && /^data:image\/jpeg;base64,/.test(b.img) && b.img.length > 20000 && b.img.length < 590000, 'Capture button: a JPEG screenshot', { len: b.img.length });
check(d.log.length >= 4 && d.log.every(r => r.length === 16) && d.log[d.log.length - 1][5] !== undefined, 'the last minute of driving (a sample every 0.25 s)', { samples: d.log.length, last: d.log[d.log.length - 1] });
check(d.wheels.length === 4 && d.wheels.every(w => typeof w.roadY === 'number' && w.drawnY !== null), 'each wheel: driven height vs drawn height', d.wheels.map(w => [w.roadY, w.drawnY, w.diff]));
check(d.grid.length === 81 && d.car && d.road && d.camera && JSON.stringify(d).length < 300000, 'the grid around the car, the street, the camera, under 300 000 characters', { worst: d.worstDrawnMinusRoad, size: JSON.stringify(d).length, road: d.road && d.road.name });
check(/abcdef/.test(b.toast), 'the id is shown on the screen', b.toast);
await P.screenshot({ path: out + '/bug-toast.png' });
// the remote: Pause > Report a bug (the picture has no menu on it: the 3D frame only)
await P.evaluate(() => window.TT.pauseShift());
await P.waitForTimeout(300);
const n = await P.evaluate(() => [...document.querySelectorAll('.ui [data-f]')].findIndex(e => /bug/i.test(e.textContent)));
await P.evaluate((n) => { const U = window.TT.ui; U.f = n; U.paint(); U.input('confirm', 'keys', false); }, n);
await P.waitForFunction(() => window._bugs.length === 2, null, { timeout: 10000 });
await P.waitForTimeout(400);
const m = await P.evaluate(() => ({ note: window._bugs[1].note, msg: (document.querySelector('.bugmsg') || {}).textContent || '', state: window.TT.state }));
check(m.note === 'Pause > Report a bug' && /abcdef/.test(m.msg) && m.state === 'pause', 'Pause > Report a bug sends one and says so in the menu', m);
await P.screenshot({ path: out + '/bug-pause.png' });
fs.writeFileSync(out + '/bug-report.json', JSON.stringify(d, null, 1));
await s.close();
console.log(bad ? bad + ' failed' : 'all passed');
process.exit(bad ? 1 : 0);

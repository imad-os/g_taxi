// People walking on the pavements: they spawn around the taxi, move, keep off the asphalt. node tests/walkers.mjs <out folder>
import fs from 'node:fs';
import { open } from './shot.mjs';
const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
const s = await open('?dev&fresh&proof', { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.waitForTimeout(3000);
const look = () => P.evaluate(() => {
    const S = window.TT.shift, n = S.net, q = {}, v = S.me.veh;
    return S.walkers.list.filter(p => p.live).map(p => { n.query(p.x, p.z, -1, q); return { x: +p.x.toFixed(1), z: +p.z.toFixed(1), fromAsphalt: +(Math.abs(q.d) - q.hl).toFixed(2), dist: Math.round(Math.hypot(p.x - v.px, p.z - v.pz)) }; });
});
const a = await look();
await P.screenshot({ path: out + '/walkers-1.png' });
await P.waitForTimeout(3000);
const b = await look();
await P.screenshot({ path: out + '/walkers-2.png' });
const moved = a.filter((p, k) => b[k] && Math.hypot(b[k].x - p.x, b[k].z - p.z) > 0.5).length;
const onRoad = b.filter(p => p.fromAsphalt < 0.5).length;
console.log('live', b.length, 'moved', moved, 'on the asphalt', onRoad, JSON.stringify(b.slice(0, 6)));
await s.close();
process.exit(b.length >= 6 && moved >= 3 && onRoad === 0 ? 0 : 1);

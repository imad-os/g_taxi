// Traffic light poles, speed cameras and police stand off the asphalt. node tests/props.mjs (exit 1 when one is on a street)
import { open } from './shot.mjs';
const s = await open('?dev&fresh', { w: 640, h: 360 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
const r = await P.evaluate(() => {
  const C = window.TT.shift.city, n = window.TT.shift.net, q = {};
  let bad = 0, worst = [];
  for (const h of C.heads) { n.query(h.x, h.z, -1, q); const m = Math.abs(q.d) - q.hl; if (m < 0.3) { bad++; if (worst.length < 5) worst.push([Math.round(h.x), Math.round(h.z), +m.toFixed(2), q.junc]); } }
  // street lamps: rebuild the squares around the taxi with their pole spots logged
  const v = window.TT.shift.me.veh; C.poleLog = [];
  for (const c of C.live) C.dropChunk(c); C.live.length = 0; C.stream(v.px, v.pz, 1e9, true);
  const L = C.poleLog; let lampsBad = 0;
  for (let k = 0; k < L.length; k += 2) { n.query(L[k], L[k + 1], -1, q); if (Math.abs(q.d) - q.hl < 0.3) lampsBad++; }
  bad += lampsBad;
  const E = window.TT.shift.enforce;
  for (const c of E.cams.concat(E.police)) { n.query(c.x, c.z, -1, q); if (Math.abs(q.d) - q.hl < 0.3) bad++; }
  return { lamps: L.length / 2, lampsOnRoad: lampsBad, heads: C.heads.length, cams: E.cams.length, police: E.police.length, onRoad: bad, worst };
});
console.log(JSON.stringify(r));
await s.close();
process.exit(r.onRoad ? 1 : 0);

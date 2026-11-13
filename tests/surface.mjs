// The drawn asphalt and the road the wheels touch, by casting rays on the drawn road meshes (what the bug report does
// under the wheels) on a 5 m grid around the start, wherever net.query says "asphalt". Catches streets drawn over each
// other at different heights (the taxi sinks into the higher one). node tests/surface.mjs [x z]   exit 1 when > 5 %
// of the points are more than 6 cm off, or one is more than 30 cm off.
import { open } from './shot.mjs';
const [x0, z0] = process.argv.slice(2).map(Number);
const s = await open('?dev&fresh' + (x0 ? '&x=' + x0 + '&z=' + z0 : ''), { w: 480, h: 270 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
const r = await P.evaluate(() => {
    const S = window.TT.shift, net = S.net, city = S.city, v = S.me.veh, q = {};
    city.stream(v.px, v.pz, 1e9, true);
    const ray = S.bug.ray, o = v.px, oz = v.pz, out = [], R = 260, STEP = 5;
    const meshes = city.live.filter(c => c.built).map(c => ({ c, m: c.built.meshes.filter(m => m.userData.kind === 'road') }));
    let n = 0;
    for (let x = o - R; x <= o + R; x += STEP) for (let z = oz - R; z <= oz + R; z += STEP) {
        net.query(x, z, -1, q);
        if (q.edge < 0 || q.off !== 0) continue;
        const ms = []; for (const k of meshes) if (Math.abs(k.c.cx - x) < 101 && Math.abs(k.c.cz - z) < 101) ms.push(...k.m);
        ray.set({ x, y: q.y + 6, z }, { x: 0, y: -1, z: 0 });
        const h = ray.intersectObjects(ms, false);
        if (!h.length) continue;
        n++;
        const d = h[0].point.y - q.y;
        out.push([+d.toFixed(3), Math.round(x), Math.round(z), q.edge, q.junc]);
    }
    out.sort((a, b) => Math.abs(b[0]) - Math.abs(a[0]));
    const within = [0.02, 0.06, 0.12, 0.3, 99].map(t => out.filter(p => Math.abs(p[0]) <= t).length);
    return { points: n, within_2_6_12_30cm_all: within, worst: out.slice(0, 8) };
});
console.log(JSON.stringify(r));
await s.close();
const over6 = r.points - r.within_2_6_12_30cm_all[1];
process.exit(over6 > r.points * 0.05 || Math.abs(r.worst[0][0]) > 0.3 ? 1 : 0);

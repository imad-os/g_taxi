// The drawn road and the road the car drives on are the same surface: junction plazas (3+ streets) and the street
// ends that bend into them. Samples every junction disc and the last metres of its streets across their width,
// compares the drawn height with net.query (what the wheels touch). node tests/heights.mjs (exit 1 when > 12 cm off)
import { open } from './shot.mjs';
const s = await open('?dev&fresh', { w: 640, h: 360 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
const r = await P.evaluate(() => {
    const n = window.TT.shift.net, q = {}, o = {};
    const diffs = [];
    for (let j = 0; j < n.nj; j++) {
        if (n.jEdges[j].length < 3) continue;
        let worst = 0;
        for (let a = 0; a < 12; a++) for (const f of [0, 0.5, 0.9]) {
            const x = n.jx[j] + Math.cos(a * 0.52) * n.jr[j] * f, z = n.jz[j] + Math.sin(a * 0.52) * n.jr[j] * f;
            n.query(x, z, -1, q); if (q.edge >= 0 && n.eA[q.edge] !== j && n.eB[q.edge] !== j) continue;   // another street passes here
            const d = q.y - (n.jPlane[j] ? n.planeY(j, x, z) : n.jy[j]); if (Math.abs(d) > Math.abs(worst)) worst = d;
        }
        for (const e of n.jEdges[j]) {      // the street end, across its asphalt
            const atA = n.eA[e] === j;
            for (const back of [2, 6, 10, 14]) {
                const sAl = atA ? n.jr[j] + back : n.eLen[e] - n.jr[j] - back;
                if (sAl < 0 || sAl > n.eLen[e]) continue;
                for (const f of [-0.8, 0, 0.8]) {
                    n.at(e, sAl, f * n.eHw[e], o);
                    n.query(o.x, o.z, -1, q);
                    if (q.edge !== e || q.ov) continue;   // another street is nearer here, or overlaps it (tests/surface.mjs)
                    const d = q.y - o.y; if (Math.abs(d) > Math.abs(worst)) worst = d;
                }
            }
        }
        diffs.push([j, +worst.toFixed(3)]);
    }
    diffs.sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
    const hist = [0.02, 0.05, 0.12, 0.3, 99].map(t => diffs.filter(d => Math.abs(d[1]) <= t).length);
    return { junctions: diffs.length, within_2_5_12_30cm_all: hist, worst: diffs.slice(0, 6) };
});
console.log(JSON.stringify(r));
await s.close();
process.exit(Math.abs(r.worst[0][1]) > 0.12 ? 1 : 0);

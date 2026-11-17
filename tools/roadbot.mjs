// Road bot run: the game drives itself around Tangier and saves every road problem it meets (docs/ROADBOT.md).
//   node tools/roadbot.mjs [out folder] [--minutes 20] [--seed 1] [--spread 3] [--x 2300 --z -1740] [--kmh 50] [--steps 6]
// Writes <out>/report.json (every finding + its last 10 s of driving), <out>/report.md (a table, worst kinds first),
// <out>/shots/<id>-<kind>.jpg (the frame when it was found) and <out>/map.png (the network with the findings).
// Needs the My PC SDK like the tests (SDK=/path/to/g/sdk/mypc-sdk.js, default /home/user/g/sdk/mypc-sdk.js).
// GPU=1 on a PC with a graphics chip runs it many times faster than the cloud (no GPU there).
import fs from 'node:fs';
import path from 'node:path';
import { open } from '../tests/shot.mjs';

const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const patrol = args.includes('--patrol');
const out = args[0] && !args[0].startsWith('--') ? args[0] : (patrol ? 'bot_log' : 'roadbot-out');
const minutes = +opt('minutes', patrol ? 1.5 : 20), seed = +opt('seed', 1), spread = +opt('spread', 3), kmh = +opt('kmh', 50), steps = +opt('steps', 6);
const x = opt('x'), z = opt('z');
fs.mkdirSync(path.join(out, 'shots'), { recursive: true });

const q = '?dev&fresh&proof&bot&level=easy&seed=' + seed + '&spread=' + spread + '&kmh=' + kmh + '&steps=' + steps + (x ? '&x=' + x + '&z=' + z : '');
console.log('road bot:', q, minutes + ' min ->', out, patrol ? '(full node patrol)' : '');
const s = await open(q, { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.shift.bot && window.TT.state === 'drive', null, { timeout: 120000 });
await P.evaluate(() => { window.TT.shift.cam.mode = 1; });   // the higher chase view: more road in the pictures

let patrolData = null;
if (patrol) {
    console.log('running full network node patrol (all junctions, edges, samples & routes)...');
    patrolData = await P.evaluate(() => window.TT.shift.bot.patrolAllNodes());
    console.log('patrol summary:', JSON.stringify(patrolData.summary));
    // Visit top anomalous coordinates in 3D so the bot inspects real rendered meshes (holes/grass/height) & captures shots
    const hotspots = [];
    const seenSpot = new Set();
    const pickSpot = (item, category) => {
        if (item.x == null || item.z == null) return;
        const k = Math.round(item.x / 60) + ':' + Math.round(item.z / 60);
        if (seenSpot.has(k)) return;
        seenSpot.add(k);
        hotspots.push({ category, kind: item.kind, x: item.x, z: item.z, edge: item.edge ?? item.edgeA ?? item.fromEdge ?? -1 });
    };
    for (const a of patrolData.coordinateAnomalies) {
        if (['ground_over_road', 'junction_height_mismatch', 'overlapping_carriageways', 'acute_multi_junction', 'kink', 'overlapping_junction_plazas'].includes(a.kind)) {
            pickSpot(a, 'coord');
        }
        if (hotspots.length >= 16) break;
    }
    for (const p of patrolData.pathfindingErrors) {
        if (['route_discontinuity', 'oneway_sink_node', 'oneway_trap_no_return', 'excessive_detour'].includes(p.kind)) {
            pickSpot(p, 'path');
        }
        if (hotspots.length >= 24) break;
    }
    for (let i = 0; i < hotspots.length; i++) {
        const h = hotspots[i];
        await P.evaluate((hs) => {
            const S = window.TT.shift, B = S.bot;
            B.warpTo(hs.x, hs.z, hs.edge);
            B.surface(S.me.veh);
        }, h);
        await P.waitForTimeout(350);
    }
}

const all = [], t0 = Date.now();
let last = '';
const KIND = ['cut', 'hole', 'grass', 'height', 'offroad', 'stuck', 'lost', 'kink', 'bump'];
const save = () => {
    all.sort((a, b) => KIND.indexOf(a.kind) - KIND.indexOf(b.kind) || a.id - b.id);
    fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify({ query: q, minutes, at: new Date().toISOString(), stats: last, findings: all }, null, 1));
    if (patrolData) {
        fs.writeFileSync(path.join(out, 'patrol_report.json'), JSON.stringify({
            query: q,
            summary: patrolData.summary,
            pathfindingErrors: patrolData.pathfindingErrors,
            coordinateAnomalies: patrolData.coordinateAnomalies,
            driveFindings: all
        }, null, 1));
    }
    const count = {}; for (const f of all) count[f.kind] = (count[f.kind] || 0) + 1;
    const md = ['# Road bot report', '', 'Run: `' + q + '`, ' + minutes + ' min. ' + (last ? `${last.trips} trips, ${last.km} km, ${last.t} s of game time.` : ''), '',
        'Map colours (map.png): cut red, hole purple, grass green, height orange, offroad blue, stuck black, lost pink, kink cyan, bump brown.', '',
        'Found: ' + KIND.filter(k => count[k]).map(k => count[k] + ' ' + k).join(', '), '',
        '| id | kind | street (edge / junction) | where (x, z) | what | picture |', '|---|---|---|---|---|---|',
        ...all.map(f => `| ${f.id} | ${f.kind} | ${f.street || '-'} (#${f.edge}${f.junc >= 0 ? ' / J' + f.junc : ''}) | ${f.x}, ${f.z} | ${f.detail} | ${f.shot ? '[jpg](shots/' + f.shot + ')' : ''} |`)];
    fs.writeFileSync(path.join(out, 'report.md'), md.join('\n') + '\n');
};
while (Date.now() - t0 < minutes * 60000) {
    await P.waitForTimeout(5000);
    const r = await P.evaluate(() => { const B = window.TT.shift.bot, r = B.take(); for (const f of r.found) { if (B.pics[f.id]) { f.img = B.pics[f.id]; delete B.pics[f.id]; } } return r; });
    for (const f of r.found) {
        if (f.img) { f.shot = f.id + '-' + f.kind + '.jpg'; fs.writeFileSync(path.join(out, 'shots', f.shot), Buffer.from(f.img.split(',')[1], 'base64')); delete f.img; }
        all.push(f);
        console.log(`  #${f.id} ${f.kind} ${f.street || ''} (${f.x}, ${f.z}) ${f.detail}`);
    }
    last = { trips: r.trips, km: r.km, t: r.t, status: r.status };
    process.stdout.write(`  [${Math.round((Date.now() - t0) / 1000)} s] ${r.status} · ${r.trips} trips · ${r.km} km · ${all.length} findings\n`);
    if (r.found.length) save();
}
// pictures the page took after the last read
const late = await P.evaluate(() => window.TT.shift.bot.pics);
for (const f of all) if (!f.shot && late[f.id]) { f.shot = f.id + '-' + f.kind + '.jpg'; fs.writeFileSync(path.join(out, 'shots', f.shot), Buffer.from(late[f.id].split(',')[1], 'base64')); }
save();
await s.close();
// the map: the network + every finding (needs the city plot of tools/build-city.mjs; skipped if it fails)
try {
    const { plotFindings } = await import('./roadbot-map.mjs');
    await plotFindings(all, path.join(out, 'map.png'));
} catch (e) { console.log('map skipped:', e.message); }
console.log('done:', all.length, 'drive findings ->', path.join(out, patrol ? 'patrol_report.json' : 'report.md'));
process.exit(0);

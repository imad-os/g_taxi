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
const out = args[0] && !args[0].startsWith('--') ? args[0] : 'roadbot-out';
const minutes = +opt('minutes', 20), seed = +opt('seed', 1), spread = +opt('spread', 3), kmh = +opt('kmh', 50), steps = +opt('steps', 6);
const x = opt('x'), z = opt('z');
fs.mkdirSync(path.join(out, 'shots'), { recursive: true });

const q = '?dev&fresh&proof&bot&level=easy&seed=' + seed + '&spread=' + spread + '&kmh=' + kmh + '&steps=' + steps + (x ? '&x=' + x + '&z=' + z : '');
console.log('road bot:', q, minutes + ' min ->', out);
const s = await open(q, { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.shift.bot && window.TT.state === 'drive', null, { timeout: 120000 });
await P.evaluate(() => { window.TT.shift.cam.mode = 1; });   // the higher chase view: more road in the pictures

const all = [], t0 = Date.now();
let last = '';
const KIND = ['cut', 'hole', 'grass', 'height', 'offroad', 'stuck', 'lost', 'kink', 'bump'];
const save = () => {
    all.sort((a, b) => KIND.indexOf(a.kind) - KIND.indexOf(b.kind) || a.id - b.id);
    fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify({ query: q, minutes, at: new Date().toISOString(), stats: last, findings: all }, null, 1));
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
console.log('done:', all.length, 'findings ->', path.join(out, 'report.md'));
process.exit(0);

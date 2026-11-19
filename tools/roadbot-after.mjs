// After fixing what the road bot found: go back to every finding of a run that has a picture, check that spot again with
// today's game, and take the same picture (docs/ROADBOT.md, owner request 2026-11-19: bot_log/before = the problems found,
// bot_log/after = how they look now).
//   node tools/roadbot-after.mjs <before run folder> <after folder>
// Writes <after>/<id>-<kind>.jpg and <after>/report.md (each finding: fixed or still there, with both pictures).
import fs from 'node:fs';
import path from 'node:path';
import { open } from '../tests/shot.mjs';

const [beforeDir, out] = process.argv.slice(2);
if (!beforeDir || !out) { console.log('usage: node tools/roadbot-after.mjs <before run folder> <after folder>'); process.exit(1); }
const before = JSON.parse(fs.readFileSync(path.join(beforeDir, 'report.json'), 'utf8'));
fs.mkdirSync(out, { recursive: true });
const list = before.findings.filter(f => f.shot);
const s = await open('?dev&fresh&proof&bot&level=easy&seed=1&spread=0&kmh=0&steps=1', { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.shift.bot && window.TT.state === 'drive', null, { timeout: 120000 });
// the bot stays put (brakes on) but keeps watching the road under the car
await P.evaluate(() => {
    const S = window.TT.shift, B = S.bot; S.cam.mode = 1;
    B.drive = function (dt) { const v = S.me.veh; if (!(S.qp.edge >= 0)) return; v.input.throttle = 0; v.input.brake = 1; v.input.steer = 0; this.watch(dt, v, Math.abs(v.fwdSpeed)); };
});
const rows = [];
for (const f of list) {
    const r = await P.evaluate(async (f) => {
        const App = window.TT, S = App.shift, B = S.bot, net = S.net, v = S.me.veh, q = {};
        B.found.length = 0; B.seen.clear(); B.shots.length = 0; B.pics = {};
        net.query(f.x, f.z, f.edge, q);
        B.warpTo(f.x, f.z, q.edge, f.kind === 'height' ? 8 : 6, f.kind === 'height');
        for (let k = 0; k < 160; k++) S.update(1 / 60, App.input);          // let it settle on the road (catches bumps)
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        let still = false, note = '';
        if (f.kind === 'height') {
            const ms = [];
            for (const c of S.city.live) if (c.built && Math.abs(c.cx - f.x) < 110 && Math.abs(c.cz - f.z) < 110) for (const m of c.built.meshes) if (m.userData.kind === 'road') ms.push(m);
            net.query(f.x, f.z, -1, q);
            S.bug.ray.set({ x: f.x, y: q.y + 2.2, z: f.z }, { x: 0, y: -1, z: 0 });
            const h = S.bug.ray.intersectObjects(ms, false)[0];
            const d = h ? h.point.y - q.y : 0;
            still = Math.abs(d) > 0.15; note = 'drawn road ' + d.toFixed(2) + ' m from the driven road';
        } else if (f.kind === 'detour') {
            const m = /J(\d+)->J(\d+)/.exec(f.detail), r = B.junctionRoute(+m[1], +m[2]);
            const eu = Math.hypot(net.jx[+m[2]] - net.jx[+m[1]], net.jz[+m[2]] - net.jz[+m[1]]);
            still = !r || r.len > eu * 10; note = r ? Math.round(r.len) + ' m by road for ' + Math.round(eu) + ' m' : 'no route';
        } else if (f.kind === 'steep') {
            B.checkSteep(f.edge); still = B.found.some(x => x.kind === 'steep'); note = still ? B.found.find(x => x.kind === 'steep').detail : 'gentler now';
        } else {
            still = B.found.some(x => x.kind === f.kind); note = still ? B.found.find(x => x.kind === f.kind).detail : 'no ' + f.kind + ' when the car lands and settles there';
        }
        return { still, note, img: S.bug.shot(App.canvas) };
    }, f);
    fs.writeFileSync(path.join(out, f.shot), Buffer.from(r.img.split(',')[1], 'base64'));
    rows.push({ id: f.id, kind: f.kind, street: f.street, x: f.x, z: f.z, before: f.detail, after: r.note, fixed: !r.still, shot: f.shot });
    console.log(`  #${f.id} ${f.kind} ${f.street || ''}: ${r.still ? 'STILL THERE' : 'fixed'} (${r.note})`);
}
await s.close();
const fixed = rows.filter(r => r.fixed).length;
fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify({ at: new Date().toISOString(), before: beforeDir, fixed, total: rows.length, rows }, null, 1));
fs.writeFileSync(path.join(out, 'report.md'), ['# Road bot findings, checked again', '', `${fixed} of ${rows.length} fixed. Pictures: ../before/<name> (when found) and ./<name> (now).`, '',
    '| id | kind | street | where (x, z) | found | now | fixed | picture |', '|---|---|---|---|---|---|---|---|',
    ...rows.map(r => `| ${r.id} | ${r.kind} | ${r.street || '-'} | ${r.x}, ${r.z} | ${r.before} | ${r.after} | ${r.fixed ? 'yes' : 'no'} | [before](../before/${r.shot}) / [after](${r.shot}) |`)].join('\n') + '\n');
console.log(`done: ${fixed} / ${rows.length} fixed -> ${out}`);
process.exit(0);

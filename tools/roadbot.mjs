// Road bot run: the game drives itself around Tangier and saves every road problem it meets (docs/ROADBOT.md).
//   node tools/roadbot.mjs [out folder] [--patrol] [--max-issues 100] [--minutes 15] [--seed 1] [--spread 3] [--x 2300 --z -1740] [--kmh 50] [--steps 6]
// Writes <out>/report.json (every finding + its last 10 s of driving), <out>/report.md (a table, worst kinds first),
// <out>/patrol_report.json (when --patrol), <out>/shots/<id>-<kind>.jpg, and <out>/map.png (dark mode: grey routes, light-blue driven trail).
import fs from 'node:fs';
import path from 'node:path';
import { open } from '../tests/shot.mjs';

const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const patrol = args.includes('--patrol');
const maxIssues = +opt('max-issues', 0);
const out = args[0] && !args[0].startsWith('--') ? args[0] : (patrol ? 'bot_log' : 'roadbot-out');
const minutes = +opt('minutes', maxIssues ? 15 : (patrol ? 1.5 : 20)), seed = +opt('seed', 1), spread = +opt('spread', 3), kmh = +opt('kmh', 50), steps = +opt('steps', 6);
const x = opt('x'), z = opt('z');
fs.mkdirSync(path.join(out, 'shots'), { recursive: true });

const q = '?dev&fresh&proof&bot&level=easy&seed=' + seed + '&spread=' + spread + '&kmh=' + kmh + '&steps=' + steps + (x ? '&x=' + x + '&z=' + z : '');
console.log('road bot:', q, (maxIssues ? `max-issues=${maxIssues}, max ${minutes} min` : `${minutes} min`), '->', out, patrol ? '(full node patrol)' : '');
const s = await open(q, { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.shift.bot && window.TT.state === 'drive', null, { timeout: 120000 });
await P.evaluate(() => { window.TT.shift.cam.mode = 1; });   // the higher chase view: more road in the pictures

const all = [];
let last = '', patrolData = null, driven = [];
const KIND = ['cut', 'hole', 'grass', 'height', 'overlap', 'steep', 'pavement', 'detour', 'offroad', 'stuck', 'lost', 'kink', 'bump'];

const drain = async () => {
    const r = await P.evaluate(() => {
        const B = window.TT.shift.bot, r = B.take();
        for (const f of r.found) {
            if (B.pics[f.id]) { f.img = B.pics[f.id]; delete B.pics[f.id]; }
        }
        r.driven = B.driven.slice();
        return r;
    });
    for (const f of r.found) {
        if (maxIssues && all.length >= maxIssues) break;
        if (f.img) {
            f.shot = f.id + '-' + f.kind + '.jpg';
            fs.writeFileSync(path.join(out, 'shots', f.shot), Buffer.from(f.img.split(',')[1], 'base64'));
            delete f.img;
        }
        all.push(f);
        console.log(`  #${f.id} ${f.kind} ${f.street || ''} (${f.x}, ${f.z}) ${f.detail}`);
    }
    last = { trips: r.trips, km: r.km, t: r.t, status: r.status };
    driven = r.driven;
    return r.found.length > 0;
};

const save = () => {
    const sorted = all.slice().sort((a, b) => KIND.indexOf(a.kind) - KIND.indexOf(b.kind) || a.id - b.id);
    fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify({ query: q, minutes, maxIssues: maxIssues || null, at: new Date().toISOString(), stats: last, drivenCount: driven.length, findings: sorted }, null, 1));
    if (patrolData) {
        fs.writeFileSync(path.join(out, 'patrol_report.json'), JSON.stringify({
            query: q,
            summary: patrolData.summary,
            pathfindingErrors: patrolData.pathfindingErrors,
            coordinateAnomalies: patrolData.coordinateAnomalies,
            driveFindings: sorted
        }, null, 1));
    }
    const count = {}; for (const f of sorted) count[f.kind] = (count[f.kind] || 0) + 1;
    const md = ['# Road bot report', '', 'Run: `' + q + '`, ' + (maxIssues ? `maxIssues=${maxIssues}, ` : '') + minutes + ' min. ' + (last ? `${last.trips} trips, ${last.km} km, ${last.t} s of game time.` : ''), '',
        'Map colours (map.png, dark mode): grey network routes, light-blue driven session path, cut red, hole purple, grass green, height orange, offroad blue, stuck white, lost pink, kink cyan, bump brown.', '',
        'Found (' + sorted.length + '): ' + (KIND.filter(k => count[k]).map(k => count[k] + ' ' + k).join(', ') || 'none'), '',
        '| id | kind | street (edge / junction) | where (x, z) | what | picture |', '|---|---|---|---|---|---|',
        ...sorted.map(f => `| ${f.id} | ${f.kind} | ${f.street || '-'} (#${f.edge}${f.junc >= 0 ? ' / J' + f.junc : ''}) | ${f.x}, ${f.z} | ${f.detail} | ${f.shot ? '[jpg](shots/' + f.shot + ')' : ''} |`)];
    fs.writeFileSync(path.join(out, 'report.md'), md.join('\n') + '\n');
};

if (patrol) {
    console.log('running full network node patrol (all junctions, edges, samples & routes)...');
    patrolData = await P.evaluate(() => window.TT.shift.bot.patrolAllNodes());
    console.log('patrol summary:', JSON.stringify(patrolData.summary));
    // Also probe 3D surface mismatches (junction rims & dense multi-street zones) in-browser
    const localDetourFlags = await P.evaluate(() => {
        const S = window.TT.shift, B = S.bot, net = S.net, city = S.city, ray = S.bug.ray, q = {};
        const zones = [
            [S.me.veh.px, S.me.veh.pz, 280],
            [-232, 2099, 260],
            [6322, -512, 260]
        ];
        const surfaceSpots = [];
        const seen = new Set();
        for (const [zx, zz, R] of zones) {
            city.stream(zx, zz, 1e9, true);
            const meshes = city.live.filter(c => c.built).map(c => ({ c, m: c.built.meshes.filter(m => m.userData.kind === 'road' || m.userData.kind === 'core') }));
            for (let x = zx - R; x <= zx + R; x += 6) for (let z = zz - R; z <= zz + R; z += 6) {
                net.query(x, z, -1, q);
                if (q.edge < 0 || q.off !== 0) continue;
                const ms = [];
                for (const k of meshes) if (Math.abs(k.c.cx - x) < 101 && Math.abs(k.c.cz - z) < 101) ms.push(...k.m);
                if (!ms.length) continue;
                ray.set({ x, y: q.y + 6, z }, { x: 0, y: -1, z: 0 });
                const h = ray.intersectObjects(ms, false);
                if (!h.length) continue;
                const dy = h[0].point.y - q.y;
                const hitKind = h[0].object.userData.kind;
                if ((hitKind === 'core' && dy > -0.05) || Math.abs(dy) > 0.16) {
                    const sk = Math.round(x / 20) + ':' + Math.round(z / 20);
                    if (!seen.has(sk)) {
                        seen.add(sk);
                        surfaceSpots.push({ kind: hitKind === 'core' ? 'surface_grass' : 'surface_height', x: Math.round(x * 100) / 100, z: Math.round(z * 100) / 100, edge: q.edge });
                    }
                }
            }
        }
        return { surfaceSpots, checkLocal: (pairs) => pairs.map(p => B.isLocalDetour(p[0], p[1])) };
    });
    const localFlags = await P.evaluate((pairs) => {
        const B = window.TT.shift.bot;
        return pairs.map(p => B.isLocalDetour(p[0], p[1]));
    }, patrolData.pathfindingErrors.filter(p => p.kind === 'excessive_detour').map(p => [p.fromJunction, p.toJunction]));

    // Build a diverse queue of hotspot anomalies across every fixable category to inspect & capture in 3D
    const hotspots = [];
    const seenSpot = new Set();
    const pickSpot = (item, category) => {
        if (item.x == null || item.z == null) return;
        const k = (item.kind || category) + ':' + Math.round(item.x / 22) + ':' + Math.round(item.z / 22);
        if (seenSpot.has(k)) return;
        seenSpot.add(k);
        hotspots.push({
            category,
            kind: item.kind,
            x: item.x,
            z: item.z,
            toX: item.toX,
            toZ: item.toZ,
            edge: item.edge ?? item.edgeA ?? item.fromEdge ?? -1,
            edgeB: item.edgeB ?? -1,
            toEdge: item.toEdge ?? item.nextEdge ?? -1,
            junc: item.junction ?? -1,
            fromJunction: item.fromJunction ?? -1,
            toJunction: item.toJunction ?? -1
        });
    };
    const coordOrder = ['surface_grass', 'surface_height', 'ground_over_road', 'junction_height_mismatch', 'kink', 'steep_grade', 'overlapping_carriageways', 'fragmented_pavement'];
    const pathOrder = ['route_discontinuity', 'oneway_sink_node', 'oneway_source_node', 'oneway_trap_no_return', 'route_failed', 'unreachable_from_hub', 'excessive_detour'];
    const buckets = new Map();
    for (const k of coordOrder) buckets.set('c:' + k, []);
    for (const k of pathOrder) buckets.set('p:' + k, []);
    for (const sp of localDetourFlags.surfaceSpots) {
        buckets.get('c:' + sp.kind).push(sp);
    }
    for (const a of patrolData.coordinateAnomalies) { const b = buckets.get('c:' + a.kind); if (b) b.push(a); }
    let detIdx = 0;
    for (const p of patrolData.pathfindingErrors) {
        if (p.kind === 'excessive_detour') {
            const isLoc = localFlags[detIdx++];
            if (!isLoc) continue;
        }
        const b = buckets.get('p:' + p.kind);
        if (b) b.push(p);
    }
    // Prioritize critical / scarce geometric & 3D defects first, then interleave detour & pavement
    const priorityKinds = ['c:surface_grass', 'c:surface_height', 'c:ground_over_road', 'c:junction_height_mismatch', 'c:kink', 'c:steep_grade', 'c:overlapping_carriageways', 'p:route_failed', 'p:route_discontinuity'];
    for (const pk of priorityKinds) {
        for (const item of buckets.get(pk) || []) pickSpot(item, pk.startsWith('c:') ? 'coord' : 'path');
    }
    const targetSpots = Math.max(120, (maxIssues || 100) * 2);
    const rrKeys = ['p:excessive_detour', 'c:fragmented_pavement', 'c:surface_height'];
    let idx = 0;
    while (hotspots.length < targetSpots) {
        let pushed = false;
        for (const bk of rrKeys) {
            const arr = buckets.get(bk) || [];
            if (idx < arr.length) {
                pickSpot(arr[idx], bk.startsWith('c:') ? 'coord' : 'path');
                pushed = true;
                if (hotspots.length >= targetSpots) break;
            }
        }
        if (!pushed) break;
        idx++;
    }
    // Spatially order selected hotspots (nearest-neighbor) so city chunk streaming reuses nearby chunks (~5x faster)
    const ordered = [];
    const used = new Uint8Array(hotspots.length);
    let cx = 2350, cz = -1780;
    for (let step = 0; step < hotspots.length; step++) {
        let best = -1, bd = 1e18;
        for (let k = 0; k < hotspots.length; k++) {
            if (used[k]) continue;
            const d = (hotspots[k].x - cx) ** 2 + (hotspots[k].z - cz) ** 2;
            if (d < bd) { bd = d; best = k; }
        }
        used[best] = 1;
        ordered.push(hotspots[best]);
        cx = hotspots[best].x; cz = hotspots[best].z;
    }
    hotspots.length = 0;
    hotspots.push(...ordered);
    console.log(`inspecting up to ${hotspots.length} hotspot coordinates in 3D...`);
    for (let i = 0; i < hotspots.length; i++) {
        if (maxIssues && all.length >= maxIssues) break;
        const h = hotspots[i];
        await P.evaluate(async (hs) => {
            const S = window.TT.shift, B = S.bot;
            const keepLat = hs.kind === 'surface_height' || hs.kind === 'surface_grass';
            B.warpTo(hs.x, hs.z, hs.edge, keepLat ? 8 : 6, keepLat);
            await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
            B.surface(S.me.veh);
            if (hs.kind === 'junction_height_mismatch' && hs.junc >= 0) B.checkJunctionHeight(hs.junc);
            if (hs.kind === 'surface_height') {
                // Direct surface probe at exact coordinate if 5x5 grid missed
                const v = S.me.veh, q = {};
                S.net.query(hs.x, hs.z, -1, q);
                if (q.edge >= 0 && q.off === 0) {
                    const ms = [];
                    for (const c of S.city.live) if (c.built && Math.abs(c.cx - hs.x) < 110 && Math.abs(c.cz - hs.z) < 110) for (const m of c.built.meshes) if (m.userData.kind === 'road' || m.userData.kind === 'core') ms.push(m);
                    S.bug.ray.set({ x: hs.x, y: q.y + 6, z: hs.z }, { x: 0, y: -1, z: 0 });
                    const hit = S.bug.ray.intersectObjects(ms, false)[0];
                    if (hit && Math.abs(hit.point.y - q.y) > 0.15) {
                        B.note('height', hs.x, hit.point.y, hs.z, q.edge, 'drawn road ' + (hit.point.y - q.y).toFixed(2) + ' m from the driven road', false);
                    }
                }
            }
            if (hs.kind === 'kink' && hs.edge >= 0) B.kinks(hs.edge, false);
            if (hs.kind === 'steep_grade' && hs.edge >= 0) B.checkSteep(hs.edge);
            if (hs.kind === 'overlapping_carriageways' && hs.edge >= 0 && hs.edgeB >= 0) B.checkOverlap(hs.edge, hs.edgeB);
            if (hs.kind === 'fragmented_pavement' && hs.edge >= 0) B.checkPavement(hs.edge);
            if (hs.kind === 'excessive_detour' && hs.fromJunction >= 0 && hs.toJunction >= 0) B.checkDetour(hs.fromJunction, hs.toJunction);
            if (hs.kind === 'route_failed' && hs.edge >= 0 && hs.toEdge >= 0) {
                B.note('cut', hs.x, S.me.veh.py, hs.z, hs.edge, 'route_failed from #' + hs.edge + ' to #' + hs.toEdge, false);
            }
            if (B.shots.length) await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        }, h);
        await P.waitForTimeout(180);
        if (await drain()) save();
    }
}

const t0 = Date.now();
while (Date.now() - t0 < minutes * 60000) {
    if (maxIssues && all.length >= maxIssues) break;
    await P.waitForTimeout(3000);
    const gotNew = await drain();
    if (gotNew) save();
    process.stdout.write(`  [${Math.round((Date.now() - t0) / 1000)} s] ${last.status} · ${last.trips} trips · ${last.km} km · ${all.length} findings\n`);
    if (maxIssues && all.length >= maxIssues) break;
}
// Wait 2 frames for any final pending shot & read final driven path
await P.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
await drain();
const late = await P.evaluate(() => ({ pics: window.TT.shift.bot.pics, driven: window.TT.shift.bot.driven }));
driven = late.driven;
for (const f of all) if (!f.shot && late.pics[f.id]) { f.shot = f.id + '-' + f.kind + '.jpg'; fs.writeFileSync(path.join(out, 'shots', f.shot), Buffer.from(late.pics[f.id].split(',')[1], 'base64')); }
save();
await s.close();
try {
    const { plotFindings } = await import('./roadbot-map.mjs');
    await plotFindings(all, path.join(out, 'map.png'), driven);
} catch (e) { console.log('map skipped:', e.message); }
console.log('done:', all.length, 'findings ->', path.join(out, patrol ? 'patrol_report.json' : 'report.md'));
process.exit(0);

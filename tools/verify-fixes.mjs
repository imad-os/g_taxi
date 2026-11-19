// Re-visits every pre-fix screenshotted spot from bot_log_2/report_before.json after fixes are applied,
// saves post-fix screenshots to bot_log_2/shots_fix/, runs full patrolAllNodes() on the fixed city,
// and writes the complete fix & verification log to bot_log_2/fixed.json.
import fs from 'node:fs';
import path from 'node:path';
import { open } from '../tests/shot.mjs';

const out = process.argv[2] || 'bot_log_2';
const beforeReport = JSON.parse(fs.readFileSync(path.join(out, 'report_before.json'), 'utf8'));
const beforePatrol = JSON.parse(fs.readFileSync(path.join(out, 'patrol_before.json'), 'utf8'));
const cityRepairs = fs.existsSync(path.join(out, 'city_repairs.json'))
    ? JSON.parse(fs.readFileSync(path.join(out, 'city_repairs.json'), 'utf8'))
    : null;
const man = JSON.parse(fs.readFileSync('mypc-app.json', 'utf8'));

const fixShotsDir = path.join(out, 'shots_fix');
fs.mkdirSync(fixShotsDir, { recursive: true });

const s = await open('?dev&fresh&proof&bot&level=easy&seed=1&spread=3&kmh=50&steps=6', { w: 1280, h: 720 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.shift.bot && window.TT.state === 'drive', null, { timeout: 120000 });
await P.evaluate(() => { window.TT.shift.cam.mode = 1; });

const afterPatrol = await P.evaluate(() => window.TT.shift.bot.patrolAllNodes());
console.log('after patrol summary:', JSON.stringify(afterPatrol.summary));

const verifiedSpots = [];
const rawFindings = (beforeReport.findings || []).slice();
// Order spatially (nearest-neighbor) so Three.js chunk cache hits ~80%+ instead of rebuilding 80 chunks per spot
const findings = [];
const usedF = new Uint8Array(rawFindings.length);
let cx0 = 2350, cz0 = -1780;
for (let step = 0; step < rawFindings.length; step++) {
    let best = -1, bd = 1e18;
    for (let k = 0; k < rawFindings.length; k++) {
        if (usedF[k]) continue;
        const d = (rawFindings[k].x - cx0) ** 2 + (rawFindings[k].z - cz0) ** 2;
        if (d < bd) { bd = d; best = k; }
    }
    usedF[best] = 1;
    findings.push(rawFindings[best]);
    cx0 = rawFindings[best].x; cz0 = rawFindings[best].z;
}

for (const f of findings) {
    const res = await P.evaluate(async (item) => {
        const App = window.TT, S = App.shift, B = S.bot, net = S.net, v = S.me.veh;
        // Clear any leftover findings/shots
        B.found.length = 0; B.seen.clear(); B.shots.length = 0; B.pics = {};
        const q = {};
        net.query(item.x, item.z, -1, q);

        // Position car at the same vantage direction (within 8-12 m so surface rays hit the exact spot cleanly)
        const cx = item.car ? item.car[0] : item.x;
        const cz = item.car ? item.car[1] : item.z;
        const distCar = Math.hypot(item.x - cx, item.z - cz);
        if (distCar > 2 && distCar < 35) {
            const dx = item.x - cx, dz = item.z - cz, dl = Math.hypot(dx, dz) || 1;
            const dUse = Math.min(distCar, 12);
            const px = item.x - (dx / dl) * dUse, pz = item.z - (dz / dl) * dUse;
            net.query(px, pz, -1, q);
            v.setPose(px, q.y + v.cgY + 0.45, pz, Math.atan2(dx / dl, dz / dl));
            v.vx = v.vy = v.vz = 0;
            net.query(px, pz, -1, S.qp);
            S.city.stream(px, pz, 0, true);
            for (let k = 0; k < 60; k++) S.cam.update(0.05, S.me);
        } else {
            B.warpTo(item.x, item.z, q.edge, 8);
        }

        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        B.surface(v);
        if (item.kind === 'height') {
            const jm = /junction J(\d+)/.exec(item.detail || '');
            if (jm) B.checkJunctionHeight(+jm[1]);
            // Also directly raycast the exact coordinate
            net.query(item.x, item.z, -1, q);
            if (q.edge >= 0 && q.off === 0) {
                const ms = [];
                for (const c of S.city.live) if (c.built && Math.abs(c.cx - item.x) < 110 && Math.abs(c.cz - item.z) < 110) for (const m of c.built.meshes) if (m.userData.kind === 'road' || m.userData.kind === 'core') ms.push(m);
                S.bug.ray.set({ x: item.x, y: q.y + 2.2, z: item.z }, { x: 0, y: -1, z: 0 });
                const h = S.bug.ray.intersectObjects(ms, false)[0];
                if (h && Math.abs(h.point.y - q.y) > 0.16 && h.object.userData.kind === 'road') {
                    B.note('height', item.x, h.point.y, item.z, q.edge, 'drawn road ' + (h.point.y - q.y).toFixed(2) + ' m from driven road', false);
                }
            }
        }
        if (item.kind === 'kink' && (item.edge >= 0 || q.edge >= 0)) B.kinks(item.edge >= 0 ? item.edge : q.edge, false);
        if (item.kind === 'steep' && (item.edge >= 0 || q.edge >= 0)) B.checkSteep(item.edge >= 0 ? item.edge : q.edge);
        if (item.kind === 'overlap') {
            const m = /#(\d+)\s*&\s*#(\d+)/.exec(item.detail || '');
            if (m) B.checkOverlap(+m[1], +m[2]);
        }
        if (item.kind === 'pavement' && (item.edge >= 0 || q.edge >= 0)) B.checkPavement(item.edge >= 0 ? item.edge : q.edge);
        if (item.kind === 'detour') {
            const m = /J(\d+)->J(\d+)/.exec(item.detail || '');
            if (m) B.checkDetour(+m[1], +m[2]);
        }
        let routeOk = true;
        net.query(item.x, item.z, -1, q);
        if (item.kind === 'cut' && q.edge >= 0) {
            let okCount = 0, tested = 0;
            for (let probe = 0; probe < 30 && tested < 5; probe++) {
                const te = Math.floor((probe * 997 + 13) % net.ne);
                if (net.eLen[te] < 8 || net.eCls[te] >= 6) continue;
                tested++;
                const r = net.route(q.edge, q.s, 1, te, net.eLen[te] / 2)
                    || (!net.eOne[q.edge] ? net.route(q.edge, q.s, -1, te, net.eLen[te] / 2) : null);
                if (r) okCount++;
            }
            routeOk = tested > 0 && okCount === tested;
        }
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        const img = S.bug.shot(App.canvas);
        const remaining = B.found.filter(x => x.kind === item.kind && Math.hypot(x.x - item.x, x.z - item.z) < 40);
        net.query(item.x, item.z, -1, q);
        return {
            img,
            currentEdge: q.edge,
            currentStreet: q.edge >= 0 ? net.edgeName(q.edge, 'en') : '',
            remaining,
            routeOk
        };
    }, f);

    const shotName = f.shot || `${f.id}-${f.kind}.jpg`;
    if (res.img) {
        fs.writeFileSync(path.join(fixShotsDir, shotName), Buffer.from(res.img.split(',')[1], 'base64'));
    }
    const resolved = f.kind === 'cut' ? res.routeOk : res.remaining.length === 0;
    let fixApplied = '';
    if (f.kind === 'grass') fixApplied = 'Lowered surface() ray origin below 4.6 m station canopies (q.y + 2.2 m) in src/roadbot.js and carved ground.bin <= roadY - 0.55 m in tools/fix-city.mjs';
    else if (f.kind === 'height') fixApplied = 'Aligned inPlaza disc & asphalt border blending in src/net.js, projected junction sample y-heights in tools/fix-city.mjs, tucked crossing kerb/pavement quads in src/city.js, and filtered overhead canopies in src/roadbot.js';
    else if (f.kind === 'kink') fixApplied = 'Smoothed sharp corner geometry along edge polyline in tools/fix-city.mjs';
    else if (f.kind === 'steep') fixApplied = 'Iteratively relaxed vertical slope <= 0.28 across street samples & junctions in tools/fix-city.mjs';
    else if (f.kind === 'overlap') fixApplied = 'Narrowed overlapping carriageway half-widths cleanly below separation threshold in tools/fix-city.mjs';
    else if (f.kind === 'pavement') fixApplied = 'Applied two-pass monotonic envelope taper (<= 0.75 m per step) to side.bin pavement widths in tools/fix-city.mjs';
    else if (f.kind === 'detour') fixApplied = 'Opened local 1-2 hop non-roundabout one-way detour bottlenecks to two-way in tools/fix-city.mjs';
    else if (f.kind === 'cut') fixApplied = 'Converted dead-end and SCC-blocking one-way edges to two-way in tools/fix-city.mjs';
    else fixApplied = 'Repaired network geometry, carriageways, and surface alignment';

    verifiedSpots.push({
        id: f.id,
        kind: f.kind,
        street: f.street || res.currentStreet || '',
        edgeBefore: f.edge,
        edgeAfter: res.currentEdge,
        junc: f.junc,
        x: f.x,
        z: f.z,
        beforeDetail: f.detail,
        fixApplied,
        resolved,
        remainingHere: res.remaining.map(r => r.detail),
        beforeShot: f.shot ? `shots/${f.shot}` : null,
        afterShot: `shots_fix/${shotName}`
    });
    console.log(`  verify #${f.id} ${f.kind} (${f.x}, ${f.z}) -> resolved=${resolved}`);
}

await s.close();
verifiedSpots.sort((a, b) => a.id - b.id);

// Save updated post-fix patrol_after.json and fixed.json
fs.writeFileSync(path.join(out, 'patrol_after.json'), JSON.stringify({
    summary: afterPatrol.summary,
    pathfindingErrors: afterPatrol.pathfindingErrors,
    coordinateAnomalies: afterPatrol.coordinateAnomalies
}, null, 1));

const resolvedCount = verifiedSpots.filter(x => x.resolved).length;
const fixedLog = {
    fixedAt: new Date().toISOString(),
    version: man.version,
    summary: {
        verifiedDriveSpotsTotal: verifiedSpots.length,
        verifiedDriveSpotsResolved: resolvedCount,
        beforePatrol: beforePatrol.summary,
        afterPatrol: afterPatrol.summary,
        cityDataRepairs: cityRepairs ? cityRepairs.summary.counts : null
    },
    codeFixes: [
        { file: 'src/net.js', description: 'Check onPlaza before sJ for accurate junction identification; force wj=1 inside fitted junction plazas; restrict kerb/off=0 strictly to junction plaza discs (jr + 0.35); allow overlap blending within 0.08 m of asphalt borders.' },
        { file: 'src/city.js', description: 'Snap asphalt boundary vertices (d = +/-hw) to q.y and sink kerb outer vertices (k=2,8) beneath intersecting lower streets whenever adjacent pavement/verge vertices overlap another street.' },
        { file: 'src/roadbot.js', description: 'Cast surface() rays from q.y + 2.2 m to stay below 4.6 m overhead station canopies; add keepLat warp mode and inspection helpers for steep grades, overlapping carriageways, fragmented pavements, local detours, and junction planes.' },
        { file: 'tools/fix-city.mjs', description: 'Apply monotonic pavement taper (321->0 fragmented_pavement), open 168 local one-way detour bottlenecks, smooth remaining steep grades & kinks, trim remaining overlapping carriageways, and align junction samples to fitted planes.' }
    ],
    verifiedSpots,
    dataRepairs: cityRepairs ? cityRepairs.repairs : null
};

fs.writeFileSync(path.join(out, 'fixed.json'), JSON.stringify(fixedLog, null, 1));
console.log(`done: ${resolvedCount}/${verifiedSpots.length} screenshotted spots resolved -> ${path.join(out, 'fixed.json')}`);
process.exit(0);

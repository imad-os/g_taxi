// Fuel stations at their REAL places (owner request 2026-11-19: "make sure all gas stations are the real world position,
// not random"): every OpenStreetMap amenity=fuel in osm/places.json `fuel` inside the city box is put on the street
// sample nearest to it, on the side of the street where it really is (`side` -1 = right of the street's direction,
// +1 = left). No invented stations any more (0.4.7 filled gaps over 1.6 km with made-up ones).
//   node tools/stations.mjs        rewrites assets/city/city.json `stations` (and drops buildings under the new canopies
//                                   from bld.bin); run it after `npm run city` and tools/fix-city.mjs.
// tools/build-city.mjs uses placeStations() too.
import fs from 'node:fs';
import { toXY } from '../core/tools/geo.mjs';

const MAXD = 90;          // a station more than this from any usable street is left out (none in Tangier today)
const SAME = 40;          // OSM points closer than this are one station (OSM lists some twice)
const GAP = 34;           // two canopies on the same stretch of street need this much room

// edges: [{ id, cls, ra, pts: [{x, z}] }]. Returns [{ e, k, side, name, x, z, d }] (x z = the real place).
export function placeStations(edges, fuel, box) {
    const pts = [];
    for (const f of fuel) {
        const q = toXY(f.lat, f.lon);
        if (box && (q.x < box.x0 + 50 || q.x > box.x1 - 50 || q.z < box.z0 + 50 || q.z > box.z1 - 50)) continue;
        const dup = pts.find(p => Math.hypot(p.x - q.x, p.z - q.z) < SAME);
        if (dup) { if (!dup.name && f.n) dup.name = f.n; continue; }
        pts.push({ x: q.x, z: q.z, name: f.n || '' });
    }
    const out = [];
    for (const p of pts) {
        // the nearest sample of a street a taxi uses (unclassified and bigger, then residential), away from its ends
        let best = null;
        for (const pass of [4, 5]) {
            for (const e of edges) {
                if (e.cls > pass || e.ra || e.pts.length < 10) continue;
                for (let k = 3; k < e.pts.length - 3; k++) {
                    const d = Math.hypot(e.pts[k].x - p.x, e.pts[k].z - p.z);
                    if (!best || d < best.d) best = { e, k, d };
                }
            }
            if (best && best.d < 60) break;
        }
        if (!best || best.d > MAXD) { console.log('  left out (no street near):', p.name, p.x.toFixed(0), p.z.toFixed(0)); continue; }
        const P = best.e.pts, a = P[best.k - 1], b = P[best.k + 1], c = P[best.k];
        const L = Math.hypot(b.x - a.x, b.z - a.z) || 1, tx = (b.x - a.x) / L, tz = (b.z - a.z) / L;
        const left = (p.x - c.x) * tz + (p.z - c.z) * -tx;      // the game's left vector is (tz, -tx)
        const side = left > 0 ? 1 : -1;
        if (out.some(s => s.e === best.e.id && s.side === side && Math.abs(s.k - best.k) * 4 < GAP)) continue;
        out.push({ e: best.e.id, k: best.k, side, name: p.name, x: +p.x.toFixed(1), z: +p.z.toFixed(1), d: +best.d.toFixed(1) });
    }
    return out;
}

if (process.argv[1] && process.argv[1].endsWith('stations.mjs')) {
    const meta = JSON.parse(fs.readFileSync('assets/city/city.json', 'utf8'));
    const net = new Float32Array(fs.readFileSync('assets/city/net.bin').buffer.slice(0));
    const edges = meta.edges.map((r, id) => {
        const pts = [];
        for (let k = 0; k < r[2]; k++) pts.push({ x: net[(r[1] + k) * 3], z: net[(r[1] + k) * 3 + 2] });
        return { id, cls: r[6], ra: r[8], pts };
    });
    const fuel = JSON.parse(fs.readFileSync('osm/places.json', 'utf8')).fuel || [];
    const st = placeStations(edges, fuel, meta.box);
    const old = meta.stations.length;
    meta.stations = st.map(s => ({ e: s.e, k: s.k, side: s.side, name: s.name, x: s.x, z: s.z }));
    // buildings under a canopy, its pumps or its sign go (the station's own shop often is one)
    const B = new Float32Array(fs.readFileSync('assets/city/bld.bin').buffer.slice(0)), keep = [];
    let dropped = 0, n = 0;
    const spots = st.map(s => {
        const P = edges[s.e].pts, a = P[s.k - 1], b = P[s.k + 1], c = P[s.k], L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
        const lx = (b.z - a.z) / L, lz = -(b.x - a.x) / L, hw = meta.edges[s.e][5];
        return { x: c.x + lx * s.side * (hw + 4), z: c.z + lz * s.side * (hw + 4) };
    });
    for (let o = 0; o < B.length;) {
        const cnt = B[o], len = 3 + cnt * 2;
        let cx = 0, cz = 0, near = false;
        for (let k = 0; k < cnt; k++) {
            const x = B[o + 3 + k * 2], z = B[o + 4 + k * 2]; cx += x / cnt; cz += z / cnt;
            if (spots.some(p => Math.hypot(p.x - x, p.z - z) < 13)) near = true;
        }
        if (near || spots.some(p => Math.hypot(p.x - cx, p.z - cz) < 18)) dropped++;
        else { for (let k = 0; k < len; k++) keep.push(B[o + k]); n++; }
        o += len;
    }
    fs.writeFileSync('assets/city/bld.bin', Buffer.from(new Float32Array(keep).buffer));
    meta.buildings = n;
    fs.writeFileSync('assets/city/city.json', JSON.stringify(meta));
    // how far the farthest street (in town) is from a station, straight line
    let far = 0, at = null;
    for (const e of edges) for (let k = 0; k < e.pts.length; k += 10) {
        const p = e.pts[k];
        if (Math.hypot(p.x - 2300, p.z + 1300) > 3300) continue;
        let d = 1e9; for (const s of st) d = Math.min(d, Math.hypot(s.x - p.x, s.z - p.z));
        if (d > far) { far = d; at = p; }
    }
    for (const s of st) console.log(`  ${s.name || '(no name)'}: real ${s.x} ${s.z}, street #${s.e} ${s.d} m away, ${s.side > 0 ? 'left' : 'right'} side`);
    console.log(`stations: ${old} -> ${st.length} (all from OpenStreetMap), ${dropped} buildings under them removed; farthest town street ${far.toFixed(0)} m from one (at ${at.x.toFixed(0)}, ${at.z.toFixed(0)})`);
}

// The bug reports the player sent from the game (Capture button / Pause > Report a bug), read from My PC's Firebase
// (Firestore `bugs`, public read, see My PC's firebase/firestore.rules). Saves each one in bugs/<id>/ (report.json +
// shot.jpg) and prints a short line per report, newest first.
//   node tools/bugs.mjs [count=10] [id]
import fs from 'node:fs';
const KEY = process.env.FIREBASE_KEY || 'AIzaSyBT0nk8uKUofgF5obP11R96lHtXbEVlKtc';   // My PC's public web key (js/core/cloud.js)
const DB = 'https://firestore.googleapis.com/v1/projects/tvgames-f984d/databases/(default)/documents';
const [count = '10', only] = process.argv.slice(2);

function plain(v) {
    if (!v) return null;
    if ('stringValue' in v) return v.stringValue;
    if ('integerValue' in v) return +v.integerValue;
    if ('doubleValue' in v) return v.doubleValue;
    if ('booleanValue' in v) return v.booleanValue;
    if ('timestampValue' in v) return v.timestampValue;
    if ('nullValue' in v) return null;
    if ('mapValue' in v) { const o = {}; for (const k in v.mapValue.fields || {}) o[k] = plain(v.mapValue.fields[k]); return o; }
    if ('arrayValue' in v) return (v.arrayValue.values || []).map(plain);
    return null;
}
async function get(url) { const r = await fetch(url); if (r.status === 403) { console.log('403: the Firestore rules with `bugs` are not published yet (My PC firebase/firestore.rules)'); process.exit(2); } if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 300)); return r.json(); }

let docs;
if (only) docs = [await get(DB + '/bugs/' + only + '?key=' + KEY)];
else {
    // the list without the pictures and logs (small), then each report in full
    const j = await get(DB + '/bugs?pageSize=300&mask.fieldPaths=app&mask.fieldPaths=at&key=' + KEY);
    const ids = (j.documents || []).filter(d => /taxi/.test(plain(d.fields.app) || '')).sort((a, b) => String(plain(b.fields.at)).localeCompare(String(plain(a.fields.at))))
        .slice(0, +count || 10).map(d => d.name.split('/').pop());
    docs = []; for (const id of ids) docs.push(await get(DB + '/bugs/' + id + '?key=' + KEY));
}
const list = docs.map(d => { const o = {}; for (const k in d.fields) o[k] = plain(d.fields[k]); o.id = d.name.split('/').pop(); return o; })
    .sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, +count || 10);
if (!list.length) console.log('no bug reports yet');
for (const b of list) {
    const dir = 'bugs/' + b.id; fs.mkdirSync(dir, { recursive: true });
    let data = b.data; try { data = JSON.parse(b.data); } catch (e) {}
    fs.writeFileSync(dir + '/report.json', JSON.stringify({ ...b, img: undefined, data }, null, 1));
    if (b.img) fs.writeFileSync(dir + '/shot.jpg', Buffer.from(b.img.split(',')[1], 'base64'));
    const c = data && data.car, r = data && data.road;
    console.log(`${b.at}  ${b.id}  ${b.app} ${b.appv || ''}  ${b.where}/${b.model}  "${b.note}"  ` +
        (c ? `car ${c.x},${c.z} ${c.kmh} km/h  road ${r ? r.name + ' (edge ' + r.edge + ')' : '-'}  wheels drawn-road ${data.wheels.map(w => w.diff).join(' ')}  worst around ${data.worstDrawnMinusRoad}` : '') + `  -> ${dir}/`);
}

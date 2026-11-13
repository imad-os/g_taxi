// Runs in GitHub Actions (the dev container cannot reach Overpass): Tangier's named areas (suburbs, quarters,
// neighbourhoods) and fuel stations -> osm/places.json. Data (c) OpenStreetMap contributors, ODbL 1.0.
import fs from 'node:fs';

const bbox = JSON.parse(fs.readFileSync('osm/roads.json', 'utf8')).bbox;
const MIRRORS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter'];
async function overpass(q) {
    let last;
    for (let round = 0; round < 3; round++) for (const url of MIRRORS) {
        try {
            const r = await fetch(url, { method: 'POST', body: 'data=' + encodeURIComponent(q),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'tangier-taxi-build/1.0' } });
            if (!r.ok) throw new Error(url + ' ' + r.status);
            return await r.json();
        } catch (e) { last = e; console.log('retry', e.message); await new Promise(r => setTimeout(r, 5000)); }
    }
    throw last;
}
const r5 = v => Math.round(v * 1e5) / 1e5;
const [s, w, n, e] = bbox, bb = `(${s},${w},${n},${e})`;
const d = await overpass(`[out:json][timeout:120];(
  node["place"~"^(suburb|quarter|neighbourhood|village|hamlet|locality)$"]${bb};
  way["place"~"^(suburb|quarter|neighbourhood)$"]${bb};
  relation["place"~"^(suburb|quarter|neighbourhood)$"]${bb};
  node["amenity"="fuel"]${bb}; way["amenity"="fuel"]${bb};
);out tags center;`);
const places = [], fuel = [];
for (const el of d.elements) {
    const t = el.tags || {}, lat = el.lat ?? el.center?.lat, lon = el.lon ?? el.center?.lon;
    if (lat == null) continue;
    if (t.amenity === 'fuel') fuel.push({ lat: r5(lat), lon: r5(lon), n: t.name || t.brand || '' });
    else if (t.name || t['name:fr']) places.push({ lat: r5(lat), lon: r5(lon), k: t.place, n: t['name:fr'] || t.name, nar: t['name:ar'] || '' });
}
fs.writeFileSync('osm/places.json', JSON.stringify({ bbox, license: 'ODbL 1.0, (c) OpenStreetMap contributors', places, fuel }));
console.log(places.length, 'places', fuel.length, 'fuel stations');

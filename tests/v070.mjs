// 0.7.0 checks (owner 2026-11-19): the full city map (Pause > City map and the − button) with the fuel stations, people
// waiting, the destination and the GPS route; every fuel station is a real OpenStreetMap one, on its real side of the street.
// node tests/v070.mjs <out folder>
import fs from 'node:fs';
import { open } from './shot.mjs';
import { toXY } from '../core/tools/geo.mjs';
const out = process.argv[2] || 'proof';
fs.mkdirSync(out, { recursive: true });
let bad = 0;
const check = (ok, what, data) => { console.log((ok ? 'ok   ' : 'FAIL ') + what, data === undefined ? '' : JSON.stringify(data).slice(0, 500)); if (!ok) bad++; };
const fuel = JSON.parse(fs.readFileSync('osm/places.json', 'utf8')).fuel.map(f => toXY(f.lat, f.lon));

const s = await open('?dev&fresh&level=easy', { w: 1920, h: 1080 });
const P = s.page;
await P.waitForFunction(() => window.TT && window.TT.shift && window.TT.state === 'drive', null, { timeout: 90000 });
await P.waitForTimeout(2500);

// stations: every one next to a real OSM station, on its side of the street
let r = await P.evaluate(() => {
    const net = window.TT.shift.net;
    return net.stations.map(s => { const i = net.eOff[s.e] + s.k, lx = net.tz[i], lz = -net.tx[i]; return { x: s.x, z: s.z, px: net.px[i], pz: net.pz[i], side: s.side, real: Math.sign((s.x - net.px[i]) * lx + (s.z - net.pz[i]) * lz) }; });
});
const off = r.map(s => Math.min(...fuel.map(f => Math.hypot(f.x - s.px, f.z - s.pz))));
check(r.length >= 15 && off.every(d => d < 90), 'every fuel station stands by a real OpenStreetMap station (pump within 90 m of it)', { n: r.length, worst: Math.max(...off).toFixed(0) });
check(r.every(s => s.side === s.real), 'every station is on the side of the street where the real one is', r.filter(s => s.side !== s.real));

// Pause > City map (item 3) with no ride: the way to the nearest person waiting
await P.evaluate(() => window.TT.pauseShift());
await P.waitForTimeout(300);
const items = await P.evaluate(() => [...document.querySelectorAll('.ui [data-f]')].map(e => e.textContent));
check(/City map/.test(items[2]), 'Pause: City map is the third item', items);
await P.evaluate(() => { const U = window.TT.ui; U.f = 2; U.paint(); U.input('confirm', 'keys'); });
await P.waitForTimeout(500);
r = await P.evaluate(() => { const U = window.TT.ui, M = U.map; return { screen: U.screen, kind: M && M.kind, info: document.querySelector('.minfo').textContent, legend: document.querySelector('.legend').textContent, z: M.z }; });
check(r.screen === 'map' && /Fuel station/.test(r.legend) && /GPS route/.test(r.legend), 'the city map opens with its legend', r);
await P.screenshot({ path: out + '/1-map-whole-city.png' });
await P.evaluate(() => { const U = window.TT.ui; U.input('confirm', 'keys'); U.input('confirm', 'keys'); });
await P.waitForTimeout(300);
r = await P.evaluate(() => ({ z: window.TT.ui.map.z }));
check(r.z === 2, 'OK zooms in (x4 after two presses)', r);
await P.screenshot({ path: out + '/2-map-zoom.png' });
await P.evaluate(() => { const U = window.TT.ui, c = U.map.cx; U.input('right', 'keys'); window._dx = U.map.cx - c; });
check(await P.evaluate(() => window._dx > 0), 'the arrows move the map');
await P.evaluate(() => window.TT.ui.input('cancel', 'keys'));
await P.waitForTimeout(200);
check(await P.evaluate(() => window.TT.ui.screen === 'pause' && window.TT.ui.f === 2), 'Back returns to the pause menu on City map');

// with Go fuel up: the route to the station and its flag
await P.evaluate(() => { const U = window.TT.ui; U.f = 1; U.paint(); U.input('confirm', 'keys'); });
await P.waitForTimeout(1200);
// the − button while driving opens it straight away
await P.evaluate(() => { const I = window.TT.input; I.onButton(8, true, 1, 'pad1'); setTimeout(() => I.onButton(8, false, 0, 'pad1'), 60); });
await P.waitForTimeout(600);
r = await P.evaluate(() => { const U = window.TT.ui, M = U.map; return { state: window.TT.state, screen: U.screen, kind: M && M.kind, km: M && M.R && +(M.R.route.len / 1000).toFixed(2), info: document.querySelector('.minfo') && document.querySelector('.minfo').textContent }; });
check(r.state === 'pause' && r.screen === 'map' && r.kind === 'fuel' && r.km > 0 && /fuel station/.test(r.info), 'the − button opens the map; the GPS route goes to the fuel station', r);
await P.evaluate(() => { const U = window.TT.ui; U.input('confirm', 'keys'); U.input('confirm', 'keys'); });
await P.waitForTimeout(300);
await P.screenshot({ path: out + '/3-map-route-fuel.png' });
// a passenger aboard: the route to the destination
await P.evaluate(() => window.TT.ui.input('cancel', 'keys'));
await P.waitForTimeout(300);
check(await P.evaluate(() => window.TT.state === 'drive'), 'Back from the map opened with − returns to the road');
r = await P.evaluate(() => {
    const S = window.TT.shift, T = S.taxi, v = S.me.veh;
    T.fuelGo = null;
    let p = T.peds.find(p => p.state === 'wait');
    if (!p) return null;
    v.px = p.x; v.pz = p.z; S.net.query(v.px, v.pz, -1, S.qp);
    T.pickup(v, S.qp);
    if (T.ride) T.ride.ped.state = 'in';
    return T.ride ? { name: T.ride.name } : null;
});
await P.waitForTimeout(800);
await P.evaluate(() => window.TT.openMap());
await P.waitForTimeout(400);
r = await P.evaluate(() => { const M = window.TT.ui.map; return M && { kind: M.kind, info: document.querySelector('.minfo').textContent }; });
check(r && r.kind === 'ride' && /^To /.test(r.info), 'with a passenger aboard: the GPS route to the destination', r);
await P.screenshot({ path: out + '/4-map-route-ride.png' });
// Arabic: right to left, the strings
await P.evaluate(() => window.TT.ui.input('cancel', 'keys'));
await s.close();
console.log(bad ? bad + ' FAILED' : 'all passed');
process.exit(bad ? 1 : 0);

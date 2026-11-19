# Road bot: find broken roads automatically

Owner request (2026-11-14): "make some bot driver that will play by himself and collect logs and screenshots for you to fix the
roads, and save that option and doc to run later in another Claude session". The roads to fix are broken routes, cut routes,
grass inside the road, odd-looking roundabouts, odd turns and pavements.

## Run it

```sh
npm install && npm run build           # the bot is part of dist/game.js (only active with ?bot)
SDK=/path/to/g/sdk/mypc-sdk.js node tools/roadbot.mjs bot-out --minutes 20 --spread 3
```

| option | default | meaning |
|---|---|---|
| `--minutes` | 20 | how long to drive (real time) |
| `--seed` | 1 | the random destinations (another seed = other streets) |
| `--spread` | 3 | every n trips, jump to a random street in town (0 = keep driving from where it is) |
| `--x --z` | saved spot | where to start (metres, the game's world coordinates) |
| `--kmh` | 50 | the bot's top speed (it slows for curves) |
| `--steps` | 6 | 60 Hz game ticks per drawn frame (more = faster game time, fewer pictures) |

In the cloud container (no GPU, about 10 fps) the bot covers roughly 1 km of road per real minute. On imad's PC, with `GPU=1`,
it is much faster. The game page in a browser also works by hand: `index.html?dev&fresh&proof&bot&level=easy`.

## What you get (in the out folder, not committed: `bugs/`-style scratch)

- `report.md`: a table of findings, most serious kinds first: street, edge / junction id, x z, what, picture link.
- `report.json`: the same, plus each finding's `trail` (the last 10 s of driving, a sample every 0.25 s:
  `[t, x, y, z, km/h, edge, d from centre, junction, road y, top wheel compression, steer]`).
- `shots/<id>-<kind>.jpg`: the frame (high chase camera) right after the finding.
- `map.png`: the street samples in grey and the findings as coloured dots (colours listed in report.md).

## Finding kinds (src/roadbot.js)

| kind | means | where to look |
|---|---|---|
| `cut` | the route jumps: one street ends more than 3 m from where the next begins | `tools/build-city.mjs` (junction snapping), `net.route` |
| `hole` | nothing drawn under a point the network calls asphalt | `src/city.js` road mesh (junction discs, columns) |
| `grass` | ground (grass / sand) drawn on top where the network calls asphalt | `src/city.js` ground grid vs road height; `ground.bin` |
| `height` | the drawn road is > 15 cm from the road the car drives on (or a pavement rises over it) | `net.query` blend vs `city.js` vertices; `tests/surface.mjs` |
| `offroad` | the bot left the asphalt while following the route: a turn it could not take | junction shape, roundabout geometry, the route |
| `stuck` | no progress for 4 s (a kerb, a wall, a step); the bot is moved 15 m on | pavements (`side.bin`), junction planes |
| `lost` | the car ended up on a street the route does not use | junction joins, one-way rules |
| `kink` | a street's own line turns more than 70° within 12 m outside a junction | OSM data / `build-city.mjs` smoothing |
| `bump` | a wheel hit its stop or the car jumped / dropped fast | heights between streets and junction planes |

One finding per kind per 20 m square. Some `stuck` / `offroad` findings are the bot's own driving (a tight U-turn at a dead end):
check the picture and the trail before changing the map.

## Fixing loop (for a later session)

1. Run the bot (20-30 min, two or three seeds). Read `report.md`, open the pictures of the worst kinds.
2. For a spot, re-check by hand: `node tests/surface.mjs <x> <z>` (drawn vs driven on a 5 m grid there),
   `node tests/heights.mjs` (junction planes), `node tools/build-city.mjs --plot out.png` (the network), or open
   `index.html?dev&fresh&x=<x>&z=<z>` and drive there (Capture button = a full bug report, `node tools/bugs.mjs`).
3. Fix the network builder / city mesh, `npm run city` if the data changed, `npm run build`.
4. Run the bot again with the same seed and compare the counts per kind (a fix must lower them and add none).
5. Run the usual tests (CLAUDE.md "Browser checks") before pushing.

## Every route, then before / after (owner request 2026-11-19)

```sh
node tools/roadbot.mjs run --patrol --max-issues 150 --minutes 10   # all junctions: a route to every one (3,984), then
                                                                     # 3D checks at the worst spots, then free driving
# fix, npm run build, then the same spots again with today's game:
node tools/roadbot-after.mjs run bot_log/after                       # after/<id>-<kind>.jpg + report.md (fixed or not)
```

The committed `bot_log/` keeps only `before/` (the pictures and report of the run) and `after/` (the same spots now). Older
folders (bot_log_2, bot_log_3) are gone.

What to know before "fixing" a finding:
- `detour` (patrol `excessive_detour`): the shortest legal drive between two junctions 15-120 m apart is over 10x longer.
  Since 2026-11-19 it is measured with `RoadBot.junctionRoute` (any street out of the first junction, any street into the
  second, to the junction itself). The old measure left by the first street out and stopped half way along the first street
  in, so a two-way street straight between them read as a 10x detour; `tools/fix-city.mjs` then turned 114 real one-way streets
  two-way (bot_log_3). Those are one-way again. What is left are dual carriageways and one-way streets as they really are:
  never make a real one-way street two-way to please the bot.
- `steep`: Rue 6 (#1200, 28 % over 36 m) follows the real terrain; it is kept.
- `bump` right after the bot jumps somewhere is the car landing (the bot ignores 1.5 s after a jump since 2026-11-19).
- `dead_end_node` (406): streets that end in OpenStreetMap. 28 of them stop within 4 m of another street's asphalt; some pairs
  are one street cut by steps or a footway in OSM, not drivable in reality, so they were not joined.

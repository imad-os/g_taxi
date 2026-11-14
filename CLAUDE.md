# This repository is a My PC app or game

**Main instruction: before every task, fetch the latest My PC guide from GitHub and follow it.**

1. Guide (always fetch it fresh, never work from memory or a saved copy):
   https://raw.githubusercontent.com/imad-os/g/main/sdk/GUIDE.md
   (if that fails: https://imad-os.github.io/g/sdk/GUIDE.md)
2. SDK (load it with a `<script>` tag from this address; never copy it into this repo):
   https://imad-os.github.io/g/sdk/mypc-sdk.js
3. Working example: https://github.com/imad-os/g/tree/main/sdk/example

If anything in this file disagrees with the guide, the guide wins. For every release: bump `version` in
`mypc-app.json` and run `npm run build` (it stamps the same `?v=` everywhere). When a task is done: commit, push,
and tell the owner to press **Update** next to the app in the App Store Manager once GitHub Pages has published it
(address `https://imad-os.github.io/g_taxi/`, Pages = main / root).

## This game (Tangier TAXI)

A petit-taxi simulator on the real streets of Tangier (OpenStreetMap). Its sister game is **Tangier Asphalt**
(repo `imad-os/g_tanger_asphalt`), which must stay as it is (owner decision 2026-11-13).

- Owner rules from My PC apply: push straight to `main` (no branches / PRs); never say something works without a real
  browser run and a screenshot; strings in en / fr / es / ar (`src/i18n.js`); every screen works with the remote alone;
  buttons are A B X Y in the Nintendo places + the **+** button, by letter: A = OK, B = Back. Performance first: low-end
  Samsung TVs (Tizen, Chromium 108).
- **Shared core** (`core/`): the driving code shared with Asphalt (vehicle physics, collisions, shaders, car view,
  camera, effects, sound, model loading; tools geo / terrain). Owner decision 2026-11-13: the shared core's home is the
  **Asphalt repo**. For now `core/` here is a copy of Asphalt's files plus additive changes that Asphalt does not use
  (`Vehicle.gearbox` 'manual' | 'clutch' with `manualDrive` / `shift`, `stalled`, `fuelCut`, `input.clutch`, `topSpeedCap`
  as the limiter). Keep every change to `core/` additive (Asphalt's physics output must not change) and hand it to
  Asphalt so both copies stay the same; the plan is a git submodule once Asphalt carries it.
- Build: `npm install`, `npm run build` (esbuild -> `dist/game.js`, commit it: Pages serves it as is).
- **City data** (only when the map changes): `osm/*.json` (OpenStreetMap, ODbL; same fetch as Asphalt) + `raw/terrain.bin`
  (not committed; `node core/tools/terrain.mjs`) -> `npm run city` (`tools/build-city.mjs`) -> `assets/city/`:
  `city.json` (streets `[id, off, n, a, b, hw, cls, oneway, roundabout, limit, name, bridge]`, junctions, traffic lights,
  fuel stations, names), `net.bin` (a sample every 4 m), `side.bin` (pavement width per side, narrowed where two roads
  touch), `ground.bin`, `bld.bin`. `node tools/build-city.mjs --plot out.png` draws the network. Speed limits: OSM
  `maxspeed`, else by class (80 / 60 / 60 / 50 / 40 / 40, roundabouts 40). Area names (the label above the GPS map) and
  OSM fuel stations: `osm/places.json`, written by the GitHub Action `.github/workflows/places.yml` (`tools/osm-places.mjs`; runs
  when that file changes or by hand; the cloud container cannot reach Overpass). Street lamps and trees go only on a pavement
  of their own, clear of every street and junction (`CityWorld.clear`); walkers (`src/walkers.js`) keep to such pavements too.
- Code: `src/net.js` (the network: query under a car, routes with one-way rules), `src/city.js` (streamed 200 m chunks,
  merged meshes), `src/traffic.js` (AI cars, lights), `src/taxi.js` (money, fares, fines, accidents, fuel, passengers; pure
  logic), `src/game.js` (the shift), `src/hud.js`, `src/ui.js`, `src/input.js`, `src/main.js` (My PC lifecycle).
- Passengers (owner asks 2026-11-13): ~6 wait around the taxi (mostly ahead) with a green arrow over the head; each has
  a destination; stopping by one quotes the trip (route length -> price) on the A prompt; the fare is fixed at pick-up.
- Who fines (owner rule 2026-11-13, `src/enforce.js`): speeding only at a speed camera (as the taxi passes it) or in view
  of a police officer (90 m); red light, wrong way and pavement only in view of an officer; hitting a pedestrian, a
  passenger hurt in a crash you caused and at-fault crashes with cars are always paid. Cameras = red dots, police = blue
  dots on the map. Cars: Petit taxi / Kasbah City / Medina Hatch (Asphalt's everyday cars, taxi colours), Settings `car`.
  Start over (title + pause) = 300 DH, clean record.
- Rules and prices (`src/taxi.js`): fare 7 DH + 4 DH / km, late -10 % per 15 s, bumps -25 %; fines red light 700,
  wrong way 700, pavement 500, accident fault 300, speeding 300 / 500 / 700 / 1000 by km/h over (5 km/h tolerance, 3 s);
  repair = closing speed² x 18; diesel 13.4 DH / L, 40 L tank; out of fuel = roadside help 150 DH + 6 L at 1.5x.
- Controls (`src/input.js`): ZR gas, ZL brake (held at a stop = reverse in automatic), stick / D-pad steer, B handbrake,
  X clutch (a button lets it out over 0.9 s), R / L gear up / down, D-pad up / down = limiter, A = the action shown
  (pick up, drop off, refuel, help), Y camera, + / Back = pause, Capture = bug report.
- Browser checks (Playwright, SDK from a My PC checkout `SDK=/path/to/g/sdk/mypc-sdk.js`; dev URL `?dev&fresh[&gear=manual|clutch][&x=&z=]`):
  `node tests/drive.mjs <folder>` (drive + pick-up, screenshots, fps) and `node tests/rules.mjs <folder>` (whole ride,
  speeding, crash card, refuel, roadside help, clutch stall / pull away / 2nd gear; must print "all passed"),
  `node tests/walkers.mjs <folder>` (people walk, none on the asphalt), `node tests/props.mjs` (street lamps, light poles, cameras, police off
  the asphalt), `node tests/v020.mjs <folder>` (passengers, quote, car, pedestrian hit, pause, start over).
  `node tests/heights.mjs` (junction planes vs streets), `node tests/surface.mjs [x z]` (rays on the drawn asphalt vs net.query
  on a 5 m grid: streets drawn over each other), `node tests/bug.mjs <folder>` (Capture button / Pause > Report a bug).
  The cloud has no GPU (~10 fps): fps proof belongs on the owner's PC.
- **Bug reports (owner request 2026-11-13, 0.3.0)**: the controller's Capture button (17) or Pause > Report a bug sends, through
  `MyPC.bug` (My PC API 22), the last minute of driving (`src/buglog.js`, a sample every 0.25 s), the four wheels' driven
  height (net.query) vs the drawn height (a ray on the road meshes), a 9 x 9 grid of those around the car, the street /
  junction, camera, events, and a 960 px JPEG of the frame. Saved in My PC's Firestore `bugs` (public read, 30 days).
  **When imad says "check the logs": `node tools/bugs.mjs [n] [id]`** (saves `bugs/<id>/report.json` + `shot.jpg`, not committed).
- **0.4.0 (owner requests 2026-11-14)**: Settings menu (title + pause) holds every setting: Car, Gearbox, Difficulty, Route arrows,
  HUD size, (in a shift) Speed limiter; a new car or difficulty restarts the shift when leaving it. **Difficulty** (`src/level.js`,
  default Normal, **Hard = the game as in 0.3.0**): trip length grows with rides paid (`tripRange`), time allowed, police sight
  (45 / 70 / 90 m), camera / police tolerance (+15 / +10 / +5 km/h), traffic (55 / 80 / 100 %). **Route arrows** (`src/guide.js`,
  optional): green arrows on the road along the route (to 30 m past the first turn) + the next-turn sign (left / right / U-turn /
  arrive, distance, street). **Gauges** (`src/gauges.js`): rev counter (gear, fuel arc), speedometer (digital speed), lights
  P / ENG / FUEL / C / LIM / TAXI (green free, red occupied). **HUD size** small / normal / large / xl = `--hs` 1 / 1.2 / 1.4 / 1.65
  on `.hud` (every HUD size is in `--u`). Capture = any button from 17 up; Controls has a button test (the last button's number).
  Test: `node tests/v040.mjs <folder>`.
- Road surface: where two streets' asphalt overlaps (or is within `MERGE` = 2.5 m), `net.query` blends their heights by depth,
  and `city.js` draws every asphalt vertex (5 columns across) at `net.query`'s height; a pavement / verge reaching onto
  another street's asphalt goes 4 cm under it. Junctions with 3+ streets: one fitted plane (`fitJunctions`, `BLEND` 12 m).
- **0.4.1 (owner requests 2026-11-14)**: four levels in `src/level.js`: **Easy** (new, the gentlest), **Normal** (default) = 0.4.0's
  Easy, **Hard** = 0.4.0's Normal, **Real life** = 0.4.0's Hard = the game as in 0.3.0. `pay` = the share of every fine, repair, injury
  cost and late / bump pay cut (`Taxi.cost`): 25 / 40 / 60 / 100 %. A saved 0.4.0 `hard` becomes `real` (settings `lv: 2`).
  `tests/rules.mjs` runs on Real life. **0.4.2**: fines alone = `fine` 6 / 10 / 15 / 100 % (owner: "make them 1/4", Real life kept full).
- **Steering (owner request 2026-11-14, 0.4.2: tight turns)**: the taxi cars set `steer` 0.7, `steerFade` 0.02, `steerSlack` 0.22,
  `steerRate` 3.6 (additive spec fields read by `core/src/vehicle.js` `lockAt` / the wheel rate; Asphalt keeps 0.035 / 0.13 / 2.6).
  Lock at 20 / 40 km/h: 36° / 26° (was 30° / 21°). Stick curve ^1.2 (was 1.5), D-pad ramps in ~0.1 s. `node tests/steer.mjs [car] [dir]`.
- **Road bot (owner request 2026-11-14)**: `src/roadbot.js` (dev only, `?dev&bot`) drives by itself and logs road problems (cut routes,
  holes, grass on the asphalt, height mismatches, off-road turns, stuck spots, kinks, bumps) with a picture each.
  **`node tools/roadbot.mjs <out> --minutes 20`** writes report.md / report.json / shots / map.png. How to run it and the fixing loop:
  **docs/ROADBOT.md**. Out folders are not committed.

## Stage 2 (planned)
Garage with upgrades that change the part's look (TV-safe layout), real fuel station places from OSM, turn-by-turn hints,
night shifts, remappable controls.

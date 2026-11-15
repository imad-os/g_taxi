// Difficulty (Settings > Difficulty). Owner requests 2026-11-14: first Easy / Normal / Hard with Normal by default; then
// (same day) four levels: Easy (new, the gentlest), Normal = the old Easy, Hard = the old Normal, Real life = the old Hard
// (= the game as in 0.3.0), with smaller fines and pay cuts on every level but Real life.
//   trip: how far passengers want to go, in km by road: [shortest, longest on the first ride, + per ride paid, longest ever]
//         (trips start short and get longer as the driver does more rides)
//   time: the time a passenger allows = route m / speed (m/s) + extra s
//   see:  how far a police officer sees the taxi (m)   tol: km/h over the limit before a camera or officer fines
//   traffic: share of the usual number of other cars (fewer cars = fewer accidents)
//   gap: at most one fine per gap s (sooner = a police warning)   freeHit: knocks below this closing speed (m/s) cost nothing
//   (owner 2026-11-15: Easy lost 1000 DH a ride on the road; pay was 25 / 40 / 60 %)
//   (owner 2026-11-15: "1/4" meant every money cut: pay = fine = a quarter of 0.4.1's 25 / 40 / 60 %, roadside help too)
//   pave: fined for driving on the pavement (owner 2026-11-15: only Real life)   crash: share of crash costs with cars / walls
//   (repairs, the other car, the fault fine, a hurt passenger) on top of `pay`: Easy = free ("unplayable for kids")
//   fine: share of every fine (owner 2026-11-14: a quarter of `pay` below Real life)
//   pay: share of every repair, injury cost and late / bump pay cut (Real life = the full Moroccan amounts)
export const LEVELS = {
    easy:   { trip: [0.3, 0.8, 0.06, 2.0], time: [6.0, 90], see: 30, tol: 20, traffic: 0.4,  pay: 0.0625, fine: 0.0625, gap: 120, freeHit: 4.2, pave: false, crash: 0 },
    normal: { trip: [0.4, 1.0, 0.08, 2.5], time: [6.5, 70], see: 45, tol: 15, traffic: 0.55, pay: 0.1,  fine: 0.1,    gap: 60,  freeHit: 3,   pave: false, crash: 0.5 },
    hard:   { trip: [0.5, 1.3, 0.12, 3.5], time: [7.4, 55], see: 70, tol: 10, traffic: 0.8,  pay: 0.15, fine: 0.15,   gap: 20,  pave: false, crash: 0.5 },
    real:   { trip: [0.8, 1.8, 0.15, 4.5], time: [8.2, 45], see: 90, tol: 5,  traffic: 1,    pay: 1,    fine: 1 }
};
export const LEVEL_IDS = ['easy', 'normal', 'hard', 'real'];
export const levelOf = (id) => LEVELS[id] || LEVELS.normal;
// the longest trip now (km by road) after `rides` paid rides
export function tripRange(L, rides) { const t = L.trip; return [t[0], Math.min(t[3], t[1] + t[2] * (rides || 0))]; }

// Difficulty (Settings > Difficulty). Owner requests 2026-11-14: first Easy / Normal / Hard with Normal by default; then
// (same day) four levels: Easy (new, the gentlest), Normal = the old Easy, Hard = the old Normal, Real life = the old Hard
// (= the game as in 0.3.0), with smaller fines and pay cuts on every level but Real life.
//   trip: how far passengers want to go, in km by road: [shortest, longest on the first ride, + per ride paid, longest ever]
//         (trips start short and get longer as the driver does more rides)
//   time: the time a passenger allows = route m / speed (m/s) + extra s
//   see:  how far a police officer sees the taxi (m)   tol: km/h over the limit before a camera or officer fines
//   traffic: share of the usual number of other cars (fewer cars = fewer accidents)
//   pay: share of every fine, repair, injury cost and late / bump pay cut (Real life = the full Moroccan amounts)
export const LEVELS = {
    easy:   { trip: [0.3, 0.8, 0.06, 2.0], time: [6.0, 90], see: 30, tol: 20, traffic: 0.4,  pay: 0.25 },
    normal: { trip: [0.4, 1.0, 0.08, 2.5], time: [6.5, 70], see: 45, tol: 15, traffic: 0.55, pay: 0.4 },
    hard:   { trip: [0.5, 1.3, 0.12, 3.5], time: [7.4, 55], see: 70, tol: 10, traffic: 0.8,  pay: 0.6 },
    real:   { trip: [0.8, 1.8, 0.15, 4.5], time: [8.2, 45], see: 90, tol: 5,  traffic: 1,    pay: 1 }
};
export const LEVEL_IDS = ['easy', 'normal', 'hard', 'real'];
export const levelOf = (id) => LEVELS[id] || LEVELS.normal;
// the longest trip now (km by road) after `rides` paid rides
export function tripRange(L, rides) { const t = L.trip; return [t[0], Math.min(t[3], t[1] + t[2] * (rides || 0))]; }

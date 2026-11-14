// Difficulty (Settings > Difficulty; owner request 2026-11-14: Normal by default, Hard = the game as it was in 0.3.0).
//   trip: how far passengers want to go, in km by road: [shortest, longest on the first ride, + per ride paid, longest ever]
//         (trips start short and get longer as the driver does more rides)
//   time: the time a passenger allows = route m / speed (m/s) + extra s
//   see:  how far a police officer sees the taxi (m)   tol: km/h over the limit before a camera or officer fines
//   traffic: share of the usual number of other cars (fewer cars = fewer accidents)
export const LEVELS = {
    easy:   { trip: [0.4, 1.0, 0.08, 2.5], time: [6.5, 70], see: 45, tol: 15, traffic: 0.55 },
    normal: { trip: [0.5, 1.3, 0.12, 3.5], time: [7.4, 55], see: 70, tol: 10, traffic: 0.8 },
    hard:   { trip: [0.8, 1.8, 0.15, 4.5], time: [8.2, 45], see: 90, tol: 5,  traffic: 1 }
};
export const LEVEL_IDS = ['easy', 'normal', 'hard'];
export const levelOf = (id) => LEVELS[id] || LEVELS.normal;
// the longest trip now (km by road) after `rides` paid rides
export function tripRange(L, rides) { const t = L.trip; return [t[0], Math.min(t[3], t[1] + t[2] * (rides || 0))]; }

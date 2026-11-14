// The road bot's map: every street sample (grey), the bot's findings as coloured dots (colours in KINDS, also in report.md),
// cropped to the part of town the findings are in. Used by tools/roadbot.mjs.
import fs from 'node:fs';
import { PNG } from 'pngjs';

export const KINDS = { cut: [220, 0, 0], hole: [140, 0, 200], grass: [0, 170, 0], height: [255, 140, 0], offroad: [0, 120, 255], stuck: [0, 0, 0], lost: [255, 0, 200], kink: [0, 200, 200], bump: [150, 110, 60] };

export async function plotFindings(found, file) {
    const raw = new Float32Array(fs.readFileSync('assets/city/net.bin').buffer.slice(0));
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (const f of found) { x0 = Math.min(x0, f.x); x1 = Math.max(x1, f.x); z0 = Math.min(z0, f.z); z1 = Math.max(z1, f.z); }
    if (!found.length) { x0 = 1500; x1 = 3200; z0 = -2600; z1 = -900; }
    x0 -= 250; x1 += 250; z0 -= 250; z1 += 250;
    const W = 1600, sx = W / (x1 - x0), H = Math.max(200, Math.round((z1 - z0) * sx));
    const png = new PNG({ width: W, height: H }); png.data.fill(255);
    const put = (x, z, c, r = 0) => { const px = Math.round((x - x0) * sx), py = Math.round((z - z0) * sx); for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) { if (a * a + b * b > r * r + r) continue; const X = px + a, Y = py + b; if (X < 0 || Y < 0 || X >= W || Y >= H) continue; const q = (Y * W + X) * 4; png.data[q] = c[0]; png.data[q + 1] = c[1]; png.data[q + 2] = c[2]; } };
    for (let i = 0; i < raw.length; i += 3) put(raw[i], raw[i + 2], [175, 175, 175], 0);
    for (const f of found) { put(f.x, f.z, [255, 255, 255], 7); put(f.x, f.z, KINDS[f.kind] || [0, 0, 0], 5); }
    fs.writeFileSync(file, PNG.sync.write(png));
}

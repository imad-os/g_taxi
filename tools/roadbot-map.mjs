// The road bot's map: always dark mode, every street route in grey, routes driven in this session in light blue,
// and findings as coloured dots (colours in KINDS, also in report.md). Used by tools/roadbot.mjs.
import fs from 'node:fs';
import { PNG } from 'pngjs';

export const KINDS = { cut: [255, 70, 70], hole: [185, 70, 255], grass: [50, 220, 90], height: [255, 165, 30], offroad: [60, 145, 255], stuck: [255, 255, 255], lost: [255, 70, 210], kink: [40, 235, 235], bump: [200, 145, 85], steep: [255, 120, 60], overlap: [255, 220, 40], pavement: [165, 235, 115], detour: [255, 140, 180] };

export async function plotFindings(found, file, driven = []) {
    const meta = JSON.parse(fs.readFileSync('assets/city/city.json', 'utf8'));
    const raw = new Float32Array(fs.readFileSync('assets/city/net.bin').buffer.slice(0));
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9, hasPts = false;
    for (const f of found) { x0 = Math.min(x0, f.x); x1 = Math.max(x1, f.x); z0 = Math.min(z0, f.z); z1 = Math.max(z1, f.z); hasPts = true; }
    for (const p of driven) { if (!p) continue; x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[1]); z1 = Math.max(z1, p[1]); hasPts = true; }
    if (!hasPts) { x0 = 1500; x1 = 3200; z0 = -2600; z1 = -900; }
    x0 -= 300; x1 += 300; z0 -= 300; z1 += 300;
    const W = 1600, sx = W / (x1 - x0), H = Math.max(240, Math.min(1800, Math.round((z1 - z0) * sx)));
    const scaleY = H / (z1 - z0);
    const png = new PNG({ width: W, height: H });
    // Always dark mode background (#0d1117)
    for (let i = 0; i < png.data.length; i += 4) {
        png.data[i] = 13; png.data[i + 1] = 17; png.data[i + 2] = 23; png.data[i + 3] = 255;
    }
    const dot = (px, py, c, r = 0) => {
        for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) {
            if (a * a + b * b > r * r + r) continue;
            const X = px + a, Y = py + b;
            if (X < 0 || Y < 0 || X >= W || Y >= H) continue;
            const q = (Y * W + X) * 4;
            png.data[q] = c[0]; png.data[q + 1] = c[1]; png.data[q + 2] = c[2]; png.data[q + 3] = 255;
        }
    };
    const put = (x, z, c, r = 0) => dot(Math.round((x - x0) * sx), Math.round((z - z0) * scaleY), c, r);
    const line = (ax, az, bx, bz, c, r = 0) => {
        const xA = (ax - x0) * sx, yA = (az - z0) * scaleY, xB = (bx - x0) * sx, yB = (bz - z0) * scaleY;
        if ((xA < -10 && xB < -10) || (xA > W + 10 && xB > W + 10) || (yA < -10 && yB < -10) || (yA > H + 10 && yB > H + 10)) return;
        const steps = Math.max(1, Math.ceil(Math.hypot(xB - xA, yB - yA)));
        for (let s = 0; s <= steps; s++) {
            const t = s / steps;
            dot(Math.round(xA + (xB - xA) * t), Math.round(yA + (yB - yA) * t), c, r);
        }
    };

    // All road network routes in grey
    const GREY = [108, 116, 128];
    for (const e of meta.edges) {
        const off = e[1], n = e[2];
        for (let k = 1; k < n; k++) {
            const i0 = (off + k - 1) * 3, i1 = (off + k) * 3;
            line(raw[i0], raw[i0 + 2], raw[i1], raw[i1 + 2], GREY, 0);
        }
    }

    // Driven routes in this session in light blue (#60c8ff)
    const LIGHT_BLUE = [96, 200, 255];
    for (let i = 0; i < driven.length; i++) {
        const p = driven[i];
        if (!p) continue;
        const prev = i > 0 ? driven[i - 1] : null;
        if (prev && Math.hypot(p[0] - prev[0], p[1] - prev[1]) <= 40) {
            line(prev[0], prev[1], p[0], p[1], LIGHT_BLUE, 1);
        } else {
            put(p[0], p[1], LIGHT_BLUE, 1);
        }
    }

    // Findings on top
    for (const f of found) {
        put(f.x, f.z, [13, 17, 23], 8);
        put(f.x, f.z, [235, 240, 248], 6);
        put(f.x, f.z, KINDS[f.kind] || [255, 255, 255], 4);
    }
    fs.writeFileSync(file, PNG.sync.write(png));
}

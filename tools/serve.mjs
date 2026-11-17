// Minimal static dev server for Tangier TAXI on port 3000 (keeps the plain HTML + esbuild bundle structure).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = +(process.env.DEV_PORT || 3000);
const TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.bin': 'application/octet-stream',
    '.woff2': 'font/woff2',
    '.ogg': 'audio/ogg',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.txt': 'text/plain; charset=utf-8'
};

if (!fs.existsSync(path.join(ROOT, 'dist', 'game.js'))) {
    console.log('dist/game.js not found, building bundle with tools/build.mjs...');
    execSync('node tools/build.mjs', { cwd: ROOT, stdio: 'inherit' });
}

const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
    const file = path.resolve(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }
    const type = TYPES[path.extname(file)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type, 'Content-Length': fs.statSync(file).size, 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Tangier TAXI dev server listening on http://localhost:${PORT}`);
});

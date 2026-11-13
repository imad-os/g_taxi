// Bundles src/ + core/src (three.js included, tree-shaken) into dist/game.js for Chromium 108 (Samsung TVs 2024+).
// Stamps the version from mypc-app.json into src/version.js and every ?v= in index.html. The shared core asks for
// './version.js': it gets this game's own src/version.js.
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
const man = JSON.parse(fs.readFileSync('mypc-app.json', 'utf8'));
const V = man.version;
fs.writeFileSync('src/version.js', `export const VERSION = '${V}';\n`);
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/\?v=[0-9.]+/g, '?v=' + V);
fs.writeFileSync('index.html', html);
const versionOfGame = { name: 'version', setup(b) { b.onResolve({ filter: /\/version\.js$/ }, () => ({ path: path.resolve('src/version.js') })); } };
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', target: 'chrome108', outfile: 'dist/game.js', legalComments: 'eof', sourcemap: false, plugins: [versionOfGame] });
console.log('dist/game.js', (fs.statSync('dist/game.js').size / 1024).toFixed(0) + ' KB', 'version', V);

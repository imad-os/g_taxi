// Tangier TAXI: boot, the My PC lifecycle, the one loop (fixed 60 Hz updates), menus <-> the shift.
import * as THREE from 'three';
import { loadModels } from '../core/src/assets.js';
import { Sound } from '../core/src/audio.js';
import { Net } from './net.js';
import { Shift } from './game.js';
import { Input } from './input.js';
import { UI } from './ui.js';
import { Hud } from './hud.js';
import { I18n } from './i18n.js';

const MyPC = window.MyPC;
const STEP = 1 / 60;
const App = {
    renderer: null, canvas: null, info: null, quality: null, net: null,
    input: new Input(), shift: null, hud: null, ui: null, sound: null,
    raf: 0, last: 0, acc: 0, state: 'boot', paused: false, saved: null, settings: { gearbox: 'auto' },
    fpsLog: [], workLog: [], saveT: 0
};
window.TT = App;   // for the browser checks (tests/)

function qualityFor(info) {
    const forced = new URLSearchParams(location.search).get('q');
    const tier = forced || (info.quality && info.quality.tier) || 'mid';
    return { tier, scale: { low: 0.6, mid: 0.8, high: 1 }[tier] || 0.8, minScale: tier === 'low' ? 0.45 : 0.55 };
}
function makeRenderer() {
    const canvas = document.getElementById('c');
    const r = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false, alpha: false, preserveDrawingBuffer: /proof/.test(location.search) });
    r.setPixelRatio(1); r.outputColorSpace = THREE.LinearSRGBColorSpace; r.toneMapping = THREE.NoToneMapping;
    App.canvas = canvas;
    return r;
}
function resize() {
    const s = App.shift ? App.shift.scale : App.quality.scale;
    const w = Math.round(1920 * s * Math.min(1, window.innerWidth / 1920 * 1.5)), h = Math.round(w * window.innerHeight / window.innerWidth);
    App.renderer.setSize(w, h, false);
    App.canvas.style.width = '100vw'; App.canvas.style.height = '100vh';
}

function frame(ts) {
    App.raf = requestAnimationFrame(frame);
    const t0 = performance.now();
    if (!App.last) App.last = ts;
    const ms = ts - App.last; App.last = ts;
    App.acc += Math.min(100, ms);
    let n = 0;
    while (App.acc >= STEP * 1000 - 0.5 && n < 4) { update(STEP); App.acc -= STEP * 1000; n++; }
    if (App.acc > STEP * 2000) App.acc = 0;
    if (App.shift && App.state !== 'boot') App.shift.render(ms);
    if (App.fpsLog.length < 20000) { App.fpsLog.push(ms); App.workLog.push(performance.now() - t0); }
}
function startLoop() { if (!App.raf) { App.last = 0; App.acc = 0; App.raf = requestAnimationFrame(frame); } }
function stopLoop() { if (App.raf) cancelAnimationFrame(App.raf); App.raf = 0; }

function update(dt) {
    App.input.poll(dt);
    if (App.state === 'drive' && App.shift) {
        App.shift.update(dt, App.input);
        App.hud.update(dt, App.input);
        App.sound.update(App.shift, dt);
        const T = App.shift.taxi;
        if (T.dirty && (App.saveT -= dt) <= 0) { App.saveT = 5; T.dirty = false; save(); }
    }
}
function save() {
    if (!App.shift) return;
    const s = App.shift.taxi.save(), v = App.shift.me.veh;
    s.at = { x: Math.round(v.px), z: Math.round(v.pz) };
    App.saved = s;
    MyPC.save('taxi', s);
}

App.saveSettings = () => MyPC.save('settings', App.settings);
App.applyGear = () => { if (!App.shift) return; const v = App.shift.me.veh, g = App.settings.gearbox; v.gearbox = g === 'auto' ? null : g; v.mgear = 1; v.stalled = false; };
App.startShift = function () {
    App.ui.hide();
    if (App.shift) { App.shift.dispose(); App.shift = null; }
    const shift = new Shift(App.renderer, App.net, App.quality, { gearbox: App.settings.gearbox, saved: App.saved, start: App.saved && App.saved.at, lang: I18n.lang });
    shift.onScale = () => resize();
    shift.onSound = (k, r, x) => App.sound.event(k, r, x, shift);
    App.shift = shift;
    App.hud.begin(shift, () => App.input.hasPad() && MyPC.gamepad && MyPC.gamepad.label ? '(' + MyPC.gamepad.label(0) + ')' : '(OK)');
    App.sound.begin(shift);
    App.input.clearHeld();
    App.state = 'drive';
    resize();
    MyPC.announce && MyPC.announce(I18n.t('boarded').split(':')[0]);
};
App.pauseShift = function () { if (App.state !== 'drive') return; App.state = 'pause'; App.sound.pause(); App.ui.pause(); };
App.resumeShift = function () { App.ui.hide(); App.input.clearHeld(); App.input.prev.action = true; App.state = 'drive'; App.sound.resume(); };
App.endShift = function () {
    save();
    App.sound.resume(); App.sound.end(); App.hud.end();
    if (App.shift) { App.shift.dispose(); App.shift = null; }
    App.state = 'menu';
    if (App.saved && App.saved.stats && App.saved.stats.earned) MyPC.submitScore && MyPC.submitScore(Math.round(App.saved.stats.earned), {});
    App.ui.title();
};

MyPC.init({
    ownMenu: true,
    onInit: async function (info) {
        App.info = info;
        try {
            I18n.set(info.lang);
            App.quality = qualityFor(info);
            App.renderer = makeRenderer();
            resize();
            window.addEventListener('resize', resize);
            await loadModels(p => MyPC.progress(p * 0.6));
            App.net = await Net.load(p => MyPC.progress(0.6 + p * 0.35));
            App.saved = MyPC.load('taxi', null);
            App.settings = Object.assign({ gearbox: 'auto' }, MyPC.load('settings', null));
            App.hud = new Hud(document.getElementById('hud'));
            App.sound = new Sound(info.volume || { music: 0.7, sfx: 0.8 });
            App.ui = new UI(App, document.getElementById('ui'));
            App.input.menuCb = (a, dev, rep) => {
                if (App.state === 'drive') { if (a === 'cancel' && !rep) App.pauseShift(); return; }
                App.ui.input(a, dev, rep);
            };
            MyPC.progress(1);
            MyPC.ready();
        } catch (e) {
            MyPC.report && MyPC.report(e, { where: 'init' });
            MyPC.fail(String(e && e.message || e));
        }
    },
    onStart: function () {
        App.sound.start();
        startLoop();
        const P = new URLSearchParams(location.search);
        if (P.has('dev')) {   // test hook: ?dev[&gear=manual|clutch][&x=..&z=..][&fresh]
            if (P.get('gear')) App.settings.gearbox = P.get('gear');
            if (P.has('fresh')) App.saved = null;
            if (P.has('x')) App.saved = Object.assign({}, App.saved, { at: { x: +P.get('x'), z: +P.get('z') } });
            App.startShift();
        } else { App.state = 'menu'; App.ui.title(); }
    },
    onPause: function () { stopLoop(); App.sound.pause(); App.paused = true; if (App.state === 'drive') { App.pauseShift(); } },
    onResume: function () { App.paused = false; App.input.clearHeld(); if (App.state !== 'pause') App.sound.resume(); startLoop(); },
    onDestroy: function () {
        save(); stopLoop();
        window.removeEventListener('resize', resize);
        if (App.shift) App.shift.dispose();
        App.sound && App.sound.close();
        App.renderer && App.renderer.dispose();
    },
    onInput: function (action, pressed, repeat, dev) {
        if (action === 'menu' && pressed === false) { if (App.state === 'drive') App.pauseShift(); else if (App.state === 'pause') App.resumeShift(); return; }
        if (action === 'cancel' && pressed && App.state === 'menu' && App.ui.screen === 'title') return false;   // nothing to close: My PC's menu
        App.input.onAction(action, pressed, repeat, dev);
    },
    onVolume: function (v) { App.sound && App.sound.volume(v); }
});
if (MyPC.gamepad) {
    MyPC.gamepad.on('button', (i, pressed, value, dev) => App.input.onButton(i, pressed, value, dev));
    MyPC.gamepad.on('axes', (axes, dev) => App.input.onAxes(axes, dev));
}

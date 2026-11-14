// Menus: title, settings, controls, pause, end of the shift. One list of buttons at a time, moved with ▲ ▼ and
// chosen with OK / A; Back / B goes back. Works with the TV remote alone.
import { I18n } from './i18n.js';
import { LEVEL_IDS } from './level.js';

const next = (list, v) => list[(list.indexOf(v) + 1) % list.length];

const GEARS = ['auto', 'manual', 'clutch'];
const CARS = ['taxi', 'city', 'hatch'];

export class UI {
    constructor(app, root) { this.app = app; this.root = root; this.items = []; this.f = 0; this.back = null; this.screen = ''; }
    show(html, items, back, focus) {
        this.root.innerHTML = html; this.root.style.display = 'block';
        this.items = [...this.root.querySelectorAll('[data-f]')];
        this.acts = items; this.back = back; this.f = Math.min(focus || 0, this.items.length - 1);
        this.paint();
    }
    hide() { this.root.style.display = 'none'; this.root.innerHTML = ''; this.items = []; this.screen = ''; }
    get open() { return this.root.style.display === 'block'; }
    paint() { this.items.forEach((e, i) => e.classList.toggle('focus', i === this.f)); const f = this.items[this.f]; if (f && f.scrollIntoView) f.scrollIntoView({ block: 'nearest' }); }
    input(a, dev, repeat) {
        if (!this.open) return false;
        if (a === 'up' || a === 'left') { this.f = (this.f + this.items.length - 1) % this.items.length; this.paint(); this.app.sound.ui('move'); }
        else if (a === 'down' || a === 'right') { this.f = (this.f + 1) % this.items.length; this.paint(); this.app.sound.ui('move'); }
        else if (a === 'confirm' && !repeat) { const fn = this.acts[this.f]; this.app.sound.ui('ok'); if (fn) fn(); }
        else if ((a === 'cancel' || a === 'menu') && !repeat) { if (this.back) { this.app.sound.ui('back'); this.back(); } else return false; }
        return true;
    }
    gearLabel() { return I18n.t(this.app.settings.gearbox === 'auto' ? 'auto' : this.app.settings.gearbox); }

    title(focus) {
        this.screen = 'title';
        const st = this.app.saved && this.app.saved.stats;
        this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${I18n.t('tag')}</div>
<div class="menu"><div class="btn go" data-f>${I18n.t('start')}</div><div class="btn" data-f>${I18n.t('settings')}</div><div class="btn" data-f>${I18n.t('help')}</div>${st ? `<div class="btn" data-f>${I18n.t('reset')}</div>` : ''}</div>
<div class="mini">${I18n.t('car')} <b>${this.carLabel()}</b> · ${I18n.t('gearbox')} <b>${this.gearLabel()}</b> · ${I18n.t('level')} <b>${I18n.t('lv_' + this.app.settings.level)}</b></div>
${st ? `<div class="mini">${I18n.t('money')} <b>${Math.round(this.app.saved.money)} DH</b> · ${I18n.t('rides')} <b>${st.rides}</b> · ${st.km.toFixed(0)} ${I18n.t('km')}</div>` : ''}
<div class="foot">${I18n.t('credits')}</div></div>`,
        [() => this.app.startShift(), () => this.settings(() => this.title(1)), () => this.controls(() => this.title(2)),
            () => this.confirmReset(() => { this.app.resetCareer(); this.title(); }, () => this.title(3))], null, focus);
    }
    carLabel() { return I18n.t('car_' + (this.app.settings.car || 'taxi')); }
    // every setting in one list: OK changes the value; Back leaves (in a shift: a new car or difficulty starts the shift again)
    settings(back, focus) {
        this.screen = 'settings';
        const S = this.app.settings, sh = this.app.shift, T = sh && sh.taxi;
        if (focus === undefined) this.was = { car: S.car, level: S.level };
        const row = (k, v) => `<div class="btn row" data-f><span>${I18n.t(k)}</span><b>${v}</b></div>`;
        const rows = [
            ['car', this.carLabel(), () => { S.car = next(CARS, S.car); }],
            ['gearbox', this.gearLabel(), () => { S.gearbox = next(GEARS, S.gearbox); if (sh) this.app.applyGear(); }],
            ['level', I18n.t('lv_' + S.level), () => { S.level = next(LEVEL_IDS, S.level); }],
            ['arrows', I18n.t(S.arrows === false ? 'off' : 'on'), () => { S.arrows = S.arrows === false; if (sh) sh.arrows = S.arrows; }],
            ['hudSize', I18n.t('hs_' + (S.hud || 'normal')), () => { S.hud = next(['small', 'normal', 'large', 'xl'], S.hud || 'normal'); this.app.applyHud(); }]
        ];
        if (T) rows.push(['limiter', T.limiter ? T.limiter + ' km/h' : I18n.t('off'), () => { T.limiter = T.limiter ? 0 : 50; }]);
        const done = () => {
            const ch = this.was && (this.was.car !== S.car || this.was.level !== S.level);
            this.was = null;
            if (sh && ch) this.app.startShift(); else back();
        };
        this.show(`<div class="panel pause"><h2>${I18n.t('settings')}</h2><p class="small">${I18n.t('lv_' + S.level + '_d')}</p>${rows.map(r => row(r[0], r[1])).join('')}
<div class="btn" data-f>${I18n.t('back')}</div></div>`,
        rows.map((r, i) => () => { r[2](); this.app.saveSettings(); this.settings(back, i); }).concat([done]), done, focus);
    }
    confirmReset(yes, no) {
        this.show(`<div class="panel pause"><h2>${I18n.t('reset')}</h2><p>${I18n.t('resetAsk')}</p><div class="btn" data-f>${I18n.t('no')}</div><div class="btn" data-f>${I18n.t('yes')}</div></div>`,
            [no, yes], no, 0);
    }
    controls(back) {
        this.screen = 'controls';
        this.show(`<div class="panel"><h2>${I18n.t('ctlTitle')}</h2><p>${I18n.t('ctlDrive')}</p><p>${I18n.t('ctlAct')}</p><p>${I18n.t('ctlGear')}</p><p>${I18n.t('ctlRemote')}</p><p class="btest">${I18n.t('btnTest')}: <b>${I18n.t('btnNone')}</b></p>
<h3>${I18n.t('rules')}</h3><p class="small">${I18n.t('rulesText')}</p><div class="btn" data-f>${I18n.t('back')}</div></div>`, [back], back);
    }
    pause(focus) {
        this.screen = 'pause';
        const T = this.app.shift.taxi, s = T.stats;
        const row = (k, v) => `<div class="st"><span>${I18n.t(k)}</span><b>${v}</b></div>`;
        this.show(`<div class="panel pause"><h2>${I18n.t('paused')}</h2>${this.app.bugMsg ? `<p class="bugmsg">${I18n.line(this.app.bugMsg)}</p>` : ''}
<div class="stats">${row('money', Math.round(T.money) + ' DH')}${row('rides', s.rides)}${row('earned', Math.round(s.earned) + ' DH')}${row('fines', Math.round(s.fines) + ' DH')}${row('repairs', Math.round(s.repairs) + ' DH')}${row('fuelSpent', Math.round(s.fuel) + ' DH')}${row('km', s.km.toFixed(1))}${row('level', I18n.t('lv_' + this.app.settings.level))}</div>
<div class="btn go" data-f>${I18n.t('resume')}</div><div class="btn" data-f>${I18n.t('settings')}</div><div class="btn" data-f>${I18n.t('help')}</div><div class="btn" data-f>${I18n.t('bugReport')}</div><div class="btn" data-f>${I18n.t('reset')}</div><div class="btn" data-f>${I18n.t('quit')}</div></div>`,
        [() => this.app.resumeShift(), () => this.settings(() => this.pause(1)), () => this.controls(() => this.pause(2)), () => this.app.reportBug(),
            () => this.confirmReset(() => this.app.resetCareer(), () => this.pause(4)), () => this.app.endShift()], () => this.app.resumeShift(), focus);
    }
}

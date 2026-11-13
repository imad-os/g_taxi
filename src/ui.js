// Menus: title, settings, controls, pause, end of the shift. One list of buttons at a time, moved with ▲ ▼ and
// chosen with OK / A; Back / B goes back. Works with the TV remote alone.
import { I18n } from './i18n.js';

const GEARS = ['auto', 'manual', 'clutch'];

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
    paint() { this.items.forEach((e, i) => e.classList.toggle('focus', i === this.f)); }
    input(a, dev, repeat) {
        if (!this.open) return false;
        if (a === 'up' || a === 'left') { this.f = (this.f + this.items.length - 1) % this.items.length; this.paint(); this.app.sound.ui('move'); }
        else if (a === 'down' || a === 'right') { this.f = (this.f + 1) % this.items.length; this.paint(); this.app.sound.ui('move'); }
        else if (a === 'confirm' && !repeat) { const fn = this.acts[this.f]; this.app.sound.ui('ok'); if (fn) fn(); }
        else if ((a === 'cancel' || a === 'menu') && !repeat) { if (this.back) { this.app.sound.ui('back'); this.back(); } else return false; }
        return true;
    }
    gearLabel() { return I18n.t(this.app.settings.gearbox === 'auto' ? 'auto' : this.app.settings.gearbox); }

    title() {
        this.screen = 'title';
        const st = this.app.saved && this.app.saved.stats;
        this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${I18n.t('tag')}</div>
<div class="menu"><div class="btn go" data-f>${I18n.t('start')}</div><div class="btn" data-f>${I18n.t('gearbox')}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${I18n.t('help')}</div></div>
${st ? `<div class="mini">${I18n.t('money')} <b>${Math.round(this.app.saved.money)} DH</b> · ${I18n.t('rides')} <b>${st.rides}</b> · ${st.km.toFixed(0)} ${I18n.t('km')}</div>` : ''}
<div class="foot">${I18n.t('credits')}</div></div>`,
        [() => this.app.startShift(), () => this.cycleGear(() => this.title(), 1), () => this.controls(() => this.title())], null);
    }
    cycleGear(again, focus) {
        const s = this.app.settings;
        s.gearbox = GEARS[(GEARS.indexOf(s.gearbox) + 1) % GEARS.length];
        this.app.saveSettings();
        if (this.app.shift) this.app.applyGear();
        again(); this.f = focus; this.paint();
    }
    controls(back) {
        this.show(`<div class="panel"><h2>${I18n.t('ctlTitle')}</h2><p>${I18n.t('ctlDrive')}</p><p>${I18n.t('ctlAct')}</p><p>${I18n.t('ctlGear')}</p><p>${I18n.t('ctlRemote')}</p>
<h3>${I18n.t('rules')}</h3><p class="small">${I18n.t('rulesText')}</p><div class="btn" data-f>${I18n.t('back')}</div></div>`, [back], back);
    }
    pause() {
        this.screen = 'pause';
        const T = this.app.shift.taxi, s = T.stats;
        const row = (k, v) => `<div class="st"><span>${I18n.t(k)}</span><b>${v}</b></div>`;
        this.show(`<div class="panel pause"><h2>${I18n.t('paused')}</h2>
<div class="stats">${row('money', Math.round(T.money) + ' DH')}${row('rides', s.rides)}${row('earned', Math.round(s.earned) + ' DH')}${row('fines', Math.round(s.fines) + ' DH')}${row('repairs', Math.round(s.repairs) + ' DH')}${row('fuelSpent', Math.round(s.fuel) + ' DH')}${row('km', s.km.toFixed(1))}</div>
<div class="btn go" data-f>${I18n.t('resume')}</div><div class="btn" data-f>${I18n.t('gearbox')}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${I18n.t('limiter')}: <b>${T.limiter ? T.limiter + ' km/h' : I18n.t('off')}</b></div><div class="btn" data-f>${I18n.t('help')}</div><div class="btn" data-f>${I18n.t('quit')}</div></div>`,
        [() => this.app.resumeShift(), () => this.cycleGear(() => this.pause(), 1), () => { T.limiter = T.limiter ? 0 : 50; this.pause(); this.f = 2; this.paint(); },
            () => this.controls(() => this.pause()), () => this.app.endShift()], () => this.app.resumeShift());
    }
}

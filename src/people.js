// People on the pavements: simple low-poly figures (one merged mesh + one arm each), a small fixed pool. Waiting
// passengers raise their arm and wave at the taxi; the others walk. Six clothing colours, one material.
import * as THREE from 'three';
import { worldMaterial } from '../core/src/shaders.js';

const CLOTHES = [[[200, 60, 50], [40, 50, 80]], [[230, 220, 200], [90, 70, 50]], [[60, 120, 180], [50, 50, 55]], [[150, 60, 140], [30, 30, 40]], [[245, 245, 240], [245, 245, 240]], [[80, 140, 80], [60, 60, 70]]];
const SKIN = [[200, 150, 110], [170, 120, 85], [215, 170, 130]];

function boxInto(P, N, C, I, x0, y0, z0, x1, y1, z1, col) {
    const v = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
    const F = [[0, 3, 2, 1, 0, 0, -1], [4, 5, 6, 7, 0, 0, 1], [0, 4, 7, 3, -1, 0, 0], [1, 2, 6, 5, 1, 0, 0], [3, 7, 6, 2, 0, 1, 0], [0, 1, 5, 4, 0, -1, 0]];
    for (const f of F) {
        const b = P.length / 3;
        for (let k = 0; k < 4; k++) { const p = v[f[k]]; P.push(p[0], p[1], p[2]); N.push(f[4] * 127, f[5] * 127, f[6] * 127, 0); C.push(col[0], col[1], col[2], 0); }
        I.push(b, b + 1, b + 2, b, b + 2, b + 3);
    }
}
function geo(parts) {
    const P = [], N = [], C = [], I = [];
    for (const p of parts) boxInto(P, N, C, I, ...p);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(N), 4, true));
    g.setAttribute('col', new THREE.BufferAttribute(new Uint8Array(C), 4, true));
    g.setIndex(I); g.computeBoundingSphere();
    return g;
}

export class People {
    constructor(scene, max = 8) {
        this.scene = scene;
        this.mat = worldMaterial();
        this.bodies = CLOTHES.map((c, k) => {
            const sk = SKIN[k % SKIN.length];
            return geo([[-0.17, 0, -0.1, -0.02, 0.85, 0.1, c[1]], [0.02, 0, -0.1, 0.17, 0.85, 0.1, c[1]], [-0.22, 0.85, -0.13, 0.22, 1.45, 0.13, c[0]],
                [-0.3, 0.88, -0.07, -0.22, 1.42, 0.07, c[0]], [-0.11, 1.46, -0.11, 0.11, 1.72, 0.11, sk], [-0.12, 1.68, -0.12, 0.12, 1.76, 0.12, [40, 30, 25]]]);
        });
        this.arms = CLOTHES.map((c, k) => geo([[-0.04, -0.55, -0.07, 0.04, 0.02, 0.07, c[0]], [-0.045, -0.68, -0.06, 0.045, -0.55, 0.06, SKIN[k % SKIN.length]]]));
        this.pool = [];
        for (let k = 0; k < max; k++) {
            const g = new THREE.Group();
            const body = new THREE.Mesh(this.bodies[k % this.bodies.length], this.mat);
            const arm = new THREE.Mesh(this.arms[k % this.arms.length], this.mat);
            arm.position.set(0.26, 1.42, 0);
            g.add(body); g.add(arm); g.visible = false;
            scene.add(g);
            this.pool.push({ g, body, arm });
        }
    }
    update(dt, peds, camPos) {
        for (let k = 0; k < this.pool.length; k++) {
            const P = this.pool[k], p = peds[k];
            if (!p || p.state === 'in' || p.state === 'gone' || Math.hypot(p.x - camPos.x, p.z - camPos.z) > 260) { P.g.visible = false; continue; }
            P.g.visible = true;
            if (P.body.geometry !== this.bodies[p.kind]) { P.body.geometry = this.bodies[p.kind]; P.arm.geometry = this.arms[p.kind]; }
            P.g.position.set(p.x, p.y, p.z);
            P.g.rotation.y = p.yaw;
            if (p.state === 'wait') { P.arm.rotation.z = Math.PI * 0.85 + Math.sin(p.t * 7) * 0.25; P.arm.rotation.x = 0; }   // raised, waving
            else { P.arm.rotation.z = 0.1; P.arm.rotation.x = Math.sin(p.t * 8) * 0.5; }                                     // walking swing
            P.body.position.y = p.state === 'wait' ? 0 : Math.abs(Math.sin(p.t * 8)) * 0.04;
        }
    }
    dispose() {
        for (const P of this.pool) this.scene.remove(P.g);
        for (const g of this.bodies.concat(this.arms)) g.dispose();
        this.mat.dispose();
    }
}

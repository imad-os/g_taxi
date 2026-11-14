// The way to go, like a GPS (Settings > Route arrows, on by default): green chevrons painted on the road along the route
// for the next ~150 m, and the next turn (left / right / arrive) with its distance for the HUD. Only while a passenger
// is on board. One instanced mesh of 18 flat chevrons, placed again 4 times a second (no allocation per frame).
import * as THREE from 'three';

const N = 14, STEP = 12, FIRST = 12;

export class RouteGuide {
    constructor(scene, net) {
        this.net = net; this.scene = scene;
        // an arrow pointing +z (5.2 m long, 2.4 m wide: it is seen at a low angle), lying flat
        const s = new THREE.Shape();
        s.moveTo(0, 2.6); s.lineTo(1.2, 0.6); s.lineTo(0.38, 0.6); s.lineTo(0.38, -2.6); s.lineTo(-0.38, -2.6); s.lineTo(-0.38, 0.6); s.lineTo(-1.2, 0.6); s.closePath();
        const g = new THREE.ShapeGeometry(s); g.rotateX(Math.PI / 2);   // shape's +y -> world +z (the way to go)
        this.mesh = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ color: 0x2cff8f, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide,
            polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), N);
        this.mesh.count = 0; this.mesh.frustumCulled = false; this.mesh.renderOrder = 2;
        scene.add(this.mesh);
        this.m = new THREE.Matrix4(); this.qt = new THREE.Quaternion(); this.p = new THREE.Vector3(); this.sc = new THREE.Vector3(1, 1, 1); this.up = new THREE.Vector3(0, 1, 0);
        this.a = {}; this.q = {};
        this.t = 0;
        this.turn = null;    // { dir: 'left' | 'right' | 'uturn' | 'arrive', dist (m), edge (the street to take) } or null
    }

    // R = the ride (route { edges: [[e, dir]] }, e, s), q = net.query under the taxi, hd = the taxi's way along q.edge (+1 / -1)
    update(dt, R, q, on, hd) {
        if ((this.t -= dt) > 0) return;
        this.t = 0.25;
        if (!R || !R.route || R.ped.state !== 'in' || q.edge < 0) { this.mesh.count = 0; this.turn = null; return; }
        const net = this.net, E = R.route.edges, a = this.a, qq = this.q;
        // walk the route from the taxi: arrows every STEP m, the first turn found on the way
        let k = 0, walked = 0, turn = null, nextAt = FIRST;
        // the route starts the other way: turn around first
        if (E[0][0] === q.edge && hd && E[0][1] !== hd) turn = { dir: 'uturn', dist: 0, edge: q.edge };
        for (let r = 0; r < E.length && (k < N || !turn) && walked < 1500; r++) {
            const e = E[r][0], dir = E[r][1], L = net.eLen[e];
            let s0 = dir > 0 ? 0 : L, s1 = dir > 0 ? L : 0;
            if (r === 0 && e === q.edge) s0 = q.s;
            const last = r === E.length - 1;
            if (last && e === R.e) s1 = R.s;
            const len = Math.abs(s1 - s0);
            // arrows on this street
            const off = net.eOne[e] ? 0 : -dir * net.eHw[e] * 0.5;    // the right-hand lane of a two-way street
            while (on && k < N && nextAt <= walked + len && nextAt < 160 && (!turn || nextAt < turn.dist + 30)) {   // past the first turn: 30 m (shows which way)
                const s = s0 + dir * (nextAt - walked);
                net.at(e, s, off, a);
                net.query(a.x, a.z, -1, qq);
                this.p.set(a.x, qq.y + 0.04, a.z);
                this.qt.setFromAxisAngle(this.up, Math.atan2(a.fx * dir, a.fz * dir));
                this.m.compose(this.p, this.qt, this.sc);
                this.mesh.setMatrixAt(k++, this.m);
                nextAt += STEP;
            }
            walked += len;
            if (!turn) {
                if (last) turn = { dir: 'arrive', dist: walked, edge: -1 };
                else {
                    // the heading leaving this street vs entering the next one
                    const e2 = E[r + 1][0], d2 = E[r + 1][1];
                    net.at(e, dir > 0 ? Math.max(0, L - 6) : Math.min(L, 6), 0, a); const h1 = Math.atan2(a.fx * dir, a.fz * dir);
                    const L2 = net.eLen[e2];
                    net.at(e2, d2 > 0 ? Math.min(L2, 8) : Math.max(0, L2 - 8), 0, a); const h2 = Math.atan2(a.fx * d2, a.fz * d2);
                    let dh = h2 - h1; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
                    // world: x east, z south; heading atan2(fx, fz): turning left = heading grows
                    if (Math.abs(dh) > 0.45) turn = { dir: Math.abs(dh) > 2.4 ? 'uturn' : dh > 0 ? 'left' : 'right', dist: walked, edge: e2 };
                }
            }
        }
        this.mesh.count = on ? k : 0;
        this.mesh.instanceMatrix.needsUpdate = true;
        this.turn = turn;
    }
    dispose() { this.scene.remove(this.mesh); this.mesh.geometry.dispose(); this.mesh.material.dispose(); }
}

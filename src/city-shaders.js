// City streets: asphalt with lane lines for its own number of lanes (one-way streets have no centre line), grey
// kerbs, stone pavements, plain asphalt in junctions (every road drawn there gets the same colour, so overlapping
// roads cannot flicker), zebra crossings where a street meets a junction. Shares the uniforms of core/src/shaders.js.
import * as THREE from 'three';
import { U } from '../core/src/shaders.js';

const COMMON = `
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
varying float vFog;
`;

export function cityRoadMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: U,
        vertexShader: COMMON + `
attribute vec4 ds;   // x = d (m, left +), y = s (m along the street), z = half width, w = flags (1 junction, 2 one-way, 4 zebra side)
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
}`,
        fragmentShader: COMMON + `
varying vec4 vDs; varying vec3 vWp;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  float d = vDs.x, s = vDs.y, hw = vDs.z, fl = vDs.w;
  float junc = step(0.5, mod(fl, 2.0));
  float one = step(0.5, mod(floor(fl / 2.0), 2.0));
  float zebra = step(0.5, mod(floor(fl / 4.0), 2.0));
  float n = hash(floor(vWp.xz * 12.0)) * 0.035 + (sin(vWp.x * 0.21 + sin(vWp.z * 0.13) * 2.0) * 0.5 + 0.5) * 0.03;
  vec3 asph = vec3(0.25, 0.255, 0.265) + n;
  vec3 c = asph;
  float ad = abs(d);
  float fw = fwidth(d) * 1.2 + 0.02;
  if (junc < 0.5) {
    // lanes: one-way streets spread their lanes over the whole width, two-way streets per half
    float span = one > 0.5 ? hw * 2.0 : hw;
    float lanes = max(1.0, floor(span / 3.3 + 0.3));
    float lw = span / lanes;
    float x = one > 0.5 ? d + hw : ad;
    float lane = abs(fract(x / lw + 0.5) - 0.5) * lw;
    float dash = step(0.5, fract(s / 8.0));
    float inner = step(lw * 0.5, x) * (1.0 - step(span - lw * 0.5, x));
    c = mix(c, vec3(0.9), (1.0 - smoothstep(0.06, 0.06 + fw, lane)) * dash * inner * step(ad, hw));
    // centre line: solid white (two-way)
    c = mix(c, vec3(0.92), (1.0 - smoothstep(0.07, 0.07 + fw, ad)) * (1.0 - one));
    // edge lines
    c = mix(c, vec3(0.86), (1.0 - smoothstep(0.06, 0.06 + fw, abs(ad - (hw - 0.35)))) * step(1.0, ad));
    // zebra crossing just before a junction
    float zb = zebra * step(ad, hw) * step(0.5, fract(d / 1.0));
    c = mix(c, vec3(0.93), zb);
    // kerb + pavement
    float kerb = step(hw, ad) * (1.0 - step(hw + 0.35, ad));
    c = mix(c, vec3(0.62, 0.62, 0.6), kerb);
    float pav = step(hw + 0.35, ad);
    vec2 sl = fract(vec2(s, ad) / 0.9);
    float joint = step(0.92, max(sl.x, sl.y));
    vec3 pc = vec3(0.7, 0.66, 0.6) * (0.94 + hash(floor(vec2(s, ad) / 0.9)) * 0.1) * (1.0 - joint * 0.22);
    c = mix(c, pc, pav);
    c = mix(c, vec3(0.42, 0.38, 0.3), step(hw + 3.5, ad));   // the verge beyond the pavement
  }
  float sunk = max(uSun.y, 0.0);
  vec3 lit = c * (mix(uGround, uSky, 0.8) * 0.55 + uSunCol * sunk * (1.0 - uNight * 0.85));
  if (uNight > 0.5) {
    float sL = mod(s, 40.0);
    float pl = exp(-pow(min(sL, 40.0 - sL) / 8.0, 2.0)) * exp(-pow((ad - hw) / 7.0, 2.0));
    lit += c * vec3(1.0, 0.78, 0.45) * (pl * 1.6 + junc * 0.6) * uNight;
  }
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`,
        extensions: { derivatives: true }
    });
}

// Traffic light lamps and other small unlit glowing parts: instance colour, no lighting
export function lampMaterial() {
    return new THREE.MeshBasicMaterial({ color: 0xffffff });
}

// 1D shallow-water simulation of a tsunami crossing an ocean and running up a beach.
// Wave speed comes from the physics (sqrt(g * depth)), so slowing and growing near shore are not scripted.

export const CELLS = 1200;
export const CELL_METERS = 50;
export const STEP_SECONDS = 0.5;
export const QUAKE_KM = 25;
export const TOWN_START_KM = 55.2;
export const TOWN_END_KM = 56.7;
export const TOWN_ELEVATION = 4;

const GRAVITY = 9.81;
const DRY = 0.01;
const NEAR_DRY = 0.1;
const FRICTION = 0.001;
const SPONGE_CELLS = 120;

export type QuakeSize = "small" | "medium" | "huge";

const QUAKE_METERS: Record<QuakeSize, number> = { small: 2.5, medium: 7, huge: 14 };

export type Sim = {
  bed: Float64Array;
  depth: Float64Array;
  momentum: Float64Array;
  rest: Float64Array;
  seconds: number;
  runup: number;
  frontKm: number;
  deepPeak: number;
  nearPeak: number;
};

function smooth(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

export function bedAt(km: number) {
  if (km < 44) return -150;
  if (km < 50) return -150 + 135 * smooth(44, 50, km);
  if (km < 54) return -15 + 15 * smooth(50, 54, km);
  if (km < TOWN_START_KM) return TOWN_ELEVATION * smooth(54, TOWN_START_KM, km);
  if (km < TOWN_END_KM) return TOWN_ELEVATION;
  return TOWN_ELEVATION + 33 * smooth(TOWN_END_KM, 60, km);
}

export const kmAt = (i: number) => ((i + 0.5) * CELL_METERS) / 1000;

export function createSim(): Sim {
  const bed = new Float64Array(CELLS);
  const depth = new Float64Array(CELLS);
  for (let i = 0; i < CELLS; i++) {
    bed[i] = bedAt(kmAt(i));
    depth[i] = Math.max(0, -bed[i]);
  }
  return {
    bed,
    depth,
    momentum: new Float64Array(CELLS),
    rest: depth.slice(),
    seconds: 0,
    runup: 0,
    frontKm: QUAKE_KM,
    deepPeak: 0,
    nearPeak: 0,
  };
}

// The seafloor jolts up on the ocean side and down on the shore side, so the shore
// sees the trough first. That is why the water pulls back before the wave arrives.
export function triggerQuake(sim: Sim, size: QuakeSize) {
  const lift = QUAKE_METERS[size];
  const width = 4;
  for (let i = 0; i < CELLS; i++) {
    if (sim.rest[i] <= 0) continue;
    const km = kmAt(i);
    const hump = Math.exp(-(((km - QUAKE_KM + width) / width) ** 2));
    const trough = Math.exp(-(((km - QUAKE_KM - width) / width) ** 2));
    sim.depth[i] = sim.rest[i] + lift * (hump - trough);
  }
}

export function surfaceAt(sim: Sim, i: number) {
  return sim.bed[i] + sim.depth[i];
}

function limitedSlope(back: number, forward: number) {
  if (back * forward <= 0) return 0;
  return Math.abs(back) < Math.abs(forward) ? back : forward;
}

// Second-order finite-volume shallow-water rates (HLL fluxes with hydrostatic reconstruction). It
// conserves water and momentum, keeps a still ocean still over a sloped floor, handles wetting dry
// land, and keeps a wave sharp enough that its growth near shore is not smeared away.
function computeRates(bed: Float64Array, depth: Float64Array, momentum: Float64Array, dH: Float64Array, dQ: Float64Array) {
  dH.fill(0);
  dQ.fill(0);

  const faceDepthLow = new Float64Array(CELLS);
  const faceDepthHigh = new Float64Array(CELLS);
  const faceSpeedLow = new Float64Array(CELLS);
  const faceSpeedHigh = new Float64Array(CELLS);
  const velocity = new Float64Array(CELLS);
  for (let i = 0; i < CELLS; i++) velocity[i] = depth[i] > DRY ? momentum[i] / depth[i] : 0;

  for (let i = 0; i < CELLS; i++) {
    faceDepthLow[i] = faceDepthHigh[i] = depth[i];
    faceSpeedLow[i] = faceSpeedHigh[i] = velocity[i];
    if (i === 0 || i === CELLS - 1) continue;
    if (depth[i - 1] < NEAR_DRY || depth[i] < NEAR_DRY || depth[i + 1] < NEAR_DRY) continue;
    const surfaceSlope = limitedSlope(bed[i] + depth[i] - bed[i - 1] - depth[i - 1], bed[i + 1] + depth[i + 1] - bed[i] - depth[i]);
    const speedSlope = limitedSlope(velocity[i] - velocity[i - 1], velocity[i + 1] - velocity[i]);
    faceDepthLow[i] = Math.max(0, depth[i] - 0.5 * surfaceSlope);
    faceDepthHigh[i] = Math.max(0, depth[i] + 0.5 * surfaceSlope);
    faceSpeedLow[i] = velocity[i] - 0.5 * speedSlope;
    faceSpeedHigh[i] = velocity[i] + 0.5 * speedSlope;
  }

  for (let i = 0; i < CELLS - 1; i++) {
    const j = i + 1;
    const top = Math.max(bed[i], bed[j]);
    const hL = Math.max(0, faceDepthHigh[i] + bed[i] - top);
    const hR = Math.max(0, faceDepthLow[j] + bed[j] - top);
    if (hL < DRY && hR < DRY) continue;

    const uL = faceSpeedHigh[i];
    const uR = faceSpeedLow[j];
    const cL = Math.sqrt(GRAVITY * hL);
    const cR = Math.sqrt(GRAVITY * hR);
    const sL = Math.min(uL - cL, uR - cR);
    const sR = Math.max(uL + cL, uR + cR);

    const fHL = hL * uL;
    const fHR = hR * uR;
    const fQL = hL * uL * uL + 0.5 * GRAVITY * hL * hL;
    const fQR = hR * uR * uR + 0.5 * GRAVITY * hR * hR;

    let fH: number;
    let fQ: number;
    if (sL >= 0) {
      fH = fHL;
      fQ = fQL;
    } else if (sR <= 0) {
      fH = fHR;
      fQ = fQR;
    } else {
      const span = sR - sL;
      fH = (sR * fHL - sL * fHR + sL * sR * (hR - hL)) / span;
      fQ = (sR * fQL - sL * fQR + sL * sR * (hR * uR - hL * uL)) / span;
    }

    dH[i] -= fH;
    dH[j] += fH;
    dQ[i] -= fQ + 0.5 * GRAVITY * (faceDepthHigh[i] * faceDepthHigh[i] - hL * hL);
    dQ[j] += fQ + 0.5 * GRAVITY * (faceDepthLow[j] * faceDepthLow[j] - hR * hR);
  }

  // Solid wall at the ocean edge: its pressure balances the water column so a still sea stays still.
  dQ[0] += 0.5 * GRAVITY * faceDepthLow[0] * faceDepthLow[0];
}

function applyRates(depth: Float64Array, momentum: Float64Array, dH: Float64Array, dQ: Float64Array) {
  const ratio = STEP_SECONDS / CELL_METERS;
  for (let i = 0; i < CELLS; i++) {
    depth[i] = Math.max(0, depth[i] + ratio * dH[i]);
    momentum[i] = depth[i] < DRY ? 0 : momentum[i] + ratio * dQ[i];
  }
}

export function stepSim(sim: Sim) {
  const { bed, depth, momentum, rest } = sim;
  const dH = new Float64Array(CELLS);
  const dQ = new Float64Array(CELLS);
  const startDepth = depth.slice();
  const startMomentum = momentum.slice();

  // Two-stage time step (Heun), which the second-order fluxes need to stay stable.
  computeRates(bed, depth, momentum, dH, dQ);
  applyRates(depth, momentum, dH, dQ);
  computeRates(bed, depth, momentum, dH, dQ);
  applyRates(depth, momentum, dH, dQ);

  for (let i = 0; i < CELLS; i++) {
    depth[i] = Math.max(0, 0.5 * (startDepth[i] + depth[i]));
    let q = 0.5 * (startMomentum[i] + momentum[i]);
    if (depth[i] < DRY) {
      q = 0;
    } else {
      const u = q / depth[i];
      q /= 1 + (STEP_SECONDS * FRICTION * Math.abs(u)) / Math.max(depth[i], 0.5);
    }
    momentum[i] = q;
  }

  // Absorb the half of the wave heading out to sea so it never bounces back from the map edge.
  for (let i = 0; i < SPONGE_CELLS; i++) {
    const k = 0.04 * (1 - i / SPONGE_CELLS);
    depth[i] = rest[i] + (depth[i] - rest[i]) * (1 - k);
    momentum[i] *= 1 - k;
  }

  sim.seconds += STEP_SECONDS;

  for (let i = CELLS - 1; i >= 0; i--) {
    if (depth[i] > 0.05 && bed[i] > sim.runup) sim.runup = bed[i];
    if (Math.abs(surfaceAt(sim, i)) > 0.25 && rest[i] > 0 && kmAt(i) > sim.frontKm) sim.frontKm = kmAt(i);
    const km = kmAt(i);
    if (km >= 34 && km < 44 && sim.seconds > 200) sim.deepPeak = Math.max(sim.deepPeak, surfaceAt(sim, i));
    if (km >= 47 && km < 53) sim.nearPeak = Math.max(sim.nearPeak, surfaceAt(sim, i));
  }
}

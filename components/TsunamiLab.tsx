"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CELLS,
  QUAKE_KM,
  TOWN_ELEVATION,
  TOWN_END_KM,
  TOWN_START_KM,
  createSim,
  kmAt,
  stepSim,
  surfaceAt,
  triggerQuake,
  type QuakeSize,
  type Sim,
} from "@/lib/tsunamiSim";

const WIDTH = 1000;
const HEIGHT = 460;
const SEA_Y = 235;
const LAND_SCALE = 5.5;
const SHALLOW_METERS = 6;
const DEEP_SCALE = 170 / 144;
const MAP_KM = 60;
const BOAT_KM = 33;
const LAST_STEP = 3600;
const STEPS_PER_SECOND = 80;
const SLOW_STEPS_PER_SECOND = 30;
const FEET_PER_METER = 3.281;
const MAX_BOAT_TILT = 0.2;
const WAVE_SPLIT_SECONDS = 180;

const SIZES: { id: QuakeSize; label: string }[] = [
  { id: "small", label: "Small" },
  { id: "medium", label: "Medium" },
  { id: "huge", label: "Huge" },
];

const FACTS = [
  {
    title: "What makes a tsunami?",
    body: "An earthquake under the ocean can make the seafloor jump. That shoves all the water above it, and waves spread out in every direction. Landslides and volcanoes can do it too.",
  },
  {
    title: "Why does it grow?",
    body: "In deep water a tsunami can go as fast as a jet plane, about 500 mph, but may be only a few feet tall. Near shore the front slows to about car speed, the back catches up, and the water piles up higher.",
  },
  {
    title: "Nature's warning signs",
    body: "Strong shaking from an earthquake. The ocean pulling way back and showing the seafloor. A loud roar, like a train. Any one of these means it's time to go.",
  },
  {
    title: "What should you do?",
    body: "Go to high ground or far inland right away. Stay there until officials say it's safe, because a tsunami is a series of waves and the first one is often not the biggest.",
  },
];

const yOf = (z: number) => {
  if (z >= 0) return SEA_Y - z * LAND_SCALE;
  const d = -z;
  if (d <= SHALLOW_METERS) return SEA_Y + d * LAND_SCALE;
  return SEA_Y + SHALLOW_METERS * LAND_SCALE + (d - SHALLOW_METERS) * DEEP_SCALE;
};
// The shore side of the map is stretched so the town has room; the open ocean is squeezed.
const xOfKm = (km: number) => {
  if (km < 44) return (km / 44) * 540;
  if (km < 54) return 540 + ((km - 44) / 10) * 190;
  return 730 + ((km - 54) / (MAP_KM - 54)) * 270;
};
const xOf = (i: number) => xOfKm(kmAt(i));
const cellAt = (km: number) => Math.min(CELLS - 1, Math.round((km / MAP_KM) * CELLS));

function drawHouse(ctx: CanvasRenderingContext2D, x: number, y: number, wall: string, roof: string) {
  ctx.fillStyle = wall;
  ctx.fillRect(x - 11, y - 16, 22, 16);
  ctx.fillStyle = roof;
  ctx.beginPath();
  ctx.moveTo(x - 14, y - 16);
  ctx.lineTo(x, y - 27);
  ctx.lineTo(x + 14, y - 16);
  ctx.fill();
  ctx.fillStyle = "#1e293b";
  ctx.fillRect(x - 3, y - 9, 6, 9);
}

const labelFont = (scale: number) => `600 ${Math.max(15, 11 / scale)}px system-ui, sans-serif`;

function drawLabel(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string, scale: number) {
  ctx.fillStyle = color;
  ctx.font = labelFont(scale);
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
}

function drawScene(ctx: CanvasRenderingContext2D, sim: Sim, quakeAge: number | null, scale: number) {
  const sky = ctx.createLinearGradient(0, 0, 0, SEA_Y);
  sky.addColorStop(0, "#38bdf8");
  sky.addColorStop(1, "#e0f2fe");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = "#fde047";
  ctx.beginPath();
  ctx.arc(120, 62, 30, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#c9a66b";
  ctx.beginPath();
  ctx.moveTo(0, HEIGHT);
  for (let i = 0; i < CELLS; i += 2) ctx.lineTo(xOf(i), yOf(sim.bed[i]));
  ctx.lineTo(WIDTH, yOf(sim.bed[CELLS - 1]));
  ctx.lineTo(WIDTH, HEIGHT);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#4ade80";
  ctx.lineWidth = 5;
  ctx.beginPath();
  for (let i = cellAt(54.2); i < CELLS; i += 2) ctx.lineTo(xOf(i), yOf(sim.bed[i]) + 2);
  ctx.stroke();

  const townY = yOf(TOWN_ELEVATION);
  const townWidth = TOWN_END_KM - TOWN_START_KM;
  drawHouse(ctx, xOfKm(TOWN_START_KM + townWidth * 0.2), townY, "#fef3c7", "#dc2626");
  drawHouse(ctx, xOfKm(TOWN_START_KM + townWidth * 0.5), townY, "#fce7f3", "#7c3aed");
  drawHouse(ctx, xOfKm(TOWN_START_KM + townWidth * 0.8), townY, "#dbeafe", "#ea580c");

  const peakX = xOfKm(59.6);
  const peakY = yOf(sim.bed[cellAt(59.6)]);
  ctx.fillStyle = "#15803d";
  ctx.fillRect(peakX - 1, peakY - 24, 2, 24);
  ctx.beginPath();
  ctx.moveTo(peakX + 1, peakY - 24);
  ctx.lineTo(peakX + 1, peakY - 12);
  ctx.lineTo(peakX - 15, peakY - 18);
  ctx.fill();

  for (const km of [58.9, 59.1, 59.3]) {
    const x = xOfKm(km);
    const y = yOf(sim.bed[cellAt(km)]);
    ctx.fillStyle = "#1e3a8a";
    ctx.fillRect(x - 2, y - 12, 4, 10);
    ctx.fillStyle = "#fcd34d";
    ctx.beginPath();
    ctx.arc(x, y - 15, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  const water = ctx.createLinearGradient(0, SEA_Y - 80, 0, HEIGHT);
  water.addColorStop(0, "rgba(14, 165, 233, 0.92)");
  water.addColorStop(1, "rgba(12, 74, 110, 0.97)");
  ctx.fillStyle = water;
  ctx.beginPath();
  ctx.moveTo(0, yOf(sim.bed[0]));
  for (let i = 0; i < CELLS; i++) ctx.lineTo(xOf(i), yOf(sim.depth[i] > 0.02 ? surfaceAt(sim, i) : sim.bed[i]));
  for (let i = CELLS - 1; i >= 0; i -= 2) ctx.lineTo(xOf(i), yOf(sim.bed[i]));
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  let drawing = false;
  for (let i = 0; i < CELLS; i++) {
    if (sim.depth[i] > 0.02) {
      const y = yOf(surfaceAt(sim, i));
      if (drawing) ctx.lineTo(xOf(i), y);
      else ctx.moveTo(xOf(i), y);
      drawing = true;
    } else {
      drawing = false;
    }
  }
  ctx.stroke();

  const boat = cellAt(BOAT_KM);
  const slope = Math.atan2(yOf(surfaceAt(sim, boat + 8)) - yOf(surfaceAt(sim, boat - 8)), xOf(boat + 8) - xOf(boat - 8));
  const tilt = Math.max(-MAX_BOAT_TILT, Math.min(MAX_BOAT_TILT, slope));
  ctx.save();
  ctx.translate(xOf(boat), yOf(surfaceAt(sim, boat)));
  ctx.rotate(tilt);
  ctx.fillStyle = "#7c2d12";
  ctx.beginPath();
  ctx.moveTo(-16, -6);
  ctx.lineTo(16, -6);
  ctx.lineTo(10, 3);
  ctx.lineTo(-10, 3);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(0, -30);
  ctx.lineTo(13, -8);
  ctx.lineTo(0, -8);
  ctx.fill();
  ctx.restore();

  if (quakeAge !== null && quakeAge < 150) {
    const x = xOfKm(QUAKE_KM);
    const y = yOf(sim.bed[cellAt(QUAKE_KM)]);
    const fade = 1 - quakeAge / 150;
    ctx.strokeStyle = `rgba(248, 113, 113, ${fade})`;
    ctx.lineWidth = 4;
    for (const delay of [0, 25, 50]) {
      if (quakeAge < delay) continue;
      ctx.beginPath();
      ctx.arc(x, y, (quakeAge - delay) * 0.7, Math.PI, Math.PI * 2);
      ctx.stroke();
    }
    drawLabel(ctx, "Earthquake!", x, y - 12, `rgba(254, 226, 226, ${fade})`, scale);
  }

  drawLabel(ctx, "Deep ocean", xOfKm(12), SEA_Y + 110, "rgba(255, 255, 255, 0.75)", scale);
  drawLabel(ctx, "Town", xOfKm((TOWN_START_KM + TOWN_END_KM) / 2), townY - 36, "#0f172a", scale);
  ctx.textAlign = "right";
  ctx.fillStyle = "#0f172a";
  ctx.font = labelFont(scale);
  ctx.fillText("High ground", WIDTH - 8, Math.max(18, 14 / scale));
}

function describeSpeed(sim: Sim) {
  if (sim.runup > 0.3) return "A person running";
  if (sim.frontKm < 46) return "Jet plane";
  if (sim.frontKm < 50) return "Race car";
  return "Regular car";
}

const CAPTIONS = [
  "Earthquake! The seafloor jumped and shoved all the water above it. Waves are heading in both directions.",
  "Way out in deep water the wave is fast as a jet plane, but it's low and wide. Watch the boat: it barely notices!",
  "The ocean floor is rising. The front of the wave hits shallower water and starts to slow down.",
  "Now it's in shallow water, slowed down to car speed. The back of the wave catches up and the water piles up.",
  "Look! The water is pulling back from the beach. That's nature's warning: run to high ground!",
  "Here it comes! The water surges up onto the land.",
  "The wave is rushing into the town! A tsunami can keep pushing for many minutes, like a fast flood.",
];

// Stages only move forward, so a caption never jumps back to an earlier part of the story.
function stageOf(sim: Sim, reached: number) {
  let stage = 0;
  if (sim.seconds >= WAVE_SPLIT_SECONDS) stage = 1;
  if (sim.frontKm >= 44) stage = 2;
  if (sim.frontKm >= 50) stage = 3;
  if (surfaceAt(sim, cellAt(52)) < -0.8) stage = 4;
  if (sim.runup > 0.3) stage = 5;
  if (sim.runup >= TOWN_ELEVATION) stage = 6;
  return Math.max(stage, reached);
}

function finalCaption(sim: Sim, size: QuakeSize) {
  const feet = Math.round(sim.runup * FEET_PER_METER);
  if (sim.runup < TOWN_ELEVATION) return `All done! The water climbed ${feet} feet up the land and stopped before the town. Try a bigger earthquake!`;
  if (size === "medium") return `All done! The water climbed ${feet} feet and reached the town. Everyone on the high ground stayed safe.`;
  return `All done! The water climbed ${feet} feet, right over the town and up the hill. Everyone on the high ground stayed safe.`;
}

const NO_STATS = { speed: "None yet", deep: 0, near: 0, climb: 0 };
const IDLE_CAPTION = "Pick a size, then press the button to make an undersea earthquake.";

export default function TsunamiLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const simRef = useRef<Sim | null>(null);
  const stepsRef = useRef(0);
  const quakeAgeRef = useRef<number | null>(null);
  const slowRef = useRef(false);
  const sizeRef = useRef<QuakeSize>("medium");
  const stageRef = useRef(0);

  const [size, setSize] = useState<QuakeSize>("medium");
  const [slow, setSlow] = useState(false);
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState(IDLE_CAPTION);
  const [stats, setStats] = useState(NO_STATS);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    simRef.current = createSim();

    const fit = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
    };
    fit();
    window.addEventListener("resize", fit);

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let handle = 0;
    let lastTime = performance.now();
    let owedSteps = 0;

    const tick = (now: number) => {
      const elapsed = Math.min(100, now - lastTime);
      lastTime = now;
      const sim = simRef.current;
      if (sim) {
        const age = quakeAgeRef.current;
        if (age !== null) {
          quakeAgeRef.current = age + 1;
          if (stepsRef.current < LAST_STEP) {
            owedSteps += (elapsed / 1000) * (slowRef.current ? SLOW_STEPS_PER_SECOND : STEPS_PER_SECOND);
            while (owedSteps >= 1 && stepsRef.current < LAST_STEP) {
              stepSim(sim);
              stepsRef.current++;
              owedSteps--;
            }
          }
          if (frame % 12 === 0) {
            const done = stepsRef.current >= LAST_STEP;
            stageRef.current = stageOf(sim, stageRef.current);
            setMessage(done ? finalCaption(sim, sizeRef.current) : CAPTIONS[stageRef.current]);
            setStats({
              speed: done ? "Stopped" : describeSpeed(sim),
              deep: Math.round(sim.deepPeak * FEET_PER_METER),
              near: Math.round(sim.nearPeak * FEET_PER_METER),
              climb: Math.round(sim.runup * FEET_PER_METER),
            });
          }
        }
        const scale = canvas.width / WIDTH;
        const shake = !calm && age !== null && age < 45 ? Math.sin(age * 1.7) * (45 - age) * 0.12 : 0;
        ctx.setTransform(scale, 0, 0, scale, shake * scale, 0);
        drawScene(ctx, sim, age, canvas.clientWidth / WIDTH);
      }
      frame++;
      handle = requestAnimationFrame(tick);
    };
    handle = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(handle);
      window.removeEventListener("resize", fit);
    };
  }, []);

  const quake = () => {
    const sim = createSim();
    triggerQuake(sim, sizeRef.current);
    simRef.current = sim;
    stepsRef.current = 0;
    quakeAgeRef.current = 0;
    stageRef.current = 0;
    setStarted(true);
    setMessage(CAPTIONS[0]);
  };

  const reset = () => {
    simRef.current = createSim();
    stepsRef.current = 0;
    quakeAgeRef.current = null;
    setStarted(false);
    setMessage(IDLE_CAPTION);
    setStats(NO_STATS);
  };

  const chooseSize = (next: QuakeSize) => {
    sizeRef.current = next;
    setSize(next);
  };

  const toggleSlow = () => {
    slowRef.current = !slowRef.current;
    setSlow(slowRef.current);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/[0.06] px-4 sm:px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-widest uppercase">GA</Link>
          <span className="text-xs text-gray-500">You found the secret page!</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Tsunami Lab</h1>
        <p className="text-gray-400 mb-6">Make an earthquake under the ocean and watch what the water does.</p>

        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Side view of an ocean with a boat, a beach, a town, and a hill. An earthquake on the seafloor sends a wave toward the town."
          className="w-full rounded-2xl border border-white/10 block"
          style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
        />

        <p aria-live="polite" className="mt-4 min-h-[3.5rem] text-base sm:text-lg text-cyan-100 leading-snug">
          {message}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div role="group" aria-label="Earthquake size" className="flex rounded-full border border-white/15 overflow-hidden">
            {SIZES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => chooseSize(s.id)}
                disabled={started}
                aria-pressed={size === s.id}
                className={`px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed ${
                  size === s.id ? "bg-cyan-500 text-slate-950" : "text-gray-300 hover:bg-white/10 disabled:hover:bg-transparent disabled:text-gray-600"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {started ? (
            <button type="button" onClick={reset} className="px-6 py-2.5 rounded-full bg-white text-slate-950 text-sm font-bold hover:bg-gray-200 transition-colors">
              Start over
            </button>
          ) : (
            <button type="button" onClick={quake} className="px-6 py-2.5 rounded-full bg-red-500 text-white text-sm font-bold hover:bg-red-400 transition-colors">
              Make an earthquake!
            </button>
          )}

          <button
            type="button"
            onClick={toggleSlow}
            aria-pressed={slow}
            className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-colors ${
              slow ? "border-cyan-400 text-cyan-300" : "border-white/15 text-gray-300 hover:bg-white/10"
            }`}
          >
            Slow motion: {slow ? "on" : "off"}
          </button>
        </div>

        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <dt className="text-xs text-gray-400">Wave front is as fast as</dt>
            <dd className="text-xl font-bold mt-1">{stats.speed}</dd>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <dt className="text-xs text-gray-400">Wave height: deep ocean, then near shore</dt>
            <dd className="text-xl font-bold mt-1 tabular-nums">{stats.deep || "--"} ft → {stats.near || "--"} ft</dd>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <dt className="text-xs text-gray-400">Highest it climbed up the land</dt>
            <dd className="text-xl font-bold mt-1 tabular-nums">{stats.climb} feet</dd>
          </div>
        </dl>

        <h2 className="text-xl font-bold mt-10 mb-4">Tsunami facts</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {FACTS.map((f) => (
            <div key={f.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <h3 className="font-bold mb-1.5">{f.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          The wave here follows real water physics, but real tsunamis cross whole oceans, so this map is squished to fit on your screen and the speeds are comparisons, not exact numbers. Heights are stretched too, so you can see the wave.
        </p>
      </main>
    </div>
  );
}

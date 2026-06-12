// =============================================================
// Nuôi Anh — automatic parameter sweep / tuner
// Coordinate descent over every gameplay factor against
// explicit "reasonableness" targets. Run: node sweep.js
// =============================================================
"use strict";
const { DEFAULT_CONFIG, evaluate } = require("./engine");

const SWEEP = {
  costScale: [0.7, 1.0, 1.4, 2.0],
  growthAdd: [-0.02, 0, 0.02, 0.04],
  clickDiv: [10000, 20000, 35000, 60000],
  connCoef: [5, 8, 11, 14],
  escapeAt: [15e9, 25e9, 33e9, 50e9],
  dissolveAt: [3e8, 5e8, 8e8],
  saintAt: [1e9, 1.5e9, 2e9],
  skimCoef: [1.2, 1.6, 2.0, 2.4],
  skimExp: [1.35, 1.5, 1.7],
  coolBase: [0.1, 0.15, 0.2, 0.25],
  kitchenShare: [0.2, 0.3, 0.4],
  goodTime: [420, 600, 780],
  goodMeals: [1200, 2000, 3000],
  haloPer: [300, 500, 800],
  apologyP: [0.6, 0.7, 0.8]
};

const SEARCH_SEEDS = 10;
const FINAL_SEEDS = 30;

function fmtV(k, v) {
  if (v >= 1e9) return (v / 1e9) + "e9";
  return String(v);
}

function printReport(tag, evald) {
  console.log(`\n--- ${tag} (score ${evald.score.toFixed(2)}, lower = better) ---`);
  for (const r of evald.report) {
    const val = r.value == null ? "n/a" :
      (typeof r.value === "number" ? (r.value > 100 ? Math.round(r.value) : r.value.toFixed(2)) : r.value);
    const ok = r.pen === 0 ? "✓" : "✗";
    console.log(`  ${ok} ${r.name.padEnd(38)} = ${String(val).padEnd(8)} target [${r.lo}..${r.hi}]${r.pen ? "  penalty " + r.pen.toFixed(2) : ""}`);
  }
}

let cfg = { ...DEFAULT_CONFIG };
console.log("=== Nuôi Anh automatic balance sweep ===");
let base = evaluate(cfg, SEARCH_SEEDS);
printReport("BASELINE (current game values)", base);
let bestScore = base.score;

const PASSES = 2;
for (let pass = 1; pass <= PASSES; pass++) {
  console.log(`\n=== coordinate descent pass ${pass} ===`);
  for (const [param, values] of Object.entries(SWEEP)) {
    const current = cfg[param];
    let bestVal = current, improved = false;
    const tried = [];
    for (const v of values) {
      const trial = { ...cfg, [param]: v };
      const r = evaluate(trial, SEARCH_SEEDS);
      tried.push(`${fmtV(param, v)}:${r.score.toFixed(1)}${v === current ? "*" : ""}`);
      if (r.score < bestScore - 0.05) { bestScore = r.score; bestVal = v; improved = true; }
    }
    if (improved && bestVal !== current) {
      cfg[param] = bestVal;
      console.log(`  ${param.padEnd(13)} ${fmtV(param, current)} -> ${fmtV(param, bestVal)}   [${tried.join(" ")}]`);
    } else {
      console.log(`  ${param.padEnd(13)} keep ${fmtV(param, current)}        [${tried.join(" ")}]`);
    }
  }
}

const final = evaluate(cfg, FINAL_SEEDS);
printReport("FINAL TUNED CONFIG (30 seeds)", final);

console.log("\n=== recommended config changes vs current game ===");
let changes = 0;
for (const k of Object.keys(DEFAULT_CONFIG)) {
  if (cfg[k] !== DEFAULT_CONFIG[k]) { console.log(`  ${k}: ${DEFAULT_CONFIG[k]} -> ${cfg[k]}`); changes++; }
}
if (!changes) console.log("  (none — current values already optimal under these targets)");
console.log("\nkey final metrics:");
const m = final.metrics;
const mm = s => s == null ? "n/a" : (s / 60).toFixed(1) + "m";
console.log(`  saint ${mm(m.saintDur)} | dissolve ${mm(m.dissolveDur)} | escape ${mm(m.escapeDur)} | maxGreed bust ${mm(m.maxGreedBust)}`);
console.log(`  conns/h: saint ${m.saintCph && m.saintCph.toFixed(0)} greedy ${m.greedyCph && m.greedyCph.toFixed(0)} marathon ${m.marathonCph && m.marathonCph.toFixed(0)} | runsToMax ${m.runsToMax.toFixed(1)}`);
console.log(`  good path ${(m.goodFoundStay * 100).toFixed(0)}% | click ratio x${m.clickRatio.toFixed(2)} | skim equilibrium ${(m.skimEq * 100).toFixed(0)}%`);

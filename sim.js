// =============================================================
// Nuôi Anh — gameplay balance simulator
// Mirrors the math in index.html and plays the game with
// different strategies to analyze pacing & balance.
// Run: node sim.js
// =============================================================
"use strict";

const MEAL_COST = 8500;
const ESCAPE_AT = 33e9;
const DISSOLVE_AT = 5e8;
const SAINT_AT = 1e9;

// ---- items copied from the game ----
const ITEMS = [
  { id: "volunteer", tab: "grow", base: 2000, growth: 1.22, dps: 200 },
  { id: "fanpage", tab: "grow", base: 30000, growth: 1.22, dps: 1500 },
  { id: "kol", tab: "grow", base: 360000, growth: 1.24, dps: 9000 },
  { id: "gala", tab: "grow", base: 4000000, growth: 1.26, dps: 50000 },
  { id: "audit", tab: "grow", base: 12000000, growth: 1.5, cool: 0.1 },
  { id: "tvshow", tab: "grow", base: 45000000, growth: 1.28, dps: 300000 },
  { id: "app", tab: "grow", base: 600000000, growth: 1.3, dps: 2000000 },
  { id: "empire", tab: "grow", base: 9000000000, growth: 1.32, dps: 15000000 },

  { id: "dupcode", tab: "shady", base: 240000, growth: 1.28, dps: 12000, susp: 0.3 },
  { id: "ghostkid", tab: "shady", base: 3200000, growth: 1.3, dps: 80000, susp: 0.8 },
  { id: "fakebill", tab: "shady", base: 24000000, growth: 1.32, dps: 400000, susp: 1.5 },
  { id: "shellco", tab: "shady", base: 250000000, growth: 1.34, dps: 2500000, susp: 3 },
  { id: "pyramid", tab: "shady", base: 4000000000, growth: 1.36, dps: 20000000, susp: 6 },

  { id: "pr", tab: "fix", base: 50000, growth: 1.5, heal: 10 },
  { id: "lawyer", tab: "fix", base: 400000, growth: 1.6, heal: 25 },
  { id: "blitz", tab: "fix", base: 2500000, growth: 1.7, heal: 40 },

  { id: "iphone", tab: "lux", base: 30000000, growth: 1.6, mult: 0.1, susp: 0.05 },
  { id: "watch", tab: "lux", base: 150000000, growth: 1.7, mult: 0.25, susp: 0.1 },
  { id: "merc", tab: "lux", base: 1200000000, growth: 1.8, mult: 0.6, susp: 0.25 },
  { id: "villa", tab: "lux", base: 8000000000, growth: 1.9, mult: 1.5, susp: 0.5 },
  { id: "yacht", tab: "lux", base: 40000000000, growth: 2.0, mult: 3, susp: 1 },

  { id: "prov1", tab: "map", base: 3000000, growth: 1, once: true, provMult: 0.15 },
  { id: "prov2", tab: "map", base: 40000000, growth: 1, once: true, provMult: 0.15 },
  { id: "prov3", tab: "map", base: 500000000, growth: 1, once: true, provMult: 0.15 },
  { id: "prov4", tab: "map", base: 4000000000, growth: 1, once: true, provMult: 0.15 },
  { id: "prov5", tab: "map", base: 20000000000, growth: 1, once: true, provMult: 0.15 },
  { id: "prov6", tab: "map", base: 80000000000, growth: 1, once: true, provMult: 0.15 },

  { id: "speech", tab: "good", base: 2, growth: 1.6, hdps: 60000, currency: "halo" },
  { id: "book", tab: "good", base: 6, growth: 1.7, hdps: 400000, currency: "halo" },
  { id: "ambassador", tab: "good", base: 15, growth: 1.8, hdps: 3000000, currency: "halo" },
  { id: "award", tab: "good", base: 10, growth: 1, once: true, mult: 0.8, currency: "halo" },
  { id: "medal", tab: "good", base: 20, growth: 1, once: true, cool: 0.3, currency: "halo" },
  { id: "gov", tab: "good", base: 30, growth: 1, once: true, incomeBoost: 0.5, currency: "halo" }
];
const byId = {}; ITEMS.forEach(i => byId[i.id] = i);
const SHADY = ["dupcode", "ghostkid", "fakebill", "shellco", "pyramid"];

// seeded rng for reproducibility
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class Game {
  constructor(strategy, seed) {
    this.S = {
      fund: 0, stash: 0, raised: 0, meals: 0, susp: 0, skim: 0,
      owned: {}, buffs: [], maxSkim: 0, apologyUsed: false,
      halo: 0, haloProg: 0, cleanTime: 0, goodUnlocked: false,
      t: 0, mealAcc: 0, ended: null, conns: 0
    };
    this.strat = strategy;
    this.rng = mulberry32(seed);
    this.nextEnv = 50; this.nextEvent = 80;
    this.S.skim = strategy.skim;
    this.S.maxSkim = strategy.skim;
    this.log = [];
  }
  count(id) { return this.S.owned[id] || 0; }
  unitCost(it) { return Math.floor(it.base * Math.pow(it.growth, this.count(it.id))); }
  isClean() { return this.S.maxSkim <= 5 && SHADY.every(id => this.count(id) === 0); }
  repMult() {
    let m = 1 + Math.min(4, this.S.meals / 8000);
    ITEMS.forEach(it => { if (it.mult) m += it.mult * this.count(it.id); });
    return m;
  }
  provMult() { let m = 1; ITEMS.forEach(it => { if (it.provMult && this.count(it.id)) m += it.provMult; }); return m; }
  baseDps() { let d = 0; ITEMS.forEach(it => { if (it.dps) d += it.dps * this.count(it.id); }); return d; }
  honestDps() { let d = 0; ITEMS.forEach(it => { if (it.hdps) d += it.hdps * this.count(it.id); }); return d; }
  boost() { return 1 + (this.count("gov") ? 0.5 : 0); }
  buffMult(type) { let m = 1; this.S.buffs.forEach(b => { if (b.type === type && b.until > this.S.t) m *= b.mult; }); return m; }
  factor() { return this.repMult() * this.provMult() * this.boost(); }
  income() { return this.baseDps() * this.factor() * this.buffMult("income"); }
  clickPower() { return 1000 * this.repMult() * this.provMult() * this.buffMult("click") * (1 + this.baseDps() / 20000); }
  suspRate() {
    let grow = 1.6 * Math.pow(this.S.skim / 100, 1.5);
    const luxF = this.isClean() ? 0.2 : 1;
    ITEMS.forEach(it => { if (it.susp) grow += it.susp * this.count(it.id) * (it.mult ? luxF : 1); });
    let cool = 0.15;
    ITEMS.forEach(it => { if (it.cool) cool += it.cool * this.count(it.id); });
    return grow - cool;
  }
  earn(x) {
    const toStash = x * this.S.skim / 100;
    this.S.stash += toStash; this.S.fund += x - toStash; this.S.raised += x;
  }
  mark(label) { this.log.push({ t: this.S.t, label }); }

  step(dt) {
    const S = this.S;
    S.t += dt;
    this.earn(this.income() * dt);
    // active clicking (expected value: crit 5% x10 = x1.45, sustained combo ~x1.8)
    if (this.strat.cps > 0) this.earn(this.clickPower() * 1.45 * 1.8 * this.strat.cps * dt);
    // kitchen
    const cook = Math.min(S.fund, (this.income() * (1 - S.skim / 100) * 0.3 + 200) * dt);
    S.fund -= cook; S.mealAcc += cook / MEAL_COST;
    const m = Math.floor(S.mealAcc);
    if (m > 0) {
      S.mealAcc -= m; S.meals += m;
      if (S.goodUnlocked && this.isClean()) {
        S.haloProg += m;
        while (S.haloProg >= 500) { S.haloProg -= 500; S.halo++; }
      }
    }
    // honest income
    if (this.honestDps() > 0) S.stash += this.honestDps() * dt;
    // hidden path discovery
    if (!S.goodUnlocked && this.isClean()) {
      S.cleanTime += dt;
      if (S.cleanTime >= 600 && S.meals >= 2000) { S.goodUnlocked = true; this.mark("GOOD PATH FOUND"); }
    }
    // golden envelope (EV-driven, random)
    if (S.t >= this.nextEnv) {
      this.nextEnv = S.t + 40 + this.rng() * 50;
      const r = this.rng();
      if (r < 0.3) S.buffs.push({ type: "income", mult: 7, until: S.t + 30 });
      else if (r < 0.5) { if (this.strat.cps > 0) S.buffs.push({ type: "click", mult: 15, until: S.t + 15 }); }
      else if (r < 0.75) this.earn(Math.max(50000, this.income() * 60));
      else if (r < 0.92) S.susp = Math.max(0, S.susp - 12);
      else S.stash += Math.max(100000, this.income() * 30);
    }
    // random events (approximation: jitter biased by play style)
    if (S.t >= this.nextEvent) {
      this.nextEvent = S.t + 50 + this.rng() * 60;
      const dirty = !this.isClean();
      S.susp = Math.max(0, S.susp + (dirty ? (this.rng() * 18 - 8) : (this.rng() * 10 - 6)));
    }
    S.buffs = S.buffs.filter(b => b.until > S.t);
    // suspicion
    S.susp = Math.max(0, S.susp + this.suspRate() * dt);
    if (S.susp >= 100) {
      if (!S.apologyUsed) {
        S.apologyUsed = true;
        if (this.rng() < 0.7) { S.susp = 60; this.mark("apology saved"); }
        else return this.end("caught");
      } else return this.end("caught");
    }
    return null;
  }

  buyPolicy() {
    const S = this.S, st = this.strat;
    // damage control first
    if (S.susp > st.prAt) {
      for (const id of ["blitz", "lawyer", "pr"]) {
        const it = byId[id], c = this.unitCost(it);
        if (S.stash >= c && it.heal >= (id === "pr" ? 5 : 15)) { S.stash -= c; S.owned[id] = this.count(id) + 1; S.susp = Math.max(0, S.susp - it.heal); break; }
      }
    }
    // halo shop
    if (S.goodUnlocked) {
      for (const id of ["gov", "ambassador", "medal", "book", "award", "speech"]) {
        const it = byId[id], c = this.unitCost(it);
        if (it.once && this.count(id)) continue;
        if (S.halo >= c) { S.halo -= c; S.owned[id] = this.count(id) + 1; }
      }
    }
    // provinces: huge multiplicative value — buy when affordable
    for (const id of ["prov1", "prov2", "prov3", "prov4", "prov5", "prov6"]) {
      const it = byId[id];
      if (!this.count(id) && S.fund >= it.base) { S.fund -= it.base; S.owned[id] = 1; }
    }
    // growth + (optionally) shady: best payback first, keep a small reserve
    const f = this.factor();
    let candidates = ITEMS.filter(it => it.dps && (it.tab === "grow" || (it.tab === "shady" && st.shady)));
    // suspicion budget: don't buy shady that pushes net rate above budget
    candidates = candidates.filter(it => {
      if (!it.susp) return true;
      return this.suspRate() + it.susp <= st.suspBudget;
    });
    let bought = true;
    while (bought) {
      bought = false;
      let best = null, bestPb = Infinity;
      for (const it of candidates) {
        const c = this.unitCost(it);
        if (c > S.fund * 0.9) continue;
        const pb = c / (it.dps * f);
        if (pb < bestPb) { bestPb = pb; best = it; }
      }
      if (best) { S.fund -= this.unitCost(best); S.owned[best.id] = this.count(best.id) + 1; bought = true; }
    }
    // audit for cooling if dirty and net rate positive
    if ((st.shady || st.skim > 25) && this.suspRate() > 0.1) {
      const it = byId.audit, c = this.unitCost(it);
      if (S.fund >= c) { S.fund -= c; S.owned.audit = this.count("audit") + 1; }
    }
    // lux from stash
    if (st.lux) {
      for (const id of ["iphone", "watch", "merc", "villa", "yacht"]) {
        const it = byId[id], c = this.unitCost(it);
        if (this.count(id) === 0 && S.stash >= c * 1.5) { S.stash -= c; S.owned[id] = 1; }
      }
    }
  }

  end(outcome) {
    const S = this.S;
    S.ended = outcome;
    const base = S.raised > 5e7 ? Math.floor(8 * Math.log10(S.raised / 5e7)) : 0;
    const factor = { escaped: 1.5, saint: 2.0, dissolved: 1.0, caught: 0.6 }[outcome];
    S.conns = Math.max(outcome === "caught" ? 0 : 1, Math.floor(base * factor));
    return outcome;
  }

  run(horizonSec) {
    const S = this.S, st = this.strat;
    const dt = 0.5;
    let lastBuy = 0;
    while (S.t < horizonSec && !S.ended) {
      if (this.step(dt)) break;
      if (S.t - lastBuy >= 5) { lastBuy = S.t; this.buyPolicy(); }
      // exit rules
      if (st.exit === "saint" && S.raised >= SAINT_AT && this.isClean()) { this.end("saint"); break; }
      if (st.exit === "dissolve" && S.raised >= DISSOLVE_AT && S.susp < 60) { this.end("dissolved"); break; }
      if (st.exit === "escape" && S.stash >= ESCAPE_AT) { this.end("escaped"); break; }
    }
    if (!S.ended) this.end(S.raised >= DISSOLVE_AT && S.susp < 60 ? "dissolved" : "caught");
    return this;
  }
}

// ---- strategies ----
const STRATS = {
  "SAINT active (skim0,click3/s)":   { skim: 0, cps: 3, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "saint" },
  "SAINT idle (skim0)":              { skim: 0, cps: 0, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "saint" },
  "CLEAN dissolve rush (skim0)":     { skim: 0, cps: 3, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "dissolve" },
  "PETTY skim20 dissolve":           { skim: 20, cps: 3, shady: false, lux: true, prAt: 75, suspBudget: 0.3, exit: "dissolve" },
  "PETTY skim20 marathon":           { skim: 20, cps: 3, shady: false, lux: true, prAt: 75, suspBudget: 0.3, exit: "none" },
  "GREEDY skim50 + lux":             { skim: 50, cps: 3, shady: false, lux: true, prAt: 70, suspBudget: 0.8, exit: "escape" },
  "SHADY rush (skim30+schemes)":     { skim: 30, cps: 3, shady: true, lux: false, prAt: 65, suspBudget: 2.0, exit: "escape" },
  "MAX GREED (skim90+schemes)":      { skim: 90, cps: 5, shady: true, lux: false, prAt: 60, suspBudget: 4.0, exit: "escape" }
};

const HORIZON = 4 * 3600; // 4h game-time cap
const RUNS = 30;          // seeds per strategy

function fmtT(s) {
  if (s == null) return "--";
  if (s < 60) return Math.round(s) + "s";
  if (s < 3600) return (s / 60).toFixed(1) + "m";
  return (s / 3600).toFixed(2) + "h";
}
function fmtM(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return Math.round(n) + "";
}
function pct(x) { return Math.round(x * 100) + "%"; }
function median(a) { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; }

console.log("=== Nuôi Anh balance simulation ===");
console.log(`horizon ${fmtT(HORIZON)}, ${RUNS} seeded runs per strategy\n`);
const rows = [];
for (const [name, st] of Object.entries(STRATS)) {
  const res = [];
  for (let i = 0; i < RUNS; i++) res.push(new Game(st, 1000 + i * 7).run(HORIZON));
  const ended = o => res.filter(g => g.S.ended === o).length / RUNS;
  const durations = res.map(g => g.S.t);
  const conns = res.map(g => g.S.conns);
  const connsPerHour = res.map(g => g.S.conns / (g.S.t / 3600));
  const goodFound = res.filter(g => g.S.goodUnlocked).length / RUNS;
  const raised = res.map(g => g.S.raised);
  rows.push({
    name,
    dur: fmtT(median(durations)),
    raised: fmtM(median(raised)),
    meals: fmtM(median(res.map(g => g.S.meals))),
    stash: fmtM(median(res.map(g => g.S.stash))),
    conns: median(conns),
    cph: median(connsPerHour).toFixed(1),
    caught: pct(ended("caught")),
    goal: pct(res.filter(g => g.S.ended === { saint: "saint", dissolve: "dissolved", escape: "escaped", none: "dissolved" }[st.exit]).length / RUNS),
    good: pct(goodFound)
  });
}
const cols = [["strategy", "name", 34], ["dur", "dur", 7], ["raised", "raised", 8], ["meals", "meals", 7],
  ["stash", "stash", 8], ["conns", "conns", 6], ["conns/h", "cph", 8], ["caught", "caught", 7], ["goal", "goal", 6], ["good✨", "good", 6]];
console.log(cols.map(c => String(c[0]).padEnd(c[2])).join(""));
console.log("-".repeat(cols.reduce((a, c) => a + c[2], 0)));
for (const r of rows) console.log(cols.map(c => String(r[c[1]]).padEnd(c[2])).join(""));

// milestone detail for a representative clean run
console.log("\n--- clean active run: time to milestones (median of seeds) ---");
const MILESTONES = [1e6, 1e7, 1e8, 5e8, 1e9, 1e10];
const times = {};
for (let i = 0; i < RUNS; i++) {
  const g = new Game(STRATS["SAINT active (skim0,click3/s)"], 2000 + i * 13);
  const seen = {};
  const dt = 0.5; let lastBuy = 0;
  while (g.S.t < HORIZON && !g.S.ended) {
    if (g.step(dt)) break;
    if (g.S.t - lastBuy >= 5) { lastBuy = g.S.t; g.buyPolicy(); }
    for (const m of MILESTONES) if (!seen[m] && g.S.raised >= m) { seen[m] = g.S.t; (times[m] = times[m] || []).push(g.S.t); }
    if (g.S.raised >= 1e10) break;
  }
}
for (const m of MILESTONES) {
  const arr = times[m] || [];
  console.log(`raised ${fmtM(m).padEnd(6)} : ${arr.length ? fmtT(median(arr)) : "never"} (${arr.length}/${RUNS} runs)`);
}

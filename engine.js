// =============================================================
// Nuôi Anh — config-driven game engine for balance sweeps
// Mirrors index.html math; every tunable lives in CONFIG.
// =============================================================
"use strict";

const DEFAULT_CONFIG = {
  mealCost: 8500,
  escapeAt: 33e9,
  dissolveAt: 5e8,
  saintAt: 2e9,
  skimCoef: 1.6,     // suspicion = skimCoef * (skim/100)^skimExp
  skimExp: 1.5,
  coolBase: 0.15,    // passive suspicion cooling %/s
  kitchenShare: 0.2, // fraction of fund income cooked into meals
  clickDiv: 35000,   // clickPower scales with (1 + baseDps/clickDiv)
  connCoef: 8,       // connections = connCoef * log10(raised / 5e7)
  goodTime: 600,     // clean seconds to find the hidden path
  goodMeals: 2000,   // meals required for the hidden path
  haloPer: 500,      // meals per 1 halo
  costScale: 1.4,    // global multiplier on grow/shady/province base costs
  growthAdd: 0.04,    // added to growth exponents
  apologyP: 0.7      // chance the player nails the apology minigame
};

function buildItems(cfg) {
  const cs = cfg.costScale, ga = cfg.growthAdd;
  return [
    { id: "volunteer", tab: "grow", base: 2000 * cs, growth: 1.22 + ga, dps: 200 },
    { id: "fanpage", tab: "grow", base: 30000 * cs, growth: 1.22 + ga, dps: 1500 },
    { id: "kol", tab: "grow", base: 360000 * cs, growth: 1.24 + ga, dps: 9000 },
    { id: "gala", tab: "grow", base: 4000000 * cs, growth: 1.26 + ga, dps: 50000 },
    { id: "audit", tab: "grow", base: 12000000 * cs, growth: 1.5 + ga, cool: 0.1 },
    { id: "tvshow", tab: "grow", base: 45000000 * cs, growth: 1.28 + ga, dps: 300000 },
    { id: "app", tab: "grow", base: 600000000 * cs, growth: 1.3 + ga, dps: 2000000 },
    { id: "empire", tab: "grow", base: 9000000000 * cs, growth: 1.32 + ga, dps: 15000000 },
    { id: "dupcode", tab: "shady", base: 240000 * cs, growth: 1.28 + ga, dps: 12000, susp: 0.05, kick: 0.25 },
    { id: "ghostkid", tab: "shady", base: 3200000 * cs, growth: 1.3 + ga, dps: 80000, susp: 0.12, kick: 0.3 },
    { id: "fakebill", tab: "shady", base: 24000000 * cs, growth: 1.32 + ga, dps: 400000, susp: 0.25, kick: 0.5 },
    { id: "shellco", tab: "shady", base: 250000000 * cs, growth: 1.34 + ga, dps: 2500000, susp: 0.5, kick: 0.65 },
    { id: "pyramid", tab: "shady", base: 4000000000 * cs, growth: 1.36 + ga, dps: 20000000, susp: 1.2, kick: 0.7 },
    { id: "carwash", tab: "shady", base: 80000000, growth: 1, once: true, launder: true, currency: "stash" },
    { id: "karaoke", tab: "shady", base: 600000000, growth: 1, once: true, launder: true, currency: "stash" },
    { id: "bds", tab: "shady", base: 4000000000, growth: 1, once: true, launder: true, currency: "stash" },
    { id: "safe", tab: "shady", base: 1000000000, growth: 8, maxCount: 3, currency: "stash" },
    { id: "pr", tab: "fix", base: 50000, growth: 1.5, heal: 10 },
    { id: "lawyer", tab: "fix", base: 400000, growth: 1.6, heal: 25 },
    { id: "blitz", tab: "fix", base: 2500000, growth: 1.7, heal: 40 },
    { id: "iphone", tab: "lux", base: 30000000, growth: 1.6, mult: 0.1, susp: 0.05 },
    { id: "watch", tab: "lux", base: 150000000, growth: 1.7, mult: 0.25, susp: 0.1 },
    { id: "merc", tab: "lux", base: 1200000000, growth: 1.8, mult: 0.6, susp: 0.25 },
    { id: "villa", tab: "lux", base: 8000000000, growth: 1.9, mult: 1.5, susp: 0.5 },
    { id: "yacht", tab: "lux", base: 40000000000, growth: 2.0, mult: 3, susp: 1 },
    { id: "prov1", tab: "map", base: 3000000 * cs, growth: 1, once: true, provMult: 0.15 },
    { id: "prov2", tab: "map", base: 40000000 * cs, growth: 1, once: true, provMult: 0.15 },
    { id: "prov3", tab: "map", base: 500000000 * cs, growth: 1, once: true, provMult: 0.15 },
    { id: "prov4", tab: "map", base: 4000000000 * cs, growth: 1, once: true, provMult: 0.15 },
    { id: "prov5", tab: "map", base: 20000000000 * cs, growth: 1, once: true, provMult: 0.15 },
    { id: "prov6", tab: "map", base: 80000000000 * cs, growth: 1, once: true, provMult: 0.15 },
    { id: "speech", tab: "good", base: 2, growth: 1.6, hdps: 60000, currency: "halo" },
    { id: "book", tab: "good", base: 6, growth: 1.7, hdps: 400000, currency: "halo" },
    { id: "ambassador", tab: "good", base: 15, growth: 1.8, hdps: 3000000, currency: "halo" },
    { id: "award", tab: "good", base: 10, growth: 1, once: true, mult: 0.8, currency: "halo" },
    { id: "medal", tab: "good", base: 20, growth: 1, once: true, cool: 0.3, currency: "halo" },
    { id: "gov", tab: "good", base: 30, growth: 1, once: true, incomeBoost: 0.5, currency: "halo" }
  ];
}

const SHADY = ["dupcode", "ghostkid", "fakebill", "shellco", "pyramid"];

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class Game {
  constructor(cfg, strategy, seed) {
    this.cfg = cfg;
    this.items = buildItems(cfg);
    this.byId = {}; this.items.forEach(i => this.byId[i.id] = i);
    this.S = {
      fund: 0, stash: 0, raised: 0, meals: 0, susp: 0, skim: strategy.skim,
      owned: {}, buffs: [], maxSkim: strategy.skim, apologyUsed: false,
      halo: 0, haloProg: 0, cleanTime: 0, goodUnlocked: false,
      t: 0, mealAcc: 0, ended: null, conns: 0
    };
    this.strat = strategy;
    this.rng = mulberry32(seed);
    this.nextEnv = 50; this.nextEvent = 80;
  }
  count(id) { return this.S.owned[id] || 0; }
  unitCost(it) { return Math.floor(it.base * Math.pow(it.growth, this.count(it.id))); }
  isClean() { return this.S.maxSkim <= 5 && SHADY.every(id => this.count(id) === 0); }
  repMult() {
    let m = 1 + Math.min(4, this.S.meals / 8000);
    for (const it of this.items) if (it.mult) m += it.mult * this.count(it.id);
    return m;
  }
  provMult() { let m = 1; for (const it of this.items) if (it.provMult && this.count(it.id)) m += it.provMult; return m; }
  baseDps() { let d = 0; for (const it of this.items) if (it.dps) d += it.dps * this.count(it.id); return d; }
  honestDps() { let d = 0; for (const it of this.items) if (it.hdps) d += it.hdps * this.count(it.id); return d; }
  boost() { return 1 + (this.count("gov") ? 0.5 : 0); }
  buffMult(type) { let m = 1; for (const b of this.S.buffs) if (b.type === type && b.until > this.S.t) m *= b.mult; return m; }
  factor() { return this.repMult() * this.provMult() * this.boost() * (1 + 0.6 * this.S.skim / 100); }
  income() { return this.baseDps() * this.factor() * this.buffMult("income"); }
  clickPower() { return 1000 * this.repMult() * this.provMult() * this.buffMult("click") * (1 + this.baseDps() / this.cfg.clickDiv); }
  suspRate() {
    const cfg = this.cfg;
    let grow = cfg.skimCoef * Math.pow(this.S.skim / 100, cfg.skimExp);
    const luxF = this.isClean() ? 0.2 : 1;
    let fronts = 0;
    for (const it of this.items) if (it.launder && this.count(it.id)) fronts++;
    const lf = Math.pow(0.85, fronts);
    for (const it of this.items) if (it.susp) grow += it.susp * this.count(it.id) * (it.mult ? luxF : it.kick ? lf : 1);
    let cool = cfg.coolBase;
    for (const it of this.items) if (it.cool) cool += it.cool * this.count(it.id);
    return grow - cool;
  }
  earn(x) {
    const toStash = x * this.S.skim / 100;
    const clean = x - toStash;
    const toKitchen = clean * this.cfg.kitchenShare; // kitchen cut off the top
    this.S.stash += toStash; this.S.fund += clean - toKitchen;
    this.S.mealAcc += toKitchen / this.cfg.mealCost;
    this.S.raised += x;
  }

  step(dt) {
    const S = this.S, cfg = this.cfg;
    S.t += dt;
    const inc = this.income();
    let kick = 0;
    for (const it of this.items) if (it.kick && it.dps) kick += it.dps * it.kick * this.count(it.id);
    kick *= this.factor() * this.buffMult("income");
    S.stash += kick * dt; S.raised += kick * dt;
    this.earn((inc - kick) * dt);
    if (this.strat.cps > 0) this.earn(this.clickPower() * 1.45 * 1.8 * this.strat.cps * dt);
    const m = Math.floor(S.mealAcc);
    if (m > 0) {
      S.mealAcc -= m; S.meals += m;
      if (S.goodUnlocked && this.isClean()) {
        S.haloProg += m;
        while (S.haloProg >= cfg.haloPer) { S.haloProg -= cfg.haloPer; S.halo++; }
      }
    }
    const hd = this.honestDps();
    if (hd > 0) S.stash += hd * dt;
    if (!S.goodUnlocked && this.isClean()) {
      S.cleanTime += dt;
      if (S.cleanTime >= cfg.goodTime && S.meals >= cfg.goodMeals) S.goodUnlocked = true;
    }
    if (S.t >= this.nextEnv) {
      this.nextEnv = S.t + 40 + this.rng() * 50;
      const r = this.rng();
      if (r < 0.3) S.buffs.push({ type: "income", mult: 7, until: S.t + 30 });
      else if (r < 0.5) { if (this.strat.cps > 0) S.buffs.push({ type: "click", mult: 15, until: S.t + 15 }); }
      else if (r < 0.75) this.earn(Math.max(50000, inc * 60));
      else if (r < 0.92) S.susp = Math.max(0, S.susp - 12);
      else S.stash += Math.max(100000, inc * 30);
    }
    if (S.t >= this.nextEvent) {
      this.nextEvent = S.t + 50 + this.rng() * 60;
      const dirty = !this.isClean();
      S.susp = Math.max(0, S.susp + (dirty ? (this.rng() * 18 - 8) : (this.rng() * 10 - 6)));
    }
    if (S.buffs.length) S.buffs = S.buffs.filter(b => b.until > S.t);
    S.susp = Math.max(0, S.susp + this.suspRate() * dt);
    if (S.susp >= 100) {
      if (!S.apologyUsed) {
        S.apologyUsed = true;
        if (this.rng() < cfg.apologyP) S.susp = 60;
        else return this.end("caught");
      } else return this.end("caught");
    }
    return null;
  }

  buyPolicy() {
    const S = this.S, st = this.strat;
    if (S.susp > st.prAt) {
      for (const id of ["blitz", "lawyer", "pr"]) {
        const it = this.byId[id], c = this.unitCost(it);
        if (S.stash >= c) { S.stash -= c; S.owned[id] = this.count(id) + 1; S.susp = Math.max(0, S.susp - it.heal); break; }
      }
    }
    if (S.goodUnlocked) {
      for (const id of ["gov", "ambassador", "medal", "book", "award", "speech"]) {
        const it = this.byId[id], c = this.unitCost(it);
        if (it.once && this.count(id)) continue;
        if (S.halo >= c) { S.halo -= c; S.owned[id] = this.count(id) + 1; }
      }
    }
    for (const id of ["prov1", "prov2", "prov3", "prov4", "prov5", "prov6"]) {
      const it = this.byId[id];
      if (!this.count(id) && S.fund >= it.base) { S.fund -= it.base; S.owned[id] = 1; }
    }
    const f = this.factor();
    let candidates = this.items.filter(it => it.dps && (it.tab === "grow" || (it.tab === "shady" && st.shady)));
    candidates = candidates.filter(it => !it.susp || this.suspRate() + it.susp <= st.suspBudget);
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
      if (best) {
        S.fund -= this.unitCost(best); S.owned[best.id] = this.count(best.id) + 1; bought = true;
        if (best.kick) S.susp = Math.min(100, S.susp + 3); // setup heat spike
      }
    }
    if (st.shady) {
      for (const id of ["carwash", "karaoke", "bds"]) {
        const it = this.byId[id];
        if (!this.count(id) && S.stash >= it.base * 1.3) { S.stash -= it.base; S.owned[id] = 1; }
      }
      const sf = this.byId.safe;
      if (this.count("safe") < 3) {
        const c = this.unitCost(sf);
        if (S.stash >= c * 2) { S.stash -= c; S.owned.safe = this.count("safe") + 1; }
      }
    }
    if ((st.shady || st.skim > 25) && this.suspRate() > 0.1) {
      const it = this.byId.audit, c = this.unitCost(it);
      if (S.fund >= c) { S.fund -= c; S.owned.audit = this.count("audit") + 1; }
    }
    if (st.lux) {
      for (const id of ["iphone", "watch", "merc", "villa", "yacht"]) {
        const it = this.byId[id], c = this.unitCost(it);
        if (this.count(id) === 0 && S.stash >= c * 1.5) { S.stash -= c; S.owned[id] = 1; }
      }
    }
  }

  end(outcome) {
    const S = this.S, cfg = this.cfg;
    S.ended = outcome;
    const base = S.raised > 5e7 ? Math.floor(cfg.connCoef * Math.log10(S.raised / 5e7)) : 0;
    const factor = { escaped: 1.5, saint: 2.0, dissolved: 1.0, caught: 0.6 }[outcome];
    let stashBonus = S.stash > 2e8 ? Math.floor(4 * Math.log10(S.stash / 2e8)) : 0;
    if (outcome === "caught") stashBonus = Math.floor(stashBonus * this.count("safe") / 3);
    S.conns = Math.max(outcome === "caught" ? 0 : 1, Math.floor(base * factor) + stashBonus);
    return outcome;
  }

  run(horizonSec, dt) {
    const S = this.S, st = this.strat, cfg = this.cfg;
    dt = dt || 1;
    let lastBuy = 0;
    while (S.t < horizonSec && !S.ended) {
      if (this.step(dt)) break;
      if (S.t - lastBuy >= 5) { lastBuy = S.t; this.buyPolicy(); }
      if (st.exit === "saint" && S.raised >= cfg.saintAt && this.isClean()) { this.end("saint"); break; }
      if (st.exit === "dissolve" && S.raised >= cfg.dissolveAt && S.susp < 60) { this.end("dissolved"); break; }
      if (st.exit === "escape" && S.stash >= cfg.escapeAt) { this.end("escaped"); break; }
    }
    if (!S.ended) this.end(S.raised >= cfg.dissolveAt && S.susp < 60 ? "dissolved" : "caught");
    return this;
  }
}

const STRATS = {
  saintActive: { skim: 0, cps: 3, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "saint" },
  saintIdle: { skim: 0, cps: 0, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "saint" },
  cleanStay: { skim: 0, cps: 3, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "none" },
  dissolveRush: { skim: 0, cps: 3, shady: false, lux: false, prAt: 101, suspBudget: 0, exit: "dissolve" },
  greedyEscape: { skim: 50, cps: 3, shady: false, lux: true, prAt: 70, suspBudget: 0.8, exit: "escape" },
  shadyRush: { skim: 30, cps: 3, shady: true, lux: false, prAt: 65, suspBudget: 2.0, exit: "escape" },
  maxGreed: { skim: 90, cps: 5, shady: true, lux: false, prAt: 60, suspBudget: 4.0, exit: "escape" },
  marathon: { skim: 20, cps: 3, shady: false, lux: true, prAt: 75, suspBudget: 0.3, exit: "none" }
};

function median(a) { if (!a.length) return null; const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; }
function mean(a) { return a.length ? a.reduce((x, y) => x + y, 0) / a.length : null; }

const PERK_TOTAL = 305; // connections to max every perk

function evaluate(cfg, seeds) {
  const H = 3600, HM = 7200;
  const runs = {};
  for (const [name, st] of Object.entries(STRATS)) {
    runs[name] = [];
    const horizon = name === "marathon" ? HM : name === "cleanStay" ? 1500 : H;
    for (let i = 0; i < seeds; i++) runs[name].push(new Game(cfg, st, 977 + i * 31).run(horizon));
  }
  const get = (n, f) => runs[n].map(f);
  const endedT = (n, o) => { const a = runs[n].filter(g => g.S.ended === o).map(g => g.S.t); return a.length ? median(a) : null; };
  const cph = n => median(get(n, g => g.S.conns / (g.S.t / 3600)));

  // click contribution at STEADY STATE: both players inherit an established
  // project (mid-game generators + reputation), then play 10 more minutes
  function seeded(cps) {
    const g = new Game(cfg, { ...STRATS.cleanStay, cps }, 555);
    g.S.owned = { volunteer: 12, fanpage: 10, kol: 8, gala: 5, tvshow: 2 };
    g.S.meals = 6000;
    const r0 = g.S.raised;
    g.run(600);
    g.S.raised -= r0;
    return g;
  }
  const a10 = seeded(3);
  const i10 = seeded(0);

  const m = {
    saintDur: endedT("saintActive", "saint"),
    saintIdleDur: endedT("saintIdle", "saint"),
    dissolveDur: endedT("dissolveRush", "dissolved"),
    escapeDur: endedT("greedyEscape", "escaped"),
    escapeCaught: runs.greedyEscape.filter(g => g.S.ended === "caught").length / seeds,
    maxGreedBust: endedT("maxGreed", "caught"),
    maxGreedCaught: runs.maxGreed.filter(g => g.S.ended === "caught").length / seeds,
    goodFoundStay: runs.cleanStay.filter(g => g.S.goodUnlocked).length / seeds,
    saintCph: cph("saintActive"),
    greedyCph: cph("greedyEscape"),
    marathonCph: cph("marathon"),
    runsToMax: PERK_TOTAL / Math.max(1, mean([
      median(get("saintActive", g => g.S.conns)),
      median(get("dissolveRush", g => g.S.conns)),
      median(get("greedyEscape", g => g.S.conns))])),
    clickRatio: a10.S.raised / Math.max(1, i10.S.raised),
    skimEq: Math.pow(cfg.coolBase / cfg.skimCoef, 1 / cfg.skimExp)
  };

  // ---- reasonableness targets ----
  const T = [
    ["saint run 15-30m", m.saintDur, 900, 1800, 3],
    ["dissolve rush 8-15m", m.dissolveDur, 480, 900, 2],
    ["escape run 25-45m", m.escapeDur, 1500, 2700, 3],
    ["greedy survives (caught<=30%)", m.escapeCaught, 0, 0.3, 2],
    ["max greed busts fast (<=8m)", m.maxGreedBust, 0, 480, 1],
    ["max greed nearly always busts", m.maxGreedCaught, 0.9, 1.0, 1],
    ["good path found (25m clean) >=70%", m.goodFoundStay, 0.7, 1.0, 3],
    ["evil competitive: saint/greedy 0.6-1.6x", m.saintCph / Math.max(0.01, m.greedyCph), 0.6, 1.6, 2],
    ["marathon weaker than saint", m.marathonCph / Math.max(0.01, m.saintCph), 0, 0.8, 2],
    ["runs to max perks 8-15", m.runsToMax, 8, 15, 3],
    ["active adds 30-70% over idle", m.clickRatio, 1.3, 1.7, 2],
    ["sustainable skim 15-25%", m.skimEq, 0.15, 0.25, 2]
  ];
  let score = 0;
  const report = T.map(([name, v, lo, hi, w]) => {
    let pen;
    if (v == null) pen = 3;
    else if (v >= lo && v <= hi) pen = 0;
    else pen = Math.min(3, Math.abs(v < lo ? lo - v : v - hi) / Math.max(1e-9, hi - lo));
    score += pen * w;
    return { name, value: v, lo, hi, pen: pen * w };
  });
  return { metrics: m, report, score };
}

module.exports = { DEFAULT_CONFIG, Game, STRATS, evaluate, buildItems, median };

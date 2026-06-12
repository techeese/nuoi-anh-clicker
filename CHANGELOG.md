# Changelog

## 2026-06-13 — Day/night cycle (iteration 18)
- The avatar scene follows the player's real clock: night/dawn/day/dusk skies, sun & moon &
  stars. At night a clean founder sleeps (Zzz) — but past 50% suspicion he's awake at 3 AM,
  lit by his phone. Insomnia is now a visible moral symptom.

## 2026-06-13 — gate.sh: mechanical release gates (iteration 17)
- One exit-code-enforced script runs all release gates: syntax across every script block,
  fresh player must EARN non-zero money, rich-seed migration must SHOW its wealth (defeats
  the static-HTML false pass). Mutation-tested by re-injecting the iteration-16 recursion:
  both gates fail and block the ship. The playbook now mandates `./gate.sh && git commit`.

## 2026-06-13 — Daily challenge (iteration 16)
- 🎲 Thử thách hôm nay: one seeded scenario per day for the whole world — deterministic
  modifier, event order, and envelope luck (mulberry32 with state in the save; cosmetic
  randomness excluded so toggling music can't desync). Once per day.
- Wordle-style shareable result on the ending newspaper (outcome emoji · connections · days
  survived · link).

## 2026-06-13 — The accountant arc (iteration 15)
- Chị Hạnh — the accountant who knows everything — is now a three-stage chained arc on the
  dirty path (the mirror of Mây on the clean one): her resignation letter, the reverse coffee
  where she's done the math on your kickbacks, and the cardboard box on the table.
- She can become your accomplice (kickbacks -10%, scheme heat -10% — she writes the books now),
  stay bought, or walk to the journalists. The ending newspaper testifies accordingly.
- First event-CHAIN system (ktStage/ktMode); +1 achievement (Cùng một con thuyền).

## 2026-06-13 — Đường đời: the run life-lines chart (iteration 14)
- Canvas chart in Legacy: fund (green) vs stash (gold) on log scale, suspicion as a red
  heartbeat area beneath — and a ◆ marker at the exact sample where the stash crossed above
  the fund: the moment greed won, drawn on your own timeline.
- 5s sampling with adaptive thinning (window doubles when full); save-compatible.

## 2026-06-13 — Maintenance sprint 2 (iteration 13)
- Sweep: 11/12 green (saint-duration hairline only, as ever). Bot 5-min: zero errors, with the
  bot now also handling letter/away overlays. Mobile audit: apology minigame verified at 390px.
- Live health: index/manifest/sw/icons all 200; deployed build matches HEAD (soundscape live).

## 2026-06-13 — Soundscape (iteration 12)
- Five state-aware cues, all synthesized: a low two-note warning when suspicion crosses 50%
  (re-arms below 40), a music-box phrase when a letter from Mây arrives, a soft kitchen
  heartbeat every 1,000th meal (throttled), a bright arpeggio on the morning wave, and a
  peaceful resolve chord on the saint ending. The moral arc is now audible.

## 2026-06-13 — Next-milestone forecast (iteration 11)
- "🎯 Sắp đạt: …" line under the stats: picks the nearest goal by ETA at current income —
  next growth purchase, next province, the next letter from Mây (clean hands), the dissolve/
  saint thresholds, or the 33-tỷ escape countdown (dirty). The goal line literally changes
  with your morality.

## 2026-06-13 — PWA: install the charity (iteration 10)
- The game is now installable: web manifest, drawn app icon (the steaming rice bowl in a gold
  ring), theme color, apple-touch-icon.
- Network-first service worker with cache fallback: deploys land immediately when online,
  and the game keeps working fully offline — fitting, for an idle game about absence.

## 2026-06-13 — Retention hooks: the return moment + morning wave (iteration 9)
- Research-grounded (idle-genre retention literature): the return moment and a daily hook are
  the two highest-leverage levers for a parody idle game without dark patterns.
- "🌅 Trong lúc bạn vắng mặt" report card replaces the old offline toast: earnings, meals the
  kitchen cooked, suspicion that cooled while away (new mechanic: -0.1%/min offline, cap 30),
  and a 💌 teaser when a Mây letter is waiting. Returning feels like reuniting with a living project.
- Morning donation wave: first visit each calendar day grants income x2 for 90s and sends a
  golden envelope riding the wave. No streaks, no guilt — just a warm reason to come back.

## 2026-06-13 — Bé Mây's letters (iteration 8)
- A recurring character: bé Mây, 8, from Điện Biên. Handwritten letters arrive at meal
  milestones (1k/8k/25k/60k) while your hands stay clean — school-notebook paper, blue
  ballpoint ink riding the ruled lines, crayon drawings, signed "— Mây".
- Turn dirty and the letters STOP — one quiet beat ("Hộp thư trống"), the founder's quips
  start haunting him, and the run-ending newspaper remembers ("một xấp thư viết tay…
  vẫn còn trong ví" among the seized evidence).
- 💌 reread chip under the founder scene; +1 achievement (Người bạn qua thư).
- First feature designed under the frontend-design skill gate.

## 2026-06-13 — Maintenance sprint (iteration 7)
- Balance sweep: 11/12 targets green (saint 14.7m / escape 37.7m / evil competitive at 1.30x);
  only hairline miss is the click-ratio at 1.29 vs 1.30 floor. No changes needed.
- 5-minute virtual-time bot playthrough (8 clicks/s, auto-buy, auto-answer events/apology/
  envelopes, tab rotation): ZERO JS errors, no soft-locks.
- Mobile audit: bust-ending newspaper verified at true 390px — renders perfectly.
- Perf review: 7 intervals, all light; renderShop 2s rebuild ~10 nodes — no action warranted.

## 2026-06-13 — Founder speaks (iteration 6)
- Click the founder: state-aware speech bubbles track his moral arc — earnest when clean,
  smug deflections when dirty, possessions-themed bragging when rich, nervous at suspicion 50+,
  lawyer-approved panic at 80+ ("Mọi việc đều đúng quy trình!"). Devil's-bargain takers get
  haunted lines. +1 achievement (Phỏng vấn độc quyền, 15 clicks).
- Loop infrastructure: improvement iterations now chain via a Stop hook (flag file
  .improve-loop-on as kill-switch) instead of a timer.

## 2026-06-13 — Sao kê ledger + mobile root-cause fix + rename (iteration 5)
- **🧾 Sao kê ledger**: live bank statement in the main panel — donations, kitchen spends and
  investments appear as transactions; skimmed money and kickbacks show up disguised as
  "Chi phí vận hành"/"TT hợp đồng — Cty TNHH..." (marked 🕳 only the player understands).
  "📢 Công khai sao kê" button (120s cooldown): clean books = -8% suspicion weapon; dirty
  books = a gamble (35% a retired accountant spots the ratios). +1 achievement.
- **Mobile overflow ROOT-CAUSED**: the TV chyron's nowrap text inflated intrinsic min-content
  to 451px, blowing the layout to ~490px on real phones. All previous mobile screenshots were
  silently 500px wide (headless Chrome window minimum) so the bug was invisible. Fixed with
  the width:0+flex:1 marquee pattern; verified DOC=390 via a new iframe-based true-390 harness.
- Repo renamed to **nuoi-anh-clicker** (owner request): new URL techeese.github.io/nuoi-anh-clicker,
  old URLs auto-redirect.

## 2026-06-13 — Newspaper endings + critical bugfix (autonomous iteration 4)
- Every run ending is now a satirical morning-paper front page (NHẬT BÁO BUỔI SÁNG) written
  from the player's actual numbers — headline per ending, two-column article, donor quote,
  details react to Swiss safes, combo records, provinces conquered.
- CRITICAL FIX: PROVINCES was filtered by `once` instead of `provMult`, so owning any laundering
  front (or good-path honor) made provMult NaN and the boot self-test wiped the run.

## 2026-06-13 — Content wave 2 + mobile support (autonomous iterations 2-3)
- 4 new story events: storm relief (milk it vs. quiet real aid), warehouse "handling fees",
  golden-hour talkshow (clean deck), the accountant who knows everything resigns (dirty deck).
- Mobile layout: panels reorder for phones (play → shop → founder → meta), touch-sized
  controls, no nested scrollboxes, full-width toasts, keyboard hints hidden on touch.
- Node-based JS syntax gate added to the test harness.

## 2026-06-13 — Moral economy redesign + autonomous improvement loop begins
- **Kickback pipeline**: shady schemes pay 25–70% of income straight into the personal stash
  ("lại quả"), displayed live; remainder inflates the charity's books as a front.
- **Heat retune**: scheme suspicion ~6× gentler + one-time +3% spike per purchase — evil is a
  manageable heat game instead of instant suicide.
- **Dirty-money exclusives**: laundering fronts (car wash / karaoke / real estate, −15% scheme
  heat each) and Swiss safes (preserve stash-bonus connections if caught). Hidden from clean players.
- **Stash cash-out**: personal wealth converts to bonus connections at run end; confiscated if caught.
- **Skim hustle boost**: gross income rises +0.6% per skim% — the slider itself tempts.
- **State-aware events**: `when` predicates; 5 guilt-presuming events now require the actual crime;
  new clean-player deck (CSR offer, students, friendly inspection) + devil's-bargain corruption offer.
- Validation sweep: greedy now earns 76 conns/h vs saint 99 (ratio 1.30 — tempting, not dominant).
- New achievements for the dirty-money arc.
- TV-chyron news ticker (🔴 TRỰC TIẾP crawl), premium donate button (rotating gold ring, drawn
  steaming rice bowl, ripple), "VIRAL 💥" crit wording.
- Project published: repo public + GitHub Pages hosting.

## Earlier (single session, 2026-06-12)
- v1: core clicker (fund/stash/skim/suspicion, shop, endings, news ticker).
- v2: prestige (connections + perks), choice events, achievements, reset buttons.
- v3: visual overhaul (glassmorphism, sound, golden envelopes, crits, buffs, offline earnings,
  provinces, buy×N, save export/import).
- v4: intro cinematic, run modifiers, apology minigame, endings gallery, combos, generative
  music, auto-clicker perk, donor bubbles, Konami egg; founder avatar scene + Vietnam influence
  map (hand-drawn SVG, geo-accurate coastline); progressive disclosure everywhere.
- Balance: simulator + auto-tuning sweep built; economy retuned end-to-end (tiered paybacks,
  log connections, kitchen-off-the-top, NaN-proof saves).

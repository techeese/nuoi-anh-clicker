# Nuôi Anh — Design Charter

> The north star for every change. If an improvement fights this document, the improvement loses.

## What this game is

A **satirical Vietnamese idle/clicker game** inspired by the public scandal around a famous
charity project (Dec 2025 – Jun 2026 news cycle). The player runs a fictional charity that
feeds mountain children — and decides, minute by minute, whether to run it honestly or to
quietly become the villain the news warned about.

**Everything is parody.** All characters are fictional; the footer disclaimer stays forever.
The game's moral force comes from mechanics, not from naming anyone.

## The core loop

1. **Click + generators** raise donations. The kitchen takes 20% off the top — kids eat first.
2. The **skim slider** and **shady schemes** divert money to the personal stash ("lại quả"
   kickbacks pay 25–70% of scheme income straight to the pocket).
3. **Suspicion** is the price of sin: superlinear in skim, per-scheme heat, purchase spikes —
   cooled by audits, medals, PR, laundering fronts. 100% = busted (one livestream-apology save).
4. Runs end in one of 4 ways: **caught / dissolve / escape (33 tỷ stash) / saint (secret)** —
   each pays meta-currency (**connections 🤝**) for permanent perks across runs.

## The moral architecture (the actual point)

- **Evil must be tempting**: fastest personal wealth, exclusive tools (laundering, Swiss safes),
  a stash that converts to connections — at escalating, *legible* risk (live suspicion rate).
  Target: greedy ≈ 0.6–1.6× saint in connections/hour. Tempting, never dominant.
- **Clean must be secretly rewarded**: the hidden good path (10 clean minutes + 2,000 real meals)
  unlocks halo ✨ currency and legitimate fame income. The saint ending pays 2×.
- **Events must be honest**: consequences only for crimes actually committed (`when` predicates);
  clean players get their own deck — including devil's-bargain offers, because temptation is
  the theme.
- **The kitchen is sacred**: meals cook off the top of every donation. The only way to starve
  the children is the player's own greed. That's the satire.

## Fun is the first quality bar (owner directive)

Every change must make the game MORE FUN to play, or protect existing fun. Fun here means:
moment-to-moment juice (clicks feel good), interesting decisions every minute (temptation with
teeth), humor that lands (dry, Vietnamese internet register), and pacing that respects the
player's time. When a mechanically elegant idea and a fun idea compete, fun wins. When in
doubt, playtest the feeling, not the formula.

## Hard rules

1. **Single self-contained `index.html`** — no build step, no dependencies beyond Google Fonts.
2. **Vietnamese-first** text with light English hints; satire dry, never cruel; no real names.
3. **Never break saves**: every new state field gets `freshState()` default + `load()` migration
   + `sanitize()` entry (use `Number.isFinite`, never bare `isFinite` — NaN serializes to null).
4. **Balance changes go through the toolchain**: mirror mechanics in `engine.js`, run
   `node sweep.js`, keep the 12 reasonableness targets green before shipping numbers.
5. **Test before push**: headless Chrome harness (fresh boot + seeded dirty/poisoned saves,
   simulated clicks, JS-error capture in `<title>`). Push to GitHub after meaningful batches —
   Pages redeploys `main` automatically.
6. **Obviously-fictional names only**: characters and companies get meta/punny names a reader
   instantly recognizes as satire ("Cty CP Rất Minh Bạch", donor nicknames) or pure role names
   ("chị kế toán"). NEVER plausibly-real person or company names. Geographic names (provinces,
   villages) are allowed. Poetic child names (Mây) are fine.
7. **Mobile parity is a release gate**: every UI change is screenshot-verified at 390px
   (nothing clipped, touch-sized targets, play→shop→founder→meta order) before it ships.
   Many players will only ever see the phone version.

## Toolchain map

| File | Purpose |
|---|---|
| `index.html` | the entire game |
| `engine.js` | config-driven replica of game math for simulation |
| `sweep.js` | coordinate-descent auto-tuner vs. 12 design targets |
| `sim.js` | (legacy) standalone strategy simulator |
| `clear-save.html` | factory-reset helper |

## Improvement compass (12 areas the loop rotates through)

1. **Mechanics depth** · 2. **Content** (events/items/achievements) · 3. **Narrative arc** ·
4. **Graphics & juice** · 5. **Audio** · 6. **UX & onboarding** · 7. **Balance & economy** ·
8. **Retention & meta** · 9. **Tech quality** · 10. **Testing & tooling** ·
11. **Docs & presentation** · 12. **Distribution** (Pages/PWA).
Broken things always win; otherwise prefer areas untouched in the last 3 iterations.

## Voice & aesthetic

Glassmorphism dark UI, gold accents, hand-drawn SVG (founder avatar scene, Vietnam influence
map, steaming rice-bowl button). Synthesized WebAudio, no asset files. News ticker speaks in
Vietnamese internet-culture register (#SaoKêĐâu). The founder caption arc tells the story:
nhiệt huyết → thành đạt → "nghi phạm tiềm năng".

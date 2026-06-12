# Changelog

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

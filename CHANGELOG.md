# Changelog

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

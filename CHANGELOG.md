# Changelog

## 2026-06-13 — Maintenance sprint 10 + flow reflection (iteration 55)
- Sweep: stable, same two eternal hairlines, balance unchanged since the promise era.
- Bot 5-min: 70 buys, 4 envelopes, 6 journal entries, zero errors, no soft-locks.
- Full-page 390px audit: halo + four letter pins + twin chips + promise line all healthy.
- Flow reflection 46–55: 9 feature iterations, zero reverts, zero incidents; both false
  alarms were harness-side. Ad-hoc showEvent reuse promoted to a playbook recipe; minimal
  seeds fully adopted; compass completed a full rotation this cycle.

## 2026-06-13 — Phong bì đỏ viền đen (iteration 54)
- ~12% of golden envelopes now spawn dark: red-glowing, dimmer, bobbing slower ("like it's
  heavier"), telegraphing risk before you click. Opening one is a choice, not candy: an
  anonymous tip about a 'friendly' charity's second ledger — forward it to chị phóng viên
  (suspicion -7), 'cooperate' with the nameless sender (stash +, suspicion +6, and
  bargains++ so clean hands are genuinely lost), or burn it unread (nothing — except the
  question of how many envelopes have YOUR name inside).
- Ignoring it entirely remains valid: it expires like any envelope. Reuses the event-card
  machinery, so the journal logs your choice automatically.
- Verified: gates ×2, forced-dark walk (spawn → choice card → bargains=1 on the dirty
  path), 390px envelope visual distinct and collision-free.

## 2026-06-13 — Ending stingers (iteration 53)
- Each fate now has a musical signature: 😇 saint — pentatonic ascent resolving into a warm
  three-note chord; 🏝️ escape — a quick rising arpeggio and one long high note fading (the
  jet shrinking to a dot); 📦 dissolve — a two-note downward shrug; 🚔 caught — four
  descending sawtooth steps and a 98Hz door-close, timed to land as the trial yields to the
  front page.
- All synthesized through the existing beep() helper, no assets. Verified: gates ×2,
  unmuted escape and trial→caught walks error-free. No UI change.

## 2026-06-13 — The wall of letters (iteration 52)
- Mây's letters now hang on a string in the founder scene — one small cream paper per
  letter received, pinned in the top-left sky. The clean path finally has visual parity
  with the car and villa that tell the dirty story.
- The cruelest pixel in the game: when the mail goes silent (maySilenced), a dashed empty
  outline appears at the next slot — the letter that never came stays on the wall.
- Pure scene SVG + renderAvatar toggles, zero state changes. Verified: gates ×2, four
  seeded states (3 letters / 2+silenced / dirty hidden / clean auto-delivery), 390px scene
  crop legible and collision-free.

## 2026-06-13 — Bưu thiếp từ hòn đảo: the escape epilogue (iteration 51)
- The escape "win" finally has a cost you can read: if Mây ever wrote to you (≥2 letters),
  the ending now appends a postcard — one year later, a thrice-forwarded envelope reaches
  the island. Her letter came back 'không rõ địa chỉ'; the school still cooks, less meat
  now; and if you handwrote replies: "Con vẫn giữ mấy lá thư chú viết. Chữ xấu mà con
  không nỡ bỏ." Closing line: she still hasn't erased your name from her notebook.
- Renders from the snapshot inside frontPage, so archived escapes and their end cards keep
  the postcard. No mechanics changed — escape stays optimal for stash; it just tastes
  different now.
- Verified: gates ×2, escape walk with letters shows all three beats / control without
  letters shows none, 390px capture clean (newspaper + lined-paper postcard + buttons).

## 2026-06-13 — Maintenance sprint 9 (iteration 50)
- Sweep: 10/12 (the two eternal hairlines), promise-era balance holding: runsToMax 9.2,
  saint/greedy 1.30.
- Bot 5-min, recipe extended for the promise prompt + journal peeks: 70 purchases (record),
  7 organic journal entries, zero JS errors, no soft-locks.
- Full-page 390px audit: promise progress line, twin chips (💌 + 📔) styled and comfortable,
  panel order intact, no overflow. No interval growth this cycle.
- Compass rotation 46–49 healthy (docs → content → mechanics → UX); full flow reflection
  next due ~55.

## 2026-06-13 — Nhật ký dự án: the run journal (iteration 49)
- A 📔 chip beside Mây's letters opens the run's own diary: every event answered (with the
  choice you made in italics), letters arrived/replied, the silence beat, promises sworn,
  first launch of each scheme, sao kê publications, finding the hidden path — newest first,
  capped at 40 entries, persisted in the save.
- Reading back your own decision history is the satire turned inward: "Ngày 5 — 😈 Khởi
  động 'Mã nuôi em trùng lặp'" sits right under "Ngày 2 — bạn hứa từng đồng sẽ đến đúng
  nơi."
- Verified: gates ×2, accumulation harness (event + scheme + seeded entries, persisted 5,
  overlay open/close), 390px clean after fixing an unstyled close button caught on the
  first capture.

## 2026-06-13 — Lời hứa đầu dự án (iteration 48)
- Every run opens with a press conference: swear to one of three promises (🍚 30.000 bữa /
  🤲 never skim past 20% / 🗓️ survive 20 days) or decline. Kept promises pay +25%
  connections at run end; either way the ending newspaper remembers — kept gets "một chi
  tiết hiếm gặp trong mảng tin này", forgotten gets the silence treatment.
- Live progress line under the forecast (cached render, no frame churn). Old mid-run saves
  are never prompted (totalRaised ≥ 1tr gate); the prompt re-fires on every new run.
- Balance: all three promises are keepable by competent play on either moral path → engine
  models the bonus as flat ×1.25 under optimal play. Sweep: runsToMax 11.4 → 9.2 (in band),
  saint/greedy ratio unchanged at 1.30, same two eternal hairlines.
- gate.sh fresh harness updated in the same commit — the canonical first session now
  includes answering the press (landmine logged: gates must follow the real flow).
- Verified: gates green through the new flow, selection persists + line renders, kept vs
  broken pair shows the exact ×1.25 (6 vs 5 conns) and both paper lines, 390px overlay +
  progress line clean.

## 2026-06-13 — Cà phê của hai người phụ nữ (iteration 47)
- The two arcs finally meet: if you let chị kế toán walk AND the journalist is on your
  trail, a leaked photo shows them sharing coffee — with the brown notebook on the table.
  Choices: buy the notebook back (30% of stash, 50/50 it's a photocopy — "tiền thì không
  được hoàn"), smear the accountant first (40/60, backfire is her posting your signed
  double-salary slip), or do nothing and sleep well for once (+6 heat, one dignity beat).
- Fires once per run (S.crossDone flag with migration); consequences only exist for players
  who actually burned her — the charter's honest-events rule across arc boundaries.
- Verified: gates ×2, both ends of the choice spectrum walked (stash ×0.7 exact + flag set;
  do-nothing leaves stash untouched).

## 2026-06-13 — README + repo presentation refresh (iteration 46)
- Features section rewritten around what actually defines the game now: the visible-money
  language, bé Mây's letters & replies, the chị phóng viên arc, newspaper endings →
  archive → shareable cards, conscience audio. New hero screenshot (1400px 3-column,
  founder + Mercedes at night, skim mid-temptation).
- GitHub repo description + topics set (clicker-game, incremental-game, satire, vietnamese).

## 2026-06-13 — Maintenance sprint 8 + flow reflection (iteration 45)
- Sweep: 10/12, the two eternal hairlines, optimizer suggestions rejected (sixth time).
- Bot 5-min: 59 purchases, zero errors, no soft-locks. (letters=0 is correct — a greedy
  bot dirties itself before Mây's first letter can fire.)
- Full-page 390px audit on a maximal clean-path seed: letter chip (5), honest split bar,
  halo'd founder, records, both 📰 case-file chips, golden achievement cells — no overflow.
- Flow reflection (31–45): grep-anchors + Edit-tool discipline = zero anchor failures in 15
  iterations; minimal-seed recipe verified and added to the playbook (kills the 25-line
  seed copy-paste); screenshot scaffolding consolidated; compass gaps flagged → README
  refresh queued (docs are ~15 iterations stale).

## 2026-06-13 — End cards from the archive (iteration 44)
- The archive overlay gains a gold 🖼️ Lưu ảnh button: any case file with a stored snapshot
  can mint its ending card retroactively — old runs become postable images too.
- Verified: gates ×2, archived-saint click-through renders the correct 1000×524 card from
  the snapshot (green headline, +30 quan hệ, Mây line), 390px two-button row clean.

## 2026-06-13 — Mây's fifth letter: em Suối (iteration 43)
- A late-game letter at 150.000 bữa cơm: Mây (now lớp 5) is teaching first-grader Suối to
  write, answers "chú là ai" with "người mình chưa gặp mà mình tin", and signs off with the
  series' quietest line — "Cô giáo thì không giàu. Nhưng mà no, chú ạ." Suối's scrawl rides
  the signature. New crayon drawing: schoolhouse + big-and-small stick figures.
- New reaction openers for reply 4: warm → Mây shows Suối the whole stack of letters;
  formal → "Em tưởng chú là một công ty."
- Letter-count plumbing un-hardcoded (sanitize bound, mayReplies slice, away-report check —
  three scattered `4` literals; landmine logged).
- Verified: gates ×2, trigger + both reaction variants asserted (5 letters persist, reply
  row live), 390px capture of the longest letter fits cleanly.

## 2026-06-13 — Shareable end card (iteration 42)
- New 🖼️ "Lưu ảnh kết cục" button on every ending: renders a 1000×524 canvas card from the
  run snapshot — ending emoji + colored headline (🚔 SỤP ĐỔ / 🏝️ BIẾN MẤT / 📦 GIẢI THỂ /
  😇 NGƯỜI TỬ TẾ), key numbers, "💌 thư của Mây vẫn trong ví" when ≥2 warm replies, and the
  parody disclaimer baked into the image footer.
- navigator.share with files on mobile, download fallback elsewhere.
- Verified: gates ×2, toBlob-intercept harness (1000×524 confirmed, no draw errors after a
  harness-side DOM-wipe false alarm), card visual inspected, 390px ending overlay clean.

## 2026-06-13 — Stash drip (iteration 41)
- Passive kickback income is now visible moment-to-moment: every 4 seconds a small dirty-gold
  "+X₫ 🤫" rises out of the túi riêng stat box while schemes pay. Completes the visible-money
  language (it.33 click cuts, it.34 slider split) — charter line "crime pays, visibly" now
  holds for all three income paths. Clean players see nothing new.
- Verified: gates ×2, scheme-save watcher saw drips (+120,4k₫ 🤫) / clean save saw zero,
  390px capture confirms placement in the stat box corner.

## 2026-06-13 — Maintenance sprint 7 (iteration 40)
- Sweep: same 10/12 with the two eternal hairlines; optimizer suggestions rejected as ever.
- Bot 5-minute playthrough with the CORRECTED buy selector: 60 purchases (first sprint bot
  to actually exercise the shop + shady kickback economy), zero JS errors, no soft-locks.
- Full-page 390px audit: panel order intact, all 5 new achievement cells present and
  rendering (DOM-asserted 5/5 + 17 unlocked cells highlighted on a rich seed).
- Perf: 905 DOM nodes on a fully-populated page, interval count unchanged. Healthy.

## 2026-06-13 — Achievements for the new systems (iteration 39)
- Five achievements wire recent features into the reward loop: 💌 Hồi âm bằng tay (3 warm
  letter replies in one run), 🧧 Hai chiếc phong bì (bribe the journalist twice — "Ảnh chụp
  đẹp lắm."), 📰 Đủ ba kỳ báo (survive her full series, redemption excluded — that path has
  its own badge), 🙇 Người quay đầu (earn her redemption piece), 🗂️ Người giữ hồ sơ (re-read
  an archived front page; new META.archRead flag with migration).
- Both moral paths now have completionist pull into the new content.
- Verified: gates ×2, two seeded unlock harnesses (3 earned + 2 correctly locked, then the
  inverse set; archivist unlocks on closing the archive — checker is paused-gated by design).

## 2026-06-13 — The sound of conscience (iteration 38)
- Clicks now sound like what you are: clean hands ring a bright 650–1000Hz sine; as the skim
  slider rises the same coin lowers, dulls and loses its sparkle (330–390Hz triangle past
  ~55%). Nobody is told — most players will feel it before they see it.
- The sinking cut floatie lands with a soft low pocket-thud (~110Hz, quiet under the coin).
- Honest purchases keep their rising two-note chime; schemes get the same two notes
  descending (sBuyShady).
- Tooling find: the documented bot recipe's buy step was a silent no-op (`.shop-list
  button` matches nothing — items are DIVs and #perkList shadows #shopList). Recipe fixed
  in the playbook; harnesses now assert bought > 0.
- Verified: gates ×2, tone-curve math table in node, unmuted dirty-save harness (skim 60,
  4 shady buys, 8 clicks/s) with zero JS errors. No UI change.

## 2026-06-13 — 'Người quay đầu': the redemption beat (iteration 37)
- New reform mechanic: S.reformTime tracks the current streak with skim at 0 AND no scheme
  kickbacks — relapse resets it to zero. (cleanTime can't serve: it only accrues for the
  historically clean, and redemption is precisely for those who weren't.)
- If the journalist published her series (nbStage ≥ 2) and you've been reformed for 5+
  minutes, she returns without a recorder and offers to write 'Người quay đầu'. Accept
  (suspicion -12, +1 halo if the good path is open, and a pinned comment from a Điện Biên
  parent) or decline (-4, and "số liệu của anh, em vẫn xem mỗi tháng").
- Ending tie-ins: saint with the redemption piece gets her at the handover ceremony with
  its final installment; relapse-then-caught gets the cruelest line in the game — "Bài
  'Người quay đầu' năm nào được gỡ xuống trong im lặng."
- Verified: gates ×2, reformed-player chain walk (stage=4/redeemed), relapse-reset assert,
  caught takedown line + archived saint reprint both render.

## 2026-06-13 — Nhà báo điều tra arc (iteration 36)
- The one-shot journalist event became a 3-stage chained arc: chị phóng viên of the
  (obviously fictional) weekly 'Soi Kỹ Cuối Tuần' contacts you → 'Kỳ 2: Đồng tiền rẽ ngang'
  drops with a 24-hour ultimatum → the finale 'Người đếm bữa cơm' prints the meal-math of
  your skim percentage.
- Bribes work — and compound: every envelope gets photographed; bribing twice (bribed2)
  adds the envelope-photo box to the finale AND to the caught-ending newspaper ("kèm phụ
  lục: ảnh hai chiếc phong bì"). Suing has 35/65 odds. The darkest option raises your own
  skim slider by 10 on screen.
- Honest-events rule held: stages 2–3 gate on !isClean() — clean up and she finds nothing.
  All effects discrete (one-time deltas), no engine mirror needed. Snapshot carries nbS/nbM
  so archived papers reprint the citation.
- Verified: gates ×2, 3-stage chain walk (4s-scheduler test copy, pool-filtered) landed
  stage=3/bribed2, bust harness shows the newspaper citation + envelope appendix, stage-2
  card clean at 390px.

## 2026-06-13 — Maintenance sprint 6 (iteration 35)
- Sweep: 10/12 green, only the two known eternal hairlines (saint 879s vs 900 floor — sim
  bots play optimally; click ratio 1.29 vs 1.30). Optimizer suggestions rejected again (they
  chase the hairlines at the cost of real-player pacing).
- Bot 5-minute playthrough: zero JS errors, no soft-locks, fund growth healthy.
- Full 390px mobile audit (full-page capture + crops): split bar, run-log 📰 chips, perks,
  achievements grid, bust-trial ending newspaper — all clean. Panel order intact.
- Perf: no new intervals since sprint 5; 611 DOM nodes after 60s of heavy skim-clicking
  (visible-cut floaties clean up properly, no leak).
- Audit note chased and cleared: hào-quang stat on a dirty save is intended —
  META.goodFound permanently unlocks good-path visibility across runs (line ~3872).

## 2026-06-13 — Đồng tiền đi đâu: live split bar under the skim slider (iteration 34)
- A stacked bar + one-line legend now shows where every 100k₫ of donations goes as you drag:
  🍚 bếp (green) · 🏗 dự án (blue) · 🤫 túi (hatched grey). At 55% skim the hatched segment
  visibly swallows the bar — the moral cost of the slider is legible at the moment of choice.
- Clean players see the honest 20/80 kitchen split (teaches the economy); the pocket segment
  and legend entry only exist when skim > 0. Recomputed only on skim change (no frame churn).
- Verified: gates green, 6-assert slider-drag harness (0% and 50% positions, legend text),
  390px one-line legend + visible bar, 1240px clean.

## 2026-06-13 — The visible cut (iteration 33)
- When skim > 0, every click now splits on screen: the main floatie shows only what the
  charity actually receives (+net, gold), while the skimmed slice sinks below the table as a
  grey "−cut" floatie tagged 🤫 / phí 'vận hành' / chút 'động viên' / lộc lá. At high skim
  the sinking number is visibly BIGGER than the rising one — the satire does itself.
- Money-burst emoji darken at skim ≥ 40% (🤫 🕶️ join the spray). Clean players see exactly
  what they saw before. Pure cosmetics: no math changed, challenge rnd() draw count intact.
- Hardening: earn() now uses Number.isFinite (was bare isFinite — landmine class).
- Verified: gates green ×2, dirty save shows 42 cut-floatie sightings / clean save shows
  zero, single-click 390px capture proves honest accounting (+10,5k vs −12,9k at 55% skim).

## 2026-06-13 — Newspaper archive in case files (iteration 32)
- Every ending's front page is now saved with the run log: tap a 🗂️ case-file card with a 📰
  chip to reprint that run's full newspaper (headline, numbers, kế toán line, Mây's letters)
  in an archive overlay — "Lưu trữ" dateline replaces "Số đặc biệt".
- `frontPage()` refactored to render from a run snapshot instead of live state; run-log
  entries now carry the extra fields (clicks, fund, max combo, safes, provinces, warm
  replies). Pre-archive entries stay as plain stat rows — graceful, not clickable.
- Verified: gates green, mixed old/new-format archive walk (8 asserts), natural-bust harness
  proves endRun stores the snapshot and the paper renders from it, 390px + 1240px shots.

## 2026-06-13 — Writing back to Mây (iteration 31)
- Each letter now offers a reply choice: ✍️ handwrite a few honest lines (paper-toned button,
  Mây's world) or 🎁 have the assistant send a gift + printed card (dark corporate button,
  the founder's world). "Cất vào ví 💌" remains the silent third option.
- The next letter opens with Mây reacting to how you answered — warm replies get warmth back
  ("cô bảo chữ chú xấu hơn chữ con"), printed cards get polite distance ending in "chú có đọc
  thư con không?".
- Ending tie-ins: saint with ≥2 handwritten replies adds the stack of letters "cả thư đi lẫn
  thư trả lời" to the newspaper; caught with ≥2 adds "dấu vết của một người từng rất khác".
- New save field `mayReplies` (index-aligned with letters; sanitize maps invalid→null, never
  filters). Verified: gates green, 5-assert chip→reply headless walk, 390px + 1240px shots.

## 2026-06-13 — Maintenance sprint 5 + flow reflection (iteration 30)
- Sweep 21 greens (the two eternal hairlines only). Bot 5-min: zero errors, organically hit
  FEVER at 9 clicks/s. Single file at 208KB. Live deploy at parity. Legacy mobile audit pass.
- Flow reflection: changelog updates now PREPEND after the header (the per-iteration marker
  chain was fragile); grep-the-anchor-first discipline added to the landmine log.

## 2026-06-13 — Lifetime records (iteration 29)
- 🏆 Kỷ lục strip in Legacy: best raised, best stash, fastest saint, longest survival, best
  connection haul — with a "KỶ LỤC MỚI!" toast when one falls.

## 2026-06-13 — Modifier expansion pack (iteration 28)
- Four new run modifiers with real mechanical hooks: 📚 Mùa thi đại học (click +30%, income
  -10%), 🍿 Drama tổng (heat +25% but PR -30%), 🏮 Tháng cô hồn (double envelopes, +2%
  suspicion per open — lộc có giá), 📜 Nghị định mới (natural cooling +0.1%/s, schemes
  scrutinized +25%). Eleven thời cuộc total; each verified with differential rate readouts.

## 2026-06-13 — FEVER mode (iteration 27)
- Sustain a 25+ click combo: golden edge-glow pulse, crit chance 5%→12%, coins ring higher,
  "🔥🔥 FEVER" display. Pure fun for the core verb; challenge-deterministic (same draw count).
  +1 achievement (Lên đồng). Ideation banked: modifier expansion pack, lifetime records.

## 2026-06-13 — Moral-state music (iteration 26)
- The generative ambient shifts with suspicion: bright pentatonic clean → minor shades with a
  minor-third shimmer at 35% → low, sparse, semitone-haunted notes with tritone accents past
  70%. The soundtrack knows what you did.

## 2026-06-13 — Maintenance sprint 4 (iteration 25)
- Sweep: 21 green checks; only the two known eternal hairlines (saint 13-15m vs 15m floor,
  click ratio 1.29 vs 1.30). Bot 5-min: ZERO errors while hammering the quick-bar at 2.5
  clicks/s alongside everything else. All three layout breakpoints regression-verified
  (390 / 1240 / 1440). Live deploy at parity (quick bar serving).

## 2026-06-13 — Desktop 3-column layout (iteration 24)
- ≥1280px: play column + shop pinned sticky side by side, founder & legacy stacked in column
  three — the entire core game fits one viewport with zero scrolling; only the museum scrolls.

## 2026-06-13 — Quick action bar + density pass (iteration 23)
- Owner directive: less scrolling, more game. A sticky bottom quick-bar (mini donate button,
  fund/stash, live suspicion meter) appears exactly when the real button leaves the viewport —
  clicking, watching money, and watching danger never require scrolling back up, on both
  mobile and desktop. IntersectionObserver with a scroll fallback.
- Density pass: tighter stats/click-zone/ticker/ledger paddings; main panel ~100px shorter.

## 2026-06-13 — Fun-first directive + first-run coach (iteration 22)
- Charter gains "Fun is the first quality bar" (owner directive): juice, decisions, humor,
  pacing — fun outranks elegance in every pick.
- First-run coach: four witty one-time hints at the exact moments confusion kills fun —
  first skim touch, suspicion first biting (20%), first golden envelope, first scheme buy.
  Once per player ever; no tutorial-speak.

## 2026-06-13 — Hồ sơ các dự án: run case files (iteration 21)
- Every finished run is now a permanent case file in Legacy: ending, date, raised, stash,
  meals, days survived, 💌 letters, accomplice flag, 🎲 challenge badge, connections earned.
  Your endings become a museum of past lives (capped 20, newest first).
- First use of the roadmap-drain ideation rule: banked first-run coach + moral-state music.

## 2026-06-13 — Maintenance sprint 3 + name-safety pass (iteration 20)
- Sprint: sweep 11/12 green (eternal saint hairline), 5-min bot ZERO errors (now exercising
  the trial too), 12 intervals (all light), live deploy at parity, full-page 390px regression pass.
- Name safety (owner directive): the accountant is now 'chị kế toán' throughout (no given
  name), shell companies are satirically impossible, donors are internet nicknames. The rule
  is encoded in DESIGN.md and the playbook.

## 2026-06-13 — Phiên toà (iteration 19)
- Caught endings open a courtroom sequence before the newspaper: up to five evidence beats
  built from the player's ACTUAL run — disguised ledger entries (with amounts), the life-chart
  greed crossover, peak skim, the bargain recording, foreign safes, chị Hạnh's testimony or
  numbered notebook, and Mây's letters in the defendant's wallet (the room goes quiet).
- Verdict scales with the crimes; meals genuinely served are argued as mitigation. Gavel SFX.

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

#!/bin/bash
# gate.sh — the non-negotiable release gates for Nuôi Anh.
# Usage: ./gate.sh   (exit 0 = safe to commit; anything else = DO NOT SHIP)
# Ship pattern: ./gate.sh && git add -A && git commit ...
set -u
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
FAIL=0
note() { printf '%s\n' "$*"; }
fail() { note "❌ $*"; FAIL=1; }
pass() { note "✅ $*"; }

# ---------- Gate 1: every <script> block parses ----------
node -e '
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
for (const b of blocks) new Function(b[1]);
console.log("blocks:", blocks.length);
' >/dev/null 2>/tmp/gate-syntax.err && pass "syntax: all script blocks parse" || fail "syntax: $(cat /tmp/gate-syntax.err | head -2)"

# ---------- Build harnesses ----------
python3 - <<'PYEOF'
html = open("index.html").read()

fresh_test = """
<script>
window.onerror = function(m,s,l){ document.title = "JSERR: " + m + " @" + l; };
setTimeout(function(){
  var ib = document.getElementById("introStartBtn"); if (ib) ib.click();
  // the canonical fresh flow now includes the opening-promise press conference (it.48)
  setTimeout(function(){
    var pb = document.querySelector("#promiseChoices button[data-pr='none']");
    if (pb) pb.click();
  }, 250);
  var d = document.getElementById("donateBtn"); var n = 0;
  var iv = setInterval(function(){ d.dispatchEvent(new MouseEvent("click",{clientX:300,clientY:300,bubbles:true})); if(++n>=25) clearInterval(iv); }, 80);
  setTimeout(function(){
    if (document.title.indexOf("JSERR") !== 0)
      document.title = "GATE_FRESH FUND=" + document.getElementById("fundVal").textContent;
  }, 3000);
}, 400);
</script>
"""
open("/tmp/gate-fresh.html","w").write(html.replace("</body>", fresh_test + "</body>"))

seed = """
<script>
localStorage.setItem("nuoi-anh-clicker-v4", JSON.stringify({
  meta: { connections: 5, runs: 1, perks: {}, achievements: {}, endings: {}, lifetimeRaised: 1e9, totalMeals: 10000, envOpened: 3, crits: 2,
          gotOffline: true, muted: true, music: false, introSeen: true, konami: false, actor: false, goodFound: false, saoKePub: false,
          avatarClicks: 0, numFmt: "vi", lastDailyDay: "" },
  run: { fund: 5e7, stash: 1e8, totalRaised: 5e8, meals: 9000, suspicion: 20, skim: 30,
         clicks: 100, startTime: Date.now() - 600000, owned: {volunteer: 10, gala: 4, dupcode: 3}, buffs: [],
         wasNear95: false, gameOver: false, maxSkim: 30, maxCombo: 10, apologyUsed: false, autoAcc: 0, modifier: "normal",
         halo: 0, haloProgress: 0, cleanTime: 0, goodUnlocked: false, mealAcc: 0, bargains: 0, recentEvents: [], ledger: [], saoKeAt: 0 },
  lastSeen: Date.now() - 5000
}));
</script>
"""
compat_test = """
<script>
window.onerror = function(m,s,l){ document.title = "JSERR: " + m + " @" + l; };
setTimeout(function(){
  if (document.title.indexOf("JSERR") !== 0)
    document.title = "GATE_COMPAT STASH=" + document.getElementById("stashVal").textContent +
      " SUB=" + document.getElementById("skimIncomeVal").textContent.slice(0, 20);
}, 4000);
</script>
"""
open("/tmp/gate-compat.html","w").write(html.replace("<body>", "<body>" + seed, 1).replace("</body>", compat_test + "</body>"))
PYEOF

run_chrome() {
  "$CHROME" --headless --disable-gpu --virtual-time-budget=9000 --dump-dom "file://$1" 2>/dev/null | grep -o "<title>[^<]*</title>"
}

# ---------- Gate 2: fresh player earns NON-ZERO money, no JS errors ----------
T=$(run_chrome /tmp/gate-fresh.html)
if echo "$T" | grep -q "JSERR"; then fail "fresh: $T"
elif ! echo "$T" | grep -q "GATE_FRESH"; then fail "fresh: title never set (boot died silently): $T"
elif echo "$T" | grep -qE "FUND=0₫"; then fail "fresh: fund is zero after 15 clicks (static-HTML masquerade?): $T"
else pass "fresh: $T"; fi

# ---------- Gate 3: pre-feature save migrates AND shows its seeded wealth ----------
T=$(run_chrome /tmp/gate-compat.html)
if echo "$T" | grep -q "JSERR"; then fail "compat: $T"
elif ! echo "$T" | grep -q "GATE_COMPAT"; then fail "compat: title never set: $T"
elif ! echo "$T" | grep -qE "STASH=1[0-9]{2},[0-9]+ tr₫|STASH=10[0-9],"; then
  # seeded 1e8 stash + kickbacks must read ~100-199 tr₫ — default 0₫ means the boot wiped it
  fail "compat: stash does not reflect the rich seed (got: $T)"
else pass "compat: $T"; fi

rm -f /tmp/gate-fresh.html /tmp/gate-compat.html /tmp/gate-syntax.err

if [ "$FAIL" -ne 0 ]; then
  note ""
  note "🚫 GATES FAILED — DO NOT COMMIT. Fix and re-run ./gate.sh"
  exit 1
fi
note ""
note "🟢 ALL GATES GREEN — safe to ship (./gate.sh && git commit …)"

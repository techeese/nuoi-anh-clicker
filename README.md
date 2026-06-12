# 🍚 Nuôi Anh — The Charity Tycoon

**▶️ Chơi ngay / Play now: https://techeese.github.io/nuoi-anh-clicker/**

A satirical Vietnamese idle/clicker game. You run a charity feeding mountain children —
and decide, minute by minute, whether to run it honestly… or become exactly the kind of
founder the news warned everyone about.

![gameplay](screenshot.png)

## Hai con đường / Two paths

- 😈 **Con đường tối**: kéo thanh "rút ruột", mở mã nuôi em trùng lặp, hoá đơn khống, công ty
  sân sau — tiền "lại quả" chảy thẳng vào túi riêng. Quản lý nhiệt nghi ngờ bằng PR, luật sư,
  tiệm rửa xe… và nếu mọi thứ vỡ lở, vẫn còn một buổi livestream khóc xin lỗi. Gom đủ 33 tỷ
  để "đi công tác nước ngoài".
- 😇 **Con đường sáng**: giữ tay sạch đủ lâu, nấu đủ bữa cơm thật, và một lá thư viết tay từ
  vùng cao sẽ mở ra con đường ẩn — hào quang ✨, danh tiếng sạch, và kết cục bí mật.

Suspicion is live and legible. Crime pays — visibly. Virtue pays too — secretly.
The only way to starve the kitchen is your own greed.

## Features

- Single self-contained `index.html` — no build, no dependencies. Open it and play.
- Prestige meta (connections 🤝 + permanent perks), 4 collectible endings, 25+ achievements.
- State-aware story events — consequences only for crimes you actually committed, plus
  devil's-bargain offers if you stay clean.
- Hand-drawn SVG founder avatar (his face, car, villa, and sweat reflect your choices) and a
  geo-accurate Vietnam influence map.
- Synthesized WebAudio SFX + generative ambient music. Golden envelopes, crits, combos,
  offline earnings, run modifiers, an apology-livestream minigame.
- Balance tuned by an automated simulator: `node sim.js`, `node sweep.js`.

## ⚠️ Disclaimer

Đây là trò chơi châm biếm (parody) nhằm mục đích giải trí và phê phán xã hội. Mọi nhân vật
đều là hư cấu, không ám chỉ cá nhân hay tổ chức cụ thể nào. Hãy luôn tìm hiểu kỹ và quyên góp
cho các tổ chức từ thiện minh bạch.

This is a satirical parody for entertainment and social commentary. All characters are
fictional. Please donate responsibly to transparent charities.

## Dev

| File | Purpose |
|---|---|
| `index.html` | the entire game |
| `engine.js` / `sweep.js` | balance simulation + auto-tuning against 12 design targets |
| `sim.js` | standalone strategy simulator |
| `DESIGN.md` | design charter — read before changing anything |
| `clear-save.html` | factory-reset helper |

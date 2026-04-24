---
title: 高二上自主學習報告 高一場
published: 2026-01-07
updated: 2026-04-17
description: '從零開始製作一隻 Discord Bot -- 北極企鵝'
image: ""
ogImage: 'https://pg72.tw/og/sdlearning-11302.png'
tags: ["自主學習", "Discord", "Python", "Discord.py", "JSON"]
category: '報告'
draft: true
lang: ''
---


<style>
.presenterm {
  display: grid;
  gap: 2.2rem;
}
.slide {
  position: relative;
  width: min(100%, 1024px);
  aspect-ratio: 4 / 3;
  padding: 3rem 3.2rem 2.8rem;
  border-radius: 24px;
  background: #0b0d12;
  color: #eef2ff;
  min-height: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  overflow: hidden;
  margin: 0 auto;
  font-size: 1rem;
}
.slide.fs-1 { font-size: 0.9rem; }
.slide.fs-2 { font-size: 1rem; }
.slide.fs-3 { font-size: 1.1rem; }
.slide.fs-4 { font-size: 1.25rem; }
.slide-inner {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  overflow: hidden;
}
.slide-inner > * {
  max-width: 100%;
}
.slide.align-center .slide-inner {
  text-align: center;
  align-items: center;
}
.slide.middle {
  display: grid;
  align-items: center;
}
.slide.middle .slide-inner {
  justify-content: center;
  position: relative;
  padding-top: 2.6rem;
}
.slide.middle .slide-inner > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.slide.center-all .slide-inner {
  justify-content: center;
  padding-top: 0;
}
.slide.center-all .slide-inner > :first-child {
  position: static;
}
.slide h1, .slide h2, .slide h3, .slide h4 {
  margin: 0.2em 0 0.5em;
  font-size: 1em;
  line-height: 1.25;
  font-weight: 700;
  display: inline-block;
  padding: 0.15rem 0.6rem;
  border-radius: 6px;
}
.slide h1 { color: #5fb0ff; background: #15263a; }
.slide h2 { color: #8ee36b; background: #1f2a1f; padding: 0.12rem 0.55rem; }
.slide h3 { color: #ff6b6b; background: #331b1b; padding: 0.15rem 0.5rem; }
.slide h4 { color: #eef2ff; background: #1a1d27; padding: 0.12rem 0.45rem; }
.slide-inner > h2:first-child {
  display: block;
  text-align: center;
  color: #f6a21b;
  background: transparent;
  padding: 0;
  letter-spacing: 0.08em;
}
.slide p, .slide li, .slide blockquote { font-size: 1em; line-height: 1.45; }
.slide p { margin: 0.2rem 0; }
.slide blockquote {
  border-left: 4px solid #6b7cff;
  padding-left: 1rem;
  color: #cfd6ff;
  width: 100%;
  box-sizing: border-box;
}
.slide code { color: #ffb86c; }
.slide pre { background: #111827; padding: 1rem 1.2rem; border-radius: 12px; overflow: auto; }
.slide img {
  max-width: 100%;
  max-height: 36vh;
  height: auto;
  display: block;
  margin: 0.4rem auto;
  border-radius: 12px;
  object-fit: contain;
}
.columns { display: grid; column-gap: 3rem; row-gap: 1.6rem; align-items: start; }
.columns.cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.columns.cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.columns.cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.columns .col {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.columns.layout-3-1 { grid-template-columns: 3fr 1fr; }
.columns.layout-3-1-2 { grid-template-columns: 3fr 1fr 2fr; }
.columns img { max-height: 100vh; }
.img-lg {
  width: 100%;
  max-width: 500px;
  max-height: 56vh;
}
.columns h1 {
  font-size: 1.1rem;
  color: #7aa2ff;
  font-weight: 600;
  margin: 0.2rem 0 0.4rem;
}
.command {
  font-size: 1em;
  letter-spacing: 0.02em;
  color: #7aa2ff;
  display: block;
  padding: 0.2rem 0;
  line-height: 1.5;
}
.slide-footer {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.8rem;
  color: #b5bde8;
  background: linear-gradient(180deg, rgba(11,13,18,0), rgba(11,13,18,0.9));
}
.slide-footer .center { text-align: center; }
.slide-footer .right { text-align: right; }
.noice { color: #7aa2ff; font-weight: 600; }
@media (max-width: 900px) {
  .slide {
    width: 100%;
    padding: 1.6rem 1.2rem 2.4rem;
  }
  .columns.cols-3, .columns.cols-4 { grid-template-columns: 1fr; }
  .slide img { max-height: 36vh; }
}

.prompt-title {
  text-align: center;
  color: #f6a21b;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0 0 1.1rem;
}
.prompt-title::before { content: ">_ "; color: #f6a21b; }
.list-tight { margin: 0.2rem 0 0.6rem 1.4rem; }
.list-tight li { margin: 0.2rem 0; }
.kicker { font-weight: 700; margin: 0.4rem 0 0.6rem; }
.command-block {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #7aa2ff;
  font-weight: 600;
  padding: 0.2rem 0.4rem 0.2rem 0;
}
.command-block::before {
  content: "";
  width: 0.9rem;
  height: 0.9rem;
  background: #3a8bd9;
  border-radius: 2px;
  display: inline-block;
}
.quote-box {
  background: #2b2f3e;
  border-left: 4px solid #f6a21b;
  padding: 0.6rem 0.9rem;
  margin: 0.4rem 0 0.6rem;
}
.step {
  font-weight: 700;
  margin: 0.2rem 0 0.4rem;
}
.list-circle {
  list-style: circle;
  margin: 0.2rem 0 0.6rem 1.6rem;
}
.chat-demo .chat-name {
  font-weight: 600;
  margin: 0.4rem 0 0.2rem;
}
.chat-demo .chat-line {
  background: #2b2f3e;
  border-left: 4px solid #f6a21b;
  padding: 0.35rem 0.8rem;
  margin: 0.2rem 0 0.6rem;
}
.vibe-compact blockquote {
  margin: 0.1rem 0 0.15rem;
}
.vibe-compact ul {
  margin: 0 0 0.35rem 1.3rem;
}
.vibe-compact li {
  margin: 0.12rem 0;
}
.track-demo .carrier {
  font-size: 1.2em;
  font-weight: 700;
  margin: 0.4rem 0 0.6rem;
}
.track-demo .pager {
  letter-spacing: 0.08em;
  margin-top: 0.6rem;
}
.title-line {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #5fb0ff;
  font-weight: 700;
  letter-spacing: 0.06em;
}
.title-line .sq {
  width: 1.2rem;
  height: 1.2rem;
  background: #3a8bd9;
  border-radius: 2px;
  display: inline-block;
}
.title-line .title-text {
  font-size: 1.8rem;
}
.title-line .title-sep {
  font-size: 1.6rem;
  margin: 0 0.2rem;
}
.author-line {
  color: #f6a21b;
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 0.9rem;
}
</style>

這是我在高二上進行的自主學習的報告分享，也就是在全高一面前（學弟妹們）分享我的成果！這篇的主題是：「從零開始製作一款遊戲 — 溶蝕」，其實內容很有趣，有興趣的歡迎查看下面的所有資訊喔！

## YouTube 影片鏈結：

<iframe width="100%" height="468" src="https://www.youtube.com/embed/RA4pnzebwfU?si=JGXcD2jF5nYKwxvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 簡報資訊：

| 欄位     | 說明 |
|----------|------|
| 標題     | Discord Bot—一隻北極企鵝 |
| 內容     | 功能示意、程式畫面、錯誤紀錄等等|
| 簡報頁數  | 共 31 頁 |
| 來源     | [pg72.tw](https://pg72.tw/posts/sdlearning-11401/) |
| 作者     | PGpenguin72 |
| 簡報軟體  | [Presenterm](https://github.com/mfontanini/presenterm) |
| 檔案下載  | [MD](https://file.pg72.tw/share/nj0aZsBh) |

## 簡報軟體鏈結：
::github{repo="mfontanini/presenterm"}


<p></p>

## 簡報預覽（用網頁模擬）：

<div class="presenterm">
<section class="slide align-center middle center-all fs-3"><div class="slide-inner">
<h1>從零開始製作一款遊戲 溶蝕</h1>
<div class="author-line">author. 杜昱叡</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">1 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>我是誰？</h2>
<div class="columns cols-3 layout-3-1-2">
<div class="col">
<h2>杜昱叡</h2>
<ul>
<li>AHSNCCU11313 [#116學測生]</li>
<li>一隻神奇的PG企鵝(來自<em>台中市</em>)</li>
<li>喜歡🎮打音遊,🎵聽音樂,🏸打羽球,💻寫程式</li>
</ul>
<blockquote><p>我的Instagram: @pg_penguin_72</p></blockquote>
</div>
<div class="col"></div>
<div class="col"><img src="./assets/pg72.png" alt="我的Discord個人資料截圖"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">2 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>溶蝕 是什麼？</h2>
<div class="columns cols-2 layout-3-1">
<div class="col">
<blockquote><p>溶蝕 是一款我們極區工作室開發的恐怖遊戲</p></blockquote>
<ul>
<li>暑假開始籌備，預計製作一年。</li>
<li>2D遊戲，操作簡單，有解謎元素。</li>
<li>正常世界和不正常世界的交錯，異常藏在日常中。</li>
<li>不同選擇，會有不同結局。</li>
</ul>
</div>
<div class="col"><img src="./assets/rs.png" alt="溶蝕的遊戲圖標"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">3 / 25</span>
</footer></section>

<section class="slide align-center middle fs-4"><div class="slide-inner">
<h2>自主學習我做了啥？</h2>
<h1>製作這款遊戲.......嗎？</h1>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">4 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>製作歷程</h2>
<p><code>暑假（理想）</code></p>
<p>🌰 高密度討論、Demo成形、我們相信做得出來</p>
<p>🌰 架好Unity／Git／Discord，專案正式啟動</p>
<p><code>升高二後（現實）</code></p>
<p>🕰 課業＋補習擠滿生活</p>
<p>📉 會議延期、Unity打開次數下降</p>
<p>🧠 專注力被切碎，專案幾乎停擺</p>
<p><code>現在</code></p>
<p>《溶蝕》不是被放棄，它只是被生活慢慢「溶蝕」了</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">5 / 25</span>
</footer></section>

<section class="slide align-center middle fs-3"><div class="slide-inner">
<h2>這時候就一定會有人說</h2>
<h3>你都沒做遊戲了，那你要講什麼？</h3>
<h1>&gt;謝謝大家聽我的分享！</h1>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">6 / 25</span>
</footer></section>

<section class="slide align-center middle fs-3"><div class="slide-inner">
<h2>經驗分享</h2>
<p>好剛剛那段是開玩笑的</p>
<p>那既然遊戲沒東西可講的話，那我們來換主題吧~</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">7 / 25</span>
</footer></section>

<section class="slide align-center middle center-all fs-3"><div class="slide-inner">
<h1>斜槓學習 不做遊戲做小專案</h1>
<div class="author-line">author. 杜昱叡</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">8 / 25</span>
</footer></section>

<section class="slide fs-3"><div class="slide-inner">
<h2>專案介紹</h2>
<div class="columns cols-2">
<div class="col"><p>自主學習簽到</p><p>館藏查詢系統</p></div>
<div class="col"><p>合作社熱食系統</p><p>113餐飲系統</p></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">9 / 25</span>
</footer></section>

<section class="slide fs-3"><div class="slide-inner">
<h2>專案介紹</h2>
<div class="columns cols-2">
<div class="col"><h1>自主學習簽到</h1><p><span style="color:#333333">館藏查詢系統</span></p></div>
<div class="col"><p><span style="color:#333333">合作社熱食系統</span></p><h1>113餐飲系統</h1></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">10 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>專案一</h2>
<h3>自主學習簽到系統</h3>
<blockquote><p>發想來源：小老師，點名累，學生自主簽到。</p></blockquote>
<blockquote><p>花了多久時間？從測試到發布，只花了2天。</p></blockquote>
<blockquote><p>有什麼特色？可以輸入班級座號簽到，或刷學生證。</p></blockquote>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">11 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>相關照片</h2>
<img src="./assets/sign.jpeg" alt="學生簽到的照片,簽到介面">
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">12 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>專案二</h2>
<h3>113餐飲系統</h3>
<blockquote><p>發想來源：班上正好有這個需求，就請我幫忙了</p></blockquote>
<blockquote><p>花了多久時間？一個禮拜（vibe coding）。</p></blockquote>
<blockquote><p>有什麼特色？從點餐收銀 製餐備餐 取餐叫號 一個系統就搞定</p></blockquote>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">13 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>相關數據</h2>
<img src="./assets/datas.png" alt="漏單率表格">
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">14 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>相關照片</h2>
<div class="columns cols-2">
<div class="col"><img src="./assets/sys1.png" alt="相關照片"><img src="./assets/sys2.png" alt="相關照片"></div>
<div class="col"><img src="./assets/sys3.png" alt="相關照片"><img src="./assets/sys4.png" alt="相關照片"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">15 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>相關照片</h2>
<div class="columns cols-2">
<div class="col"><img src="./assets/sys5.png" alt="相關照片"></div>
<div class="col"><img src="./assets/sys6.png" alt="相關照片"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">16 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>相關照片</h2>
<div class="columns cols-2">
<div class="col"><img src="./assets/mealSys_2.jpeg" alt="相關照片"></div>
<div class="col"><img src="./assets/mealSys.jpeg" alt="相關照片"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">17 / 25</span>
</footer></section>

<section class="slide fs-1"><div class="slide-inner">
<h2>Vibe Coding 介紹</h2>
<blockquote><p>簡介:</p></blockquote>
<pre><code>\x1b[2J\x1b[H\x1b[?25l\x1b[31m[presenterm]\x1b[0m  L0AD1NG: ./selfstudy.md
\x1b[33m[presenterm]\x1b[0m  WARN: unknown key `f0nt_size` → ignored (??)
\x1b[31m[presenterm]\x1b[0m  ERROR: invalid UTF-8 sequence at byte 0xC3 0x28  (Ã( ���)
...
[presenterm] FATAL: parser blew up
reason: malformed byte sequence
...
thread 'main' panicked at 'called `Option::unwrap()` on a `None` value'</code></pre>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">18 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>Vibe Coding 介紹</h2>
<h3>PGpenguin72:</h3>
<p>我的簡報壞掉啦！！！ 幫我修好簡報！</p>
<h3>ChatGPT:</h3>
<p>我已經幫你把簡報的 Encoding 問題修好了。</p>
<p>這版應該可以正常跑起來。</p>
<p>要不要我順便幫你把版面和節奏也美化一下？</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">19 / 25</span>
</footer></section>

<section class="slide fs-2 vibe-compact"><div class="slide-inner">
<h2>Vibe Coding 介紹</h2>
<blockquote><p>定義：</p></blockquote>
<ul>
<li>跟「AI對話」寫/修程式</li>
<li>先跑起來，再逐步變好</li>
<li>反覆：描述 → 生成 → 測試 → 回報 → 收斂</li>
</ul>
<blockquote><p>剛剛那段其實就是：</p></blockquote>
<ul>
<li>log（描述現況）</li>
<li>AI 給最短修法（生成方案）</li>
<li>我重跑驗證（測試）</li>
<li>回報結果（回饋）</li>
<li>AI 再收斂下一步（迭代）</li>
</ul>
<h1>Vibe Coding 讓每個人都可以是程式設計師</h1>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">20 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>心得</h2>
<h1>以上我想說的是：</h1>
<blockquote><p>現實可能沒辦法跟預期一樣完美，但只要有前進，都是好事。</p></blockquote>
<blockquote><p>AI是工具，善用工具會增加效率，而且還可以把想像變成現實。</p></blockquote>
<blockquote><p>嘗試各種東西增加自己知識儲備量，累積經驗，對自己未來有超多幫助！</p></blockquote>
<blockquote><p>學程式要多多實作，讓科技運用到生活之中。</p></blockquote>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">21 / 25</span>
</footer></section>

<section class="slide"><div class="slide-inner">
<h2>心得</h2>
<img src="./assets/s0.png" alt="簡報程式碼截圖1">
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">22 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>補充</h2>
<div class="columns cols-2">
<div class="col">
<p>我在去年創建了一個DC新社群，主要是讓大家有一個ZeroJudge題目討論空間。</p>
<p>我們每天都會發至少1-2題，假日更會有APCS的題目可以練習。</p>
</div>
<div class="col"><img src="./assets/ZeroJudge.png" alt="極區工作室的圖標"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">23 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>補充</h2>
<div class="columns cols-2">
<div class="col">
<p>我在去年創建了一個DC新社群，主要是讓大家有一個ZeroJudge題目討論空間。</p>
<p>我們每天都會發至少1-2題，假日更會有APCS的題目可以練習。</p>
<p>每個題目都有難易度分類，有大佬在群就可以一起互相討論。</p>
<p>只要你對資訊程式有興趣的話，</p>
</div>
<div class="col"><img src="./assets/ZeroJudge.png" alt="溶蝕的遊戲圖標"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">24 / 25</span>
</footer></section>

<section class="slide fs-2"><div class="slide-inner">
<h2>補充</h2>
<div class="columns cols-2">
<div class="col">
<p>我在去年創建了一個DC新社群，主要是讓大家有一個ZeroJudge題目討論空間。</p>
<p>我們每天都會發至少1-2題，假日更會有APCS的題目可以練習。</p>
<p>每個題目都有難易度分類，有大佬在群就可以一起互相討論。</p>
<p>只要你對資訊程式有興趣的話，趕快掃描這個QRcode來一起寫程式吧！</p>
<h1>&gt;謝謝大家聽我的分享！</h1>
</div>
<div class="col"><img src="./assets/QRcode.png" alt="一個掃了可以加入群組的QRcode"></div>
</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">25 / 25</span>
</footer></section>
</div>

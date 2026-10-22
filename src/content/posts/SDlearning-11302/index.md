---
title: 高一下自主學習報告
published: 2025-06-19
updated: 2026-01-30
description: '從零開始製作一隻 Discord Bot -- 北極企鵝'
image: ""
ogImage: ''
tags: ["自主學習", "Discord", "Python", "Discord.py", "JSON"]
category: '報告'
draft: false 
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

這是我在高一下進行的自主學習報告，是在全高一面前（也就是我的同學們面前）講講我在這段自主學習時期都做了些什麼。這篇的主題是：「從零開始製作一隻Discord Bot -- 北極企鵝」，內容涵蓋超豐富，有興趣的歡迎查看下面的所有資訊喔！

## YouTube 影片連結：

<iframe width="100%" height="468" src="https://www.youtube.com/embed/fN8ZWX3BiTY?si=u_FqXTPglyqg_SIL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 簡報資訊：

| 欄位     | 說明 |
|----------|------|
| 標題     | Discord Bot—一隻北極企鵝 |
| 內容     | 功能示意、程式畫面、錯誤紀錄等等|
| 簡報頁數  | 共 31 頁 |
| 來源     | [pg72.tw](https://pg72.tw/posts/sdlearning-11302/) |
| 作者     | PGpenguin72 |
| 簡報軟體  | [Presenterm](https://github.com/mfontanini/presenterm) |
| 檔案下載  | [MD](https://file.pg72.tw/share/Fe09FcaB) |

## 簡報軟體連結：
::github{repo="mfontanini/presenterm"}


<p></p>

## 簡報預覽（用網頁模擬）：

<div class="presenterm">
<section class="slide align-center middle center-all fs-3"><div class="slide-inner"><!-- alignment: center -->
<!-- font_size: 3 -->
<div class="title-line"><span class="sq"></span><span class="title-text">Discord Bot</span><span class="title-sep">—</span><span class="title-text">一隻北極企鵝</span></div>
<div class="author-line">author. 杜昱叡</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">1 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>我是誰？</h2>
<div class="columns cols-3 layout-3-1-2"><div class="col"><!-- font_size: 2 -->
<h2>杜昱叡</h2>
<ul>
<li>AHSNCCU10321 [#116學測生]</li>
<li>一隻神奇的PG企鵝(來自<em>台中市</em>)</li>
<li>喜歡 🎮 打音遊, 🎵 聽音樂, 🏸 打羽球, 💻 寫程式</li>
</ul>
<blockquote>
<p>我的Instagram: @pg_penguin_72</p>
</blockquote>
</div><div class="col"></div><div class="col"><p><img src="./assets/pg72.png" alt="我的Discord個人資料截圖" class="img-lg"></p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">2 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>Discord 是什麼？</h2>
<div class="columns cols-2 layout-3-1"><div class="col"><!--font_size: 2-->
<blockquote>
<p>Discord 是一個<strong>免費的語音文字通訊平台</strong>，廣泛應用於各種社群</p>
</blockquote>
<ul>
<li>
<p>以「伺服器」為社群單位建構而成，伺服器內可設多個頻道。</p>
</li>
<li>
<p>支援加入機器人，能<strong>播放音樂、查資訊、玩遊戲</strong>等
酷酷的功能，超實用！</p>
</li>
<li>
<p>操作介面簡潔，<strong>新手也能快速上手</strong>。</p>
</li>
<li>
<p>支援 Python、JavaScript 等語言開發機器人，是<strong>程式學習的絕佳實作場域</strong>。</p>
</li>
</ul>
</div><div class="col"><!--newlines: 7-->
<p><img src="./assets/discord.png" alt="Discord icon"></p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">3 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>自主學習我做了啥？</h2>
<!-- font_size: 2 -->
<ul>
<li>製作一隻Discord機器人 ✅</li>
</ul>
<h3>製作動機</h3>
<p><img src="./assets/dev2.png" alt="主要的北極企鵝的個人資料圖"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">4 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>自主學習我做了啥？</h2>
<!-- font_size: 2 -->
<h3>特色介紹</h3>

<li>🌰. 屬於自己的免費勞動力！</li>
<li>🌰. 完全自學使用Python + Discord API</li>
<li>🌰. 5100多行代碼都是自己寫的！（複製複製貼上貼上\:D）</li>
</ul>
<h1>給你們看一下我創了幾隻企鵝出來</h1>
<p><img src="./assets/main2.png" alt="主要的北極企鵝的個人資料圖"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">5 / 31</span>
</footer></section>
<section class="slide fs-3"><div class="slide-inner"><!--font_size: 3--><div class="columns cols-2"><div class="col"><p><img src="./assets/a2.png" alt="北極企鵝Alpha的個人資料圖"></p>
</div><div class="col"><p><img src="./assets/b2.png" alt="北極企鵝Beta的個人資料圖"></p>
</div></div><p><img src="./assets/o2.png" alt="北極企鵝Omega的個人資料圖"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">6 / 31</span>
</footer></section>
<section class="slide fs-3"><div class="slide-inner"><!--font_size: 3-->
<!--new_lines: 5--><div class="columns cols-2"><div class="col"><p><img src="./assets/g2.png" alt="北極企鵝Gamma的個人資料圖"></p>
</div><div class="col"><p><img src="./assets/d2.png" alt="北極企鵝Delta的個人資料圖"></p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">7 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>前情提要Ｑ＆Ａ</h2>
<!--font_size: 2-->
<h4>北極企鵝</h4>
<blockquote>
<p>名字由來？</p>
</blockquote>
<!-- new_line -->
<p>北極沒有企鵝，所以才想說取北極企鵝（？</p>
<!-- new_line -->
<blockquote>
<p>為什麼有這麼多北極企鵝？</p>
</blockquote>
<!-- new_line -->
<p>不同時期，不同協助者而產生不同版本。</p>
<!-- new_line -->
<blockquote>
<p>有什麼特色？</p>
</blockquote>
<!-- new_line -->
<p>特色其實不多，他就是我自己寫的一隻機器人而已\:D</p>
<!-- new_line --></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">8 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>功能介紹</h2>
<!--font_size: 2--><div class="columns cols-4"><div class="col"><p>/包裹追蹤器</p>
<p>/更新公告</p>
<!-- new_lines: 2 -->
<p>/服務條款</p>
<!-- new_lines: 2 -->
<p>/建議</p>
<!-- new_lines: 2 -->
<p>/真心話大冒險</p>
</div><div class="col"><p>/開發者選項</p>
<!-- new_lines: 2 -->
<p>/註冊生日</p>
<!-- new_lines: 2 -->
<p>/數數字</p>
<!-- new_lines: 2 -->
<p>/幫助</p>
<!-- new_lines: 2 -->
<p>/隱私權條款</p>
</div><div class="col"><p>/擲骰子</p>
<!-- new_lines: 2 -->
<p>/簽到</p>
<!-- new_lines: 2 -->
<p>/薯織大大專屬</p>
<!-- new_lines: 2 -->
<p>/地震通知設定</p>
<!-- new_lines: 2 -->
<p>/伺服器設定</p>
</div><div class="col"><p>/每日簽到訊息訂閱</p>
<!-- new_lines: 2 -->
<p>/設定歡迎消息</p>
<!-- new_lines: 2 -->
<p>/跨伺服器聊天</p>
<!-- new_lines: 2 -->
<p>/真心話大冒險出題</p>
<!-- new_lines: 2 -->
<p>/數位錢包憑證</p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">9 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>功能介紹</h2>
<!--font_size: 2--><div class="columns cols-4"><div class="col"><h1>/包裹追蹤器</h1>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/更新公告</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/服務條款</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/建議</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/真心話大冒險</span></p>
</div><div class="col"><p><span style="color:#333333">/開發者選項</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/註冊生日</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/數數字</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/幫助</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/隱私權條款</span></p>
</div><div class="col"><p><span style="color:#333333">/擲骰子</span></p>
<!-- new_lines: 2 -->
<h1>/簽到</h1>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/薯織大大專屬指令</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/地震通知設定</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/伺服器設定</span></p>
</div><div class="col"><p><span style="color:#333333">/每日簽到訊息訂閱</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/設定歡迎消息</span></p>
<!-- new_lines: 2 -->
<h1>/跨伺服器聊天</h1>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/真心話大冒險出題</span></p>
<!-- new_lines: 2 -->
<p><span style="color:#333333">/數位錢包憑證</span></p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">10 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><div class="prompt-title">功能介紹</div>
<ol class="list-tight">
<li>每日簽到功能</li>
</ol>
<ul class="list-tight">
<li>每天早上06:00時，北極企鵝會發一則訊息來提醒用戶簽到！</li>
</ul>
<p class="kicker">每日簽到訊息訂閱</p>
<p>該簽到了，你今天簽到了嗎？</p>
<p>趕快點選下方按鈕來簽到吧！！！</p>
<div class="command-block">/簽到</div>
<div class="quote-box">
<p>每日一言：</p>
<p>你可以不成為我的助力，但絕不能成為我的阻力。</p>
</div>
<p>北極企鵝 || Created by. Arcant Studio</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">11 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><div class="prompt-title">功能介紹</div>
<!--font_size: 2-->
<ol>
<li>每日簽到功能</li>
</ol>
<p><img src="./assets/sign.png" alt="簽到實際演示圖片"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">12 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>功能介紹</h2>
<!--font_size: 2-->
<ol>
<li>每日簽到功能</li>
</ol>
<p><img src="./assets/sign2.png" alt="簽到實際演示圖片"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">13 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>功能介紹</h2>
<!--font_size: 2-->
<ol>
<li>每日簽到功能</li>
</ol>
<p><img src="./assets/rank.png" alt="簽到實際演示圖片"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">14 / 31</span>
</footer></section>
<section class="slide fs-2 chat-demo"><div class="slide-inner"><div class="prompt-title">功能介紹</div>
<p >2. 跨伺服器文字聊天</p>
<ul class="list-circle">
<li>每個伺服器都可以設定自己的串連code，也可以設定是否公開頻道。</li>
</ul>
<p class="chat-name">PGpenguin72 [ArcantStudio | 極區工作室] |應用| — 凌晨12:08</p>
<div class="chat-line">好懶得做簡報啊啊啊啊！！！</div>
<p class="chat-name">波雞 [PG企鵝俱樂部] |應用| — 凌晨12:22</p>
<div class="chat-line">我知道你很懶，但你先別懶</div>
<p class="chat-name">地瓜 [一個神奇的小窩] |應用| — 凌晨12:22</p>
<div class="chat-line">加油多懶點</div>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">15 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><div class="prompt-title">功能介紹</div>
<!--font_size: 2-->
<ol start="2">
<li>跨伺服器文字聊天</li>
</ol>
<p><img src="./assets/2.png" alt="跨群聊天實際演示圖片"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">16 / 31</span>
</footer></section>
<section class="slide fs-2 track-demo"><div class="slide-inner"><div class="prompt-title">功能介紹</div>
<p>3. 包裹追蹤器(本功能實現由Track.tw官方提供API串接)</p>
<ul class="list-circle">
<li>用戶可將包裹追蹤碼輸入，即可在Discord裏追蹤自己的包裹進度！</li>
</ul>
<p>包裹追蹤碼：7675603946</p>
<p class="carrier">新竹物流</p>
<p>快取時間：2025-03-31 10:38:12</p>
<p>🕒 2025-03-28 11:22:00 UTC+8 貨件已抵達鳳山營業所，貨件整理中。貨物件數共1件。</p>
<p>🕒 2025-03-28 11:22:00 UTC+8 貨件已抵達高雄港碼頭，貨物轉運中。貨物件數共1件。</p>
<p>|上一頁| |1/1頁| |下一頁| |刷新|</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">17 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>功能介紹</h2>
<!--font_size: 2-->
<ol start="3">
<li>包裹追蹤器(本功能實現由Track.tw官方提供API串接)</li>
</ol>
<p><img src="./assets/package1.png" alt="包裹追蹤的實際功能圖片"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">18 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 2-->
<blockquote>
<p>有一次啟動我的機器人時：</p>
</blockquote>
<!--font_size: 1-->
<h3>[ERROR] discord.ext.commands.errors.CommandNotFound: Command &quot;boom&quot; is not found</h3>
<h3>[ERROR] discord.ext.commands.errors.MissingRequiredArgument: 'user' is a required argument that is missing.</h3>
<h3>[ERROR] discord.ext.commands.errors.TooManyArguments: Too many arguments passed to the command.</h3>
<h3>[ERROR] discord.ext.commands.errors.CheckFailure: The check functions for command ban failed.</h3>
<h3>[ERROR] discord.ext.commands.errors.MissingPermissions: You are missing the permission(s) to use this command.</h3>
<h3>[ERROR] discord.ext.commands.errors.CommandInvokeError: Command raised an exception: ZeroDivisionError: division by zero</h3>
<h3>[ERROR] AttributeError: 'NoneType' object has no attribute 'send'</h3>
<h3>[ERROR] TypeError: 'str' object is not callable</h3>
<h3>[ERROR] TypeError: object NoneType can't be used in 'await' expression</h3>
<h3>[ERROR] json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)</h3>
<h3>[ERROR] FileNotFoundError: [Errno 2] No such file or directory: 'config.json'</h3>
<h3>[ERROR] discord.errors.Forbidden: 403 Forbidden (error code: 50013): Missing Permissions</h3>
<h3>[ERROR] discord.errors.HTTPException: 400 Bad Request (error code: 50035): Invalid Form Body</h3>
<h3>[ERROR] KeyError: 'username'</h3>
<h3>[ERROR] asyncio.exceptions.TimeoutError</h3>
<h3>[ERROR] discord.ext.commands.errors.CommandOnCooldown: This command is on cooldown. Try again in 10.5s</h3>
<h3>[ERROR] ValueError: invalid literal for int() with base 10: 'nhentai'</h3>
<h3>[ERROR] RuntimeError: Event loop is closed</h3>
<h3>[ERROR] ImportError: cannot import name 'commands' from 'discord'</h3>
<h3>[ERROR] ModuleNotFoundError: No module named 'discord'</h3>
<h3>[ERROR] aiohttp.client_exceptions.ClientConnectorError: Cannot connect to host <a href="http://discord.com:443">discord.com:443</a></h3>
<h3>[ERROR] sqlite3.OperationalError: no such table: users</h3>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">19 / 31</span>
</footer></section>
<section class="slide align-center middle fs-4"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 4-->
<!-- alignment: center -->
<p>還請問閣下該如何應對www</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">20 / 31</span>
</footer></section>
<section class="slide align-center middle fs-4"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 4-->
<!-- alignment: center -->
<p>說實話</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">21 / 31</span>
</footer></section>
<section class="slide "><div class="slide-inner"><h2>經驗分享</h2>
<p><img src="./assets/IDK.png" alt="蜜月期popo的梗圖，家寧說“我也不知道”的影片截圖。"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">22 / 31</span>
</footer></section>
<section class="slide align-center middle fs-4"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 4-->
<!-- alignment: center -->
<p>所以我就開始問ChatGPT</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">23 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 2-->
<h2>PGpenguin72:</h2>
<p>為什麼會出現這些錯誤？
（上傳了error.log）</p>
<h1>ChatGPT:</h1>
<p>可能你的腦袋有一些錯誤，需要幫你除錯一下嗎？</p>
<h2>PGpenguin72:</h2>
<p>？？？？</p>
<h3>你已達到GPT-4O.方案的使用上限,直到晚上8:05後,重設才能繼續使用</h3>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">24 / 31</span>
</footer></section>
<section class="slide align-center middle fs-3"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 3-->
<!-- alignment: center -->
<p>好剛剛那段是開玩笑的</p>
<!--font_size: 2-->
<p>真實情況是我去各大論壇找問題，還有使用AI來學習解決問題。</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">25 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>經驗分享</h2>
<!--font_size: 2-->
<p>最後，我的北極企鵝終於顯示了：</p>
<pre><code class="language-bash">Channel settings loaded successfully.
Initializing challenge cog...
✅ 成功獲取 56 個物流廠商
Waiting for the next minute to start the daily_signs loop
$$$目前登錄身分: 北極企鵝gamma#7325
載入了 21 個斜線指令。

載入了 2 個一般指令:
= 一般指令: &lt;@1335858158391787613&gt; help
= 一般指令: &lt;@1335858158391787613&gt; earthquake

總共載入了 23 個指令
Bot is ready!
</code></pre>
<p>（開機成功的畫面）</p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">26 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>心得</h2>
<!--font_size: 2-->
<h1>以上我想說的是：</h1>
<!-- new_line -->
<blockquote>
<p>不要吝嗇於詢問，查資料，不懂就是要問要了解。</p>
</blockquote>
<!-- new_line -->
<blockquote>
<p>AI是工具，善用工具會增加效率。</p>
</blockquote>
<!-- new_line -->
<blockquote>
<p>嘗試各種東西增加自己知識儲備量，累積經驗，對自己未來有超多幫助！</p>
</blockquote>
<!-- new_line -->
<blockquote>
<p>學程式要多多實作，讓科技運用到生活之中。</p>
</blockquote>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">27 / 31</span>
</footer></section>
<section class="slide "><div class="slide-inner"><h2>心得</h2>
<p><img src="./assets/s0.png" alt="簡報程式碼截圖1"></p>
</div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">28 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>補充</h2>
<!--font_size: 2--><div class="columns cols-2"><div class="col"><p>北極企鵝是我的一個專案，我在今年創了
ArcantStudio（極區工作室）。</p>
<!-- new_line -->
<p>這間工作室是一群志同道合的人組成的，
目前沒有盈利。</p>
</div><div class="col"><p><img src="./assets/ac.png" alt="極區工作室的圖標"></p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">29 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>補充</h2>
<!--font_size: 2--><div class="columns cols-2"><div class="col"><p>北極企鵝是我的一個專案，我在今年創了
ArcantStudio（極區工作室）。</p>
<!-- new_line -->
<p>這間工作室是一群志同道合的人組成的，
目前沒有盈利。</p>
<!-- new_line -->
<p>我們將於今年暑假開始製作
一款恐怖遊戲“溶蝕”。</p>
<!-- new_line -->
<p>希望明年暑假上架到Steam!</p>
<!-- new_line -->
<p>只要你對開發遊戲或這個專案有興趣，</p>
</div><div class="col"><p><img src="./assets/rs.png" alt="溶蝕的遊戲圖標"></p>
</div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">30 / 31</span>
</footer></section>
<section class="slide fs-2"><div class="slide-inner"><h2>補充</h2>
<!--font_size: 2--><div class="columns cols-2"><div class="col"><p>北極企鵝是我的一個專案，我在今年創了
ArcantStudio（極區工作室）。</p>
<!-- new_line -->
<p>這間工作室是一群志同道合的人組成的，
目前沒有盈利。</p>
<!-- new_line -->
<p>我們將於今年暑假開始製作
一款恐怖遊戲“溶蝕”。</p>
<!-- new_line -->
<p>希望明年暑假上架到Steam!</p>
<!-- new_line -->
<p>只要你對開發遊戲或這個專案有興趣，
歡迎可以掃描這個QRcode來加入我們喔！</p>
<h1>&gt;謝謝大家聽我的分享！</h1>
</div><div class="col"><p><img src="./assets/qr00.png" alt="一個掃了可以填寫表單的QRcode"></p>
<!--font_size: 3--></div></div></div>
<footer class="slide-footer">
  <span class="left">https://pg72.tw/</span>
  <span class="center"><span class="noice">自主學習簡報</span> @pg_penguin_72</span>
  <span class="right">31 / 31</span>
</footer></section>
</div>

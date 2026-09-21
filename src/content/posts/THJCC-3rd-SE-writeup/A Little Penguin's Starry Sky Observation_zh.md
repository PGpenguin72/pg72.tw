---
title: A Little Penguin's Starry Sky Observation Writeup（中文版）
published: 2026-08-17
updated: 2026-09-21
description: 這裡除了有心得外，附屬文章有我出的題目的 writeup 喔！
image: ""
ogImage: ""
tags: [THJCC, CTF, 資安]
category: 程式
draft: true
series:
  id: thjcc-3rd-se-writeup
  title: THJCC 3rd CTF SE Official Writeup
  order: 1
---

# 題目 A Little Penguin's Starry Sky Observation(100)
小企鵝在去年 12 月去高山上觀星時，用手機拍下了一張非常好看的星空照片。這張照片裡包含了許多著名的星座，他特別裁切了其中一部分作為這次的謎題。 請協助小企鵝找出這張裁切照片中所拍攝的核心星座是什麼，並查出該星座的官方三字英文縮寫，以及它在天球赤道座標系統中的大略中心位置赤經與赤緯（取整數小時與度數）。

- Flag 格式： THJCC{星座縮寫=RA赤經,Dec赤緯}
- 縮寫規範： 英文縮寫請一律使用全小寫。
- 格式範例： 假設該星座的中心位置為室女座（位於赤經 12h, 赤緯 +0° 處），則 Flag 為 THJCC{vir=RA12h,Dec+0°}。（請注意大小寫、標點符號與正負號）

![星空照片](./asset/Starry_Sky_Observation.jpeg)

# 題目設計發想：
這題我的想法是我想設計一題 OSINT 題目，不過覺得現在多數都在找地球上的地點，還蠻無聊的。

於是我就搞了一個天文版的 OSINT 題 \:D

這題為了降低難度，我讓天球的赤經赤緯度數不用太精確，只要簡單寫就好，不過因為怕有人十二星座都猜過一次，就限制了三次機會。

# 解題步驟：
這題很簡單，基本上很多人看到中間的三顆星就會發現他是獵戶座的腰帶了。

但如果真的要解的話我會這樣解：

1. 先看 exfi 資料，會發現這個照片拍攝的時間是在 `2025:12:21 00:53:00 (UTF+8)`。
2. 使用[線上星圖](https://stellarium-web.org/)軟體，隨機定位台灣的高山，然後看星圖：
![星圖](./asset/star.png)
3. 發現了右下角有個很接近的星星排序，於是打開顯示星座功能，可以看到這樣。
![星圖](./asset/star2.png)
![星圖](./asset/star3.jpg)
4. 知道了這是 Orion 後，去查 Wikipedia Orion 後就可以得到這些資訊：
![orion wiki](./asset/star_wiki.png)

然後把資料填入就可以得到 Flag 了！

:::note[Flag:]
`THJCC{ori=RA5h,Dec+5°}`
:::
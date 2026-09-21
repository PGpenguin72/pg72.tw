---
title: Minecraft??? Writeup（中文版）
published: 2026-08-17
updated: 2026-09-21
description: 這是官方詳解，我會放上我出的題目在裡面喔。
image: ""
ogImage: ""
tags: [Minecraft, CTF, 資安]
category: 程式
draft: false
lang: zh-TW
series:
  id: thjcc-3rd-se-writeup
  title: THJCC 3rd CTF SE Official Writeup
  order: 9
---

# 題目 Minecraft???

![2026-08-12_00.12.04.png](./asset/chal.png)
I've placed a lectern near this village, and there's a book here - I definitely did not hide the Flag here :D

## Objective
Find the lectern location shown in the image. Once you get there, you'll definitely be able to find the Flag... maybe?

## Facing Direction
I'm facing southeast.

## Coordinate Range
- X: 100000 ~ 150000
- Y: 60 ~ 75
- Z: -1000 ~ 1000

You're free to wander around and survive on my server, but you must not grief the server or interfere with other players' progress while solving.

## Server Connection Info
- Version: `Java 1.21.11`
- IP: `mc.pg72.tw`
- Password: `THJCC_3rd_Summer_CTF`

If you've already figured out some of the coordinates, I don't think you need to try them one by one - I believe you'll know what to do with them \:D!

**Rule: No plugins, cheat clients, mods, or automation tools are allowed. Violations result in an immediate ban.**

# 題目設計發想：
這題靈感來自這部影片：
::link{url="https://www.youtube.com/watch?v=cwL6bkYoHwE" text="Koordinaten nur durch ein Screenshot bestimmen!"}
簡單來說，Minecraft 生成地形的時候，他有一個 seed 可以算說每個方塊要怎麼朝向（草地、石頭...etc），這樣可以增加多樣性，避免太統一顯得無聊。

那我就想到可以使用這個特性去搞一個 CTF 題目，最後把他分類在 Forensic 中，（應該挺數位鑑識的吧 \:thinking\:）
# 解題步驟：
## 解法一
首先我們先分析這張照片，特別關注草地的生成規則，會找到他每個方塊的朝向：
![朝向](./asset/0.png)

安裝特定材質包 `Manual texture rotations`，然後把照片中的地形復刻過一次（用特定的方塊，例如草是淺綠色釉陶方塊），到一個空白地圖中：
::github{repo="19MisterX98/TextureRotations"}

復刻完畢後再切換成另外一個材質包 `Textures to numbers`，就可以看到一堆黑色方塊和數字。
![數字](./asset/1.png)

接下來打開這個網站：
::link{url="https://seedcrack.com/"}

將相對關係座標輸入進去，以下提供數據可以給匯入：
```json collapse={1-110}
[
  {
    "pos": {
      "x": 0,
      "y": 0,
      "z": -1
    },
    "rotation": 0,
    "side": false
  },
  {
    "pos": {
      "x": -1,
      "y": 0,
      "z": -1
    },
    "rotation": 2,
    "side": false
  },
  {
    "pos": {
      "x": -1,
      "y": 0,
      "z": 0
    },
    "rotation": 3,
    "side": false
  },
  {
    "pos": {
      "x": -2,
      "y": 0,
      "z": 1
    },
    "rotation": 3,
    "side": false
  },
  {
    "pos": {
      "x": -3,
      "y": 1,
      "z": 1
    },
    "rotation": 0,
    "side": false
  },
  {
    "pos": {
      "x": -3,
      "y": 1,
      "z": 0
    },
    "rotation": 1,
    "side": false
  },
  {
    "pos": {
      "x": -3,
      "y": 1,
      "z": -1
    },
    "rotation": 0,
    "side": false
  },
  {
    "pos": {
      "x": -3,
      "y": 2,
      "z": -2
    },
    "rotation": 3,
    "side": false
  },
  {
    "pos": {
      "x": -2,
      "y": 1,
      "z": -2
    },
    "rotation": 3,
    "side": false
  },
  {
    "pos": {
      "x": -1,
      "y": 1,
      "z": -2
    },
    "rotation": 2,
    "side": false
  },
  {
    "pos": {
      "x": 0,
      "y": 1,
      "z": -3
    },
    "rotation": 1,
    "side": false
  },
  {
    "pos": {
      "x": 1,
      "y": 1,
      "z": -4
    },
    "rotation": 2,
    "side": false
  }
]
```

![匯入](./asset/2.png)

匯入後選擇版本並將題目所敘述之限制填入欄位後就可以爆破出一些結果了：
```txt collapse={1-20, 22-96}
100487, 61, -69
100839, 63, -962
100929, 65, 655
102309, 65, 893
102597, 72, 600
102957, 60, 467
104694, 71, -382
105235, 73, 666
106664, 75, -833
107175, 62, -968
108539, 65, -251
109007, 64, -275
111078, 70, -567
111095, 64, -641
111505, 75, 190
111621, 72, -676
112598, 60, 72
112597, 72, 746
113914, 67, 736
114330, 61, 90
114514, 72, 810
116394, 67, 412
116546, 62, -936
116914, 72, -414
117346, 71, -980
117446, 68, 175
117516, 69, -635
117718, 66, -781
117873, 65, -547
118466, 66, 911
118705, 66, 931
121658, 74, -726
121780, 65, -972
122226, 62, -671
122326, 65, 630
122329, 74, 926
122590, 70, 57
123085, 66, -949
124372, 61, -267
124435, 75, -833
124490, 68, 770
124510, 61, -426
125368, 61, 356
126032, 62, -686
126732, 72, 56
127139, 65, 216
128696, 75, 113
128786, 70, -348
129062, 69, -517
130169, 66, 785
130190, 62, 407
130259, 61, 862
130836, 74, -634
130895, 72, -564
130979, 71, 120
131230, 71, -316
131920, 63, 177
132368, 71, -49
132577, 61, -437
133408, 70, -685
133517, 65, 74
134227, 63, 321
135657, 64, 114
135661, 62, -748
135769, 69, -673
135919, 64, 31
135952, 67, 890
136500, 74, -802
136934, 67, 476
138271, 62, 679
138775, 67, -976
139086, 62, 460
140178, 67, 185
141305, 68, -466
143029, 60, 230
143066, 73, 720
143084, 69, 604
143140, 66, 90
143575, 64, -875
143656, 72, 620
143814, 71, 679
144843, 63, 671
144869, 75, -166
145111, 61, 861
145311, 66, 318
145353, 75, 66
145787, 68, -887
146533, 64, 287
147247, 73, -728
147575, 71, 244
148474, 68, 634
149209, 71, -58
149318, 62, 445
149563, 71, 926
149609, 71, 536
149627, 74, 228
```

這些結果中有一筆特定的數字，`114514, 72, 810`，非常的臭www 所以直接 TP 過去看書就可以找到 Flag 了！

:::note[Flag:]
THJCC{M1n3Cr@f7_15_S0_FuNnY:D}
:::

## 方法二
自己一格一格慢慢走慢慢跑就可以找到答案囉\:D

# 後記：
這題我其實花了很多時間設計，不過還是防不住有小孩子亂搞，炸地圖、洩漏座標、惡意殺死參賽者不讓他解題...etc 最後導致整題被我們下架。

其實還蠻難過的，這題是真的很有趣，在生活中的 CTF 題目。

但當然，會有這些狀況並非參賽者的錯，而是題目並沒有設計好，例如可以有一些好設計像是使用 instance、開冒險模式、動態座標/flag 等，這些都可以有效的防止一些事情發生，只不過我經驗不足沒想到 QwQ

我這裡也會提供地圖檔案可以給你們下載來玩，希望這題會讓你們喜歡！

::link{url="https://file.pg72.tw/share/4855qev8" text="地圖檔案下載"}

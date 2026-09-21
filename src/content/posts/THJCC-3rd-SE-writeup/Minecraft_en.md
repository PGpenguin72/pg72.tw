---
title: Minecraft??? Writeup (English ver.)
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
  order: 10
---

:::important
This article was translated into English by ChatGPT and may contain errors. For the most accurate and complete experience, please refer to the original Chinese version.
:::

# Challenge Minecraft???

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

# Challenge Design Inspiration:
The idea for this challenge came from this video:
::link{url="https://www.youtube.com/watch?v=cwL6bkYoHwE" text="Koordinaten nur durch ein Screenshot bestimmen!"}
Simply put, when Minecraft generates terrain, it has a seed that can determine which way each block faces (grass, stone, etc.). This adds variety and keeps everything from looking too uniform and boring.

That made me think I could use this feature to make a CTF challenge. In the end, I put it in Forensics (that counts as digital forensics, right? \:thinking\:)
# Solution:
## Method 1
First, analyze the image, paying particular attention to how the grass blocks are generated. You can identify the orientation of each block:
![Block orientations](./asset/0.png)

Install the `Manual texture rotations` resource pack, then recreate the terrain in the photo on a blank map using specific blocks (for example, light green glazed terracotta for grass):
::github{repo="19MisterX98/TextureRotations"}

After recreating it, switch to the `Textures to numbers` resource pack, and you will see a bunch of black blocks and numbers.
![Numbers](./asset/1.png)

Next, open this website:
::link{url="https://seedcrack.com/"}

Enter the relative coordinates. Here is the data you can import:
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

![Import](./asset/2.png)

After importing the data, select the version and enter the limits described in the challenge into the fields. Then you can brute-force some results:
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

Among these results, one particular coordinate, `114514, 72, 810`, is very stinky lol. So just TP there and read the book to find the Flag!

:::note[Flag:]
THJCC{M1n3Cr@f7_15_S0_FuNnY:D}
:::

## Method 2
Walk or run around one block at a time, slowly and patiently, and you can find the answer \:D

# Afterword:
I actually spent a lot of time designing this challenge, but I still could not stop some kids from messing around—blowing up the map, leaking the coordinates, maliciously killing participants to keep them from solving it, etc. In the end, we had to take the whole challenge down.

Honestly, it was pretty sad. This really was a fun CTF challenge you could experience in everyday life.

Of course, these problems were not the participants' fault; the challenge simply was not designed well enough. Better designs could have included instances, Adventure Mode, dynamic coordinates/Flags, etc. These could have effectively prevented some of those things from happening. I just did not have enough experience to think of them QwQ

I will also provide the world file for you to download and play with. I hope you like this challenge!

::link{url="https://file.pg72.tw/share/4855qev8" text="Download the world file"}

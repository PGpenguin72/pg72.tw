---
title: Where is our head of challenges? Writeup（中文版）
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
  order: 8
---

:::important
This article was translated into English by ChatGPT and may contain errors. For the most accurate and complete experience, please refer to the original Chinese version.
:::

# Challenge Where is our head of challenges?(100)
Our Head of Challenges went abroad and took a photo during the trip. Can you determine where it was taken?

![Challenge](./asset/chal.jpg)

Submit the location as latitude and longitude, rounded to two decimal places, in the following format:

THJCC{longitude,latitude}

Example: THJCC{121.56,25.04}

# Challenge Design Inspiration:
Our head of the challenge-setting team said he was going to Australia, so I asked him to take a photo and let all the CTF players see if they could figure out where he went.

# Solution:
This challenge should not be too difficult. You can see a big ZURICH building in the photo, and I also know that our head of challenges went to Australia for a trip :spoiler[Even though the challenge description does not say so, I am sure players can still find where it is (just kidding)], so we can simply search for "ZURICH Australia" and find only four results:
![Google Maps](./asset/GM.png)
Opening them one by one, we find that only `Zurich Financial Services Australia Ltd
` fits.

When I opened Google Earth, I found that it should be this building, though it looks like the company changed only recently.
![Google Earth](./asset/GE.png)

The next part is figuring out the viewpoint. Using Google Earth's 3D feature, we can find a very similar angle:

![Viewpoint](./asset/GE1.png)

And that is pretty much it. Plenty of people solved it anyway, and AI solves it quickly too, so I will not say much more \:D

:::note[Flag:]
`THJCC{144.95,-37.81}`
:::

---
title: Markdown筆記
published: 2026-02-09
updated: 2026-02-09
description: '如果你想學習如何使用markdown，這份筆記可能可以幫助到你！'
image: ''
ogImage: 'https://pg72.tw/og/markdown-note.png'
tags: ["Markdown","Blog"]
category: '筆記'
draft: false 
lang: ''
---

:::important
本筆記初稿由 [Perplexity](https://www.perplexity.ai/) 協助生成架構與提供建議，由 [PGpenguin72](https://pg72.tw) 進行文章撰寫修改內容。
:::

# 目錄

- [基本概念與使用方式](#基本概念與使用方式)
- [標題（Headers）](#標題headers)
- [段落與換行](#段落與換行)
- [粗體、斜體、刪除線](#粗體斜體刪除線)
- [清單（Lists）](#清單lists)
  - [無序清單](#無序清單)
  - [有序清單](#有序清單)
- [連結與圖片](#連結與圖片)
  - [連結](#連結)
  - [圖片](#圖片)
- [程式碼：行內與區塊](#程式碼行內與區塊)
  - [行內程式碼](#行內程式碼)
  - [程式碼區塊](#程式碼區塊)
- [引言與分隔線](#引言與分隔線)
  - [引言（Quote）](#引言quote)
  - [分隔線（Horizontal Rule）](#分隔線horizontal-rule)
- [表格（Tables）](#表格tables)
- [腳註（Footnotes）](#腳註footnotes)
- [數學公式（Math）](#數學公式math)
- [轉義字元（Escaping）](#轉義字元escaping)
- [Fuwari 特色](#fuwari-特色)
  - [GitHub Repository Cards（GitHub 倉庫卡片）](#github-repository-cardsgithub-倉庫卡片)
  - [Admonitions（提示框）](#admonitions提示框)
    - [基本語法](#基本語法)
    - [自訂標題](#自訂標題)
    - [GitHub 風格的提示語法](#github-風格的提示語法)
- [pg72.tw 特色](#pg72tw-特色)
  - [連結方塊](#連結方塊)
  - [分項介紹：](#分項介紹)

***

Markdown 是一種「輕量級標記語言」，讓你用純文字就能寫出有標題、清單、表格、程式碼區塊的文件，讀起來也很直覺。 

它廣泛用在 GitHub README、技術文件、筆記工具（Obsidian、HackMD）、部落格文章、通訊平台（Discord）等地方。

本篇文章主要以 ```Fuwari``` 平台提供之用法作補充，裡面會用到許多基本用法，一樣也是可以參考的喔！

***

# 基本概念與使用方式

- 你在 `.md` 檔裡打的就是普通文字，加上一些符號（例如 `#`、`*`、`[]()`）讓系統知道要怎麼排版。
- 重點是：就算「不轉成網頁」，原始檔本身也要 **好讀**，這是 Markdown 的設計目標。

***

# 標題（Headers）

用 `#` 開頭代表標題，`#` 越多層級越小，從 H1 到 H6。

# 這是一級標題（H1）
## 這是二級標題（H2）
### 這是三級標題（H3）
#### 這是四級標題（H4）
##### 這是五級標題（H5）

```markdown
# 這是一級標題（H1）
## 這是二級標題（H2）
### 這是三級標題（H3）
#### 這是四級標題（H4）
##### 這是五級標題（H5）
```

***

# 段落與換行

- 段落與段落之間「空一行」就是新的段落。
- 如果要在同一段裡強制換行，可以在行尾加兩個空白再按 Enter（有些編輯器也接受直接換行）。 

```markdown
這是第一段。

這是第二段。

這是同一段中的第一行  
這是同一段中的第二行
```

***

# 粗體、斜體、刪除線

用 `*` 或 `_` 包住文字即可，兩個是等效寫法。 

```markdown
**粗體文字** 或 __粗體文字__

*斜體文字* 或 _斜體文字_

~~刪除線~~
```

***

# 清單（Lists）

## 無序清單

使用 `-`、`*` 或 `+` 加空白開頭，可以空兩格後再打新的符號，這樣他會變成是他的子清單（無限疊加）。

- 第一項
  - 第一項第一款
  - 第一項第二款
- 第二項
- 第三項

```markdown
- 第一項
  - 第一項第一款
  - 第一項第二款
- 第二項
- 第三項
```

## 有序清單

使用數字加 `.`，系統會自動幫你編號。

```markdown
1. 步驟一
2. 步驟二
3. 步驟三
```

***

# 連結與圖片

語法非常像，只是圖片多一個 `!`。 

## 連結

```markdown
[顯示文字](https://example.com)

[Google](https://www.google.com)

[跳到特定標題](#標題名稱)
```

## 圖片

```markdown
![替代文字](https://example.com/image.jpg)
```

> 「替代文字」會在圖片載不出來或給螢幕閱讀器使用。

***

# 程式碼：行內與區塊

## 行內程式碼

用一對反引號 `\`` 包起來。 

```markdown
請輸入 `npm install` 然後按下 Enter。
```

## 程式碼區塊

### 方法一：使用三個反引號。可以在後面標註語言讓它做語法高亮。 

```markdown
```python
def hello():
    print("Hello, Markdown!")
\```
```
> [!TIP]
> 請忽略上方第四行的斜槓，反正他就是一對包起來就是了

### 方法二（較舊）：每行縮排 4 個空白或 1 個 tab。 
```markdown
這是一段普通文字。

    # 這一行開始縮排 4 格
    for i in 1 .. 10 { do-something(i) }
```
效果：

這是一段普通文字。

    # 這一行開始縮排 4 格
    for i in 1 .. 10 { do-something(i) }


現在比較建議還是優先用方法一，縮排式容易在貼上時被 IDE 自動調整縮排。  
> [!TIP]
> 這裡其實的程式碼區塊有更完整更有趣的寫法，不過鄙人不才，不會寫，就請你們移駕去看原文啦:D
::link{url="https://fuwari.vercel.app/posts/expressive-code/" text="Fuwari Expressive Code Example" }
***

# 引言與分隔線

## 引言（Quote）

用 `>` 開頭代表引用文字（可多層，無限疊加）。 

```markdown
> 這是一段引用文字
> 可以有第二行

>> 這是巢狀引用
```


## 分隔線（Horizontal Rule）

連續三個以上 `-` 或 `*` 或 `_`。 

```markdown
---

***

___
```

***

# 表格（Tables）

表格用 `|` 加 `-` 來排出欄位與對齊方式。 

```markdown
| 品項 | 價格 | 備註     |
| ---- | ---- | -------- |
| 蘋果 | 10   | 好吃     |
| 香蕉 | 15   | 需要冰   |
```

***

# 腳註（Footnotes）

腳註可以讓你在內文加註補充說明，又不會打斷閱讀節奏。  
寫法是先在內文標註，再到文章底部定義這個註腳內容。 

```markdown
這是一段文字，其中有一個需要補充說明的地方[^1]。

[^1]: 這裡是腳註的內容，會被排在文章底部。
```

讀者在頁面上會看到小小的註腳編號，可以點回去跳轉。  

***

# 數學公式（Math）

原始範例也示範了數學公式的寫法：  

- 行內數學：`$\\omega = d\\phi / dt$`。  
- 區塊數學：用 `$$ ... $$` 包起來，裡面可以寫 [LaTeX](https://zh.wikipedia.org/zh-tw/LaTeX) 方程式。

```markdown
行內公式長這樣：$\\omega = d\\phi / dt$。

$$
I = \\int \\rho R^{2} dV
$$
```

要注意的是：  
- 純 Markdown 並不會自動顯示漂亮的公式，通常需要額外安裝 KaTeX / MathJax 或對應的 Astro 外掛才會真的渲染成數學式。  

***

# 轉義字元（Escaping）

當你想「顯示符號本身」而不是觸發 Markdown 語法時，可以在前面加一個 `\`。  
例如：想要顯示星號，而不是變成粗體 / 斜體。[][][][][]  

```markdown
\*這裡不會變成斜體\*，而是顯示星號。

\`foo\` 會顯示成 `foo`，而不是被當成程式碼。
```

這在寫教學文、要示範語法本身時非常實用。  

***

# Fuwari 特色

## GitHub Repository Cards（GitHub 倉庫卡片）

Fuwari 支援直接在文章裡插入「會自動抓 GitHub 資訊的卡片」，包含專案名稱、描述、star 數、license 等。 
語法長這樣：  

```markdown
::github{repo="擁有者名稱/倉庫名稱"}
```

例如要嵌入 Fuwari 的 GitHub 倉庫卡片：  

```markdown
::github{repo="saicaca/fuwari"}
```
::github{repo="saicaca/fuwari"}


頁面載入時，Fuwari 會呼叫 GitHub API 把最新資訊拉下來，所以 star / 描述更新後，卡片也會跟著更新。


## Admonitions（提示框）

Fuwari 內建一整組提示框元件，很適合拿來做教學文章裡的「注意」、「小技巧」區塊。 

支援的類型有：`note`、`tip`、`important`、`warning`、`caution`。  

### 基本語法

```markdown
:::note
這裡是一般資訊的小提醒。
:::

:::tip
這裡是讓你更順利完成操作的小技巧。
:::
```

:::note
這是一個筆記
:::

:::tip
這是一個提示
:::

:::important
這是一個重要的提示
:::

:::warning
這是一個警告
:::

:::caution
這是一個小心提醒
:::

渲染後會變成顏色、圖示都幫你設計好的提示框，讀者掃過去就能一眼看到重點。 

### 自訂標題

你也可以自訂提示框上面的標題：  

```markdown
:::note[我的自訂標題]
這是一個有自訂標題的 note 提示框。
:::
```
:::note[我的自訂標題]
這是一個有自訂標題的 note 提示框。
:::

這種寫法適合拿來標示「某一段特別主題的補充說明」。


### GitHub 風格的提示語法

如果你已經習慣 GitHub 上的文件語法，Fuwari 也支援那套：  

```markdown
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```

這兩種寫法（`:::` 與 `> [!NOTE]`）最後都會被渲染成類似的提示框，你可以選自己比較順手的那種來用。 

***

# pg72.tw 特色

## 連結方塊

如果你想要嵌入鏈結方塊，可以這麼輸入：
```markdown
::link{url="https://pg72.tw/posts/markdown-note/" text="Markdown筆記" icon="https://pg72.tw/avatar.png"}
```  
::link{url="https://pg72.tw/posts/markdown-note/" text="Markdown筆記"}

### 分項介紹：
- url 為鏈結，也就是你的鏈結方塊導向的網站。
- text 為標題文字，你希望上方顯示啥文字就寫上去，預設填入網址。
- icon 為圖片來源，有的時候可能沒辦法正常讀取到網站的icon，這時就可以直接指定圖片來源。
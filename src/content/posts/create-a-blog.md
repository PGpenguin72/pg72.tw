---
title: 創建自己的Blog網站筆記
published: 2026-02-08
updated: 2026-02-09
description: '這是我創建自己的Blog紀錄，也拿來當一份小教學，有興趣的都可以來看喔！'
image: ''
ogImage: 'https://pg72.tw/og/create-a-blog.png'
tags: ["Blog", "Fuwari", "Github", "Cloudfale", "Node.js", "Git"]
category: '筆記'
draft: false 
lang: ''
---

:::important
本筆記初稿由 [Perplexity](https://www.perplexity.ai/) 協助生成架構與提供建議，由 [PGpenguin72](https://pg72.tw) 進行文章撰寫修改內容。
:::

# 目錄

- [網站架設筆記，也是一份教學（？）](#網站架設筆記也是一份教學)
- [為什麼選 Fuwari 不選其他的？](#為什麼選-fuwari-不選其他的)
- [開始準備：](#開始準備)
- [第一步：產生一份自己的專案](#第一步產生一份自己的專案)
  - [直接 Fork Repo（複製專案）](#直接-fork-repo複製專案)
- [第二步：裝套件](#第二步裝套件)
- [第三步：先把網站資訊改成「自己的Blog」](#第三步先把網站資訊改成自己的blog)
- [第四步：寫出自己的第一篇文章](#第四步寫出自己的第一篇文章)
  - [新建一篇文章](#新建一篇文章)
    - [方法一：建立一篇基礎的文章](#方法一建立一篇基礎的文章)
    - [方法二：建立一篇複雜的文章](#方法二建立一篇複雜的文章)
  - [Frontmatter 長什麼樣子？](#frontmatter-長什麼樣子)
- [第五步：讓 Blog 上線（Cloudflare Pages）](#第五步讓-blog-上線cloudflare-pages)
  - [先把程式碼丟回 GitHub](#先把程式碼丟回-github)
    - [如果你是使用 Visual Studio Code：](#如果你是使用-visual-studio-code)
    - [如果你不是使用Visual Studio Code：](#如果你不是使用visual-studio-code)
  - [用 Cloudflare Pages 架設你的網站](#用-cloudflare-pages-架設你的網站)
- [第六步：之後可以慢慢玩的東西](#第六步之後可以慢慢玩的東西)

---

# 網站架設筆記，也是一份教學（？

最近開始在架設我的網站，在我找遍各種開源項目模板後，我最終選定了這款 —— Fuwari。
這篇文章主要是寫給：已經有一點程式基礎、用過 GitHub，但還沒有自己架過靜態 Blog 的人。
如果你想要一個「好看、好維護、不用從零刻 UI」的個人網站，可以跟著這篇一步一步做出第一個自己的 Blog。

> [!WARNING]
> 這篇文章會提到一些專業術語由於篇幅問題不一一介紹講解，有興趣的可以自行查閱。

---

# 為什麼選 Fuwari 不選其他的？

先簡單講一下我為什麼挑它，以下是他的特色：

- 靜態 Blog 模板，用 Astro 寫的，部署超級簡單。  
- 直接寫 Markdown 就可以發文，對寫技術筆記、生活文都很友善。
- 內建 Tag、分類、目錄、RSS，UI 也很簡約耐看。  
- 顏色、 Banner 可以自己改一改，很快就有「自己風格」。 

官方 Repo 在這裡：`https://github.com/saicaca/fuwari`。

---

# 開始準備：

要跟著做，你需要這幾個東西：

- 一台電腦（手機很難操作，不要只用手機喔）
- 一個 [GitHub](https://github.com/) 帳號。 
- 一個 [Cloudflare](https://www.cloudflare.com/zh-tw/) 帳號。 
- [Node.js](https://nodejs.org/zh-tw/download)（建議裝 LTS 版）。  
- [Git](https://git-scm.com/)（用來把檔案存到網路上/從網路上下載下來）。  
- 一個你順手的編輯器（我自己是大推 [Visual Studio Code](https://code.visualstudio.com/) 啦，你如果要用其他的也沒關係，只是比較麻煩而已）。

> [!NOTE]
> 安裝完之後，可以開啟終端機（cmd / Terminal）簡單檢查一下：
> - `node -v`：如果有顯示版本號（像是 v20.x.x），代表 Node.js 裝好了。
> - `git --version`：有顯示 git version ... 就沒問題。

---

# 第一步：產生一份自己的專案

## 直接 Fork Repo（複製專案）

1. 以下請選一個（就是一個原版和我整理後的版本）：
- A. 打開 [Fuwari 的 GitHub](https://github.com/saicaca/fuwari)：`saicaca/fuwari`。 
- B. 打開 [pg72.tw 的 Github](https://github.com/PGpenguin72/pg72.tw)：`PGpenguin72/pg72.tw`。 
> [!NOTE]
> 如果是使用我二次開發的版本的話，記得改掉你的專案名稱回`fuwari`喔！
2. 右上角按 Fork，變成你帳號底下的 Repo。  
3. 在終端機把它 clone 下來：
```bash
git clone https://github.com/<你的帳號>/fuwari.git
cd fuwari
```
> 第一行是把專案從 GitHub 複製到你電腦上，第二行是切換到這個專案的資料夾裡。


---

# 第二步：裝套件

進到專案根目錄之後，先把相依套件裝起來：
```bash
npm install
```
> npm install：下載這個專案需要用到的所有套件，第一次使用時一定要先執行一次。

裝完之後，開發模式跑起來：
```bash
npm run dev
```
> npm run dev：啟動一個開發用的小伺服器，之後你改檔案、存檔，瀏覽器會自動更新畫面。

終端機會顯示一個網址（大概是 `http://localhost:4321`），丟到瀏覽器裡，就能看到預設的部落格網站。

這一步做到就代表：  
「你已經有一個在自己電腦上跑的 Blog 了，接下來就是把它改成你的樣子。」

---

# 第三步：先把網站資訊改成「自己的Blog」

Fuwari 把網站的大部分設定集中在這個檔案中：`src/config.ts`。

打開它，你會看五大區塊：

- siteConfig （網頁基本資訊）:  
  - `title` 網頁的標題
  - `subtitle` 網頁的副標題
  - `lang` 網頁的語言
  - `themeColor` 網頁主題配色
  - `banner` 網頁橫幅設定
  - `toc` 文章的目錄顯示
  - `favicon` 網站的圖標
- navBarConfig （導覽欄設定）:  
  - `links` 最上方導航欄顯示的鏈結
- profileConfig （個人資料設定） :  
  - `avatar` 你的頭像
  - `name` 你的名字
  - `bio` 你的簡介
  - `links` 裡面放著你要導向的鏈結
- licenseConfig （授權設定） : 
  - `enable` 狀態
  - `name` 授權的名稱
  - `url` 授權的網址
- expressiveCodeConfig （程式碼區塊）:
  - `theme` 主題

你可以先把上面提到的所有內容都改成跟你有相關的：

- 把網站標題改成你的名字或你團隊的名字。  
- 把描述改成你想放在首頁的簡短介紹。  
- 把作者名字改成你自己。  
- 導覽列只保留你真的會用到的項目，例如「首頁 / 文章 / 關於」。

改完記得存檔，切回瀏覽器重新整理，就可以看到自己 Blog 的樣式都變成你喜歡的樣式了。

簡易範例：
```ts
// 原本（範例）
export const siteConfi: SiteConfig  = {
	title: "Fuwari",
	subtitle: "Demo Site",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	// ...
}

// 改成自己的（示範）
export const siteConfig: SiteConfig = {
	title: "PGpenguin72",
	subtitle: "GuGuGaGa",
	lang: "zh_TW", // 語言代碼，例如 'en', 'zh_CN', 'ja' 等
	// ...
}
```
> 你可以先只改 title、subtitle、lang 這幾個欄位，之後熟悉一點再慢慢調整顏色、 Banner 等細節。

---

# 第四步：寫出自己的第一篇文章
> [!TIP]
> 寫一份自己的文章前，建議你先修改 `src/content/spec/` 下面的所有內容，這些內容主要是和你自己相關的頁面（如 `關於` ），修完自己的詳細自我介紹後再寫自己的部落格不遲喔！

Fuwari 的文章是用 Markdown 檔案管理的，放在 `src/content/posts/` 底下。

## 新建一篇文章

### 方法一：建立一篇基礎的文章

在專案根目錄執行：

```bash
npm run new-post -- my-first-post
```

它會幫你在 `src/content/posts/` 裡面產一個新檔案，例如 `my-first-post.md`。 

### 方法二：建立一篇複雜的文章

在 `src/content/posts/` 建立一個資料夾，名稱就是你的文章網址名，然後在該資料夾下方建立 `index.md` 代表這是你的文章內文。

檔案位置格式：
```
./src/content/posts/my-first-post
> index.md
> 你的其他檔案（例如照片影片，後續可以直接使用）
```

## Frontmatter 長什麼樣子？

打開`my-first-post.md`/`index.md`檔案，你應該會看到開頭有一段像這樣的 Frontmatter：
（如果沒有請手動複製上去喔）

```yaml
---
title: 我的第一篇Blog文章
published: 2026-02-08
description: '這是一個文章描述'
image: ''
tags: ["標籤1", "標籤2"]
category: '分類'
draft: false 
lang: ''
---
```
> [!TIP]
> ```updated: 2026-02-08```（pg72.tw才有這個欄位）

這幾個欄位大致上是：

- `title`：文章標題。  
- `published`：發文日期。  
- `updated`：上次更新日期。 
- `description`：會顯示在文章列表上的簡短介紹。  
- `image`：封面圖，可以用相對路徑或網址。 
- `tags` / `category`：標籤與分類。  
- `draft`：草稿，改成 `true` 文章就不會在列表出現。  
- `lang`：這篇文跟網站語言不同時才需要特別設。

> 其實只要有 title、published、description 和 draft，就已經可以正常發文了，其他欄位可以之後再慢慢補。

Frontmatter 下面就可以照平常的 Markdown 寫內容，標題、粗體、清單、程式碼區塊都沒問題。 
* 如果不知道 Markdown 要怎麼寫的，可以參考我網站的另外一篇文章）
::link{url="https://pg72.tw/posts/markdown-note/" text="Markdown筆記"}

寫好之後回到瀏覽器，你應該可以在首頁 / 文章列表看到你自己的第一篇文。

---

# 第五步：讓 Blog 上線（Cloudflare Pages）

當你在本機玩到差不多，下一步就是「讓別人也看得到你精美的網站」。

## 先把程式碼丟回 GitHub

### 如果你是使用 Visual Studio Code：
1. 請點選左側的 `原始檔控制` 符號。
2. 簡單的描述你這次進行了什麼變更，並輸入到訊息欄位中。
3. 點擊提交
4. 點擊同步變更
5. 完成！

### 如果你不是使用Visual Studio Code：

請分別執行下方指令：
```bash
git add .
```
```bash
git commit -m "update my blog"
```
```bash
git push
```

這樣 GitHub 上的 Repo 就會有你改過的設定跟文章。

## 用 Cloudflare Pages 架設你的網站

流程如下：

1. 登入到 Cloudflare 後，右上角有一個 `新增` ，點擊 `Pages`。
2. 選擇 `匯入現有 Git 存放庫` 。
3. 連接你的 Github 後，找到你的 Fuwari 專案後點選他並選擇 `開始設定` 。
4. 輸入專案名稱後，將`Framework`改成`Astro`，並設定 Build Command 為 `npm run build`。  
6. Output Directory 就維持原本的：`dist`，其他的都不需要更改操作。 
7. 等它建置完，就會拿到一個 `*.pages.dev` 網址。（如果你有自己的域名的話可以把域名綁定到你這個專案上）
> [!note]
> 如果你是使用我做的simple版本，請記得把branch改成simple，這樣才會自動上傳正確分支喔！

之後只要你 push 新的 commit，Cloudflare Pages 就會自動幫你重新部署。

---

# 第六步：之後可以慢慢玩的東西

先把 Blog 架起來、寫到第一篇文，其實最重要的部分就完成了。後面有空可以玩：

- 改顏色、 Banner 圖，做出自己的配色。 
- 用 Tag / Category 把文章分類整理好。  
- 把「關於我」那一頁寫的超好，當作名片頁。  
- 研究一下 Fuwari 支援的 Markdown 擴充語法（註解框、卡片之類）。 

***

以上就是我現在在用的 Fuwari 架站流程筆記。  
如果你是第一次搞靜態 Blog，又懶得從頭開始寫網頁，這個方案算是「上手速度快、維護又簡單」的一條路。
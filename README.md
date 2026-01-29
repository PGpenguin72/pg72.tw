# pg72.tw
![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
[![DeepWiki](https://img.shields.io/badge/DeepWiki-saicaca%2Ffuwari-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/saicaca/fuwari)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_shield&issueType=license)

這個網站是PGpenguin72個人部落格，以 [Fuwari](https://github.com/yyhhkya/fuwari) 模板為基底，使用 [Astro](https://astro.build) 打造的。

![Preview Image](./assets/website.png)

## ✨ 功能特性

- [x] 基於 Astro 和 Tailwind CSS 開發
- [x] 流暢的動畫和頁面過渡
- [x] 亮色 / 暗色模式
- [x] 自訂主題色和橫幅圖片
- [x] 響應式設計
- [ ] 評論
- [x] 搜尋
- [x] 文內目錄

## 👀 需求

- Node.js <= 22
- pnpm <= 9

## 🚀 使用相同模板

本專案僅為基於 Fuwari 的個人客製版本，如需安裝與使用教學，請直接參考原專案說明：[Fuwari](https://github.com/yyhhkya/fuwari)。

## ⚙️ 文章格式 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # 僅當文章語言與 `config.ts` 中的網站語言不同時需要設定
---
```

## 🧞 指令

下列指令均需要在專案根目錄執行：

| Command                           | Action                            |
|:----------------------------------|:----------------------------------|
| `npm start`                        | 在 `localhost:4321` 啟動本機開發伺服器      |
| `pnpm new-post <filename>`        | 建立新文章                             |
| `pnpm astro ...`                  | 執行 `astro add`、`astro check` 等指令 |
| `pnpm astro --help`               | 顯示 Astro CLI 說明                   |

## 📝 建立文章

### 文章 Frontmatter（YAML 區塊）

每一篇文章的最上面都會有一段 Frontmatter，用來設定這篇文章的基本資訊，例如標題、日期、標籤等等。

範例：

```yaml
---
title: 我的第一篇文章
published: 2023-09-09
description: 這是我新的 Astro 部落格的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

各欄位說明：

- `title`：文章標題，會顯示在文章頁與列表上。 
- `published`：發佈日期，用來排序或顯示時間。
- `description`：文章簡介，會顯示在首頁 / 文章列表卡片上。
- `image`：文章封面圖路徑。
  - 如果是 `http://` 或 `https://` 開頭：使用網路圖片。  
  - 如果是 `/` 開頭：對應到 `public` 資料夾裡的檔案。  
  - 如果都不是：會被視為「相對於這個 markdown 檔」的路徑，例如 `./cover.jpg`。
- `tags`：文章標籤，用來顯示 Tag / 之後篩選用。
- `category`：文章分類，通常是比較大的主題，例如 Front-end、Life 之類。
- `draft`：草稿開關，`true` 表示這篇文章是草稿，不會顯示在正式列表中；`false` 則會正常顯示。

***

### 文章檔案要放哪裡

所有文章的 markdown 檔都放在 `src/content/posts/` 底下。

可以：

- 直接放一個 `.md` 檔在 `posts` 底下。  
- 或是幫單篇文章開一個資料夾，把封面圖等資源跟 `index.md` 放在一起，方便管理。

範例結構：

```text
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

- `post-1.md`：單檔文章，Frontmatter + 內容寫在同一個檔案裡。
- `post-2/`：這篇文章有自己的資料夾，封面 `cover.png` 跟 `index.md` 放一起，`index.md` 裡的 `image: ./cover.png` 就會指到這張圖。

***

### 其他備註

- 這個部落格模板是用 **Astro** 做的，如果有進階用法（例如元件、佈署、整合其他框架）沒寫在這份筆記裡，可以回去看 Astro 官方文件。
- 封面圖片來源那種註解，可以直接用 blockquote 註明就好，純紀錄用途，不影響功能。

## 📄 授權條款

本項目採用 MIT 許可證授權。

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_large&issueType=license)

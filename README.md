# pg72.tw
![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
[![DeepWiki](https://img.shields.io/badge/DeepWiki-saicaca%2Ffuwari-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/saicaca/fuwari)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_shield&issueType=license)

這個網站是PGpenguin72個人部落格，以 [Fuwari](https://github.com/yyhhkya/fuwari) 模板為基底，使用 A[Astro](https://astro.build) 打造的。

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

## 🚀 使用方法 1

使用 [create-fuwari](https://github.com/L4Ph/create-fuwari) 在本機初始化專案。

```sh
# npm
npm create fuwari@latest

# yarn
yarn create fuwari

# pnpm
pnpm create fuwari@latest

# bun
bun create fuwari@latest

# deno
deno run -A npm:create-fuwari@latest
```

1. 透過設定檔 `src/config.ts` 自訂部落格
2. 執行 `pnpm new-post <filename>` 建立新文章，並在 `src/content/posts/` 目錄中編輯
3. 參考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)將部落格部署至 Vercel、Netlify、GitHub Pages 等；部署前需編輯 `astro.config.mjs` 中的站點設定。

## 🚀 使用方法 2

1. 使用此範本[建立新儲存庫](https://github.com/saicaca/fuwari/generate)或 Fork 此儲存庫
2. 進行本機開發，Clone 新的儲存庫，執行 `pnpm install` 和 `pnpm add sharp` 以安裝依賴  
   - 若未安裝 [pnpm](https://pnpm.io)，執行 `npm install -g pnpm`
3. 透過設定檔 `src/config.ts` 自訂部落格
4. 執行 `pnpm new-post <filename>` 建立新文章，並在 `src/content/posts/` 目錄中編輯
5. 參考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)將部落格部署至 Vercel、Netlify、GitHub Pages 等；部署前需編輯 `astro.config.mjs` 中的站點設定。

## ⚙️ 文章 Frontmatter

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
| `pnpm install` 並 `pnpm add sharp` | 安裝依賴                              |
| `pnpm dev`                        | 在 `localhost:4321` 啟動本機開發伺服器      |
| `pnpm build`                      | 建置網站至 `./dist/`                   |
| `pnpm preview`                    | 本機預覽已建置的網站                        |
| `pnpm new-post <filename>`        | 建立新文章                             |
| `pnpm astro ...`                  | 執行 `astro add`、`astro check` 等指令 |
| `pnpm astro --help`               | 顯示 Astro CLI 說明                   |


## ✏️ 貢獻

查看[貢獻指南](https://github.com/saicaca/fuwari/blob/main/CONTRIBUTING.md)以了解如何為本項目做出貢獻的詳細資訊。

## 📄 授權條款

本項目採用 MIT 許可證授權。

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_large&issueType=license)

import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "PGpenguin72",
	subtitle: "GuGuGaGa",
	lang: "zh_TW", // 語言代碼，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 235, // 主題顏色的默認色調，從 0 到 360。例如紅色: 0, 青色: 200, 藍綠色: 250, 粉紅色: 345
		fixed: true, // 隱藏訪客的主題顏色選擇器
	},
	banner: {
		enable: true,
		src: "assets/images/star1.png", // 相對於 /src 目錄。如果以 '/' 開頭，則相對於 /public 目錄
		position: "center", // 等同於 object-position，只支援 'top', 'center', 'bottom'。默認為 'center'
		credit: {
			enable: true, // 顯示橫幅圖片的版權文字
			text: "iPhone 15 Pro · PGpenguin72", // 要顯示的版權文字
			url: "https://pg72.tw/posts/star_of_syue/", // （可選）指向原作品或藝術家頁面的 URL 連結
		},
	},
	toc: {
		enable: true, // 在文章右側顯示目錄
		depth: 2, // 目錄中顯示的最大標題深度，從 1 到 3
	},
	favicon: [
		// 將此陣列留空以使用默認 favicon
		{
			src: "/favicon/avatar.png", // Favicon 的路徑，相對於 /public 目錄
			//theme: "light", // （可選）'light' 或 'dark'，僅在您有不同模式的 favicon 時設定
			sizes: "32x32", // （可選）Favicon 的大小，僅在您有不同大小的 favicon 時設定
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Links,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/PGpenguin72", // 內部連結不應包含基礎路徑，因為它會自動添加
			external: true, // 顯示外部連結圖標，並在新標籤頁中開啟
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 相對於 /src 目錄。如果以 '/' 開頭，則相對於 /public 目錄
	name: "PGpenguin72",
	bio: "現居台灣台北市，17歲高中生。網名是PG企鵝喔～",
	links: [
		{
			name: "Discord",
			icon: "ic:baseline-discord",
			url: "https://discord.com/users/609189792571457550",
		},
		{
			name: "Instagram",
			icon: "mdi:instagram", // 訪問 https://icones.js.org/ 以獲取圖標代碼
			// 如果尚未包含，您需要安裝相應的圖標集
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://www.instagram.com/pg_penguin_72/",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/PGpenguin72/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/PGpenguin72",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些樣式（如背景顏色）正在被覆蓋，請參閱 astro.config.mjs 文件。
	// 請選擇深色主題，因為此部落格主題目前僅支援深色背景顏色
	theme: "github-dark",
};

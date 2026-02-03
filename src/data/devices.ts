export type DeviceItem = {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
};

export type DeviceMap = Record<string, DeviceItem[]>;

export const devices: DeviceMap = {
	Apple: [
		{
			name: "iPhone 15 Pro",
			image:
				"https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png",
			specs: "白色鈦金屬 / 256GB",
			description: "是主力機喔:D",
			link: "https://support.apple.com/zh-tw/111829",
		},
		{
			name: "iPhone 15 Pro MagSafe 保護殼",
			image:
				"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=NXc3N25JOGtjM0J6SklvcWVKZ1djZ2tuVHYzMERCZURia3c5SzJFOTlPalpQUlZGaitSQjJVekdLRWQ5QlBiN3pvcXhpclRxK2UwREhrbXZvemdZcXc",
			specs: "透明",
			description: "一個不會泛黃的保護殼",
			link: "https://www.apple.com/tw/shop/go/product/MT223",
		},
		{
			name: "iPhone MagSafe 精細織紋卡套",
			image:
				"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGHA4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cXdUWXlTZkRvZEgvRlRqcTJjVVA3UWtuVHYzMERCZURia3c5SzJFOTlPaWc2VXhiaHNBT1NtRnhyVHFkMm1SK1Q4WUNIak9xdUxuNDFFZGZ4bWN0Wmc",
			specs: "黑色",
			description: "好像很安全的卡套",
			link: "https://www.apple.com/tw/shop/product/mgha4fe/a/iphone-magsafe-%E7%B2%BE%E7%B4%B0%E7%B9%94%E7%B4%8B%E5%8D%A1%E5%A5%97-%E9%BB%91%E8%89%B2",
		},
		{
			name: "iPad Air (第五代)",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111887_sp866-ipad-air-5gen.png",
			specs: "星光色 / 256GB",
			description: "第一代的M晶片iPad Air",
			link: "https://support.apple.com/zh-tw/111887",
		},
		{
			name: "Apple Pencil (第二代)",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111889_apple-pencil-2.png",
			specs: "沒啥特殊規格",
			description: "一隻還不錯用的筆喔",
			link: "https://support.apple.com/zh-tw/111889",
		},
		{
			name: "Macbook Pro (14 英寸，M4，2024年)",
			image:
				"https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mbp14-m4-2024.png",
			specs: "太空黑色 / 16GB / 512GB",
			description: "筆電永遠選Macbook！",
			link: "https://support.apple.com/zh-tw/121552",
		},
		{
			name: "AirPods Pro 2",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
			specs: "沒啥特殊規格",
			description: "降噪很不錯用喔",
			link: "https://support.apple.com/zh-tw/111851",
		},
		{
			name: "Apple Watch Ultra",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111852_apple-watch-ultra.png",
			specs: "鈦金屬原色 / 49mm",
			description: "就 螢幕大而已==",
			link: "https://support.apple.com/zh-tw/111852",
		},
		{
			name: "AirTag",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111847_airtag.png",
			specs: "2021",
			description: "一個追蹤器",
			link: "https://support.apple.com/zh-tw/111847",
		},
		{
			name: "HomePod（第一代）",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111994_homepod_white_large_2x.jpg",
			specs: "白色",
			description: "因為很大聲所以很少用",
			link: "https://support.apple.com/zh-tw/111994",
		},
		{
			name: "HomePod mini",
			image:
				"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111914_homepod-mini-colours.png",
			specs: "太空灰色",
			description: "最一開始只有兩種顏色",
			link: "https://support.apple.com/zh-tw/111914",
		},
		{
			name: "Apple Vision Pro",
			image:
				"https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple_vision_pro_hero.png",
			specs: "256GB",
			description: "一個很厚重的眼鏡",
			link: "https://support.apple.com/zh-tw/117810",
		},
		{
			name: "Apple Vision Pro 旅行保護盒",
			image:
				"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MW2F3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MldIUS9pUEs5RzB1dFdIREJ3K0ZTd2tuVHYzMERCZURia3c5SzJFOTlPalVQcXd4RnRLamRET1NGU1ljbTJFOTF3VEFDRnV5WkxnTHVTZGZvYkcvdnc",
			specs: "沒啥特別的參數哈",
			description: "一個眼鏡的保護盒",
			link: "https://www.apple.com/tw/shop/product/mw2f3ta/a/apple-vision-pro-%E6%97%85%E8%A1%8C%E4%BF%9D%E8%AD%B7%E7%9B%92",
		},
	],
	小米: [
		{
			name: "Redmi Note 11 Pro 5G",
			image:
				"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-11-pro-5g/specs-header.png",
			specs: "石墨灰色 / 128GB",
			description: "安卓備用機",
			link: "https://www.mi.com/tw/product/redmi-note-11-pro-5g/specs/",
		},
		{
			name: "Xiaomi 磁吸自帶線行動電源33W",
			image:
				"https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-33w-magnetic-power-bank-10000-integrated-cable/pc/d6dfdb8f4e36967695461febd37e4c2e.png?f=webp",
			specs: "深灰色 / 10000mAh",
			description: "迷你供電站",
			link: "https://www.mi.com/tw/product/xiaomi-33w-magnetic-power-bank-10000-integrated-cable/",
		},
		{
			name: "Xiaomi 行動電源50W",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1635923706.23036208.png?thumb=1&f=webp&q=85",
			specs: "黑色 / 20000mAh",
			description: "供電站",
			link: "https://www.mi.com/tw/product/mi-50w-power-bank-20000/",
		},
		{
			name: "Xiaomi 桌上型照片印表機1S組合",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672992654.28812422.png?thumb=1&f=webp&q=85",
			specs: "沒啥特殊歸格",
			description: "一個可以隨時列印相片的東東",
			link: "https://www.mi.com/tw/product/xiaomi-portable-photo-printer-pro/",
		},
		{
			name: "Xiaomi GaN充電器 67W",
			image:
				"https://i02.appmifile.com/777_item_tw/24/10/2023/1db7c6fae5248d4867141da5243ee2e9.png?thumb=1&f=webp&q=85",
			specs: "白色 / 2C1A",
			description: "一個三孔充電頭",
			link: "https://www.mi.com/tw/product/xiaomi-67w-gan-charger-2c1a-us/",
		},
		{
			name: "Xiaomi 22.5W 充電器",
			image:
				"https://i02.appmifile.com/312_item_tw/28/08/2023/a336c2edbac7c11366485935ddd08879.png?thumb=1&f=webp&q=85",
			specs: "沒啥特殊規格",
			description: "一個單孔充電頭",
			link: "https://www.mi.com/tw/product/xiaomi-22-5-w-power-adapter/",
		},
		{
			name: "小米Type-C轉Lightning傳輸線",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1595908715.66965080.png?thumb=1&f=webp&q=85",
			specs: "白色 / 1m",
			description: "一個充電線",
			link: "https://www.mi.com/tw/product-list/chargings/cables/",
		},
		{
			name: "Xiaomi 6A 傳輸線 (USB-C to USB-C)",
			image:
				"https://i02.appmifile.com/368_item_tw/14/08/2025/38f5f77d3aafa4c2336903f5a2a6244a.png?thumb=1&f=webp&q=85",
			specs: "2m",
			description: "其實是找不到不是編織的才放編織的喔",
			link: "https://www.mi.com/tw/product/xiaomi-6a-braided-usb-c-to-usb-c-cable/",
		},
		{
			name: "Xiaomi Type-C 五合一 Hub 轉接器",
			image:
				"https://i02.appmifile.com/831_item_tw/02/09/2024/f6145a3b8b055baab4c0cf6f50abe6ec.png?thumb=1&f=webp&q=85",
			specs: "銀灰色",
			description: "一個還不錯用的Hub",
			link: "https://www.mi.com/tw/product/xiaomi-5-in-1-type-c-hub/",
		},
		{
			name: "Xiaomi 電動刮鬍刀 S301",
			image:
				"https://i02.appmifile.com/481_item_tw/04/08/2023/2801fdd18b3063026e98987e7466b9da.png?thumb=1&f=webp&q=85",
			specs: "沒啥特殊的規格哈",
			description: "就一個電動刮鬍刀",
			link: "https://www.mi.com/tw/product/xiaomi-electric-shaver-s301/",
		},
		{
			name: "Xiaomi 電動刮鬍刀 S200",
			image:
				"https://i02.appmifile.com/613_item_tw/15/11/2024/e8fafd5cd81cc78ce304de8fccc11ded.png?thumb=1&f=webp&q=85",
			specs: "灰色",
			description: "就一個隨身的電動刮鬍刀",
			link: "https://www.mi.com/tw/product/xiaomi-electric-shaver-s200/",
		},
		{
			name: "小米延長線",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1596098476.62531621!600x600!85.png",
			specs: "黑色",
			description: "一個很好用的延長線",
			link: "https://www.mi.com/tw/mi-power-strip-3-outlet-3-USB/",
		},
		{
			name: "Xiaomi 延長線 20W",
			image:
				"https://i02.appmifile.com/543_item_tw/10/01/2025/75cc4a6e386914ee6ffd9a2daed84ddc.png?thumb=1&f=webp&q=85",
			specs: "白色",
			description: "也是一個很好用的延長線哈",
			link: "https://www.mi.com/tw/product/xiaomi-20w-power-strip/",
		},
		{
			name: "小米液晶手寫板",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1625537103.92621257.jpg?thumb=1&f=webp&q=85",
			specs: "13.5型",
			description: "很好用的計算板",
			link: "https://www.mi.com/tw/item/3202200060",
		},
		{
			name: "小米極簡都市雙肩包 2",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1585551703.46058147.png?thumb=1&f=webp&q=85",
			specs: "深灰色",
			description: "外出包",
			link: "https://www.mi.com/tw/item/3195000060",
		},
		{
			name: "米家商務大容量雙肩包",
			image:
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/9DB46485A53563738357CBF282ECAD3D.png",
			specs: "黑色",
			description: "很像行李箱的背包",
			link: "https://www.mi.com/shop/buy/detail?product_id=1230802263",
		},
		{
			name: "米家聲波電動牙刷T200C",
			image:
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/8BAE29511542C4FA4295351C675E5D0D.png",
			specs: "白色 / 藍色",
			description: "一個電動牙刷",
			link: "https://www.mi.com/shop/buy/detail?product_id=18289",
		},
		{
			name: "米家保温杯Ti 2",
			image:
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/269350F3AD32E459CC921DBAB2526C9D.png",
			specs: "深空灰 480mL",
			description: "還不錯的保溫杯",
			link: "https://www.mi.com/shop/buy/detail?product_id=1230801589",
		},
		{
			name: "小米中性筆",
			image:
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560158394.03478517.jpg",
			specs: "白色 / 10支裝",
			description: "還不錯用的筆（？",
			link: "https://www.mi.com/shop/buy/detail?product_id=9848",
		},
		{
			name: "Xiaomi 磁吸無線行動電源",
			image:
				"https://s.alicdn.com/@sc04/kf/H9e7e49e747164cd8bece4647a3a80438M.jpg_960x960q80.jpg",
			specs: "含充電座",
			description: "這個很酷所以就買了（但已經買不到了喔）",
			link: "https://www.mi.com/tw/product/xiaomi-magnetic-power-bank-5000/",
		},
		{
			name: "米家電動起子機",
			image:
				"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1581320980.97265101.png",
			specs: "沒啥個別的參數哈",
			description: "一個很好用的電動螺絲起子",
			link: "https://www.mi.com/tw/item/3200200016",
		},
	],
	日常設備: [
		{
			name: "iKF King Pro",
			image:
				"https://ikfaudio.com/cdn/shop/files/db6dbf1a9b6c1e6dc90d15d54f70f317.jpg?v=1742524758&width=823",
			specs: "黑色",
			description: "就是一個耳罩式耳機喔",
			link: "hhttps://ikfaudio.com/products/ikfkingpro?variant=50240033685783",
		},
		{
			name: "狼蛛F2088 Pro 機械鍵盤",
			image:
				"https://www.aulacn.com/wp-content/uploads/2021/08/1726039917-F2088-%E7%B2%BE%E8%8B%B1%E7%89%88-800-1.png",
			specs: "藍白混光版 / 青軸",
			description: "便宜的機械鍵盤",
			link: "https://www.aulacn.com/product-detail/f2088",
		},
		{
			name: "狼蛛S50 滑鼠",
			image:
				"https://www.aulacn.com/wp-content/uploads/2021/08/1726039270-S50-800-1.png",
			specs: "白色",
			description: "一個有線滑鼠",
			link: "https://www.aulacn.com/product-detail/s50",
		},
		{
			name: "狼蛛N-170 音箱",
			image: "/assets/n-170.jpeg",
			specs: "黑色",
			description: "其實是綑綁銷售哈",
			link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		{
			name: "羅技Signature Plus M750",
			image:
				"https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m750/product-gallery/m750-medium-offwhite-top.png",
			specs: "珍珠白",
			description: "一個無線滑鼠",
			link: "https://www.logitech.com/zh-tw/shop/p/m750-signature-plus-wireless-mouse",
		},
		{
			name: "C270 HD 網路攝影機",
			image:
				"data:image/webp;base64,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",
			specs: "深灰色",
			description: "一個視訊鏡頭",
			link: "https://www.logitech.com/zh-tw/shop/p/c270-hd-webcam",
		},
		{
			name: "LG27寸 16:9 AH-IPS 液晶顯示器",
			image:
				"https://www.lg.com/content/dam/channel/wcms/tw/images/monitors/27mp37vq-b/gallery/medium01_350.jpg",
			specs: "沒啥特殊規格",
			description: "只是一個顯示器而已",
			link: "https://www.lg.com/tw/support/product-support/cs-27MP37VQ-B/",
		},
	],
	遊戲設備: [
		{
			name: "Steam Deck OLED",
			image:
				"https://clan.fastly.steamstatic.com/images//39049601/5b154b01ab247aef3630a9d76833dc8689ca58e6.png",
			specs: "1TB",
			description: "一個遊戲機",
			link: "https://www.steamdeck.com/zh-tw/tech/oled",
		},
		{
			name: "Xbox 無線控制器",
			image:
				"https://cms-assets.xboxservices.com/assets/e4/5e/e45e8536-107a-4e66-abec-6fffa29e35ff.jpg?n=Xbox-Wireless-Controller_Image-Hero-0_Black_1083x609_04.jpg",
			specs: "黑色",
			description: "一個很好用的手柄",
			link: "https://www.xbox.com/zh-TW/accessories/controllers/xbox-wireless-controller",
		},
		{
			name: "雷蛇Kishi V2",
			image:
				"https://assets2.razerzone.com/images/pnx.assets/1b791861d11da8d682ff1295a1bbea08/razer-kishi-v2-usbc-hero-mobile_768x460-update.webp",
			specs: "iPhone (Lightning)",
			description: "就一個手機手柄",
			link: "https://www.razer.com/tw-zh/mobile-controllers/razer-kishi-v2",
		},
		{
			name: "Nintendo Switch",
			image:
				"https://www.nintendo.com/tw/hardware/switch/modal/img/lineup/img-package--br_bl_tw.png",
			specs: "電光藍・電光紅",
			description: "其實沒啥在玩的一個遊戲機",
			link: "https://www.nintendo.com/tw/hardware/detail/switch/index.html",
		},
		{
			name: "Nintendo Wii-U",
			image:
				"https://www.nintendo.com/eu/media/images/08_content_images/systems_5/wiiu_12/hardware_features/home/CI_WiiU_img2.jpg",
			specs: "白色",
			description: "其實找不到白色主機圖就放黑色",
			link: "https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Wii-U/Wii-U-819659.html",
		},
		{
			name: "Nintendo Wii",
			image: "https://www.nintendo.co.jp/wii/console/img/wii_shiro.jpg",
			specs: "白色",
			description: "其實很老了但還是想放上來",
			link: "https://www.nintendo.co.jp/wii/index.html",
		},
		{
			name: "Nintendo famicom",
			image:
				"https://www.nintendo.com/jp/famicom/assets/img/top/portal/top_mv.webp",
			specs: "沒有啥特別的規格哈",
			description: "欸嘿，沒想到我家也有這個吧:D",
			link: "https://www.nintendo.com/jp/famicom/index.html",
		},
	],
	台北伺服器: [
		{
			name: "技嘉 Z790 AORUS ELITE AX ",
			image:
				"https://static.gigabyte.com/StaticFile/Image/Global/83bf6ff72c82f5fb5b1b6838596339f8/ProductRemoveBg/34197/webp/900",
			specs: "Rev. 1.x / ELITE AX",
			description: "之前被版本型號坑過，反正是這個版本無誤",
			link: "https://www.gigabyte.com/Motherboard/Z790-AORUS-ELITE-AX-rev-1x",
		},
		{
			name: "Intel Core i7 14700k",
			image:
				"https://intelcorp.scene7.com/is/image/intelcorp/km-1920x1080-i7:1080-1080?wid=64&hei=64&fmt=webp-alpha",
			specs: "20核 / 28緒 / 3.40 GHz",
			description: "就一顆CPU哈",
			link: "https://www.intel.com.tw/content/www/tw/zh/products/sku/236783/intel-core-i7-processor-14700k-33m-cache-up-to-5-60-ghz/specifications.html",
		},
		{
			name: "金士頓 KF556C36BBE-16",
			image:
				"https://media.kingston.com/kingston/product/FURY_Beast_Black_DDR5_1-tn.png",
			specs: "16GB * 2條",
			description: "反正就是有兩條記憶體",
			link: "https://www.kingston.com/tw/memory/search?partid=KF556C36BBE-16",
		},
		{
			name: "XPG GAMMIX S70 PRO 固態硬碟",
			image:
				"https://webapi3.adata.com/storage/product/s70_pro_p_1_1000x1000.png",
			specs: "PCIe Gen4 / M2 / 2280 / 1TB",
			description: "這個一樣也是有兩條喔（共2TB）",
			link: "https://www.xpg.com/tw/xpg/solid-state-drives-gammix-s70-pro",
		},
		{
			name: "技嘉 GeForce RTX™ 4070 SUPER",
			image:
				"https://static.gigabyte.com/StaticFile/Image/Global/d818e164d58e51523f898e9635854f30/Product/39185/webp/670",
			specs: "2505 MHz / 12GB / 21 Gbps",
			description: "反正就只是4070 Super而已==",
			link: "https://www.gigabyte.com/tw/Graphics-Card/GV-N407SWF3OC-12GD-rev-10",
		},
		{
			name: "Bitspower Cyclops 360 V2 ",
			image:
				"https://shop.bitspower.com/image/cache/Newegg/BPTA-CYAIO360V2-NTX/BPTA-CYAIO360V2-NTX--4712914789617-main-512x384.webp",
			specs: "Aluminum / RGB",
			description: "封閉式水冷散熱器",
			link: "https://shop.bitspower.com/index.php?route=product/product&product_id=8284",
		},
		{
			name: "MSI MAG A850GL PCIE5",
			image:
				"https://storage-asset.msi.com/global/picture/product/product_17296927006602f4c3b6d358736fc5d1b1d42f4d30.png",
			specs: "850W",
			description: "一個電源供應器喔",
			link: "https://tw.msi.com/Power-Supply/MAG-A850GL-PCIE5",
		},
		{
			name: "xigmatek GXE-C1",
			image: "https://www.xigmatek.com/wp-content/uploads/GXE-C1-L45.png",
			specs: "黑色",
			description: "一個機殼",
			link: "https://www.xigmatek.com/tw/product/gxe-c1/",
		},
		{
			name: "Minecrosoft Windows 11",
			image:
				"https://mscestorage.blob.core.windows.net/public/products/7909aee5-0a3f-4dbf-aaf4-6fb8fb864376.webp",
			specs: "Home",
			description: "作業系統喔",
			link: "https://www.microsoft.com/zh-tw/windows/windows-11?r=1",
		},
		{
			name: "CyberPower CP1000AVRLCDa",
			image:
				"https://www.cyberpower.com/tw/zh/File/GetImageByGuid/255a8d0f-ba15-430c-879d-895ed8d44699",
			specs: "1000Va / 600W",
			description: "一個不斷電系統",
			link: "https://www.cyberpower.com/tw/zh/product/sku/cp1000avrlcda",
		},
		{
			name: "TP-LINK AC1570 無線雙頻路由器",
			image:
				"https://static.tp-link.com/Archer_C7(EU_01_normal_1512031573192k.jpg",
			specs: "WiFi-5 / 450Mbps / 1300Mbps",
			description: "一個路由器喔",
			link: "https://www.tp-link.com/tw/home-networking/wifi-router/archer-c7/",
		},
	],
	台中伺服器: [
		{
			name: "ASUS M32CD4-K",
			image:
				"https://img.feebee.tw/i/3eTppevQ1w_7mHfJKhQ17HyO8AFDCdBAE3g7mGWTTIs/1200/aHR0cHM6Ly9pbWcueWVjLnR3L2NsL2FwaS9yZXMvMS4yL2FYdVZRbTZmb0JRMHBFTDd3T05YQnctLS9ZWEJ3YVdROWVYUjNZWFZqZEdsdmJuTmxjblpwWTJVN2FEMDBNREE3Y1QwNE5UdHliM1JoZEdVOVlYVjBienQzUFRRd01BLS0vaHR0cHM6Ly9pbWcueWVjLnR3L29iL2ltYWdlLzBmNTg5ODI2LTZiOTItNDk2Yy1iZjJkLWQ5MWFkZGUzZWZlZi5qcGc.webp",
			specs: "Micro-ATX",
			description: "一個主機板喔",
			link: "https://www.asus.com/tw/supportonly/vivopc_m32cd/helpdesk_download/",
		},
		{
			name: "Intel Core i5 7400",
			image:
				"https://intelcorp.scene7.com/is/image/intelcorp/km-1920x1080-i5:1080-1080?wid=64&hei=64&fmt=webp-alpha",
			specs: "4核 / 4緒 / 3.00GHz",
			description: "還是一顆CPU哈",
			link: "https://www.intel.com.tw/content/www/tw/zh/products/sku/97147/intel-core-i57400-processor-6m-cache-up-to-3-50-ghz/specifications.html",
		},
		{
			name: "美光 8GB DDR4‑2666 UDIMM",
			image:
				"https://assets.micron.com/adobe/assets/urn:aaid:aem:3319ca00-9649-464d-9ece-95d3712ac9d1/renditions/transformpng-1024-1024.png/as/crucial-ddr4-udimm-kit2-image.png",
			specs: "8GB",
			description: "其實只有一條哈",
			link: "https://www.crucial.tw/memory/ddr4/ct2k8g4dfra32a",
		},
		{
			name: "SAMSUNG M378A1K43CB2-CRC",
			image:
				"https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor-cn/products/dram/module/udimm/udimm_part_kv_mo_01.png?$ORIGIN_PNG$",
			specs: "8GB",
			description: "其實只有一條哈",
			link: "https://semiconductor.samsung.com/dram/module/udimm/m378a1k43cb2-crc/",
		},
		{
			name: "Transcend 480GB JetDrive 420",
			image: "https://m.media-amazon.com/images/I/815i8zhN8lL._AC_SX679_.jpg",
			specs: "480GB / SATA 3",
			description: "一顆從某個地方拆下來的SSD",
			link: "https://www.amazon.com/-/zh_TW/Transcend-480GB-JetDrive-MacBook-TS480GJDM420/dp/B00JQXT82I?th=1",
		},
		{
			name: "Minecrosoft Windows 10",
			image:
				"https://rukmini1.flixcart.com/image/1500/1500/xif0q/operating-system/e/x/i/win-10-pro-windows-10-professional-box-pack-1-user-pc-lifetime-original-imahfcny7r6ebjtv.jpeg?q=70",
			specs: "Pro",
			description: "還是作業系統喔",
			link: "https://support.microsoft.com/zh-tw/windows#windowsversion=windows_10&id0ebbd=windows_10",
		},
		{
			name: "D-Link DIR-619L",
			image:
				"https://www.dlinktw.com.tw/techsupport/ImgLoad.ashx?gurl=mYyQJd1aoqnImv1kandSBN72ejgDb%2fmmLJD5aQulSMjWibZsUEiSblqKK6Ow3OOd0EyPK29XHNCtHoqt%2b5mbeg%3d%3d&w=150&h=114&pic=product&max=1",
			specs: "WiFi 4 / 100Mbps",
			description: "",
			link: "https://www.dlinktw.com.tw/techsupport/ProductInfo.aspx?m=DIR-619L",
		},
	],
};

export const defaultBrand = "Apple";

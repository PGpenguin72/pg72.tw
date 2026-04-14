export type CertificateItem = {
	name: string;
	issuer: string;
	date: string;
	description: string;
	image: string;
};

export type CertificateMap = Record<string, CertificateItem[]>;

// Add your certificates here. Put image files under /public/certificates/
// If you only want a single list, keep one key (e.g. "全部") and tabs will be hidden.
export const certificates: CertificateMap = {
	全部: [
		{
			name: "國際資訊奧林匹亞競賽",
			issuer: "100分/500分",
			date: "2026-03",
			description: "",
			image: "/certificates/26TOI.png",
		},
		{
			name: "APCS模擬測驗25-高級",
			issuer: "45分/200分",
			date: "2026-02",
			description: "",
			image: "/certificates/apcs-sim25.png",
		},
		{
			name: "THJCC 第三屆臺灣高中職聯合資安競賽",
			issuer: "潛力獎",
			date: "2026-02",
			description: "",
			image: "/certificates/26THJCC-QN.png",
		},
		{
			name: "THJCC 第三屆臺灣高中職聯合資安競賽",
			issuer: "(21/80名)",
			date: "2026-02",
			description: "",
			image: "/certificates/26THJCC.png",
		},
		{
			name: "APCS 大學程式設計先修檢測",
			issuer: "觀念4 實作3",
			date: "2026-01",
			description: "",
			image: "/certificates/26-01 APCS.png",
		},
		{
			name: "Bebras 國際運算思維挑戰賽",
			issuer: "PR88(235/300分)",
			date: "2025-11",
			description: "",
			image: "/certificates/11Bebras.png",
		},
		{
			name: "APCS 大學程式設計先修檢測",
			issuer: "觀念3 實作2",
			date: "2025-10",
			description: "",
			image: "/certificates/25-10 APCS.png",
		},
		{
			name: "TOEIC® Listening and Reading Test",
			issuer: "490分/900分",
			date: "2025-05",
			description: "",
			image: "/certificates/toeic.png",
		},
		{
			name: "資所未見 四校資訊社團聯合工作坊",
			issuer: "參賽證明",
			date: "2025-03",
			description: "",
			image: "/certificates/zswj2025.png",
		},
	],
};

export const defaultCategory = Object.keys(certificates)[0] ?? "全部";

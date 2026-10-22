import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import satori, { type Font } from "satori";
import sharp from "sharp";
import type { BlogEntry } from "./content-utils";

// Auto-generated OG images for posts and Now entries, rendered at build time.
// Text is laid out by Satori with a bundled font, so wrapping and CJK
// punctuation rules don't depend on the fonts installed on the build machine.

const WIDTH = 1200;
const HEIGHT = 630;
const TEXT_WIDTH = 640;
const FONT_FAMILY = "Noto Sans TC";
const FONT_WEIGHTS = [600, 700, 800] as const;
const FONT_DIR = path.resolve("node_modules/@fontsource/noto-sans-tc/files");
const BACKGROUND_PATH = path.resolve("scripts/assets/og_background.png");
const ICONS_PATH = path.resolve(
	"node_modules/@iconify-json/material-symbols/icons.json",
);

export function getOgImagePath(entry: BlogEntry): string {
	if (entry.collection === "now") {
		// Use the entry id, not the slug, so the image URL stays the same after
		// the entry moves from /now/ to /now/<id>/.
		return `/og/now/${entry.id.replace(/\/index\.mdx?$|\.mdx?$/, "")}.png`;
	}
	return `/og/posts/${entry.slug}.png`;
}

let fontsPromise: Promise<{ fonts: Font[]; family: string }> | undefined;

// Fontsource splits Noto Sans TC into many subset files. Satori only falls
// back between *different* family names, so each subset gets its own name and
// the text uses all of them as a fallback list.
function loadFonts() {
	fontsPromise ??= (async () => {
		const files = await readdir(FONT_DIR);
		const subsetOf = (name: string) =>
			name.replace(/^noto-sans-tc-/, "").replace(/-\d+-normal\.woff$/, "");
		const priority = (subset: string) =>
			["latin", "latin-ext", "chinese-traditional"].indexOf(subset) + 1 || 99;
		const subsets = [
			...new Set(
				files.filter((name) => name.endsWith("-800-normal.woff")).map(subsetOf),
			),
		].sort((a, b) => priority(a) - priority(b) || a.localeCompare(b));

		const fonts: Font[] = [];
		for (const weight of FONT_WEIGHTS) {
			for (const subset of subsets) {
				const file = `noto-sans-tc-${subset}-${weight}-normal.woff`;
				if (!files.includes(file)) continue;
				fonts.push({
					name: `${FONT_FAMILY} ${subset}`,
					data: await readFile(path.join(FONT_DIR, file)),
					weight,
					style: "normal",
				});
			}
		}
		const family = subsets
			.map((subset) => `"${FONT_FAMILY} ${subset}"`)
			.join(", ");
		return { fonts, family };
	})();
	return fontsPromise;
}

let iconsPromise:
	| Promise<{
			width?: number;
			height?: number;
			icons: Record<string, { body: string; width?: number; height?: number }>;
	  }>
	| undefined;

async function iconDataUri(name: string, color: string): Promise<string> {
	iconsPromise ??= readFile(ICONS_PATH, "utf8").then(JSON.parse);
	const data = await iconsPromise;
	const icon = data.icons[name];
	const width = icon.width ?? data.width ?? 24;
	const height = icon.height ?? data.height ?? 24;
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" style="color:${color}">${icon.body}</svg>`;
	return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

type Node = {
	type: string;
	props: Record<string, unknown> & { children?: Node | Node[] | string };
};

function h(
	type: string,
	style: Record<string, unknown>,
	children?: Node | Node[] | string,
	props: Record<string, unknown> = {},
): Node {
	return { type, props: { ...props, style, children } };
}

async function iconRow(
	icon: string,
	text: string,
	size: number,
	fontSize: number,
	fontWeight: number,
): Promise<Node> {
	return h("div", { display: "flex", alignItems: "center", minWidth: 0 }, [
		h("img", { width: size, height: size, flexShrink: 0 }, undefined, {
			src: await iconDataUri(icon, "#F2F4FA"),
			width: size,
			height: size,
		}),
		h(
			"div",
			{
				marginLeft: 12,
				fontSize,
				fontWeight,
				color: "#F2F4FA",
				overflow: "hidden",
				whiteSpace: "nowrap",
				textOverflow: "ellipsis",
			},
			text,
		),
	]);
}

export type OgImageData = {
	title: string;
	description: string;
	published: Date;
	category: string;
	tags: string[];
};

// Rough text width in em: CJK and full-width characters are 1em, Latin ~0.55em.
function estimateEm(text: string): number {
	let em = 0;
	for (const ch of text) {
		em += /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/.test(ch) ? 1 : 0.55;
	}
	return em;
}

// Long titles get a smaller font and a third line instead of being cut off.
function titleStyle(title: string) {
	const lines = (fontSize: number) =>
		estimateEm(title) / (TEXT_WIDTH / fontSize);
	if (lines(68) <= 2) return { fontSize: 68, lineClamp: 2 };
	if (lines(56) <= 2) return { fontSize: 56, lineClamp: 2 };
	return { fontSize: 52, lineClamp: 3 };
}

// Frontmatter text may contain Markdown escapes such as "\\:D"; show them as
// plain characters on the image.
function unescapeMarkdown(text: string): string {
	return text.replace(/\\([\\`*_{}[\]()#+\-.!:])/g, "$1");
}

export async function renderOgImage(data: OgImageData): Promise<Buffer> {
	const { fonts, family } = await loadFonts();
	const title = unescapeMarkdown(data.title);
	const date = data.published.toISOString().slice(0, 10).replace(/-/g, "/");
	const tags =
		data.tags.length > 0 ? data.tags.slice(0, 4).join(" / ") : "無標籤";

	const textBlock = h(
		"div",
		{
			position: "absolute",
			left: 60,
			top: 70,
			width: TEXT_WIDTH,
			height: 500,
			display: "flex",
			flexDirection: "column",
			color: "#F8FAFF",
			fontFamily: family,
		},
		[
			// Title and description share the space above the meta rows.
			h(
				"div",
				{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					flexGrow: 1,
				},
				[
					h(
						"div",
						{
							display: "block",
							...titleStyle(title),
							fontWeight: 800,
							lineHeight: 1.24,
						},
						title,
					),
					...(data.description
						? [
								h(
									"div",
									{
										display: "block",
										marginTop: 24,
										fontSize: 30,
										fontWeight: 600,
										lineHeight: 1.4,
										color: "#E8ECF6",
										lineClamp: 2,
									},
									unescapeMarkdown(data.description),
								),
							]
						: []),
				],
			),
			h("div", { display: "flex", marginTop: 36, gap: 60 }, [
				await iconRow("calendar-today-outline-rounded", date, 36, 26, 600),
				await iconRow("book-2-outline-rounded", data.category, 36, 26, 600),
			]),
			h("div", { display: "flex", marginTop: 40 }, [
				await iconRow("tag-rounded", tags, 40, 30, 700),
			]),
		],
	);

	const svg = await satori(
		h("div", { display: "flex", width: WIDTH, height: HEIGHT }, [
			textBlock,
		]) as never,
		{ width: WIDTH, height: HEIGHT, fonts },
	);

	return sharp(BACKGROUND_PATH)
		.composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
		.png()
		.toBuffer();
}

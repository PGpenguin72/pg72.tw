import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const ROOT = process.cwd();
const SITE_URL = process.env.SITE_URL || "https://pg72.tw";
const BG_PATH = path.join(ROOT, "scripts/assets/og_background.png");
const ICONS_PATH = path.join(
	ROOT,
	"node_modules/@iconify-json/material-symbols/icons.json",
);
const OUT_DIR = path.join(ROOT, "public/og");

const layout = {
	width: 1200,
	height: 630,
	left: 60,
	maxWidth: 660,
	title: {
		y: 140,
		fontSize: 68,
		lineHeight: 84,
		maxLines: 2,
		gap: 18,
		color: "#F8FAFF",
		fontWeight: 800,
	},
	subtitle: {
		fontSize: 30,
		lineHeight: 42,
		maxLines: 2,
		color: "#E8ECF6",
		fontWeight: 600,
	},
	meta: {
		fontSize: 26,
		color: "#F2F4FA",
		fontWeight: 600,
		iconSize: 36,
		y: 455,
	},
	tags: {
		fontSize: 30,
		color: "#F2F4FA",
		fontWeight: 700,
		iconSize: 40,
		y: 545,
	},
};

function ensureFileExists(filePath, label) {
	if (!fs.existsSync(filePath)) {
		throw new Error(`${label} not found: ${filePath}`);
	}
}

function escapeXml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function charUnits(ch) {
	if (/\s/.test(ch)) return 0.33;
	if (/[A-Za-z0-9]/.test(ch)) return 0.6;
	if (/[\u4E00-\u9FFF]/.test(ch)) return 1;
	if (/[\u3040-\u30ff]/.test(ch)) return 1;
	return 0.6;
}

function estimateUnits(text) {
	let units = 0;
	for (const ch of text) units += charUnits(ch);
	return units;
}

function truncateText(text, maxUnits) {
	if (estimateUnits(text) <= maxUnits) return text;
	let out = "";
	let units = 0;
	for (const ch of text) {
		const next = units + charUnits(ch);
		if (next > maxUnits - 1) break;
		out += ch;
		units = next;
	}
	return `${out}…`;
}

function wrapText(text, maxWidthPx, fontSize, maxLines) {
	const maxUnits = maxWidthPx / fontSize;
	const clean = text.replace(/\s+/g, " ").trim();
	if (!clean) return [];
	const lines = [];
	let line = "";
	let units = 0;
	for (const ch of clean) {
		const next = units + charUnits(ch);
		if (next > maxUnits) {
			lines.push(line);
			line = ch;
			units = charUnits(ch);
			if (lines.length >= maxLines) {
				lines[maxLines - 1] = truncateText(lines[maxLines - 1], maxUnits);
				return lines.slice(0, maxLines);
			}
		} else {
			line += ch;
			units = next;
		}
	}
	if (line) lines.push(line);
	if (lines.length > maxLines) {
		lines.length = maxLines;
		lines[maxLines - 1] = truncateText(lines[maxLines - 1], maxUnits);
	}
	return lines;
}

function slugify(input) {
	return input
		.trim()
		.toLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 80);
}

function formatDate(value) {
	if (!value) return "";
	if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		return value.replace(/-/g, "/");
	}
	const date = new Date(value);
	if (!Number.isNaN(date.getTime())) {
		return date.toISOString().slice(0, 10).replace(/-/g, "/");
	}
	return String(value);
}

function parseFrontmatterValue(value) {
	const trimmed = value.trim();
	if (trimmed === "") return "";
	if (trimmed === "true") return true;
	if (trimmed === "false") return false;
	if (
		(trimmed.startsWith("'") && trimmed.endsWith("'")) ||
		(trimmed.startsWith('"') && trimmed.endsWith('"'))
	) {
		return trimmed.slice(1, -1);
	}
	if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
		const inner = trimmed.slice(1, -1).trim();
		if (!inner) return [];
		return inner
			.split(",")
			.map((item) => item.trim())
			.map((item) => {
				if (
					(item.startsWith("'") && item.endsWith("'")) ||
					(item.startsWith('"') && item.endsWith('"'))
				) {
					return item.slice(1, -1);
				}
				return item;
			})
			.filter(Boolean);
	}
	return trimmed;
}

function parseFrontmatter(content) {
	const match = /^---\n([\s\S]*?)\n---\n?/m.exec(content);
	if (!match) {
		throw new Error("Frontmatter block not found");
	}
	const raw = match[1];
	const data = {};
	for (const line of raw.split(/\r?\n/)) {
		const idx = line.indexOf(":");
		if (idx === -1) continue;
		const key = line.slice(0, idx).trim();
		const value = line.slice(idx + 1).trim();
		if (!key) continue;
		data[key] = parseFrontmatterValue(value);
	}
	const body = content.slice(match.index + match[0].length);
	return { data, raw, body, match };
}

function upsertFrontmatter(content, key, value) {
	const match = /^---\n([\s\S]*?)\n---/m.exec(content);
	if (!match) return content;
	const lines = match[1].split(/\r?\n/);
	let found = false;
	for (let i = 0; i < lines.length; i += 1) {
		if (new RegExp(`^\\s*${key}:`).test(lines[i])) {
			lines[i] = `${key}: ${value}`;
			found = true;
		}
	}
	if (!found) {
		let insertAt = lines.findIndex((line) => line.trim().startsWith("image:"));
		if (insertAt === -1) {
			insertAt = lines.findIndex((line) =>
				line.trim().startsWith("description:"),
			);
		}
		if (insertAt === -1) {
			insertAt = lines.findIndex((line) => line.trim().startsWith("title:"));
		}
		if (insertAt === -1) insertAt = lines.length - 1;
		lines.splice(insertAt + 1, 0, `${key}: ${value}`);
	}
	return content.replace(match[1], lines.join("\n"));
}

function extractExcerpt(body) {
	const lines = body.split(/\r?\n/).map((line) => line.trim());
	for (const line of lines) {
		if (!line) continue;
		if (line.startsWith("#")) continue;
		if (line.startsWith(":::")) continue;
		if (line.startsWith(">")) continue;
		if (line.startsWith("- ") || line.startsWith("* ")) continue;
		return line.replace(/\s+/g, " ").slice(0, 120);
	}
	return "";
}

function loadIcons() {
	ensureFileExists(ICONS_PATH, "Iconify icons");
	return JSON.parse(fs.readFileSync(ICONS_PATH, "utf8"));
}

const iconData = loadIcons();

function iconSvg(name, x, y, size, color) {
	const icon = iconData.icons[name];
	if (!icon) return "";
	const width = icon.width || iconData.width || 24;
	const height = icon.height || iconData.height || 24;
	return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 ${width} ${height}" style="color:${color}" xmlns="http://www.w3.org/2000/svg">${icon.body}</svg>`;
}

function buildSvg({
	titleLines,
	subtitleLines,
	dateText,
	categoryText,
	tagsText,
	showMeta = true,
}) {
	const fontFamily =
		"PingFang TC, Noto Sans TC, Noto Sans CJK TC, Microsoft JhengHei, sans-serif";
	const titleBlockHeight = layout.title.lineHeight * layout.title.maxLines;
	const titleStartY =
		layout.title.y +
		(titleBlockHeight - titleLines.length * layout.title.lineHeight) / 2;
	const subtitleY = layout.title.y + titleBlockHeight + layout.title.gap;

	const metaIconY = layout.meta.y - layout.meta.iconSize + 6;
	const tagsIconY = layout.tags.y - layout.tags.iconSize + 6;
	const dateTextX = layout.left + layout.meta.iconSize + 12;
	const dateTextWidth = estimateUnits(dateText) * layout.meta.fontSize;
	const categoryX = dateTextX + dateTextWidth + 60;

	const tagTextX = layout.left + layout.tags.iconSize + 12;

	const subtitleSafe =
		subtitleY + subtitleLines.length * layout.subtitle.lineHeight >
		layout.meta.y - 18;
	const finalSubtitleLines = subtitleSafe
		? subtitleLines.slice(0, 1)
		: subtitleLines;

	const metaElements = showMeta
		? [
				iconSvg(
					"calendar-today-outline-rounded",
					layout.left,
					metaIconY,
					layout.meta.iconSize,
					layout.meta.color,
				),
				`<text class="meta" x="${dateTextX}" y="${layout.meta.y}">${escapeXml(dateText)}</text>`,
				iconSvg(
					"book-2-outline-rounded",
					categoryX,
					metaIconY,
					layout.meta.iconSize,
					layout.meta.color,
				),
				`<text class="meta" x="${categoryX + layout.meta.iconSize + 10}" y="${layout.meta.y}">${escapeXml(categoryText)}</text>`,
				iconSvg(
					"tag-rounded",
					layout.left,
					tagsIconY,
					layout.tags.iconSize,
					layout.tags.color,
				),
				`<text class="tags" x="${tagTextX}" y="${layout.tags.y}">${escapeXml(tagsText)}</text>`,
			]
		: [];

	const svg = [
		`<svg width="${layout.width}" height="${layout.height}" viewBox="0 0 ${layout.width} ${layout.height}" xmlns="http://www.w3.org/2000/svg">`,
		"<style>",
		`.title{font-family:${fontFamily};font-size:${layout.title.fontSize}px;font-weight:${layout.title.fontWeight};fill:${layout.title.color};}`,
		`.subtitle{font-family:${fontFamily};font-size:${layout.subtitle.fontSize}px;font-weight:${layout.subtitle.fontWeight};fill:${layout.subtitle.color};}`,
		`.meta{font-family:${fontFamily};font-size:${layout.meta.fontSize}px;font-weight:${layout.meta.fontWeight};fill:${layout.meta.color};}`,
		`.tags{font-family:${fontFamily};font-size:${layout.tags.fontSize}px;font-weight:${layout.tags.fontWeight};fill:${layout.tags.color};}`,
		"</style>",
		...titleLines.map(
			(line, i) =>
				`<text class="title" x="${layout.left}" y="${titleStartY + i * layout.title.lineHeight}">${escapeXml(line)}</text>`,
		),
		...finalSubtitleLines.map(
			(line, i) =>
				`<text class="subtitle" x="${layout.left}" y="${subtitleY + i * layout.subtitle.lineHeight}">${escapeXml(line)}</text>`,
		),
		...metaElements,
		"</svg>",
	].join("");

	return svg;
}

function resolvePostPath(input) {
	const tryPaths = [];
	const hasExt = /\.[a-zA-Z]+$/.test(input);
	if (hasExt) {
		tryPaths.push(input);
		tryPaths.push(path.join(ROOT, input));
	} else {
		tryPaths.push(path.join(ROOT, "src/content/posts", `${input}.md`));
		tryPaths.push(path.join(ROOT, "src/content/posts", input, "index.md"));
	}
	for (const candidate of tryPaths) {
		if (fs.existsSync(candidate)) return candidate;
	}
	throw new Error(`Post not found: ${input}`);
}

function getSlugFromPath(filePath) {
	const rel = path.relative(path.join(ROOT, "src/content/posts"), filePath);
	const parts = rel.split(path.sep);
	if (parts[parts.length - 1].toLowerCase() === "index.md") {
		return slugify(parts[parts.length - 2] || "post");
	}
	return slugify(path.basename(filePath, path.extname(filePath)));
}

async function generateOgImage({
	slug,
	title,
	description,
	dateText,
	categoryText,
	tagsText,
	showMeta = true,
}) {
	ensureFileExists(BG_PATH, "OG background");
	const safeSlug = slugify(slug || "page");
	const ogUrl = `${SITE_URL}/og/${safeSlug}.png`;
	const outPath = path.join(OUT_DIR, `${safeSlug}.png`);

	const titleLines = wrapText(
		title,
		layout.maxWidth,
		layout.title.fontSize,
		layout.title.maxLines,
	);
	const subtitleLines = wrapText(
		description,
		layout.maxWidth,
		layout.subtitle.fontSize,
		layout.subtitle.maxLines,
	);
	const tagsLine = truncateText(
		tagsText,
		layout.maxWidth / layout.tags.fontSize,
	);

	const svg = buildSvg({
		titleLines,
		subtitleLines,
		dateText,
		categoryText,
		tagsText: tagsLine,
		showMeta,
	});

	fs.mkdirSync(OUT_DIR, { recursive: true });
	await sharp(BG_PATH)
		.composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
		.png()
		.toFile(outPath);

	return { outPath, ogUrl };
}

export async function generateOgForFile(filePath, options = {}) {
	const absPath = path.isAbsolute(filePath)
		? filePath
		: path.join(ROOT, filePath);
	const content = fs.readFileSync(absPath, "utf8");
	const { data, body } = parseFrontmatter(content);
	const slug = getSlugFromPath(absPath);

	const title = data.title || "Untitled";
	const description =
		typeof data.description === "string" && data.description.trim()
			? data.description
			: extractExcerpt(body);
	const dateText = formatDate(data.published);
	const categoryText =
		typeof data.category === "string" && data.category.trim()
			? data.category
			: "未分類";
	const tags = Array.isArray(data.tags) ? data.tags : [];
	const tagsText = tags.length > 0 ? tags.slice(0, 4).join(" / ") : "無標籤";

	const result = await generateOgImage({
		slug,
		title,
		description,
		dateText,
		categoryText,
		tagsText,
	});

	if (options.updateFrontmatter !== false) {
		const updated = upsertFrontmatter(content, "ogImage", `'${result.ogUrl}'`);
		if (updated !== content) {
			fs.writeFileSync(absPath, updated);
		}
	}

	return result;
}

export async function generateOgForPage({
	slug,
	title,
	description = "",
	date,
	category,
	tags,
	showMeta = false,
} = {}) {
	if (!slug) {
		throw new Error("Missing slug for page OG.");
	}
	let dateText = "";
	let categoryText = "";
	let tagsText = "";
	if (showMeta) {
		dateText = date ? formatDate(date) : "YYYY/MM/DD";
		categoryText =
			typeof category === "string" && category.trim() ? category : "分類";
		let tagList = [];
		if (Array.isArray(tags)) {
			tagList = tags;
		} else if (typeof tags === "string") {
			tagList = tags
				.split(",")
				.map((item) => item.trim())
				.filter(Boolean);
		}
		tagsText =
			tagList.length > 0 ? tagList.slice(0, 4).join(" / ") : "標籤";
	}

	return generateOgImage({
		slug,
		title: title || "Untitled",
		description,
		dateText,
		categoryText,
		tagsText,
		showMeta,
	});
}

function collectPostFiles() {
	const root = path.join(ROOT, "src/content/posts");
	const results = [];
	const stack = [root];
	while (stack.length) {
		const dir = stack.pop();
		if (!dir) continue;
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				stack.push(fullPath);
			} else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
				results.push(fullPath);
			}
		}
	}
	return results;
}

async function runCli() {
	const rawArgs = process.argv.slice(2).filter((arg) => arg !== "--");
	const flags = new Set();
	const params = {};
	const targets = [];
	const valueFlags = new Set([
		"slug",
		"page",
		"title",
		"description",
		"date",
		"category",
		"tags",
	]);

	for (let i = 0; i < rawArgs.length; i += 1) {
		const arg = rawArgs[i];
		if (arg.startsWith("--")) {
			const key = arg.slice(2);
			const next = rawArgs[i + 1];
			if (valueFlags.has(key) && next && !next.startsWith("--")) {
				params[key] = next;
				i += 1;
			} else {
				flags.add(key);
			}
		} else {
			targets.push(arg);
		}
	}

	if (flags.has("all")) {
		const files = collectPostFiles();
		for (const file of files) {
			await generateOgForFile(file);
			console.log(`OG generated: ${file}`);
		}
		return;
	}

	const pageSlug = params.slug || params.page;
	const showMeta = flags.has("with-meta");
	if (flags.has("page") || pageSlug) {
		if (!pageSlug) {
			throw new Error("Missing --slug for page OG.");
		}
		if (!params.title) {
			throw new Error("Missing --title for page OG.");
		}
		const result = await generateOgForPage({
			slug: pageSlug,
			title: params.title,
			description: params.description || "",
			date: params.date,
			category: params.category,
			tags: params.tags,
			showMeta,
		});
		console.log(`OG generated: ${result.outPath}`);
		return;
	}

	if (targets.length === 0) {
		console.error(`Usage:
  node scripts/generate-og.js <post-path-or-slug>
  node scripts/generate-og.js --all
  node scripts/generate-og.js --page --slug <slug> --title <title> [--description <desc>] [--with-meta] [--date <YYYY-MM-DD>] [--category <name>] [--tags <a,b,c>]`);
		process.exit(1);
	}

	for (const target of targets) {
		const resolved = resolvePostPath(target);
		const result = await generateOgForFile(resolved);
		console.log(`OG generated: ${result.outPath}`);
	}
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
	runCli().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

import { type CollectionEntry, getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCategoryUrl } from "@utils/url-utils.ts";

type RawSortedPostsOptions = {
	includeSeriesParts?: boolean;
};

function isSeriesPart(data: CollectionEntry<"posts">["data"]) {
	return data.series?.role === "part";
}

// // Retrieve posts and sort them by publication date
async function getRawSortedPosts(options: RawSortedPostsOptions = {}) {
	const { includeSeriesParts = true } = options;
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		if (import.meta.env.PROD && data.draft === true) return false;
		if (!includeSeriesParts && isSeriesPart(data)) return false;
		return true;
	});
	const sorted = allBlogPosts.sort((a, b) => {
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});
	return sorted;
}

export async function getSortedPosts() {
	const sorted = await getRawSortedPosts();

	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}

	return sorted;
}

export async function getSortedListablePosts() {
	const sorted = await getRawSortedPosts({ includeSeriesParts: false });
	const seriesTotals = await getSeriesTotalsMap();

	for (const post of sorted) {
		const seriesId = post.data.series?.id;
		if (!seriesId) continue;
		const totals = seriesTotals.get(seriesId);
		if (!totals) continue;
		post.data.seriesWordCount = totals.words;
		post.data.seriesMinuteCount = totals.minutes;
	}

	return sorted;
}

export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
	const sortedFullPosts = await getRawSortedPosts({ includeSeriesParts: false });

	// delete post.body
	const sortedPostsList = sortedFullPosts.map((post) => ({
		slug: post.slug,
		data: post.data,
	}));

	return sortedPostsList;
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		if (import.meta.env.PROD && data.draft === true) return false;
		if (isSeriesPart(data)) return false;
		return true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { tags: string[] } }) => {
		post.data.tags.forEach((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	const entries = Object.entries(countMap).sort((a, b) => {
		const countDiff = b[1] - a[1];
		if (countDiff !== 0) return countDiff;
		return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
	});

	return entries.map(([name, count]) => ({ name, count }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		if (import.meta.env.PROD && data.draft === true) return false;
		if (isSeriesPart(data)) return false;
		return true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}

		const categoryName =
			typeof post.data.category === "string"
				? post.data.category.trim()
				: String(post.data.category).trim();

		count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
	});

	const ret: Category[] = [];
	const entries = Object.entries(count).sort((a, b) => {
		const countDiff = b[1] - a[1];
		if (countDiff !== 0) return countDiff;
		return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
	});
	for (const [name, countValue] of entries) {
		ret.push({
			name,
			count: countValue,
			url: getCategoryUrl(name),
		});
	}
	return ret;
}

export async function getSeriesEntries(seriesId: string) {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		if (import.meta.env.PROD && data.draft === true) return false;
		return data.series?.id === seriesId;
	});

	return allBlogPosts.sort((a, b) => {
		const orderA = a.data.series?.order ?? null;
		const orderB = b.data.series?.order ?? null;
		if (orderA !== null && orderB !== null) return orderA - orderB;
		if (orderA !== null) return -1;
		if (orderB !== null) return 1;
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? 1 : -1;
	});
}

async function getSeriesTotalsMap() {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		if (import.meta.env.PROD && data.draft === true) return false;
		return Boolean(data.series?.id);
	});

	const totals = new Map<string, { words: number; minutes: number }>();
	await Promise.all(
		allBlogPosts.map(async (entry) => {
			const seriesId = entry.data.series?.id;
			if (!seriesId) return;
			const { remarkPluginFrontmatter } = await entry.render();
			const words = remarkPluginFrontmatter.words ?? 0;
			const minutes = remarkPluginFrontmatter.minutes ?? 0;
			const prev = totals.get(seriesId) ?? { words: 0, minutes: 0 };
			totals.set(seriesId, {
				words: prev.words + words,
				minutes: prev.minutes + minutes,
			});
		}),
	);

	return totals;
}

import type { APIRoute } from "astro";
import { getSeriesEntries, getSortedPosts } from "../../utils/content-utils";
import { getOgImagePath, renderOgImage } from "../../utils/og-image";

export async function getStaticPaths() {
	const posts = await getSortedPosts();
	return posts.map((entry) => ({
		params: { path: getOgImagePath(entry).replace(/^\/og\//, "") },
		props: { entry },
	}));
}

type Entry = Awaited<ReturnType<typeof getSortedPosts>>[number];

// Series parts show the main post's title, with the part's own title below it.
async function getSeriesMainTitle(entry: Entry): Promise<string | undefined> {
	if (entry.collection !== "posts") return undefined;
	const series = entry.data.series;
	if (!series || series.role !== "part") return undefined;
	const entries = await getSeriesEntries(series.id);
	const main = entries.find((item) => item.data.series?.role === "main");
	return main?.data.title || series.title || undefined;
}

export const GET: APIRoute = async ({ props }) => {
	const { entry } = props as { entry: Entry };
	const { remarkPluginFrontmatter } = await entry.render();
	const seriesMainTitle = await getSeriesMainTitle(entry);
	const image = await renderOgImage({
		title: seriesMainTitle ?? entry.data.title,
		description: seriesMainTitle
			? entry.data.title
			: entry.data.description || remarkPluginFrontmatter.excerpt || "",
		published: entry.data.published,
		category: entry.data.category?.trim() || "未分類",
		tags: entry.data.tags,
	});
	return new Response(new Uint8Array(image), {
		headers: { "Content-Type": "image/png" },
	});
};

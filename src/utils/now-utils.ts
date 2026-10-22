import { getCollection } from "astro:content";

// The latest Now entry is served only at /now/; older entries keep /now/<id>/.
export const LATEST_NOW_SLUG = "now";

export async function getNowPosts() {
	const posts = await getCollection(
		"now",
		({ data }) => !data.draft && data.published.getTime() <= Date.now(),
	);
	const latest = [...posts].sort(
		(a, b) =>
			b.data.published.getTime() - a.data.published.getTime() ||
			a.slug.localeCompare(b.slug),
	)[0];
	// Namespace slugs so a Now entry and a regular post can share a filename.
	return posts.map((post) => ({
		...post,
		slug: post === latest ? LATEST_NOW_SLUG : `now/${post.slug}`,
	}));
}

export async function getLatestNowPost() {
	const posts = await getNowPosts();
	return posts.find((post) => post.slug === LATEST_NOW_SLUG);
}

// Stable Giscus term, so comments stay with an entry after it moves from /now/
// to /now/<id>/.
export function getNowCommentTerm(entryId: string) {
	return `now/${entryId.replace(/\/index\.mdx?$|\.mdx?$/, "")}`;
}

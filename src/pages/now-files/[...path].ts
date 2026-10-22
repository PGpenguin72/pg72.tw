import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { APIRoute } from "astro";
import { getNowPosts } from "../../utils/now-utils";

export async function getStaticPaths() {
	const root = path.resolve("src/content/now");
	const files = new Set<string>();
	async function walk(directory: string) {
		const entries = await readdir(directory, { withFileTypes: true }).catch(
			(error: NodeJS.ErrnoException) => {
				if (error.code === "ENOENT") return [];
				throw error;
			},
		);
		for (const entry of entries) {
			if (entry.name.startsWith(".")) continue;
			const file = path.join(directory, entry.name);
			if (entry.isDirectory()) await walk(file);
			else if (entry.isFile()) files.add(file);
		}
	}
	for (const entry of await getNowPosts()) {
		await walk(path.join(root, path.dirname(entry.id), "assets"));
	}
	return [...files].map((file) => ({
		params: { path: path.relative(root, file).split(path.sep).join("/") },
		props: { file },
	}));
}

const contentTypes: Record<string, string> = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
	".gif": "image/gif",
	".svg": "image/svg+xml",
	".pdf": "application/pdf",
	".txt": "text/plain; charset=utf-8",
};

export const GET: APIRoute = async ({ props }) => {
	const file = props.file as string;
	return new Response(new Uint8Array(await readFile(file)), {
		headers: {
			"Content-Type":
				contentTypes[path.extname(file).toLowerCase()] ??
				"application/octet-stream",
		},
	});
};

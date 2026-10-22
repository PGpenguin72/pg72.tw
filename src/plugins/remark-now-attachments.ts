import { statSync } from "node:fs";
import path from "node:path";
import type { Root } from "mdast";
import { visit } from "unist-util-visit";

// Markdown images are handled by Astro. Resolve attachment links relative to
// the Markdown source too, including when the latest entry is served at /now/.
export function remarkNowAttachments() {
	return (tree: Root, file: { history: string[] }) => {
		const source = file.history[0];
		const root = path.resolve("src/content/now");
		if (!source || !path.resolve(source).startsWith(`${root}${path.sep}`))
			return;
		visit(tree, (node) => {
			if (node.type !== "link" && node.type !== "definition") return;
			if (/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(node.url)) return;
			const match = node.url.match(/^([^?#]*)(.*)$/s);
			if (!match?.[1]) return;
			const [, pathname, suffix] = match;
			const target = path.resolve(
				path.dirname(source),
				decodeURIComponent(pathname),
			);
			const relative = path.relative(root, target).split(path.sep).join("/");
			if (relative.startsWith("../") || !relative.split("/").includes("assets"))
				return;
			if (!statSync(target, { throwIfNoEntry: false })?.isFile()) {
				throw new Error(`Now attachment not found: ${target}`);
			}
			node.url = `/now-files/${relative.split("/").map(encodeURIComponent).join("/")}${suffix}`;
		});
	};
}

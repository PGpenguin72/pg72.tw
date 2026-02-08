import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

type Options = {
	label?: string;
};

function hasClassName(value: Element["properties"], className: string): boolean {
	const raw = value?.className;
	if (!raw) return false;
	if (Array.isArray(raw)) return raw.includes(className);
	if (typeof raw === "string") return raw.split(/\s+/).includes(className);
	return false;
}

export function rehypeFootnoteLabel(options: Options = {}) {
	const label = options.label ?? "註腳";

	return (tree: Root) => {
		visit(tree, "element", (node: Element) => {
			if (node.tagName !== "section") return;
			if (!hasClassName(node.properties, "footnotes")) return;

			const heading = node.children.find(
				(child) =>
					child.type === "element" &&
					/^h[1-6]$/.test(child.tagName),
			);

			if (!heading || heading.type !== "element") return;

			heading.children = [{ type: "text", value: label }];
		});
	};
}

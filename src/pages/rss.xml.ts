import rss from "@astrojs/rss";
import { siteConfig } from "../config";

export const GET = () =>
	rss({
		title: siteConfig.title,
		description: siteConfig.subtitle,
		site: import.meta.env.SITE,
		items: [],
	});

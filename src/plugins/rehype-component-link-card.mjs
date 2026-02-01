/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a Link Preview Card component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.url - The target URL.
 * @param {string} [properties.text] - Fallback title text.
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created Link Card component.
 */
export function LinkCardComponent(properties, children) {
	if (Array.isArray(children) && children.length !== 0)
		return h("div", { class: "hidden" }, [
			'Invalid directive. ("link" directive must be leaf type "::link{url=\\"https://...\\"}")',
		]);

	if (!properties.url || typeof properties.url !== "string")
		return h(
			"div",
			{ class: "hidden" },
			'Invalid link. ("url" attribute is required)',
		);

	const url = properties.url.trim();
	const fallbackTitle = properties.text?.trim() || url;
	const fallbackIcon = properties.icon?.trim() || "";
	const cardUuid = `LC${Math.random().toString(36).slice(-6)}`;
	const linkIconSvg =
		"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23cbd5f5%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpath d=%22M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1.5 1.5%22/%3E%3Cpath d=%22M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 1 1-7-7L6.5 11.5%22/%3E%3C/svg%3E";
	let hostForFallback = url;
	try {
		hostForFallback = new URL(url).hostname;
	} catch {
		hostForFallback = url;
	}
	const fallbackIconUrl =
		fallbackIcon === "link"
			? linkIconSvg
			: fallbackIcon
				? fallbackIcon
				: `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(hostForFallback)}`;

	const nTitle = h(`span#${cardUuid}-title`, { class: "lc-title" }, "Loading...");
	const nHost = h(`span#${cardUuid}-host`, { class: "lc-host" }, url);
	const nText = h(`div#${cardUuid}-text`, { class: "lc-text" }, [
		nTitle,
		nHost,
	]);
	const nIconInner = h(`div#${cardUuid}-icon`, {
		class: "lc-icon-inner",
		style: `background-image: url('${fallbackIconUrl}')`,
	});
	const nIcon = h("div", { class: "lc-icon" }, [nIconInner]);
	const nRow = h("div", { class: "lc-row" }, [nIcon, nText]);

	const nScript = h(
		`script#${cardUuid}-script`,
		{ type: "text/javascript", defer: true },
		`
      (function() {
        const url = ${JSON.stringify(url)};
        const fallbackTitle = ${JSON.stringify(fallbackTitle)};
        const titleEl = document.getElementById('${cardUuid}-title');
        const hostEl = document.getElementById('${cardUuid}-host');
        const iconFallback = ${JSON.stringify(fallbackIcon)};

        const linkIconSvg = ${JSON.stringify(linkIconSvg)};
        const cardEl = document.getElementById('${cardUuid}-card');

        function setText(el, text) {
          if (el && text) el.textContent = text;
        }

        function hostFromUrl(u) {
          try { return new URL(u).hostname; } catch { return u; }
        }

        const previewUrl = 'https://r.jina.ai/http://' + url.replace(/^https?:\\/\\//, '');

        fetch(previewUrl, { referrerPolicy: "no-referrer" })
          .then(response => response.text())
          .then(html => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const getMeta = (key) =>
              doc.querySelector('meta[property="' + key + '"], meta[name="' + key + '"]')?.getAttribute('content');

            const title = getMeta('og:title') || getMeta('twitter:title') || doc.title || fallbackTitle;
            const site = getMeta('og:site_name') || hostFromUrl(url);

            setText(titleEl, title);
            setText(hostEl, site);
            const host = hostFromUrl(url);
            const faviconUrl = iconFallback === 'link'
              ? linkIconSvg
              : iconFallback
                ? iconFallback
                : 'https://www.google.com/s2/favicons?sz=128&domain=' + encodeURIComponent(host);
            const iconEl = document.getElementById('${cardUuid}-icon');
            if (iconEl) {
              iconEl.style.backgroundImage = 'url(' + faviconUrl + ')';
            }

            cardEl?.classList.remove('fetch-waiting');
            cardEl?.classList.add('fetch-ready');
          })
          .catch(() => {
            const host = hostFromUrl(url);
            setText(titleEl, fallbackTitle);
            setText(hostEl, host);
            const faviconUrl = iconFallback === 'link'
              ? linkIconSvg
              : iconFallback
                ? iconFallback
                : 'https://www.google.com/s2/favicons?sz=128&domain=' + encodeURIComponent(host);
            const iconEl = document.getElementById('${cardUuid}-icon');
            if (iconEl) {
              iconEl.style.backgroundImage = 'url(' + faviconUrl + ')';
            }
            cardEl?.classList.remove('fetch-waiting');
            cardEl?.classList.add('fetch-error');
          });
      })();
    `,
	);

	return h(
		`a#${cardUuid}-card`,
		{
			class: "card-link fetch-waiting no-styling",
			href: url,
			target: "_blank",
			rel: "noopener",
		},
		[nRow, nScript],
	);
}

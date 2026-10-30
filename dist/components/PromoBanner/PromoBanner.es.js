import { ShareIcon as e } from "../../icons/ShareIcon/index.es.js";
import { Button as t } from "../Button/Button.es.js";
import { MediaImage as n } from "../MediaImage/MediaImage.es.js";
import { Reference as r } from "../Reference/index.es.js";
import { Banner as i, Media as a } from "./style.es.js";
import { memo as o } from "react";
import { Stack as s, Typography as c } from "@mui/material";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
// src/components/PromoBanner/PromoBanner.tsx
var d = 18, f = o(({ title: o, subtitle: f, imageSrc: p, imageAlt: m, imageSlot: h, linkLabel: g, linkHref: _, isExternalLink: v, linkIcon: y, sx: b }) => {
	let x = h ?? (p ? /* @__PURE__ */ l(n, {
		src: p,
		alt: m ?? o
	}) : null), S = y ?? (v ? /* @__PURE__ */ l(e, {
		width: d,
		height: d
	}) : null);
	return /* @__PURE__ */ u(i, {
		sx: b,
		children: [x ? /* @__PURE__ */ l(a, { children: x }) : null, /* @__PURE__ */ u(s, {
			sx: {
				flex: "1 0 0",
				minWidth: 0,
				gap: "8px",
				alignItems: "flex-start"
			},
			children: [/* @__PURE__ */ u(s, {
				sx: {
					gap: "4px",
					width: "100%",
					wordBreak: "break-word"
				},
				children: [/* @__PURE__ */ l(c, {
					variant: "h3",
					sx: { color: "neutral.primary" },
					children: o
				}), f ? /* @__PURE__ */ l(c, {
					variant: "body1",
					sx: { color: "neutral.grey5" },
					children: f
				}) : null]
			}), /* @__PURE__ */ u(t, {
				variant: "tertiary",
				size: "medium",
				hasIcon: !!S,
				component: r,
				href: _,
				isExternalLink: v,
				...v ? {
					target: "_blank",
					rel: "noreferrer"
				} : {},
				children: [S, g]
			})]
		})]
	});
});
export { f as PromoBanner };

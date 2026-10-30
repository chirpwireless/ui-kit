import { Link as e } from "../Link/index.es.js";
import { Anchor as t } from "./style.es.js";
import { jsx as n } from "react/jsx-runtime";
// src/components/Reference/index.tsx
var r = ({ href: r = "#", children: i, isExternalLink: a, ...o }) => a ? /* @__PURE__ */ n(t, {
	href: r,
	...o,
	children: i
}) : /* @__PURE__ */ n(e, {
	to: r,
	...o,
	children: i
});
export { r as Reference };

import { LinkBox as e } from "../style.es.js";
import { jsx as t } from "react/jsx-runtime";
// src/components/Sidebar/components/DefaultLink.tsx
var n = {
	target: "_blank",
	rel: "noopener noreferrer"
}, r = ({ href: r, isExternal: i, disabled: a, isSidebarCollapsed: o, onClick: s, children: c, className: l }) => /* @__PURE__ */ t(e, {
	component: "a",
	href: a ? "#" : r,
	onClick: s,
	disabled: a,
	isSidebarCollapsed: o,
	className: l,
	...i ? n : {},
	children: c
});
export { r as DefaultLink };

import { useBreakpoints as e } from "../../hooks/use-breakpoints.es.js";
import { AppContainer as t, LayoutRoot as n } from "./style.es.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
// src/layouts/BaseLayout/BaseLayout.tsx
var o = ({ sidebar: o, header: s, children: c, isSidebarOpen: l, isSidebarCollapsed: u, toastContainer: d, overlaySlot: f }) => {
	let { isMobile: p } = e();
	return /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ a(n, { children: [
		p && s ? s : null,
		o,
		/* @__PURE__ */ i(t, {
			isOpen: l,
			isSidebarCollapsed: u,
			children: c
		}),
		f
	] }), d] });
};
export { o as BaseLayout };

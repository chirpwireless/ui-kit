import { Tab as e, TabBadge as t, Tabs as n } from "./style.es.js";
import { Stack as r, Typography as i } from "@mui/material";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
// src/components/Tabs/Tabs.tsx
function s({ items: s, activeTab: c, setActiveTab: l, sx: u, tabSx: d, variant: f, counts: p, renderLabel: m }) {
	return /* @__PURE__ */ a(n, {
		className: "tabs",
		value: c,
		onChange: (e, t) => l(t),
		sx: u,
		variant: f,
		children: s.map((n) => {
			let s = p?.[n], c = s != null, l = m ? m(n) : n;
			return /* @__PURE__ */ a(e, {
				label: c ? /* @__PURE__ */ o(r, {
					direction: "row",
					sx: {
						alignItems: "center",
						gap: "4px"
					},
					children: [/* @__PURE__ */ a(i, {
						variant: "caption",
						children: l
					}), /* @__PURE__ */ a(t, { children: s })]
				}) : /* @__PURE__ */ a(i, {
					variant: "caption",
					children: l
				}),
				value: n,
				sx: d
			}, n);
		})
	});
}
export { s as Tabs };

import { Adornment as e, Checkmark as t, HiddenInput as n, Label as r } from "./style.es.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
// src/components/FilterItem/index.tsx
var o = ({ label: o, checked: s, size: c = "small", variant: l = "primary", endAdornmentText: u, onChange: d }) => /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i(n, {
	type: "checkbox",
	onChange: d,
	checked: s
}), /* @__PURE__ */ a(t, {
	component: "span",
	checked: s,
	hasAdornment: !!u,
	size: c,
	variant: l,
	children: [o, u && /* @__PURE__ */ i(e, {
		checked: s,
		children: u
	})]
})] });
export { o as FilterItem };

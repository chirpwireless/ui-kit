import { mergeSx as e } from "../../helpers/merge-sx.es.js";
import { Checkmark as t, CheckmarkPin as n, HiddenInput as r, Label as i, MobileToggle as a, Toggle as o } from "./style.es.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
// src/components/Toggle/index.tsx
var l = ({ name: a, label: l, checked: u, isLoading: d, disabled: f = !1, onChange: p, sx: m, labelSx: h }) => /* @__PURE__ */ c(o, {
	sx: e({ cursor: f ? "initial" : "pointer" }, m),
	children: [
		/* @__PURE__ */ s(r, {
			type: "checkbox",
			checked: u,
			onChange: p,
			name: a,
			disabled: f || d
		}),
		l && /* @__PURE__ */ s(i, {
			component: "span",
			checked: u,
			disabled: f,
			sx: h,
			children: l
		}),
		/* @__PURE__ */ s(t, {
			disabled: f,
			checked: u,
			isLoading: d,
			children: /* @__PURE__ */ s(n, {
				disabled: f,
				checked: u,
				isLoading: d
			})
		})
	]
}), u = ({ name: o, label: l, checked: u, isLoading: d, disabled: f = !1, onChange: p, sx: m, labelSx: h }) => /* @__PURE__ */ c(a, {
	sx: e({ cursor: f ? "initial" : "pointer" }, m),
	children: [
		/* @__PURE__ */ s(r, {
			type: "checkbox",
			checked: u,
			onChange: p,
			name: o,
			disabled: f || d
		}),
		l && /* @__PURE__ */ s(i, {
			component: "span",
			checked: u,
			disabled: f,
			sx: e({ mr: "0 !important" }, h),
			children: l
		}),
		/* @__PURE__ */ s(t, {
			disabled: f,
			checked: u,
			isLoading: d,
			children: /* @__PURE__ */ s(n, {
				disabled: f,
				checked: u,
				isLoading: d
			})
		})
	]
});
export { u as MobileToggle, l as Toggle };

import { Badge as e, SimpleBadge as t } from "./style.es.js";
import { forwardRef as n } from "react";
import { Typography as r } from "@mui/material";
import { jsx as i } from "react/jsx-runtime";
// src/components/Badge/index.tsx
var a = n(({ index: t, text: n, sx: a, getRef: o }, s) => n ? /* @__PURE__ */ i(e, {
	ref: o ? o(t ?? 0) : s,
	sx: a,
	children: /* @__PURE__ */ i(r, {
		noWrap: !0,
		sx: {
			fontSize: "12px",
			lineHeight: "16px"
		},
		children: n
	})
}) : null), o = ({ text: e }) => /* @__PURE__ */ i(t, { children: /* @__PURE__ */ i(r, {
	noWrap: !0,
	sx: {
		fontSize: "12px",
		lineHeight: "16px"
	},
	children: e
}) });
a.displayName = "Badge";
export { a as Badge, o as SimpleBadge };

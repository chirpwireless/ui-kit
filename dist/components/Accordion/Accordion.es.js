import { ChevronDownIcon as e } from "../../icons/ChevronDownIcon/index.es.js";
import "react";
import { Box as t, Collapse as n, Stack as r } from "@mui/material";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
// src/components/Accordion/Accordion.tsx
var o = ({ expanded: o, onChange: s, summary: c, endContent: l, children: u, sx: d }) => /* @__PURE__ */ a(r, {
	sx: d,
	children: [/* @__PURE__ */ a(r, {
		direction: "row",
		onClick: s,
		sx: {
			justifyContent: "space-between",
			alignItems: "center",
			gap: "12px",
			cursor: "pointer"
		},
		children: [c, /* @__PURE__ */ a(r, {
			direction: "row",
			sx: {
				gap: "8px",
				alignItems: "center",
				justifyContent: "flex-end",
				minWidth: 56
			},
			children: [l, /* @__PURE__ */ i(t, {
				sx: {
					display: "flex",
					transition: "transform 0.2s",
					transform: o ? "rotate(180deg)" : "none"
				},
				children: /* @__PURE__ */ i(e, {})
			})]
		})]
	}), /* @__PURE__ */ i(n, {
		in: o,
		timeout: "auto",
		unmountOnExit: !0,
		children: u
	})]
});
export { o as Accordion };

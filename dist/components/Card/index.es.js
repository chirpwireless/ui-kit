import { Card as e, Title as t } from "./style.es.js";
import { Stack as n } from "@mui/material";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
// src/components/Card/index.tsx
var a = ({ icon: a, title: o, actions: s, children: c, fullContent: l, isClickable: u, size: d = "large", className: f, sx: p, onClick: m }) => /* @__PURE__ */ i(e, {
	className: f,
	sx: p,
	fullContent: l,
	isClickable: u,
	onClick: m,
	children: [(s || o || a) && /* @__PURE__ */ i(n, {
		direction: "row",
		sx: {
			alignItems: "center",
			gap: "12px",
			justifyContent: "space-between"
		},
		children: [/* @__PURE__ */ i(n, {
			direction: "row",
			sx: {
				alignItems: "center",
				gap: "12px"
			},
			children: [a && /* @__PURE__ */ r(n, {
				sx: {
					alignItems: "center",
					justifyContent: "center",
					width: "24px",
					height: "24px"
				},
				children: a
			}), o && /* @__PURE__ */ r(t, {
				size: d,
				children: o
			})]
		}), s && /* @__PURE__ */ r(n, {
			direction: "row",
			sx: {
				alignItems: "center",
				gap: "12px"
			},
			children: s.map((e) => e)
		})]
	}), c]
});
export { a as Card };

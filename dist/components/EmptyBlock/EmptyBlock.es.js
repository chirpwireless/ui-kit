import { Stack as e, Typography as t } from "@mui/material";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
// src/components/EmptyBlock/EmptyBlock.tsx
var i = ({ title: i, children: a, icon: o, textColor: s, sx: c = {} }) => /* @__PURE__ */ r(e, {
	sx: {
		alignItems: "center",
		justifyContent: "center",
		gap: "16px",
		...c,
		width: "100%",
		height: "100%"
	},
	children: [o, /* @__PURE__ */ r(e, {
		direction: "column",
		color: s ?? "neutral.grey4",
		sx: {
			gap: "8px",
			alignItems: "center",
			justifyContent: "center",
			width: "100%"
		},
		children: [/* @__PURE__ */ n(t, {
			color: "inherit",
			sx: {
				fontSize: "12px",
				lineHeight: "16px",
				textTransform: "uppercase",
				textAlign: "center"
			},
			children: i
		}), /* @__PURE__ */ n(t, {
			component: "div",
			color: "inherit",
			sx: {
				fontSize: "12px",
				lineHeight: "16px",
				letterSpacing: "0.1px",
				small: { color: "neutral.primary" }
			},
			children: a
		})]
	})]
});
export { i as EmptyBlock };

import { Button as e } from "../Button/Button.es.js";
import { StackRowJB as t } from "../Stacks/index.es.js";
import "react";
import { Box as n, Stack as r, Typography as i } from "@mui/material";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
// src/components/DialogForm/DialogForm.tsx
var s = ({ cancelText: s, children: c, onCancel: l, onSubmit: u, isLoading: d, title: f, subtitle: p, submitText: m, maxWidth: h }) => /* @__PURE__ */ o(n, {
	component: "form",
	onSubmit: u,
	sx: {
		minWidth: {
			xs: "100%",
			sm: "350px",
			md: "auto"
		},
		maxWidth: h
	},
	children: [
		/* @__PURE__ */ o(r, {
			sx: {
				textAlign: "center",
				gap: 2,
				mb: 3
			},
			children: [/* @__PURE__ */ a(i, {
				variant: "subtitle1",
				color: "neutral.primary",
				children: f
			}), p && /* @__PURE__ */ a(i, {
				variant: "body1",
				color: "neutral.grey4",
				children: p
			})]
		}),
		/* @__PURE__ */ a(r, {
			sx: {
				gap: "16px",
				mb: "24px"
			},
			children: c
		}),
		/* @__PURE__ */ o(t, {
			sx: { width: "100%" },
			children: [/* @__PURE__ */ a(e, {
				variant: "secondary",
				type: "button",
				size: "medium",
				onClick: l,
				sx: { width: "50%" },
				children: s
			}), /* @__PURE__ */ a(e, {
				variant: "primary",
				type: "submit",
				size: "medium",
				disabled: d,
				sx: { width: "50%" },
				children: m
			})]
		})
	]
});
export { s as DialogForm };

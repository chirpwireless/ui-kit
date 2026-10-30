import { Container as e, Description as t, Modal as n, Title as r } from "./style.es.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
// src/components/Modal/index.tsx
var o = ({ title: o, description: s, actionComponent: c, icon: l }) => /* @__PURE__ */ i(e, { children: /* @__PURE__ */ a(n, { children: [
	l,
	/* @__PURE__ */ i(r, {
		sx: {
			mt: "24px",
			mb: "12px"
		},
		children: o
	}),
	/* @__PURE__ */ i(t, {
		sx: { mb: "24px" },
		children: s
	}),
	c
] }) });
export { o as Modal };

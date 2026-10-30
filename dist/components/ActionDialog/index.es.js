import { CheckCircleIcon as e } from "../../icons/CheckCircleIcon/index.es.js";
import { CloseIcon as t } from "../../icons/CloseIcon/index.es.js";
import { Button as n } from "../Button/Button.es.js";
import { Loader as r } from "../Loader/index.es.js";
import { Card as i, CloseIconButton as a, Dialog as o, IconWrapper as s } from "./style.es.js";
import { Typography as c, useTheme as l } from "@mui/material";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
// src/components/ActionDialog/index.tsx
var f = ({ isOpen: f, title: p, description: m, nodeDescription: h, buttonText: g, sx: _, icon: v, onApply: y, onClose: b, isLoading: x }) => {
	let { palette: S } = l();
	return /* @__PURE__ */ d(o, {
		open: f,
		sx: _,
		children: [b && /* @__PURE__ */ u(a, {
			onClick: b,
			children: /* @__PURE__ */ u(t, {})
		}), /* @__PURE__ */ d(i, { children: [
			/* @__PURE__ */ u(s, { children: v ?? /* @__PURE__ */ u(e, { color: S.primary.main }) }),
			/* @__PURE__ */ u(c, {
				color: "neutral.primary",
				sx: {
					mt: "24px",
					fontSize: "16px",
					lineHeight: "20px",
					fontWeight: 500,
					textAlign: "center"
				},
				children: p
			}),
			h || null,
			m ? /* @__PURE__ */ u(c, {
				color: "neutral.grey4",
				sx: {
					mt: 3,
					fontSize: "13px",
					lineHeight: "20px",
					textAlign: "center"
				},
				children: m
			}) : null,
			/* @__PURE__ */ u(n, {
				size: "medium",
				sx: { marginTop: 6 },
				variant: "primary",
				fullWidth: !0,
				onClick: y,
				disabled: x,
				children: x ? /* @__PURE__ */ u(r, {
					color: "inherit",
					size: 18
				}) : g
			})
		] })]
	});
};
export { f as ActionDialog };

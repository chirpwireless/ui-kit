import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { cloneElement as n, useState as r } from "react";
import { Menu as i, MenuItem as a, Typography as o } from "@mui/material";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
// src/components/ActionsMenu/ActionsMenu.tsx
var u = ({ actions: u, children: d, transformOrigin: f = {
	vertical: "top",
	horizontal: "left"
} }) => {
	let [p, m] = r(null), h = (e) => {
		e.stopPropagation();
		let t = e.currentTarget.getBoundingClientRect();
		m({
			top: t.bottom,
			left: t.right
		});
		let n = d.props;
		n.onClick && n.onClick(e);
	}, g = () => {
		m(null);
	}, _ = (e) => (t) => {
		t.stopPropagation(), e.onClick(), g();
	};
	return /* @__PURE__ */ l(s, { children: [n(d, { onClick: h }), /* @__PURE__ */ c(i, {
		open: !!p,
		onClose: g,
		anchorReference: "anchorPosition",
		anchorPosition: p ? {
			top: p.top,
			left: p.left
		} : void 0,
		transformOrigin: f,
		slotProps: { paper: { sx: {
			backgroundColor: (n) => n.palette.mode === e.Dark ? t(n).neutral.grey1 : t(n).neutral.white,
			border: (e) => `1px solid ${t(e).borders.primary}`,
			borderRadius: "12px",
			boxShadow: (e) => `0 8px 24px ${t(e).shadow ?? "rgba(0, 0, 0, 0.14)"}`,
			backdropFilter: "blur(10px)",
			backgroundImage: "none"
		} } },
		sx: {
			"& .MuiPaper-root": { minWidth: "160px" },
			"& .MuiMenuItem-root": {
				gap: "8px",
				padding: "8px 16px",
				"&:hover": { backgroundColor: "action.hover" }
			}
		},
		children: u.map((e, t) => /* @__PURE__ */ l(a, {
			disabled: e.disabled,
			onClick: _(e),
			sx: {
				color: "neutral.primary",
				"&:hover": { backgroundColor: "action.hover" }
			},
			children: [e.icon, /* @__PURE__ */ c(o, {
				variant: "caption",
				color: "neutral.primary",
				children: e.label
			})]
		}, t))
	})] });
};
export { u as ActionsMenu };

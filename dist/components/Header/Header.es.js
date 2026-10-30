import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { ToggleSidebarIcon as n } from "../../icons/ToggleSidebarIcon/index.es.js";
import { IconButton as r, Stack as i, styled as a } from "@mui/material";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
// src/components/Header/Header.tsx
var c = (n) => n.palette.mode === e.Dark ? t(n).neutral.grey1 : t(n).neutral.white, l = a("header", { shouldForwardProp: (e) => e !== "transparent" })(({ theme: e, transparent: n }) => ({
	width: "100%",
	minHeight: 64,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "12px 24px",
	backgroundColor: n ? "transparent" : c(e),
	borderBottom: n ? "none" : `1px solid ${t(e).borders.ternary}`,
	color: t(e).neutral.primary
})), u = ({ logo: e, rightSlot: t, onMenuOpen: a, showMenuButton: c = !0, transparent: u }) => /* @__PURE__ */ s(l, {
	transparent: u,
	children: [/* @__PURE__ */ s(i, {
		direction: "row",
		sx: {
			alignItems: "center",
			gap: 2
		},
		children: [c && a ? /* @__PURE__ */ o(r, {
			onClick: a,
			size: "small",
			edge: "start",
			color: "inherit",
			children: /* @__PURE__ */ o(n, {})
		}) : null, e]
	}), t]
});
export { u as Header };

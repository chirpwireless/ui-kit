import { AppLogo as e, LogoCollapsedWrap as t, LogoWrap as n, SideBarToggledWrap as r } from "./style.es.js";
import { SidebarToggle as i } from "./SidebarToggle.es.js";
import { Stack as a } from "@mui/material";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
// src/components/Sidebar/SidebarLogo.tsx
var c = ({ isSidebarCollapsed: c, isSidebarHovered: l, onToggle: u, logo: d, logoCollapsed: f }) => /* @__PURE__ */ s(a, {
	direction: "row",
	sx: {
		width: "100%",
		justifyContent: c ? "center" : "space-between",
		alignItems: "start",
		gap: 0
	},
	children: [c ? l ? null : /* @__PURE__ */ o(t, { children: f ?? d }) : /* @__PURE__ */ o(e, { children: /* @__PURE__ */ o(n, { children: d }) }), l ? /* @__PURE__ */ o(r, { children: /* @__PURE__ */ o(i, {
		isSidebarHovered: l,
		isSidebarCollapsed: c,
		onToggle: u
	}) }) : null]
});
export { c as SidebarLogo };

import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, Drawer as r, List as i, ListItem as a, Stack as o, Typography as s, drawerClasses as c, styled as l } from "@mui/material";
// src/components/Sidebar/style.ts
var u = (n, r) => ({
	transition: n.transitions.create("width", {
		easing: n.transitions.easing.sharp,
		duration: n.transitions.duration.enteringScreen
	}),
	background: n.palette.mode === e.Dark ? t(n).neutral.black : t(n).neutral.white,
	borderRight: `1px solid ${n.palette.borders.primary}`,
	border: "none",
	overflow: "visible",
	marginTop: 0,
	zIndex: 1e3,
	position: "fixed",
	width: r ? 36 : 250,
	[n.breakpoints.between("md", "lg")]: {
		width: "100%",
		height: "100%"
	},
	[n.breakpoints.down("md")]: {
		width: "100%",
		height: "100%"
	}
}), d = (n) => ({
	transition: n.transitions.create("width", {
		easing: n.transitions.easing.sharp,
		duration: n.transitions.duration.leavingScreen
	}),
	overflow: "hidden",
	width: 0,
	background: n.palette.mode === e.Dark ? t(n).neutral.black : t(n).neutral.white,
	zIndex: 2e3,
	[n.breakpoints.up("lg")]: {
		overflow: "visible",
		position: "fixed",
		width: 69,
		zIndex: 100
	}
}), f = l(r, { shouldForwardProp: (e) => e !== "isCollapsed" })(({ theme: e, open: t, isCollapsed: n }) => ({
	display: "flex",
	flexDirection: "column",
	width: n ? 36 : 250,
	flexShrink: 0,
	whiteSpace: "nowrap",
	position: "absolute",
	boxSizing: "border-box",
	[`.${c.paper}`]: { padding: 0 },
	[e.breakpoints.up("lg")]: { [`.${c.paper}`]: { padding: n ? "16px 0px" : "16px 4px" } },
	...t && {
		...u(e, n),
		[`& .${c.paper}`]: { ...u(e, n) }
	},
	...!t && {
		...d(e),
		[`& .${c.paper}`]: { ...d(e) }
	}
})), p = l(n)({
	display: "flex",
	alignItems: "center",
	overflow: "hidden",
	padding: 0,
	height: 60
}), m = l("div")({
	display: "inline-flex",
	minWidth: 145,
	overflow: "hidden",
	position: "relative",
	textDecoration: "none",
	padding: "0px 10px"
}), h = l(o)(({ theme: e }) => ({
	height: 60,
	width: "100%",
	flexDirection: "row",
	alignItems: "start",
	justifyContent: "center",
	padding: "10px 0px",
	color: t(e).neutral.primary
})), g = l(n)(({ theme: e }) => ({
	height: 60,
	padding: "10px 0",
	color: t(e).neutral.grey4
})), _ = l(n, { shouldForwardProp: (e) => e !== "isActive" })(({ isActive: e, theme: n }) => ({
	color: e ? t(n).primaryColors.accent : t(n).neutral.grey4,
	background: e ? t(n).primaryColors.accentLight : "transparent",
	width: "100%",
	padding: 0,
	cursor: "pointer",
	overflow: "hidden",
	borderRadius: 6,
	"&:hover": { background: e ? t(n).primaryColors.accentLight : t(n).primaryColors.accentLight2 ?? t(n).primaryColors.accentLight }
})), v = l(i)({
	display: "flex",
	flexFlow: "column nowrap",
	alignItems: "center",
	flex: 1,
	gap: "16px",
	padding: 0,
	overflowX: "hidden",
	overflowY: "auto"
}), y = l(a)({
	padding: 0,
	"& + &": { marginTop: 4 }
}), b = l(a, { shouldForwardProp: (e) => e !== "noPadding" })(({ noPadding: e }) => ({
	padding: 0,
	marginTop: 4,
	"&& > *": { paddingLeft: e ? 0 : 8 }
})), x = l(n, { shouldForwardProp: (e) => e !== "isSidebarCollapsed" && e !== "disabled" })(({ disabled: e, isSidebarCollapsed: t }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: t ? "center" : "space-between",
	borderRadius: 4,
	padding: 6,
	flexGrow: 1,
	minHeight: 32,
	color: "currentColor",
	textDecoration: "none",
	opacity: e ? .7 : 1,
	cursor: e ? "not-allowed" : "pointer",
	pointerEvents: e ? "none" : "auto"
})), S = l(o)({
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	borderRadius: 4,
	padding: 6,
	minHeight: 32,
	flexGrow: 1,
	color: "currentcolor",
	cursor: "pointer"
}), C = l(n, { shouldForwardProp: (e) => e !== "isOpen" })(({ isOpen: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transform: e ? "rotate(180deg)" : "rotate(0deg)",
	transition: "transform 0.2s ease"
})), w = l(s)({
	marginLeft: 8,
	fontSize: 12,
	lineHeight: "18px",
	textDecoration: "none",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis"
}), T = l("footer")(({ theme: n }) => ({
	backgroundColor: n.palette.mode === e.Dark ? t(n).neutral.black : t(n).neutral.white,
	marginTop: "auto",
	overflow: "hidden",
	color: t(n).neutral.primary,
	textAlign: "center",
	[n.breakpoints.down("lg")]: { padding: "8px 16px" }
}));
export { p as AppLogo, C as DropdownIconWrapper, T as Footer, x as LinkBox, w as LinkText, v as List, b as ListChildItem, y as ListItem, h as LogoCollapsedWrap, m as LogoWrap, S as MenuParentItem, g as SideBarToggledWrap, f as SidebarDrawer, _ as SidebarItemBox };

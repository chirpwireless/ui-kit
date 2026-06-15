import { styled as n, Drawer as x, drawerClasses as a, Box as t, Stack as l, List as u, ListItem as c, Typography as f } from "@mui/material";
import { CLOSED_SIDEBAR_WIDTH as b, SIDEBAR_COLLAPSED_WIDTH as g, SIDEBAR_WIDTH as w, CurrentTheme as d } from "../../styles/constants.es.js";
import { chirpPalette as r } from "../../theme/palette.es.js";
const s = (o, i) => ({
  transition: o.transitions.create("width", {
    easing: o.transitions.easing.sharp,
    duration: o.transitions.duration.enteringScreen
  }),
  background: o.palette.mode === d.Dark ? r(o).neutral.black : r(o).neutral.white,
  borderRight: `1px solid ${o.palette.borders.primary}`,
  border: "none",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1e3,
  position: "fixed",
  width: i ? g : w,
  [o.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: "100%"
  },
  [o.breakpoints.down("md")]: {
    width: "100%",
    height: "100%"
  }
}), p = (o) => ({
  transition: o.transitions.create("width", {
    easing: o.transitions.easing.sharp,
    duration: o.transitions.duration.leavingScreen
  }),
  overflow: "hidden",
  width: 0,
  background: o.palette.mode === d.Dark ? r(o).neutral.black : r(o).neutral.white,
  zIndex: 2e3,
  [o.breakpoints.up("lg")]: {
    overflow: "visible",
    position: "fixed",
    width: b,
    zIndex: 100
  }
}), L = n(x, {
  shouldForwardProp: (o) => o !== "isCollapsed"
})(({ theme: o, open: i, isCollapsed: e }) => ({
  display: "flex",
  flexDirection: "column",
  width: e ? g : w,
  flexShrink: 0,
  whiteSpace: "nowrap",
  position: "absolute",
  boxSizing: "border-box",
  [`.${a.paper}`]: {
    padding: 0
  },
  [o.breakpoints.up("lg")]: {
    [`.${a.paper}`]: {
      padding: e ? "16px 0px" : "16px 4px"
    }
  },
  ...i && {
    ...s(o, e),
    [`& .${a.paper}`]: {
      ...s(o, e)
    }
  },
  ...!i && {
    ...p(o),
    [`& .${a.paper}`]: {
      ...p(o)
    }
  }
})), k = n(t)({
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  padding: 0,
  height: 60
}), D = n("div")({
  display: "inline-flex",
  minWidth: 145,
  overflow: "hidden",
  position: "relative",
  textDecoration: "none",
  padding: "0px 10px"
}), m = n(l)(({ theme: o }) => ({
  height: 60,
  width: "100%",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "center",
  padding: "10px 0px",
  color: r(o).neutral.primary
})), v = n(t)(({ theme: o }) => ({
  height: 60,
  padding: "10px 0",
  color: r(o).neutral.grey4
})), S = n(t, {
  shouldForwardProp: (o) => o !== "isActive"
})(({ isActive: o, theme: i }) => ({
  color: o ? r(i).primaryColors.accent : i.palette.primary.contrastText,
  background: o ? r(i).primaryColors.accentLight : "transparent",
  width: "100%",
  padding: 0,
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: 6,
  "&:hover": {
    background: o ? r(i).primaryColors.accentLight : r(i).primaryColors.accentLight2 ?? r(i).primaryColors.accentLight
  }
})), C = n(u)({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  flex: 1,
  padding: 0,
  overflowX: "hidden",
  overflowY: "auto"
}), T = n(c)({
  padding: 0,
  "& + &": {
    marginTop: 4
  }
}), P = n(c, {
  shouldForwardProp: (o) => o !== "noPadding"
})(({ noPadding: o }) => ({
  padding: 0,
  marginTop: 4,
  "&& > *": {
    paddingLeft: o ? 0 : 8
  }
})), W = n(t, {
  shouldForwardProp: (o) => o !== "isSidebarCollapsed" && o !== "disabled"
})(({ disabled: o, isSidebarCollapsed: i }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: i ? "center" : "space-between",
  borderRadius: 4,
  padding: 6,
  flexGrow: 1,
  minHeight: 32,
  color: "currentColor",
  textDecoration: "none",
  opacity: o ? 0.7 : 1,
  cursor: o ? "not-allowed" : "pointer",
  pointerEvents: o ? "none" : "auto"
})), B = n(l)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 4,
  padding: 6,
  minHeight: 32,
  flexGrow: 1,
  color: "currentcolor",
  cursor: "pointer"
}), F = n(t, {
  shouldForwardProp: (o) => o !== "isOpen"
})(({ isOpen: o }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: o ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease"
})), R = n(f)({
  marginLeft: 8,
  fontSize: 12,
  lineHeight: "18px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), $ = n("footer")(({ theme: o }) => ({
  backgroundColor: o.palette.mode === d.Dark ? r(o).neutral.black : r(o).neutral.white,
  marginTop: "auto",
  overflow: "hidden",
  color: r(o).neutral.primary,
  textAlign: "center",
  [o.breakpoints.down("lg")]: {
    padding: "8px 16px"
  }
}));
export {
  k as AppLogo,
  F as DropdownIconWrapper,
  $ as Footer,
  W as LinkBox,
  R as LinkText,
  C as List,
  P as ListChildItem,
  T as ListItem,
  m as LogoCollapsedWrap,
  D as LogoWrap,
  B as MenuParentItem,
  v as SideBarToggledWrap,
  L as SidebarDrawer,
  S as SidebarItemBox
};

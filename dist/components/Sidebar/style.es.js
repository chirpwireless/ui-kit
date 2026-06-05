import { styled as t, Drawer as w, drawerClasses as i, Box as e, Stack as l, List as x, ListItem as s, Typography as u } from "@mui/material";
import { CLOSED_SIDEBAR_WIDTH as f, SIDEBAR_COLLAPSED_WIDTH as c, SIDEBAR_WIDTH as g, CurrentTheme as a } from "../../styles/constants.es.js";
const p = (o, r) => ({
  transition: o.transitions.create("width", {
    easing: o.transitions.easing.sharp,
    duration: o.transitions.duration.enteringScreen
  }),
  background: o.palette.mode === a.Dark ? o.palette.neutral.black : o.palette.neutral.white,
  borderRight: `1px solid ${o.palette.borders.primary}`,
  border: "none",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1e3,
  position: "fixed",
  width: r ? c : g,
  [o.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: "100%"
  },
  [o.breakpoints.down("md")]: {
    width: "100%",
    height: "100%"
  }
}), d = (o) => ({
  transition: o.transitions.create("width", {
    easing: o.transitions.easing.sharp,
    duration: o.transitions.duration.leavingScreen
  }),
  overflow: "hidden",
  width: 0,
  background: o.palette.mode === a.Dark ? o.palette.neutral.black : o.palette.neutral.white,
  zIndex: 2e3,
  [o.breakpoints.up("lg")]: {
    overflow: "visible",
    position: "fixed",
    width: f,
    zIndex: 100
  }
}), y = t(w, {
  shouldForwardProp: (o) => o !== "isCollapsed"
})(({ theme: o, open: r, isCollapsed: n }) => ({
  display: "flex",
  flexDirection: "column",
  width: n ? c : g,
  flexShrink: 0,
  whiteSpace: "nowrap",
  position: "absolute",
  boxSizing: "border-box",
  [`.${i.paper}`]: {
    padding: 0
  },
  [o.breakpoints.up("lg")]: {
    [`.${i.paper}`]: {
      padding: n ? "16px 0px" : "16px 4px"
    }
  },
  ...r && {
    ...p(o, n),
    [`& .${i.paper}`]: {
      ...p(o, n)
    }
  },
  ...!r && {
    ...d(o),
    [`& .${i.paper}`]: {
      ...d(o)
    }
  }
})), I = t(e)({
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  padding: 0,
  height: 60
}), L = t("div")({
  display: "inline-flex",
  minWidth: 145,
  overflow: "hidden",
  position: "relative",
  textDecoration: "none",
  padding: "0px 10px"
}), k = t(l)(({ theme: o }) => ({
  height: 60,
  width: "100%",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "center",
  padding: "10px 0px",
  color: o.palette.neutral.primary
})), D = t(e)(({ theme: o }) => ({
  height: 60,
  padding: "10px 0",
  color: o.palette.neutral.grey4
})), v = t(e, {
  shouldForwardProp: (o) => o !== "isActive"
})(({ isActive: o, theme: r }) => ({
  color: o ? r.palette.primaryColors.accent : r.palette.primary.contrastText,
  background: o ? r.palette.primaryColors.accentLight : "transparent",
  width: "100%",
  padding: 0,
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: 6,
  "&:hover": {
    background: o ? r.palette.primaryColors.accentLight : r.palette.primaryColors.accentLight2 ?? r.palette.primaryColors.accentLight
  }
})), S = t(x)({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  flex: 1,
  padding: 0,
  overflowX: "hidden",
  overflowY: "auto"
}), m = t(s)({
  padding: 0,
  "& + &": {
    marginTop: 4
  }
}), C = t(s, {
  shouldForwardProp: (o) => o !== "noPadding"
})(({ noPadding: o }) => ({
  padding: 0,
  marginTop: 4,
  "&& > *": {
    paddingLeft: o ? 0 : 8
  }
})), T = t(e, {
  shouldForwardProp: (o) => o !== "isSidebarCollapsed" && o !== "disabled"
})(({ disabled: o, isSidebarCollapsed: r }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: r ? "center" : "space-between",
  borderRadius: 4,
  padding: 6,
  flexGrow: 1,
  minHeight: 32,
  color: "currentColor",
  textDecoration: "none",
  opacity: o ? 0.7 : 1,
  cursor: o ? "not-allowed" : "pointer",
  pointerEvents: o ? "none" : "auto"
})), P = t(l)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 4,
  padding: 6,
  minHeight: 32,
  flexGrow: 1,
  color: "currentcolor",
  cursor: "pointer"
}), W = t(e, {
  shouldForwardProp: (o) => o !== "isOpen"
})(({ isOpen: o }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: o ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease"
})), B = t(u)({
  marginLeft: 8,
  fontSize: 12,
  lineHeight: "18px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), F = t("footer")(({ theme: o }) => ({
  backgroundColor: o.palette.mode === a.Dark ? o.palette.neutral.black : o.palette.neutral.white,
  marginTop: "auto",
  overflow: "hidden",
  color: o.palette.neutral.primary,
  textAlign: "center",
  [o.breakpoints.down("lg")]: {
    padding: "8px 16px"
  }
}));
export {
  I as AppLogo,
  W as DropdownIconWrapper,
  F as Footer,
  T as LinkBox,
  B as LinkText,
  S as List,
  C as ListChildItem,
  m as ListItem,
  k as LogoCollapsedWrap,
  L as LogoWrap,
  P as MenuParentItem,
  D as SideBarToggledWrap,
  y as SidebarDrawer,
  v as SidebarItemBox
};

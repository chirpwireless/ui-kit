import { styled as r, Stack as a, IconButton as e, Menu as p, alpha as d, MenuItem as l } from "@mui/material";
import { SIDEBAR_WIDTH as i, CurrentTheme as n } from "../../styles/constants.es.js";
import { chirpPalette as o } from "../../theme/palette.es.js";
const c = 340, g = r(a)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 0,
  marginTop: 24,
  gap: 8
}), x = r(e)(({ theme: t }) => ({
  color: o(t).neutral.primary,
  flexShrink: 0,
  transition: "all 0.25s",
  padding: 0,
  overflow: "hidden",
  justifyContent: "flex-start",
  borderRadius: 0,
  textAlign: "left",
  whiteSpace: "normal",
  wordBreak: "break-all",
  maxWidth: "calc(100% - 70px)",
  "&:hover": {
    background: "none"
  },
  "&.notifications": {
    whiteSpace: "nowrap",
    padding: "0 6px",
    marginRight: 10
  }
})), h = r(a)({
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: 40,
  minWidth: 32
}), f = r(p)(({ theme: t }) => ({
  padding: 0,
  ".MuiList-root": {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: t.palette.mode === n.Dark ? o(t).neutral.grey1 : o(t).neutral.white,
    ".MuiDivider-root": {
      marginTop: 0,
      marginBottom: 0
    }
  },
  "& .MuiPaper-root": {
    width: "max-content",
    maxWidth: c,
    minWidth: i,
    left: "0 !important",
    right: "auto !important",
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: t.palette.mode === n.Dark ? o(t).neutral.grey1 : o(t).neutral.white,
    boxShadow: `0 8px 24px ${o(t).shadow ?? "rgba(0, 0, 0, 0.14)"}`,
    border: `1px solid ${d(
      t.palette.borders.primary,
      t.palette.mode === n.Dark ? 0.1 : 0.6
    )}`,
    backdropFilter: "blur(10px)",
    backgroundImage: "none",
    [t.breakpoints.down("md")]: {
      width: "100% !important",
      maxWidth: "100% !important",
      minWidth: "100% !important",
      left: "0 !important",
      right: "0 !important",
      position: "fixed"
    }
  }
})), w = r(l)(({ theme: t }) => ({
  padding: 12,
  border: "none",
  fontSize: 12,
  lineHeight: "18px",
  color: o(t).neutral.primary,
  cursor: "pointer",
  minWidth: `calc(${i}px - 2px)`,
  maxWidth: "100%",
  whiteSpace: "normal",
  overflowWrap: "anywhere",
  "&:first-of-type": {
    borderTop: "none"
  },
  "&:hover": {
    backgroundColor: t.palette.mode === n.Dark ? o(t).neutral.grey1 : o(t).neutral.white
  }
})), b = r(a)({
  cursor: "pointer",
  flexDirection: "row",
  gap: 8,
  width: "100%"
});
export {
  h as AlertsIcon,
  g as AvatarContainer,
  x as IconButton,
  f as Menu,
  w as MenuItem,
  b as UserMenuWrap
};

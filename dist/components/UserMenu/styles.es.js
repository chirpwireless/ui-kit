import { styled as o, Stack as n, IconButton as a, Menu as i, alpha as p, MenuItem as d } from "@mui/material";
import { SIDEBAR_WIDTH as r, CurrentTheme as e } from "../../styles/constants.es.js";
const c = o(n)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 0,
  marginTop: 24,
  gap: 8
}), s = o(a)(({ theme: t }) => ({
  color: t.palette.neutral.primary,
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
})), g = o(n)({
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: 40,
  minWidth: 32
}), m = o(i)(({ theme: t }) => ({
  width: r,
  padding: 0,
  ".MuiList-root": {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: t.palette.mode === e.Dark ? t.palette.neutral.grey1 : t.palette.neutral.white,
    ".MuiDivider-root": {
      marginTop: 0,
      marginBottom: 0
    }
  },
  "& .MuiPaper-root": {
    width: r,
    maxWidth: r,
    minWidth: r,
    left: "0 !important",
    right: "auto !important",
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: t.palette.mode === e.Dark ? t.palette.neutral.grey1 : t.palette.neutral.white,
    boxShadow: `0 8px 24px ${t.palette.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
    border: `1px solid ${p(
      t.palette.borders.primary,
      t.palette.mode === e.Dark ? 0.1 : 0.6
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
})), x = o(d)(({ theme: t }) => ({
  padding: 12,
  border: "none",
  fontSize: 12,
  lineHeight: "18px",
  color: t.palette.neutral.primary,
  cursor: "pointer",
  minWidth: `calc(${r}px - 2px)`,
  "&:first-of-type": {
    borderTop: "none"
  },
  "&:hover": {
    backgroundColor: t.palette.mode === e.Dark ? t.palette.neutral.grey1 : t.palette.neutral.white
  }
})), b = o(n)({
  cursor: "pointer",
  flexDirection: "row",
  gap: 8,
  width: "100%"
});
export {
  g as AlertsIcon,
  c as AvatarContainer,
  s as IconButton,
  m as Menu,
  x as MenuItem,
  b as UserMenuWrap
};

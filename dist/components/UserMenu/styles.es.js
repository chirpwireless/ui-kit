import { styled as o, Stack as a, IconButton as e, Menu as p, alpha as d, MenuItem as l } from "@mui/material";
import { SIDEBAR_WIDTH as n, CurrentTheme as i } from "../../styles/constants.es.js";
import { chirpPalette as r } from "../../theme/palette.es.js";
const g = o(a)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 0,
  marginTop: 24,
  gap: 8
}), m = o(e)(({ theme: t }) => ({
  color: r(t).neutral.primary,
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
})), x = o(a)({
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: 40,
  minWidth: 32
}), f = o(p)(({ theme: t }) => ({
  width: n,
  padding: 0,
  ".MuiList-root": {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: t.palette.mode === i.Dark ? r(t).neutral.grey1 : r(t).neutral.white,
    ".MuiDivider-root": {
      marginTop: 0,
      marginBottom: 0
    }
  },
  "& .MuiPaper-root": {
    width: n,
    maxWidth: n,
    minWidth: n,
    left: "0 !important",
    right: "auto !important",
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: t.palette.mode === i.Dark ? r(t).neutral.grey1 : r(t).neutral.white,
    boxShadow: `0 8px 24px ${r(t).shadow ?? "rgba(0, 0, 0, 0.14)"}`,
    border: `1px solid ${d(
      t.palette.borders.primary,
      t.palette.mode === i.Dark ? 0.1 : 0.6
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
})), h = o(l)(({ theme: t }) => ({
  padding: 12,
  border: "none",
  fontSize: 12,
  lineHeight: "18px",
  color: r(t).neutral.primary,
  cursor: "pointer",
  minWidth: `calc(${n}px - 2px)`,
  "&:first-of-type": {
    borderTop: "none"
  },
  "&:hover": {
    backgroundColor: t.palette.mode === i.Dark ? r(t).neutral.grey1 : r(t).neutral.white
  }
})), b = o(a)({
  cursor: "pointer",
  flexDirection: "row",
  gap: 8,
  width: "100%"
});
export {
  x as AlertsIcon,
  g as AvatarContainer,
  m as IconButton,
  f as Menu,
  h as MenuItem,
  b as UserMenuWrap
};

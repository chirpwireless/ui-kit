import { styled as e, Box as n, Tabs as r, Tab as a } from "@mui/material";
import { chirpPalette as i } from "../../theme/palette.es.js";
const l = e("span")(({ theme: t }) => {
  const o = i(t);
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 16,
    height: 15,
    borderRadius: "3px",
    padding: "1px 4px",
    fontSize: "10px",
    lineHeight: "12px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    backgroundColor: o.neutral.white,
    color: o.neutral.grey5,
    ".Mui-selected &": {
      backgroundColor: o.neutral.white,
      color: o.primaryColors.accent
    }
  };
}), s = e(n)(({ theme: t }) => ({
  backgroundColor: t.palette.background.primary,
  borderRadius: "6px",
  gap: "4px",
  width: "fit-content",
  border: `1px solid ${i(t).borders.primary}`,
  boxSizing: "border-box",
  height: "36px",
  display: "flex",
  alignItems: "center",
  "& .MuiTabs-root": {
    padding: "0 4px",
    minHeight: "auto"
  },
  "& .MuiTab-root": {
    padding: "4px 12px",
    height: "26px",
    maxHeight: "26px"
  },
  [t.breakpoints.down("md")]: {
    overflow: "hidden",
    maxWidth: "100%",
    "& .MuiTab-root": {
      minWidth: "58px",
      width: "fit-content"
    }
  }
})), x = e(r)(({ theme: t }) => ({
  minWidth: "200px",
  minHeight: "auto",
  ".MuiTabs-flexContainer": {
    columnGap: "4px",
    justifyContent: "center",
    [t.breakpoints.down("sm")]: {
      overflowX: "auto",
      justifyContent: "space-evenly"
    }
  },
  ".MuiTabs-indicator": {
    display: "none"
  }
})), c = e(a)(({ theme: t }) => {
  const o = i(t);
  return {
    minWidth: "auto",
    minHeight: "auto",
    height: "26px",
    maxHeight: "26px",
    padding: "4px 12px",
    borderRadius: "3px",
    fontFamily: t.typography.fontFamily,
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: "0.4px",
    color: o.neutral.grey5,
    backgroundColor: o.neutral.grey1,
    "&.Mui-selected": {
      color: o.neutral.white,
      backgroundColor: o.primaryColors.accent
    }
  };
});
export {
  c as Tab,
  l as TabBadge,
  x as Tabs,
  s as TabsContainer
};

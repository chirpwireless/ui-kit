import { styled as a, Tabs as t, Tab as r } from "@mui/material";
const e = a(t)(({ theme: o }) => ({
  minWidth: "200px",
  minHeight: "auto",
  backgroundColor: o.palette.background.background4,
  padding: "2px",
  borderRadius: "3px",
  ".MuiTabs-flexContainer": {
    columnGap: "4px",
    justifyContent: "center"
  },
  ".MuiTabs-indicator": {
    display: "none"
  }
})), p = a(r)(({ theme: o }) => ({
  minHeight: "auto",
  padding: "8px 12px",
  borderRadius: "3px",
  color: o.palette.text.text1,
  ...o.typography.caption12,
  "&:hover": {
    backgroundColor: o.palette.background.background4
  },
  "&.Mui-selected": {
    color: o.palette.base.color1,
    backgroundColor: o.palette.base.color6
  }
}));
export {
  p as Tab,
  e as Tabs
};

import { styled as t, MenuItem as e } from "@mui/material";
const p = t("div")(() => ({
  display: "grid",
  paddingRight: "8px",
  gridTemplateColumns: "auto min-content",
  gap: "12px",
  width: "100%",
  maxHeight: "140px",
  overflow: "auto"
})), n = t("div")(() => ({
  position: "sticky",
  top: 0,
  whiteSpace: "nowrap"
})), o = t(e)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6px 10px",
  height: "38px",
  ".MuiFormControlLabel-root": {
    margin: 0
  },
  "&.Mui-selected": {
    background: "transparent"
  }
}));
export {
  n as HeaderWrapper,
  p as ListWrapper,
  o as StyledMenuItem
};

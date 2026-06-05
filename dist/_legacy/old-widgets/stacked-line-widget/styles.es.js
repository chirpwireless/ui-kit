import { styled as t, MenuItem as p } from "@mui/material";
const i = t("div")(() => ({
  display: "grid",
  paddingRight: "8px",
  gridTemplateColumns: "auto min-content",
  gap: "12px",
  width: "100%",
  maxHeight: "140px",
  overflow: "auto"
})), a = t("div")(() => ({
  position: "sticky",
  top: 0,
  whiteSpace: "nowrap"
})), n = t(p)(({ theme: e }) => ({
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
  },
  ...e.typography.caption12,
  color: e.palette.text.text1
}));
export {
  a as HeaderWrapper,
  i as ListWrapper,
  n as StyledMenuItem
};

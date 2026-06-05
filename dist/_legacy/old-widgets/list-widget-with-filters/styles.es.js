import { styled as t } from "@mui/material";
const i = t("div")(() => ({
  display: "grid",
  paddingRight: "8px",
  gridTemplateColumns: "auto min-content",
  gap: "12px",
  width: "100%",
  maxHeight: "140px",
  overflow: "auto"
})), o = t("div")(() => ({
  position: "sticky",
  top: 0,
  whiteSpace: "nowrap"
}));
export {
  o as HeaderWrapper,
  i as ListWrapper
};

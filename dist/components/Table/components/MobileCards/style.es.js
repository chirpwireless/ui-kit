import { styled as r, Stack as p } from "@mui/material";
import { chirpPalette as o } from "../../../../theme/palette.es.js";
const l = r(p)(() => ({
  gap: "8px",
  width: "100%"
})), c = r(p)(({ theme: t, clickable: e }) => ({
  gap: "8px",
  padding: "12px 16px",
  borderRadius: "12px",
  border: `1px solid ${o(t).borders.primary}`,
  backgroundColor: t.palette.background.paper,
  cursor: e ? "pointer" : "default"
})), d = r(p)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "12px"
})), s = r("div")(({ theme: t }) => {
  const e = o(t);
  return {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    fontFamily: t.typography.fontFamily,
    color: e.neutral.grey3,
    flexShrink: 0
  };
}), x = r("div")(({ theme: t }) => {
  const e = o(t);
  return {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    fontFamily: t.typography.fontFamily,
    color: e.neutral.primary,
    textAlign: "right",
    minWidth: 0
  };
}), g = r(p)(({ theme: t }) => {
  const e = o(t);
  return {
    padding: "8px 4px 0",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    fontFamily: t.typography.fontFamily,
    color: e.primaryColors.accent
  };
});
export {
  c as Card,
  d as CardField,
  l as CardsList,
  s as FieldLabel,
  x as FieldValue,
  g as GroupLabel
};

import { styled as e, Stack as r } from "@mui/material";
import { chirpPalette as o } from "../../../../theme/palette.es.js";
const i = e(r)(() => ({
  gap: "8px",
  width: "100%"
})), l = e(r)(({ theme: t, clickable: p }) => ({
  gap: "8px",
  padding: "12px 16px",
  borderRadius: "12px",
  border: `1px solid ${o(t).borders.primary}`,
  backgroundColor: t.palette.background.paper,
  cursor: p ? "pointer" : "default"
})), s = e(r)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "12px"
})), c = e(r)(({ theme: t }) => ({
  padding: "8px 4px 0",
  color: o(t).neutral.grey5
}));
export {
  l as Card,
  s as CardField,
  i as CardsList,
  c as GroupLabel
};

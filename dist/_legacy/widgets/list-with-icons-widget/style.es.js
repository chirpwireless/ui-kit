import { styled as e, Stack as o, Box as i, Divider as r } from "@mui/material";
const p = e(o)(() => ({
  cursor: "pointer",
  gap: "35px",
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: "8px",
  padding: "8px 8px 8px 12px",
  position: "relative"
})), d = e(o)(() => ({
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  gap: "16px"
})), s = e(o)(() => ({
  minWidth: "48px",
  minHeight: "48px",
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "center"
})), c = e("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "4px"
})), x = e(i)(({ theme: t }) => ({
  position: "absolute",
  top: "5px",
  left: "9px",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  border: `2px solid ${t.palette.background.background7}`
})), a = e(r)(({ theme: t }) => ({
  borderColor: t.palette.border.border3
}));
export {
  x as Circle,
  a as CustomDivider,
  s as IconContainer,
  d as IconDescriptionContainer,
  c as Image,
  p as Row
};

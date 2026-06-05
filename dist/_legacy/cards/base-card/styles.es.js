import { styled as t, Stack as e, Box as r, alpha as a } from "@mui/material";
const d = t(e)(({ theme: o }) => ({
  width: "300px",
  height: "150px",
  gap: "16px",
  backgroundColor: o.palette.background.background7,
  borderRadius: "12px",
  padding: "20px",
  overflow: "hidden"
})), i = t(r)(({ theme: o }) => ({
  ...o.typography.title16,
  color: o.palette.text.text1,
  minHeight: "28px",
  borderBottom: `1px solid ${a(o.palette.border.border3, 0.1)}`
})), n = t(r)(({ theme: o }) => ({
  ...o.typography.caption12,
  minHeight: "20px",
  height: "100%",
  overflow: "auto"
}));
export {
  d as CardContainer,
  n as CardContent,
  i as CardHeader
};

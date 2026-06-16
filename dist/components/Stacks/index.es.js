import { styled as e, Box as n } from "@mui/material";
const c = e(n)(({ theme: t }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: t.spacing(2)
})), a = e(c)({
  justifyContent: "center"
}), s = e(c)({
  justifyContent: "space-between"
}), i = e(n)(({ theme: t }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: t.spacing(2)
})), l = e(n)(({ theme: t }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: t.spacing(2)
}));
export {
  i as StackColumn,
  l as StackColumnS,
  c as StackRow,
  s as StackRowJB,
  a as StackRowJC
};

import { styled as t, Stack as c } from "@mui/material";
const a = t(c, {
  shouldForwardProp: (o) => o !== "gap"
})(({ theme: o, gap: n }) => ({
  flexDirection: "row",
  gap: n ? o.spacing(n) : o.spacing(2),
  alignItems: "center"
})), r = t(a)(() => ({
  justifyContent: "center"
})), e = t(a)(() => ({
  justifyContent: "space-between"
})), i = t(c, {
  shouldForwardProp: (o) => o !== "gap"
})(({ theme: o, gap: n }) => ({
  flexDirection: "column",
  gap: n ? o.spacing(n) : o.spacing(2),
  alignItems: "center"
})), l = t(c, {
  shouldForwardProp: (o) => o !== "gap"
})(({ theme: o, gap: n }) => ({
  flexDirection: "column",
  gap: n ? o.spacing(n) : o.spacing(2),
  alignItems: "flex-start"
}));
export {
  i as StackColumn,
  l as StackColumnS,
  a as StackRow,
  e as StackRowJB,
  r as StackRowJC
};

import { styled as n, Stack as e } from "@mui/material";
const c = (o, t) => typeof t == "number" ? o.spacing(t) : t ?? o.spacing(2), r = n(e, { shouldForwardProp: (o) => o !== "gap" })(
  ({ theme: o, gap: t }) => ({ flexDirection: "row", alignItems: "center", gap: c(o, t) })
), s = n(r)({ justifyContent: "center" }), l = n(r)({ justifyContent: "space-between" }), i = n(e, { shouldForwardProp: (o) => o !== "gap" })(
  ({ theme: o, gap: t }) => ({ flexDirection: "column", alignItems: "center", gap: c(o, t) })
), p = n(e, { shouldForwardProp: (o) => o !== "gap" })(
  ({ theme: o, gap: t }) => ({ flexDirection: "column", alignItems: "flex-start", gap: c(o, t) })
);
export {
  i as StackColumn,
  p as StackColumnS,
  r as StackRow,
  l as StackRowJB,
  s as StackRowJC
};

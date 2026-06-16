import { styled as n, Stack as r } from "@mui/material";
import { shouldForwardLayoutProp as a, layoutStyles as c } from "../_layout/layoutProps.es.js";
const s = n(r, { shouldForwardProp: a })(
  ({ theme: o, ...t }) => ({
    flexDirection: "row",
    alignItems: "center",
    gap: o.spacing(2),
    ...c(o, t)
  })
), i = n(s)({ justifyContent: "center" }), p = n(s)({ justifyContent: "space-between" }), u = n(r, { shouldForwardProp: a })(
  ({ theme: o, ...t }) => ({
    flexDirection: "column",
    alignItems: "center",
    gap: o.spacing(2),
    ...c(o, t)
  })
), d = n(r, { shouldForwardProp: a })(
  ({ theme: o, ...t }) => ({
    flexDirection: "column",
    alignItems: "flex-start",
    gap: o.spacing(2),
    ...c(o, t)
  })
);
export {
  u as StackColumn,
  d as StackColumnS,
  s as StackRow,
  p as StackRowJB,
  i as StackRowJC
};

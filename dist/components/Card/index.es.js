import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as r } from "@mui/material";
import { Card as l, Title as g } from "./style.es.js";
const w = ({
  icon: t,
  title: n,
  actions: i,
  children: s,
  fullContent: p,
  isClickable: x,
  size: a = "large",
  className: c,
  sx: d,
  onClick: o
}) => /* @__PURE__ */ e.jsxs(l, { className: c, sx: d, fullContent: p, isClickable: x, onClick: o, children: [
  (i || n || t) && /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: "12px", justifyContent: "space-between", children: [
    /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: "12px", children: [
      t && /* @__PURE__ */ e.jsx(r, { alignItems: "center", justifyContent: "center", width: "24px", height: "24px", children: t }),
      n && /* @__PURE__ */ e.jsx(g, { size: a, children: n })
    ] }),
    i && /* @__PURE__ */ e.jsx(r, { direction: "row", alignItems: "center", gap: "12px", children: i.map((m) => m) })
  ] }),
  s
] });
export {
  w as Card
};

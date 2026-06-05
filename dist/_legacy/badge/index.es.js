import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Typography as p } from "@mui/material";
import { forwardRef as n } from "react";
import { Badge as s, SimpleBadge as l } from "./style.es.js";
const t = n(({ index: i, getRef: r, text: a, variant: o = "primary" }, m) => a ? /* @__PURE__ */ e.jsx(s, { ref: r ? r(i ?? 0) : m, className: o, children: /* @__PURE__ */ e.jsx(p, { noWrap: !0, fontSize: "12px", lineHeight: "16px", children: a }) }) : null), c = ({ text: i, variant: r = "primary" }) => /* @__PURE__ */ e.jsx(l, { className: r, children: /* @__PURE__ */ e.jsx(p, { noWrap: !0, fontSize: "12px", lineHeight: "16px", children: i }) });
t.displayName = "Badge";
export {
  t as Badge,
  c as SimpleBadge
};

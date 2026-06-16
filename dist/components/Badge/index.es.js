import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Typography as p } from "@mui/material";
import { forwardRef as t } from "react";
import { Badge as d, SimpleBadge as m } from "./style.es.js";
const s = t(({ index: r, text: i, sx: n, getRef: o }, a) => i ? /* @__PURE__ */ e.jsx(d, { ref: o ? o(r ?? 0) : a, sx: n, children: /* @__PURE__ */ e.jsx(
  p,
  {
    noWrap: !0,
    sx: {
      fontSize: "12px",
      lineHeight: "16px"
    },
    children: i
  }
) }) : null), h = ({ text: r }) => /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(
  p,
  {
    noWrap: !0,
    sx: {
      fontSize: "12px",
      lineHeight: "16px"
    },
    children: r
  }
) });
s.displayName = "Badge";
export {
  s as Badge,
  h as SimpleBadge
};

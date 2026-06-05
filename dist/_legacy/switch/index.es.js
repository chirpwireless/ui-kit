import { jsxRuntimeExports as f } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as m } from "@mui/material";
import { Switch as y } from "./style.es.js";
import { useRef as h, useState as x, useEffect as b } from "react";
const R = ({ width: u, activeText: n = "", inactiveText: s = "", checked: t = !1, onChange: e }) => {
  const o = h(null), [p, l] = x("117px"), w = m(y)(() => ({
    "& .MuiSwitch-track": {
      "&::before": {
        content: `"${n}"`,
        whiteSpace: "nowrap",
        display: t ? "block" : "none"
      },
      "&::after": {
        content: `"${s}"`,
        whiteSpace: "nowrap",
        display: t ? "none" : "block"
      }
    }
  }));
  b(() => {
    if (!o.current) return;
    const r = o.current.querySelector(".MuiSwitch-track");
    if (r) {
      const i = window.getComputedStyle(r, "::before"), a = window.getComputedStyle(r, "::after"), S = i.getPropertyValue("width"), d = a.getPropertyValue("width");
      return l(t ? S : d);
    }
  }, [t, n, s]);
  const c = u ?? (p ? `calc(${p} + 50px)` : t ? "127.3px" : "117.3px");
  return /* @__PURE__ */ f.jsx("div", { ref: o, children: /* @__PURE__ */ f.jsx(
    w,
    {
      onClick: () => e && e(!t),
      sx: {
        width: c
      },
      checked: t,
      onChange: (r, i) => e && e(i),
      inputProps: {
        style: {
          width: c
        }
      }
    }
  ) });
};
export {
  R as Switch
};

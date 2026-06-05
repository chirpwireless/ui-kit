import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as u, Box as c, Stack as x } from "@mui/material";
import { useRef as b } from "react";
import { CalculatedValue as a } from "./calculated-value/index.es.js";
import { Slider as f } from "./style.es.js";
const C = ({ current: l, min: t, max: i, avg: s, postfix: r, gradientColors: d, currentColor: n }) => {
  const { palette: o } = u(), m = b(null);
  return /* @__PURE__ */ e.jsxs(c, { children: [
    /* @__PURE__ */ e.jsxs(x, { direction: "row", justifyContent: "space-between", width: "100%", children: [
      /* @__PURE__ */ e.jsx(a, { value: t, postfix: r, label: "min", color: o.additionalColors.blue }),
      /* @__PURE__ */ e.jsx(a, { value: s, postfix: r, label: "avg", color: o.additionalColors.yellow }),
      /* @__PURE__ */ e.jsx(a, { value: i, postfix: r, label: "max", color: o.alerts.alert })
    ] }),
    /* @__PURE__ */ e.jsx(
      f,
      {
        ref: m,
        value: l,
        min: Math.min(t, l),
        max: Math.max(i, l) || 100,
        track: !1,
        disabled: !0,
        sx: {
          "--gradient": `linear-gradient(90deg, ${d}`,
          "& .MuiSlider-thumb": { backgroundColor: n }
        }
      }
    )
  ] });
};
export {
  C as ProgressBar
};

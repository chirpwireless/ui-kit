import { jsxRuntimeExports as s } from "../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as c } from "@mui/material";
import { Typography as p } from "../../../typogrpahy/index.es.js";
const f = ({ data: r, total: n }) => {
  const a = c();
  let o = 0;
  return r.map((e) => {
    if (e.value === 0) return null;
    const t = e.value / n * 100, l = o;
    return o += t, /* @__PURE__ */ s.jsxs(
      p,
      {
        variant: "caption",
        color: a.palette.base.colorNewGrey,
        sx: {
          position: "absolute",
          left: `${l + t / 2}%`,
          transform: "translateX(-50%)"
        },
        children: [
          Math.round(t),
          "%"
        ]
      },
      e.label
    );
  }).filter(Boolean);
};
export {
  f as PercentLabels
};

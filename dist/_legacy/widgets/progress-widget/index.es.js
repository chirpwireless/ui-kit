import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { Stack as l, Box as x } from "@mui/material";
import { BaseWidget as c } from "../base-widget/index.es.js";
import { ProgressContainer as g, ProgressSegment as d } from "./style.es.js";
import { PercentLabels as u } from "./percent-labels/percent-labels.es.js";
import { Labels as f } from "./labels/labels.es.js";
const C = (a) => {
  const { data: s, ...o } = a, n = s.reduce((r, t) => r + t.value, 0), p = /* @__PURE__ */ e.jsxs(l, { gap: "4px", children: [
    /* @__PURE__ */ e.jsx(x, { position: "relative", height: "16px", children: /* @__PURE__ */ e.jsx(u, { data: s, total: n }) }),
    /* @__PURE__ */ e.jsx(g, { children: s.reduce(
      (r, t) => {
        const i = t.value / n * 100, m = r.currentLeft;
        return r.currentLeft += i, r.segments.push(
          /* @__PURE__ */ e.jsx(
            d,
            {
              widthPercent: i,
              color: t.color,
              style: { left: `${m}%` }
            },
            t.label
          )
        ), r;
      },
      { currentLeft: 0, segments: [] }
    ).segments })
  ] });
  return /* @__PURE__ */ e.jsx(
    c,
    {
      ...o,
      mainContainerSx: { gap: "32px", ...o.mainContainerSx },
      renderSubHeader: /* @__PURE__ */ e.jsx(f, { data: s }),
      renderMainContent: p
    }
  );
};
export {
  C as ProgressWidget
};

import { jsxRuntimeExports as e } from "../../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as V } from "@mui/material";
import * as n from "react";
const G = ({
  chartData: p,
  innerWidth: i,
  innerHeight: m,
  lineGenerator: j,
  points: M,
  series: N,
  xScale: k,
  yScale: c,
  avgY: b,
  minY: s,
  maxY: o
}) => {
  const { palette: f } = V(), C = f.additionalColors.mutedGreen, P = f.additionalColors.air, r = c(Number(s)) || 0, a = c(Number(o)) || 0, g = c(Number(b)) || 0, $ = n.useMemo(() => M.map((t) => t.y), [M]), x = n.useMemo(() => {
    var t, l;
    return ((l = (t = p == null ? void 0 : p[0]) == null ? void 0 : t.data) == null ? void 0 : l.map((u) => Number(u.y))) ?? [];
  }, [p]), h = n.useMemo(() => Math.min(...x), [x]), y = n.useMemo(() => Math.max(...x), [x]), d = (() => {
    const t = Math.min(r, a), l = Math.abs(r - a);
    if (isNaN(l) || isNaN(t) || s === o || s !== null && s > y)
      return null;
    if (h === y) {
      const u = h;
      if (s === u)
        return { y: 0, height: r };
      if (o === u)
        return { y: t, height: m - t };
      if ((s === null || s < u) && (o === null || o > u))
        return { y: 0, height: m };
    }
    return s !== null && o === null ? { y: 0, height: r } : { y: t, height: l };
  })(), v = n.useMemo(
    () => N.map(({ id: t, data: l }) => {
      const u = j(
        l.map((w) => ({
          x: k(Number(w.data.x)),
          y: c(Number(w.data.y))
        }))
      );
      return { id: t, line: u };
    }),
    [N, j, k, c]
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o !== null && (h !== y || o === h) && /* @__PURE__ */ e.jsx("line", { x1: 0, x2: i, y1: a, y2: a, stroke: C, strokeWidth: 2 }),
    d !== null && /* @__PURE__ */ e.jsx(
      "rect",
      {
        x: 0,
        y: d.y,
        width: i,
        height: Math.min(d.height, m - d.y),
        fill: "url(#flat-lines-pattern-range)"
      }
    ),
    s !== null && (h !== y || s === h) && /* @__PURE__ */ e.jsx("line", { x1: 0, x2: i, y1: r, y2: r, stroke: C, strokeWidth: 2 }),
    b !== null && !isNaN(g) && /* @__PURE__ */ e.jsx(
      "line",
      {
        x1: 0,
        x2: i,
        y1: g,
        y2: g,
        stroke: P,
        strokeWidth: 0.5,
        strokeDasharray: "3 3"
      }
    ),
    s !== null && Math.max(...$) > r && v.map(({ id: t, line: l }) => /* @__PURE__ */ e.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: l ?? void 0,
          fill: "url(#flat-lines-pattern-min)",
          fillOpacity: 0.2,
          stroke: f.widgets.values.min,
          style: { strokeWidth: 1 },
          clipPath: `url(#cut-off-bottom-${t})`
        }
      ),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: `cut-off-bottom-${t}`, children: /* @__PURE__ */ e.jsx("rect", { x: 0, y: r, width: i, height: m - r }) }) })
    ] }, `${t}-min`)),
    o !== null && Math.min(...$) < a && v.map(({ id: t, line: l }) => /* @__PURE__ */ e.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: l ?? void 0,
          fill: "url(#flat-lines-pattern-max)",
          fillOpacity: 0.2,
          stroke: f.widgets.values.max,
          style: { strokeWidth: 1 },
          clipPath: `url(#cut-off-top-${t})`
        }
      ),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: `cut-off-top-${t}`, children: /* @__PURE__ */ e.jsx("rect", { x: 0, y: 0, width: i, height: a }) }) })
    ] }, `${t}-max`))
  ] });
};
export {
  G as CustomRangeLayer
};

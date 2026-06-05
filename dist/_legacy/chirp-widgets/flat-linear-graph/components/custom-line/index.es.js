import { jsxRuntimeExports as r } from "../../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as E } from "@mui/material";
const I = ({
  chartData: l,
  series: N,
  lineGenerator: R,
  minY: p,
  maxY: x,
  xScale: m,
  yScale: i
}) => {
  var v;
  const { palette: c } = E(), a = (v = l == null ? void 0 : l[0]) == null ? void 0 : v.data, d = (t, e) => {
    var n, T;
    const o = [];
    for (let s = 0; s < t.length; s++) {
      const b = (n = a[t[s]]) == null ? void 0 : n.x, u = b && new Date(b), j = (T = a[t[s + 1]]) == null ? void 0 : T.x, y = s < t.length - 1 && t[s] + 1 === t[s + 1] && j ? new Date(j) : u;
      !e.some((k) => k >= t[s] && k <= t[s + 1]) && u && y && o.push({ start: u, end: y });
    }
    return o;
  }, f = a.map((t, e) => t.y === p ? e : -1).filter((t) => t !== -1), g = a.map((t, e) => t.y === x ? e : -1).filter((t) => t !== -1), Y = d(f, g), $ = d(g, f), h = (t, e) => {
    const o = i(Number(e === "min" ? p : x)), n = e === "min" ? c.additionalColors.blue : c.alerts.alert;
    return t.start.getTime() === t.end.getTime() ? /* @__PURE__ */ r.jsx(
      "circle",
      {
        cx: m(t.start.getTime()),
        cy: o,
        r: 4,
        fill: n,
        style: { pointerEvents: "none" }
      },
      `${e}Y-${t.start}`
    ) : /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: m(t.start.getTime()),
        x2: m(t.end.getTime()),
        y1: o,
        y2: o,
        stroke: n,
        strokeWidth: 2,
        style: { pointerEvents: "none" }
      },
      `${e}Y-${t.start}`
    );
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Y.map((t) => h(t, "min")),
    $.map((t) => h(t, "max")),
    N.map(({ id: t, data: e, color: o }) => /* @__PURE__ */ r.jsx(
      "path",
      {
        d: R(
          e.map((n) => ({
            x: m(Number(n.data.x)),
            y: i(Number(n.data.y))
          }))
        ) ?? void 0,
        fill: "none",
        stroke: o,
        style: { strokeWidth: 1 }
      },
      t
    ))
  ] });
};
export {
  I as CustomLine
};

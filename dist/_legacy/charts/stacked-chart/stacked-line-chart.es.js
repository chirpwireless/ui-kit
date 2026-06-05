import { jsxRuntimeExports as p } from "../../../jsx-runtime-BgepH7Pb.js";
import { _default as h, echarts as x, use as u } from "../../../core-Dm3hJ1-b.js";
import { memo as y, useRef as b } from "react";
import { useTheme as g } from "@mui/material";
import { install as w } from "../../../install-JC-q33vb.js";
import { install as L } from "../../../install-CGnPNia2.js";
import { install as k, install$1 as S } from "../../../installCanvasRenderer-CM5Pdk-q.js";
u([L, k, w, S]);
const F = y(({ data: e = [], xAxisData: i, style: l, colors: t }) => {
  const o = g(), n = b(null), a = e != null && e.length ? Object.keys(e == null ? void 0 : e[0]) : [], r = e.map((s, f) => ({
    type: "line",
    data: Object.keys(s).map((c) => s[c]),
    lineStyle: {
      width: 2,
      color: t ? t[f % t.length] : o.palette.base.color6
    },
    showSymbol: !1
  })), m = {
    backgroundColor: "transparent",
    textStyle: {
      color: o.palette.text.text8,
      fontFamily: "Alliance No.2",
      fontSize: 8,
      fontWeight: 500
    },
    xAxis: {
      type: "category",
      nameLocation: "start",
      axisLabel: {
        show: !0,
        fontSize: 8,
        fontFamily: "Alliance No.2",
        fontWeight: 500,
        color: o.palette.text.text8
      },
      axisLine: {
        show: !1
      },
      axisTick: {
        show: !1
      },
      data: i ?? a
      // используем кастомные значения или значения по умолчанию
    },
    grid: {
      left: 0,
      right: 10,
      top: 20,
      bottom: 0,
      containLabel: !0
      // гарантирует, что метки осей остаются видимыми
    },
    yAxis: {
      type: "value",
      nameLocation: "end",
      axisLabel: {
        show: !0
      },
      axisLine: {
        show: !1
      },
      axisTick: {
        show: !1
      },
      splitLine: {
        show: !1
      }
    },
    series: r
  };
  return /* @__PURE__ */ p.jsx(h, { ref: n, lazyUpdate: !0, notMerge: !0, echarts: x, option: m, style: l });
});
export {
  F as default
};

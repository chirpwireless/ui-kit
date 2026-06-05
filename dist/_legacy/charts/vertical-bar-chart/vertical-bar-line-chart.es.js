import { jsxRuntimeExports as p } from "../../../jsx-runtime-BgepH7Pb.js";
import { _default as m, echarts as f, use as x } from "../../../core-Dm3hJ1-b.js";
import { memo as c, useMemo as y } from "react";
import { useTheme as u } from "@mui/material";
import { install as d } from "../../../install-CGnPNia2.js";
import { install as b, install$1 as h } from "../../../installCanvasRenderer-CM5Pdk-q.js";
import { install as g } from "../../../install-Cuv_PvPz.js";
x([d, b, g, h]);
const j = c(({ data: r, style: l, color: i, unit: o = "" }) => {
  const e = u(), a = y(() => {
    const t = [...r];
    if (t.slice(0, 10), t.length < 10) {
      const n = new Array(10 - t.length).fill("");
      return [...t, ...n];
    }
    return t;
  }, [r]), s = {
    textStyle: {
      color: e.palette.text.text8
    },
    yAxis: {
      axisTick: {
        show: !1
      },
      type: "category",
      data: a,
      boundaryGap: !0,
      // Убираем распределение space-around
      inverse: !0,
      // Сверху вниз
      axisLabel: {
        fontSize: 8,
        color: e.palette.text.text8,
        formatter: (t) => t || t === 0 ? `${t} ${o}` : ""
        // Показываем только реальные значения
      },
      axisLine: {
        show: !1
      }
    },
    xAxis: {
      type: "value",
      position: "bottom",
      splitLine: {
        show: !0,
        lineStyle: {
          type: "solid",
          color: e.palette.border.border3
        }
      },
      axisLabel: {
        fontSize: 8,
        color: e.palette.text.text8,
        formatter: `{value} ${o}`
      }
    },
    grid: {
      left: 80,
      top: 16,
      right: 30,
      bottom: 54,
      containLabel: !0
      // Чтобы учесть отступы между барами
    },
    series: [
      {
        type: "bar",
        data: a,
        barWidth: 12,
        align: "left",
        barGap: "4px",
        barCategoryGap: "0%",
        itemStyle: {
          color: i
        }
      }
    ]
  };
  return /* @__PURE__ */ p.jsx(m, { lazyUpdate: !0, echarts: f, option: s, style: l });
});
export {
  j as default
};

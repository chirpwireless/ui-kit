import { jsxRuntimeExports as o } from "../../../jsx-runtime-BgepH7Pb.js";
import { _default as c, echarts as h, use as m } from "../../../core-Dm3hJ1-b.js";
import { memo as b } from "react";
import { useTheme as f, alpha as r } from "@mui/material";
import { install as x } from "../../../install-CGnPNia2.js";
import { install as g, install$1 as S } from "../../../install-ChaFZB8d.js";
import { install as u, install$1 as w } from "../../../installCanvasRenderer-CM5Pdk-q.js";
import { install as C } from "../../../install-JC-q33vb.js";
m([x, g, u, C, w, S]);
const j = b(
  ({ data: a, resolvedTooltipTitle: n, resolvedTooltipSubtitle: i, xAxisName: s, yAxisName: p, style: d }) => {
    const e = f(), y = {
      backgroundColor: "transparent",
      textStyle: {
        color: e.palette.text.text8,
        fontFamily: "Alliance No.2",
        fontSize: 10,
        fontWeight: 400
      },
      xAxis: {
        type: "category",
        name: s,
        nameLocation: "start",
        axisLabel: {
          show: !0
        },
        nameTextStyle: {
          align: "right",
          padding: [-20, 15],
          verticalAlign: "bottom",
          color: e.palette.text.text4
        },
        axisLine: {
          show: !0,
          lineStyle: {
            color: e.palette.text.text8,
            type: "solid"
          }
        },
        splitLine: {
          show: !0,
          lineStyle: {
            type: "dashed",
            color: e.palette.border.border3
          }
        }
      },
      yAxis: {
        type: "value",
        name: p,
        nameLocation: "end",
        axisLabel: {
          show: !0
        },
        nameTextStyle: {
          align: "right",
          padding: [-5, 12],
          color: e.palette.text.text4
        },
        axisLine: {
          show: !0,
          lineStyle: {
            color: e.palette.text.text8,
            type: "solid"
          }
        },
        axisTick: {
          show: !0,
          lineStyle: {
            color: e.palette.text.text8
          }
        },
        splitLine: {
          show: !0,
          lineStyle: {
            type: "dashed",
            color: e.palette.border.border3
          }
        }
      },
      series: [
        {
          type: "line",
          data: a,
          itemStyle: {
            borderColor: e.palette.base.color6,
            color: "#fff"
          },
          lineStyle: {
            width: 0.5,
            color: e.palette.base.color6
          },
          symbol: "circle",
          showAllSymbol: !0,
          symbolKeepAspect: !0,
          symbolSize: 4,
          showSymbol: !0,
          emphasis: {
            itemStyle: {
              color: e.palette.base.color6
            }
          }
        }
      ],
      dataZoom: [
        {
          start: 30,
          end: 70,
          type: "slider",
          // Ползунок
          show: !0,
          brushStyle: {
            borderColor: e.palette.border.border3,
            color: e.palette.base.color63
          },
          emphasis: {
            moveHandleStyle: {
              color: e.palette.base.color6
            },
            handleLabel: {},
            handleStyle: {
              color: e.palette.base.hover
            }
          },
          backgroundColor: "transparent",
          fillerColor: "transparent",
          borderColor: e.palette.border.border3,
          handleStyle: {
            borderColor: e.palette.border.border3,
            color: e.palette.base.color6
          },
          moveHandleStyle: {
            borderColor: e.palette.border.border3,
            color: e.palette.base.color6
          },
          dataBackground: {
            lineStyle: {
              color: r(e.palette.base.color6, 0.3),
              // Цвет линии данных
              width: 1
            },
            areaStyle: {
              color: "transaprent"
              // Цвеsт фона данных
            }
          },
          selectedDataBackground: {
            lineStyle: {
              color: e.palette.base.hover,
              // Цвет выделенных данных
              width: 1
            },
            areaStyle: {
              color: "transparent"
              // Заливка выделенной области
            }
          },
          handleSize: "100%",
          textStyle: {
            color: e.palette.text.text8,
            fontFamily: "Alliance No.2",
            fontSize: 10,
            fontWeight: 400
          }
        },
        {
          type: "inside"
          // Масштабирование колесиком
        }
      ],
      tooltip: {
        trigger: "axis",
        formatter: (t) => {
          if (!Array.isArray(t) || t.length === 0)
            return "No data";
          const l = t[0].data;
          return `<div style="text-align: left; display: flex; flex-direction: column; gap: 4px">
                                <span>${n(l)}</span>
                                <span style="color: ${e.palette.text.text1}; fontFamily: ${e.typography.mono10.fontFamily}; fontSize: ${e.typography.mono10.fontSize}; fontWeight: ${e.typography.mono10.fontWeight}">
                                    ${i(l)}
                                </span>
                            </div>`;
        },
        backgroundColor: e.palette.background.background15,
        borderWidth: 1,
        borderColor: r(e.palette.border.border3, 0.1),
        padding: 8,
        textStyle: {
          color: e.palette.text.text4,
          fontFamily: e.typography.paragraphSecondary.fontFamily,
          fontSize: e.typography.paragraphSecondary.fontSize,
          fontWeight: e.typography.paragraphSecondary.fontWeight
        },
        shadowBlur: 20,
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowColor: r("#5C5C5C", 0.14)
      }
    };
    return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(c, { notMerge: !0, lazyUpdate: !0, echarts: h, option: y, style: d }) });
  }
);
export {
  j as default
};

import { jsxRuntimeExports as e } from "../../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as x, Stack as i, Typography as t } from "@mui/material";
import { useTranslation as d } from "react-i18next";
const p = ({ color: n }) => {
  const { palette: s } = x(), { t: r } = d("uiKit", { keyPrefix: "widgets" }), l = s.additionalColors.blue, o = s.alerts.alert, a = s.additionalColors.air;
  return /* @__PURE__ */ e.jsxs(i, { alignItems: "end", gap: "4px", width: "60px", color: "lightShades.ternary", children: [
    /* @__PURE__ */ e.jsxs(i, { alignItems: "center", direction: "row", spacing: "6px", children: [
      /* @__PURE__ */ e.jsx("svg", { width: "9", height: "1", viewBox: "0 0 9 1", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("line", { y1: "0.5", x2: "9", y2: "0.5", stroke: n }) }),
      /* @__PURE__ */ e.jsx(t, { fontSize: "12px", lineHeight: "16px", children: r("current") })
    ] }),
    /* @__PURE__ */ e.jsxs(i, { alignItems: "center", direction: "row", spacing: "6px", children: [
      /* @__PURE__ */ e.jsxs("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter0_d_15676_57625)", children: /* @__PURE__ */ e.jsx(
          "line",
          {
            x1: "4",
            y1: "0.75",
            x2: "13",
            y2: "0.75",
            stroke: a,
            strokeWidth: "0.5",
            strokeDasharray: "2 2"
          }
        ) }),
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter0_d_15676_57625",
            x: "0",
            y: "0.5",
            width: "17",
            height: "8.5",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ e.jsx("feOffset", { dy: "4" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "2" }),
              /* @__PURE__ */ e.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ e.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_15676_57625" }),
              /* @__PURE__ */ e.jsx(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_15676_57625",
                  result: "shape"
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx(t, { fontSize: "12px", lineHeight: "16px", children: r("average") })
    ] }),
    /* @__PURE__ */ e.jsxs(i, { alignItems: "center", direction: "row", spacing: "6px", children: [
      /* @__PURE__ */ e.jsxs("svg", { width: "9", height: "4", viewBox: "0 0 9 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ e.jsx("rect", { width: "9", height: "4", fill: "#50E0A4", fillOpacity: "0.05" }),
        /* @__PURE__ */ e.jsx(
          "rect",
          {
            x: "0.25",
            y: "0.25",
            width: "8.5",
            height: "3.5",
            stroke: "#50E093",
            strokeOpacity: "0.15",
            strokeWidth: "0.5"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(t, { fontSize: "12px", lineHeight: "16px", children: r("normal") })
    ] }),
    /* @__PURE__ */ e.jsxs(i, { alignItems: "center", direction: "row", spacing: "6px", children: [
      /* @__PURE__ */ e.jsxs("svg", { width: "15", height: "16", viewBox: "0 0 15 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ e.jsx("line", { x1: "3", y1: "8", x2: "12", y2: "8", stroke: o }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter0_d_15676_57631)", children: /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "8", r: "1.5", fill: o }) }),
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter0_d_15676_57631",
            x: "0",
            y: "0.5",
            width: "15",
            height: "15",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ e.jsx("feOffset", {}),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "3" }),
              /* @__PURE__ */ e.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ e.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_15676_57631" }),
              /* @__PURE__ */ e.jsx(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_15676_57631",
                  result: "shape"
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx(t, { fontSize: "12px", lineHeight: "16px", children: r("Max") })
    ] }),
    /* @__PURE__ */ e.jsxs(i, { alignItems: "center", direction: "row", spacing: "6px", children: [
      /* @__PURE__ */ e.jsxs("svg", { width: "15", height: "16", viewBox: "0 0 15 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ e.jsx("line", { x1: "3", y1: "8", x2: "12", y2: "8", stroke: l }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter0_d_15676_57637)", children: /* @__PURE__ */ e.jsx("circle", { cx: "7.5", cy: "8", r: "1.5", fill: l }) }),
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter0_d_15676_57637",
            x: "0",
            y: "0.5",
            width: "15",
            height: "15",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ e.jsx("feOffset", {}),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "3" }),
              /* @__PURE__ */ e.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ e.jsx(
                "feColorMatrix",
                {
                  type: "matrix",
                  values: "0 0 0 0 0.370833 0 0 0 0 0.458639 0 0 0 0 1 0 0 0 1 0"
                }
              ),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_15676_57637" }),
              /* @__PURE__ */ e.jsx(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_15676_57637",
                  result: "shape"
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx(t, { fontSize: "12px", lineHeight: "16px", children: r("Min") })
    ] })
  ] });
};
export {
  p as Legend
};

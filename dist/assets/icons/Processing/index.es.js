import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
const r = ({ height: i, width: t }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t || 12,
    height: i || 25,
    viewBox: "0 0 100 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    children: [
      /* @__PURE__ */ e.jsxs("circle", { cx: "15", cy: "15", r: "15", children: [
        /* @__PURE__ */ e.jsx(
          "animate",
          {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "animate",
          {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("circle", { cx: "50", cy: "15", r: "15", fillOpacity: "0.3", children: [
        /* @__PURE__ */ e.jsx(
          "animate",
          {
            attributeName: "r",
            from: "9",
            to: "9",
            begin: "0.3s",
            dur: "0.8s",
            values: "9;15;9",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "animate",
          {
            attributeName: "fill-opacity",
            from: "0.5",
            to: "0.5",
            begin: "0.3s",
            dur: "0.8s",
            values: ".5;1;.5",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("circle", { cx: "85", cy: "15", r: "15", fillOpacity: "0.3", children: [
        /* @__PURE__ */ e.jsx(
          "animate",
          {
            attributeName: "r",
            from: "9",
            to: "9",
            begin: "0.6s",
            dur: "0.8s",
            values: "9;15;9",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "animate",
          {
            attributeName: "fill-opacity",
            from: "0.5",
            to: "0.5",
            begin: "0.6s",
            dur: "0.8s",
            values: ".5;1;.5",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        )
      ] })
    ]
  }
);
export {
  r as Processing
};

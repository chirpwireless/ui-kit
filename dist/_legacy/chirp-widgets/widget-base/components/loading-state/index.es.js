import { jsxRuntimeExports as e } from "../../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as s, Stack as n, Box as t } from "@mui/material";
import { Card as d } from "../../style.es.js";
import { TextSkeleton as r } from "../../../../text-skeleton/index.es.js";
import { Skeleton as i } from "../../../../skeleton/index.es.js";
import { FlatLinearGraph as l } from "../../../flat-linear-graph/index.es.js";
const f = ({ showGraph: o, isGraphicWidget: x }) => {
  const h = s();
  return /* @__PURE__ */ e.jsxs(d, { children: [
    /* @__PURE__ */ e.jsxs(n, { p: "20px", direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
      /* @__PURE__ */ e.jsxs(n, { maxWidth: "50%", children: [
        /* @__PURE__ */ e.jsx(n, { alignItems: "center", direction: "row", children: /* @__PURE__ */ e.jsx(r, { sx: { marginBottom: "4px" } }) }),
        /* @__PURE__ */ e.jsx(r, {}),
        x && /* @__PURE__ */ e.jsx(
          t,
          {
            sx: {
              height: "28px",
              width: "28px",
              borderRadius: "8px",
              marginTop: "20px",
              overflow: "hidden"
            },
            children: /* @__PURE__ */ e.jsx(i, {})
          }
        )
      ] }),
      o && x && /* @__PURE__ */ e.jsxs(t, { width: "50%", height: "64px", display: "flex", justifyContent: "end", gap: "32px", padding: "4px", children: [
        /* @__PURE__ */ e.jsx(n, { paddingTop: "24px", children: /* @__PURE__ */ e.jsx(r, { height: h.typography.h2.lineHeight }) }),
        /* @__PURE__ */ e.jsx(t, { minWidth: "8px", overflow: "hidden", borderRadius: "8px", children: /* @__PURE__ */ e.jsx(i, {}) })
      ] })
    ] }),
    x && (o ? /* @__PURE__ */ e.jsx(t, { height: "50px", flexGrow: 1, maxHeight: "50%", children: /* @__PURE__ */ e.jsx(
      l,
      {
        chartData: null,
        calculatedValues: { min: null, max: null, avg: null },
        color: h.palette.text.text8
      }
    ) }) : /* @__PURE__ */ e.jsxs(
      t,
      {
        width: "100%",
        height: "132px",
        minHeight: "50%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        position: "absolute",
        bottom: 0,
        children: [
          /* @__PURE__ */ e.jsxs(t, { marginBottom: "4px", paddingX: "20px", children: [
            /* @__PURE__ */ e.jsx(t, { height: "64px", children: /* @__PURE__ */ e.jsx(r, { height: h.typography.h2.lineHeight }) }),
            /* @__PURE__ */ e.jsx(
              t,
              {
                sx: {
                  height: "10px",
                  borderRadius: "8px",
                  overflow: "hidden"
                },
                children: /* @__PURE__ */ e.jsx(i, {})
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx(t, { sx: { height: "48px" }, children: /* @__PURE__ */ e.jsx(i, {}) })
        ]
      }
    )),
    !x && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(t, { width: "100%", textAlign: "center", children: [
      /* @__PURE__ */ e.jsx(t, { height: "40px", marginX: "20px", marginBottom: "10px", borderRadius: "8px", overflow: "hidden", children: /* @__PURE__ */ e.jsx(i, {}) }),
      /* @__PURE__ */ e.jsx(t, { sx: { height: "48px", width: "100%" }, children: /* @__PURE__ */ e.jsx(i, {}) })
    ] }) })
  ] });
};
export {
  f as LoadingState
};

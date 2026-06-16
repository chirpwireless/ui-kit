import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as n, Box as c, Collapse as m } from "@mui/material";
import { ChevronDownIcon as a } from "../../icons/ChevronDownIcon/index.es.js";
const d = ({ expanded: o, onChange: r, summary: e, endContent: i, children: s, sx: x }) => /* @__PURE__ */ t.jsxs(n, { sx: x, children: [
  /* @__PURE__ */ t.jsxs(
    n,
    {
      direction: "row",
      onClick: r,
      sx: {
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer"
      },
      children: [
        e,
        /* @__PURE__ */ t.jsxs(
          n,
          {
            direction: "row",
            sx: {
              gap: "8px",
              alignItems: "center",
              justifyContent: "flex-end",
              minWidth: 56
            },
            children: [
              i,
              /* @__PURE__ */ t.jsx(
                c,
                {
                  sx: {
                    display: "flex",
                    transition: "transform 0.2s",
                    transform: o ? "rotate(180deg)" : "none"
                  },
                  children: /* @__PURE__ */ t.jsx(a, {})
                }
              )
            ]
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ t.jsx(m, { in: o, timeout: "auto", unmountOnExit: !0, children: s })
] });
export {
  d as Accordion
};

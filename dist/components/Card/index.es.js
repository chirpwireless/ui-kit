import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as r } from "@mui/material";
import { Card as l, Title as g } from "./style.es.js";
const w = ({
  icon: t,
  title: n,
  actions: s,
  children: i,
  fullContent: x,
  isClickable: p,
  size: a = "large",
  className: c,
  sx: d,
  onClick: o
}) => /* @__PURE__ */ e.jsxs(l, { className: c, sx: d, fullContent: x, isClickable: p, onClick: o, children: [
  (s || n || t) && /* @__PURE__ */ e.jsxs(
    r,
    {
      direction: "row",
      sx: {
        alignItems: "center",
        gap: "12px",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          r,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: "12px"
            },
            children: [
              t && /* @__PURE__ */ e.jsx(
                r,
                {
                  sx: {
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px"
                  },
                  children: t
                }
              ),
              n && /* @__PURE__ */ e.jsx(g, { size: a, children: n })
            ]
          }
        ),
        s && /* @__PURE__ */ e.jsx(
          r,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: "12px"
            },
            children: s.map((m) => m)
          }
        )
      ]
    }
  ),
  i
] });
export {
  w as Card
};

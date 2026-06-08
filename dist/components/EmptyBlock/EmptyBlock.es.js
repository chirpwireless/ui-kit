import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as e, Typography as r } from "@mui/material";
const x = ({ title: n, children: i, icon: o, textColor: p, sx: c = {} }) => /* @__PURE__ */ t.jsxs(e, { alignItems: "center", justifyContent: "center", gap: "16px", sx: { ...c, width: "100%", height: "100%" }, children: [
  o,
  /* @__PURE__ */ t.jsxs(
    e,
    {
      direction: "column",
      gap: "8px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      color: p ?? "neutral.grey4",
      children: [
        /* @__PURE__ */ t.jsx(
          r,
          {
            fontSize: "12px",
            lineHeight: "16px",
            color: "inherit",
            textTransform: "uppercase",
            textAlign: "center",
            children: n
          }
        ),
        /* @__PURE__ */ t.jsx(
          r,
          {
            component: "div",
            fontSize: "12px",
            lineHeight: "16px",
            color: "inherit",
            letterSpacing: "0.1px",
            sx: {
              small: { color: "neutral.primary" }
            },
            children: i
          }
        )
      ]
    }
  )
] });
export {
  x as EmptyBlock
};

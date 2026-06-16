import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as e, Typography as r } from "@mui/material";
const l = ({ title: n, children: i, icon: o, textColor: p, sx: c = {} }) => /* @__PURE__ */ t.jsxs(
  e,
  {
    sx: {
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      ...c,
      width: "100%",
      height: "100%"
    },
    children: [
      o,
      /* @__PURE__ */ t.jsxs(
        e,
        {
          direction: "column",
          color: p ?? "neutral.grey4",
          sx: {
            gap: "8px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          },
          children: [
            /* @__PURE__ */ t.jsx(
              r,
              {
                color: "inherit",
                sx: {
                  fontSize: "12px",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                  textAlign: "center"
                },
                children: n
              }
            ),
            /* @__PURE__ */ t.jsx(
              r,
              {
                component: "div",
                color: "inherit",
                sx: {
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.1px",
                  small: { color: "neutral.primary" }
                },
                children: i
              }
            )
          ]
        }
      )
    ]
  }
);
export {
  l as EmptyBlock
};

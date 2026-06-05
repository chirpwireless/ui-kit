import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { useState as u } from "react";
import { HeaderWrapper as g } from "./styles.es.js";
import { BaseWidget as j } from "../base-widget/index.es.js";
import { Stack as n, Typography as s } from "@mui/material";
import { BaseWidgetCustomHeader as f } from "../base-widget/base-widget-custom-header.es.js";
const b = (x) => {
  const { data: d, nameKey: a, valueKey: p, columnNames: m, renderSelectedContent: i, title: c, ...h } = x, [t, l] = u(null);
  return /* @__PURE__ */ e.jsx(
    j,
    {
      ...h,
      title: c,
      customHeader: t !== null ? /* @__PURE__ */ e.jsx(
        f,
        {
          typeText: c,
          title: t == null ? void 0 : t[a],
          onBackClick: () => l(null)
        }
      ) : void 0,
      children: t && i ? i(t) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(n, { justifyContent: "space-between", direction: "row", height: 16, children: m.map((r, o) => /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(
          s,
          {
            sx: {
              color: "text.text8"
            },
            variant: "overline",
            children: r
          }
        ) }, `${r}-${o}`)) }),
        /* @__PURE__ */ e.jsx(
          n,
          {
            gap: 3,
            height: 110,
            overflow: "auto",
            pr: 2,
            sx: {
              cursor: i ? "pointer" : "default"
            },
            children: d.map((r, o) => /* @__PURE__ */ e.jsxs(
              n,
              {
                justifyContent: "space-between",
                direction: "row",
                height: 16,
                onClick: () => i && l(r),
                children: [
                  /* @__PURE__ */ e.jsx(
                    s,
                    {
                      sx: {
                        color: "text.text1"
                      },
                      variant: "caption12",
                      children: String(r[a])
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    s,
                    {
                      sx: {
                        color: "text.text1"
                      },
                      variant: "caption12",
                      textAlign: "end",
                      children: String(r[p])
                    }
                  )
                ]
              },
              o
            ))
          }
        )
      ] })
    }
  );
};
export {
  b as ListWidget
};

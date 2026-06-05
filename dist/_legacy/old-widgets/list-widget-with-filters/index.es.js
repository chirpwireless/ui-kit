import { jsxRuntimeExports as t } from "../../../jsx-runtime-BgepH7Pb.js";
import { useState as h } from "react";
import { BaseWidget as u } from "../base-widget/index.es.js";
import { Stack as i, Typography as a } from "@mui/material";
import { BaseWidgetCustomHeader as j } from "../base-widget/base-widget-custom-header.es.js";
const W = (l) => {
  const { data: c, nameKey: o, valueKey: d, renderSelectedContent: p, title: n, renderFilters: x, ...m } = l, [e, s] = h(null);
  return /* @__PURE__ */ t.jsx(
    u,
    {
      title: n,
      ...m,
      customHeader: e !== null ? /* @__PURE__ */ t.jsx(
        j,
        {
          typeText: n,
          title: e == null ? void 0 : e[o],
          onBackClick: () => s(null)
        }
      ) : void 0,
      children: e ? p(e) : /* @__PURE__ */ t.jsxs(i, { gap: 3, children: [
        x,
        /* @__PURE__ */ t.jsx(
          i,
          {
            gap: 3,
            height: 110,
            overflow: "auto",
            pr: 2,
            sx: {
              cursor: "pointer"
            },
            children: c.map((r, g) => /* @__PURE__ */ t.jsxs(
              i,
              {
                justifyContent: "space-between",
                direction: "row",
                height: 16,
                onClick: () => s(r),
                children: [
                  /* @__PURE__ */ t.jsx(
                    a,
                    {
                      sx: {
                        color: "text.text1"
                      },
                      variant: "caption12",
                      children: String(r[o])
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    a,
                    {
                      sx: {
                        color: "text.text1"
                      },
                      variant: "caption12",
                      textAlign: "end",
                      children: String(r[d])
                    }
                  )
                ]
              },
              g
            ))
          }
        )
      ] })
    }
  );
};
export {
  W as ListWidgetWithFilters
};

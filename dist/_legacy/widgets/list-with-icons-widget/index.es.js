import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as u, Stack as i } from "@mui/material";
import { BaseWidget as v } from "../base-widget/index.es.js";
import { Row as w, IconDescriptionContainer as y, IconContainer as S, Image as b, Circle as k, CustomDivider as A } from "./style.es.js";
import { useTranslation as D } from "react-i18next";
import { Fragment as I } from "react";
import { getHoverStyles as R, getAlertStyles as W } from "./helpers/helpers.es.js";
import { Typography as a } from "../../typogrpahy/index.es.js";
const K = (l) => {
  const {
    rowsData: o,
    iconSx: c,
    rowSx: x,
    dividerSx: p,
    descriptionContainerSx: d,
    onRowClick: n,
    emptyFallbackMsg: g,
    isDivider: h,
    ...m
  } = l, r = u(), { t: j } = D("uiKit"), f = (t, s) => {
    t.stopPropagation(), n && n(s);
  };
  return /* @__PURE__ */ e.jsx(
    v,
    {
      ...m,
      renderMainContent: o.length ? /* @__PURE__ */ e.jsx(i, { sx: { overflow: "auto", gap: "12px" }, children: o.map((t, s) => /* @__PURE__ */ e.jsxs(I, { children: [
        /* @__PURE__ */ e.jsxs(
          w,
          {
            onClick: (C) => f(C, t.id),
            sx: {
              ...x,
              "&:hover": R(r, t.isAlert)
            },
            children: [
              /* @__PURE__ */ e.jsxs(y, { children: [
                /* @__PURE__ */ e.jsxs(
                  S,
                  {
                    sx: {
                      ...c,
                      ...W(r, t.isAlert)
                    },
                    children: [
                      t.image && typeof t.image == "string" ? /* @__PURE__ */ e.jsx(b, { src: t.image, title: j("Photo") }) : t.image,
                      t.isUnread && /* @__PURE__ */ e.jsx(
                        k,
                        {
                          sx: {
                            backgroundColor: t.isAlert ? r.palette.base.color7 : r.palette.base.color6
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(i, { gap: "4px", sx: { ...d }, children: t.renderDescription })
              ] }),
              /* @__PURE__ */ e.jsx(
                a,
                {
                  variant: "caption12",
                  color: t.isAlert ? r.palette.alerts.alert : r.palette.text.text8,
                  children: t.time
                }
              )
            ]
          },
          t.id
        ),
        h && s < o.length - 1 && /* @__PURE__ */ e.jsx(A, { sx: { ...p } })
      ] }, t.id)) }) : /* @__PURE__ */ e.jsx(i, { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ e.jsx(a, { variant: "subtitle1", color: r.palette.text.text8, children: g }) })
    }
  );
};
export {
  K as ListWithIconsWidget
};

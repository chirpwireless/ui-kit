import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as p, Box as d } from "@mui/material";
import { Card as f } from "./style.es.js";
import { Tooltip as j } from "../tooltip/index.es.js";
import { getTimeString as g } from "../chirp-widgets/helpers/index.es.js";
import { SwitchViewButton as h } from "../chirp-widgets/switch-view-button/index.es.js";
import { Typography as i } from "../typogrpahy/index.es.js";
import { useTranslation as u } from "react-i18next";
const l = ({ value: o, units: e }) => {
  const r = String(o);
  return /* @__PURE__ */ t.jsx(j, { title: r, placement: "top", children: /* @__PURE__ */ t.jsxs(i, { variant: "title16", color: "text.text2", noWrap: !0, maxWidth: "100%", sx: { "& + &": { mt: "4px" } }, children: [
    r,
    " ",
    e
  ] }) });
}, A = ({ attributeName: o, title: e, value: r, units: s, date: c, switchView: a }) => {
  const { t: m } = u("uiKit", { keyPrefix: "widgets" }), n = typeof r == "string" && r.includes(",") ? r.split(",") : r;
  return /* @__PURE__ */ t.jsxs(f, { children: [
    /* @__PURE__ */ t.jsxs(p, { direction: "row", alignItems: "center", justifyContent: "space-between", mb: "8px", spacing: "16px", children: [
      /* @__PURE__ */ t.jsx(i, { variant: "caption12", color: "text.text4", noWrap: !0, title: e, children: e }),
      /* @__PURE__ */ t.jsxs(i, { variant: "caption12", color: "text.text8", flexShrink: 0, children: [
        m("Last update"),
        /* @__PURE__ */ t.jsx(
          i,
          {
            component: "span",
            variant: "caption12",
            color: "text.text4",
            sx: { verticalAlign: "bottom", ml: "4px" },
            children: g(c)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(d, { sx: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ t.jsx(p, { alignSelf: "flex-start", width: "100%", children: Array.isArray(n) ? n.map((x) => /* @__PURE__ */ t.jsx(l, { value: x, units: s }, x)) : /* @__PURE__ */ t.jsx(l, { value: n, units: s }) }),
      a && /* @__PURE__ */ t.jsx(
        h,
        {
          attributeName: o,
          switchView: a
        }
      )
    ] })
  ] });
};
export {
  A as SystemWidget
};

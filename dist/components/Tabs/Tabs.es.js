import { jsxRuntimeExports as n } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as j, Typography as t } from "@mui/material";
import { Tabs as T, Tab as g, TabBadge as u } from "./style.es.js";
function y({
  items: e,
  activeTab: c,
  setActiveTab: l,
  sx: p,
  tabSx: x,
  variant: m,
  counts: s,
  renderLabel: i
}) {
  return /* @__PURE__ */ n.jsx(
    T,
    {
      className: "tabs",
      value: c,
      onChange: (a, r) => l(r),
      sx: p,
      variant: m,
      children: e.map((a) => {
        const r = s == null ? void 0 : s[a], h = r != null, o = i ? i(a) : a, d = h ? /* @__PURE__ */ n.jsxs(j, { direction: "row", alignItems: "center", gap: "4px", children: [
          /* @__PURE__ */ n.jsx(t, { variant: "caption", children: o }),
          /* @__PURE__ */ n.jsx(u, { children: r })
        ] }) : /* @__PURE__ */ n.jsx(t, { variant: "caption", children: o });
        return /* @__PURE__ */ n.jsx(g, { label: d, value: a, sx: x }, a);
      })
    }
  );
}
export {
  y as Tabs
};

import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { mergeSx as j } from "../../helpers/merge-sx.es.js";
import { Toggle as T, HiddenInput as i, Label as l, Checkmark as g, CheckmarkPin as c, MobileToggle as f } from "./style.es.js";
const y = ({ name: s, label: x, checked: n, isLoading: t, disabled: r = !1, onChange: p, sx: e, labelSx: m }) => /* @__PURE__ */ o.jsxs(T, { sx: j({ cursor: r ? "initial" : "pointer" }, e), children: [
  /* @__PURE__ */ o.jsx(
    i,
    {
      type: "checkbox",
      checked: n,
      onChange: p,
      name: s,
      disabled: r || t
    }
  ),
  x && /* @__PURE__ */ o.jsx(l, { component: "span", checked: n, disabled: r, sx: m, children: x }),
  /* @__PURE__ */ o.jsx(g, { disabled: r, checked: n, isLoading: t, children: /* @__PURE__ */ o.jsx(c, { disabled: r, checked: n, isLoading: t }) })
] }), C = ({ name: s, label: x, checked: n, isLoading: t, disabled: r = !1, onChange: p, sx: e, labelSx: m }) => /* @__PURE__ */ o.jsxs(f, { sx: j({ cursor: r ? "initial" : "pointer" }, e), children: [
  /* @__PURE__ */ o.jsx(
    i,
    {
      type: "checkbox",
      checked: n,
      onChange: p,
      name: s,
      disabled: r || t
    }
  ),
  x && /* @__PURE__ */ o.jsx(
    l,
    {
      component: "span",
      checked: n,
      disabled: r,
      sx: j({ mr: "0 !important" }, m),
      children: x
    }
  ),
  /* @__PURE__ */ o.jsx(g, { disabled: r, checked: n, isLoading: t, children: /* @__PURE__ */ o.jsx(c, { disabled: r, checked: n, isLoading: t }) })
] });
export {
  C as MobileToggle,
  y as Toggle
};

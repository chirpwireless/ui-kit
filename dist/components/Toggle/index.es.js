import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Toggle as c, HiddenInput as m, Label as l, Checkmark as i, CheckmarkPin as g, MobileToggle as T } from "./style.es.js";
const h = ({ name: p, label: x, checked: n, isLoading: t, disabled: o = !1, onChange: e, sx: s, labelSx: j }) => /* @__PURE__ */ r.jsxs(c, { sx: { cursor: o ? "initial" : "pointer", ...s ? { sx: s } : {} }, children: [
  /* @__PURE__ */ r.jsx(
    m,
    {
      type: "checkbox",
      checked: n,
      onChange: e,
      name: p,
      disabled: o || t
    }
  ),
  x && /* @__PURE__ */ r.jsx(l, { component: "span", checked: n, disabled: o, sx: j, children: x }),
  /* @__PURE__ */ r.jsx(i, { disabled: o, checked: n, isLoading: t, children: /* @__PURE__ */ r.jsx(g, { disabled: o, checked: n, isLoading: t }) })
] }), M = ({ name: p, label: x, checked: n, isLoading: t, disabled: o = !1, onChange: e, sx: s, labelSx: j }) => /* @__PURE__ */ r.jsxs(T, { sx: { cursor: o ? "initial" : "pointer", ...s ? { sx: s } : {} }, children: [
  /* @__PURE__ */ r.jsx(
    m,
    {
      type: "checkbox",
      checked: n,
      onChange: e,
      name: p,
      disabled: o || t
    }
  ),
  x && /* @__PURE__ */ r.jsx(l, { component: "span", checked: n, disabled: o, mr: "0 !important", sx: j, children: x }),
  /* @__PURE__ */ r.jsx(i, { disabled: o, checked: n, isLoading: t, children: /* @__PURE__ */ r.jsx(g, { disabled: o, checked: n, isLoading: t }) })
] });
export {
  M as MobileToggle,
  h as Toggle
};

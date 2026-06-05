import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { WidgetToggle as p, HiddenInput as n, Label as x, Checkmark as g, CheckmarkPin as l, WidgetMobileToggle as j } from "./style.es.js";
const b = ({ name: r, label: s, checked: o, isLoading: t, onChange: i }) => /* @__PURE__ */ e.jsxs(p, { children: [
  /* @__PURE__ */ e.jsx(n, { type: "checkbox", checked: o, onChange: i, name: r, disabled: t }),
  s && /* @__PURE__ */ e.jsx(x, { component: "span", checked: o, children: s }),
  /* @__PURE__ */ e.jsx(g, { checked: o, isLoading: t, children: /* @__PURE__ */ e.jsx(l, { checked: o, isLoading: t }) })
] }), T = ({ name: r, label: s, checked: o, isLoading: t, onChange: i }) => /* @__PURE__ */ e.jsxs(j, { children: [
  /* @__PURE__ */ e.jsx(n, { type: "checkbox", checked: o, onChange: i, name: r, disabled: t }),
  s && /* @__PURE__ */ e.jsx(x, { component: "span", checked: o, mr: "0 !important", children: s }),
  /* @__PURE__ */ e.jsx(g, { checked: o, isLoading: t, children: /* @__PURE__ */ e.jsx(l, { checked: o, isLoading: t }) })
] });
export {
  T as WidgetMobileToggle,
  b as WidgetToggle
};

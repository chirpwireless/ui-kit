import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { Toggle as t, HiddenInput as i, Label$2 as a, Checkmark as p, CheckmarkPin as x } from "../../style-7NNmyytw.js";
const g = ({ name: r, label: e, checked: n, onChange: s }) => /* @__PURE__ */ o.jsxs(t, { children: [
  /* @__PURE__ */ o.jsx(i, { type: "checkbox", checked: n, onChange: s, name: r }),
  e && /* @__PURE__ */ o.jsx(a, { component: "span", variant: "caption12", children: e }),
  /* @__PURE__ */ o.jsx(p, { children: /* @__PURE__ */ o.jsx(x, { checked: n }) })
] });
export {
  g as Toggle
};

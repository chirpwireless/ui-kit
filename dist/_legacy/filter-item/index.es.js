import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Label as p, HiddenInput as l, Checkmark as a, Adornment as e } from "./style.es.js";
const c = ({
  label: m,
  checked: o,
  size: n = "small",
  variant: t = "primary",
  endAdornmentText: s,
  onChange: i
}) => /* @__PURE__ */ r.jsxs(p, { children: [
  /* @__PURE__ */ r.jsx(l, { type: "checkbox", onChange: i, checked: o }),
  /* @__PURE__ */ r.jsxs(
    a,
    {
      component: "span",
      checked: o,
      hasAdornment: !!s,
      size: n,
      variant: t,
      children: [
        m,
        s && /* @__PURE__ */ r.jsx(e, { checked: o, children: s })
      ]
    }
  )
] });
export {
  c as FilterItem
};

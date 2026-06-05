import { jsxRuntimeExports as m } from "../../jsx-runtime-BgepH7Pb.js";
import { Tabs as u, Tab as c } from "./style.es.js";
const T = ({
  items: o,
  activeTab: p,
  setActiveTab: t,
  sx: b,
  extraContent: e,
  variant: l,
  resolvedTitle: r = (s) => s,
  resolvedValue: n = (s) => s
}) => /* @__PURE__ */ m.jsxs(
  u,
  {
    className: "tabs",
    value: p,
    onChange: (s, a) => t(a),
    sx: b,
    variant: l,
    children: [
      o.map((s, a) => /* @__PURE__ */ m.jsx(
        c,
        {
          label: r(s, a),
          value: n(s)
        },
        `${r(s, a)}-${a}`
      )),
      e
    ]
  }
);
export {
  T as Tabs
};

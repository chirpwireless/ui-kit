import { jsxRuntimeExports as x } from "../../../jsx-runtime-BgepH7Pb.js";
import { LinkBox as f } from "../style.es.js";
const i = {
  target: "_blank",
  rel: "noopener noreferrer"
}, k = ({
  href: o,
  isExternal: e,
  disabled: r,
  isSidebarCollapsed: n,
  onClick: t,
  children: p,
  className: m
}) => /* @__PURE__ */ x.jsx(
  f,
  {
    component: "a",
    href: r ? "#" : o,
    onClick: t,
    disabled: r,
    isSidebarCollapsed: n,
    className: m,
    ...e ? i : {},
    children: p
  }
);
export {
  k as DefaultLink
};

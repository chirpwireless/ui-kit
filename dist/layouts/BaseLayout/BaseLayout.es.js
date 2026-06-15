import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useBreakpoints as u } from "../../hooks/use-breakpoints.es.js";
import { LayoutRoot as x, AppContainer as a } from "./style.es.js";
const f = ({
  sidebar: r,
  header: t,
  children: s,
  isSidebarOpen: n,
  isSidebarCollapsed: i,
  toastContainer: e,
  overlaySlot: p
}) => {
  const { isMobile: m } = u();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(x, { children: [
      m && t ? t : null,
      r,
      /* @__PURE__ */ o.jsx(a, { isOpen: n, isSidebarCollapsed: i, children: s }),
      p
    ] }),
    e
  ] });
};
export {
  f as BaseLayout
};

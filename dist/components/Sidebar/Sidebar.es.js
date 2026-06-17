import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as L, useCallback as u } from "react";
import { Stack as h } from "@mui/material";
import { DefaultLink as I } from "./components/DefaultLink.es.js";
import { RoutesList as N } from "./components/RoutesList.es.js";
import { SidebarLogo as $ } from "./SidebarLogo.es.js";
import { SidebarDrawer as q, List as y, Footer as z } from "./style.es.js";
const A = (a) => /* @__PURE__ */ r.jsx(I, { ...a }), X = ({
  groups: a,
  isOpen: S,
  isCollapsed: t,
  onCollapseToggle: n,
  onItemClick: d,
  onParentClick: i,
  activePathname: l,
  logo: w,
  logoCollapsed: v,
  logoHref: M,
  footerSlot: x,
  bottomSlot: c,
  topSlot: D,
  isMobile: E,
  linkComponent: H = A
}) => {
  const [O, f] = L({}), [R, p] = L(!1), g = u(
    (e) => {
      i == null || i(e), t && n(), f((s) => ({ ...s, [e.name]: !s[e.name] }));
    },
    [t, n, i]
  ), F = u(
    (e, s) => {
      d == null || d(e, s);
    },
    [d]
  ), G = u(() => {
    f({}), n();
  }, [n]);
  return /* @__PURE__ */ r.jsxs(
    q,
    {
      className: "sidebar",
      variant: "permanent",
      anchor: "left",
      open: S,
      isCollapsed: t,
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      children: [
        E ? D : /* @__PURE__ */ r.jsx(
          $,
          {
            isSidebarCollapsed: t,
            isSidebarHovered: R,
            onToggle: G,
            logo: w,
            logoCollapsed: v,
            logoHref: M
          }
        ),
        /* @__PURE__ */ r.jsx(y, { children: a.map((e, s) => {
          var j, b;
          const m = s === a.length - 1;
          return /* @__PURE__ */ r.jsxs(
            h,
            {
              sx: {
                width: "100%",
                gap: 1,
                mt: m ? "auto" : 0,
                mb: m ? 0 : 2
              },
              children: [
                e.map((o) => /* @__PURE__ */ r.jsx(h, { sx: { width: "100%" }, children: /* @__PURE__ */ r.jsx(
                  N,
                  {
                    item: o,
                    activePathname: l,
                    isSidebarCollapsed: t,
                    menuParentIsOpen: O,
                    linkComponent: H,
                    onParentClick: g,
                    onItemClick: F
                  }
                ) }, o.id ?? o.name)),
                m && c ? /* @__PURE__ */ r.jsx(h, { sx: { width: "100%", mt: 1, gap: 3, alignItems: "center" }, children: c }) : null
              ]
            },
            ((j = e[0]) == null ? void 0 : j.id) ?? ((b = e[0]) == null ? void 0 : b.name) ?? `routes-group-${s}`
          );
        }) }),
        x ? /* @__PURE__ */ r.jsx(z, { children: x }) : null
      ]
    }
  );
};
export {
  X as Sidebar
};

import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as l, useCallback as x } from "react";
import { Divider as G, Stack as h } from "@mui/material";
import { DefaultLink as I } from "./components/DefaultLink.es.js";
import { RoutesList as N } from "./components/RoutesList.es.js";
import { SidebarLogo as $ } from "./SidebarLogo.es.js";
import { SidebarDrawer as q, List as z, Footer as A } from "./style.es.js";
const B = (a) => /* @__PURE__ */ r.jsx(I, { ...a }), Y = ({
  groups: a,
  isOpen: L,
  isCollapsed: t,
  onCollapseToggle: n,
  onItemClick: d,
  onParentClick: i,
  activePathname: S,
  logo: w,
  logoCollapsed: v,
  logoHref: g,
  footerSlot: u,
  bottomSlot: p,
  topSlot: D,
  isMobile: M,
  linkComponent: E = B
}) => {
  const [F, c] = l({}), [H, f] = l(!1), O = x(
    (e) => {
      i == null || i(e), t && n(), c((s) => ({ ...s, [e.name]: !s[e.name] }));
    },
    [t, n, i]
  ), R = x(
    (e, s) => {
      d == null || d(e, s);
    },
    [d]
  ), y = x(() => {
    c({}), n();
  }, [n]);
  return /* @__PURE__ */ r.jsxs(
    q,
    {
      className: "sidebar",
      variant: "permanent",
      anchor: "left",
      open: L,
      isCollapsed: t,
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        M ? D : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            $,
            {
              isSidebarCollapsed: t,
              isSidebarHovered: H,
              onToggle: y,
              logo: w,
              logoCollapsed: v,
              logoHref: g
            }
          ),
          /* @__PURE__ */ r.jsx(G, { sx: { width: "100%", borderColor: "borders.primary", padding: "16px 0" } })
        ] }),
        /* @__PURE__ */ r.jsx(z, { children: a.map((e, s) => {
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
                    activePathname: S,
                    isSidebarCollapsed: t,
                    menuParentIsOpen: F,
                    linkComponent: E,
                    onParentClick: O,
                    onItemClick: R
                  }
                ) }, o.id ?? o.name)),
                m && p ? /* @__PURE__ */ r.jsx(h, { sx: { width: "100%", mt: 1, gap: 3, alignItems: "center" }, children: p }) : null
              ]
            },
            ((j = e[0]) == null ? void 0 : j.id) ?? ((b = e[0]) == null ? void 0 : b.name) ?? `routes-group-${s}`
          );
        }) }),
        u ? /* @__PURE__ */ r.jsx(A, { children: u }) : null
      ]
    }
  );
};
export {
  Y as Sidebar
};

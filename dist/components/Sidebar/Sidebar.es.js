import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as l, useCallback as o } from "react";
import { Divider as G, Stack as x } from "@mui/material";
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
  logoHref: D,
  footerSlot: h,
  bottomSlot: u,
  topSlot: M,
  isMobile: g,
  linkComponent: E = B
}) => {
  const [F, c] = l({}), [H, p] = l(!1), O = o(
    (e) => {
      i == null || i(e), t && n(), c((s) => ({ ...s, [e.name]: !s[e.name] }));
    },
    [t, n, i]
  ), R = o(
    (e, s) => {
      d == null || d(e, s);
    },
    [d]
  ), y = o(() => {
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
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      children: [
        g ? M : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            $,
            {
              isSidebarCollapsed: t,
              isSidebarHovered: H,
              onToggle: y,
              logo: w,
              logoCollapsed: v,
              logoHref: D
            }
          ),
          /* @__PURE__ */ r.jsx(G, { sx: { width: "100%", borderColor: "borders.primary", mb: 2 } })
        ] }),
        /* @__PURE__ */ r.jsx(z, { children: a.map((e, s) => {
          var j, b;
          const f = s === a.length - 1;
          return /* @__PURE__ */ r.jsxs(
            x,
            {
              sx: {
                width: "100%",
                gap: 1,
                mt: f ? "auto" : 0
              },
              children: [
                e.map((m) => /* @__PURE__ */ r.jsx(x, { sx: { width: "100%" }, children: /* @__PURE__ */ r.jsx(
                  N,
                  {
                    item: m,
                    activePathname: S,
                    isSidebarCollapsed: t,
                    menuParentIsOpen: F,
                    linkComponent: E,
                    onParentClick: O,
                    onItemClick: R
                  }
                ) }, m.id ?? m.name)),
                f && u ? /* @__PURE__ */ r.jsx(x, { sx: { width: "100%", mt: 1, gap: 3, alignItems: "center" }, children: u }) : null
              ]
            },
            ((j = e[0]) == null ? void 0 : j.id) ?? ((b = e[0]) == null ? void 0 : b.name) ?? `routes-group-${s}`
          );
        }) }),
        h ? /* @__PURE__ */ r.jsx(A, { children: h }) : null
      ]
    }
  );
};
export {
  Y as Sidebar
};

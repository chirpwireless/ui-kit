import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as L, useCallback as x } from "react";
import { Divider as N, Stack as c } from "@mui/material";
import { DefaultLink as $ } from "./components/DefaultLink.es.js";
import { RoutesList as g } from "./components/RoutesList.es.js";
import { SidebarLogo as q } from "./SidebarLogo.es.js";
import { SidebarDrawer as z, List as A, Footer as B } from "./style.es.js";
const J = (r) => /* @__PURE__ */ e.jsx($, { ...r }), S = (r) => {
  const d = {};
  return r.forEach((n) => n.forEach((s) => {
    s.defaultExpanded && (d[s.name] = !0);
  })), d;
}, Z = ({
  groups: r,
  isOpen: d,
  isCollapsed: n,
  onCollapseToggle: s,
  onItemClick: i,
  onParentClick: o,
  activePathname: E,
  logo: w,
  logoCollapsed: v,
  logoHref: D,
  footerSlot: h,
  bottomSlot: f,
  topSlot: M,
  isMobile: F,
  linkComponent: H = J
}) => {
  const [I, u] = L(() => S(r)), [O, p] = L(!1), R = x(
    (a) => {
      o == null || o(a), n && s(), u((t) => ({ ...t, [a.name]: !t[a.name] }));
    },
    [n, s, o]
  ), y = x(
    (a, t) => {
      i == null || i(a, t);
    },
    [i]
  ), G = x(() => {
    u(S(r)), s();
  }, [r, s]);
  return /* @__PURE__ */ e.jsxs(
    z,
    {
      className: "sidebar",
      variant: "permanent",
      anchor: "left",
      open: d,
      isCollapsed: n,
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      children: [
        F ? M : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            q,
            {
              isSidebarCollapsed: n,
              isSidebarHovered: O,
              onToggle: G,
              logo: w,
              logoCollapsed: v,
              logoHref: D
            }
          ),
          /* @__PURE__ */ e.jsx(N, { sx: { width: "100%", borderColor: "borders.primary", mb: 2 } })
        ] }),
        /* @__PURE__ */ e.jsx(A, { children: r.map((a, t) => {
          var b, l;
          const j = t === r.length - 1;
          return /* @__PURE__ */ e.jsxs(
            c,
            {
              sx: {
                width: "100%",
                gap: 1,
                mt: j ? "auto" : 0
              },
              children: [
                a.map((m) => /* @__PURE__ */ e.jsx(c, { sx: { width: "100%" }, children: /* @__PURE__ */ e.jsx(
                  g,
                  {
                    item: m,
                    activePathname: E,
                    isSidebarCollapsed: n,
                    menuParentIsOpen: I,
                    linkComponent: H,
                    onParentClick: R,
                    onItemClick: y
                  }
                ) }, m.id ?? m.name)),
                j && f ? /* @__PURE__ */ e.jsx(c, { sx: { width: "100%", mt: 1, gap: 3, alignItems: "center" }, children: f }) : null
              ]
            },
            ((b = a[0]) == null ? void 0 : b.id) ?? ((l = a[0]) == null ? void 0 : l.name) ?? `routes-group-${t}`
          );
        }) }),
        h ? /* @__PURE__ */ e.jsx(B, { children: h }) : null
      ]
    }
  );
};
export {
  Z as Sidebar
};

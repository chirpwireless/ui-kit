import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as l, useCallback as o } from "react";
import { Stack as m } from "@mui/material";
import { DefaultLink as R } from "./components/DefaultLink.es.js";
import { RoutesList as F } from "./components/RoutesList.es.js";
import { SidebarLogo as I } from "./SidebarLogo.es.js";
import { SidebarDrawer as N, List as $, Footer as g } from "./style.es.js";
const q = (a) => /* @__PURE__ */ e.jsx(R, { ...a }), Q = ({
  groups: a,
  isOpen: p,
  isCollapsed: t,
  onCollapseToggle: s,
  onItemClick: i,
  activePathname: b,
  logo: S,
  logoCollapsed: L,
  logoHref: w,
  footerSlot: c,
  bottomSlot: h,
  topSlot: P,
  isMobile: k,
  linkComponent: v = q
}) => {
  const [M, u] = l({}), [D, x] = l(!1), E = o(
    (r) => {
      t && s(), u((n) => ({ ...n, [r.name]: !n[r.name] }));
    },
    [t, s]
  ), H = o(
    (r, n) => {
      i == null || i(r, n);
    },
    [i]
  ), O = o(() => {
    u({}), s();
  }, [s]);
  return /* @__PURE__ */ e.jsxs(
    N,
    {
      className: "sidebar",
      variant: "permanent",
      anchor: "left",
      open: p,
      isCollapsed: t,
      onMouseEnter: () => x(!0),
      onMouseLeave: () => x(!1),
      children: [
        k ? P : /* @__PURE__ */ e.jsx(
          I,
          {
            isSidebarCollapsed: t,
            isSidebarHovered: D,
            onToggle: O,
            logo: S,
            logoCollapsed: L,
            logoHref: w
          }
        ),
        /* @__PURE__ */ e.jsx($, { children: a.map((r, n) => {
          var f, j;
          return /* @__PURE__ */ e.jsxs(m, { width: "100%", children: [
            r.map((d) => /* @__PURE__ */ e.jsx(m, { width: "100%", children: /* @__PURE__ */ e.jsx(
              F,
              {
                item: d,
                activePathname: b,
                isSidebarCollapsed: t,
                menuParentIsOpen: M,
                linkComponent: v,
                onParentClick: E,
                onItemClick: H
              }
            ) }, d.id ?? d.name)),
            n === a.length - 1 && h ? /* @__PURE__ */ e.jsx(m, { width: "100%", mt: "12px", gap: 3, alignItems: "center", children: h }) : null,
            /* @__PURE__ */ e.jsx("br", {})
          ] }, ((f = r[0]) == null ? void 0 : f.id) ?? ((j = r[0]) == null ? void 0 : j.name) ?? `routes-group-${n}`);
        }) }),
        c ? /* @__PURE__ */ e.jsx(g, { children: c }) : null
      ]
    }
  );
};
export {
  Q as Sidebar
};

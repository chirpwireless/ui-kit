import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as b, useCallback as o } from "react";
import { Stack as x } from "@mui/material";
import { DefaultLink as N } from "./components/DefaultLink.es.js";
import { RoutesList as $ } from "./components/RoutesList.es.js";
import { SidebarLogo as g } from "./SidebarLogo.es.js";
import { SidebarDrawer as q, List as y, Footer as z } from "./style.es.js";
const A = (a) => /* @__PURE__ */ e.jsx(N, { ...a }), W = ({
  groups: a,
  isOpen: S,
  isCollapsed: n,
  onCollapseToggle: t,
  onItemClick: d,
  onParentClick: i,
  activePathname: l,
  logo: L,
  logoCollapsed: w,
  logoHref: v,
  footerSlot: h,
  bottomSlot: u,
  topSlot: M,
  isMobile: D,
  linkComponent: E = A
}) => {
  const [H, c] = b({}), [O, f] = b(!1), R = o(
    (r) => {
      i == null || i(r), n && t(), c((s) => ({ ...s, [r.name]: !s[r.name] }));
    },
    [n, t, i]
  ), F = o(
    (r, s) => {
      d == null || d(r, s);
    },
    [d]
  ), I = o(() => {
    c({}), t();
  }, [t]);
  return /* @__PURE__ */ e.jsxs(
    q,
    {
      className: "sidebar",
      variant: "permanent",
      anchor: "left",
      open: S,
      isCollapsed: n,
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        D ? M : /* @__PURE__ */ e.jsx(
          g,
          {
            isSidebarCollapsed: n,
            isSidebarHovered: O,
            onToggle: I,
            logo: L,
            logoCollapsed: w,
            logoHref: v
          }
        ),
        /* @__PURE__ */ e.jsx(y, { children: a.map((r, s) => {
          var j, p;
          return /* @__PURE__ */ e.jsxs(
            x,
            {
              sx: {
                width: "100%"
              },
              children: [
                r.map((m) => /* @__PURE__ */ e.jsx(
                  x,
                  {
                    sx: {
                      width: "100%"
                    },
                    children: /* @__PURE__ */ e.jsx(
                      $,
                      {
                        item: m,
                        activePathname: l,
                        isSidebarCollapsed: n,
                        menuParentIsOpen: H,
                        linkComponent: E,
                        onParentClick: R,
                        onItemClick: F
                      }
                    )
                  },
                  m.id ?? m.name
                )),
                s === a.length - 1 && u ? /* @__PURE__ */ e.jsx(
                  x,
                  {
                    sx: {
                      width: "100%",
                      mt: "12px",
                      gap: 3,
                      alignItems: "center"
                    },
                    children: u
                  }
                ) : null,
                /* @__PURE__ */ e.jsx("br", {})
              ]
            },
            ((j = r[0]) == null ? void 0 : j.id) ?? ((p = r[0]) == null ? void 0 : p.name) ?? `routes-group-${s}`
          );
        }) }),
        h ? /* @__PURE__ */ e.jsx(z, { children: h }) : null
      ]
    }
  );
};
export {
  W as Sidebar
};

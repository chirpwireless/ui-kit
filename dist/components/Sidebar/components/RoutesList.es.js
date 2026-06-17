import { jsxRuntimeExports as n } from "../../../jsx-runtime-BgepH7Pb.js";
import { useCallback as T, useMemo as D } from "react";
import { useTheme as N, Stack as i, Divider as H } from "@mui/material";
import { DropdownIcon as B } from "../../../icons/DropdownIcon/index.es.js";
import { ListItem as W, SidebarItemBox as w, LinkText as j, MenuParentItem as M, DropdownIconWrapper as _, ListChildItem as v } from "../style.es.js";
const E = 20, y = 36, g = 4, I = {
  width: E,
  height: E,
  alignItems: "center",
  justifyContent: "center",
  "& svg": { width: E, height: E }
}, F = (e, r) => e != null && e.length ? e.reduce((c, t) => {
  var d;
  let l = y + g;
  return (d = t.children) != null && d.length && r[t.name] && (l += t.children.length * (y + g)), c + l;
}, 0) : 0, L = (e) => {
  var r;
  return !!((r = e.children) != null && r.length) || !e.href;
}, h = (e, r) => !!(r && e.match && e.match.test(r)), $ = ({
  item: e,
  activePathname: r,
  isSidebarCollapsed: c,
  menuParentIsOpen: t,
  linkComponent: l,
  onParentClick: d,
  onItemClick: R
}) => {
  var A, b;
  const f = N(), m = T(
    (s, x) => ({
      transition: f.transitions.create("height", {
        easing: f.transitions.easing.sharp,
        duration: f.transitions.duration.enteringScreen
      }),
      height: s ? `${x}px` : 0,
      overflow: "hidden"
    }),
    [f.transitions]
  ), u = D(() => {
    const s = !!t[e.name], x = F(e.children, t);
    return m(s, x);
  }, [e.children, e.name, t, m]), p = (s) => (x) => {
    var a;
    if (s.disabled) {
      x.preventDefault();
      return;
    }
    (a = s.onClick) == null || a.call(s), R(s, x);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(W, { children: /* @__PURE__ */ n.jsx(w, { isActive: h(e, r), children: !L(e) && e.href ? /* @__PURE__ */ n.jsx(
      l,
      {
        href: e.href,
        isExternal: e.isExternal,
        isActive: h(e, r),
        disabled: e.disabled,
        onClick: p(e),
        children: /* @__PURE__ */ n.jsxs(
          i,
          {
            direction: "row",
            sx: {
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ n.jsx(i, { sx: I, children: e.icon }),
              !c && /* @__PURE__ */ n.jsx(j, { variant: "body1", children: e.name })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ n.jsxs(M, { onClick: () => d(e), children: [
      /* @__PURE__ */ n.jsxs(i, { direction: "row", children: [
        /* @__PURE__ */ n.jsx(i, { sx: I, children: e.icon }),
        !c && /* @__PURE__ */ n.jsx(j, { variant: "body1", children: e.name })
      ] }),
      !c && /* @__PURE__ */ n.jsx(_, { isOpen: !!t[e.name], children: /* @__PURE__ */ n.jsx(B, {}) })
    ] }) }) }),
    /* @__PURE__ */ n.jsx(
      i,
      {
        sx: [
          {
            justifyContent: "flex-start",
            width: "100%"
          },
          ...Array.isArray(u) ? u : u ? [u] : []
        ],
        direction: "column",
        children: (A = e.children) == null ? void 0 : A.map((s) => {
          var a, k;
          return !L(s) && s.href ? /* @__PURE__ */ n.jsxs(
            i,
            {
              sx: {
                width: "100%"
              },
              children: [
                /* @__PURE__ */ n.jsx(v, { children: /* @__PURE__ */ n.jsx(w, { isActive: h(s, r), children: /* @__PURE__ */ n.jsx(
                  l,
                  {
                    href: s.href,
                    isExternal: s.isExternal,
                    isActive: h(s, r),
                    disabled: s.disabled,
                    onClick: p(s),
                    children: /* @__PURE__ */ n.jsxs(
                      i,
                      {
                        direction: "row",
                        sx: {
                          alignItems: "center"
                        },
                        children: [
                          s.icon && /* @__PURE__ */ n.jsx(i, { sx: I, children: s.icon }),
                          !c && /* @__PURE__ */ n.jsx(j, { variant: "body1", children: s.name })
                        ]
                      }
                    )
                  }
                ) }) }),
                s.hasDivider ? /* @__PURE__ */ n.jsx(H, { sx: { marginTop: 1 } }) : null
              ]
            },
            s.id ?? s.name
          ) : /* @__PURE__ */ n.jsxs(
            i,
            {
              sx: {
                width: "100%"
              },
              children: [
                /* @__PURE__ */ n.jsx(v, { children: /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(M, { onClick: () => d(s), sx: { paddingLeft: 0 }, children: /* @__PURE__ */ n.jsxs(
                  i,
                  {
                    direction: "row",
                    sx: {
                      alignItems: "center",
                      overflow: "hidden",
                      minWidth: 0
                    },
                    children: [
                      /* @__PURE__ */ n.jsx(_, { isOpen: !!t[s.name], children: /* @__PURE__ */ n.jsx(B, {}) }),
                      !c && /* @__PURE__ */ n.jsx(j, { variant: "body1", sx: { marginLeft: 0 }, title: s.name, children: s.name })
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ n.jsx(
                  i,
                  {
                    direction: "column",
                    sx: [
                      {
                        justifyContent: "flex-start",
                        width: "100%"
                      },
                      m(
                        !!t[s.name],
                        (((a = s.children) == null ? void 0 : a.length) ?? 0) * (y + g)
                      )
                    ],
                    children: (k = s.children) == null ? void 0 : k.map((o) => /* @__PURE__ */ n.jsx(v, { children: /* @__PURE__ */ n.jsx(w, { isActive: h(o, r), children: /* @__PURE__ */ n.jsx(
                      l,
                      {
                        href: o.href ?? "#",
                        isExternal: o.isExternal,
                        isActive: h(o, r),
                        disabled: o.disabled,
                        onClick: p(o),
                        children: /* @__PURE__ */ n.jsxs(
                          i,
                          {
                            direction: "row",
                            sx: {
                              alignItems: "center",
                              paddingLeft: "22px",
                              overflow: "hidden",
                              minWidth: 0
                            },
                            children: [
                              o.icon && /* @__PURE__ */ n.jsx(i, { sx: I, children: o.icon }),
                              !c && /* @__PURE__ */ n.jsx(j, { variant: "body1", title: o.name, children: o.name })
                            ]
                          }
                        )
                      }
                    ) }) }, o.id ?? o.name))
                  }
                )
              ]
            },
            s.id ?? s.name
          );
        })
      }
    ),
    (b = e.appendSlot) == null ? void 0 : b.call(e, !!t[e.name])
  ] });
};
export {
  $ as RoutesList
};

import { jsxRuntimeExports as n } from "../../../jsx-runtime-BgepH7Pb.js";
import { useCallback as D, useMemo as _ } from "react";
import { useTheme as H, Stack as i, Divider as N } from "@mui/material";
import { DropdownIcon as k } from "../../../icons/DropdownIcon/index.es.js";
import { ListItem as R, SidebarItemBox as m, LinkText as f, MenuParentItem as B, DropdownIconWrapper as M, ListChildItem as p } from "../style.es.js";
const x = 20, E = 36, v = 4, F = (e, r) => e != null && e.length ? e.reduce((c, o) => {
  var a;
  let h = E + v;
  return (a = o.children) != null && a.length && r[o.name] && (h += o.children.length * (E + v)), c + h;
}, 0) : 0, L = (e) => {
  var r;
  return !!((r = e.children) != null && r.length) || !e.href;
}, d = (e, r) => !!(r && e.match && e.match.test(r)), $ = ({
  item: e,
  activePathname: r,
  isSidebarCollapsed: c,
  menuParentIsOpen: o,
  linkComponent: h,
  onParentClick: a,
  onItemClick: T
}) => {
  var y, b;
  const u = H(), I = D(
    (s, l) => ({
      transition: u.transitions.create("height", {
        easing: u.transitions.easing.sharp,
        duration: u.transitions.duration.enteringScreen
      }),
      height: s ? `${l}px` : 0,
      overflow: "hidden"
    }),
    [u.transitions]
  ), w = _(() => {
    const s = !!o[e.name], l = F(e.children, o);
    return I(s, l);
  }, [e.children, e.name, o, I]), g = (s) => (l) => {
    var j;
    if (s.disabled) {
      l.preventDefault();
      return;
    }
    (j = s.onClick) == null || j.call(s), T(s, l);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(R, { children: /* @__PURE__ */ n.jsx(m, { isActive: d(e, r), children: !L(e) && e.href ? /* @__PURE__ */ n.jsx(
      h,
      {
        href: e.href,
        isExternal: e.isExternal,
        isActive: d(e, r),
        disabled: e.disabled,
        onClick: g(e),
        children: /* @__PURE__ */ n.jsxs(
          i,
          {
            direction: "row",
            sx: {
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ n.jsx(
                i,
                {
                  sx: {
                    width: x,
                    height: x,
                    alignItems: "center"
                  },
                  children: e.icon
                }
              ),
              !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", children: e.name })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ n.jsxs(B, { onClick: () => a(e), children: [
      /* @__PURE__ */ n.jsxs(i, { direction: "row", children: [
        /* @__PURE__ */ n.jsx(
          i,
          {
            sx: {
              width: x,
              height: x,
              alignItems: "center"
            },
            children: e.icon
          }
        ),
        !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", children: e.name })
      ] }),
      !c && /* @__PURE__ */ n.jsx(M, { isOpen: !!o[e.name], children: /* @__PURE__ */ n.jsx(k, {}) })
    ] }) }) }),
    /* @__PURE__ */ n.jsx(
      i,
      {
        sx: [
          {
            justifyContent: "flex-start",
            width: "100%"
          },
          ...Array.isArray(w) ? w : w ? [w] : []
        ],
        direction: "column",
        children: (y = e.children) == null ? void 0 : y.map((s) => {
          var j, A;
          return !L(s) && s.href ? /* @__PURE__ */ n.jsxs(
            i,
            {
              sx: {
                width: "100%"
              },
              children: [
                /* @__PURE__ */ n.jsx(p, { children: /* @__PURE__ */ n.jsx(m, { isActive: d(s, r), children: /* @__PURE__ */ n.jsx(
                  h,
                  {
                    href: s.href,
                    isExternal: s.isExternal,
                    isActive: d(s, r),
                    disabled: s.disabled,
                    onClick: g(s),
                    children: /* @__PURE__ */ n.jsxs(
                      i,
                      {
                        direction: "row",
                        sx: {
                          alignItems: "center"
                        },
                        children: [
                          s.icon && /* @__PURE__ */ n.jsx(
                            i,
                            {
                              sx: {
                                width: x,
                                height: x,
                                alignItems: "center"
                              },
                              children: s.icon
                            }
                          ),
                          !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", children: s.name })
                        ]
                      }
                    )
                  }
                ) }) }),
                s.hasDivider ? /* @__PURE__ */ n.jsx(N, { sx: { marginTop: 1 } }) : null
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
                /* @__PURE__ */ n.jsx(p, { children: /* @__PURE__ */ n.jsx(m, { children: /* @__PURE__ */ n.jsx(B, { onClick: () => a(s), sx: { paddingLeft: 0 }, children: /* @__PURE__ */ n.jsxs(
                  i,
                  {
                    direction: "row",
                    sx: {
                      alignItems: "center",
                      overflow: "hidden",
                      minWidth: 0
                    },
                    children: [
                      /* @__PURE__ */ n.jsx(M, { isOpen: !!o[s.name], children: /* @__PURE__ */ n.jsx(k, {}) }),
                      !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", sx: { marginLeft: 0 }, title: s.name, children: s.name })
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
                      I(
                        !!o[s.name],
                        (((j = s.children) == null ? void 0 : j.length) ?? 0) * (E + v)
                      )
                    ],
                    children: (A = s.children) == null ? void 0 : A.map((t) => /* @__PURE__ */ n.jsx(p, { children: /* @__PURE__ */ n.jsx(m, { isActive: d(t, r), children: /* @__PURE__ */ n.jsx(
                      h,
                      {
                        href: t.href ?? "#",
                        isExternal: t.isExternal,
                        isActive: d(t, r),
                        disabled: t.disabled,
                        onClick: g(t),
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
                              t.icon && /* @__PURE__ */ n.jsx(
                                i,
                                {
                                  sx: {
                                    width: x,
                                    height: x,
                                    alignItems: "center"
                                  },
                                  children: t.icon
                                }
                              ),
                              !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", title: t.name, children: t.name })
                            ]
                          }
                        )
                      }
                    ) }) }, t.id ?? t.name))
                  }
                )
              ]
            },
            s.id ?? s.name
          );
        })
      }
    ),
    (b = e.appendSlot) == null ? void 0 : b.call(e, !!o[e.name])
  ] });
};
export {
  $ as RoutesList
};

import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { useCallback as T, useMemo as D } from "react";
import { useTheme as _, Stack as i, Divider as H } from "@mui/material";
import { DropdownIcon as y } from "../../../icons/DropdownIcon/index.es.js";
import { ListItem as N, SidebarItemBox as u, LinkText as f, MenuParentItem as k, DropdownIconWrapper as A, ListChildItem as g } from "../style.es.js";
const l = 20, E = 36, p = 4, R = (s, r) => s != null && s.length ? s.reduce((c, o) => {
  var a;
  let h = E + p;
  return (a = o.children) != null && a.length && r[o.name] && (h += o.children.length * (E + p)), c + h;
}, 0) : 0, B = (s) => {
  var r;
  return !!((r = s.children) != null && r.length) || !s.href;
}, d = (s, r) => !!(r && s.match && s.match.test(r)), Z = ({
  item: s,
  activePathname: r,
  isSidebarCollapsed: c,
  menuParentIsOpen: o,
  linkComponent: h,
  onParentClick: a,
  onItemClick: M
}) => {
  var v;
  const m = _(), w = T(
    (n, x) => ({
      transition: m.transitions.create("height", {
        easing: m.transitions.easing.sharp,
        duration: m.transitions.duration.enteringScreen
      }),
      height: n ? `${x}px` : 0,
      overflow: "hidden"
    }),
    [m.transitions]
  ), L = D(() => {
    const n = !!o[s.name], x = R(s.children, o);
    return w(n, x);
  }, [s.children, s.name, o, w]), I = (n) => (x) => {
    var j;
    if (n.disabled) {
      x.preventDefault();
      return;
    }
    (j = n.onClick) == null || j.call(n), M(n, x);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(u, { isActive: d(s, r), children: !B(s) && s.href ? /* @__PURE__ */ e.jsx(
      h,
      {
        href: s.href,
        isExternal: s.isExternal,
        isActive: d(s, r),
        disabled: s.disabled,
        onClick: I(s),
        children: /* @__PURE__ */ e.jsxs(i, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ e.jsx(i, { width: l, height: l, alignItems: "center", children: s.icon }),
          !c && /* @__PURE__ */ e.jsx(f, { variant: "body1", children: s.name })
        ] })
      }
    ) : /* @__PURE__ */ e.jsxs(k, { onClick: () => a(s), children: [
      /* @__PURE__ */ e.jsxs(i, { direction: "row", children: [
        /* @__PURE__ */ e.jsx(i, { width: l, height: l, alignItems: "center", children: s.icon }),
        !c && /* @__PURE__ */ e.jsx(f, { variant: "body1", children: s.name })
      ] }),
      !c && /* @__PURE__ */ e.jsx(A, { isOpen: !!o[s.name], children: /* @__PURE__ */ e.jsx(y, {}) })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(i, { sx: L, direction: "column", justifyContent: "flex-start", width: "100%", children: (v = s.children) == null ? void 0 : v.map((n) => {
      var j, b;
      return !B(n) && n.href ? /* @__PURE__ */ e.jsxs(i, { width: "100%", children: [
        /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(u, { isActive: d(n, r), children: /* @__PURE__ */ e.jsx(
          h,
          {
            href: n.href,
            isExternal: n.isExternal,
            isActive: d(n, r),
            disabled: n.disabled,
            onClick: I(n),
            children: /* @__PURE__ */ e.jsxs(i, { direction: "row", alignItems: "center", children: [
              n.icon && /* @__PURE__ */ e.jsx(i, { width: l, height: l, alignItems: "center", children: n.icon }),
              !c && /* @__PURE__ */ e.jsx(f, { variant: "body1", children: n.name })
            ] })
          }
        ) }) }),
        n.hasDivider ? /* @__PURE__ */ e.jsx(H, { sx: { marginTop: 1 } }) : null
      ] }, n.id ?? n.name) : /* @__PURE__ */ e.jsxs(i, { width: "100%", children: [
        /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(u, { children: /* @__PURE__ */ e.jsx(k, { onClick: () => a(n), sx: { paddingLeft: 0 }, children: /* @__PURE__ */ e.jsxs(
          i,
          {
            direction: "row",
            alignItems: "center",
            sx: { overflow: "hidden", minWidth: 0 },
            children: [
              /* @__PURE__ */ e.jsx(A, { isOpen: !!o[n.name], children: /* @__PURE__ */ e.jsx(y, {}) }),
              !c && /* @__PURE__ */ e.jsx(f, { variant: "body1", sx: { marginLeft: 0 }, title: n.name, children: n.name })
            ]
          }
        ) }) }) }),
        /* @__PURE__ */ e.jsx(
          i,
          {
            direction: "column",
            justifyContent: "flex-start",
            width: "100%",
            sx: w(
              !!o[n.name],
              (((j = n.children) == null ? void 0 : j.length) ?? 0) * (E + p)
            ),
            children: (b = n.children) == null ? void 0 : b.map((t) => /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(u, { isActive: d(t, r), children: /* @__PURE__ */ e.jsx(
              h,
              {
                href: t.href ?? "#",
                isExternal: t.isExternal,
                isActive: d(t, r),
                disabled: t.disabled,
                onClick: I(t),
                children: /* @__PURE__ */ e.jsxs(
                  i,
                  {
                    direction: "row",
                    alignItems: "center",
                    sx: { paddingLeft: "22px", overflow: "hidden", minWidth: 0 },
                    children: [
                      t.icon && /* @__PURE__ */ e.jsx(i, { width: l, height: l, alignItems: "center", children: t.icon }),
                      !c && /* @__PURE__ */ e.jsx(f, { variant: "body1", title: t.name, children: t.name })
                    ]
                  }
                )
              }
            ) }) }, t.id ?? t.name))
          }
        )
      ] }, n.id ?? n.name);
    }) })
  ] });
};
export {
  Z as RoutesList
};

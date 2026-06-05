import { jsxRuntimeExports as n } from "../../../jsx-runtime-BgepH7Pb.js";
import { useCallback as D, useMemo as _ } from "react";
import { useTheme as H, Stack as i, Divider as N } from "@mui/material";
import { DropdownIcon as k } from "../../../icons/DropdownIcon/index.es.js";
import { ListItem as R, SidebarItemBox as w, LinkText as f, MenuParentItem as B, DropdownIconWrapper as A, ListChildItem as g } from "../style.es.js";
const l = 20, p = 36, E = 4, F = (e, r) => e != null && e.length ? e.reduce((c, o) => {
  var a;
  let h = p + E;
  return (a = o.children) != null && a.length && r[o.name] && (h += o.children.length * (p + E)), c + h;
}, 0) : 0, M = (e) => {
  var r;
  return !!((r = e.children) != null && r.length) || !e.href;
}, d = (e, r) => !!(r && e.match && e.match.test(r)), $ = ({
  item: e,
  activePathname: r,
  isSidebarCollapsed: c,
  menuParentIsOpen: o,
  linkComponent: h,
  onParentClick: a,
  onItemClick: L
}) => {
  var v, b;
  const u = H(), m = D(
    (s, x) => ({
      transition: u.transitions.create("height", {
        easing: u.transitions.easing.sharp,
        duration: u.transitions.duration.enteringScreen
      }),
      height: s ? `${x}px` : 0,
      overflow: "hidden"
    }),
    [u.transitions]
  ), T = _(() => {
    const s = !!o[e.name], x = F(e.children, o);
    return m(s, x);
  }, [e.children, e.name, o, m]), I = (s) => (x) => {
    var j;
    if (s.disabled) {
      x.preventDefault();
      return;
    }
    (j = s.onClick) == null || j.call(s), L(s, x);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(R, { children: /* @__PURE__ */ n.jsx(w, { isActive: d(e, r), children: !M(e) && e.href ? /* @__PURE__ */ n.jsx(
      h,
      {
        href: e.href,
        isExternal: e.isExternal,
        isActive: d(e, r),
        disabled: e.disabled,
        onClick: I(e),
        children: /* @__PURE__ */ n.jsxs(i, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ n.jsx(i, { width: l, height: l, alignItems: "center", children: e.icon }),
          !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", children: e.name })
        ] })
      }
    ) : /* @__PURE__ */ n.jsxs(B, { onClick: () => a(e), children: [
      /* @__PURE__ */ n.jsxs(i, { direction: "row", children: [
        /* @__PURE__ */ n.jsx(i, { width: l, height: l, alignItems: "center", children: e.icon }),
        !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", children: e.name })
      ] }),
      !c && /* @__PURE__ */ n.jsx(A, { isOpen: !!o[e.name], children: /* @__PURE__ */ n.jsx(k, {}) })
    ] }) }) }),
    /* @__PURE__ */ n.jsx(i, { sx: T, direction: "column", justifyContent: "flex-start", width: "100%", children: (v = e.children) == null ? void 0 : v.map((s) => {
      var j, y;
      return !M(s) && s.href ? /* @__PURE__ */ n.jsxs(i, { width: "100%", children: [
        /* @__PURE__ */ n.jsx(g, { children: /* @__PURE__ */ n.jsx(w, { isActive: d(s, r), children: /* @__PURE__ */ n.jsx(
          h,
          {
            href: s.href,
            isExternal: s.isExternal,
            isActive: d(s, r),
            disabled: s.disabled,
            onClick: I(s),
            children: /* @__PURE__ */ n.jsxs(i, { direction: "row", alignItems: "center", children: [
              s.icon && /* @__PURE__ */ n.jsx(i, { width: l, height: l, alignItems: "center", children: s.icon }),
              !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", children: s.name })
            ] })
          }
        ) }) }),
        s.hasDivider ? /* @__PURE__ */ n.jsx(N, { sx: { marginTop: 1 } }) : null
      ] }, s.id ?? s.name) : /* @__PURE__ */ n.jsxs(i, { width: "100%", children: [
        /* @__PURE__ */ n.jsx(g, { children: /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(B, { onClick: () => a(s), sx: { paddingLeft: 0 }, children: /* @__PURE__ */ n.jsxs(
          i,
          {
            direction: "row",
            alignItems: "center",
            sx: { overflow: "hidden", minWidth: 0 },
            children: [
              /* @__PURE__ */ n.jsx(A, { isOpen: !!o[s.name], children: /* @__PURE__ */ n.jsx(k, {}) }),
              !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", sx: { marginLeft: 0 }, title: s.name, children: s.name })
            ]
          }
        ) }) }) }),
        /* @__PURE__ */ n.jsx(
          i,
          {
            direction: "column",
            justifyContent: "flex-start",
            width: "100%",
            sx: m(
              !!o[s.name],
              (((j = s.children) == null ? void 0 : j.length) ?? 0) * (p + E)
            ),
            children: (y = s.children) == null ? void 0 : y.map((t) => /* @__PURE__ */ n.jsx(g, { children: /* @__PURE__ */ n.jsx(w, { isActive: d(t, r), children: /* @__PURE__ */ n.jsx(
              h,
              {
                href: t.href ?? "#",
                isExternal: t.isExternal,
                isActive: d(t, r),
                disabled: t.disabled,
                onClick: I(t),
                children: /* @__PURE__ */ n.jsxs(
                  i,
                  {
                    direction: "row",
                    alignItems: "center",
                    sx: { paddingLeft: "22px", overflow: "hidden", minWidth: 0 },
                    children: [
                      t.icon && /* @__PURE__ */ n.jsx(i, { width: l, height: l, alignItems: "center", children: t.icon }),
                      !c && /* @__PURE__ */ n.jsx(f, { variant: "body1", title: t.name, children: t.name })
                    ]
                  }
                )
              }
            ) }) }, t.id ?? t.name))
          }
        )
      ] }, s.id ?? s.name);
    }) }),
    (b = e.appendSlot) == null ? void 0 : b.call(e, !!o[e.name])
  ] });
};
export {
  $ as RoutesList
};

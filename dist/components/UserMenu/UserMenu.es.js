import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as S, useMemo as W } from "react";
import { useTheme as E, ClickAwayListener as H, Box as O, Stack as r, Typography as i, Divider as f, Avatar as U } from "@mui/material";
import { Checkmark as G } from "../../icons/Checkmark/index.es.js";
import { DropdownIcon as R } from "../../icons/DropdownIcon/index.es.js";
import { LogoutIcon as $ } from "../../icons/LogoutIcon/index.es.js";
import { CurrentTheme as q } from "../../styles/constants.es.js";
import { Avatar as s } from "../../ui/Avatar/Avatar.es.js";
import { AvatarContainer as v, UserMenuWrap as z, IconButton as c, AlertsIcon as J, Menu as K, MenuItem as a } from "./styles.es.js";
const te = ({
  user: t,
  isMobile: C,
  isCollapsed: y,
  menuItems: p = [],
  organizations: h,
  currentOrganizationId: I,
  onSelectOrganization: d,
  organizationsLabel: k = "My organizations",
  notificationsSlot: u,
  bannerSlot: b,
  onLogout: A,
  logoutLabel: M = "Log out"
}) => {
  const x = E(), [m, l] = S(null), N = W(() => p.filter((n) => !n.hidden), [p]), D = !!m, j = (n) => {
    n.preventDefault(), l(m ? null : n.currentTarget);
  }, w = () => l(null), L = (n) => {
    const o = n.target;
    (o == null ? void 0 : o.localName) !== "body" && l(null);
  }, T = (n) => {
    d == null || d(n), l(null);
  }, B = (n) => {
    l(null), n();
  }, F = () => {
    l(null), A();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    b,
    /* @__PURE__ */ e.jsx(H, { onClickAway: L, children: /* @__PURE__ */ e.jsxs(O, { children: [
      C ? /* @__PURE__ */ e.jsxs(v, { children: [
        /* @__PURE__ */ e.jsx(c, { onClick: j, children: /* @__PURE__ */ e.jsxs(r, { direction: "row", gap: "8px", alignItems: "center", sx: { cursor: "pointer" }, children: [
          /* @__PURE__ */ e.jsx(s, { avatar: t.avatar, userName: t.name }),
          /* @__PURE__ */ e.jsx(i, { fontSize: "16px", lineHeight: "16px", color: "neutral.primary", children: t.name })
        ] }) }),
        t.subtitle ? /* @__PURE__ */ e.jsx(i, { variant: "caption", color: "neutral.grey4", children: t.subtitle }) : null
      ] }) : /* @__PURE__ */ e.jsx(v, { children: y ? /* @__PURE__ */ e.jsx(r, { direction: "row", alignItems: "center", justifyContent: "center", width: "100%", children: /* @__PURE__ */ e.jsx(s, { avatar: t.avatar, userName: t.name, sx: { width: 32, height: 32 } }) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(z, { onClick: j, children: [
          /* @__PURE__ */ e.jsx(c, { children: /* @__PURE__ */ e.jsx(s, { avatar: t.avatar, userName: t.name }) }),
          /* @__PURE__ */ e.jsxs(
            r,
            {
              direction: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "44px",
              flexGrow: 1,
              overflow: "hidden",
              children: [
                /* @__PURE__ */ e.jsx(
                  i,
                  {
                    color: "currentColor",
                    sx: {
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: t.name
                  }
                ),
                t.subtitle ? /* @__PURE__ */ e.jsx(
                  i,
                  {
                    variant: "caption",
                    color: "neutral.grey4",
                    sx: {
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "100%"
                    },
                    children: t.subtitle
                  }
                ) : null
              ]
            }
          )
        ] }),
        u ? /* @__PURE__ */ e.jsx(c, { className: "notifications", children: /* @__PURE__ */ e.jsx(J, { children: u }) }) : null
      ] }) }),
      D ? /* @__PURE__ */ e.jsxs(
        K,
        {
          anchorEl: m,
          open: !0,
          onClose: w,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          children: [
            /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsxs(r, { direction: "row", width: "100%", justifyContent: "space-between", alignItems: "center", children: [
              /* @__PURE__ */ e.jsx(c, { onClick: j, children: /* @__PURE__ */ e.jsxs(r, { direction: "row", gap: "8px", alignItems: "center", sx: { cursor: "pointer" }, children: [
                /* @__PURE__ */ e.jsx(
                  s,
                  {
                    sx: { width: 40, height: 40 },
                    avatar: t.avatar,
                    userName: t.name
                  }
                ),
                /* @__PURE__ */ e.jsx(i, { fontSize: "16px", lineHeight: "16px", color: "neutral.primary", children: t.name })
              ] }) }),
              /* @__PURE__ */ e.jsx(
                r,
                {
                  width: 20,
                  height: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  onClick: w,
                  children: /* @__PURE__ */ e.jsx(R, {})
                }
              )
            ] }) }),
            N.map((n) => /* @__PURE__ */ e.jsx(a, { onClick: () => B(n.onClick), children: /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: 2, children: [
              n.icon ? /* @__PURE__ */ e.jsx(r, { width: 20, height: 20, alignItems: "center", children: n.icon }) : null,
              /* @__PURE__ */ e.jsx(i, { variant: "body1", children: n.label })
            ] }) }, n.id)),
            h && h.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(f, {}),
              /* @__PURE__ */ e.jsx(
                a,
                {
                  color: "neutral.grey4",
                  sx: {
                    cursor: "default",
                    "&:hover": {
                      backgroundColor: x.palette.mode === q.Dark ? x.palette.neutral.grey1 : x.palette.neutral.white
                    }
                  },
                  children: k
                }
              ),
              h.map((n) => {
                var g;
                const o = I === n.id;
                return /* @__PURE__ */ e.jsx(a, { onClick: () => T(n.id), children: /* @__PURE__ */ e.jsxs(
                  r,
                  {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    children: [
                      /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: 2, children: [
                        /* @__PURE__ */ e.jsx(U, { sx: { width: 24, height: 24 }, children: ((g = n.name) == null ? void 0 : g[0]) ?? "" }),
                        /* @__PURE__ */ e.jsx(
                          i,
                          {
                            variant: "body1",
                            title: n.name,
                            sx: {
                              width: n.badge ? "100px" : "165px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap"
                            },
                            children: n.name
                          }
                        ),
                        n.badge
                      ] }),
                      o ? /* @__PURE__ */ e.jsx(
                        r,
                        {
                          width: 24,
                          height: 24,
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primaryColors.accent",
                          children: /* @__PURE__ */ e.jsx(G, {})
                        }
                      ) : null
                    ]
                  }
                ) }, n.id);
              })
            ] }) : null,
            /* @__PURE__ */ e.jsx(f, {}),
            /* @__PURE__ */ e.jsx(a, { onClick: F, children: /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: 2, children: [
              /* @__PURE__ */ e.jsx(r, { width: 20, height: 20, alignItems: "center", children: /* @__PURE__ */ e.jsx($, {}) }),
              /* @__PURE__ */ e.jsx(i, { variant: "body1", children: M })
            ] }) })
          ]
        }
      ) : null
    ] }) })
  ] });
};
export {
  te as UserMenu
};

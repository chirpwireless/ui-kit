import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as H, useMemo as O } from "react";
import { useTheme as U, ClickAwayListener as G, Box as L, Stack as r, Typography as i, Divider as C, Avatar as P } from "@mui/material";
import { Checkmark as R } from "../../icons/Checkmark/index.es.js";
import { DropdownIcon as $ } from "../../icons/DropdownIcon/index.es.js";
import { LogoutIcon as q } from "../../icons/LogoutIcon/index.es.js";
import { CurrentTheme as z } from "../../styles/constants.es.js";
import { chirpPalette as v } from "../../theme/palette.es.js";
import { Avatar as a } from "../../ui/Avatar/Avatar.es.js";
import { AvatarContainer as y, UserMenuWrap as J, IconButton as h, AlertsIcon as K, Menu as Q, MenuItem as c } from "./styles.es.js";
const le = ({
  user: t,
  isMobile: I,
  isCollapsed: k,
  avatarLoader: s,
  menuItems: u = [],
  organizations: d,
  currentOrganizationId: b,
  onSelectOrganization: x,
  organizationsLabel: A = "My organizations",
  notificationsSlot: w,
  bannerSlot: M,
  onLogout: N,
  logoutLabel: D = "Log out"
}) => {
  const m = U(), [j, l] = H(null), T = O(() => u.filter((n) => !n.hidden), [u]), B = !!j, p = (n) => {
    n.preventDefault(), l(j ? null : n.currentTarget);
  }, g = () => l(null), S = (n) => {
    const o = n.target;
    (o == null ? void 0 : o.localName) !== "body" && l(null);
  }, W = (n) => {
    x == null || x(n), l(null);
  }, E = (n) => {
    l(null), n();
  }, F = () => {
    l(null), N();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    M,
    /* @__PURE__ */ e.jsx(G, { onClickAway: S, children: /* @__PURE__ */ e.jsxs(L, { children: [
      I ? /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsx(h, { onClick: p, children: /* @__PURE__ */ e.jsxs(r, { direction: "row", gap: "8px", alignItems: "center", sx: { cursor: "pointer" }, children: [
          /* @__PURE__ */ e.jsx(a, { avatar: t.avatar, userName: t.name, loader: s }),
          /* @__PURE__ */ e.jsx(i, { fontSize: "16px", lineHeight: "16px", color: "neutral.primary", children: t.name })
        ] }) }),
        t.subtitle ? /* @__PURE__ */ e.jsx(i, { variant: "caption", color: "neutral.grey4", children: t.subtitle }) : null
      ] }) : /* @__PURE__ */ e.jsx(y, { children: k ? /* @__PURE__ */ e.jsx(r, { direction: "row", alignItems: "center", justifyContent: "center", width: "100%", children: /* @__PURE__ */ e.jsx(
        a,
        {
          avatar: t.avatar,
          userName: t.name,
          loader: s,
          sx: { width: 32, height: 32 }
        }
      ) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(J, { onClick: p, children: [
          /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(a, { avatar: t.avatar, userName: t.name, loader: s }) }),
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
        w ? /* @__PURE__ */ e.jsx(h, { className: "notifications", children: /* @__PURE__ */ e.jsx(K, { children: w }) }) : null
      ] }) }),
      B ? /* @__PURE__ */ e.jsxs(
        Q,
        {
          anchorEl: j,
          open: !0,
          onClose: g,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          children: [
            /* @__PURE__ */ e.jsx(c, { children: /* @__PURE__ */ e.jsxs(r, { direction: "row", width: "100%", justifyContent: "space-between", alignItems: "center", children: [
              /* @__PURE__ */ e.jsx(h, { onClick: p, children: /* @__PURE__ */ e.jsxs(r, { direction: "row", gap: "8px", alignItems: "center", sx: { cursor: "pointer" }, children: [
                /* @__PURE__ */ e.jsx(
                  a,
                  {
                    sx: { width: 40, height: 40 },
                    avatar: t.avatar,
                    userName: t.name,
                    loader: s
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
                  onClick: g,
                  children: /* @__PURE__ */ e.jsx($, {})
                }
              )
            ] }) }),
            T.map((n) => /* @__PURE__ */ e.jsx(c, { onClick: () => E(n.onClick), children: /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: 2, children: [
              n.icon ? /* @__PURE__ */ e.jsx(r, { width: 20, height: 20, alignItems: "center", children: n.icon }) : null,
              /* @__PURE__ */ e.jsx(i, { variant: "body1", children: n.label })
            ] }) }, n.id)),
            d && d.length > 0 ? [
              /* @__PURE__ */ e.jsx(C, {}, "org-divider"),
              /* @__PURE__ */ e.jsx(
                c,
                {
                  color: "neutral.grey4",
                  sx: {
                    cursor: "default",
                    "&:hover": {
                      backgroundColor: m.palette.mode === z.Dark ? v(m).neutral.grey1 : v(m).neutral.white
                    }
                  },
                  children: A
                },
                "org-label"
              ),
              ...d.map((n) => {
                var f;
                const o = b === n.id;
                return /* @__PURE__ */ e.jsx(c, { onClick: () => W(n.id), children: /* @__PURE__ */ e.jsxs(
                  r,
                  {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    children: [
                      /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: 2, children: [
                        /* @__PURE__ */ e.jsx(P, { sx: { width: 24, height: 24 }, children: ((f = n.name) == null ? void 0 : f[0]) ?? "" }),
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
                          children: /* @__PURE__ */ e.jsx(R, {})
                        }
                      ) : null
                    ]
                  }
                ) }, n.id);
              })
            ] : null,
            /* @__PURE__ */ e.jsx(C, {}),
            /* @__PURE__ */ e.jsx(c, { onClick: F, children: /* @__PURE__ */ e.jsxs(r, { direction: "row", alignItems: "center", gap: 2, children: [
              /* @__PURE__ */ e.jsx(r, { width: 20, height: 20, alignItems: "center", children: /* @__PURE__ */ e.jsx(q, {}) }),
              /* @__PURE__ */ e.jsx(i, { variant: "body1", children: D })
            ] }) })
          ]
        }
      ) : null
    ] }) })
  ] });
};
export {
  le as UserMenu
};

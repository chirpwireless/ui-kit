import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as H, useMemo as _ } from "react";
import { useTheme as F, ClickAwayListener as R, Box as C, Stack as r, Typography as i, Divider as v, Avatar as U } from "@mui/material";
import { Checkmark as L } from "../../icons/Checkmark/index.es.js";
import { DropdownIcon as P } from "../../icons/DropdownIcon/index.es.js";
import { LogoutIcon as X } from "../../icons/LogoutIcon/index.es.js";
import { CurrentTheme as Z } from "../../styles/constants.es.js";
import { chirpPalette as y } from "../../theme/palette.es.js";
import { Avatar as a } from "../../ui/Avatar/Avatar.es.js";
import { AvatarContainer as k, UserMenuWrap as $, IconButton as h, AlertsIcon as q, Menu as z, MenuItem as s } from "./styles.es.js";
const J = 165, oe = ({
  user: t,
  isMobile: I,
  isCollapsed: b,
  avatarLoader: c,
  menuItems: u = [],
  organizations: d,
  currentOrganizationId: A,
  onSelectOrganization: x,
  organizationsLabel: M = "My organizations",
  notificationsSlot: w,
  bannerSlot: N,
  onLogout: S,
  logoutLabel: W = "Log out"
}) => {
  const m = F(), [j, l] = H(null), T = _(() => u.filter((n) => !n.hidden), [u]), D = !!j, p = (n) => {
    n.preventDefault(), l(j ? null : n.currentTarget);
  }, f = () => l(null), O = (n) => {
    const o = n.target;
    (o == null ? void 0 : o.localName) !== "body" && l(null);
  }, B = (n) => {
    x == null || x(n), l(null);
  }, E = (n) => {
    l(null), n();
  }, G = () => {
    l(null), S();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    N,
    /* @__PURE__ */ e.jsx(R, { onClickAway: O, children: /* @__PURE__ */ e.jsxs(C, { children: [
      I ? /* @__PURE__ */ e.jsxs(k, { children: [
        /* @__PURE__ */ e.jsx(h, { onClick: p, children: /* @__PURE__ */ e.jsxs(
          r,
          {
            direction: "row",
            sx: {
              gap: "8px",
              alignItems: "center",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ e.jsx(a, { avatar: t.avatar, userName: t.name, loader: c }),
              /* @__PURE__ */ e.jsx(
                i,
                {
                  color: "neutral.primary",
                  sx: {
                    fontSize: "16px",
                    lineHeight: "16px"
                  },
                  children: t.name
                }
              )
            ]
          }
        ) }),
        t.subtitle ? /* @__PURE__ */ e.jsx(i, { variant: "caption", color: "neutral.grey4", children: t.subtitle }) : null
      ] }) : /* @__PURE__ */ e.jsx(k, { children: b ? /* @__PURE__ */ e.jsx(
        r,
        {
          direction: "row",
          sx: {
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          },
          children: /* @__PURE__ */ e.jsx(
            a,
            {
              avatar: t.avatar,
              userName: t.name,
              loader: c,
              sx: { width: 32, height: 32 }
            }
          )
        }
      ) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs($, { onClick: p, children: [
          /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(a, { avatar: t.avatar, userName: t.name, loader: c }) }),
          /* @__PURE__ */ e.jsxs(
            r,
            {
              direction: "column",
              sx: {
                alignItems: "flex-start",
                justifyContent: "center",
                width: "44px",
                flexGrow: 1,
                overflow: "hidden"
              },
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
        w ? /* @__PURE__ */ e.jsx(h, { className: "notifications", children: /* @__PURE__ */ e.jsx(q, { children: w }) }) : null
      ] }) }),
      D ? /* @__PURE__ */ e.jsxs(
        z,
        {
          anchorEl: j,
          open: !0,
          onClose: f,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          children: [
            /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsxs(
              r,
              {
                direction: "row",
                sx: {
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ e.jsx(h, { onClick: p, children: /* @__PURE__ */ e.jsxs(
                    r,
                    {
                      direction: "row",
                      sx: {
                        gap: "8px",
                        alignItems: "center",
                        cursor: "pointer"
                      },
                      children: [
                        /* @__PURE__ */ e.jsx(
                          a,
                          {
                            sx: { width: 40, height: 40 },
                            avatar: t.avatar,
                            userName: t.name,
                            loader: c
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          i,
                          {
                            color: "neutral.primary",
                            sx: {
                              fontSize: "16px",
                              lineHeight: "16px"
                            },
                            children: t.name
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx(
                    r,
                    {
                      onClick: f,
                      sx: {
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center"
                      },
                      children: /* @__PURE__ */ e.jsx(P, {})
                    }
                  )
                ]
              }
            ) }),
            T.map((n) => /* @__PURE__ */ e.jsx(s, { onClick: () => E(n.onClick), children: /* @__PURE__ */ e.jsxs(
              r,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 2
                },
                children: [
                  n.icon ? /* @__PURE__ */ e.jsx(
                    r,
                    {
                      sx: {
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        flexShrink: 0
                      },
                      children: n.icon
                    }
                  ) : null,
                  /* @__PURE__ */ e.jsx(i, { variant: "body1", children: n.label })
                ]
              }
            ) }, n.id)),
            d && d.length > 0 ? [
              /* @__PURE__ */ e.jsx(v, {}, "org-divider"),
              /* @__PURE__ */ e.jsx(
                s,
                {
                  color: "neutral.grey4",
                  sx: {
                    cursor: "default",
                    "&:hover": {
                      backgroundColor: m.palette.mode === Z.Dark ? y(m).neutral.grey1 : y(m).neutral.white
                    }
                  },
                  children: M
                },
                "org-label"
              ),
              ...d.map((n) => {
                var g;
                const o = A === n.id;
                return /* @__PURE__ */ e.jsx(s, { onClick: () => B(n.id), children: /* @__PURE__ */ e.jsxs(
                  r,
                  {
                    direction: "row",
                    sx: {
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%"
                    },
                    children: [
                      /* @__PURE__ */ e.jsxs(
                        r,
                        {
                          direction: "row",
                          sx: {
                            alignItems: "center",
                            gap: 2,
                            minWidth: 0,
                            flexGrow: 1
                          },
                          children: [
                            /* @__PURE__ */ e.jsx(U, { sx: { width: 24, height: 24, flexShrink: 0 }, children: ((g = n.name) == null ? void 0 : g[0]) ?? "" }),
                            /* @__PURE__ */ e.jsx(
                              i,
                              {
                                variant: "body1",
                                title: n.name,
                                sx: {
                                  minWidth: 0,
                                  maxWidth: J,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap"
                                },
                                children: n.name
                              }
                            ),
                            n.badge ? /* @__PURE__ */ e.jsx(C, { sx: { flexShrink: 0, display: "flex" }, children: n.badge }) : null
                          ]
                        }
                      ),
                      o ? /* @__PURE__ */ e.jsx(
                        r,
                        {
                          color: "primaryColors.accent",
                          sx: {
                            width: 24,
                            height: 24,
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                          },
                          children: /* @__PURE__ */ e.jsx(L, {})
                        }
                      ) : null
                    ]
                  }
                ) }, n.id);
              })
            ] : null,
            /* @__PURE__ */ e.jsx(v, {}),
            /* @__PURE__ */ e.jsx(s, { onClick: G, children: /* @__PURE__ */ e.jsxs(
              r,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 2
                },
                children: [
                  /* @__PURE__ */ e.jsx(
                    r,
                    {
                      sx: {
                        width: 20,
                        height: 20,
                        alignItems: "center"
                      },
                      children: /* @__PURE__ */ e.jsx(X, {})
                    }
                  ),
                  /* @__PURE__ */ e.jsx(i, { variant: "body1", children: W })
                ]
              }
            ) })
          ]
        }
      ) : null
    ] }) })
  ] });
};
export {
  oe as UserMenu
};

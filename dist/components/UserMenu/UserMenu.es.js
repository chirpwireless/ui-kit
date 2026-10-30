import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Checkmark as n } from "../../icons/Checkmark/index.es.js";
import { DropdownIcon as r } from "../../icons/DropdownIcon/index.es.js";
import { LogoutIcon as i } from "../../icons/LogoutIcon/index.es.js";
import { Avatar as a } from "../../ui/Avatar/Avatar.es.js";
import { AlertsIcon as o, AvatarContainer as s, IconButton as c, Menu as l, MenuItem as u, UserMenuWrap as d } from "./styles.es.js";
import { useMemo as f, useState as p } from "react";
import { Avatar as m, Box as h, ClickAwayListener as g, Divider as _, Stack as v, Typography as y, useTheme as b } from "@mui/material";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
// src/components/UserMenu/UserMenu.tsx
var w = 165, T = ({ user: T, isMobile: E, isCollapsed: D, avatarLoader: O, menuItems: k = [], organizations: A, currentOrganizationId: j, onSelectOrganization: M, organizationsLabel: N = "My organizations", notificationsSlot: P, bannerSlot: F, onLogout: I, logoutLabel: L = "Log out" }) => {
	let R = b(), [z, B] = p(null), V = f(() => k.filter((e) => !e.hidden), [k]), H = !!z, U = (e) => {
		e.preventDefault(), B(z ? null : e.currentTarget);
	}, W = () => B(null), G = (e) => {
		e.target?.localName !== "body" && B(null);
	}, K = (e) => {
		M?.(e), B(null);
	}, q = (e) => {
		B(null), e();
	}, J = () => {
		B(null), I();
	};
	return /* @__PURE__ */ C(x, { children: [F, /* @__PURE__ */ S(g, {
		onClickAway: G,
		children: /* @__PURE__ */ C(h, { children: [E ? /* @__PURE__ */ C(s, { children: [/* @__PURE__ */ S(c, {
			onClick: U,
			children: /* @__PURE__ */ C(v, {
				direction: "row",
				sx: {
					gap: "8px",
					alignItems: "center",
					cursor: "pointer"
				},
				children: [/* @__PURE__ */ S(a, {
					avatar: T.avatar,
					userName: T.name,
					loader: O
				}), /* @__PURE__ */ S(y, {
					color: "neutral.primary",
					sx: {
						fontSize: "16px",
						lineHeight: "16px"
					},
					children: T.name
				})]
			})
		}), T.subtitle ? /* @__PURE__ */ S(y, {
			variant: "caption",
			color: "neutral.grey4",
			children: T.subtitle
		}) : null] }) : /* @__PURE__ */ S(s, { children: D ? /* @__PURE__ */ S(v, {
			direction: "row",
			sx: {
				alignItems: "center",
				justifyContent: "center",
				width: "100%"
			},
			children: /* @__PURE__ */ S(a, {
				avatar: T.avatar,
				userName: T.name,
				loader: O,
				sx: {
					width: 32,
					height: 32
				}
			})
		}) : /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ C(d, {
			onClick: U,
			children: [/* @__PURE__ */ S(c, { children: /* @__PURE__ */ S(a, {
				avatar: T.avatar,
				userName: T.name,
				loader: O
			}) }), /* @__PURE__ */ C(v, {
				direction: "column",
				sx: {
					alignItems: "flex-start",
					justifyContent: "center",
					width: "44px",
					flexGrow: 1,
					overflow: "hidden"
				},
				children: [/* @__PURE__ */ S(y, {
					color: "currentColor",
					sx: {
						maxWidth: "100%",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap"
					},
					children: T.name
				}), T.subtitle ? /* @__PURE__ */ S(y, {
					variant: "caption",
					color: "neutral.grey4",
					sx: {
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
						maxWidth: "100%"
					},
					children: T.subtitle
				}) : null]
			})]
		}), P ? /* @__PURE__ */ S(c, {
			className: "notifications",
			children: /* @__PURE__ */ S(o, { children: P })
		}) : null] }) }), H ? /* @__PURE__ */ C(l, {
			anchorEl: z,
			open: !0,
			onClose: W,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "left"
			},
			children: [
				/* @__PURE__ */ S(u, { children: /* @__PURE__ */ C(v, {
					direction: "row",
					sx: {
						width: "100%",
						justifyContent: "space-between",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ S(c, {
						onClick: U,
						children: /* @__PURE__ */ C(v, {
							direction: "row",
							sx: {
								gap: "8px",
								alignItems: "center",
								cursor: "pointer"
							},
							children: [/* @__PURE__ */ S(a, {
								sx: {
									width: 40,
									height: 40
								},
								avatar: T.avatar,
								userName: T.name,
								loader: O
							}), /* @__PURE__ */ S(y, {
								color: "neutral.primary",
								sx: {
									fontSize: "16px",
									lineHeight: "16px"
								},
								children: T.name
							})]
						})
					}), /* @__PURE__ */ S(v, {
						onClick: W,
						sx: {
							width: 20,
							height: 20,
							alignItems: "center",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ S(r, {})
					})]
				}) }),
				V.map((e) => /* @__PURE__ */ S(u, {
					onClick: () => q(e.onClick),
					children: /* @__PURE__ */ C(v, {
						direction: "row",
						sx: {
							alignItems: "center",
							gap: 2
						},
						children: [e.icon ? /* @__PURE__ */ S(v, {
							sx: {
								width: 20,
								height: 20,
								alignItems: "center",
								flexShrink: 0
							},
							children: e.icon
						}) : null, /* @__PURE__ */ S(y, {
							variant: "body1",
							children: e.label
						})]
					})
				}, e.id)),
				A && A.length > 0 ? [
					/* @__PURE__ */ S(_, {}, "org-divider"),
					/* @__PURE__ */ S(u, {
						color: "neutral.grey4",
						sx: {
							cursor: "default",
							"&:hover": { backgroundColor: R.palette.mode === e.Dark ? t(R).neutral.grey1 : t(R).neutral.white }
						},
						children: N
					}, "org-label"),
					...A.map((e) => {
						let t = j === e.id;
						return /* @__PURE__ */ S(u, {
							onClick: () => K(e.id),
							children: /* @__PURE__ */ C(v, {
								direction: "row",
								sx: {
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%"
								},
								children: [/* @__PURE__ */ C(v, {
									direction: "row",
									sx: {
										alignItems: "center",
										gap: 2,
										minWidth: 0,
										flexGrow: 1
									},
									children: [
										/* @__PURE__ */ S(m, {
											sx: {
												width: 24,
												height: 24,
												flexShrink: 0
											},
											children: e.name?.[0] ?? ""
										}),
										/* @__PURE__ */ S(y, {
											variant: "body1",
											title: e.name,
											sx: {
												minWidth: 0,
												maxWidth: w,
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap"
											},
											children: e.name
										}),
										e.badge ? /* @__PURE__ */ S(h, {
											sx: {
												flexShrink: 0,
												display: "flex"
											},
											children: e.badge
										}) : null
									]
								}), t ? /* @__PURE__ */ S(v, {
									color: "primaryColors.accent",
									sx: {
										width: 24,
										height: 24,
										alignItems: "center",
										justifyContent: "center",
										flexShrink: 0
									},
									children: /* @__PURE__ */ S(n, {})
								}) : null]
							})
						}, e.id);
					})
				] : null,
				/* @__PURE__ */ S(_, {}),
				/* @__PURE__ */ S(u, {
					onClick: J,
					children: /* @__PURE__ */ C(v, {
						direction: "row",
						sx: {
							alignItems: "center",
							gap: 2
						},
						children: [/* @__PURE__ */ S(v, {
							sx: {
								width: 20,
								height: 20,
								alignItems: "center"
							},
							children: /* @__PURE__ */ S(i, {})
						}), /* @__PURE__ */ S(y, {
							variant: "body1",
							children: L
						})]
					})
				})
			]
		}) : null] })
	})] });
};
export { T as UserMenu };

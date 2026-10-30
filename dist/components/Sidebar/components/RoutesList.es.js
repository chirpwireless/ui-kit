import { DropdownIconWrapper as e, LinkText as t, ListChildItem as n, ListItem as r, MenuParentItem as i, SidebarItemBox as a } from "../style.es.js";
import { DropdownIcon as o } from "../../../icons/DropdownIcon/index.es.js";
import { useCallback as s, useMemo as c } from "react";
import { Divider as l, Stack as u, useTheme as d } from "@mui/material";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
// src/components/Sidebar/components/RoutesList.tsx
var h = 20, g = {
	width: h,
	height: h,
	alignItems: "center",
	justifyContent: "center",
	"& svg": {
		width: h,
		height: h
	}
}, _ = (e, t) => e?.length ? e.reduce((e, n) => {
	let r = 40;
	return n.children?.length && t[n.name] && (r += n.children.length * 40), e + r;
}, 0) : 0, v = (e) => !!e.children?.length || !e.href, y = (e, t) => !!(t && e.match && e.match.test(t)), b = ({ item: h, activePathname: b, isSidebarCollapsed: x, menuParentIsOpen: S, linkComponent: C, onParentClick: w, onItemClick: T }) => {
	let E = d(), D = s((e, t) => ({
		transition: E.transitions.create("height", {
			easing: E.transitions.easing.sharp,
			duration: E.transitions.duration.enteringScreen
		}),
		height: e ? `${t}px` : 0,
		overflow: "hidden"
	}), [E.transitions]), O = c(() => {
		let e = !!S[h.name];
		if (h.defaultExpanded) return e ? { height: "auto" } : {
			height: 0,
			overflow: "hidden"
		};
		let t = _(h.children, S);
		return D(e, t);
	}, [
		h.children,
		h.name,
		h.defaultExpanded,
		S,
		D
	]), k = (e) => (t) => {
		e.disabled ? t.preventDefault() : (e.onClick?.(), T(e, t));
	};
	return /* @__PURE__ */ m(f, { children: [
		/* @__PURE__ */ p(r, { children: /* @__PURE__ */ p(a, {
			isActive: y(h, b),
			children: !v(h) && h.href ? /* @__PURE__ */ p(C, {
				href: h.href,
				isExternal: h.isExternal,
				isActive: y(h, b),
				disabled: h.disabled,
				onClick: k(h),
				children: /* @__PURE__ */ m(u, {
					direction: "row",
					sx: { alignItems: "center" },
					children: [/* @__PURE__ */ p(u, {
						sx: g,
						children: h.icon
					}), !x && /* @__PURE__ */ p(t, {
						variant: "body1",
						children: h.name
					})]
				})
			}) : /* @__PURE__ */ m(i, {
				onClick: () => w(h),
				children: [/* @__PURE__ */ m(u, {
					direction: "row",
					children: [/* @__PURE__ */ p(u, {
						sx: g,
						children: h.icon
					}), !x && /* @__PURE__ */ p(t, {
						variant: "body1",
						children: h.name
					})]
				}), !x && /* @__PURE__ */ p(e, {
					isOpen: !!S[h.name],
					children: /* @__PURE__ */ p(o, {})
				})]
			})
		}) }),
		/* @__PURE__ */ p(u, {
			sx: [{
				justifyContent: "flex-start",
				width: "100%"
			}, ...Array.isArray(O) ? O : O ? [O] : []],
			direction: "column",
			children: h.children?.map((r) => !v(r) && r.href ? /* @__PURE__ */ m(u, {
				sx: { width: "100%" },
				children: [/* @__PURE__ */ p(n, { children: /* @__PURE__ */ p(a, {
					isActive: y(r, b),
					children: /* @__PURE__ */ p(C, {
						href: r.href,
						isExternal: r.isExternal,
						isActive: y(r, b),
						disabled: r.disabled,
						onClick: k(r),
						children: /* @__PURE__ */ m(u, {
							direction: "row",
							sx: { alignItems: "center" },
							children: [r.icon && /* @__PURE__ */ p(u, {
								sx: g,
								children: r.icon
							}), !x && /* @__PURE__ */ p(t, {
								variant: "body1",
								children: r.name
							})]
						})
					})
				}) }), r.hasDivider ? /* @__PURE__ */ p(l, { sx: { marginTop: 1 } }) : null]
			}, r.id ?? r.name) : /* @__PURE__ */ m(u, {
				sx: { width: "100%" },
				children: [/* @__PURE__ */ p(n, { children: /* @__PURE__ */ p(a, { children: /* @__PURE__ */ p(i, {
					onClick: () => w(r),
					sx: { paddingLeft: 0 },
					children: /* @__PURE__ */ m(u, {
						direction: "row",
						sx: {
							alignItems: "center",
							overflow: "hidden",
							minWidth: 0
						},
						children: [/* @__PURE__ */ p(e, {
							isOpen: !!S[r.name],
							children: /* @__PURE__ */ p(o, {})
						}), !x && /* @__PURE__ */ p(t, {
							variant: "body1",
							sx: { marginLeft: 0 },
							title: r.name,
							children: r.name
						})]
					})
				}) }) }), /* @__PURE__ */ p(u, {
					direction: "column",
					sx: [{
						justifyContent: "flex-start",
						width: "100%"
					}, D(!!S[r.name], (r.children?.length ?? 0) * 40)],
					children: r.children?.map((e) => /* @__PURE__ */ p(n, { children: /* @__PURE__ */ p(a, {
						isActive: y(e, b),
						children: /* @__PURE__ */ p(C, {
							href: e.href ?? "#",
							isExternal: e.isExternal,
							isActive: y(e, b),
							disabled: e.disabled,
							onClick: k(e),
							children: /* @__PURE__ */ m(u, {
								direction: "row",
								sx: {
									alignItems: "center",
									paddingLeft: "22px",
									overflow: "hidden",
									minWidth: 0
								},
								children: [e.icon && /* @__PURE__ */ p(u, {
									sx: g,
									children: e.icon
								}), !x && /* @__PURE__ */ p(t, {
									variant: "body1",
									title: e.name,
									children: e.name
								})]
							})
						})
					}) }, e.id ?? e.name))
				})]
			}, r.id ?? r.name))
		}),
		h.appendSlot?.(!!S[h.name])
	] });
};
export { b as RoutesList };

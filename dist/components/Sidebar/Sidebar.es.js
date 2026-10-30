import { Footer as e, List as t, SidebarDrawer as n } from "./style.es.js";
import { DefaultLink as r } from "./components/DefaultLink.es.js";
import { RoutesList as i } from "./components/RoutesList.es.js";
import { SidebarLogo as a } from "./SidebarLogo.es.js";
import { useCallback as o, useState as s } from "react";
import { Divider as c, Stack as l } from "@mui/material";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
// src/components/Sidebar/Sidebar.tsx
var p = (e) => /* @__PURE__ */ d(r, { ...e }), m = (e) => {
	let t = {};
	return e.forEach((e) => e.forEach((e) => {
		e.defaultExpanded && (t[e.name] = !0);
	})), t;
}, h = ({ groups: r, isOpen: h, isCollapsed: g, onCollapseToggle: _, onItemClick: v, onParentClick: y, activePathname: b, logo: x, logoCollapsed: S, logoHref: C, footerSlot: w, bottomSlot: T, topSlot: E, isMobile: D, linkComponent: O = p }) => {
	let [k, A] = s(() => m(r)), [j, M] = s(!1), N = o((e) => {
		y?.(e), g && _(), A((t) => ({
			...t,
			[e.name]: !t[e.name]
		}));
	}, [
		g,
		_,
		y
	]), P = o((e, t) => {
		v?.(e, t);
	}, [v]), F = o(() => {
		A(m(r)), _();
	}, [r, _]);
	return /* @__PURE__ */ f(n, {
		className: "sidebar",
		variant: "permanent",
		anchor: "left",
		open: h,
		isCollapsed: g,
		onMouseEnter: () => M(!0),
		onMouseLeave: () => M(!1),
		children: [
			D ? E : /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(a, {
				isSidebarCollapsed: g,
				isSidebarHovered: j,
				onToggle: F,
				logo: x,
				logoCollapsed: S,
				logoHref: C
			}), /* @__PURE__ */ d(c, { sx: {
				width: "100%",
				borderColor: "borders.primary",
				mb: 2
			} })] }),
			/* @__PURE__ */ d(t, { children: r.map((e, t) => {
				let n = t === r.length - 1;
				return /* @__PURE__ */ f(l, {
					sx: {
						width: "100%",
						gap: 1,
						mt: n ? "auto" : 0
					},
					children: [e.map((e) => /* @__PURE__ */ d(l, {
						sx: { width: "100%" },
						children: /* @__PURE__ */ d(i, {
							item: e,
							activePathname: b,
							isSidebarCollapsed: g,
							menuParentIsOpen: k,
							linkComponent: O,
							onParentClick: N,
							onItemClick: P
						})
					}, e.id ?? e.name)), n && T ? /* @__PURE__ */ d(l, {
						sx: {
							width: "100%",
							mt: 1,
							gap: 3,
							alignItems: "center"
						},
						children: T
					}) : null]
				}, e[0]?.id ?? e[0]?.name ?? `routes-group-${t}`);
			}) }),
			w ? /* @__PURE__ */ d(e, { children: w }) : null
		]
	});
};
export { h as Sidebar };

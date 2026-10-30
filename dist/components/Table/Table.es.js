import { MobileCards as e } from "./components/MobileCards/index.es.js";
import { Table as t } from "./components/Table/index.es.js";
import { useReactTable as n } from "./hooks/useReactTable.es.js";
import { useMediaQuery as r, useTheme as i } from "@mui/material";
import { jsx as a } from "react/jsx-runtime";
// src/components/Table/Table.tsx
var o = ({ data: e, columns: r, sx: i = {}, isLoading: o, enableSorting: s, defaultSorting: c, expandedRowIndex: l, onRowClick: u, renderExpandableBlock: d, renderEmptyBlock: f, getRowDisableHover: p, getCanExpand: m, page: h }) => {
	let { table: g, rows: _ } = n({
		data: e,
		columns: r,
		enableSorting: s,
		defaultSorting: c
	}), v = _.length > 0 && !!(u || d);
	return /* @__PURE__ */ a(t, {
		table: g,
		rows: _,
		sx: {
			...i,
			cursor: v ? "pointer" : "default"
		},
		isLoading: o,
		enableSorting: s,
		page: h,
		expandedRowIndex: l,
		onRowClick: u,
		renderExpandableBlock: d,
		renderEmptyBlock: f,
		getRowDisableHover: p,
		getCanExpand: m
	});
}, s = ({ data: t, columns: r, isLoading: i, enableSorting: o, defaultSorting: s, onRowClick: c, renderEmptyBlock: l, renderMobileCard: u }) => {
	let { rows: d } = n({
		data: t,
		columns: r,
		enableSorting: o,
		defaultSorting: s
	});
	return /* @__PURE__ */ a(e, {
		rows: d,
		isLoading: i,
		onRowClick: c,
		renderMobileCard: u,
		renderEmptyBlock: l
	});
}, c = (e) => {
	let t = i();
	return r(t.breakpoints.down(e.mobileBreakpoint ?? "sm")) ? /* @__PURE__ */ a(s, { ...e }) : /* @__PURE__ */ a(o, { ...e });
}, l = (e) => e.mobileCards ? /* @__PURE__ */ a(c, { ...e }) : /* @__PURE__ */ a(o, { ...e });
export { l as Table };

import { EmptyBlock as e } from "../../../EmptyBlock/EmptyBlock.es.js";
import { Card as t, CardField as n, CardsList as r, FieldLabel as i, FieldValue as a, GroupLabel as o } from "./style.es.js";
import { Fragment as s } from "react";
import { Skeleton as c } from "@mui/material";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import { flexRender as f } from "@tanstack/react-table";
// src/components/Table/components/MobileCards/index.tsx
var p = 3, m = ({ row: e }) => /* @__PURE__ */ u(l, { children: e.getVisibleCells().map((e) => {
	let t = e.column, r = t.columnDef.meta;
	if (r?.mobileHidden) return null;
	let o = r?.mobileLabel ?? t.columnDef.header;
	return /* @__PURE__ */ d(n, { children: [o ? /* @__PURE__ */ u(i, { children: o }) : null, /* @__PURE__ */ u(a, { children: f(e.column.columnDef.cell, e.getContext()) })] }, e.id);
}) }), h = ({ rows: n, isLoading: i, onRowClick: a, renderMobileCard: l, renderEmptyBlock: f }) => {
	if (i) return /* @__PURE__ */ u(r, { children: Array.from({ length: p }, (e, t) => /* @__PURE__ */ u(c, {
		variant: "rounded",
		height: 96,
		sx: { borderRadius: "12px" }
	}, t)) });
	if (n.length === 0) return f ? f() : /* @__PURE__ */ u(e, {});
	let h = (e) => /* @__PURE__ */ u(t, {
		clickable: !!a,
		onClick: a ? () => a(e.original) : void 0,
		children: l ? l(e.original) : /* @__PURE__ */ u(m, { row: e })
	}, `${e.id}_${e.index}`);
	return /* @__PURE__ */ u(r, { children: n.map((e) => e.subRows.length ? /* @__PURE__ */ d(s, { children: [/* @__PURE__ */ u(o, { children: e.groupingValue }), e.subRows.map(h)] }, `${e.id}_${e.index}`) : h(e)) });
};
export { h as MobileCards };

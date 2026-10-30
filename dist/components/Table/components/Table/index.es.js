import { EmptyBlock as e } from "../../../EmptyBlock/EmptyBlock.es.js";
import { Cell as t } from "../../style.es.js";
import { SkeletonRows as n } from "../SkeletonRows.es.js";
import { TableHead as r } from "../TableHead/index.es.js";
import { TableRow as i } from "../TableRow.es.js";
import { GroupedRow as a, TableWrapper as o } from "./style.es.js";
import { Fragment as s, useEffect as c, useMemo as l, useState as u } from "react";
import { Table as d, TableBody as f } from "@mui/material";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
// src/components/Table/components/Table/index.tsx
var g = ({ table: g, rows: _, sx: v = {}, page: y, isLoading: b, enableSorting: x = !1, expandedRowIndex: S, spacerSize: C, onRowClick: w, renderExpandableBlock: T, renderEmptyBlock: E = () => /* @__PURE__ */ m(e, {}), getRowDisableHover: D, getCanExpand: O }) => {
	let k = g.getVisibleFlatColumns(), [A, j] = u(S ?? null), M = l(() => _.map((e) => ({
		...e,
		isExpanded: A === e.index,
		subRows: e.subRows.map((e) => ({
			...e,
			isExpanded: A === e.index
		}))
	})), [_, A]), N = (e) => {
		w?.(e.original), (!O || O(e.original)) && j(A === e.index ? null : e.index);
	};
	return c(() => {
		j(null);
	}, [y]), c(() => {
		S !== void 0 && j(S);
	}, [S]), /* @__PURE__ */ m(o, {
		sx: {
			height: "100%",
			overflowY: "auto",
			...v
		},
		children: M.length === 0 && b === !1 && E ? E() : /* @__PURE__ */ m(d, {
			stickyHeader: !0,
			children: b ? /* @__PURE__ */ m(n, { columns: k }) : /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(r, {
				columns: k,
				enableSorting: x,
				sortingState: g.getState().sorting
			}), /* @__PURE__ */ h(f, { children: [M.map((e) => e.subRows.length ? /* @__PURE__ */ h(s, { children: [/* @__PURE__ */ m(a, { children: /* @__PURE__ */ m(t, { children: e.groupingValue }) }), e.subRows.map((e) => /* @__PURE__ */ m(i, {
				row: e,
				table: g,
				isExpanded: e.isExpanded,
				disableHover: D?.(e.original),
				onClick: N,
				renderExpandableBlock: T
			}, `${e.id}_${e.index}`))] }, `${e.id}_${e.index}`) : /* @__PURE__ */ m(i, {
				sx: e.sx,
				row: e,
				virtualIndex: e.virtualIndex,
				measureRef: e.measureRef,
				table: g,
				isExpanded: e.isExpanded,
				disableHover: D?.(e.original),
				onClick: N,
				renderExpandableBlock: T
			}, `${e.id}_${e.index}`)), C ? /* @__PURE__ */ m("tr", {
				style: { height: `${C}px` },
				children: /* @__PURE__ */ m("td", { colSpan: k.length })
			}) : null] })] })
		})
	});
};
export { g as Table };

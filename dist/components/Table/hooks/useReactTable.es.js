import { useState as e } from "react";
import { getCoreRowModel as t, getGroupedRowModel as n, getSortedRowModel as r, useReactTable as i } from "@tanstack/react-table";
// src/components/Table/hooks/useReactTable.ts
var a = (e) => "accessorKey" in e && e.accessorKey ? e.accessorKey : typeof e.header == "string" ? e.header : e.id, o = (e, t) => "id" in e ? e.id : "timestamp" in e ? e.timestamp : t.toString(), s = ({ data: s, columns: c, enableSorting: l = !1, defaultSorting: u = [] }) => {
	let [d, f] = e(u), p = i({
		data: s,
		columns: c,
		state: { sorting: d },
		initialState: {
			columnVisibility: c.reduce((e, t) => {
				let n = a(t);
				return t.meta?.isVisible === !1 && n ? {
					...e,
					[n]: !1
				} : e;
			}, {}),
			grouping: c.filter((e) => e.meta?.isGrouping).map((e) => a(e) ?? "")
		},
		enableSorting: l,
		autoResetPageIndex: !1,
		getRowId: o,
		onSortingChange: f,
		getCoreRowModel: t(),
		getSortedRowModel: r(),
		getGroupedRowModel: n()
	});
	return {
		table: p,
		rows: p.getRowModel().rows
	};
};
export { s as useReactTable };

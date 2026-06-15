import { useReactTable as p, getGroupedRowModel as u, getSortedRowModel as f, getCoreRowModel as c } from "@tanstack/react-table";
import { useState as m } from "react";
const d = (e) => "accessorKey" in e && e.accessorKey ? e.accessorKey : typeof e.header == "string" ? e.header : e.id, w = (e, o) => (
  // @ts-expect-error runtime rows carry id/timestamp keys that the generic TData type cannot express
  "id" in e ? e.id : "timestamp" in e ? e.timestamp : o.toString()
), b = ({ data: e, columns: o, enableSorting: n = !1, defaultSorting: g = [] }) => {
  const [l, R] = m(g), s = p({
    data: e,
    // header may be a ReactNode for our tables (rendered directly in TableHead), which is wider than ColumnDef's header
    columns: o,
    state: {
      sorting: l
    },
    initialState: {
      columnVisibility: o.reduce((t, r) => {
        var a;
        const i = d(r);
        return ((a = r.meta) == null ? void 0 : a.isVisible) === !1 && i ? { ...t, [i]: !1 } : t;
      }, {}),
      grouping: o.filter((t) => {
        var r;
        return (r = t.meta) == null ? void 0 : r.isGrouping;
      }).map((t) => d(t) ?? "")
    },
    enableSorting: n,
    autoResetPageIndex: !1,
    getRowId: w,
    onSortingChange: R,
    getCoreRowModel: c(),
    getSortedRowModel: f(),
    getGroupedRowModel: u()
  });
  return {
    table: s,
    rows: s.getRowModel().rows
  };
};
export {
  b as useReactTable
};

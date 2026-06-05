import { useReactTable as p, getGroupedRowModel as c, getSortedRowModel as m, getCoreRowModel as u } from "../../../index-C88AG_8U.js";
import { useState as w } from "react";
const d = (e) => "accessorKey" in e && e.accessorKey ? e.accessorKey : e.header || e.id, M = (e, o) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  "id" in e ? e.id : "timestamp" in e ? e.timestamp : o.toString()
), f = ({ data: e, columns: o, enableSorting: g = !1, defaultSorting: n = [] }) => {
  const [l, R] = w(n), i = p({
    data: e,
    columns: o,
    state: {
      sorting: l
    },
    initialState: {
      columnVisibility: o.reduce((t, s) => {
        var a;
        const r = d(s);
        return ((a = s.meta) == null ? void 0 : a.isVisible) === !1 && r ? { ...t, [r]: !1 } : t;
      }, {}),
      grouping: o.filter((t) => {
        var s;
        return (s = t.meta) == null ? void 0 : s.isGrouping;
      }).map((t) => d(t) ?? "")
    },
    enableSorting: g,
    getRowId: M,
    onSortingChange: R,
    getCoreRowModel: u(),
    getSortedRowModel: m(),
    getGroupedRowModel: c()
  });
  return {
    table: i,
    rows: i.getRowModel().rows
  };
};
export {
  f as useReactTable
};

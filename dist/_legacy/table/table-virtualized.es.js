import { jsxRuntimeExports as _ } from "../../jsx-runtime-BgepH7Pb.js";
import { useVirtualizer as $ } from "@tanstack/react-virtual";
import { useRef as j, useMemo as D, useCallback as Z, useEffect as C } from "react";
import { TableComponent as F } from "./components/table-component/index.es.js";
import { useReactTable as O } from "./hooks/use-react-table.es.js";
const U = 40, Y = 50, K = ({
  data: E,
  columns: T,
  sx: S = {},
  isLoading: l,
  enableSorting: u,
  defaultSorting: g,
  expandedRowIndex: z,
  hasNextPage: p,
  estimateSize: b = U,
  onBottomReached: s,
  onRowClick: m,
  renderEmptyBlock: V,
  renderExpandableBlock: h,
  onRowDoubleClick: I,
  columnWidths: w
}) => {
  const r = j(null), { table: A, rows: o } = O({
    data: E,
    columns: T,
    enableSorting: u,
    defaultSorting: g
  }), f = $({
    count: o.length,
    estimateSize: () => b,
    getScrollElement: () => (r == null ? void 0 : r.current) ?? null,
    overscan: 5
  }), e = f.getVirtualItems(), H = f.getTotalSize() + Y, a = D(
    () => e.map((t) => {
      const n = o[t.index], c = {
        height: `${t.size}px`
      };
      return { ...n, sx: c };
    }),
    [e, o]
  ), i = Z(
    (t) => {
      if (t) {
        const { scrollHeight: n, scrollTop: c, clientHeight: x } = t;
        n - c - x < x - 100 && !l && p && (s == null || s());
      }
    },
    [s, l, p]
  );
  C(() => {
    i(r.current);
  }, [i]);
  const M = (() => {
    var t;
    return { marginTop: `${(t = e == null ? void 0 : e[0]) == null ? void 0 : t.start}px` };
  })();
  return /* @__PURE__ */ _.jsx(
    F,
    {
      isVirtualized: !0,
      table: A,
      columnWidths: w,
      rows: a,
      sx: {
        ...S,
        height: a.length ? `${H}px` : "100%",
        cursor: m ? "pointer" : "default",
        overflowY: "initial"
      },
      isLoading: l,
      enableSorting: u,
      tableSx: M,
      expandedRowIndex: z,
      onRowClick: m,
      onRowDoubleClick: I,
      renderEmptyBlock: V,
      renderExpandableBlock: h,
      onScroll: (t) => i(t.target),
      ref: r
    }
  );
};
export {
  K as TableVirtualized
};

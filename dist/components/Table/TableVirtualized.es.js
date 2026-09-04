import { jsxRuntimeExports as w } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as H } from "@mui/material";
import { useVirtualizer as O } from "@tanstack/react-virtual";
import { useRef as _, useMemo as $, useCallback as k, useEffect as C } from "react";
import { Table as D } from "./components/Table/index.es.js";
import { useReactTable as F } from "./hooks/useReactTable.es.js";
const U = 40, K = ({
  data: T,
  columns: E,
  sx: S = {},
  isLoading: u,
  enableSorting: p,
  defaultSorting: b,
  expandedRowIndex: z,
  hasNextPage: x,
  estimateSize: i = U,
  onBottomReached: s,
  onRowClick: h,
  renderEmptyBlock: d,
  renderExpandableBlock: I
}) => {
  const e = _(null), { table: M, rows: a } = F({
    data: T,
    columns: E,
    enableSorting: p,
    defaultSorting: b
  }), f = O({
    count: a.length,
    estimateSize: () => i,
    getScrollElement: () => (e == null ? void 0 : e.current) ?? null,
    overscan: 5
  }), { measureElement: g } = f, t = f.getVirtualItems(), V = t.length ? t[t.length - 1].end - t[0].start : 0, j = Math.max(f.getTotalSize() - V, 0), o = $(() => {
    var l;
    const r = ((l = t[0]) == null ? void 0 : l.start) ?? 0;
    return t.map((n) => {
      const c = a[n.index], A = {
        height: `${i}px`,
        transform: `translateY(${r}px)`
      };
      return { ...c, sx: A, virtualIndex: n.index, measureRef: g };
    });
  }, [t, a, i, g]), m = k(
    (r) => {
      if (r) {
        const { scrollHeight: l, scrollTop: n, clientHeight: c } = r;
        l - n - c < c - 100 && !u && x && (s == null || s());
      }
    },
    [s, u, x]
  ), v = o.length > 0 && !!h;
  return C(() => {
    m(e.current);
  }, [m]), /* @__PURE__ */ w.jsx(
    H,
    {
      ref: e,
      onScroll: (r) => m(r.target),
      sx: {
        height: "100%",
        overflow: "auto"
      },
      children: /* @__PURE__ */ w.jsx(
        D,
        {
          table: M,
          rows: o,
          spacerSize: o.length ? j : void 0,
          sx: {
            ...S,
            height: o.length ? "auto" : "100%",
            cursor: v ? "pointer" : "default"
          },
          isLoading: u,
          enableSorting: p,
          expandedRowIndex: z,
          onRowClick: h,
          renderEmptyBlock: d,
          renderExpandableBlock: I
        }
      )
    }
  );
};
export {
  K as TableVirtualized
};

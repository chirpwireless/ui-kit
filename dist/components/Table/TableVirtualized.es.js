import { jsxRuntimeExports as E } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as A } from "@mui/material";
import { useVirtualizer as H } from "@tanstack/react-virtual";
import { useRef as M, useMemo as _, useCallback as $, useEffect as D } from "react";
import { Table as Y } from "./components/Table/index.es.js";
import { useReactTable as Z } from "./hooks/useReactTable.es.js";
const F = 40, O = 50, G = ({
  data: h,
  columns: T,
  sx: g = {},
  isLoading: o,
  enableSorting: u,
  defaultSorting: z,
  expandedRowIndex: S,
  hasNextPage: f,
  estimateSize: b = F,
  onBottomReached: e,
  onRowClick: p,
  renderEmptyBlock: w,
  renderExpandableBlock: I
}) => {
  const r = M(null), { table: V, rows: l } = Z({
    data: h,
    columns: T,
    enableSorting: u,
    defaultSorting: z
  }), m = H({
    count: l.length,
    estimateSize: () => b,
    getScrollElement: () => (r == null ? void 0 : r.current) ?? null,
    overscan: 5
  }), x = m.getVirtualItems(), j = m.getTotalSize() + O, a = _(
    () => x.map((t, i) => {
      const n = l[t.index], s = {
        height: `${t.size}px`,
        transform: `translateY(${t.start - i * t.size}px)`
      };
      return { ...n, sx: s };
    }),
    [x, l]
  ), c = $(
    (t) => {
      if (t) {
        const { scrollHeight: i, scrollTop: n, clientHeight: s } = t;
        i - n - s < s - 100 && !o && f && (e == null || e());
      }
    },
    [e, o, f]
  );
  return D(() => {
    c(r.current);
  }, [c]), /* @__PURE__ */ E.jsx(
    A,
    {
      height: "100%",
      overflow: "auto",
      ref: r,
      onScroll: (t) => c(t.target),
      children: /* @__PURE__ */ E.jsx(
        Y,
        {
          table: V,
          rows: a,
          sx: {
            ...g,
            height: a.length ? `${j}px` : "100%",
            overflowY: "hidden",
            cursor: p ? "pointer" : "default"
          },
          isLoading: o,
          enableSorting: u,
          expandedRowIndex: S,
          onRowClick: p,
          renderEmptyBlock: w,
          renderExpandableBlock: I
        }
      )
    }
  );
};
export {
  G as TableVirtualized
};

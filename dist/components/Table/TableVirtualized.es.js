import { jsxRuntimeExports as h } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as H } from "@mui/material";
import { useVirtualizer as M } from "@tanstack/react-virtual";
import { useRef as _, useMemo as $, useCallback as D, useEffect as Y } from "react";
import { Table as Z } from "./components/Table/index.es.js";
import { useReactTable as k } from "./hooks/useReactTable.es.js";
const C = 40, F = 50, J = ({
  data: E,
  columns: g,
  sx: T = {},
  isLoading: o,
  enableSorting: f,
  defaultSorting: z,
  expandedRowIndex: S,
  hasNextPage: p,
  estimateSize: b = C,
  onBottomReached: e,
  onRowClick: m,
  renderEmptyBlock: w,
  renderExpandableBlock: I
}) => {
  const r = _(null), { table: V, rows: l } = k({
    data: E,
    columns: g,
    enableSorting: f,
    defaultSorting: z
  }), a = M({
    count: l.length,
    estimateSize: () => b,
    getScrollElement: () => (r == null ? void 0 : r.current) ?? null,
    overscan: 5
  }), x = a.getVirtualItems(), j = a.getTotalSize() + F, c = $(
    () => x.map((t, i) => {
      const u = l[t.index], s = {
        height: `${t.size}px`,
        transform: `translateY(${t.start - i * t.size}px)`
      };
      return { ...u, sx: s };
    }),
    [x, l]
  ), n = D(
    (t) => {
      if (t) {
        const { scrollHeight: i, scrollTop: u, clientHeight: s } = t;
        i - u - s < s - 100 && !o && p && (e == null || e());
      }
    },
    [e, o, p]
  ), A = c.length > 0 && !!m;
  return Y(() => {
    n(r.current);
  }, [n]), /* @__PURE__ */ h.jsx(
    H,
    {
      ref: r,
      onScroll: (t) => n(t.target),
      sx: {
        height: "100%",
        overflow: "auto"
      },
      children: /* @__PURE__ */ h.jsx(
        Z,
        {
          table: V,
          rows: c,
          sx: {
            ...T,
            height: c.length ? `${j}px` : "100%",
            overflowY: "hidden",
            cursor: A ? "pointer" : "default"
          },
          isLoading: o,
          enableSorting: f,
          expandedRowIndex: S,
          onRowClick: m,
          renderEmptyBlock: w,
          renderExpandableBlock: I
        }
      )
    }
  );
};
export {
  J as TableVirtualized
};

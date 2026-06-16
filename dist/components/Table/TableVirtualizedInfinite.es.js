import { jsxRuntimeExports as g } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as H } from "@mui/material";
import { useVirtualizer as S } from "@tanstack/react-virtual";
import { useRef as _, useMemo as $, useCallback as E, useEffect as C } from "react";
import { useDebounceCallback as L } from "../../hooks/use-debounce-callback.es.js";
import { Table as R } from "./components/Table/index.es.js";
import { useReactTable as Y } from "./hooks/useReactTable.es.js";
const Z = 60, y = 50, K = ({
  data: T,
  columns: k,
  sx: w = {},
  isLoading: i,
  enableSorting: a,
  defaultSorting: z,
  expandedRowIndex: I,
  hasNextPage: m,
  estimateSize: h = Z,
  onBottomReached: M,
  onRowClick: p,
  renderEmptyBlock: A,
  renderExpandableBlock: V,
  rowSx: e
}) => {
  const o = _(null), s = L(M, 300), { table: j, rows: u } = Y({
    data: T,
    columns: k,
    enableSorting: a,
    defaultSorting: z
  }), b = S({
    count: u.length,
    estimateSize: () => h,
    getScrollElement: () => (o == null ? void 0 : o.current) ?? null,
    overscan: 5
  }), f = b.getVirtualItems(), v = b.getTotalSize() + y * 2 + h * 2, d = $(
    () => f.map((t, c) => {
      const n = u[t.index], r = {
        height: `${t.size}px`,
        transform: `translateY(${t.start - c * t.size}px)`
      }, x = e == null ? void 0 : e(n);
      return { ...n, sx: { ...r, ...x || {} } };
    }),
    [f, u, e]
  ), l = E(
    (t) => {
      if (!t || i || !m) return;
      const { scrollHeight: c, scrollTop: n, clientHeight: r } = t;
      (c - n - r < r * 0.3 || c <= r) && (s == null || s());
    },
    [s, i, m]
  );
  C(() => {
    l(o.current);
  }, [l]);
  const D = E(
    (t) => {
      l(t.target);
    },
    [l]
  );
  return /* @__PURE__ */ g.jsx(
    H,
    {
      ref: o,
      onScroll: D,
      sx: {
        height: "100%",
        overflow: "auto",
        position: "relative",
        borderRadius: "12px",
        width: "100%",
        overflowX: "hidden",
        "::-webkit-scrollbar": {
          width: "3px"
        },
        "::-webkit-scrollbar-thumb": {
          borderRadius: "4px"
        },
        "&:hover": {
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "neutral.grey4"
          }
        }
      },
      children: /* @__PURE__ */ g.jsx(
        R,
        {
          table: j,
          rows: d,
          sx: {
            ...w,
            height: d.length ? `${v}px` : "100%",
            overflowY: "hidden",
            cursor: p ? "pointer" : "default"
          },
          isLoading: i,
          enableSorting: a,
          expandedRowIndex: I,
          onRowClick: p,
          renderEmptyBlock: A,
          renderExpandableBlock: V
        }
      )
    }
  );
};
export {
  Z as DEFAULT_ESTIMATE_SIZE,
  K as TableVirtualizedInfinite
};

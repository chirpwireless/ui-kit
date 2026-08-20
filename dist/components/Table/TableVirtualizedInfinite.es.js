import { jsxRuntimeExports as g } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as H } from "@mui/material";
import { useVirtualizer as R } from "@tanstack/react-virtual";
import { useRef as S, useMemo as _, useCallback as E, useEffect as $ } from "react";
import { useDebounceCallback as L } from "../../hooks/use-debounce-callback.es.js";
import { Table as Y } from "./components/Table/index.es.js";
import { useReactTable as Z } from "./hooks/useReactTable.es.js";
const y = 60, B = 50, P = ({
  data: T,
  columns: k,
  sx: w = {},
  isLoading: i,
  enableSorting: h,
  defaultSorting: z,
  expandedRowIndex: I,
  hasNextPage: m,
  estimateSize: p = y,
  onBottomReached: M,
  onRowClick: b,
  renderEmptyBlock: A,
  renderExpandableBlock: V,
  rowSx: e
}) => {
  const t = S(null), s = L(M, 300), { table: j, rows: a } = Z({
    data: T,
    columns: k,
    enableSorting: h,
    defaultSorting: z
  }), f = R({
    count: a.length,
    estimateSize: () => p,
    getScrollElement: () => (t == null ? void 0 : t.current) ?? null,
    overscan: 5
  }), d = f.getVirtualItems(), v = f.getTotalSize() + B * 2 + p * 2, u = _(
    () => d.map((o, n) => {
      const c = a[o.index], r = {
        height: `${o.size}px`,
        transform: `translateY(${o.start - n * o.size}px)`
      }, x = e == null ? void 0 : e(c);
      return { ...c, sx: { ...r, ...x || {} } };
    }),
    [d, a, e]
  ), l = E(
    (o) => {
      if (!o || i || !m) return;
      const { scrollHeight: n, scrollTop: c, clientHeight: r } = o;
      (n - c - r < r * 0.3 || n <= r) && (s == null || s());
    },
    [s, i, m]
  );
  $(() => {
    l(t.current);
  }, [l]);
  const C = E(
    (o) => {
      l(o.target);
    },
    [l]
  ), D = u.length > 0 && !!b;
  return /* @__PURE__ */ g.jsx(
    H,
    {
      ref: t,
      onScroll: C,
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
        Y,
        {
          table: j,
          rows: u,
          sx: {
            ...w,
            height: u.length ? `${v}px` : "100%",
            overflowY: "hidden",
            cursor: D ? "pointer" : "default"
          },
          isLoading: i,
          enableSorting: h,
          expandedRowIndex: I,
          onRowClick: b,
          renderEmptyBlock: A,
          renderExpandableBlock: V
        }
      )
    }
  );
};
export {
  y as DEFAULT_ESTIMATE_SIZE,
  P as TableVirtualizedInfinite
};

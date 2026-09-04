import { jsxRuntimeExports as w } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as L } from "@mui/material";
import { useVirtualizer as _ } from "@tanstack/react-virtual";
import { useRef as $, useMemo as y, useCallback as T, useEffect as B } from "react";
import { useDebounceCallback as F } from "../../hooks/use-debounce-callback.es.js";
import { Table as U } from "./components/Table/index.es.js";
import { useReactTable as X } from "./hooks/useReactTable.es.js";
const Y = 60, Q = ({
  data: k,
  columns: E,
  sx: v = {},
  isLoading: u,
  enableSorting: p,
  defaultSorting: M,
  expandedRowIndex: z,
  hasNextPage: f,
  estimateSize: h = Y,
  onBottomReached: I,
  onRowClick: b,
  renderEmptyBlock: R,
  renderExpandableBlock: V,
  rowSx: l
}) => {
  const r = $(null), n = F(I, 300), { table: j, rows: m } = X({
    data: k,
    columns: E,
    enableSorting: p,
    defaultSorting: M
  }), d = _({
    count: m.length,
    estimateSize: () => h,
    getScrollElement: () => (r == null ? void 0 : r.current) ?? null,
    overscan: 5
  }), { measureElement: x } = d, t = d.getVirtualItems(), A = t.length ? t[t.length - 1].end - t[0].start : 0, C = Math.max(d.getTotalSize() - A, 0), c = y(() => {
    var s;
    const e = ((s = t[0]) == null ? void 0 : s.start) ?? 0;
    return t.map((i) => {
      const o = m[i.index], g = {
        height: `${h}px`,
        transform: `translateY(${e}px)`
      }, H = l == null ? void 0 : l(o);
      return {
        ...o,
        sx: { ...g, ...H || {} },
        virtualIndex: i.index,
        measureRef: x
      };
    });
  }, [t, m, l, h, x]), a = T(
    (e) => {
      if (!e || u || !f) return;
      const { scrollHeight: s, scrollTop: i, clientHeight: o } = e;
      (s - i - o < o * 0.3 || s <= o) && (n == null || n());
    },
    [n, u, f]
  );
  B(() => {
    a(r.current);
  }, [a]);
  const S = T(
    (e) => {
      a(e.target);
    },
    [a]
  ), D = c.length > 0 && !!b;
  return /* @__PURE__ */ w.jsx(
    L,
    {
      ref: r,
      onScroll: S,
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
      children: /* @__PURE__ */ w.jsx(
        U,
        {
          table: j,
          rows: c,
          spacerSize: c.length ? C : void 0,
          sx: {
            ...v,
            height: c.length ? "auto" : "100%",
            cursor: D ? "pointer" : "default"
          },
          isLoading: u,
          enableSorting: p,
          expandedRowIndex: z,
          onRowClick: b,
          renderEmptyBlock: R,
          renderExpandableBlock: V
        }
      )
    }
  );
};
export {
  Y as DEFAULT_ESTIMATE_SIZE,
  Q as TableVirtualizedInfinite
};

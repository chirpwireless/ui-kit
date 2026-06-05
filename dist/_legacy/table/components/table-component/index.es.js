import { jsxRuntimeExports as s } from "../../../../jsx-runtime-BgepH7Pb.js";
import { useState as v, useMemo as H, useEffect as u, Fragment as V } from "react";
import { Table as C, TableBody as G } from "@mui/material";
import { EmptyFallback as M } from "../../../empty-fallback/index.es.js";
import { SkeletonRows as Y } from "../skeleton-rows.es.js";
import { TableHead as q } from "../table-head/index.es.js";
import { TableRow as T } from "../table-row.es.js";
import { TableWrapper as z, GroupedRow as A } from "./style.es.js";
import { Cell as I } from "../../style.es.js";
const Z = ({
  table: n,
  rows: m,
  sx: $ = {},
  page: E,
  isLoading: o,
  headerSx: b,
  enableSorting: y = !1,
  expandedRowIndex: t,
  onRowClick: a,
  columnWidths: x,
  onRowDoubleClick: d,
  tableSx: F,
  renderExpandableBlock: g,
  renderEmptyBlock: j = () => /* @__PURE__ */ s.jsx(M, {}),
  onScroll: S,
  ref: _
}) => {
  const p = n.getVisibleFlatColumns(), [r, l] = v(t ?? null), f = H(
    () => m.map((e) => ({
      ...e,
      isExpanded: r === e.index,
      subRows: e.subRows.map((i) => ({ ...i, isExpanded: r === i.index }))
    })),
    [m, r]
  ), h = (e) => {
    a == null || a(e.original), l(r === e.index ? null : e.index);
  }, c = (e) => {
    d == null || d(e.original);
  };
  return u(() => {
    l(null);
  }, [E]), u(() => {
    t !== void 0 && l(t);
  }, [t]), /* @__PURE__ */ s.jsx(
    z,
    {
      ref: _,
      sx: {
        ...$,
        overflowY: "auto",
        height: "100%"
      },
      onScroll: S,
      children: f.length === 0 && o === !1 && j ? j() : /* @__PURE__ */ s.jsx(C, { stickyHeader: !0, sx: { paddingRight: "12px", tableLayout: "fixed", width: "100%", ...F }, children: o ? /* @__PURE__ */ s.jsx(Y, { columns: p }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        x != null && x.length ? /* @__PURE__ */ s.jsx("colgroup", { children: x.map((e) => /* @__PURE__ */ s.jsx("col", { style: { width: e } })) }) : null,
        /* @__PURE__ */ s.jsx(
          q,
          {
            columns: p,
            enableSorting: y,
            sortingState: n.getState().sorting,
            headerSx: b
          }
        ),
        /* @__PURE__ */ s.jsx(G, { children: f.map(
          (e) => e.subRows.length ? /* @__PURE__ */ s.jsxs(V, { children: [
            /* @__PURE__ */ s.jsx(A, { children: /* @__PURE__ */ s.jsx(I, { children: e.groupingValue }) }),
            e.subRows.map((i) => /* @__PURE__ */ s.jsx(
              T,
              {
                row: i,
                table: n,
                isExpanded: i.isExpanded,
                onDoubleClick: c,
                onClick: h,
                renderExpandableBlock: g
              },
              `${i.id}_${i.index}`
            ))
          ] }, `${e.id}_${e.index}`) : /* @__PURE__ */ s.jsx(
            T,
            {
              sx: e.sx,
              row: e,
              table: n,
              columns: p,
              isExpanded: e.isExpanded,
              onDoubleClick: c,
              onClick: h,
              renderExpandableBlock: g
            },
            `${e.id}_${e.index}`
          )
        ) })
      ] }) })
    }
  );
};
export {
  Z as TableComponent
};

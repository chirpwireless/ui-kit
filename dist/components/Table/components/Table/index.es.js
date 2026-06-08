import { jsxRuntimeExports as s } from "../../../../jsx-runtime-BgepH7Pb.js";
import { Table as S, TableBody as F } from "@mui/material";
import { useState as _, useMemo as y, useEffect as o, Fragment as V } from "react";
import { EmptyBlock as G } from "../../../EmptyBlock/EmptyBlock.es.js";
import { SkeletonRows as M } from "../SkeletonRows.es.js";
import { TableHead as W } from "../TableHead/index.es.js";
import { TableRow as T } from "../TableRow.es.js";
import { TableWrapper as Y, GroupedRow as k } from "./style.es.js";
import { Cell as q } from "../../style.es.js";
const P = ({
  table: e,
  rows: r,
  sx: $ = {},
  page: g,
  isLoading: l,
  enableSorting: E = !1,
  expandedRowIndex: x,
  onRowClick: t,
  renderExpandableBlock: a,
  renderEmptyBlock: c = () => /* @__PURE__ */ s.jsx(G, {}),
  getRowDisableHover: d,
  getCanExpand: f
}) => {
  const j = e.getVisibleFlatColumns(), [m, p] = _(x ?? null), h = y(
    () => r.map((i) => ({
      ...i,
      isExpanded: m === i.index,
      subRows: i.subRows.map((n) => ({ ...n, isExpanded: m === n.index }))
    })),
    [r, m]
  ), u = (i) => {
    t == null || t(i.original), !(f && !f(i.original)) && p(m === i.index ? null : i.index);
  };
  return o(() => {
    p(null);
  }, [g]), o(() => {
    x !== void 0 && p(x);
  }, [x]), /* @__PURE__ */ s.jsx(Y, { sx: { height: "100%", overflowY: "auto", ...$ }, children: h.length === 0 && l === !1 && c ? c() : /* @__PURE__ */ s.jsx(S, { stickyHeader: !0, children: l ? /* @__PURE__ */ s.jsx(M, { columns: j }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      W,
      {
        columns: j,
        enableSorting: E,
        sortingState: e.getState().sorting
      }
    ),
    /* @__PURE__ */ s.jsx(F, { children: h.map(
      (i) => i.subRows.length ? /* @__PURE__ */ s.jsxs(V, { children: [
        /* @__PURE__ */ s.jsx(k, { children: /* @__PURE__ */ s.jsx(q, { children: i.groupingValue }) }),
        i.subRows.map((n) => /* @__PURE__ */ s.jsx(
          T,
          {
            row: n,
            table: e,
            isExpanded: n.isExpanded,
            disableHover: d == null ? void 0 : d(n.original),
            onClick: u,
            renderExpandableBlock: a
          },
          `${n.id}_${n.index}`
        ))
      ] }, `${i.id}_${i.index}`) : /* @__PURE__ */ s.jsx(
        T,
        {
          sx: i.sx,
          row: i,
          table: e,
          isExpanded: i.isExpanded,
          disableHover: d == null ? void 0 : d(i.original),
          onClick: u,
          renderExpandableBlock: a
        },
        `${i.id}_${i.index}`
      )
    ) })
  ] }) }) });
};
export {
  P as Table
};

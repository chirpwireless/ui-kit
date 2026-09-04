import { jsxRuntimeExports as i } from "../../../../jsx-runtime-BgepH7Pb.js";
import { Table as y, TableBody as F } from "@mui/material";
import { useState as _, useMemo as I, useEffect as o, Fragment as V } from "react";
import { EmptyBlock as G } from "../../../EmptyBlock/EmptyBlock.es.js";
import { SkeletonRows as M } from "../SkeletonRows.es.js";
import { TableHead as W } from "../TableHead/index.es.js";
import { TableRow as T } from "../TableRow.es.js";
import { TableWrapper as Y, GroupedRow as k } from "./style.es.js";
import { Cell as q } from "../../style.es.js";
const U = ({
  table: x,
  rows: p,
  sx: g = {},
  page: E,
  isLoading: a,
  enableSorting: S = !1,
  expandedRowIndex: d,
  spacerSize: u,
  onRowClick: m,
  renderExpandableBlock: h,
  renderEmptyBlock: f = () => /* @__PURE__ */ i.jsx(G, {}),
  getRowDisableHover: e,
  getCanExpand: j
}) => {
  const l = x.getVisibleFlatColumns(), [t, r] = _(d ?? null), c = I(
    () => p.map((s) => ({
      ...s,
      isExpanded: t === s.index,
      subRows: s.subRows.map((n) => ({ ...n, isExpanded: t === n.index }))
    })),
    [p, t]
  ), $ = (s) => {
    m == null || m(s.original), !(j && !j(s.original)) && r(t === s.index ? null : s.index);
  };
  return o(() => {
    r(null);
  }, [E]), o(() => {
    d !== void 0 && r(d);
  }, [d]), /* @__PURE__ */ i.jsx(Y, { sx: { height: "100%", overflowY: "auto", ...g }, children: c.length === 0 && a === !1 && f ? f() : /* @__PURE__ */ i.jsx(y, { stickyHeader: !0, children: a ? /* @__PURE__ */ i.jsx(M, { columns: l }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      W,
      {
        columns: l,
        enableSorting: S,
        sortingState: x.getState().sorting
      }
    ),
    /* @__PURE__ */ i.jsxs(F, { children: [
      c.map(
        (s) => s.subRows.length ? /* @__PURE__ */ i.jsxs(V, { children: [
          /* @__PURE__ */ i.jsx(k, { children: /* @__PURE__ */ i.jsx(q, { children: s.groupingValue }) }),
          s.subRows.map((n) => /* @__PURE__ */ i.jsx(
            T,
            {
              row: n,
              table: x,
              isExpanded: n.isExpanded,
              disableHover: e == null ? void 0 : e(n.original),
              onClick: $,
              renderExpandableBlock: h
            },
            `${n.id}_${n.index}`
          ))
        ] }, `${s.id}_${s.index}`) : /* @__PURE__ */ i.jsx(
          T,
          {
            sx: s.sx,
            row: s,
            virtualIndex: s.virtualIndex,
            measureRef: s.measureRef,
            table: x,
            isExpanded: s.isExpanded,
            disableHover: e == null ? void 0 : e(s.original),
            onClick: $,
            renderExpandableBlock: h
          },
          `${s.id}_${s.index}`
        )
      ),
      u ? /* @__PURE__ */ i.jsx("tr", { style: { height: `${u}px` }, children: /* @__PURE__ */ i.jsx("td", { colSpan: l.length }) }) : null
    ] })
  ] }) }) });
};
export {
  U as Table
};

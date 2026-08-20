import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as C, useMediaQuery as h } from "@mui/material";
import { MobileCards as w } from "./components/MobileCards/index.es.js";
import { Table as R } from "./components/Table/index.es.js";
import { useReactTable as u } from "./hooks/useReactTable.es.js";
const c = ({
  data: e,
  columns: s,
  sx: t = {},
  isLoading: a,
  enableSorting: r,
  defaultSorting: m,
  expandedRowIndex: l,
  onRowClick: i,
  renderExpandableBlock: n,
  renderEmptyBlock: x,
  getRowDisableHover: T,
  getCanExpand: f,
  page: j
}) => {
  const { table: d, rows: b } = u({
    data: e,
    columns: s,
    enableSorting: r,
    defaultSorting: m
  }), M = b.length > 0 && !!(i || n);
  return /* @__PURE__ */ o.jsx(
    R,
    {
      table: d,
      rows: b,
      sx: { ...t, cursor: M ? "pointer" : "default" },
      isLoading: a,
      enableSorting: r,
      page: j,
      expandedRowIndex: l,
      onRowClick: i,
      renderExpandableBlock: n,
      renderEmptyBlock: x,
      getRowDisableHover: T,
      getCanExpand: f
    }
  );
}, p = ({
  data: e,
  columns: s,
  isLoading: t,
  enableSorting: a,
  defaultSorting: r,
  onRowClick: m,
  renderEmptyBlock: l,
  renderMobileCard: i
}) => {
  const { rows: n } = u({
    data: e,
    columns: s,
    enableSorting: a,
    defaultSorting: r
  });
  return /* @__PURE__ */ o.jsx(
    w,
    {
      rows: n,
      isLoading: t,
      onRowClick: m,
      renderMobileCard: i,
      renderEmptyBlock: l
    }
  );
}, k = (e) => {
  const s = C();
  return h(s.breakpoints.down(e.mobileBreakpoint ?? "sm")) ? /* @__PURE__ */ o.jsx(p, { ...e }) : /* @__PURE__ */ o.jsx(c, { ...e });
}, q = (e) => e.mobileCards ? /* @__PURE__ */ o.jsx(k, { ...e }) : /* @__PURE__ */ o.jsx(c, { ...e });
export {
  q as Table
};

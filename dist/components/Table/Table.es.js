import { jsxRuntimeExports as s } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as M, useMediaQuery as C } from "@mui/material";
import { MobileCards as h } from "./components/MobileCards/index.es.js";
import { Table as p } from "./components/Table/index.es.js";
import { useReactTable as u } from "./hooks/useReactTable.es.js";
const l = ({
  data: e,
  columns: t,
  sx: r = {},
  isLoading: n,
  enableSorting: o,
  defaultSorting: m,
  expandedRowIndex: b,
  onRowClick: i,
  renderExpandableBlock: a,
  renderEmptyBlock: x,
  getRowDisableHover: c,
  getCanExpand: T,
  page: f
}) => {
  const { table: j, rows: d } = u({
    data: e,
    columns: t,
    enableSorting: o,
    defaultSorting: m
  });
  return /* @__PURE__ */ s.jsx(
    p,
    {
      table: j,
      rows: d,
      sx: { ...r, cursor: i || a ? "pointer" : "default" },
      isLoading: n,
      enableSorting: o,
      page: f,
      expandedRowIndex: b,
      onRowClick: i,
      renderExpandableBlock: a,
      renderEmptyBlock: x,
      getRowDisableHover: c,
      getCanExpand: T
    }
  );
}, w = ({
  data: e,
  columns: t,
  isLoading: r,
  enableSorting: n,
  defaultSorting: o,
  onRowClick: m,
  renderEmptyBlock: b,
  renderMobileCard: i
}) => {
  const { rows: a } = u({
    data: e,
    columns: t,
    enableSorting: n,
    defaultSorting: o
  });
  return /* @__PURE__ */ s.jsx(
    h,
    {
      rows: a,
      isLoading: r,
      onRowClick: m,
      renderMobileCard: i,
      renderEmptyBlock: b
    }
  );
}, R = (e) => {
  const t = M();
  return C(t.breakpoints.down(e.mobileBreakpoint ?? "sm")) ? /* @__PURE__ */ s.jsx(w, { ...e }) : /* @__PURE__ */ s.jsx(l, { ...e });
}, z = (e) => e.mobileCards ? /* @__PURE__ */ s.jsx(R, { ...e }) : /* @__PURE__ */ s.jsx(l, { ...e });
export {
  z as Table
};

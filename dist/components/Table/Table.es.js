import { jsxRuntimeExports as j } from "../../jsx-runtime-BgepH7Pb.js";
import { Table as l } from "./components/Table/index.es.js";
import { useReactTable as n } from "./hooks/useReactTable.es.js";
const v = ({
  data: s,
  columns: e,
  sx: m = {},
  isLoading: a,
  enableSorting: t,
  defaultSorting: p,
  expandedRowIndex: u,
  onRowClick: r,
  renderExpandableBlock: o,
  renderEmptyBlock: f,
  getRowDisableHover: i,
  getCanExpand: x,
  page: T
}) => {
  const { table: b, rows: c } = n({
    data: s,
    columns: e,
    enableSorting: t,
    defaultSorting: p
  });
  return /* @__PURE__ */ j.jsx(
    l,
    {
      table: b,
      rows: c,
      sx: { ...m, cursor: r || o ? "pointer" : "default" },
      isLoading: a,
      enableSorting: t,
      page: T,
      expandedRowIndex: u,
      onRowClick: r,
      renderExpandableBlock: o,
      renderEmptyBlock: f,
      getRowDisableHover: i,
      getCanExpand: x
    }
  );
};
export {
  v as Table
};

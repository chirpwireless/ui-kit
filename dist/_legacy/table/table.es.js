import { jsxRuntimeExports as c } from "../../jsx-runtime-BgepH7Pb.js";
import { TableComponent as j } from "./components/table-component/index.es.js";
import { useReactTable as n } from "./hooks/use-react-table.es.js";
const q = ({
  data: s,
  columns: m,
  sx: e = {},
  isLoading: p,
  enableSorting: t,
  defaultSorting: u,
  expandedRowIndex: f,
  onRowClick: o,
  onRowDoubleClick: x,
  renderExpandableBlock: r,
  renderEmptyBlock: a,
  page: i
}) => {
  const { table: T, rows: b } = n({
    data: s,
    columns: m,
    enableSorting: t,
    defaultSorting: u
  });
  return /* @__PURE__ */ c.jsx(
    j,
    {
      table: T,
      rows: b,
      sx: {
        ...e,
        cursor: o || r ? "pointer" : "default"
        // overflowX: { xs: 'hidden' },
      },
      isLoading: p,
      enableSorting: t,
      page: i,
      expandedRowIndex: f,
      onRowClick: o,
      onRowDoubleClick: x,
      renderExpandableBlock: r,
      renderEmptyBlock: a
    }
  );
};
export {
  q as Table
};

import { jsxRuntimeExports as t } from "../../../../jsx-runtime-BgepH7Pb.js";
import { TableHead as w, TableSortLabel as C } from "@mui/material";
import { CaretDownIcon as b } from "../../../../icons/CaretDownIcon/index.es.js";
import { CaretUpIcon as j } from "../../../../icons/CaretUpIcon/index.es.js";
import { SortIcon as H } from "../../../../icons/SortIcon/index.es.js";
import { Row as I, HeadCell as T } from "./style.es.js";
const k = ({ columns: l, enableSorting: m, sortingState: c }) => /* @__PURE__ */ t.jsx(w, { children: /* @__PURE__ */ t.jsx(I, { children: l.map(({ id: e, columnDef: n, getCanSort: d, getToggleSortingHandler: p }) => {
  const { meta: o, maxSize: x, header: i } = n, h = m && d(), r = c.find((f) => {
    var a;
    return ((a = f.id) == null ? void 0 : a.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
  });
  let s = H;
  return r && (s = r != null && r.desc ? b : j), /* @__PURE__ */ t.jsx(
    T,
    {
      sx: {
        width: n.size,
        width: o == null ? void 0 : o.width,
        maxWidth: x,
        textAlign: o == null ? void 0 : o.align
      },
      children: h ? /* @__PURE__ */ t.jsx(C, { IconComponent: s, onClick: p(), children: i }) : i
    },
    e
  );
}) }) });
export {
  k as TableHead
};

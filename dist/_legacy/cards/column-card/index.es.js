import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { ColumnTitleTypography as d, CustomTooltip as x, ColumnDataTypography as e } from "./styles.es.js";
import { BaseCard as j } from "../base-card/index.es.js";
import { Grid as p, Stack as C } from "@mui/material";
import { Typography as u } from "../../typogrpahy/index.es.js";
const S = ({
  containerSx: l,
  headerSx: s,
  contentSx: c,
  title: h,
  columns: i,
  tooltipColumnIndex: m
  // Индекс столбца в columns, на котором будет всплывать tooltip
}) => /* @__PURE__ */ r.jsx(
  j,
  {
    containerSx: { ...l, gap: "20px" },
    headerSx: s,
    contentSx: c,
    headerChildren: /* @__PURE__ */ r.jsx(u, { variant: "title16", children: h }),
    contentChildren: /* @__PURE__ */ r.jsx(p, { container: !0, children: i.map((o, t) => /* @__PURE__ */ r.jsx(p, { item: !0, xs: t === i.length - 1 ? 8 : 4, children: /* @__PURE__ */ r.jsxs(C, { children: [
      /* @__PURE__ */ r.jsx(d, { variant: "caption12", children: o.title }),
      o.data.map(
        (a, n) => m === t ? /* @__PURE__ */ r.jsx(x, { title: a, placement: "top-start", children: /* @__PURE__ */ r.jsx(e, { variant: "caption12", children: a }) }, n) : /* @__PURE__ */ r.jsx(e, { variant: "caption12", children: a }, n)
      )
    ] }) }, t)) })
  }
);
export {
  S as ColumnCard
};

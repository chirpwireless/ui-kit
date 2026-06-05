import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { SvgChevronLeft as c, SvgChevronRight as s } from "../../../chevron-right-BBrG242n.js";
import { IconButton as t } from "../../icon-button/index.es.js";
import { Stack as l, capitalize as m } from "@mui/material";
import { useTranslation as g } from "react-i18next";
const h = ({
  decreaseMonth: e,
  monthDate: n,
  increaseMonth: a
}) => {
  const { i18n: i, t: o } = g("uiKit", { keyPrefix: "RangePicker" });
  return /* @__PURE__ */ r.jsxs(l, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
    /* @__PURE__ */ r.jsx(
      t,
      {
        size: "small",
        variant: "gray",
        "aria-label": o("Previous Month"),
        onClick: e,
        sx: { icon: { color: "text.text7" }, backgroundColor: "background.background1" },
        children: /* @__PURE__ */ r.jsx(c, {})
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "react-datepicker__current-month", children: m(
      n.toLocaleString(i.language, {
        month: "long",
        year: "numeric"
      })
    ) }),
    /* @__PURE__ */ r.jsx(
      t,
      {
        size: "small",
        variant: "gray",
        "aria-label": o("Next Month"),
        onClick: a,
        sx: { icon: { color: "text.text7" }, backgroundColor: "background.background1" },
        children: /* @__PURE__ */ r.jsx(s, {})
      }
    )
  ] });
};
export {
  h as CustomDatepickerHeader
};

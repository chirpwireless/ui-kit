import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { Stack as s, AccordionDetails as m } from "@mui/material";
import { AccordionListItem as a, Accordion as d, AccordionSummary as x, AccordionActions as l } from "../style.es.js";
import { SelectIndicator as p } from "../../select-indicator/index.es.js";
import { Checkbox as j } from "../../checkbox/index.es.js";
import { Typography as h } from "../../typogrpahy/index.es.js";
const N = ({
  title: o,
  children: i,
  secondaryAction: t,
  checkboxProps: c,
  accordionProps: e,
  ...n
}) => /* @__PURE__ */ r.jsx(
  a,
  {
    ...n,
    sx: {
      height: "auto",
      margin: "6px 0"
    },
    children: /* @__PURE__ */ r.jsxs(d, { ...e, children: [
      /* @__PURE__ */ r.jsxs(s, { direction: "row", className: "accordion-summary-wrapper", alignItems: "center", children: [
        /* @__PURE__ */ r.jsx(x, { expandIcon: /* @__PURE__ */ r.jsx(p, {}), children: /* @__PURE__ */ r.jsx("div", { className: "content-container", children: c ? /* @__PURE__ */ r.jsx(j, { label: o, ...c }) : /* @__PURE__ */ r.jsx(h, { className: "title", variant: "body1", color: "text.text14", children: o }) }) }),
        /* @__PURE__ */ r.jsx(l, { children: t })
      ] }),
      /* @__PURE__ */ r.jsx(m, { children: i })
    ] })
  }
);
export {
  N as AccordionItem
};

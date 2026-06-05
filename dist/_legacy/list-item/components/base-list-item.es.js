import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { Stack as e } from "@mui/material";
import { ListItem as s } from "../style.es.js";
import { Checkbox as m } from "../../checkbox/index.es.js";
import { Typography as i } from "../../typogrpahy/index.es.js";
const h = ({ title: x, subTitle: t, checkboxProps: o, ...n }) => /* @__PURE__ */ r.jsx(
  s,
  {
    sx: {
      alignItems: t ? "flex-start" : "center"
    },
    ...n,
    children: /* @__PURE__ */ r.jsxs(e, { direction: "row", children: [
      o ? /* @__PURE__ */ r.jsx(
        m,
        {
          formControlLabelProps: {
            sx: {
              padding: 0,
              height: "24px",
              mr: 0
            }
          },
          ...o
        }
      ) : null,
      /* @__PURE__ */ r.jsxs(e, { children: [
        /* @__PURE__ */ r.jsx(i, { variant: "body1", color: "text.text4", children: x }),
        t && /* @__PURE__ */ r.jsx(
          i,
          {
            variant: "caption12",
            sx: {
              color: "text.text8"
            },
            children: t
          }
        )
      ] })
    ] })
  }
);
export {
  h as BaseListItem
};

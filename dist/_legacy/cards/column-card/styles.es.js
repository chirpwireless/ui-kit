import { styled as t } from "@mui/material";
import { Typography as e } from "../../typogrpahy/index.es.js";
import { Tooltip as p } from "../../tooltip/index.es.js";
const a = t(e)(({ theme: o }) => ({
  color: o.palette.text.text8
})), m = t(e)(({ theme: o }) => ({
  color: o.palette.text.text1,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})), n = t(p)(() => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}));
export {
  m as ColumnDataTypography,
  a as ColumnTitleTypography,
  n as CustomTooltip
};

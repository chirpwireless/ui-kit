import { styled as o } from "@mui/material";
import { Typography as e } from "../../typogrpahy/index.es.js";
import { Tooltip as p } from "../../tooltip/index.es.js";
const w = o(e)(({ theme: t }) => ({
  color: t.palette.text.text1,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})), s = o(p)(() => ({
  width: "77px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}));
export {
  s as CustomTooltip,
  w as TitleTypography
};

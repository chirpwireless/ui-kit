import { styled as e, Stack as o, Typography as t } from "@mui/material";
const l = e(o)({
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: 1,
  textAlign: "center",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "normal",
  wordBreak: "break-word",
  display: "-webkit-box",
  boxOrient: "vertical",
  WebkitBoxOrient: "vertical",
  lineClamp: "2",
  WebkitLineClamp: "2"
}), n = e(t)(() => ({
  display: "inline",
  paddingLeft: "2px",
  fontSize: "16px",
  verticalAlign: "super"
})), p = e(t)(({ theme: i }) => ({
  fontSize: "24px",
  color: i.palette.text.text4
}));
export {
  p as NoDataText,
  n as Postfix,
  l as Wrapper
};

import { styled as o, Stack as a, Typography as i, IconButton as n } from "@mui/material";
import { chirpPalette as r } from "../../theme/palette.es.js";
const c = o(a)(({ theme: t }) => ({
  gap: t.spacing(3),
  color: r(t).neutral.primary,
  padding: t.spacing(3),
  width: "100%"
})), e = o("span")({
  minWidth: 32,
  display: "flex"
}), s = o(i)(({ theme: t }) => ({
  color: r(t).neutral.primary,
  lineHeight: 1.2,
  textTransform: "capitalize"
})), g = o(i)(({ theme: t }) => ({
  color: r(t).neutral.primary,
  lineHeight: 1.15
})), d = o(n)(({ theme: t }) => ({
  width: 24,
  height: 24,
  padding: 2,
  color: r(t).neutral.primary,
  marginLeft: "auto"
}));
export {
  d as CloseButton,
  e as IconWrap,
  c as Root,
  g as Text,
  s as Title
};

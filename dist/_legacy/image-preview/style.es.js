import { styled as o, Stack as e } from "@mui/material";
import { Button as n } from "../button/index.es.js";
const a = o(e)(({ theme: t }) => ({
  position: "relative",
  backgroundColor: t.palette.background.background9,
  alignItems: "center",
  overflow: "hidden"
})), p = o("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 2
}), d = o(n)(({ theme: t }) => ({
  position: "absolute",
  bottom: "4px",
  right: "4px",
  width: "32px",
  border: "none",
  maxWidth: "32px",
  maxHeight: "32px",
  minWidth: "auto",
  height: "auto",
  padding: "5.5px",
  zIndex: 3,
  color: t.palette.base.color6,
  backgroundColor: t.palette.mode === "dark" ? "#4F2B20" : "#F0D3CA",
  "&:hover": {
    backgroundColor: "transparent"
  },
  svg: {
    height: "20px",
    width: "20px"
  }
})), c = o(e)(({ theme: t }) => ({
  height: "100%",
  width: "150px",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  svg: {
    color: t.palette.text.text8
  }
})), g = o("input")({
  position: "absolute",
  opacity: 0,
  zIndex: 1,
  width: "100%",
  cursor: "pointer",
  height: "100%"
});
export {
  d as DeleteBtn,
  c as EmptyFallbackWrapper,
  p as Image,
  a as ImageWrapper,
  g as UploadInput
};

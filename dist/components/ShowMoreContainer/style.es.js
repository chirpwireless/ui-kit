import { styled as o, Box as e, Stack as r } from "@mui/material";
const s = o(e)(() => ({
  float: "left"
})), l = o(r, {
  shouldForwardProp: (t) => t !== "open"
})(({ open: t }) => ({
  height: 26,
  width: 30,
  alignItems: "center",
  position: "absolute",
  right: "0",
  svg: {
    transition: "transform 0.2s ease",
    transform: t ? "rotate(-180deg)" : "rotate(0deg)"
  }
})), d = o(e, {
  shouldForwardProp: (t) => t !== "open" && t !== "heightFull" && t !== "height"
})(({ open: t, height: a, heightFull: n }) => ({
  transition: "all 0.3s ease",
  height: t ? n : a,
  overflow: "hidden",
  paddingRight: "30px"
})), h = o(r)(() => ({
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "nowrap",
  padding: 2
}));
export {
  l as Arrow,
  d as BoxWrapper,
  s as Mark,
  h as Wrapper
};

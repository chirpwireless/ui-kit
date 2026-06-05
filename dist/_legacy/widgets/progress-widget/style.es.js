import { styled as t, Box as e } from "@mui/material";
const s = t(e)(({ theme: o }) => ({
  position: "relative",
  height: "6px",
  borderRadius: "6px",
  overflow: "hidden",
  backgroundColor: o.palette.text.text9
})), d = t(e, {
  shouldForwardProp: (o) => o !== "widthPercent" && o !== "color"
})(({ widthPercent: o, color: r }) => ({
  position: "absolute",
  height: "100%",
  width: `${o}%`,
  backgroundColor: r
}));
export {
  s as ProgressContainer,
  d as ProgressSegment
};

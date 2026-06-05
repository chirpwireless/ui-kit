import { keyframes as r, styled as a, Stack as p } from "@mui/material";
import { Typography as l } from "../typogrpahy/index.es.js";
const s = r`
  0% {
    opacity: 0.05;
  }
  14.28% {
    opacity: 0.15;
  }
  28.56% {
    opacity: 0.25;
  }
  42.84% {
    opacity: 0.35;
  }
  57.12% {
    opacity: 0.45;
  }
  71.4% {
    opacity: 0.7;
  }
  85.68% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`, e = {
  small: {
    element: {
      width: "1px",
      height: "1.5px",
      translate: "translate(0, 5px)"
    },
    span: {
      width: "24px",
      height: "24px"
    }
  },
  large: {
    element: {
      width: "1.5px",
      height: "7.5px",
      translate: "translate(0, 11px)"
    },
    span: {
      width: "40px",
      height: "40px"
    }
  }
}, d = a("div")(({ theme: t, index: o, size: i, color: n }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: e[i].element.width,
  height: e[i].element.height,
  backgroundColor: n ?? t.palette.base.color6,
  borderRadius: "1.5px",
  animation: `${s} 1.2s infinite`,
  transformOrigin: "center",
  transform: `translate(-50%, -50%) rotate(${o * 45}deg) ${e[i].element.translate}`,
  animationDelay: `${o / 8 * 1.2}s`
})), m = a(p)(({ text: t }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: t ? "row" : "column",
  flexGrow: 1
})), g = a("span")(({ size: t }) => ({
  position: "relative",
  display: "inline-block",
  width: e[t].span.width,
  height: e[t].span.height
})), x = a(l)(({ theme: t }) => ({
  marginLeft: "20px",
  color: t.palette.text.text1
}));
export {
  m as LoaderContainer,
  d as LoaderElement,
  g as LoaderSpan,
  x as LoaderText
};

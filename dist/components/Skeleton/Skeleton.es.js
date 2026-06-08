import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { keyframes as s, styled as a, Box as c } from "@mui/material";
import { useRef as d, useEffect as g } from "react";
import { CurrentTheme as f } from "../../styles/constants.es.js";
import { chirpPalette as h } from "../../theme/palette.es.js";
const m = s`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`, p = a(c)(({ theme: e }) => {
  const t = h(e);
  return {
    position: "relative",
    width: "100%",
    height: "100%",
    background: `linear-gradient(240.16deg, ${e.palette.mode === f.Dark ? t.neutral.grey1 : t.neutral.white} 0%, transparent 100%)`,
    color: t.neutral.white,
    overflow: "hidden",
    "--diagonal-length": "0px"
  };
}), u = a("div")`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: currentColor;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${m} 1s linear infinite;
    filter: blur(20px);
`, y = ({ sx: e }) => {
  const t = d(null), r = () => {
    if (t.current) {
      const n = t.current.offsetWidth, o = t.current.offsetHeight, l = Math.sqrt(n * n + o * o);
      t.current.style.setProperty("--diagonal-length", `${l}px`);
    }
  };
  return g(() => (r(), window.addEventListener("resize", r), () => {
    window.removeEventListener("resize", r);
  }), []), /* @__PURE__ */ i.jsx(p, { ref: t, sx: e, children: /* @__PURE__ */ i.jsx(u, {}) });
};
export {
  y as Skeleton
};

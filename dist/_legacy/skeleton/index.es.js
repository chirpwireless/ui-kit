import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { keyframes as l, styled as a, Box as d } from "@mui/material";
import { useRef as g, useEffect as c } from "react";
const f = l`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`, h = a(d)(({ theme: { palette: e } }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  background: `linear-gradient(240.16deg, ${e.background.background6} 0%, rgba(53, 53, 53, 0) 100%)`,
  overflow: "hidden",
  "--diagonal-length": "0px"
})), m = a("div")`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: white;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${f} 1s linear infinite;
    filter: blur(20px);
`, b = ({ sx: e }) => {
  const t = g(null), n = () => {
    if (t.current) {
      const o = t.current.offsetWidth, r = t.current.offsetHeight, s = Math.sqrt(o * o + r * r);
      t.current.style.setProperty("--diagonal-length", `${s}px`);
    }
  };
  return c(() => (n(), window.addEventListener("resize", n), () => {
    window.removeEventListener("resize", n);
  }), []), /* @__PURE__ */ i.jsx(h, { ref: t, sx: e, children: /* @__PURE__ */ i.jsx(m, {}) });
};
export {
  b as Skeleton,
  h as SkeletonContainer,
  m as SkeletonDiagonalStripe
};

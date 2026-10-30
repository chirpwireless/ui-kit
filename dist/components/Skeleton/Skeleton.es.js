import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { useEffect as n, useRef as r } from "react";
import { Box as i, keyframes as a, styled as o } from "@mui/material";
import { jsx as s } from "react/jsx-runtime";
// src/components/Skeleton/Skeleton.tsx
var c = a`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`, l = o(i)(({ theme: n }) => {
	let r = t(n);
	return {
		position: "relative",
		width: "100%",
		height: "100%",
		background: `linear-gradient(240.16deg, ${n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white} 0%, transparent 100%)`,
		color: r.neutral.white,
		overflow: "hidden",
		"--diagonal-length": "0px"
	};
}), u = o("div")`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: currentColor;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${c} 1s linear infinite;
    filter: blur(20px);
`, d = ({ sx: e }) => {
	let t = r(null), i = () => {
		if (t.current) {
			let e = t.current.offsetWidth, n = t.current.offsetHeight, r = Math.sqrt(e * e + n * n);
			t.current.style.setProperty("--diagonal-length", `${r}px`);
		}
	};
	return n(() => (i(), window.addEventListener("resize", i), () => {
		window.removeEventListener("resize", i);
	}), []), /* @__PURE__ */ s(l, {
		ref: t,
		sx: e,
		children: /* @__PURE__ */ s(u, {})
	});
};
export { d as Skeleton };

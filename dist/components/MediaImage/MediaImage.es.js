import { Wrapper as e } from "./style.es.js";
import { useState as t, useTransition as n } from "react";
import { Skeleton as r } from "@mui/material";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
// src/components/MediaImage/MediaImage.tsx
var o = ({ src: o, alt: s, fallback: c, skeletonProps: l, style: u, ...d }) => {
	let [f, p] = t(!0), [m, h] = t(!1), [g, _] = n(), v = f || g, y = {
		width: "100%",
		height: "100%",
		borderRadius: "8px",
		...l?.sx
	}, b = () => {
		_(() => {
			p(!1), h(!1);
		});
	}, x = () => {
		_(() => {
			p(!1), h(!0);
		});
	};
	return m && c ? /* @__PURE__ */ i(e, { children: c }) : m ? /* @__PURE__ */ i(e, { children: /* @__PURE__ */ i(r, {
		variant: l?.variant || "rectangular",
		animation: "pulse",
		sx: {
			...y,
			opacity: .5
		}
	}) }) : /* @__PURE__ */ a(e, { children: [v && /* @__PURE__ */ i(r, {
		variant: l?.variant || "rectangular",
		animation: l?.animation === void 0 ? "wave" : l.animation,
		sx: {
			...y,
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: 1
		}
	}), /* @__PURE__ */ i("img", {
		src: o,
		alt: s,
		onLoad: b,
		onError: x,
		style: {
			maxWidth: "100%",
			maxHeight: "100%",
			objectFit: "contain",
			opacity: +!v,
			transition: "opacity 0.3s ease",
			...u
		},
		...d
	})] });
};
export { o as MediaImage };

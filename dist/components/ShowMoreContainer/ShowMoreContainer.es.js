import { Arrow as e, BoxWrapper as t, Mark as n, Wrapper as r } from "./style.es.js";
import { useEffect as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { ExpandMore as l } from "@mui/icons-material";
// src/components/ShowMoreContainer/ShowMoreContainer.tsx
var u = ({ height: u, children: d }) => {
	let [f, p] = o(!1), [m, h] = o(!0), [g, _] = o(u), v = a(null), y = (e) => {
		e.stopPropagation(), e.preventDefault(), p((e) => !e);
	};
	return i(() => {
		if (v.current) {
			let { bottom: e } = v.current.getBoundingClientRect(), t = v.current.parentElement?.getBoundingClientRect();
			if (t) {
				let n = e - t.top <= u;
				_(e - t.top), h(n);
			}
		}
	}, [u]), /* @__PURE__ */ c(r, { children: [/* @__PURE__ */ c(t, {
		open: f,
		heightFull: g,
		height: u,
		children: [d, /* @__PURE__ */ s(n, {
			className: "last-badge",
			ref: v,
			sx: { height: u }
		})]
	}), !m && /* @__PURE__ */ s(e, {
		open: f,
		onClick: (e) => y(e),
		children: /* @__PURE__ */ s(l, { sx: { width: "16px" } })
	})] });
};
export { u as ShowMoreContainer };

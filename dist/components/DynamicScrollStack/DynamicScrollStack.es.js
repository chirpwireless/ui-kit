import { ScrollContainer as e } from "./styles.es.js";
import { useEffect as t, useRef as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
// src/components/DynamicScrollStack/DynamicScrollStack.tsx
var a = ({ children: a, sx: o, onScroll: s, scrollRef: c }) => {
	let [l, u] = r(!1), d = n(null), f = c || d;
	return t(() => {
		let e = () => {
			u(!0);
			let e = setTimeout(() => {
				u(!1);
			}, 500);
			return s?.(), () => clearTimeout(e);
		}, t = f.current;
		return t && t.addEventListener("scroll", e), () => {
			t && t.removeEventListener("scroll", e);
		};
	}, [s, f]), /* @__PURE__ */ i(e, {
		ref: f,
		isScrolling: l,
		sx: o,
		children: a
	});
};
export { a as DynamicScrollStack };

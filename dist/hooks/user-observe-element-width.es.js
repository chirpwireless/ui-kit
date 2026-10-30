import { useEffect as e, useRef as t, useState as n } from "react";
// src/hooks/user-observe-element-width.ts
var r = () => {
	let [r, i] = n(0), a = t(null);
	return e(() => {
		let e = a.current, t = new ResizeObserver((e) => {
			i(e[0].contentRect.width);
		});
		return e && t.observe(e), () => {
			e && t.unobserve(e);
		};
	}, []), {
		width: r,
		ref: a
	};
};
export { r as useObserveElementWidth };

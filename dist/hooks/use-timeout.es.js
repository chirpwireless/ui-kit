import { useCallback as e, useEffect as t, useRef as n } from "react";
// src/hooks/use-timeout.tsx
var r = (r, i) => {
	let a = n(r), o = n(null);
	t(() => {
		a.current = r;
	}, [r]);
	let s = e(() => {
		o.current = setTimeout(() => a.current(), i);
	}, [i]), c = e(() => {
		o.current && clearTimeout(o.current);
	}, []);
	return t(() => (s(), c), [
		i,
		s,
		c
	]), {
		reset: e(() => {
			c(), s();
		}, [c, s]),
		clear: c
	};
};
export { r as useTimeout };

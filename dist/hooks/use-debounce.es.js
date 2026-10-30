import { useEffect as e, useState as t } from "react";
// src/hooks/use-debounce.ts
var n = (n, r) => {
	let [i, a] = t(n);
	return e(() => {
		let e = setTimeout(() => a(n), r || 500);
		return () => {
			clearTimeout(e);
		};
	}, [n, r]), i;
};
export { n as useDebounce };

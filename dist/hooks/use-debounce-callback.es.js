import { useCallback as e, useRef as t } from "react";
// src/hooks/use-debounce-callback.ts
var n = (n, r) => {
	let i = t(void 0);
	return e(() => {
		clearTimeout(i.current), i.current = setTimeout(() => {
			n?.();
		}, r);
	}, [n, r]);
};
export { n as useDebounceCallback };

import { useCallback as e, useState as t } from "react";
// src/hooks/use-toggle.ts
var n = (n = !1) => {
	let [r, i] = t(n);
	return {
		value: r,
		setValue: i,
		toggle: e(() => {
			i((e) => !e);
		}, [i]),
		setTrue: e(() => {
			i(!0);
		}, [i]),
		setFalse: e(() => {
			i(!1);
		}, [i])
	};
};
export { n as useToggle };

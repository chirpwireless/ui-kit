// src/helpers/array-to-map.tsx
var e = (e, t) => e.reduce((e, n) => ({
	...e,
	[n[t]]: n
}), {});
export { e as arrayToMap };

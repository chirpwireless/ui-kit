// src/helpers/colors.tsx
var e = (e) => {
	let t = parseInt(e.slice(1), 16);
	return e.length > 7 && e.length !== 3 ? [
		t >> 24 & 255,
		t >> 16 & 255,
		t >> 8 & 255,
		Number(((t & 255) / 255).toFixed(2))
	] : [
		t >> 16 & 255,
		t >> 8 & 255,
		t & 255,
		1
	];
};
export { e as hex2rgba };

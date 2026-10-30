// src/helpers/format-from-camel-case.ts
function e(e) {
	if (!e) return "";
	let t = e.match(/[A-Z][a-z]+|[a-z]+/g);
	return t ? t.map((e, t) => t === 0 ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join(" ") : "";
}
export { e as formatFromCamelCase };

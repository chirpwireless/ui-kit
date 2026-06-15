function s(t) {
  if (!t) return "";
  const e = t.match(/[A-Z][a-z]+|[a-z]+/g);
  return e ? e.map((r, o) => o === 0 ? r.charAt(0).toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()).join(" ") : "";
}
export {
  s as formatFromCamelCase
};

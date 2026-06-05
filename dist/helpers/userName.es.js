const a = (t) => {
  if (!t) return "";
  const e = t.match(/\b\w/g);
  return e ? e.join(".").toUpperCase() : "";
}, u = (t) => {
  if (!t) return "";
  const e = t.trim();
  if (!e) return "";
  const r = e.indexOf("@");
  return (r >= 0 ? e.slice(0, r) : e).trim();
}, f = (t = {}, e = "User") => {
  var m, c, o;
  const r = ((m = t.firstName) == null ? void 0 : m.trim()) ?? "", i = ((c = t.lastName) == null ? void 0 : c.trim()) ?? "", n = r || i ? a(`${r} ${i}`) : "";
  if (n) return n;
  const s = u(t.email);
  return s || ((o = t.email) == null ? void 0 : o.trim()) || e;
};
export {
  f as getDisplayName,
  u as getEmailNamespace,
  a as getUserInitials
};

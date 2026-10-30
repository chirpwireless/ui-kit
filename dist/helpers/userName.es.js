// src/helpers/userName.ts
var e = (e) => {
	if (!e) return "";
	let t = e.match(/\b\w/g);
	return t ? t.join(".").toUpperCase() : "";
}, t = (e) => {
	if (!e) return "";
	let t = e.trim();
	if (!t) return "";
	let n = t.indexOf("@");
	return (n >= 0 ? t.slice(0, n) : t).trim();
}, n = (n = {}, r = "User") => {
	let i = n.firstName?.trim() ?? "", a = n.lastName?.trim() ?? "";
	return (i || a ? e(`${i} ${a}`) : "") || t(n.email) || n.email?.trim() || r;
};
export { n as getDisplayName, t as getEmailNamespace, e as getUserInitials };

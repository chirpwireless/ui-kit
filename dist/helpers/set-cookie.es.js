// src/helpers/set-cookie.ts
var e = ({ name: e, value: t, days: n = 365, isRootDomain: r = !1, path: i = "; path=/" }) => {
	let a = "", o = "";
	if (n) {
		let e = /* @__PURE__ */ new Date();
		e.setTime(e.getTime() + n * 864e5), a = `; expires=${e.toUTCString()}`;
	}
	r && (o = `; domain=${window.location.hostname.split(".").slice(-2).join(".")}`), document.cookie = `${e}=${encodeURIComponent(t)}${i}${a}${o}`;
};
export { e as setCookie };

// src/helpers/parse-cookie.ts
var e = (e) => e ? e.split(";").map((e) => e.split("=")).reduce((e, t) => (e[decodeURIComponent(t[0].trim())] = decodeURIComponent(t[1].trim()), e), {}) : {};
export { e as parseCookie };

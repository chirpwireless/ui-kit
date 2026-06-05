const n = (r) => r ? r.split(";").map((e) => e.split("=")).reduce((e, t) => (e[decodeURIComponent(t[0].trim())] = decodeURIComponent(t[1].trim()), e), {}) : {};
export {
  n as parseCookie
};

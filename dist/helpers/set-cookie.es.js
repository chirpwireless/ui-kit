const m = ({
  name: i,
  value: s,
  days: e = 365,
  isRootDomain: c = !1,
  path: a = "; path=/"
}) => {
  let t = "", n = "";
  if (e) {
    const o = /* @__PURE__ */ new Date();
    o.setTime(o.getTime() + e * 864e5), t = `; expires=${o.toUTCString()}`;
  }
  c && (n = `; domain=${window.location.hostname.split(".").slice(-2).join(".")}`), document.cookie = `${i}=${encodeURIComponent(s)}${a}${t}${n}`;
};
export {
  m as setCookie
};

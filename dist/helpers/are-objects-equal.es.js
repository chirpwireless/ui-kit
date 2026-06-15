function c(r, e) {
  const n = Object.keys(r), s = Object.keys(e);
  if (n.length !== s.length)
    return !1;
  for (const t of n)
    if (!Object.prototype.hasOwnProperty.call(e, t) || r[t] !== e[t])
      return !1;
  return !0;
}
export {
  c as areObjectsEqual
};

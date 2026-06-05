const c = (r, e) => {
  if (e === "us") {
    const t = r.replace(/\D/g, "").match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    return t ? `${t[1] ? `(${t[1]}` : ""}${t[2] ? `) ${t[2]}` : ""}${t[3] ? `-${t[3]}` : ""}` : r;
  } else if (e === "ru") {
    const t = r.replace(/\D/g, "").match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    return t ? `${t[1] ? `(${t[1]}` : ""}${t[2] ? `) ${t[2]}` : ""}${t[3] ? `-${t[3]}` : ""}${t[4] ? `-${t[4]}` : ""}` : r;
  }
  return r;
}, $ = (r) => r === "ru" || r === "us" ? 10 : 16, s = (r, e) => r.startsWith(e) ? r.slice(e.length) : r;
export {
  c as applyMask,
  $ as getMaxLength,
  s as stripDialCode
};

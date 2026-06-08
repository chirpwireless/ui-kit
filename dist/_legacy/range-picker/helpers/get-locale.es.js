import { es as r, de as c, fr as l, ru as n, enUS as e } from "date-fns/locale";
const s = {
  en: e,
  ru: n,
  fr: l,
  de: c,
  es: r
}, p = (o) => {
  const t = o.split("-")[0];
  return s[t] || e;
};
export {
  p as getLocaleObj
};

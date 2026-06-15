import e from "i18next";
import { default as m } from "i18next";
import { initReactI18next as a } from "react-i18next";
import { languages as t } from "./languages.es.js";
import r from "./resources/index.es.js";
const n = "language";
e.use(a).init({
  resources: r,
  fallbackLng: "ru",
  supportedLngs: Object.keys(t),
  interpolation: {
    escapeValue: !1
  },
  detection: {
    order: ["cookie"],
    lookupCookie: n,
    caches: ["cookie"]
  }
});
const p = (o) => {
  e.changeLanguage(o);
};
export {
  p as changeLanguage,
  m as default,
  t as languages
};

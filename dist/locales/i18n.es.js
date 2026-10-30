import { languages as e } from "./languages.es.js";
import t from "./resources/index.es.js";
import { initReactI18next as n } from "react-i18next";
import r from "i18next";
// src/locales/i18n.ts
r.use(n).init({
	resources: t,
	fallbackLng: "ru",
	supportedLngs: Object.keys(e),
	interpolation: { escapeValue: !1 },
	detection: {
		order: ["cookie"],
		lookupCookie: "language",
		caches: ["cookie"]
	}
});
var i = (e) => {
	r.changeLanguage(e);
}, a = r;
export { i as changeLanguage, a as default, e as languages };

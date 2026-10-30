import { chirpDarkTheme as e } from "./chirp/dark.es.js";
import { chirpLightTheme as t } from "./chirp/light.es.js";
import { createComponents as n } from "./components.es.js";
import { darkTheme as r } from "./dark.es.js";
import { lightTheme as i } from "./light.es.js";
import { themeMixins as a } from "./mixins.es.js";
import { themeTemplate as o } from "./template.es.js";
import { createBarTheme as s } from "./chartTheme.es.js";
import { createTheme as c } from "@mui/material/styles";
// src/theme/index.ts
var l = (n, a) => a === "chirp" ? (n === "light" ? t : e).palette : (n === "light" ? i : r).palette, u = ({ mode: e = "light", variant: t = "default" } = {}) => {
	let r = l(e, t);
	return c({
		...o,
		...a,
		palette: r,
		components: n(r)
	});
};
export { e as chirpDarkTheme, t as chirpLightTheme, s as createBarTheme, n as createComponents, r as darkTheme, u as getTheme, i as lightTheme, a as themeMixins, o as themeTemplate };

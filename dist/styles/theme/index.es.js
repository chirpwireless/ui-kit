import { createComponents as e } from "./components.es.js";
import { darkTheme as t } from "./dark.es.js";
import { lightTheme as n } from "./light.es.js";
import { themeMixins as r } from "./mixins.es.js";
import { themeTemplate as i } from "./template.es.js";
import { createTheme as a } from "@mui/material";
// src/styles/theme/index.ts
var o = (o = "light", s) => {
	let { palette: c } = o === "light" ? n() : t(), l = {
		...i,
		...r,
		palette: s ?? c,
		components: e(c)
	};
	return a(l);
};
export { o as getTheme };

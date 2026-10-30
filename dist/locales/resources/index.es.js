import { mergedResources as e } from "../../merged-resourses-DfD44ZF2.js";
import { languages as t } from "../languages.es.js";
// src/locales/resources/index.ts
var n = Object.keys(t).reduce((t, n) => (Object.keys(e).map((r) => {
	t[n] = {
		...t[n] ?? {},
		[r]: e[r][n]
	};
}), t), {});
export { n as default };

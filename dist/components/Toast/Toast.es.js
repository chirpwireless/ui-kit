import { chirpPalette as e } from "../../theme/palette.es.js";
import { CloseIcon as t } from "../../icons/CloseIcon/index.es.js";
import { ErrorSolidIcon as n } from "../../icons/ErrorSolidIcon/index.es.js";
import { SuccessSolidIcon as r } from "../../icons/SuccessSolidIcon/index.es.js";
import { WarningSolidIcon as i } from "../../icons/WarningSolidIcon/index.es.js";
import { CloseButton as a, IconWrap as o, Root as s, Text as c, Title as l } from "./style.es.js";
import { Box as u, useTheme as d } from "@mui/material";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { useTranslation as m } from "react-i18next";
import { toast as h } from "react-toastify";
// src/components/Toast/Toast.tsx
var g = {
	error: n,
	warning: i,
	success: r
}, _ = ({ id: n, status: r, message: i }) => {
	let _ = d(), { t: v } = m("uiKit"), y = g[r], b = r === "error" ? "alert" : r;
	return /* @__PURE__ */ p(s, {
		direction: "row",
		sx: {
			gap: 2,
			backgroundColor: e(_).alerts[b]
		},
		children: [
			/* @__PURE__ */ f(o, { children: /* @__PURE__ */ f(y, {}) }),
			/* @__PURE__ */ p(u, { children: [/* @__PURE__ */ f(l, {
				variant: "h5",
				sx: { mb: .5 },
				children: v(r)
			}), /* @__PURE__ */ f(c, {
				variant: "body2",
				children: i
			})] }),
			/* @__PURE__ */ f(a, {
				onClick: () => h.dismiss(n),
				size: "small",
				children: /* @__PURE__ */ f(t, {})
			})
		]
	});
};
export { _ as Toast };

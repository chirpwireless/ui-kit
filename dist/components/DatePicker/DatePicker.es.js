import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { InputLabel as n } from "../Select/components/InputLabel/index.es.js";
import { RangePickerWrapper as r } from "../RangePicker/RangePickerWrapper.es.js";
import { Trigger as i } from "./style.es.js";
import { useState as a } from "react";
import { FormControl as o, Popover as s, Typography as c, useTheme as l } from "@mui/material";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { useTranslation as f } from "react-i18next";
import { CalendarToday as p } from "@mui/icons-material";
import { de as m, enUS as h, es as g, fr as _ } from "date-fns/locale";
import { Calendar as v } from "react-date-range";
// src/components/DatePicker/DatePicker.tsx
var y = v, b = {
	en: h,
	de: m,
	es: g,
	fr: _
}, x = ({ label: m, value: g, onChange: _, minDate: v }) => {
	let { i18n: x } = f(), S = l(), C = t(S), [w, T] = a(null), E = g ? (/* @__PURE__ */ new Date(`${g}T00:00:00`)).toLocaleDateString() : "", D = g ? /* @__PURE__ */ new Date(`${g}T00:00:00`) : void 0, O = (e) => {
		T(e.currentTarget);
	}, k = () => {
		T(null);
	};
	return /* @__PURE__ */ d(o, {
		fullWidth: !0,
		children: [
			m ? /* @__PURE__ */ u(n, {
				label: m,
				sx: { "&.MuiInputLabel-shrink": {
					fontSize: "14px",
					lineHeight: "20px",
					top: "8px",
					left: "-12px"
				} }
			}) : null,
			/* @__PURE__ */ d(i, {
				onClick: O,
				children: [/* @__PURE__ */ u(c, {
					sx: {
						fontSize: "13px",
						lineHeight: "20px",
						fontFamily: S.typography.fontFamily,
						color: E ? C.neutral.primary : C.neutral.grey4
					},
					children: E
				}), /* @__PURE__ */ u(p, { sx: {
					fontSize: 16,
					color: C.neutral.grey4
				} })]
			}),
			/* @__PURE__ */ u(s, {
				open: !!w,
				anchorEl: w,
				onClose: k,
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "left"
				},
				transformOrigin: {
					vertical: "top",
					horizontal: "left"
				},
				slotProps: { paper: { sx: {
					mt: "4px",
					backgroundColor: S.palette.mode === e.Dark ? C.neutral.grey1 : C.neutral.white,
					border: `1px solid ${C.borders.primary}`,
					borderRadius: "12px",
					boxShadow: `0 8px 32px ${C.shadow ?? "rgba(0,0,0,0.14)"}`
				} } },
				children: /* @__PURE__ */ u(r, {
					sx: {
						p: "16px",
						".rdrMonthAndYearPickers": { display: "flex" },
						".rdrMonthAndYearWrapper": { marginTop: 0 }
					},
					children: /* @__PURE__ */ u(y, {
						date: D,
						onChange: (e) => {
							_((/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().split("T")[0]), k();
						},
						minDate: v,
						locale: b[x.language] ?? h,
						weekStartsOn: 1
					})
				})
			})
		]
	});
};
export { x as DatePicker };

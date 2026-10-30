import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { InputLabel as n } from "../Select/components/InputLabel/index.es.js";
import { StackRow as r } from "../Stacks/index.es.js";
import { useState as i } from "react";
import { Box as a, FormControl as o, Popover as s, Stack as c, useTheme as l } from "@mui/material";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
// src/components/ColorPicker/ColorPicker.tsx
var f = (e) => !!e, p = {
	top: {
		vertical: "top",
		horizontal: "center"
	},
	bottom: {
		vertical: "bottom",
		horizontal: "center"
	},
	left: {
		vertical: "center",
		horizontal: "left"
	},
	right: {
		vertical: "center",
		horizontal: "right"
	}
}, m = {
	top: {
		vertical: "bottom",
		horizontal: "center"
	},
	bottom: {
		vertical: "top",
		horizontal: "center"
	},
	left: {
		vertical: "center",
		horizontal: "right"
	},
	right: {
		vertical: "center",
		horizontal: "left"
	}
}, h = (n) => {
	let r = t(n);
	return [
		n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		n.palette.primary.main,
		r.neutral.primary,
		r.neutral.grey4,
		r.alerts.success,
		r.alerts.alert,
		r.alerts.warning,
		r.additionalColors.blue,
		r.additionalColors.lightBlue,
		r.additionalColors.purple,
		r.additionalColors.pink
	].filter(f);
}, g = ({ value: f, onChange: g, title: _ = "Color", placement: v = "top", hideTitle: y = !1, sx: b }) => {
	let x = l(), S = t(x), C = h(x), [w, T] = i(null), E = (e) => {
		T(e.currentTarget);
	}, D = () => {
		T(null);
	}, O = (e) => {
		g(e), D();
	}, k = !!w, A = x.palette.mode === e.Dark ? S.neutral.grey1 : S.neutral.white;
	return /* @__PURE__ */ d(o, {
		fullWidth: !0,
		children: [
			/* @__PURE__ */ u(n, {
				label: y ? "" : _,
				sx: { "&.MuiInputLabel-shrink": {
					fontSize: "14px",
					lineHeight: "20px",
					top: "8px",
					left: "-12px"
				} }
			}),
			/* @__PURE__ */ u(c, {
				direction: "row",
				onClick: E,
				sx: {
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					minWidth: "40px",
					height: "36px",
					backgroundColor: A,
					border: `1px solid ${S.borders.primary}`,
					borderRadius: "8px",
					cursor: "pointer",
					marginTop: y ? 0 : "16px",
					boxSizing: "border-box",
					"&:hover": { borderColor: S.primaryColors.accent },
					...b
				},
				children: /* @__PURE__ */ u(a, { sx: {
					width: "20px",
					height: "20px",
					borderRadius: "50%",
					backgroundColor: f
				} })
			}),
			/* @__PURE__ */ u(s, {
				open: k,
				anchorEl: w,
				onClose: D,
				anchorOrigin: p[v],
				transformOrigin: m[v],
				slotProps: { paper: { sx: {
					backgroundColor: A,
					borderRadius: "8px",
					padding: "8px",
					boxShadow: x.shadows[8]
				} } },
				children: /* @__PURE__ */ u(r, {
					gap: 2,
					children: C.map((e) => /* @__PURE__ */ u(a, {
						sx: {
							width: "24px",
							height: "24px",
							borderRadius: "50%",
							backgroundColor: e,
							cursor: "pointer",
							transition: "transform 0.15s ease",
							"&:hover": { transform: "scale(1.15)" }
						},
						onClick: () => O(e)
					}, e))
				})
			})
		]
	});
};
export { g as ColorPicker };

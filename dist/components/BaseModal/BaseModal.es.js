import { chirpPalette as e } from "../../theme/palette.es.js";
import { BackIcon as t } from "../../icons/BackIcon/index.es.js";
import { CloseIcon as n } from "../../icons/CloseIcon/index.es.js";
import { Button as r } from "../Button/Button.es.js";
import { Stepper as i } from "../Stepper/Stepper.es.js";
import { Action as a, BackIconButton as o, CloseIconButton as s, StyledDialog as c, Title as l, Wrapper as u } from "./style.es.js";
import "react";
import { Box as d, CircularProgress as f, Typography as p, useTheme as m } from "@mui/material";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
import { useTranslation as _ } from "react-i18next";
// src/components/BaseModal/BaseModal.tsx
var v = ({ title: v, subtitle: y, primaryButtonText: b, secondaryButtonText: x, onPrimaryAction: S, onSecondaryAction: C, children: w, customMaxWidth: T = "650px", disabledPrimaryButton: E = !1, isLoading: D, activeStep: O, steps: k, onClose: A, onBack: j, ...M }) => {
	let { t: N } = _("uiKit"), P = m(), F = e(P);
	return /* @__PURE__ */ g(c, {
		customWidth: T,
		slotProps: { backdrop: { sx: {
			backdropFilter: "blur(8px)",
			background: `${F.borders.primary}`
		} } },
		...M,
		children: [
			j && k?.length && O !== k[0] && /* @__PURE__ */ h(o, {
				onClick: j,
				children: /* @__PURE__ */ h(t, {})
			}),
			A && /* @__PURE__ */ h(s, {
				onClick: A,
				children: /* @__PURE__ */ h(n, {})
			}),
			/* @__PURE__ */ g(u, { children: [
				/* @__PURE__ */ g(l, { children: [
					O && k && /* @__PURE__ */ h(i, {
						activeStep: O,
						steps: k,
						sx: { marginBottom: 2 }
					}),
					/* @__PURE__ */ h(p, {
						variant: "subtitle1",
						color: "neutral.primary",
						children: v
					}),
					y && /* @__PURE__ */ h(p, {
						variant: "caption",
						color: "neutral.grey4",
						children: y
					})
				] }),
				w,
				/* @__PURE__ */ g(a, { children: [C && /* @__PURE__ */ h(r, {
					size: "medium",
					variant: "secondary",
					onClick: C,
					children: x || N("Cancel")
				}), /* @__PURE__ */ g(r, {
					size: "medium",
					variant: "primary",
					fullWidth: !0,
					onClick: S,
					disabled: E || D,
					children: [/* @__PURE__ */ h(d, {
						sx: {
							width: "12px",
							marginLeft: "-12px",
							marginRight: "6px"
						},
						children: D && /* @__PURE__ */ h(f, {
							size: 12,
							sx: { color: "neutral.white" }
						})
					}), b || N("Confirm")]
				})] })
			] })
		]
	});
};
export { v as BaseModal };

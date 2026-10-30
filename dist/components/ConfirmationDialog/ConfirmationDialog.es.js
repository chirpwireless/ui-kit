import { CloseIcon as e } from "../../icons/CloseIcon/index.es.js";
import { Button as t } from "../Button/Button.es.js";
import { StackRowJB as n } from "../Stacks/index.es.js";
import { CloseIconButton as r, Content as i, Dialog as a, IconWrapper as o, LoaderWrapper as s } from "./style.es.js";
import { Box as c, CircularProgress as l, Typography as u } from "@mui/material";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { useTranslation as p } from "react-i18next";
// src/components/ConfirmationDialog/ConfirmationDialog.tsx
var m = ({ isOpen: m, title: h, subTitle: g, icon: _, disabled: v = !1, confirmButtonText: y, cancelButtonText: b, children: x, onConfirm: S, onCancel: C, isLoading: w, hideCancelButton: T, sx: E }) => {
	let { t: D } = p("uiKit");
	return /* @__PURE__ */ f(a, {
		open: m,
		sx: E,
		children: [
			/* @__PURE__ */ d(r, {
				onClick: C,
				children: /* @__PURE__ */ d(e, {})
			}),
			_ && /* @__PURE__ */ d(o, { children: _ }),
			/* @__PURE__ */ f(i, { children: [
				h ? /* @__PURE__ */ d(u, {
					sx: {
						fontSize: "16px",
						lineHeight: "20px"
					},
					children: h
				}) : null,
				g ? /* @__PURE__ */ d(u, {
					color: "neutral.grey4",
					sx: {
						fontSize: "12px",
						lineHeight: "16px"
					},
					children: g
				}) : null,
				x
			] }),
			T ? /* @__PURE__ */ d(t, {
				className: "confirmation-button",
				variant: "primary",
				size: "medium",
				disabled: v || w,
				onClick: S,
				sx: { width: "50%" },
				children: /* @__PURE__ */ f(s, { children: [w ? /* @__PURE__ */ d(l, {
					size: 12,
					sx: { color: "neutral.white" }
				}) : /* @__PURE__ */ d(c, { sx: { width: "12px" } }), y || D("Confirm")] })
			}) : /* @__PURE__ */ f(n, {
				sx: { width: "100%" },
				children: [/* @__PURE__ */ d(t, {
					variant: "secondary",
					size: "medium",
					disabled: v,
					onClick: C,
					sx: { width: "50%" },
					children: b || D("Cancel")
				}), /* @__PURE__ */ d(t, {
					variant: "primary",
					size: "medium",
					disabled: v || w,
					onClick: S,
					sx: { width: "50%" },
					children: /* @__PURE__ */ f(s, { children: [w ? /* @__PURE__ */ d(l, {
						size: 12,
						sx: { color: "neutral.white" }
					}) : /* @__PURE__ */ d(c, { sx: { width: "12px" } }), y || D("Confirm")] })
				})]
			})
		]
	});
};
export { m as ConfirmationDialog };

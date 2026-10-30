import { CloseIcon as e } from "../../icons/CloseIcon/index.es.js";
import { Button as t } from "../Button/Button.es.js";
import { ButtonGroup as n, CloseButton as r, Dialog as i, Wrapper as a } from "./style.es.js";
import { Box as o, CircularProgress as s, Stack as c, Typography as l } from "@mui/material";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { useTranslation as f } from "react-i18next";
// src/components/ActionConfirmDialog/ActionConfirmDialog.tsx
var p = ({ isOpen: p, title: m, subTitle: h, icon: g, confirmButtonText: _, cancelButtonText: v, onCancel: y, onConfirm: b, onClose: x, buttonDirection: S = "row", cancelButtonVariant: C = "secondary", confirmButtonVariant: w = "primary", isLoading: T, sx: E, children: D, "data-automationid": O, confirmAutomationId: k, cancelAutomationId: A }) => {
	let { t: j } = f("uiKit");
	return /* @__PURE__ */ u(i, {
		open: p,
		...O ? { "data-automationid": O } : {},
		slotProps: { backdrop: { sx: {
			backdropFilter: "blur(5px)",
			background: "rgba(0, 0, 0, 0.12)"
		} } },
		sx: E ? { "& .MuiDialog-paper": E } : void 0,
		children: /* @__PURE__ */ d(a, { children: [
			x ? /* @__PURE__ */ u(r, {
				type: "button",
				onClick: x,
				"aria-label": j("Close"),
				children: /* @__PURE__ */ u(e, {})
			}) : null,
			g,
			/* @__PURE__ */ d(c, {
				sx: { gap: 2 },
				children: [/* @__PURE__ */ u(l, {
					variant: "subtitle1",
					children: m
				}), /* @__PURE__ */ u(l, {
					variant: "body1",
					color: "neutral.grey4",
					sx: { padding: "0px 26px" },
					children: h
				})]
			}),
			D,
			/* @__PURE__ */ d(n, {
				direction: S,
				children: [v ? /* @__PURE__ */ u(t, {
					variant: C,
					size: "medium",
					fullWidth: !0,
					onClick: y,
					"data-automationid": A,
					children: v
				}) : null, _ ? /* @__PURE__ */ d(t, {
					variant: w,
					size: "medium",
					fullWidth: !0,
					onClick: b,
					disabled: T,
					"data-automationid": k,
					children: [T && /* @__PURE__ */ u(o, {
						sx: {
							width: "12px",
							marginLeft: "-12px",
							marginRight: "6px"
						},
						children: /* @__PURE__ */ u(s, {
							size: 12,
							sx: { color: "neutral.white" }
						})
					}), _ || j("I agree")]
				}) : null]
			})
		] })
	});
};
export { p as ActionConfirmDialog };

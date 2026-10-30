import { Button as e } from "../Button/Button.es.js";
import { ButtonGroup as t, Dialog as n, Text as r, TextWrapper as i, Wrapper as a } from "./style.es.js";
import { useState as o } from "react";
import { Divider as s, FormControlLabel as c, Radio as l, RadioGroup as u, Stack as d, Typography as f } from "@mui/material";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { useTranslation as h } from "react-i18next";
// src/components/QuestionPromptModal/QuestionPromptModal.tsx
var g = ({ isOpen: g, title: _, subTitle: v, icon: y, confirmText: b, cancelText: x, confirmButtonText: S, cancelButtonText: C, onCancel: w, onConfirm: T, buttonDirection: E }) => {
	let { t: D } = h("uiKit"), [O, k] = o(void 0), A = (e) => {
		k(e);
	};
	return /* @__PURE__ */ p(n, {
		open: g,
		slotProps: { backdrop: { sx: {
			backdropFilter: "blur(5px)",
			background: "rgba(0, 0, 0, 0.12)"
		} } },
		children: /* @__PURE__ */ m(a, { children: [
			y,
			/* @__PURE__ */ m(d, {
				sx: { gap: 3 },
				children: [/* @__PURE__ */ p(f, {
					variant: "caption",
					color: "neutral.grey4",
					children: v
				}), /* @__PURE__ */ p(f, {
					variant: "h4",
					children: _
				})]
			}),
			/* @__PURE__ */ p(s, { sx: {
				borderColor: "borders.primary",
				width: "100%"
			} }),
			/* @__PURE__ */ m(i, { children: [/* @__PURE__ */ p(u, { children: /* @__PURE__ */ p(c, {
				sx: {
					gap: 2,
					alignItems: "start"
				},
				control: /* @__PURE__ */ p(l, {
					checked: O === !0,
					onClick: () => A(!0)
				}),
				label: /* @__PURE__ */ m(r, { children: [/* @__PURE__ */ m(f, {
					component: "span",
					color: "primaryColors.accent",
					children: [D("Yes"), ", "]
				}), b] })
			}) }), /* @__PURE__ */ p(u, { children: /* @__PURE__ */ p(c, {
				sx: {
					gap: 2,
					alignItems: "start"
				},
				control: /* @__PURE__ */ p(l, {
					checked: O === !1,
					onClick: () => A(!1)
				}),
				label: /* @__PURE__ */ m(r, { children: [/* @__PURE__ */ m(f, {
					component: "span",
					color: "primaryColors.accent",
					children: [D("No"), ", "]
				}), x] })
			}) })] }),
			/* @__PURE__ */ m(t, {
				direction: E,
				children: [/* @__PURE__ */ p(e, {
					variant: "secondary",
					size: "medium",
					fullWidth: !0,
					onClick: w,
					children: C || D("Back")
				}), /* @__PURE__ */ p(e, {
					variant: "primary",
					size: "medium",
					fullWidth: !0,
					onClick: () => T(O),
					disabled: O === void 0,
					children: S || D("Continue")
				})]
			})
		] })
	});
};
export { g as QuestionPromptModal };

import { Button as e } from "../Button/Button.es.js";
import { StackRow as t, StackRowJB as n } from "../Stacks/index.es.js";
import { Loader as r } from "../Loader/index.es.js";
import { Wrapper as i } from "./styles.es.js";
import { useCallback as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import { useNavigate as l } from "react-router-dom";
// src/components/GeneralInfoCard/GeneralInfoCard.tsx
var u = ({ customAction: u, disabled: d, header: f, headerAction: p, headerActionContent: m, isLoading: h, footer: g, sx: _, link: v }) => {
	let y = l(), b = a(() => {
		v && y(v);
	}, [v, y]);
	return /* @__PURE__ */ s(i, {
		sx: _,
		onClick: b,
		children: h ? /* @__PURE__ */ s(r, {
			size: 48,
			sx: { color: "neutral.primary" }
		}) : /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ c(n, {
			sx: { alignItems: "flex-start" },
			children: [f, u || (p && m ? /* @__PURE__ */ s(e, {
				disabled: d,
				onClick: p,
				color: "primary",
				size: "small",
				variant: "secondary",
				children: m
			}) : null)]
		}), /* @__PURE__ */ s(t, {
			sx: { overflow: "hidden" },
			children: g
		})] })
	});
};
export { u as GeneralInfoCard };

import { chirpPalette as e } from "../../theme/palette.es.js";
import { Box as t, Typography as n, styled as r } from "@mui/material";
// src/components/Toggle/style.ts
var i = (e, t) => {
	let n = e.match(/^rgba?\(([^)]+)\)$/);
	if (!n) return e;
	let [r, i, a] = n[1].split(",").map((e) => e.trim());
	return `rgba(${r}, ${i}, ${a}, ${t})`;
}, a = r("label")`
    display: flex;
    width: max-content;
    align-items: center;
`, o = r("label")`
    display: flex;
    width: max-content;
    align-items: flex-start;
    flex-direction: column;
`, s = r("input")`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`, c = r("span", { shouldForwardProp: (e) => e !== "isLoading" && e !== "checked" && e !== "disabled" })(({ theme: t, isLoading: n, checked: r, disabled: a }) => {
	let o = e(t);
	return {
		width: "32px",
		height: "18px",
		position: "relative",
		borderRadius: "20px",
		border: "1px solid",
		borderColor: n ? `${i(o.neutral.primary, .5)}` : a ? o.borders.primary : r ? o.primaryColors.accent : o.borders.primary
	};
}), l = r(t, { shouldForwardProp: (e) => e !== "isLoading" && e !== "disabled" })(({ checked: t, isLoading: n, disabled: r, theme: i }) => {
	let a = e(i);
	return {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		height: "12px",
		width: n ? "16px" : "12px",
		left: t ? "15px" : "3px",
		top: "50%",
		transform: "translateY(-50%)",
		background: n ? a.neutral.primary : r ? a.neutral.grey4 : t ? a.primaryColors.accent : a.neutral.grey4,
		borderRadius: "17px",
		transition: "0.4s"
	};
}), u = r(n, { shouldForwardProp: (e) => e !== "checked" && e !== "disabled" })(({ theme: t, checked: n, disabled: r }) => {
	let i = e(t);
	return {
		marginRight: "12px",
		userSelect: "none",
		fontSize: "12px",
		minWidth: "60px",
		color: r ? i.neutral.grey4 : n ? i.neutral.primary : i.neutral.grey4
	};
});
export { c as Checkmark, l as CheckmarkPin, s as HiddenInput, u as Label, o as MobileToggle, a as Toggle };

import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, styled as r } from "@mui/material";
// src/components/FilterItem/style.ts
var i = r("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
`, a = r("input")`
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
`, o = r(n, { shouldForwardProp: (e) => e !== "hasAdornment" })(({ theme: n, checked: r, size: i, variant: a, hasAdornment: o }) => {
	let s = t(n);
	return {
		border: "1px solid",
		borderColor: s.borders.primary,
		background: n.palette.mode === e.Dark ? s.neutral.grey1 : s.neutral.white,
		borderRadius: "3px",
		cursor: "pointer",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		userSelect: "none",
		color: s.neutral.primary,
		width: "max-content",
		"&:hover, &:focus-visible": { borderColor: s.borders.secondary },
		...i === "small" && {
			maxHeight: "26px",
			fontSize: "12px",
			lineHeight: "20px",
			padding: o ? "3px 2px 3px 12px" : "3px 12px"
		},
		...i === "big" && {
			maxHeight: "32px",
			fontSize: "13px",
			lineHeight: "20px",
			padding: "6px 16px"
		},
		...r && {
			color: n.palette.secondary.main,
			background: a === "primary" ? s.primaryColors.accent : s.primaryColors.accentLight2 ?? s.primaryColors.accentLight,
			borderColor: s.primaryColors.accent
		}
	};
}), s = r(n)(({ theme: e, checked: t }) => ({
	padding: "2px 4px",
	background: t ? e.palette.secondary.main : e.palette.primary.dark,
	color: t ? e.palette.secondary.contrastText : e.palette.secondary.main,
	borderRadius: "3px",
	marginLeft: "10px",
	fontSize: "12px",
	lineHeight: "18px",
	minWidth: "22px",
	maxHeight: "22px",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center"
}));
export { s as Adornment, o as Checkmark, a as HiddenInput, i as Label };

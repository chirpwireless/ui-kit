import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { ButtonBase as n, styled as r } from "@mui/material";
// src/components/Button/style.ts
var i = [
	"fullWidth",
	"size",
	"variant",
	"hasIcon"
], a = r(n, { shouldForwardProp: (e) => !i.includes(String(e)) })(({ fullWidth: n, theme: r, size: i, variant: a, hasIcon: o }) => ({
	boxSizing: "border-box",
	borderRadius: "8px",
	display: "flex",
	justifyContent: "center",
	flexDirection: "row",
	alignItems: "center",
	cursor: "pointer",
	fontFamily: r.typography.button.fontFamily,
	fontStyle: "normal",
	fontWeight: 400,
	fontSize: "13px",
	lineHeight: "20px",
	letterSpacing: "0.4px",
	transition: "all 0.125s",
	gap: "4px",
	whiteSpace: "nowrap",
	width: n ? "100%" : "",
	...i === "big" && {
		padding: o ? "14px 24px 14px 20px" : "14px 24px",
		minHeight: "48px",
		height: "48px"
	},
	...i === "medium" && {
		padding: o ? "8px 20px 8px 16px" : "8px 16px",
		minHeight: "36px",
		height: "36px"
	},
	...i === "small" && {
		padding: o ? "4px 16px 4px 12px" : "4px 12px",
		minHeight: "28px",
		height: "28px"
	},
	...a === "primary" && {
		background: t(r).primaryColors.accent,
		color: r.palette.secondary.main,
		border: `1px solid ${t(r).primaryColors.accent}`,
		"&:hover, &:active": { background: t(r).primaryColors.accentHover },
		"&:disabled": { opacity: "0.3" },
		"&:focus-visible": { borderColor: t(r).borders.secondary }
	},
	...a === "secondary" && {
		background: t(r).primaryColors.accentLight,
		color: t(r).primaryColors.accent,
		borderColor: "none",
		"&:hover, &:active": {
			background: t(r).primaryColors.accentLightHover,
			color: t(r).primaryColors.accentHover
		},
		"&:disabled": { opacity: "0.3" },
		"&:focus-visible": { borderColor: t(r).borders.secondary }
	},
	...a === "sidebar" && {
		background: "transparent",
		color: t(r).neutral.primary,
		border: "1px solid transparent",
		"&:hover, &:active": { background: t(r).primaryColors.accentLight2 },
		"&:disabled": { opacity: "0.3" },
		"&:focus-visible": { borderColor: t(r).borders.secondary }
	},
	...a === "tertiary" && {
		background: r.palette.mode === e.Dark ? t(r).neutral.grey1 : t(r).neutral.white,
		color: t(r).neutral.primary,
		border: `1px solid ${t(r).borders.primary}`,
		"&:hover, &:active": {
			background: t(r).primaryColors.accentLight,
			color: t(r).primaryColors.accentHover,
			borderColor: t(r).primaryColors.accent
		},
		"&:disabled": { opacity: "0.3" },
		"&:focus-visible": { borderColor: t(r).borders.secondary }
	},
	...a === "icon" && {
		background: r.palette.mode === e.Dark ? t(r).neutral.black : t(r).neutral.white,
		color: t(r).neutral.primary,
		border: "none",
		...i === "small" && {
			padding: "5px",
			minWidth: n ? "100%" : "28px",
			width: n ? "100%" : "28px",
			height: "28px"
		},
		...i === "medium" && {
			padding: "9px",
			minWidth: n ? "100%" : "36px",
			width: n ? "100%" : "36px",
			height: "36px"
		},
		...i === "big" && {
			padding: "15px",
			minWidth: n ? "100%" : "48px",
			width: n ? "100%" : "48px",
			height: "48px"
		},
		"&:hover, &:active": {
			background: t(r).primaryColors.accentLightHover,
			color: t(r).primaryColors.accent
		},
		"&:focus-visible": { borderColor: "none" }
	},
	...a === "text" && {
		padding: 0,
		minHeight: "20px",
		height: "20px",
		borderRadius: 0,
		color: t(r).primaryColors.accent,
		"&:hover, &:active": {
			color: t(r).primaryColors.accentHover,
			textDecoration: "underline"
		},
		"&:disabled": { opacity: "0.3" }
	},
	...a === "outlined" && {
		background: "transparent",
		color: t(r).primaryColors.accent,
		border: `1px solid ${t(r).primaryColors.accent}`,
		"&:hover, &:active": {
			background: t(r).primaryColors.accentLight2,
			color: t(r).primaryColors.accentHover,
			borderColor: t(r).primaryColors.accentHover
		},
		"&:disabled": { opacity: "0.3" },
		"&:focus-visible": { borderColor: t(r).borders.secondary }
	},
	...a === "grouped" && {
		background: t(r).primaryColors.accent,
		color: t(r).neutral.primary,
		border: `1px solid ${t(r).primaryColors.accent}`,
		"&:hover, &:active": { background: t(r).primaryColors.accentHover },
		"&:disabled": { opacity: "0.3" },
		"&:focus-visible": { borderColor: t(r).borders.secondary }
	}
}));
export { a as Button };

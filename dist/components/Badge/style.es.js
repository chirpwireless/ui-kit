import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, styled as r } from "@mui/material";
// src/components/Badge/style.ts
var i = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		borderRadius: "12px",
		padding: "4px 12px",
		background: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		border: `1px solid ${r.borders.primary}`,
		overflow: "hidden",
		textOverflow: "ellipsis",
		textAlign: "center",
		width: "min-content",
		color: r.neutral.primary
	};
}), a = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		borderRadius: "12px",
		padding: "4px 12px",
		background: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		border: `1px solid ${r.borders.primary}`,
		overflow: "hidden",
		textOverflow: "ellipsis",
		textAlign: "center",
		width: "min-content",
		color: r.neutral.primary,
		float: "left",
		margin: "2px"
	};
});
export { i as Badge, a as SimpleBadge };

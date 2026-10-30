import { chirpPalette as e } from "../../../../theme/palette.es.js";
import { Stack as t, styled as n } from "@mui/material";
// src/components/Table/components/MobileCards/style.ts
var r = n(t)(() => ({
	gap: "8px",
	width: "100%"
})), i = n(t)(({ theme: t, clickable: n }) => ({
	gap: "8px",
	padding: "12px 16px",
	borderRadius: "12px",
	border: `1px solid ${e(t).borders.primary}`,
	backgroundColor: t.palette.background.paper,
	cursor: n ? "pointer" : "default"
})), a = n(t)(() => ({
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "baseline",
	gap: "12px"
})), o = n("div")(({ theme: t }) => {
	let n = e(t);
	return {
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0.2px",
		fontFamily: t.typography.fontFamily,
		color: n.neutral.grey3,
		flexShrink: 0
	};
}), s = n("div")(({ theme: t }) => {
	let n = e(t);
	return {
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0.2px",
		fontFamily: t.typography.fontFamily,
		color: n.neutral.primary,
		textAlign: "right",
		minWidth: 0
	};
}), c = n(t)(({ theme: t }) => {
	let n = e(t);
	return {
		padding: "8px 4px 0",
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0.2px",
		fontFamily: t.typography.fontFamily,
		color: n.primaryColors.accent
	};
});
export { i as Card, a as CardField, r as CardsList, o as FieldLabel, s as FieldValue, c as GroupLabel };

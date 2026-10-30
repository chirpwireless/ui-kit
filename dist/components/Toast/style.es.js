import { chirpPalette as e } from "../../theme/palette.es.js";
import { IconButton as t, Stack as n, Typography as r, styled as i } from "@mui/material";
// src/components/Toast/style.ts
var a = i(n)(({ theme: t }) => ({
	gap: t.spacing(3),
	color: e(t).neutral.primary,
	padding: t.spacing(3),
	width: "100%"
})), o = i("span")({
	minWidth: 32,
	display: "flex"
}), s = i(r)(({ theme: t }) => ({
	color: e(t).neutral.primary,
	lineHeight: 1.2,
	textTransform: "capitalize"
})), c = i(r)(({ theme: t }) => ({
	color: e(t).neutral.primary,
	lineHeight: 1.15
})), l = i(t)(({ theme: t }) => ({
	width: 24,
	height: 24,
	padding: 2,
	color: e(t).neutral.primary,
	marginLeft: "auto"
}));
export { l as CloseButton, o as IconWrap, a as Root, c as Text, s as Title };

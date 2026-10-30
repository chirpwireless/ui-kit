import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, Typography as r, styled as i } from "@mui/material";
// src/components/Modal/style.ts
var a = (e, t) => {
	let n = e.match(/^rgba?\(([^)]+)\)$/);
	if (!n) return e;
	let [r, i, a] = n[1].split(",").map((e) => e.trim());
	return `rgba(${r}, ${i}, ${a}, ${t})`;
}, o = i(n)(({ theme: n }) => {
	let r = t(n);
	return {
		background: a(n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white, .5),
		backdropFilter: "blur(5px)",
		WebkitBackdropFilter: "blur(5px)",
		position: "fixed",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: n.zIndex.modal
	};
}), s = i(n)(({ theme: n }) => {
	let r = t(n);
	return {
		background: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		borderRadius: "12px",
		border: `1px solid ${r.borders.primary}`,
		boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
		padding: "24px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		[n.breakpoints.up("md")]: { minWidth: "460px" }
	};
}), c = i(r)(({ theme: e }) => ({
	color: t(e).neutral.primary,
	fontSize: "16px",
	textAlign: "center"
})), l = i(r)(({ theme: e }) => ({
	color: t(e).neutral.grey4,
	fontSize: "12px",
	textAlign: "center"
}));
export { o as Container, l as Description, s as Modal, c as Title };

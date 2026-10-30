import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { TableCell as n, TableRow as r, alpha as i, styled as a } from "@mui/material";
// src/components/Table/style.ts
var o = a(r, { shouldForwardProp: (e) => e !== "disableHover" })(({ theme: n, disableHover: r }) => {
	let i = t(n);
	return {
		position: "relative",
		...!r && { "&:hover": { "& td": {
			position: "relative",
			backgroundColor: n.palette.mode === e.Dark ? i.neutral.black : i.neutral.white,
			boxShadow: `inset 0 4px 0 ${i.neutral.grey1}, inset 0 -4px 0 ${i.neutral.grey1}`,
			"&:first-of-type": {
				borderTopLeftRadius: 8,
				borderBottomLeftRadius: 8,
				boxShadow: `inset 4px 4px 0 ${i.neutral.grey1}, inset 0 -4px 0 ${i.neutral.grey1}`
			},
			"&:last-of-type": {
				borderTopRightRadius: 8,
				borderBottomRightRadius: 8,
				boxShadow: `inset -4px 4px 0 ${i.neutral.grey1}, inset 0 -4px 0 ${i.neutral.grey1}`
			}
		} } }
	};
}), s = a(n)(({ theme: e }) => {
	let n = t(e);
	return {
		height: e.spacing(5),
		padding: "12px",
		border: "none",
		borderBottom: `1px solid ${i(n.borders.primary, .3)}`,
		fontFamily: e.typography.fontFamily,
		opacity: 1,
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0.2px",
		color: n.neutral.primary,
		[e.breakpoints.down("lg")]: { padding: "8px 6px" }
	};
}), c = a("div")(({ theme: e }) => ({
	height: "100%",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(2)
})), l = a("div")(({ theme: e }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: e.spacing(2)
}));
export { s as Cell, l as HeaderWrapper, o as Row, c as TableWrapper };

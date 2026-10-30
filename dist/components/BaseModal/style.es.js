import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, Dialog as r, IconButton as i, Stack as a, styled as o } from "@mui/material";
// src/components/BaseModal/style.ts
var s = o(r, { shouldForwardProp: (e) => e !== "customWidth" })(({ theme: n, customWidth: r }) => {
	let i = t(n);
	return {
		"& .MuiDialog-container": { [n.breakpoints.down("sm")]: { alignItems: "flex-end" } },
		"& .MuiDialog-paper": {
			minWidth: r,
			maxWidth: r,
			borderRadius: "12px",
			backgroundColor: n.palette.mode === e.Dark ? i.neutral.black : i.neutral.white,
			border: "none",
			boxShadow: `0 8px 32px ${i.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
			[n.breakpoints.down("md")]: {
				margin: "0px",
				minWidth: "100%",
				maxHeight: "100dvh",
				overflowY: "auto",
				padding: "40px 20px",
				borderRadius: "12px 12px 0 0"
			}
		}
	};
}), c = o(n)(() => ({
	borderRadius: "12px",
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	justifyContent: "space-between"
})), l = o(a)(() => ({
	textAlign: "center",
	gap: 4
})), u = o(a)(({ theme: e }) => ({
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "12px",
	"& > button": { width: "100%" },
	[e.breakpoints.down("sm")]: { flexDirection: "column-reverse" }
})), d = o(i)(({ theme: e }) => ({
	position: "absolute",
	top: "12px",
	right: "12px",
	color: t(e).neutral.primary,
	"&:hover": { backgroundColor: "transparent" }
})), f = o(d)(() => ({
	right: "unset",
	left: "12px"
}));
export { u as Action, f as BackIconButton, d as CloseIconButton, s as StyledDialog, l as Title, c as Wrapper };

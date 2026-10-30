import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Dialog as n, DialogContent as r, IconButton as i, dialogClasses as a, dialogContentClasses as o, styled as s } from "@mui/material";
// src/components/Dialog/Dialog.ts
var c = s(n)(({ theme: n }) => {
	let r = t(n);
	return {
		backdropFilter: "blur(4px)",
		[`& .${a.paper}`]: {
			background: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
			borderRadius: "12px",
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
			padding: "20px",
			minWidth: "unset",
			[`${n.breakpoints.down("md")}`]: {
				width: "100%",
				margin: "0 12px",
				maxWidth: "unset",
				maxHeight: "unset",
				alignItems: "center"
			}
		}
	};
}), l = s(r)(() => ({
	textTransform: "none",
	[`&.${o.root}`]: {
		margin: 0,
		padding: 0,
		width: "100%",
		boxSizing: "border-box"
	}
})), u = s(i)(() => ({
	marginTop: "-12px",
	marginRight: "-12px"
}));
export { u as CloseButton, c as Dialog, l as DialogContent };

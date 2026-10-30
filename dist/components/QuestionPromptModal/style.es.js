import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Dialog as n, Stack as r, Typography as i, dialogClasses as a, styled as o } from "@mui/material";
// src/components/QuestionPromptModal/style.ts
var s = o(n)(({ theme: n }) => {
	let r = t(n);
	return {
		[n.breakpoints.down("sm")]: {
			width: "100%",
			margin: "auto"
		},
		[`& .${a.paper}`]: {
			alignItems: "start",
			minWidth: "auto",
			maxWidth: "396px",
			overflow: "hidden",
			margin: "0px",
			padding: "36px 30px 30px",
			borderRadius: "12px",
			backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`
		}
	};
}), c = o(r)(() => ({
	flexDirection: "column",
	gap: "24px",
	justifyContent: "space-between",
	alignItems: "start"
})), l = o(c)(() => ({ gap: "24px" })), u = o(r)(({ direction: e = "row" }) => ({
	flexDirection: e,
	gap: 12,
	width: "100%"
})), d = o(i)(({ theme: e }) => ({
	color: t(e).neutral.primary,
	fontSize: "13px",
	fontWeight: 400
}));
export { u as ButtonGroup, s as Dialog, d as Text, l as TextWrapper, c as Wrapper };

import { CurrentTheme as e } from "../../../../styles/constants.es.js";
import { chirpPalette as t } from "../../../../theme/palette.es.js";
import { TableCell as n, TableRow as r, styled as i } from "@mui/material";
// src/components/Table/components/TableHead/style.ts
var a = i(r)`
    &:hover,
    &.MuiTableRow-hover:hover {
        background-color: transparent !important;
        td,
        th {
            background-color: transparent !important;
        }
    }
`, o = i(n)(({ theme: n }) => {
	let r = t(n);
	return {
		padding: "18px 12px 12px",
		backgroundColor: "transparent !important",
		borderBottom: `1px solid ${n.palette.mode, e.Dark, r.borders.primary}`,
		fontSize: "14px",
		lineHeight: "20px",
		fontFamily: n.typography.fontFamily,
		color: r.neutral.grey3,
		whiteSpace: "nowrap",
		cursor: "auto",
		letterSpacing: "0.2px",
		[n.breakpoints.down("lg")]: { padding: "8px 6px" }
	};
});
export { o as HeadCell, a as Row };

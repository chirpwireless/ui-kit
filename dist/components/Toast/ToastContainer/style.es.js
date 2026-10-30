import { styled as e } from "@mui/material";
import { ToastContainer as t } from "react-toastify";
// src/components/Toast/ToastContainer/style.ts
var n = e(t)(({ theme: e }) => ({
	"&&&.Toastify__toast-container": {
		width: "min(460px, calc(100% - 2rem))",
		padding: 0,
		bottom: "16px",
		right: "32px",
		[e.breakpoints.down("md")]: {
			right: "16px",
			left: "unset"
		},
		[e.breakpoints.down("sm")]: {
			top: "unset",
			bottom: "16px",
			right: "16px",
			left: "16px",
			width: "calc(100% - 32px)"
		}
	},
	".Toastify__toast": {
		padding: 0,
		borderRadius: "8px",
		minHeight: "unset",
		background: "transparent",
		overflow: "hidden"
	},
	".Toastify__toast-body": {
		padding: 0,
		margin: 0
	}
}));
export { n as Container };

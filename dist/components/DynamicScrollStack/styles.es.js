import { Stack as e, styled as t } from "@mui/material";
// src/components/DynamicScrollStack/styles.ts
var n = t(e, { shouldForwardProp: (e) => e !== "isScrolling" })(({ isScrolling: e }) => ({
	overflowX: "hidden",
	overflowY: "auto",
	"&::-webkit-scrollbar-track": { backgroundColor: e ? "inherit" : "transparent !important" },
	"&::-webkit-scrollbar-thumb": {
		backgroundColor: e ? "inherit" : "transparent !important",
		transition: "background-color 0.2s"
	},
	"&::-webkit-scrollbar-thumb:hover": { backgroundColor: e ? "inherit" : "transparent !important" }
}));
export { n as ScrollContainer };

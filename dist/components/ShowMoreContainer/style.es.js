import { Box as e, Stack as t, styled as n } from "@mui/material";
// src/components/ShowMoreContainer/style.ts
var r = n(e)(() => ({ float: "left" })), i = n(t, { shouldForwardProp: (e) => e !== "open" })(({ open: e }) => ({
	height: 26,
	width: 30,
	alignItems: "center",
	position: "absolute",
	right: "0",
	svg: {
		transition: "transform 0.2s ease",
		transform: e ? "rotate(-180deg)" : "rotate(0deg)"
	}
})), a = n(e, { shouldForwardProp: (e) => e !== "open" && e !== "heightFull" && e !== "height" })(({ open: e, height: t, heightFull: n }) => ({
	transition: "all 0.3s ease",
	height: e ? n : t,
	overflow: "hidden",
	paddingRight: "30px"
})), o = n(t)(() => ({
	flexDirection: "row",
	justifyContent: "flex-start",
	flexWrap: "nowrap",
	padding: 2
}));
export { i as Arrow, a as BoxWrapper, r as Mark, o as Wrapper };

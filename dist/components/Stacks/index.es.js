import { Stack as e, styled as t } from "@mui/material";
// src/components/Stacks/index.ts
var n = (e, t) => typeof t == "number" ? e.spacing(t) : t ?? e.spacing(2), r = t(e, { shouldForwardProp: (e) => e !== "gap" })(({ theme: e, gap: t }) => ({
	flexDirection: "row",
	alignItems: "center",
	gap: n(e, t)
})), i = t(r)({ justifyContent: "center" }), a = t(r)({ justifyContent: "space-between" }), o = t(e, { shouldForwardProp: (e) => e !== "gap" })(({ theme: e, gap: t }) => ({
	flexDirection: "column",
	alignItems: "center",
	gap: n(e, t)
})), s = t(e, { shouldForwardProp: (e) => e !== "gap" })(({ theme: e, gap: t }) => ({
	flexDirection: "column",
	alignItems: "flex-start",
	gap: n(e, t)
}));
export { o as StackColumn, s as StackColumnS, r as StackRow, a as StackRowJB, i as StackRowJC };

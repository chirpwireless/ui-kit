import { chirpPalette as e } from "../../theme/palette.es.js";
import { Stack as t, styled as n } from "@mui/material";
// src/components/GradientCard/GradientCard.tsx
var r = n(t)(({ theme: t }) => {
	let n = e(t);
	return {
		padding: "16px",
		background: n.framing?.opacityGradient ?? `linear-gradient(180deg, transparent 0%, ${n.primaryColors.accentLight} 100%)`,
		border: `1px solid ${n.borders.primary}`,
		borderRadius: "12px",
		boxShadow: `0 8px 24px ${n.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
		textAlign: "center"
	};
});
export { r as GradientCard };

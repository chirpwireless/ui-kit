import { styled as a, Box as o } from "@mui/material";
import { chirpPalette as i } from "../../theme/palette.es.js";
const p = a(o)(({ theme: t }) => {
  var e;
  const r = i(t);
  return {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: ((e = r.framing) == null ? void 0 : e.opacityGradient) ?? `linear-gradient(180deg, transparent 0%, ${r.primaryColors.accentLight} 100%)`,
    border: `1px solid ${r.borders.primary}`,
    borderRadius: "12px",
    boxShadow: `0 8px 24px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
    textAlign: "center"
  };
});
export {
  p as GradientCard
};

import { styled as e, Stack as o } from "@mui/material";
import { chirpPalette as d } from "../../theme/palette.es.js";
const p = e(o)(({ theme: a }) => {
  var t;
  const r = d(a);
  return {
    padding: "16px",
    background: ((t = r.framing) == null ? void 0 : t.opacityGradient) ?? `linear-gradient(180deg, transparent 0%, ${r.primaryColors.accentLight} 100%)`,
    border: `1px solid ${r.borders.primary}`,
    borderRadius: "12px",
    boxShadow: `0 8px 24px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
    textAlign: "center"
  };
});
export {
  p as GradientCard
};

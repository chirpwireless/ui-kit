import { styled as d, Stack as e } from "@mui/material";
import { chirpPalette as p } from "../../theme/palette.es.js";
import { shouldForwardLayoutProp as i, layoutStyles as n } from "../_layout/layoutProps.es.js";
const g = d(e, { shouldForwardProp: i })(
  ({ theme: o, ...a }) => {
    var t;
    const r = p(o);
    return {
      padding: "16px",
      background: ((t = r.framing) == null ? void 0 : t.opacityGradient) ?? `linear-gradient(180deg, transparent 0%, ${r.primaryColors.accentLight} 100%)`,
      border: `1px solid ${r.borders.primary}`,
      borderRadius: "12px",
      boxShadow: `0 8px 24px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
      textAlign: "center",
      ...n(o, a)
    };
  }
);
export {
  g as GradientCard
};

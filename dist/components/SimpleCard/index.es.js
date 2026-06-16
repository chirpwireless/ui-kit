import { styled as t, Stack as a } from "@mui/material";
import { CurrentTheme as l } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
import { shouldForwardLayoutProp as d, layoutStyles as p } from "../_layout/layoutProps.es.js";
const m = t(a, { shouldForwardProp: d })(
  ({ theme: r, ...e }) => {
    const o = n(r);
    return {
      backgroundColor: r.palette.mode === l.Dark ? o.neutral.black : o.neutral.white,
      border: "none",
      borderRadius: "12px",
      padding: "24px",
      overflowX: "hidden",
      overflowY: "auto",
      "::-webkit-scrollbar": { display: "none" },
      ...p(r, e)
    };
  }
), b = t(a, { shouldForwardProp: d })(
  ({ theme: r, ...e }) => {
    const o = n(r);
    return {
      backgroundColor: r.palette.mode === l.Dark ? o.neutral.black : o.neutral.white,
      border: "none",
      borderRadius: "8px",
      padding: "11px",
      alignItems: "center",
      justifyContent: "center",
      ...p(r, e)
    };
  }
);
export {
  m as SimpleCard,
  b as SimpleSmallCard
};

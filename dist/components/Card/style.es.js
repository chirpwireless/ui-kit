import { styled as a, Box as n, Typography as d } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as l } from "../../theme/palette.es.js";
const h = a(n, {
  shouldForwardProp: (o) => o !== "fullContent" && o !== "isClickable"
})(({ theme: o, fullContent: e, isClickable: i }) => {
  const r = l(o), { breakpoints: t } = o;
  return {
    background: o.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white,
    border: `1px solid ${r.borders.primary}`,
    padding: e ? 0 : "20px",
    borderRadius: "12px",
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    ...i && {
      "&:hover": {
        background: r.primaryColors.accentLight2 ?? r.primaryColors.accentLight,
        border: `1px solid ${r.primaryColors.accent}`,
        boxShadow: `0 8px 32px ${r.shadow}`
      }
    },
    [t.between("md", "lg")]: {
      overflow: "auto",
      "&.non-scrollable": {
        overflow: "hidden"
      }
    },
    [t.down("md")]: {
      padding: e ? 0 : "24px 12px",
      overflow: "auto",
      "&.non-scrollable": {
        overflow: "hidden"
      }
    }
  };
}), m = a(d, {
  shouldForwardProp: (o) => o !== "size"
})(({ theme: o, size: e }) => ({
  ...e === "large" && {
    fontSize: "20px",
    lineHeight: "24px",
    color: l(o).neutral.primary
  },
  ...e === "small" && {
    fontSize: "12px",
    lineHeight: "20px",
    color: l(o).neutral.primary
  }
}));
export {
  h as Card,
  m as Title
};

import { styled as d, ButtonBase as l } from "@mui/material";
import { CurrentTheme as n } from "../../styles/constants.es.js";
import { chirpPalette as o } from "../../theme/palette.es.js";
const b = d(l, { shouldForwardProp: (a) => a !== "fullWidth" })(({ fullWidth: a, theme: r, size: c, variant: i, hasIcon: p }) => ({
  boxSizing: "border-box",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  fontFamily: r.typography.button.fontFamily,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "20px",
  letterSpacing: "0.4px",
  transition: "all 0.125s",
  gap: "4px",
  whiteSpace: "nowrap",
  width: a ? "100%" : "",
  ...c === "big" && {
    padding: p ? "14px 24px 14px 20px" : "14px 24px",
    minHeight: "48px",
    height: "48px"
  },
  ...c === "medium" && {
    padding: p ? "8px 20px 8px 16px" : "8px 16px",
    minHeight: "36px",
    height: "36px"
  },
  ...c === "small" && {
    padding: p ? "4px 16px 4px 12px" : "4px 12px",
    minHeight: "28px",
    height: "28px"
  },
  ...i === "primary" && {
    background: o(r).primaryColors.accent,
    color: r.palette.secondary.main,
    border: `1px solid ${o(r).primaryColors.accent}`,
    "&:hover, &:active": {
      background: o(r).primaryColors.accentHover
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o(r).borders.secondary
    }
  },
  ...i === "secondary" && {
    background: o(r).primaryColors.accentLight,
    color: o(r).primaryColors.accent,
    borderColor: "none",
    "&:hover, &:active": {
      background: o(r).primaryColors.accentLightHover,
      color: o(r).primaryColors.accentHover
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o(r).borders.secondary
    }
  },
  ...i === "sidebar" && {
    background: "transparent",
    color: o(r).neutral.primary,
    border: "1px solid transparent",
    "&:hover, &:active": {
      background: o(r).primaryColors.accentLight2
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o(r).borders.secondary
    }
  },
  ...i === "tertiary" && {
    background: r.palette.mode === n.Dark ? o(r).neutral.grey1 : o(r).neutral.white,
    color: o(r).neutral.primary,
    border: `1px solid ${o(r).borders.primary}`,
    "&:hover, &:active": {
      background: o(r).primaryColors.accentLight,
      color: o(r).primaryColors.accentHover,
      borderColor: o(r).primaryColors.accent
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o(r).borders.secondary
    }
  },
  ...i === "icon" && {
    background: r.palette.mode === n.Dark ? o(r).neutral.black : o(r).neutral.white,
    color: o(r).neutral.primary,
    border: "none",
    ...c === "small" && {
      padding: "5px",
      minWidth: a ? "100%" : "28px",
      width: a ? "100%" : "28px",
      height: "28px"
    },
    ...c === "medium" && {
      padding: "9px",
      minWidth: a ? "100%" : "36px",
      width: a ? "100%" : "36px",
      height: "36px"
    },
    ...c === "big" && {
      padding: "15px",
      minWidth: a ? "100%" : "48px",
      width: a ? "100%" : "48px",
      height: "48px"
    },
    "&:hover, &:active": {
      background: o(r).primaryColors.accentLightHover,
      color: o(r).primaryColors.accent
    },
    "&:focus-visible": {
      borderColor: "none"
    }
  },
  ...i === "text" && {
    padding: 0,
    minHeight: "20px",
    height: "20px",
    borderRadius: 0,
    color: o(r).primaryColors.accent,
    "&:hover, &:active": {
      color: o(r).primaryColors.accentHover,
      textDecoration: "underline"
    },
    "&:disabled": {
      opacity: "0.3"
    }
  },
  ...i === "outlined" && {
    background: "transparent",
    color: o(r).primaryColors.accent,
    border: `1px solid ${o(r).primaryColors.accent}`,
    "&:hover, &:active": {
      background: o(r).primaryColors.accentLight2,
      color: o(r).primaryColors.accentHover,
      borderColor: o(r).primaryColors.accentHover
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o(r).borders.secondary
    }
  },
  ...i === "grouped" && {
    background: o(r).primaryColors.accent,
    color: o(r).neutral.primary,
    border: `1px solid ${o(r).primaryColors.accent}`,
    "&:hover, &:active": {
      background: o(r).primaryColors.accentHover
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o(r).borders.secondary
    }
  }
}));
export {
  b as Button
};

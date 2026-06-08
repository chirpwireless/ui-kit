import { styled as t, Box as a } from "@mui/material";
import { CurrentTheme as l } from "../../styles/constants.es.js";
import { chirpPalette as d } from "../../theme/palette.es.js";
const m = t("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
`, g = t("input")`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`, y = t(a, {
  shouldForwardProp: (r) => r !== "hasAdornment"
})(({ theme: r, checked: o, size: i, variant: n, hasAdornment: p }) => {
  const e = d(r);
  return {
    border: "1px solid",
    borderColor: e.borders.primary,
    background: r.palette.mode === l.Dark ? e.neutral.grey1 : e.neutral.white,
    borderRadius: "3px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    userSelect: "none",
    color: e.neutral.primary,
    width: "max-content",
    "&:hover, &:focus-visible": {
      borderColor: e.borders.secondary
    },
    ...i === "small" && {
      maxHeight: "26px",
      fontSize: "12px",
      lineHeight: "20px",
      padding: p ? "3px 2px 3px 12px" : "3px 12px"
    },
    ...i === "big" && {
      maxHeight: "32px",
      fontSize: "13px",
      lineHeight: "20px",
      padding: "6px 16px"
    },
    ...o && {
      color: r.palette.secondary.main,
      background: n === "primary" ? e.primaryColors.accent : e.primaryColors.accentLight2 ?? e.primaryColors.accentLight,
      borderColor: e.primaryColors.accent
    }
  };
}), u = t(a)(({ theme: r, checked: o }) => ({
  padding: "2px 4px",
  background: o ? r.palette.secondary.main : r.palette.primary.dark,
  color: o ? r.palette.secondary.contrastText : r.palette.secondary.main,
  borderRadius: "3px",
  marginLeft: "10px",
  fontSize: "12px",
  lineHeight: "18px",
  minWidth: "22px",
  maxHeight: "22px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
}));
export {
  u as Adornment,
  y as Checkmark,
  g as HiddenInput,
  m as Label
};

import { styled as p, Select as i } from "@mui/material";
import { CurrentTheme as t } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const d = p(i)(({ theme: r, size: o }) => {
  const e = n(r);
  return {
    backgroundColor: r.palette.mode === t.Dark ? e.neutral.grey1 : e.neutral.white,
    borderRadius: "8px",
    border: "none",
    fontFamily: r.typography.fontFamily,
    marginTop: "16px",
    boxSizing: "border-box",
    "&.MuiInputBase-root": {
      height: "36px",
      minHeight: "36px",
      boxSizing: "border-box",
      border: `1px solid ${e.borders.primary}`,
      gap: "8px",
      ...o === "small" && {
        height: "32px",
        minHeight: "32px"
      },
      "&:hover:not(.Mui-disabled)": {
        borderColor: e.primaryColors.accent
      },
      "&.Mui-focused": {
        borderColor: e.primaryColors.accent
      },
      "&.Mui-error": {
        borderColor: e.alerts.alert
      }
    },
    ".MuiSelect-select": {
      padding: "8px 44px 8px 16px",
      fontFamily: r.typography.fontFamily,
      display: "block",
      alignItems: "center",
      minHeight: "unset",
      height: "20px",
      boxSizing: "border-box",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      ...o === "small" && {
        padding: "6px 44px 6px 12px"
      },
      "&.MuiInputBase-input": {
        padding: "0px 44px 8px 16px",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.2px",
        minHeight: "unset",
        height: "20px",
        boxSizing: "border-box",
        ...o === "small" && {
          padding: "0px 44px 6px 12px"
        }
      }
    },
    ".MuiSelect-icon": {
      right: "16px",
      top: "calc(50% - 10px)",
      width: "20px",
      height: "20px"
    },
    ".MuiInputBase-adornedEnd": {
      paddingRight: "20px"
    },
    input: {
      padding: "8px 16px",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      fontFamily: r.typography.fontFamily,
      boxSizing: "border-box"
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
      display: "none"
    },
    label: {
      padding: 0,
      left: "-12px",
      backgroundColor: "transparent",
      color: e.neutral.primary,
      "&.MuiInputLabel-shrink": {
        fontSize: "14px",
        lineHeight: "20px",
        top: "4px",
        left: "-12px"
      },
      "&.Mui-focused": {
        color: e.primaryColors.accent
      },
      "&.Mui-error": {
        color: e.alerts.alert
      }
    }
  };
});
export {
  d as Select
};

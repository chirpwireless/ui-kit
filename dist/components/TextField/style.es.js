import { styled as t, TextField as p } from "@mui/material";
import { CurrentTheme as i } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const l = t(p)(({ theme: o }) => {
  const r = n(o);
  return {
    borderRadius: "8px",
    border: "none",
    fontFamily: o == null ? void 0 : o.typography.fontFamily,
    marginTop: "16px",
    // Background must sit on the input box only — applying it to the root paints the
    // label/helper-text area too, which shows as a light patch over the card in light theme.
    "& .MuiInputBase-root": {
      backgroundColor: o.palette.mode === i.Dark ? r.neutral.grey1 : r.neutral.white,
      height: "36px",
      minHeight: "36px",
      boxSizing: "border-box",
      border: `1px solid ${r.borders.primary}`,
      borderRadius: "8px",
      "&.MuiInputBase-sizeSmall": {
        height: "32px",
        minHeight: "32px"
      },
      "&:hover": {
        borderColor: r.primaryColors.accent
      },
      "&.Mui-focused": {
        borderColor: r.primaryColors.accent
      },
      "&.Mui-error": {
        border: `1px solid ${r.alerts.alert}`,
        borderRadius: "8px"
      }
    },
    "& .MuiInputBase-root.MuiInputBase-multiline": {
      height: "auto",
      minHeight: "unset"
    },
    ".MuiFormControl-root.MuiTextField-root": {
      borderRadius: "8px"
    },
    ".MuiSelect-select": {
      paddingTop: "12px",
      paddingLeft: "16px",
      paddingBottom: "10px",
      fontFamily: o == null ? void 0 : o.typography.fontFamily,
      "&.MuiInputBase-input": {
        paddingTop: "12px",
        paddingLeft: "16px",
        paddingBottom: "10px"
      }
    },
    ".MuiSelect-icon": {
      right: "16px"
    },
    ".MuiInputBase-adornedEnd": {
      paddingRight: "20px"
    },
    ".MuiAutocomplete-clearIndicator": {
      marginTop: "8px"
    },
    "input:-webkit-autofill": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
      border: "none",
      borderRadius: "8px",
      boxShadow: `0 0 0 100px ${o.palette.mode === i.Dark ? r.neutral.grey1 : r.neutral.white} inset!important`,
      transitionDelay: "9999s",
      transitionProperty: "background-color, color"
    },
    input: {
      padding: "8px 16px",
      fontSize: "13px",
      lineHeight: "20px",
      fontFamily: o == null ? void 0 : o.typography.fontFamily,
      color: r.neutral.primary,
      backgroundColor: "transparent"
    },
    fieldset: {
      border: "none",
      top: 0
    },
    legend: {
      fontFamily: o == null ? void 0 : o.typography.fontFamily,
      backgroundColor: "transparent",
      span: {
        padding: 0
      }
    },
    label: {
      padding: 0,
      left: "-12px",
      backgroundColor: "transparent",
      color: r.neutral.primary,
      "&.MuiInputLabel-shrink": {
        fontSize: "14px",
        lineHeight: "20px",
        top: "-8px",
        left: "-12px"
      },
      "&.Mui-focused": {
        color: r.primaryColors.accent
      },
      "&.Mui-error": {
        color: r.alerts.alert
      }
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none"
    },
    "& input[type=number]": {
      MozAppearance: "textfield"
    }
  };
});
export {
  l as TextField
};

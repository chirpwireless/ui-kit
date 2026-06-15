import { styled as t } from "@mui/material";
import { MuiTelInput as n } from "mui-tel-input";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as i } from "../../theme/palette.es.js";
const u = t(n)(({ theme: o }) => {
  const r = i(o);
  return {
    backgroundColor: o.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white,
    borderRadius: "8px",
    border: "none",
    fontFamily: o == null ? void 0 : o.typography.fontFamily,
    marginTop: "16px",
    "& svg": { height: "20px" },
    "& .MuiInputBase-root": {
      height: "auto",
      "&.MuiInput-root": {
        marginTop: "0",
        "&:before, &:after": {
          display: "none",
          borderBottom: "none"
        }
      }
    },
    ".MuiFormLabel-root": {
      "&.Mui-focused": {}
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
      boxShadow: `0 0 0 100px ${o.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white} inset!important`,
      transitionDelay: "9999s",
      transitionProperty: "background-color, color"
    },
    input: {
      padding: "12px 16px 10px 16px",
      fontSize: "13px",
      lineHeight: "20px",
      fontFamily: o == null ? void 0 : o.typography.fontFamily,
      color: r.neutral.primary
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
      }
    }
  };
});
export {
  u as PhoneField
};

import { styled as r, TextField as a, alpha as t } from "@mui/material";
const d = r(a)(({ theme: o }) => ({
  borderRadius: "8px",
  marginTop: "20px",
  ...o.typography.body1,
  ".MuiInputBase-root": {
    backgroundColor: o.palette.background.background2,
    borderRadius: "8px",
    "&:hover:not(.Mui-disabled)": {
      backgroundColor: t(o.palette.background.background11, 0.5),
      borderColor: t(o.palette.border.input2, 0.24)
    },
    "&.Mui-disabled": {
      color: t(o.palette.text.textInput40, 0.4),
      backgroundColor: o.palette.background.background8
    }
  },
  "& .MuiInputBase-root": {
    border: `1px solid ${t(o.palette.border.input, 0.14)}`
  },
  "&.MuiFormControl-root .MuiFormLabel-root": {
    transform: "none",
    left: 0,
    top: "-20px",
    color: o.palette.text.titleInput,
    ...o.typography.caption12
  },
  ".MuiFormControl-root.MuiTextField-root": {
    borderRadius: "8px"
  },
  ".MuiSelect-select": {
    paddingTop: "12px",
    paddingLeft: "16px",
    paddingBottom: "10px",
    ...o.typography.body1,
    "&.MuiInputBase-input": {
      paddingTop: "12px",
      paddingLeft: "16px",
      paddingBottom: "10px"
    }
  },
  ".MuiInputAdornment-root.MuiInputAdornment-positionStart": {
    marginRight: "4px"
  },
  "input::placeholder": {
    opacity: 0.6,
    color: o.palette.text.textInput60,
    ...o.typography.body1
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
    boxShadow: `0 0 0 100px ${o.palette.background.background2} inset!important`,
    transitionDelay: "9999s",
    transitionProperty: "background-color, color"
  },
  input: {
    padding: "10px 16px 10px 16px",
    color: o.palette.text.text1,
    borderRadius: "8px",
    ...o.typography.body1
  },
  ".MuiInputBase-root.Mui-error": {
    backgroundColor: o.palette.background.background3,
    borderColor: o.palette.base.color7
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
  "label,.MuiInputLabel-root.Mui-focused": {
    padding: 0,
    height: "16px",
    color: o.palette.text.titleInput
  },
  "& .MuiInputBase-root:focus-within": {
    backgroundColor: t(o.palette.background.background11, 0.5),
    borderColor: t(o.palette.border.input2, 0.24)
  },
  "& input:focus": {
    caretColor: o.palette.base.color6,
    color: o.palette.text.text2
  },
  "& textarea": {
    ...o.typography.body1,
    color: o.palette.text.text1
  },
  "& textarea:focus": {
    caretColor: o.palette.base.color6,
    color: o.palette.text.text2
  },
  "& textarea:hover": {
    border: "none"
  }
}));
export {
  d as TextField
};

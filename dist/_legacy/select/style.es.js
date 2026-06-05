import { styled as e, Select as n, alpha as o } from "@mui/material";
const r = e(n)(({ placeholder: p, theme: t }) => ({
  backgroundColor: t.palette.background.background2,
  borderRadius: "8px",
  border: "1px solid",
  borderColor: o(t.palette.border.input, 0.14),
  ...t.typography.body1,
  marginTop: "20px",
  "&:hover:not(.Mui-disabled)": {
    backgroundColor: o(t.palette.background.background11, 0.5),
    borderColor: o(t.palette.border.input2, 0.24),
    ".MuiSelect-icon": {
      color: o(t.palette.text.textInput80, 0.8)
    }
  },
  "&.Mui-disabled": {
    opacity: "0.3 !important",
    "& + label": {
      opacity: "0.3 !important"
    }
  },
  ".MuiSelect-select": {
    paddingTop: "12px",
    paddingLeft: "16px",
    paddingBottom: "8px",
    ...t.typography.body1,
    "&.MuiInputBase-input": {
      paddingTop: "10px",
      paddingLeft: "16px",
      paddingBottom: "10px",
      fontSize: "13px",
      lineHeight: "20px"
    }
  },
  "& .MuiSelect-select .notranslate::after": p ? {
    content: `"${p}"`,
    color: o(t.palette.text.textInput60, 0.6)
  } : {},
  "&:hover::before": p ? {
    color: o(t.palette.text.textInput80, 0.8)
  } : {},
  ".MuiSelect-icon": {
    color: o(t.palette.text.textInput60, 0.6),
    right: "16px",
    "&:not(:empty)": {
      color: t.palette.text.text1
    }
  },
  ".MuiInputBase-adornedEnd": {
    paddingRight: "20px"
  },
  input: {
    padding: "12px 16px 8px 16px",
    fontSize: "13px",
    lineHeight: "20px",
    ...t.typography.body1
  },
  fieldset: {
    border: "none",
    top: 0
  },
  legend: {
    ...t.typography.body1,
    backgroundColor: "transparent",
    span: {
      padding: 0
    }
  }
}));
export {
  r as Select
};

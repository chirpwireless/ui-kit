import { styled as e, Select as a, alpha as p, ListSubheader as n, Stack as r } from "@mui/material";
const i = e(a)(({ placeholder: o, theme: t }) => ({
  backgroundColor: t.palette.background.background2,
  borderRadius: "8px",
  border: "1px solid",
  borderColor: p(t.palette.border.input, 0.14),
  ...t.typography.body1,
  marginTop: "20px",
  "&:hover:not(.Mui-disabled)": {
    backgroundColor: p(t.palette.background.background11, 0.5),
    borderColor: p(t.palette.border.input2, 0.24),
    ".MuiSelect-icon": {
      color: p(t.palette.text.textInput80, 0.8)
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
      paddingRight: "36px !important",
      paddingBottom: "10px",
      fontSize: "13px",
      lineHeight: "20px"
    }
  },
  "& .MuiSelect-select .notranslate::after": o ? {
    content: `"${o}"`,
    color: p(t.palette.text.textInput60, 0.6)
  } : {},
  "&:hover::before": o ? {
    color: p(t.palette.text.textInput80, 0.8)
  } : {},
  ".MuiSelect-icon": {
    color: p(t.palette.text.textInput60, 0.6),
    right: "12px",
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
})), l = e(n)(({ theme: o }) => ({
  padding: "16px",
  backgroundColor: o.palette.background.background2,
  ".MuiFormControl-root": {
    marginTop: 0
  }
})), u = e(r)(({ theme: o }) => ({
  display: "flex",
  justifyContent: "space-between",
  span: {
    color: o.palette.base.color6
  }
}));
export {
  l as ListSubheader,
  u as MenuItemWrapper,
  i as Select
};

import { styled as r, Select as p, alpha as o } from "@mui/material";
const n = r(p)(({ placeholder: e, theme: t }) => ({
  backgroundColor: t.palette.background.background7,
  borderRadius: "6px",
  border: "1px solid",
  borderColor: o(t.palette.border.input, 0.14),
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
    "&.MuiInputBase-input": {
      padding: "4px 12px",
      ...t.typography.caption12
    }
  },
  "& .MuiSelect-select .notranslate::after": e ? {
    content: `"${e}"`,
    color: o(t.palette.text.textInput60, 0.6)
  } : {},
  "&:hover::before": e ? {
    color: o(t.palette.text.textInput80, 0.8)
  } : {},
  ".MuiSelect-icon": {
    color: o(t.palette.text.textInput60, 0.6),
    right: "12px",
    width: "16px",
    "&:not(:empty)": {
      color: t.palette.text.text4
    }
  },
  ".MuiInputBase-adornedEnd": {
    paddingRight: "20px"
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
  n as BadgeSelect
};

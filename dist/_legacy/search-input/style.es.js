import { styled as t, alpha as r } from "@mui/material";
import { TextField as p } from "../text-field/index.es.js";
const e = t(p)(({ theme: o }) => ({
  backgroundColor: o.palette.background.background2,
  marginTop: 0,
  svg: {
    color: o.palette.text.search
  },
  ".MuiInputBase-root": {
    borderRadius: "6px !important",
    borderColor: r(o.palette.border.input, 0.14),
    paddingLeft: "12px",
    backgroundColor: o.palette.background.background2,
    "input::placeholder": {
      color: o.palette.text.textInput60,
      opacity: 1
    },
    "&:hover": {
      backgroundColor: `${o.palette.background.background2} !important`
    }
  },
  ".MuiInputBase-input": {
    padding: "4px 12px 4px 0",
    FontSize: "13px",
    height: "20px"
  },
  ".MuiInputAdornment-root": {
    width: "24px",
    height: "24px"
  }
}));
export {
  e as SearchInputWrapper
};

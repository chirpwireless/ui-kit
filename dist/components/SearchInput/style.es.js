import { styled as t, TextField as i } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as l } from "../../theme/palette.es.js";
const u = t(i)(({ theme: e, size: o }) => {
  const r = l(e);
  return {
    width: "400px",
    "&.MuiTextField-root": {
      padding: 0
    },
    "& .MuiOutlinedInput-root": {
      height: o === "small" ? "32px" : "36px",
      minHeight: o === "small" ? "32px" : "36px",
      boxSizing: "border-box",
      borderRadius: "8px",
      backgroundColor: e.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white,
      "& fieldset": {
        borderColor: r.borders.primary,
        top: 0,
        "& legend": {
          display: "none"
        }
      },
      "&:hover fieldset": {
        borderColor: r.primaryColors.accent
      },
      "&.Mui-focused fieldset": {
        borderColor: r.primaryColors.accent,
        borderWidth: "1px"
      }
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "14px",
      padding: "7px 8px 7px 0",
      color: r.neutral.primary,
      "&::placeholder": {
        color: r.neutral.grey4,
        opacity: 1
      }
    },
    "& .MuiInputAdornment-root": {
      marginRight: "4px"
    }
  };
});
export {
  u as Search
};

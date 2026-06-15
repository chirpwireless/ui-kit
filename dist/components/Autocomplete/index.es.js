import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as p, Autocomplete as i } from "@mui/material";
import { SelectIcon as n } from "../../icons/SelectIcon/index.es.js";
const e = p(i)(({ theme: t }) => ({
  borderRadius: "8px",
  border: "none",
  fontFamily: t == null ? void 0 : t.typography.fontFamily,
  ".MuiInputBase-root": {
    height: "36px",
    minHeight: "36px",
    padding: 0,
    "&.MuiOutlinedInput-root.MuiAutocomplete-inputRoot": {
      paddingRight: "65px"
    },
    "input.MuiInputBase-input": {
      padding: "8px 16px"
    },
    ".MuiAutocomplete-endAdornment": {
      minHeight: "36px",
      right: "23px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      button: {
        height: "20px",
        width: "20px",
        padding: 0
      }
    },
    ".MuiAutocomplete-clearIndicator": {
      marginTop: 0,
      ".MuiSvgIcon-root": {
        width: "18px",
        height: "18px"
      }
    },
    ".MuiAutocomplete-popupIndicator": {
      marginTop: 0,
      ".MuiSvgIcon-root": {
        width: "18px",
        height: "18px"
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
})), u = (t) => /* @__PURE__ */ o.jsx(e, { ...t, popupIcon: t.popupIcon ?? /* @__PURE__ */ o.jsx(n, {}) }), x = u;
export {
  x as Autocomplete
};

import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as l, InputAdornment as m } from "@mui/material";
import { SearchInputWrapper as c } from "./style.es.js";
import { SvgSearch as h } from "../../search-C-ltufG_.js";
import { Loader as I } from "../loader/index.es.js";
import { useTranslation as d } from "react-i18next";
const A = ({
  value: n,
  onChange: o,
  placeholder: u,
  isLoading: t = !1,
  ...a
}) => {
  const e = l(), { t: i } = d("uiKit", { keyPrefix: "SearchInput" }), x = (p) => {
    p.preventDefault();
    const { value: s } = p.target;
    o(s);
  };
  return /* @__PURE__ */ r.jsx(
    c,
    {
      fullWidth: !0,
      placeholder: u || i("Search location"),
      InputProps: {
        value: t ? "Loading" : n,
        readOnly: t,
        onChange: x,
        sx: {
          borderRadius: "6px !important",
          "& .MuiInputAdornment-root": {
            svg: {
              path: {
                opacity: 0.3
              }
            }
          },
          "& .MuiInputBase-input.Mui-disabled": {
            padding: "4px 12px 4px 0",
            height: "20px"
          },
          ".MuiInputBase-input": {
            color: t ? e.palette.text.textInput60 : e.palette.text.text1,
            cursor: t ? "wait" : "text"
          },
          "&:focus-within .MuiInputBase-input": {
            color: t ? e.palette.text.textInput60 : e.palette.text.text1
          },
          ".MuiInputAdornment-root": {
            marginRight: t ? "4px" : "8px"
          }
        },
        startAdornment: /* @__PURE__ */ r.jsx(m, { position: "start", children: t ? /* @__PURE__ */ r.jsx(I, {}) : /* @__PURE__ */ r.jsx(h, {}) })
      },
      ...a
    }
  );
};
export {
  A as SearchInput
};

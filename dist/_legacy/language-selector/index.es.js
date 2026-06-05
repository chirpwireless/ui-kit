import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { MenuItem as i } from "@mui/material";
import { Selector as p, Select as x, TranslateIcon as c } from "./style.es.js";
const d = ({ currentLanguage: n, languages: o, onChangeLanguage: s }) => {
  const a = (e) => {
    const r = e.target.value;
    s(r);
  };
  return /* @__PURE__ */ t.jsx(p, { children: /* @__PURE__ */ t.jsx(
    x,
    {
      value: n,
      startAdornment: /* @__PURE__ */ t.jsx(c, {}),
      MenuProps: {
        PaperProps: { sx: { borderRadius: "8px" } },
        MenuListProps: {
          sx: { padding: 0, color: "text.textInput80", ".MuiMenuItem-root": { minHeight: "36px" } }
        }
      },
      onChange: a,
      children: Object.entries(o).map(([e, r]) => /* @__PURE__ */ t.jsx(i, { value: e, children: r }, e))
    }
  ) });
};
export {
  d as LanguageSelector
};

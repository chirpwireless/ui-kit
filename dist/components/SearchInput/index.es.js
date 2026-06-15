import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as c, InputAdornment as h } from "@mui/material";
import { useTranslation as l } from "react-i18next";
import { SearchIcon as x } from "../../icons/SearchIcon/index.es.js";
import { chirpPalette as u } from "../../theme/palette.es.js";
import { Search as d } from "./style.es.js";
const P = ({ value: e, sx: o, placeholder: n, onChange: i, size: p = "medium" }) => {
  const r = c(), a = u(r), { t: m } = l("uiKit", { keyPrefix: "SearchInput" });
  return /* @__PURE__ */ t.jsx(
    d,
    {
      type: "text",
      sx: o,
      value: e,
      onChange: (s) => i(s.target.value),
      placeholder: n || m("Search by name"),
      variant: "outlined",
      size: p,
      slotProps: {
        input: {
          startAdornment: /* @__PURE__ */ t.jsx(
            h,
            {
              position: "start",
              sx: { color: e ? a.primaryColors.accent : r.palette.text.disabled },
              children: /* @__PURE__ */ t.jsx(x, { width: "16px", height: "16px" })
            }
          )
        }
      }
    }
  );
};
export {
  P as SearchInput
};

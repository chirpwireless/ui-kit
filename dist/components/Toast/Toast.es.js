import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as l, Box as a } from "@mui/material";
import { useTranslation as p } from "react-i18next";
import { toast as x } from "react-toastify";
import { CloseIcon as d } from "../../icons/CloseIcon/index.es.js";
import { ErrorSolidIcon as h } from "../../icons/ErrorSolidIcon/index.es.js";
import { SuccessSolidIcon as f } from "../../icons/SuccessSolidIcon/index.es.js";
import { WarningSolidIcon as j } from "../../icons/WarningSolidIcon/index.es.js";
import { chirpPalette as u } from "../../theme/palette.es.js";
import { Root as C, IconWrap as I, Title as T, Text as g, CloseButton as S } from "./style.es.js";
const b = {
  error: h,
  warning: j,
  success: f
}, M = ({ id: t, status: r, message: i }) => {
  const s = l(), { t: n } = p("uiKit"), e = b[r], c = r === "error" ? "alert" : r, m = () => x.dismiss(t);
  return /* @__PURE__ */ o.jsxs(
    C,
    {
      direction: "row",
      sx: {
        gap: 2,
        backgroundColor: u(s).alerts[c]
      },
      children: [
        /* @__PURE__ */ o.jsx(I, { children: /* @__PURE__ */ o.jsx(e, {}) }),
        /* @__PURE__ */ o.jsxs(a, { children: [
          /* @__PURE__ */ o.jsx(
            T,
            {
              variant: "h5",
              sx: {
                mb: 0.5
              },
              children: n(r)
            }
          ),
          /* @__PURE__ */ o.jsx(g, { variant: "body2", children: i })
        ] }),
        /* @__PURE__ */ o.jsx(S, { onClick: m, size: "small", children: /* @__PURE__ */ o.jsx(d, {}) })
      ]
    }
  );
};
export {
  M as Toast
};

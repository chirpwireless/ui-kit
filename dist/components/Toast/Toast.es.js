import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as l, Box as a } from "@mui/material";
import { useTranslation as p } from "react-i18next";
import { toast as d } from "react-toastify";
import { ErrorSolidIcon as x } from "../../icons/ErrorSolidIcon/index.es.js";
import { SuccessSolidIcon as h } from "../../icons/SuccessSolidIcon/index.es.js";
import { WarningSolidIcon as f } from "../../icons/WarningSolidIcon/index.es.js";
import { CloseIcon as j } from "../../icons/CloseIcon/index.es.js";
import { chirpPalette as u } from "../../theme/palette.es.js";
import { Root as C, IconWrap as I, Title as T, Text as g, CloseButton as S } from "./style.es.js";
const b = {
  error: x,
  warning: f,
  success: h
}, M = ({ id: t, status: r, message: i }) => {
  const n = l(), { t: s } = p("uiKit"), e = b[r], c = r === "error" ? "alert" : r, m = () => d.dismiss(t);
  return /* @__PURE__ */ o.jsxs(C, { direction: "row", gap: 2, sx: { backgroundColor: u(n).alerts[c] }, children: [
    /* @__PURE__ */ o.jsx(I, { children: /* @__PURE__ */ o.jsx(e, {}) }),
    /* @__PURE__ */ o.jsxs(a, { children: [
      /* @__PURE__ */ o.jsx(T, { variant: "h5", mb: 0.5, children: s(r) }),
      /* @__PURE__ */ o.jsx(g, { variant: "body2", children: i })
    ] }),
    /* @__PURE__ */ o.jsx(S, { onClick: m, size: "small", children: /* @__PURE__ */ o.jsx(j, {}) })
  ] });
};
export {
  M as Toast
};

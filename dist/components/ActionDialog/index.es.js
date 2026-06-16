import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as h, Typography as n } from "@mui/material";
import { CheckCircleIcon as u } from "../../icons/CheckCircleIcon/index.es.js";
import { CloseIcon as f } from "../../icons/CloseIcon/index.es.js";
import { Button as j } from "../Button/Button.es.js";
import { Loader as d } from "../Loader/index.es.js";
import { Dialog as g, CloseIconButton as y, Card as C, IconWrapper as z } from "./style.es.js";
const S = ({
  isOpen: l,
  title: m,
  description: e,
  nodeDescription: o,
  buttonText: x,
  sx: c,
  icon: p,
  onApply: s,
  onClose: t,
  isLoading: i
}) => {
  const { palette: a } = h();
  return /* @__PURE__ */ r.jsxs(g, { open: l, sx: c, children: [
    t && /* @__PURE__ */ r.jsx(y, { onClick: t, children: /* @__PURE__ */ r.jsx(f, {}) }),
    /* @__PURE__ */ r.jsxs(C, { children: [
      /* @__PURE__ */ r.jsx(z, { children: p ?? /* @__PURE__ */ r.jsx(u, { color: a.primary.main }) }),
      /* @__PURE__ */ r.jsx(
        n,
        {
          color: "neutral.primary",
          sx: {
            mt: "24px",
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 500,
            textAlign: "center"
          },
          children: m
        }
      ),
      o || null,
      e ? /* @__PURE__ */ r.jsx(
        n,
        {
          color: "neutral.grey4",
          sx: {
            mt: 3,
            fontSize: "13px",
            lineHeight: "20px",
            textAlign: "center"
          },
          children: e
        }
      ) : null,
      /* @__PURE__ */ r.jsx(
        j,
        {
          size: "medium",
          sx: { marginTop: 6 },
          variant: "primary",
          fullWidth: !0,
          onClick: s,
          disabled: i,
          children: i ? /* @__PURE__ */ r.jsx(d, { color: "inherit", size: 18 }) : x
        }
      )
    ] })
  ] });
};
export {
  S as ActionDialog
};

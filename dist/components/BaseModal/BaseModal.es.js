import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as y, Typography as a, Box as B, CircularProgress as b } from "@mui/material";
import { useTranslation as I } from "react-i18next";
import { BackIcon as T } from "../../icons/BackIcon/index.es.js";
import { CloseIcon as z } from "../../icons/CloseIcon/index.es.js";
import { chirpPalette as P } from "../../theme/palette.es.js";
import { Button as s } from "../Button/Button.es.js";
import { Stepper as W } from "../Stepper/Stepper.es.js";
import { StyledDialog as v, BackIconButton as w, CloseIconButton as R, Wrapper as D, Title as E, Action as F } from "./style.es.js";
const N = ({
  title: x,
  subtitle: t,
  primaryButtonText: d,
  secondaryButtonText: p,
  onPrimaryAction: h,
  onSecondaryAction: n,
  children: u,
  customMaxWidth: j = "650px",
  disabledPrimaryButton: f = !1,
  isLoading: e,
  activeStep: i,
  steps: o,
  onClose: l,
  onBack: m,
  ...g
}) => {
  const { t: c } = I("uiKit"), k = y(), C = P(k);
  return /* @__PURE__ */ r.jsxs(
    v,
    {
      customWidth: j,
      slotProps: {
        backdrop: {
          sx: { backdropFilter: "blur(8px)", background: `${C.borders.primary}` }
        }
      },
      ...g,
      children: [
        m && (o == null ? void 0 : o.length) && i !== o[0] && /* @__PURE__ */ r.jsx(w, { onClick: m, children: /* @__PURE__ */ r.jsx(T, {}) }),
        l && /* @__PURE__ */ r.jsx(R, { onClick: l, children: /* @__PURE__ */ r.jsx(z, {}) }),
        /* @__PURE__ */ r.jsxs(D, { children: [
          /* @__PURE__ */ r.jsxs(E, { children: [
            i && o && /* @__PURE__ */ r.jsx(W, { activeStep: i, steps: o, sx: { marginBottom: 2 } }),
            /* @__PURE__ */ r.jsx(a, { variant: "subtitle1", color: "neutral.primary", children: x }),
            t && /* @__PURE__ */ r.jsx(a, { variant: "caption", color: "neutral.grey4", children: t })
          ] }),
          u,
          /* @__PURE__ */ r.jsxs(F, { children: [
            n && /* @__PURE__ */ r.jsx(s, { size: "medium", variant: "secondary", onClick: n, children: p || c("Cancel") }),
            /* @__PURE__ */ r.jsxs(
              s,
              {
                size: "medium",
                variant: "primary",
                fullWidth: !0,
                onClick: h,
                disabled: f || e,
                children: [
                  /* @__PURE__ */ r.jsx(B, { sx: { width: "12px", marginLeft: "-12px", marginRight: "6px" }, children: e && /* @__PURE__ */ r.jsx(
                    b,
                    {
                      size: 12,
                      sx: {
                        color: "neutral.white"
                      }
                    }
                  ) }),
                  d || c("Confirm")
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
};
export {
  N as BaseModal
};

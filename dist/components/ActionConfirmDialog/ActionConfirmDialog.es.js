import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as C, Typography as s, Box as v, CircularProgress as w } from "@mui/material";
import { useTranslation as z } from "react-i18next";
import { CloseIcon as D } from "../../icons/CloseIcon/index.es.js";
import { Button as d } from "../Button/Button.es.js";
import { Dialog as W, Wrapper as B, CloseButton as P, ButtonGroup as R } from "./style.es.js";
const M = ({
  isOpen: p,
  title: u,
  subTitle: c,
  icon: m,
  confirmButtonText: i,
  cancelButtonText: o,
  onCancel: x,
  onConfirm: h,
  onClose: t,
  buttonDirection: g = "row",
  cancelButtonVariant: j = "secondary",
  confirmButtonVariant: b = "primary",
  isLoading: a,
  sx: l,
  children: f,
  "data-automationid": n,
  confirmAutomationId: k,
  cancelAutomationId: y
}) => {
  const { t: e } = z("uiKit");
  return /* @__PURE__ */ r.jsx(
    W,
    {
      open: p,
      ...n ? { "data-automationid": n } : {},
      slotProps: {
        backdrop: {
          sx: { backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.12)" }
        }
      },
      sx: l ? { "& .MuiDialog-paper": l } : void 0,
      children: /* @__PURE__ */ r.jsxs(B, { children: [
        t ? /* @__PURE__ */ r.jsx(P, { type: "button", onClick: t, "aria-label": e("Close"), children: /* @__PURE__ */ r.jsx(D, {}) }) : null,
        m,
        /* @__PURE__ */ r.jsxs(C, { gap: 2, children: [
          /* @__PURE__ */ r.jsx(s, { variant: "subtitle1", children: u }),
          /* @__PURE__ */ r.jsx(s, { variant: "body1", color: "neutral.grey4", padding: "0px 26px", children: c })
        ] }),
        f,
        /* @__PURE__ */ r.jsxs(R, { direction: g, children: [
          o ? /* @__PURE__ */ r.jsx(
            d,
            {
              variant: j,
              size: "medium",
              fullWidth: !0,
              onClick: x,
              "data-automationid": y,
              children: o
            }
          ) : null,
          i ? /* @__PURE__ */ r.jsxs(
            d,
            {
              variant: b,
              size: "medium",
              fullWidth: !0,
              onClick: h,
              disabled: a,
              "data-automationid": k,
              children: [
                a && /* @__PURE__ */ r.jsx(v, { sx: { width: "12px", marginLeft: "-12px", marginRight: "6px" }, children: /* @__PURE__ */ r.jsx(
                  w,
                  {
                    size: 12,
                    sx: {
                      color: "neutral.white"
                    }
                  }
                ) }),
                i || e("I agree")
              ]
            }
          ) : null
        ] })
      ] })
    }
  );
};
export {
  M as ActionConfirmDialog
};

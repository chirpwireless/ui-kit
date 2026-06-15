import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Typography as a, CircularProgress as p, Box as h } from "@mui/material";
import { useTranslation as z } from "react-i18next";
import { CloseIcon as y } from "../../icons/CloseIcon/index.es.js";
import { Button as s } from "../Button/Button.es.js";
import { StackRowJB as k } from "../Stacks/index.es.js";
import { Dialog as g, CloseIconButton as v, IconWrapper as B, Content as I, LoaderWrapper as d } from "./style.es.js";
const K = ({
  isOpen: j,
  title: n,
  subTitle: t,
  icon: l,
  disabled: o = !1,
  confirmButtonText: x,
  cancelButtonText: u,
  children: f,
  onConfirm: c,
  onCancel: m,
  isLoading: i,
  hideCancelButton: C,
  sx: w
}) => {
  const { t: e } = z("uiKit");
  return /* @__PURE__ */ r.jsxs(g, { open: j, sx: w, children: [
    /* @__PURE__ */ r.jsx(v, { onClick: m, children: /* @__PURE__ */ r.jsx(y, {}) }),
    l && /* @__PURE__ */ r.jsx(B, { children: l }),
    /* @__PURE__ */ r.jsxs(I, { children: [
      n ? /* @__PURE__ */ r.jsx(a, { fontSize: "16px", lineHeight: "20px", children: n }) : null,
      t ? /* @__PURE__ */ r.jsx(a, { fontSize: "12px", lineHeight: "16px", color: "neutral.grey4", children: t }) : null,
      f
    ] }),
    C ? /* @__PURE__ */ r.jsx(
      s,
      {
        className: "confirmation-button",
        variant: "primary",
        size: "medium",
        disabled: o || i,
        onClick: c,
        sx: {
          width: "50%"
        },
        children: /* @__PURE__ */ r.jsxs(d, { children: [
          i ? /* @__PURE__ */ r.jsx(
            p,
            {
              size: 12,
              sx: {
                color: "neutral.white"
              }
            }
          ) : /* @__PURE__ */ r.jsx(h, { sx: { width: "12px" } }),
          x || e("Confirm")
        ] })
      }
    ) : /* @__PURE__ */ r.jsxs(k, { width: "100%", children: [
      /* @__PURE__ */ r.jsx(
        s,
        {
          variant: "secondary",
          size: "medium",
          disabled: o,
          onClick: m,
          sx: { width: "50%" },
          children: u || e("Cancel")
        }
      ),
      /* @__PURE__ */ r.jsx(
        s,
        {
          variant: "primary",
          size: "medium",
          disabled: o || i,
          onClick: c,
          sx: {
            width: "50%"
          },
          children: /* @__PURE__ */ r.jsxs(d, { children: [
            i ? /* @__PURE__ */ r.jsx(
              p,
              {
                size: 12,
                sx: {
                  color: "neutral.white"
                }
              }
            ) : /* @__PURE__ */ r.jsx(h, { sx: { width: "12px" } }),
            x || e("Confirm")
          ] })
        }
      )
    ] })
  ] });
};
export {
  K as ConfirmationDialog
};

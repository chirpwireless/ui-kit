import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Typography as a, CircularProgress as p, Box as h } from "@mui/material";
import { useTranslation as z } from "react-i18next";
import { CloseIcon as y } from "../../icons/CloseIcon/index.es.js";
import { Button as e } from "../Button/Button.es.js";
import { StackRowJB as k } from "../Stacks/index.es.js";
import { Dialog as g, CloseIconButton as v, IconWrapper as B, Content as I, LoaderWrapper as d } from "./style.es.js";
const K = ({
  isOpen: j,
  title: n,
  subTitle: t,
  icon: x,
  disabled: s = !1,
  confirmButtonText: l,
  cancelButtonText: u,
  children: f,
  onConfirm: c,
  onCancel: m,
  isLoading: i,
  hideCancelButton: C,
  sx: w
}) => {
  const { t: o } = z("uiKit");
  return /* @__PURE__ */ r.jsxs(g, { open: j, sx: w, children: [
    /* @__PURE__ */ r.jsx(v, { onClick: m, children: /* @__PURE__ */ r.jsx(y, {}) }),
    x && /* @__PURE__ */ r.jsx(B, { children: x }),
    /* @__PURE__ */ r.jsxs(I, { children: [
      n ? /* @__PURE__ */ r.jsx(
        a,
        {
          sx: {
            fontSize: "16px",
            lineHeight: "20px"
          },
          children: n
        }
      ) : null,
      t ? /* @__PURE__ */ r.jsx(
        a,
        {
          color: "neutral.grey4",
          sx: {
            fontSize: "12px",
            lineHeight: "16px"
          },
          children: t
        }
      ) : null,
      f
    ] }),
    C ? /* @__PURE__ */ r.jsx(
      e,
      {
        className: "confirmation-button",
        variant: "primary",
        size: "medium",
        disabled: s || i,
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
          l || o("Confirm")
        ] })
      }
    ) : /* @__PURE__ */ r.jsxs(
      k,
      {
        sx: {
          width: "100%"
        },
        children: [
          /* @__PURE__ */ r.jsx(
            e,
            {
              variant: "secondary",
              size: "medium",
              disabled: s,
              onClick: m,
              sx: { width: "50%" },
              children: u || o("Cancel")
            }
          ),
          /* @__PURE__ */ r.jsx(
            e,
            {
              variant: "primary",
              size: "medium",
              disabled: s || i,
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
                l || o("Confirm")
              ] })
            }
          )
        ]
      }
    )
  ] });
};
export {
  K as ConfirmationDialog
};

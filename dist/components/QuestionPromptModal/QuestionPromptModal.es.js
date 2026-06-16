import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as v, Typography as s, Divider as w, RadioGroup as t, FormControlLabel as n, Radio as l } from "@mui/material";
import { useState as T } from "react";
import { useTranslation as W } from "react-i18next";
import { Button as a } from "../Button/Button.es.js";
import { Dialog as B, Wrapper as R, TextWrapper as z, Text as c, ButtonGroup as A } from "./style.es.js";
const E = ({
  isOpen: d,
  title: p,
  subTitle: x,
  icon: m,
  confirmText: h,
  cancelText: u,
  confirmButtonText: j,
  cancelButtonText: g,
  onCancel: b,
  onConfirm: k,
  buttonDirection: f
}) => {
  const { t: o } = W("uiKit"), [e, C] = T(void 0), i = (y) => {
    C(y);
  };
  return /* @__PURE__ */ r.jsx(
    B,
    {
      open: d,
      slotProps: {
        backdrop: {
          sx: { backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.12)" }
        }
      },
      children: /* @__PURE__ */ r.jsxs(R, { children: [
        m,
        /* @__PURE__ */ r.jsxs(
          v,
          {
            sx: {
              gap: 3
            },
            children: [
              /* @__PURE__ */ r.jsx(s, { variant: "caption", color: "neutral.grey4", children: x }),
              /* @__PURE__ */ r.jsx(s, { variant: "h4", children: p })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(w, { sx: { borderColor: "borders.primary", width: "100%" } }),
        /* @__PURE__ */ r.jsxs(z, { children: [
          /* @__PURE__ */ r.jsx(t, { children: /* @__PURE__ */ r.jsx(
            n,
            {
              sx: { gap: 2, alignItems: "start" },
              control: /* @__PURE__ */ r.jsx(l, { checked: e === !0, onClick: () => i(!0) }),
              label: /* @__PURE__ */ r.jsxs(c, { children: [
                /* @__PURE__ */ r.jsxs(s, { component: "span", color: "primaryColors.accent", children: [
                  o("Yes"),
                  ", "
                ] }),
                h
              ] })
            }
          ) }),
          /* @__PURE__ */ r.jsx(t, { children: /* @__PURE__ */ r.jsx(
            n,
            {
              sx: { gap: 2, alignItems: "start" },
              control: /* @__PURE__ */ r.jsx(l, { checked: e === !1, onClick: () => i(!1) }),
              label: /* @__PURE__ */ r.jsxs(c, { children: [
                /* @__PURE__ */ r.jsxs(s, { component: "span", color: "primaryColors.accent", children: [
                  o("No"),
                  ", "
                ] }),
                u
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsxs(A, { direction: f, children: [
          /* @__PURE__ */ r.jsx(a, { variant: "secondary", size: "medium", fullWidth: !0, onClick: b, children: g || o("Back") }),
          /* @__PURE__ */ r.jsx(
            a,
            {
              variant: "primary",
              size: "medium",
              fullWidth: !0,
              onClick: () => k(e),
              disabled: e === void 0,
              children: j || o("Continue")
            }
          )
        ] })
      ] })
    }
  );
};
export {
  E as QuestionPromptModal
};

import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as l, Stack as i, Typography as o } from "@mui/material";
import { Button as s } from "../Button/Button.es.js";
import { StackRowJB as h } from "../Stacks/index.es.js";
const g = ({
  cancelText: e,
  children: n,
  onCancel: m,
  onSubmit: x,
  isLoading: a,
  title: d,
  subtitle: t,
  submitText: p,
  maxWidth: c
}) => /* @__PURE__ */ r.jsxs(
  l,
  {
    component: "form",
    onSubmit: x,
    sx: {
      minWidth: { xs: "100%", sm: "350px", md: "auto" },
      maxWidth: c
    },
    children: [
      /* @__PURE__ */ r.jsxs(
        i,
        {
          sx: {
            textAlign: "center",
            gap: 2,
            mb: 3
          },
          children: [
            /* @__PURE__ */ r.jsx(o, { variant: "subtitle1", color: "neutral.primary", children: d }),
            t && /* @__PURE__ */ r.jsx(o, { variant: "body1", color: "neutral.grey4", children: t })
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        i,
        {
          sx: {
            gap: "16px",
            mb: "24px"
          },
          children: n
        }
      ),
      /* @__PURE__ */ r.jsxs(
        h,
        {
          sx: {
            width: "100%"
          },
          children: [
            /* @__PURE__ */ r.jsx(s, { variant: "secondary", type: "button", size: "medium", onClick: m, sx: { width: "50%" }, children: e }),
            /* @__PURE__ */ r.jsx(s, { variant: "primary", type: "submit", size: "medium", disabled: a, sx: { width: "50%" }, children: p })
          ]
        }
      )
    ]
  }
);
export {
  g as DialogForm
};

import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as l, Stack as i, Typography as o } from "@mui/material";
import { Button as e } from "../Button/Button.es.js";
import { StackRowJB as h } from "../Stacks/index.es.js";
const g = ({
  cancelText: n,
  children: m,
  onCancel: s,
  onSubmit: a,
  isLoading: x,
  title: d,
  subtitle: t,
  submitText: p,
  maxWidth: c
}) => /* @__PURE__ */ r.jsxs(
  l,
  {
    component: "form",
    minWidth: { xs: "100%", sm: "350px", md: "auto" },
    maxWidth: c,
    onSubmit: a,
    children: [
      /* @__PURE__ */ r.jsxs(i, { textAlign: "center", gap: 2, mb: 3, children: [
        /* @__PURE__ */ r.jsx(o, { variant: "subtitle1", color: "neutral.primary", children: d }),
        t && /* @__PURE__ */ r.jsx(o, { variant: "body1", color: "neutral.grey4", children: t })
      ] }),
      /* @__PURE__ */ r.jsx(i, { gap: "16px", mb: "24px", children: m }),
      /* @__PURE__ */ r.jsxs(h, { width: "100%", children: [
        /* @__PURE__ */ r.jsx(e, { variant: "secondary", type: "button", size: "medium", onClick: s, sx: { width: "50%" }, children: n }),
        /* @__PURE__ */ r.jsx(e, { variant: "primary", type: "submit", size: "medium", disabled: x, sx: { width: "50%" }, children: p })
      ] })
    ]
  }
);
export {
  g as DialogForm
};

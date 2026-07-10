import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as b, darken as g, Typography as l } from "@mui/material";
import { CheckCircleIcon as k } from "../../icons/CheckCircleIcon/index.es.js";
import { chirpPalette as f } from "../../theme/palette.es.js";
import { Button as i } from "../Button/Button.es.js";
import { Dialog as v, IconCircle as y, TextWrapper as w, ButtonsRow as B } from "./style.es.js";
const T = (e, t) => {
  switch (e) {
    case "success":
      return t.alerts.success;
    case "alert":
      return t.alerts.alert;
    default:
      return t.primaryColors.accent;
  }
}, E = ({
  open: e,
  title: t,
  description: s,
  primaryButtonText: n,
  onPrimaryAction: u,
  type: a = "accent",
  icon: m,
  secondaryButtonText: d,
  onSecondaryAction: c,
  onClose: h,
  sx: p
}) => {
  const x = b(), o = f(x), j = T(a, o), C = a === "alert" ? {
    backgroundColor: o.alerts.alert,
    "&:hover": { backgroundColor: g(o.alerts.alert, 0.15) }
  } : void 0;
  return /* @__PURE__ */ r.jsxs(
    v,
    {
      open: e,
      onClose: h,
      sx: p,
      slotProps: {
        backdrop: {
          sx: { backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.12)" }
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(y, { statusColor: j, children: m ?? /* @__PURE__ */ r.jsx(k, { width: 40, height: 40 }) }),
        /* @__PURE__ */ r.jsxs(w, { children: [
          /* @__PURE__ */ r.jsx(l, { variant: "subtitle1", color: "neutral.primary", children: t }),
          s && /* @__PURE__ */ r.jsx(l, { variant: "body2", color: "neutral.grey5", children: s })
        ] }),
        /* @__PURE__ */ r.jsxs(B, { children: [
          c && /* @__PURE__ */ r.jsx(i, { size: "medium", variant: "secondary", onClick: c, children: d }),
          /* @__PURE__ */ r.jsx(i, { size: "medium", variant: "primary", onClick: u, sx: C, children: n })
        ] })
      ]
    }
  );
};
export {
  E as StatusModal
};

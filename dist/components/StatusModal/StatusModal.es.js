import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as C, darken as b, Typography as l } from "@mui/material";
import { CheckCircleIcon as g } from "../../icons/CheckCircleIcon/index.es.js";
import { chirpPalette as k } from "../../theme/palette.es.js";
import { Button as i } from "../Button/Button.es.js";
import { Dialog as f, IconCircle as v, TextWrapper as y, ButtonsRow as w } from "./style.es.js";
const B = (e, t) => {
  switch (e) {
    case "success":
      return t.alerts.success;
    case "alert":
      return t.alerts.alert;
    default:
      return t.primaryColors.accent;
  }
}, D = ({
  open: e,
  title: t,
  description: s,
  primaryButtonText: n,
  onPrimaryAction: u,
  type: a = "accent",
  icon: m,
  secondaryButtonText: d,
  onSecondaryAction: c,
  onClose: h
}) => {
  const p = C(), o = k(p), x = B(a, o), j = a === "alert" ? {
    backgroundColor: o.alerts.alert,
    "&:hover": { backgroundColor: b(o.alerts.alert, 0.15) }
  } : void 0;
  return /* @__PURE__ */ r.jsxs(
    f,
    {
      open: e,
      onClose: h,
      slotProps: {
        backdrop: {
          sx: { backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.12)" }
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(v, { statusColor: x, children: m ?? /* @__PURE__ */ r.jsx(g, { width: 40, height: 40 }) }),
        /* @__PURE__ */ r.jsxs(y, { children: [
          /* @__PURE__ */ r.jsx(l, { variant: "subtitle1", color: "neutral.primary", children: t }),
          s && /* @__PURE__ */ r.jsx(l, { variant: "body2", color: "neutral.grey5", children: s })
        ] }),
        /* @__PURE__ */ r.jsxs(w, { children: [
          c && /* @__PURE__ */ r.jsx(i, { size: "medium", variant: "secondary", onClick: c, children: d }),
          /* @__PURE__ */ r.jsx(i, { size: "medium", variant: "primary", onClick: u, sx: j, children: n })
        ] })
      ]
    }
  );
};
export {
  D as StatusModal
};

import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as h, Typography as e } from "@mui/material";
import { CheckCircleIcon as d } from "../../icons/CheckCircleIcon/index.es.js";
import { chirpPalette as x } from "../../theme/palette.es.js";
import { Button as j } from "../Button/Button.es.js";
import { Dialog as b, IconCircle as f, TextWrapper as y } from "./style.es.js";
const P = ({
  open: s,
  title: c,
  description: t,
  primaryButtonText: i,
  onPrimaryAction: a,
  type: l = "accent",
  icon: n,
  onClose: m
}) => {
  const p = h(), o = x(p), u = l === "success" ? o.alerts.success : o.primaryColors.accent;
  return /* @__PURE__ */ r.jsxs(
    b,
    {
      open: s,
      onClose: m,
      slotProps: {
        backdrop: {
          sx: { backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.12)" }
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(f, { statusColor: u, children: n ?? /* @__PURE__ */ r.jsx(d, { width: 40, height: 40 }) }),
        /* @__PURE__ */ r.jsxs(y, { children: [
          /* @__PURE__ */ r.jsx(e, { variant: "subtitle1", color: "neutral.primary", children: c }),
          t && /* @__PURE__ */ r.jsx(e, { variant: "body2", color: "neutral.grey5", children: t })
        ] }),
        /* @__PURE__ */ r.jsx(j, { size: "medium", variant: "primary", fullWidth: !0, onClick: a, children: i })
      ]
    }
  );
};
export {
  P as StatusModal
};

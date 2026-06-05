import { jsxRuntimeExports as c } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as u, Stack as m, IconButton as x } from "@mui/material";
import { StepIcon as a } from "../../assets/icons/StepIcon/index.es.js";
const f = ({ activeStep: i, handleSetStep: r, steps: o }) => {
  const t = u();
  return o != null && o.length ? /* @__PURE__ */ c.jsx(m, { direction: "row", gap: "8px", height: "24px", alignItems: "center", justifyContent: "center", children: o.map((n) => /* @__PURE__ */ c.jsx(
    x,
    {
      sx: {
        color: i === n ? t.palette.base.color6 : t.palette.background.background12,
        width: i === n ? "6px" : "4px",
        padding: "0",
        cursor: r ? "pointer" : "default",
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
      onClick: () => r == null ? void 0 : r(n),
      children: /* @__PURE__ */ c.jsx(a, {})
    },
    n
  )) }) : null;
};
export {
  f as Stepper
};

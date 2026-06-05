import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { FormControlLabel as a } from "@mui/material";
import { StyledRadio as n } from "./style.es.js";
const m = ({
  label: r,
  labelTypographyVariant: t = "body1",
  formControlLabelProps: e,
  ...p
}) => /* @__PURE__ */ o.jsx(
  a,
  {
    label: r,
    componentsProps: {
      typography: {
        variant: t
      }
    },
    control: /* @__PURE__ */ o.jsx(
      n,
      {
        sx: {
          "&:hover": { bgcolor: "transparent" }
        },
        disableRipple: !0,
        color: "default",
        ...p
      }
    ),
    ...e
  }
);
export {
  m as Radio
};

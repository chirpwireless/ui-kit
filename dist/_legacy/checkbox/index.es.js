import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { FormControlLabel as p, Checkbox as h } from "@mui/material";
import { CheckboxIcon as k, CustomOpenEyeIcon as l, CheckboxCheckedIcon as m, CustomCloseEyeIcon as C } from "./style.es.js";
const d = ({
  label: c,
  variant: e = "check",
  labelTypographyVariant: r = "caption12",
  formControlLabelProps: s,
  ...n
}) => {
  const t = e === "check" ? /* @__PURE__ */ o.jsx(k, {}) : /* @__PURE__ */ o.jsx(l, {}), x = e === "check" ? /* @__PURE__ */ o.jsx(m, {}) : /* @__PURE__ */ o.jsx(C, {});
  return /* @__PURE__ */ o.jsx(
    p,
    {
      label: c,
      componentsProps: {
        typography: {
          variant: r
        }
      },
      control: /* @__PURE__ */ o.jsx(
        h,
        {
          sx: {
            "&:hover": { bgcolor: "transparent" }
          },
          disableRipple: !0,
          color: "default",
          checkedIcon: x,
          icon: t,
          ...n
        }
      ),
      ...s
    }
  );
};
export {
  d as Checkbox
};

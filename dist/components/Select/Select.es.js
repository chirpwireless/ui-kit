import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { FormControl as i } from "@mui/material";
import { SelectIcon as l } from "../../icons/SelectIcon/index.es.js";
import { InputLabel as m } from "./components/InputLabel/index.es.js";
import { Select as p } from "./style.es.js";
const a = ({ label: t, labelId: r, ...e }) => {
  const n = !!t;
  return /* @__PURE__ */ o.jsxs(i, { fullWidth: !0, children: [
    n ? /* @__PURE__ */ o.jsx(
      m,
      {
        labelId: r,
        label: t,
        className: e.error ? "Mui-error" : void 0,
        sx: {
          "&.MuiInputLabel-shrink": {
            fontSize: "14px",
            lineHeight: "20px",
            left: "-12px",
            top: "8px"
          }
        }
      }
    ) : null,
    /* @__PURE__ */ o.jsx(p, { IconComponent: l, ...e })
  ] });
};
export {
  a as Select
};

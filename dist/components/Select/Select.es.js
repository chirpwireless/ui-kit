import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { FormControl as l } from "@mui/material";
import { InputLabel as n } from "./components/InputLabel/index.es.js";
import { Select as s } from "./style.es.js";
const a = ({ label: t, labelId: o, ...e }) => {
  const i = !!t;
  return /* @__PURE__ */ r.jsxs(l, { fullWidth: !0, children: [
    i ? /* @__PURE__ */ r.jsx(
      n,
      {
        labelId: o,
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
    /* @__PURE__ */ r.jsx(s, { ...e })
  ] });
};
export {
  a as Select
};

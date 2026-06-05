import { jsxRuntimeExports as p } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as s, InputLabel as a } from "@mui/material";
const l = ({ labelId: t, label: e, className: r, sx: n }) => {
  const { palette: o } = s();
  return /* @__PURE__ */ p.jsx(
    a,
    {
      id: t,
      shrink: !0,
      className: r,
      sx: {
        padding: 0,
        backgroundColor: "transparent",
        color: o.text.titleInput,
        ...n
      },
      children: e
    }
  );
};
export {
  l as InputLabel
};

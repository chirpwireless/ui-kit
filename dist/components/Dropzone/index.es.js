import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useDropzone as n } from "react-dropzone";
import { DragBox as m } from "./style.es.js";
const c = ({ children: r, sx: t, ...p }) => {
  const { getRootProps: s, getInputProps: e } = n(p);
  return /* @__PURE__ */ o.jsxs(m, { sx: t, ...s(), children: [
    /* @__PURE__ */ o.jsx("input", { ...e() }),
    r
  ] });
};
export {
  c as Dropzone
};

import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { ImageWrapper as I, UploadInput as u, Image as D, DeleteBtn as y, EmptyFallbackWrapper as F } from "./style.es.js";
import "@mui/material";
import { TrashIcon as A } from "../../assets/icons/TrashIcon/index.es.js";
import { Typography as o } from "../typogrpahy/index.es.js";
import { SvgPhotoUpload as R } from "../../photo-upload-Bs1nhagK.js";
import c from "@mui/material/Stack";
const T = ["image/png", "image/jpeg"], _ = ({
  previewUrl: r,
  inputRef: p,
  onRemove: i,
  onLoad: n,
  title: m = "title",
  subTitle: x = "subtitle",
  width: g = "160px",
  height: d = "150px",
  borderRadius: f = 2
}) => {
  const j = (a) => {
    if (a.target.files && a.target.files[0] && n) {
      const s = new FileReader(), t = a.target.files[0];
      s.onloadend = () => {
        n(t);
      }, s.readAsDataURL(t);
    }
  }, h = (a) => {
    a.preventDefault();
    const t = [...a.dataTransfer.files][0];
    if (T.includes(t.type) && t && n) {
      const l = new FileReader();
      l.onloadend = () => {
        n(t);
      }, l.readAsDataURL(t);
    }
  };
  return /* @__PURE__ */ e.jsxs(I, { borderRadius: f, width: g, height: d, onDrop: h, children: [
    /* @__PURE__ */ e.jsx(u, { ref: p, type: "file", onChange: j, accept: "image/png, image/jpeg" }),
    r && (r == null ? void 0 : r.length) > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(D, { src: r }),
      i && /* @__PURE__ */ e.jsx(y, { variant: "secondary", onClick: i, size: "small", children: /* @__PURE__ */ e.jsx(A, {}) })
    ] }) : n && /* @__PURE__ */ e.jsx(F, { children: /* @__PURE__ */ e.jsxs(c, { gap: "8px", alignItems: "center", children: [
      /* @__PURE__ */ e.jsx(R, {}),
      /* @__PURE__ */ e.jsxs(c, { gap: "4px", alignItems: "center", children: [
        /* @__PURE__ */ e.jsx(
          o,
          {
            sx: {
              color: "text.text1"
            },
            variant: "title14",
            children: m
          }
        ),
        /* @__PURE__ */ e.jsx(
          o,
          {
            sx: {
              color: "text.text8"
            },
            variant: "caption12",
            textAlign: "center",
            children: x
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  _ as ImagePreview
};

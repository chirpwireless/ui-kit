import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Dialog as n, Card as p, IconWrapper as l } from "./style.es.js";
import "@mui/material";
import { SadFaceIcon as x } from "../../assets/icons/SadFaceIcon/index.es.js";
import { SvgCheckCircleOutlinedIcon as a } from "../../check-circle-outlined-icon-ByF0DotG.js";
import { Button as d } from "../button/index.es.js";
import { ModalTitle as u } from "../modal/modal-title.es.js";
const v = ({
  isOpen: i,
  title: o,
  description: t,
  buttonText: e,
  onApply: s,
  state: m = "success",
  subTitleWidth: c
}) => /* @__PURE__ */ r.jsx(n, { open: i, children: /* @__PURE__ */ r.jsxs(p, { children: [
  /* @__PURE__ */ r.jsx(l, { children: m === "success" ? /* @__PURE__ */ r.jsx(a, {}) : /* @__PURE__ */ r.jsx(x, {}) }),
  /* @__PURE__ */ r.jsx(u, { title: o, subTitle: t, margin: "24px 0 32px", subTitleWidth: c }),
  /* @__PURE__ */ r.jsx(d, { size: "medium", variant: "primary", fullWidth: !0, onClick: s, children: e })
] }) });
export {
  v as ActionDialog
};

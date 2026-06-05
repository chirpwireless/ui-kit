import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { Dialog as h, IconWrapper as j, Content as C, ButtonGroup as g } from "./style.es.js";
import { Button as e } from "../button/index.es.js";
import { ModalTitle as k } from "../modal/modal-title.es.js";
import { useTranslation as y } from "react-i18next";
const D = ({
  isOpen: t,
  title: n,
  subTitle: s,
  icon: r,
  isConfirmBtnDisabled: l = !1,
  isCancelBtnDisabled: a = !1,
  confirmButtonText: m,
  cancelButtonText: d,
  children: x,
  contentSx: p,
  dialogSx: u,
  onConfirm: c,
  onCancel: f
}) => {
  const { t: o } = y("uiKit", { keyPrefix: "modal" });
  return /* @__PURE__ */ i.jsxs(h, { open: t, sx: { ...u }, children: [
    r && /* @__PURE__ */ i.jsx(j, { children: r }),
    /* @__PURE__ */ i.jsxs(C, { sx: { ...p }, children: [
      /* @__PURE__ */ i.jsx(k, { title: n, subTitle: s, margin: "0px" }),
      x
    ] }),
    /* @__PURE__ */ i.jsxs(g, { children: [
      /* @__PURE__ */ i.jsx(e, { variant: "secondary", size: "medium", fullWidth: !0, disabled: a, onClick: f, children: d || o("Cancel") }),
      /* @__PURE__ */ i.jsx(e, { variant: "primary", size: "medium", fullWidth: !0, disabled: l, onClick: c, children: m || o("Confirm") })
    ] })
  ] });
};
export {
  D as ConfirmationDialog
};

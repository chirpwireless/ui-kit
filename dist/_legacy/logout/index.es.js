import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { Typography as l } from "@mui/material";
import { useState as c } from "react";
import { ConfirmationDialog as u } from "../confirmation-dialog/index.es.js";
import { ListItem as f, ListItemContent as p } from "./style.es.js";
import { SvgLogoutIcon as e } from "../../logout-icon-BIMmYUPX.js";
import { useTranslation as g } from "react-i18next";
const I = ({ onLogout: n }) => {
  const { t: r } = g("uiKit", { keyPrefix: "logout" }), [i, t] = c(!1), s = () => {
    t(!0);
  }, a = () => {
    t(!1);
  }, m = () => {
    n && n(), t(!1);
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(f, { onClick: s, children: /* @__PURE__ */ o.jsxs(p, { children: [
      /* @__PURE__ */ o.jsx(e, {}),
      /* @__PURE__ */ o.jsx(l, { variant: "paragraphSecondary", color: "text.text8", children: r("Logout") })
    ] }) }),
    /* @__PURE__ */ o.jsx(
      u,
      {
        isOpen: i,
        title: r("modal.Are you sure that you want to logout?"),
        icon: /* @__PURE__ */ o.jsx(e, {}),
        onConfirm: m || (() => {
        }),
        onCancel: a
      }
    )
  ] });
};
export {
  I as Logout
};

import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as C, Stack as r, Popover as k, alpha as p, Divider as y } from "@mui/material";
import { PopupBody as L, List as S, ListItem as b, ListItemContent as P } from "./style.es.js";
import { useState as T } from "react";
import { Avatar as B } from "../avatar/index.es.js";
import { Button as I } from "../button/index.es.js";
import { ThemeSwitch as O } from "../theme-switch/index.es.js";
import { Logout as z } from "../logout/index.es.js";
import { ConnectWalletBanner as A } from "../connect-wallet-banner/connect-wallet-icon.es.js";
import { Typography as x } from "../typogrpahy/index.es.js";
import { useTranslation as E } from "react-i18next";
import { LanguageSelector as D } from "../language-selector/index.es.js";
const Q = ({
  onLogout: i,
  onWalletConnect: n,
  onChangeMode: c,
  isDarkMode: m,
  name: h,
  languageSelectorProps: d,
  userNameForAvatar: u,
  avatarUrl: f
}) => {
  const { t: e } = E("uiKit", { keyPrefix: "UserPopup" }), [o, s] = T(null), a = C(), j = (v) => {
    s(o ? null : v.currentTarget);
  }, l = () => {
    s(null);
  }, g = !!o, w = () => {
    i && i(), l();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      r,
      {
        onClick: j,
        direction: "row",
        alignItems: "center",
        columnGap: 2,
        sx: { cursor: "pointer" },
        children: [
          /* @__PURE__ */ t.jsx(
            B,
            {
              sx: { width: "40px", height: "40px" },
              avatarUrl: f,
              userName: u ?? ""
            }
          ),
          /* @__PURE__ */ t.jsx(x, { variant: "body1", color: "text.text4", sx: { textOverflow: "ellipsis", overflow: "hidden" }, children: h })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      k,
      {
        open: g,
        anchorEl: o,
        onClose: l,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        sx: {
          "*.MuiPaper-root": {
            borderRadius: "12px",
            boxShadow: `4px 0px 20px 0px ${p("#5C5C5C", 0.2)}`
          }
        },
        children: /* @__PURE__ */ t.jsx(L, { children: /* @__PURE__ */ t.jsxs(S, { children: [
          n && /* @__PURE__ */ t.jsxs(r, { p: "8px", width: "100%", marginTop: 1, rowGap: 2, children: [
            /* @__PURE__ */ t.jsx(A, {}),
            /* @__PURE__ */ t.jsx(
              I,
              {
                fullWidth: !0,
                type: "button",
                variant: "primary",
                size: "small",
                onClick: n,
                children: e("Connect your wallet")
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx(D, { ...d }),
          /* @__PURE__ */ t.jsx(z, { onLogout: w }),
          /* @__PURE__ */ t.jsx(y, { sx: { background: p(a.palette.text.text1, 0.08), width: "197px" } }),
          /* @__PURE__ */ t.jsx(b, { children: /* @__PURE__ */ t.jsx(r, { children: /* @__PURE__ */ t.jsxs(P, { sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ t.jsx(r, { sx: { marginLeft: "-4px" }, children: /* @__PURE__ */ t.jsx(O, { onChange: c, checked: m }) }),
            /* @__PURE__ */ t.jsx(x, { variant: "paragraphSecondary", color: "text.text8", children: a.palette.mode === "dark" ? e("themeSwith.Dark") : e("themeSwith.Light") })
          ] }) }) })
        ] }) })
      }
    )
  ] });
};
export {
  Q as UserPopup
};

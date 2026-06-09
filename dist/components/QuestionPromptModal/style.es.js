import { styled as r, Dialog as p, dialogClasses as i, Stack as a, Typography as n } from "@mui/material";
import { CurrentTheme as s } from "../../styles/constants.es.js";
import { chirpPalette as e } from "../../theme/palette.es.js";
const m = r(p)(({ theme: t }) => {
  const o = e(t);
  return {
    [t.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto"
    },
    [`& .${i.paper}`]: {
      alignItems: "start",
      minWidth: "auto",
      maxWidth: "396px",
      overflow: "hidden",
      margin: "0px",
      padding: "36px 30px 30px",
      borderRadius: "12px",
      backgroundColor: t.palette.mode === s.Dark ? o.neutral.grey1 : o.neutral.white,
      border: `1px solid ${o.borders.primary}`,
      boxShadow: `0 8px 32px ${o.shadow ?? "rgba(0, 0, 0, 0.14)"}`
    }
  };
}), l = r(a)(() => ({
  flexDirection: "column",
  gap: "24px",
  justifyContent: "space-between",
  alignItems: "start"
})), c = r(l)(() => ({
  gap: "24px"
})), u = r(a)(({ direction: t = "row" }) => ({
  flexDirection: t,
  gap: 12,
  width: "100%"
})), h = r(n)(({ theme: t }) => ({
  color: e(t).neutral.primary,
  fontSize: "13px",
  fontWeight: 400
}));
export {
  u as ButtonGroup,
  m as Dialog,
  h as Text,
  c as TextWrapper,
  l as Wrapper
};

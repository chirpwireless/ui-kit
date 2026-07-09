import { styled as a, Dialog as i, dialogClasses as p, Stack as o, alpha as t } from "@mui/material";
import { chirpPalette as d } from "../../theme/palette.es.js";
const x = a(i)(({ theme: r }) => {
  const e = d(r);
  return {
    [`& .${p.paper}`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      width: "320px",
      maxWidth: "320px",
      margin: "0px",
      padding: "24px",
      borderRadius: "12px",
      backgroundColor: e.neutral.grey1,
      border: `1px solid ${e.borders.primary}`,
      boxShadow: `0 8px 32px ${e.shadow ?? "rgba(0, 0, 0, 0.14)"}`
    }
  };
}), c = a(o, {
  shouldForwardProp: (r) => r !== "statusColor"
})(({ statusColor: r }) => ({
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  color: r,
  background: `radial-gradient(circle at 50% 30%, ${t(r, 0.2)} 0%, ${t(r, 0)} 75%)`
})), g = a(o)(() => ({
  gap: "12px",
  width: "100%",
  textAlign: "center"
}));
export {
  x as Dialog,
  c as IconCircle,
  g as TextWrapper
};

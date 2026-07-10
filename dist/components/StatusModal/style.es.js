import { styled as e, Dialog as i, dialogClasses as p, Stack as o, alpha as a } from "@mui/material";
import { chirpPalette as n } from "../../theme/palette.es.js";
const x = e(i)(({ theme: r }) => {
  const t = n(r);
  return {
    [`& .${p.paper}`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      // The theme sets a global 544px minWidth on dialog papers; reset it so the 320px design width wins.
      minWidth: "320px",
      width: "320px",
      maxWidth: "320px",
      margin: "0px",
      padding: "24px",
      borderRadius: "12px",
      backgroundColor: t.neutral.grey1,
      border: `1px solid ${t.borders.primary}`,
      boxShadow: `0 8px 32px ${t.shadow ?? "rgba(0, 0, 0, 0.14)"}`
    }
  };
}), c = e(o, {
  shouldForwardProp: (r) => r !== "statusColor"
})(({ statusColor: r }) => ({
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  color: r,
  background: `radial-gradient(circle at 50% 30%, ${a(r, 0.2)} 0%, ${a(r, 0)} 75%)`
})), s = e(o)(() => ({
  gap: "12px",
  width: "100%",
  textAlign: "center"
})), g = e(o)(() => ({
  flexDirection: "row",
  gap: "12px",
  width: "100%",
  "& > *": {
    flex: 1
  }
}));
export {
  g as ButtonsRow,
  x as Dialog,
  c as IconCircle,
  s as TextWrapper
};

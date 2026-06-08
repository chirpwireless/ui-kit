import { styled as i, IconButton as a, Dialog as e, dialogClasses as n } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
const g = i(a)(({ theme: o }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: t(o).neutral.primary,
  "&:hover": { backgroundColor: "transparent" }
})), x = i(e)(({ theme: o }) => {
  const r = t(o);
  return {
    [o.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto"
    },
    [`.${n.paper}`]: {
      alignItems: "center",
      minWidth: "1200px",
      width: "100%",
      maxWidth: "1200px",
      overflow: "hidden",
      margin: "0px",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: o.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white,
      border: `1px solid ${r.borders.primary}`,
      boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`
    },
    "& .MuiDialog-container": {
      [o.breakpoints.down("sm")]: {
        alignItems: "stretch"
      }
    },
    "& .MuiDialog-paper": {
      [o.breakpoints.down("sm")]: {
        margin: "0px",
        minWidth: "100%",
        maxHeight: "100vh",
        height: "100vh",
        padding: "40px 16px 16px",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column"
      }
    }
  };
});
export {
  x as DeviceDialog,
  g as DialogIconButton
};

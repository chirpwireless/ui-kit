import { styled as o, Dialog as i, dialogClasses as a, DialogTitle as n, dialogTitleClasses as e, dialogContentClasses as l, DialogContentText as s, dialogContentTextClasses as g, DialogActions as r, dialogActionsClasses as p, IconButton as x } from "@mui/material";
const c = o(i)(({ theme: t }) => ({
  [`& .${a.paper}`]: {
    background: t.palette.background.background2,
    borderRadius: "12px",
    boxShadow: "none",
    padding: "20px",
    minWidth: "unset",
    [`${t.breakpoints.down("md")}`]: {
      width: "100%",
      margin: "0 12px",
      maxWidth: "unset",
      maxHeight: "unset",
      alignItems: "center"
    }
  }
})), m = o(n)(({ theme: t }) => ({
  [`&.${e.root}`]: {
    fontSize: "16px",
    lineHeight: "20px",
    color: t.palette.text.text1,
    marginBottom: "8px"
  }
})), D = o(n)(() => ({
  [`&.${l.root}`]: {
    margin: 0
  }
})), C = o(s)(({ theme: t }) => ({
  [`&.${g.root}`]: {
    fontSize: "13px",
    lineHeight: "20px",
    color: t.palette.text.text8,
    margin: 0,
    textTransform: "none",
    letterSpacing: "0.5%",
    fontFamily: t.typography.body1.fontFamily
  }
})), T = o(r)(() => ({
  [`&.${p.root}`]: {
    display: "flex",
    marginTop: "24px",
    flexDirection: "column",
    gap: 0,
    "button:not(:first-of-type)": {
      marginTop: "8px",
      marginLeft: 0
    }
  }
})), f = o(x)(() => ({
  marginTop: "-12px",
  marginRight: "-12px"
}));
export {
  f as CloseButton,
  c as Dialog,
  T as DialogActions,
  D as DialogContent,
  C as DialogContentText,
  m as DialogTitle
};

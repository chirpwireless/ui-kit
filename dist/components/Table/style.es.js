import { styled as o, TableRow as i, TableCell as p, alpha as n } from "@mui/material";
import { CurrentTheme as l } from "../../styles/constants.es.js";
import { chirpPalette as a } from "../../theme/palette.es.js";
const x = o(i, {
  shouldForwardProp: (e) => e !== "disableHover"
})(({ theme: e, disableHover: r }) => {
  const t = a(e);
  return {
    position: "relative",
    ...!r && {
      "&:hover": {
        "& td": {
          position: "relative",
          backgroundColor: e.palette.mode === l.Dark ? t.neutral.black : t.neutral.white,
          boxShadow: `inset 0 4px 0 ${t.neutral.grey1}, inset 0 -4px 0 ${t.neutral.grey1}`,
          "&:first-of-type": {
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            boxShadow: `inset 4px 4px 0 ${t.neutral.grey1}, inset 0 -4px 0 ${t.neutral.grey1}`
          },
          "&:last-of-type": {
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            boxShadow: `inset -4px 4px 0 ${t.neutral.grey1}, inset 0 -4px 0 ${t.neutral.grey1}`
          }
        }
      }
    }
  };
}), u = o(p)(({ theme: e }) => {
  const r = a(e);
  return {
    height: e.spacing(5),
    padding: "12px",
    border: "none",
    borderBottom: `1px solid ${n(r.borders.primary, 0.3)}`,
    fontFamily: e.typography.fontFamily,
    opacity: 1,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: r.neutral.primary,
    [e.breakpoints.down("lg")]: {
      padding: "8px 6px"
    }
  };
}), c = o("div")(({ theme: e }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(2)
})), y = o("div")(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: e.spacing(2)
}));
export {
  u as Cell,
  y as HeaderWrapper,
  x as Row,
  c as TableWrapper
};

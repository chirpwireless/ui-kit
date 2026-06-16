import { styled as o, Box as t } from "@mui/material";
import { CurrentTheme as l } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const p = o(t)(({ theme: e }) => {
  const r = n(e);
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: e.palette.mode === l.Dark ? r.neutral.black : r.neutral.white,
    border: "none",
    borderRadius: "12px",
    padding: "24px",
    overflowX: "hidden",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      display: "none"
    }
  };
}), c = o(t)(({ theme: e }) => {
  const r = n(e);
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: e.palette.mode === l.Dark ? r.neutral.black : r.neutral.white,
    border: "none",
    borderRadius: "8px",
    padding: "11px",
    alignItems: "center",
    justifyContent: "center"
  };
});
export {
  p as SimpleCard,
  c as SimpleSmallCard
};

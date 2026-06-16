import { styled as t, Stack as o } from "@mui/material";
import { CurrentTheme as a } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const i = t(o)(({ theme: e }) => {
  const r = n(e);
  return {
    backgroundColor: e.palette.mode === a.Dark ? r.neutral.black : r.neutral.white,
    border: "none",
    borderRadius: "12px",
    padding: "24px",
    overflowX: "hidden",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      display: "none"
    }
  };
}), c = t(o)(({ theme: e }) => {
  const r = n(e);
  return {
    backgroundColor: e.palette.mode === a.Dark ? r.neutral.black : r.neutral.white,
    border: "none",
    borderRadius: "8px",
    padding: "11px",
    alignItems: "center",
    justifyContent: "center"
  };
});
export {
  i as SimpleCard,
  c as SimpleSmallCard
};

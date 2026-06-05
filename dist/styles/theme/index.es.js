import { createTheme as r } from "@mui/material";
import { createComponents as p } from "./components.es.js";
import { darkTheme as i } from "./dark.es.js";
import { lightTheme as n } from "./light.es.js";
import { themeMixins as h } from "./mixins.es.js";
import { themeTemplate as s } from "./template.es.js";
const x = (t = "light", o) => {
  const { palette: e } = t === "light" ? n() : i(), m = {
    ...s,
    ...h,
    palette: o ?? e,
    components: p(e)
  };
  return r(m);
};
export {
  x as getTheme
};

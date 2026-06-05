import { createTheme as m } from "@mui/material/styles";
import { chirpDarkTheme as o } from "./chirp/dark.es.js";
import { chirpLightTheme as i } from "./chirp/light.es.js";
import { createComponents as p } from "./components.es.js";
import { darkTheme as h } from "./dark.es.js";
import { lightTheme as a } from "./light.es.js";
import { themeMixins as c } from "./mixins.es.js";
import { themeTemplate as f } from "./template.es.js";
import { createBarTheme as L } from "./chartTheme.es.js";
const n = (e, t) => t === "chirp" ? (e === "light" ? i : o).palette : (e === "light" ? a : h).palette, B = ({ mode: e = "light", variant: t = "default" } = {}) => {
  const r = n(e, t);
  return m({
    ...f,
    ...c,
    palette: r,
    components: p(r)
  });
};
export {
  o as chirpDarkTheme,
  i as chirpLightTheme,
  L as createBarTheme,
  p as createComponents,
  h as darkTheme,
  B as getTheme,
  a as lightTheme,
  c as themeMixins,
  f as themeTemplate
};

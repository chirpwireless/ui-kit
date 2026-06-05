import { languages as o } from "../languages.es.js";
import { mergedResources as s } from "./merged-resourses.es.js";
const p = Object.keys(o).reduce((e, r) => (Object.keys(s).map((t) => {
  e[r] = {
    ...e[r] ?? {},
    [t]: s[t][r]
  };
}), e), {});
export {
  p as default
};

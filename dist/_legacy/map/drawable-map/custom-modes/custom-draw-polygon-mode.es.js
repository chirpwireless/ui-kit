import { MapboxDraw as n } from "../../../../index-BaJfFTpt.js";
const i = {
  ...n.modes.draw_polygon,
  clickOnVertex(o) {
    var r;
    if (!(o.currentVertexPosition !== null && Array.isArray((r = o.polygon) == null ? void 0 : r.coordinates[0]) && o.currentVertexPosition === o.polygon.coordinates[0].length - 1))
      return this.changeMode(n.constants.modes.DIRECT_SELECT, {
        featureId: o.polygon.id
      });
  }
};
export {
  i as customDrawPolygonMode
};

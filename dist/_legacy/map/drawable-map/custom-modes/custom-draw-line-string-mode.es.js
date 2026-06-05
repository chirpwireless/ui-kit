import { MapboxDraw as i } from "../../../../index-BaJfFTpt.js";
const t = {
  ...i.modes.draw_line_string,
  // Переопределение нажатия на последнюю точку при рисовании
  clickOnVertex(r) {
    var n;
    if (!(r.currentVertexPosition !== null && Array.isArray((n = r.line) == null ? void 0 : n.coordinates) && r.currentVertexPosition === r.line.coordinates.length - 1))
      return this.changeMode(i.constants.modes.DIRECT_SELECT, {
        featureId: r.line.id
      });
  }
};
export {
  t as customDrawLineStringMode
};

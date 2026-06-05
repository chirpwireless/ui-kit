import { mapMarkerFirstStartLayerSvgString as t, mapMarkerSecondStartLayerSvgString as a, mapMarkerFirstEndLayerSvgString as n, mapMarkerSecondEndLayerSvgString as o, mapMarkerDiffusion as e } from "./mp-marker-string.es.js";
const p = (i) => `<div class="svg-container">
                                            ${t(i)}
                                            ${a(i)}
                                        </div>`, v = (i) => `<div class="svg-container">
                                            ${n(i)}
                                            ${o(i)}
                                        </div>`, d = (i, r) => `<div style="position: relative; width: 154px; height: 154px;">
        <div style="position: absolute; top: 0; left: 0;">
            ${e(i)}
        </div>
        <div style="position: absolute; top: 60px; left: 60px;">
            ${r(i)}
        </div>
    </div>
    `;
export {
  v as mapMarkerEndSvgContainer,
  p as mapMarkerStartSvgContainer,
  d as specificMarkerIconWithDiffusion
};

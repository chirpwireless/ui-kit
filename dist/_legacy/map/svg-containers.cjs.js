"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("./mp-marker-string.cjs.js"),a=r=>`<div class="svg-container">
                                            ${i.mapMarkerFirstStartLayerSvgString(r)}
                                            ${i.mapMarkerSecondStartLayerSvgString(r)}
                                        </div>`,e=r=>`<div class="svg-container">
                                            ${i.mapMarkerFirstEndLayerSvgString(r)}
                                            ${i.mapMarkerSecondEndLayerSvgString(r)}
                                        </div>`,n=(r,t)=>`<div style="position: relative; width: 154px; height: 154px;">
        <div style="position: absolute; top: 0; left: 0;">
            ${i.mapMarkerDiffusion(r)}
        </div>
        <div style="position: absolute; top: 60px; left: 60px;">
            ${t(r)}
        </div>
    </div>
    `;exports.mapMarkerEndSvgContainer=e;exports.mapMarkerStartSvgContainer=a;exports.specificMarkerIconWithDiffusion=n;

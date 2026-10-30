// src/helpers/unit-converter.ts
var e = (e, t) => t ? e * .0006213712 ** 2 : e * .0006213712, t = (e) => e * 5280, n = (e, n) => n ? `${Math.round(e)} mi2, (${Math.round(t(e))} ft2)` : `${Math.round(e)} mi, (${Math.round(t(e))} ft)`;
export { n as formatedMilesFeetValue, e as metersToMiles, t as milesToFeet };

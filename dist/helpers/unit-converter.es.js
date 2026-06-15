const n = (t, r) => r ? t * Math.pow(6213712e-10, 2) : t * 6213712e-10, e = (t) => t * 5280, o = (t, r) => r ? `${Math.round(t)} mi2, (${Math.round(e(t))} ft2)` : `${Math.round(t)} mi, (${Math.round(e(t))} ft)`;
export {
  o as formatedMilesFeetValue,
  n as metersToMiles,
  e as milesToFeet
};

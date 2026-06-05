const e = {
  "°C": {
    convert: (t) => t * 1.8 + 32,
    alternativeUnits: "°F"
  },
  hPa: {
    convert: (t) => t / 1.333,
    alternativeUnits: "mmHg"
  }
};
export {
  e as converter
};

const e = (a, o) => a.reduce((c, r) => ({ ...c, [r[o]]: r }), {});
export {
  e as arrayToMap
};

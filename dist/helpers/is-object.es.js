const t = (r) => typeof r == "object" && r !== null && !Array.isArray(r);
export {
  t as isObject
};

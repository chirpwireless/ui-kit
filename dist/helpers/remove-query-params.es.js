const r = (a) => {
  new URLSearchParams().delete(a);
};
export {
  r as removeQueryParam
};

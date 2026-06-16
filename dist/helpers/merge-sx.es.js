const t = (r) => Array.isArray(r), y = (r, o) => [
  ...t(r) ? r : [r],
  ...t(o) ? o : o ? [o] : []
];
export {
  y as mergeSx
};

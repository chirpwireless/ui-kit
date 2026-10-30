// src/helpers/merge-sx.ts
var e = (e) => Array.isArray(e), t = (t, n) => [...e(t) ? t : [t], ...e(n) ? n : n ? [n] : []];
export { t as mergeSx };

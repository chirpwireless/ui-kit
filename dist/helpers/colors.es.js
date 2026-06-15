const t = (n) => {
  const e = parseInt(n.slice(1), 16);
  return n.length > 7 && n.length !== 3 ? [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, Number(((e & 255) / 255).toFixed(2))] : [e >> 16 & 255, e >> 8 & 255, e & 255, 1];
};
export {
  t as hex2rgba
};

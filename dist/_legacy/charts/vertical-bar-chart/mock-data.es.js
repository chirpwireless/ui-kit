const t = Array.from({ length: 10 }, (r, a) => ({
  id: a + 1,
  name: `${a + 1}-car`,
  total: Math.round(Math.random() * 100)
}));
export {
  t as mockBarsData
};

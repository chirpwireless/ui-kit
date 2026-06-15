const i = (e, r) => {
  let t = parseInt(e.toString());
  const a = Math.abs((e - t) * 60);
  let o = Math.floor(a);
  const c = (a - o) * 60;
  let n = Math.round((c + Number.EPSILON) * 100) / 100;
  t = Math.abs(t), n === 60 && (o++, n = 0), o === 60 && (t++, o = 0);
  const s = {
    dir: e < 0 ? r ? "W" : "S" : r ? "E" : "N",
    deg: t,
    min: o,
    sec: n
  };
  return `${s.deg}° ${s.min}' ${s.sec}" ${s.dir}`;
};
export {
  i as convertDDToDMS
};

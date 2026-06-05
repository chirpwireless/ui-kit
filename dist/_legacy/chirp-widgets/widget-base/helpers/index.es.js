const o = (e, t) => {
  localStorage.setItem(e, JSON.stringify(t));
}, r = (e) => {
  try {
    const t = localStorage.getItem(e);
    return t && JSON.parse(t);
  } catch (t) {
    console.error("getObjectFromStorage error", t);
  }
}, a = {
  hour: "%H",
  day: "%d %b",
  week: "%d %b",
  month: "%b"
};
export {
  r as getObjectFromStorage,
  a as graphTimeFormat,
  o as setObjectIntoStorage
};

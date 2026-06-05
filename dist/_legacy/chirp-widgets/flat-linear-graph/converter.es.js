const e = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric"
}), r = (t) => {
  if (!(!t || typeof t != "object"))
    return e.format(t).split(" ").reverse().join(" ");
};
export {
  r as convertDatumValueToString,
  e as dateFormatter
};

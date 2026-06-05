const d = (a) => ({
  us: { dialCode: "+1", name: a("USA") },
  ru: { dialCode: "+7", name: a("Russia") },
  de: { dialCode: "+49", name: a("Germany") },
  pt: { dialCode: "+351", name: a("Portugal") },
  es: { dialCode: "+34", name: a("Spain") },
  fr: { dialCode: "+33", name: a("France") }
});
export {
  d as COUNTRIES
};

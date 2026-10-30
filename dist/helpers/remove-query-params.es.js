// src/helpers/remove-query-params.ts
var e = (e) => {
	new URLSearchParams().delete(e);
};
export { e as removeQueryParam };

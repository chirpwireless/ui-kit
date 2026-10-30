import { useCallback as e } from "react";
// src/hooks/use-download-xlsx.ts
function t({ file: t, cb: n }) {
	return e(() => {
		try {
			if (t) {
				let e = window.URL.createObjectURL(new Blob([t])), r = document.createElement("a");
				r.href = e, r.setAttribute("download", "report.xlsx"), document.body.appendChild(r), r.click(), r.remove(), n();
			}
		} catch (e) {
			console.error("Error downloading the file:", e);
		}
	}, [n, t]);
}
export { t as useDownloadXlsx };

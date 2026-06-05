import { useCallback as n } from "react";
function l({ file: o, cb: t }) {
  return n(() => {
    try {
      if (o) {
        const r = window.URL.createObjectURL(new Blob([o])), e = document.createElement("a");
        e.href = r, e.setAttribute("download", "report.xlsx"), document.body.appendChild(e), e.click(), e.remove(), t();
      }
    } catch (r) {
      console.error("Error downloading the file:", r);
    }
  }, [t, o]);
}
export {
  l as useDownloadXlsx
};

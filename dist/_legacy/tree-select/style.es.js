import { styled as l, alpha as o } from "@mui/material";
import { TreeItem as i } from "@mui/x-tree-view";
const u = l(i)(({ theme: t, level: d = 0 }) => {
  var e, r, a, n, p;
  return {
    ".MuiTreeItem-content": {
      paddingLeft: 16 + d * 24,
      paddingRight: 16,
      paddingTop: 14,
      paddingBottom: 14,
      flexDirection: "row-reverse",
      color: t.palette.text.textInput80,
      background: "transparent",
      borderRadius: "0px",
      ...t.typography.body1,
      svg: {
        color: o((r = (e = t.palette) == null ? void 0 : e.text) == null ? void 0 : r.textInput80, 0.8)
      },
      "&.Mui-expanded": {
        svg: {
          transform: "rotateZ(180deg)",
          transition: "all 200ms"
        }
      },
      "&.MuiTreeItem-content.Mui-focused": {
        backgroundColor: "transparent !important"
      },
      "&.Mui-selected": {
        backgroundColor: o((a = t.palette) == null ? void 0 : a.base.color61, 0.1),
        color: t.palette.base.color6
      },
      "&:hover": {
        backgroundColor: o((n = t.palette) == null ? void 0 : n.base.color61, 0.1),
        color: (p = t.palette) == null ? void 0 : p.base.color6
      },
      ".MuiTreeItem-label": {
        ...t.typography.body1
      }
    },
    ul: {
      padding: 0
    }
  };
});
export {
  u as TreeItem
};

import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as Y, Box as o, useTheme as q, Paper as A, Typography as n, Stack as f, ClickAwayListener as G, TextField as H } from "@mui/material";
import J from "react";
import { EditIcon as Q } from "../../icons/EditIcon/index.es.js";
import { SearchIcon as U } from "../../icons/SearchIcon/index.es.js";
import { TrashIcon as X } from "../../icons/TrashIcon/index.es.js";
import { CurrentTheme as Z } from "../../styles/constants.es.js";
import { chirpPalette as g } from "../../theme/palette.es.js";
import { Button as l } from "../Button/Button.es.js";
import { Checkbox as y } from "../Checkbox/Checkbox.es.js";
const j = Y(o)(({ theme: i }) => ({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: g(i).primaryColors.accent,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px",
  "& svg": {
    width: "32px",
    height: "32px",
    color: i.palette.common.white
  }
})), $ = J.memo(
  ({
    children: i,
    searchValue: b,
    onSearchChange: v,
    searchPlaceholder: k,
    isAddingNewTag: p,
    newTagValue: t,
    onNewTagValueChange: C,
    onStartAddNewTag: a,
    onCreateTag: c,
    onCancelAddNewTag: x,
    addNewTagPlaceholder: P,
    enterTagNamePlaceholder: I,
    newTagInputRef: D,
    searchInputRef: w,
    dropdownRef: z,
    deleteConfirmTag: d,
    onConfirmDelete: M,
    onCancelDelete: W,
    deleteTitle: E,
    deleteSubtitle: F,
    cancelText: u,
    confirmDeleteText: R,
    editConfirmTag: m,
    onConfirmStartEdit: B,
    onCancelStartEdit: O,
    editTitle: S,
    editSubtitle: K,
    confirmEditText: _,
    ...L
  }) => {
    const h = q(), s = g(h);
    return /* @__PURE__ */ e.jsx(A, { ...L, ref: z, sx: { p: 0, overflow: "hidden" }, children: d ? /* @__PURE__ */ e.jsxs(o, { sx: { p: 3, textAlign: "center" }, children: [
      /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(X, {}) }),
      /* @__PURE__ */ e.jsx(n, { variant: "h6", sx: { mb: 1 }, children: E.replace("{{name}}", d.name) }),
      /* @__PURE__ */ e.jsx(n, { variant: "body2", color: "neutral.grey4", sx: { mb: 3 }, children: F }),
      /* @__PURE__ */ e.jsxs(f, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ e.jsx(l, { variant: "secondary", size: "medium", fullWidth: !0, onClick: W, children: u }),
        /* @__PURE__ */ e.jsx(l, { variant: "primary", size: "medium", fullWidth: !0, onClick: M, children: R })
      ] })
    ] }) : m ? /* @__PURE__ */ e.jsxs(o, { sx: { p: 3, textAlign: "center" }, children: [
      /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(Q, {}) }),
      /* @__PURE__ */ e.jsx(n, { variant: "h6", sx: { mb: 1 }, children: S.replace("{{name}}", m.name) }),
      /* @__PURE__ */ e.jsx(n, { variant: "body2", color: "neutral.grey4", sx: { mb: 3 }, children: K }),
      /* @__PURE__ */ e.jsxs(f, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ e.jsx(l, { variant: "secondary", size: "medium", fullWidth: !0, onClick: O, children: u }),
        /* @__PURE__ */ e.jsx(l, { variant: "primary", size: "medium", fullWidth: !0, onClick: B, children: _ })
      ] })
    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        o,
        {
          sx: {
            p: 1.5,
            borderBottom: "1px solid",
            borderColor: "borders.primary",
            position: "relative",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ e.jsx(
              o,
              {
                sx: {
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none"
                },
                children: /* @__PURE__ */ e.jsx(
                  U,
                  {
                    style: {
                      fontSize: 20,
                      color: s.neutral.primary
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: w,
                type: "text",
                placeholder: k,
                value: b,
                onChange: (r) => v(r.target.value),
                onClick: (r) => r.stopPropagation(),
                onMouseDown: (r) => r.stopPropagation(),
                onKeyDown: (r) => r.stopPropagation(),
                onFocus: (r) => r.stopPropagation(),
                autoComplete: "off",
                style: {
                  width: "100%",
                  padding: "8px 12px 8px 36px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: h.palette.mode === Z.Dark ? s.neutral.grey1 : s.neutral.white,
                  color: s.neutral.primary,
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box"
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        o,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1,
            py: 0.5,
            cursor: "pointer",
            "&:hover": {
              bgcolor: "borders.primary"
            }
          },
          onMouseDown: (r) => {
            r.preventDefault(), r.stopPropagation(), p || a();
          },
          children: p ? /* @__PURE__ */ e.jsx(
            G,
            {
              onClickAway: () => {
                t.trim() ? c(t) : x();
              },
              children: /* @__PURE__ */ e.jsxs(o, { px: 3, sx: { display: "flex", alignItems: "center", gap: 1, flex: 1 }, children: [
                /* @__PURE__ */ e.jsx(y, { checked: !1, disabled: !0 }),
                /* @__PURE__ */ e.jsx(
                  H,
                  {
                    inputRef: D,
                    size: "small",
                    fullWidth: !0,
                    value: t,
                    onChange: (r) => C(r.target.value),
                    onKeyDown: (r) => {
                      r.stopPropagation(), r.key === "Enter" && t.trim() ? (r.preventDefault(), c(t)) : r.key === "Escape" && x();
                    },
                    onClick: (r) => r.stopPropagation(),
                    onMouseDown: (r) => r.stopPropagation(),
                    onFocus: (r) => r.stopPropagation(),
                    placeholder: I,
                    autoFocus: !0,
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "transparent"
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                      },
                      "& .MuiInputBase-input": {
                        p: 0
                      }
                    }
                  }
                )
              ] })
            }
          ) : /* @__PURE__ */ e.jsxs(
            o,
            {
              px: 3,
              sx: { display: "flex", alignItems: "center", gap: 1, flex: 1, cursor: "pointer" },
              onClick: (r) => {
                r.stopPropagation(), a();
              },
              onMouseDown: (r) => {
                r.preventDefault(), r.stopPropagation(), a();
              },
              children: [
                /* @__PURE__ */ e.jsx(y, { checked: !1, disabled: !0 }),
                /* @__PURE__ */ e.jsx(n, { variant: "body2", color: "neutral.grey4", children: P })
              ]
            }
          )
        }
      ),
      i
    ] }) });
  }
);
$.displayName = "CustomPaper";
export {
  $ as CustomPaper
};

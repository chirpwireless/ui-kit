import { jsxRuntimeExports as l } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as d, useRef as E, useMemo as ne, useCallback as r, createElement as we } from "react";
import { KeyboardArrowDown as ye, Check as Ae, Close as Se } from "@mui/icons-material";
import { styled as Ie, Box as w, ClickAwayListener as oe, TextField as le, InputAdornment as be, IconButton as j, Typography as Pe, FormControl as Ee, Autocomplete as je } from "@mui/material";
import { useTranslation as ve } from "react-i18next";
import { EditIcon as Ne } from "../../icons/EditIcon/index.es.js";
import { TrashIcon as Ve } from "../../icons/TrashIcon/index.es.js";
import { chirpPalette as ke } from "../../theme/palette.es.js";
import { Checkbox as Me } from "../Checkbox/Checkbox.es.js";
import { InputLabel as Oe } from "../Select/components/InputLabel/index.es.js";
import { CustomPaper as De } from "./CustomPaper.es.js";
import { CustomPopper as Re } from "./CustomPopper.es.js";
const ze = Ie(ye)(({ theme: i }) => ({
  fontSize: "18px",
  color: ke(i).neutral.grey4
})), Xe = ({
  tags: i,
  onTagsChange: c,
  onCreateTag: R,
  onUpdateTag: z,
  onDeleteTag: L,
  placeholder: ae,
  label: re,
  disabled: ie = !1,
  addNewTagPlaceholder: H,
  enterTagNamePlaceholder: Y,
  multiple: u = !0
}) => {
  const { t: a } = ve("uiKit"), [se, de] = d(""), [h, y] = d(""), [B, v] = d(null), [g, N] = d(null), [x, A] = d(""), [T, V] = d(null), [m, k] = d(null), [S, C] = d(!1), [F, I] = d(!1), [K, f] = d(""), M = E(null), W = E(null), b = E(null), O = ne(() => i.filter((n) => n.selected), [i]), _ = r(
    (n) => {
      if (u) {
        const t = i.map((e) => e.id === n ? { ...e, selected: !e.selected } : e);
        c(t);
      } else {
        const t = i.map((e) => ({
          ...e,
          selected: e.id === n
        }));
        c(t), C(!1);
      }
    },
    [i, c, u]
  ), q = r(
    (n) => {
      const t = n.trim();
      t && !i.some((e) => e.name.toLowerCase() === t.toLowerCase()) && (R(t), f(""), I(!1));
    },
    [i, R]
  ), G = r(() => {
    I(!0), f(""), setTimeout(() => {
      var n;
      return (n = M.current) == null ? void 0 : n.focus();
    }, 0);
  }, []), J = r(() => {
    I(!1), f("");
  }, []), Q = r((n, t) => {
    t.stopPropagation(), k(n);
  }, []), X = r(() => {
    m && (N(m.id), A(m.name), k(null));
  }, [m]), Z = r(() => {
    k(null);
  }, []), P = r(() => {
    g && x.trim() && z(g, x.trim()), N(null), A("");
  }, [g, x, z]), D = r(() => {
    N(null), A("");
  }, []), $ = r((n, t) => {
    t.stopPropagation(), V(n);
  }, []), U = r(() => {
    T && (L(T.id), V(null));
  }, [T, L]), ee = r(() => {
    V(null);
  }, []), ce = r(() => C(!0), []), ue = r((n, t, e) => {
    e !== "reset" && de(t);
  }, []), pe = r(
    (n, t, e) => {
      if (e === "clear") {
        const s = i.map((o) => ({ ...o, selected: !1 }));
        c(s);
      } else if (e === "selectOption" || e === "removeOption")
        if (u) {
          const s = new Set(t.map((p) => p.id)), o = i.map((p) => ({
            ...p,
            selected: s.has(p.id)
          }));
          c(o);
        } else {
          const s = t, o = i.map((p) => ({
            ...p,
            selected: s ? p.id === s.id : !1
          }));
          c(o), e === "selectOption" && C(!1);
        }
    },
    [i, c, u]
  ), me = r((n) => n, []), fe = r((n) => n.name, []), he = r((n, t) => n.id === t.id, []), te = E({
    searchValue: h,
    setSearchValue: y,
    isAddingNewTag: F,
    newTagValue: K,
    setNewTagValue: f,
    handleStartAddNewTag: G,
    handleCreateTag: q,
    handleCancelAddNewTag: J,
    searchPlaceholder: a("Search"),
    addNewTagPlaceholder: H || a("Enter tag name here to add new tag..."),
    enterTagNamePlaceholder: Y || a("Enter tag name"),
    newTagInputRef: M,
    searchInputRef: W,
    dropdownRef: b,
    deleteConfirmTag: T,
    handleConfirmDelete: U,
    handleCancelDelete: ee,
    deleteTitle: a('Are you sure you want to delete "{{name}}" tag?'),
    deleteSubtitle: a("After you delete this tag, the devices it's assigned to will no longer use it."),
    cancelText: a("Cancel"),
    confirmDeleteText: a("Yes, delete"),
    editConfirmTag: m,
    handleConfirmStartEdit: X,
    handleCancelStartEdit: Z,
    editTitle: a('Are you sure you want to edit "{{name}}" tag?', {
      defaultValue: 'Are you sure you want to edit "{{name}}" tag?'
    }),
    editSubtitle: a("After you edit this tag, the devices it is assigned to will use the updated name.", {
      defaultValue: "After you edit this tag, the devices it is assigned to will use the updated name."
    }),
    confirmEditText: a("Yes, edit", { defaultValue: "Yes, edit" })
  });
  te.current = {
    searchValue: h,
    setSearchValue: y,
    isAddingNewTag: F,
    newTagValue: K,
    setNewTagValue: f,
    handleStartAddNewTag: G,
    handleCreateTag: q,
    handleCancelAddNewTag: J,
    searchPlaceholder: a("Search"),
    addNewTagPlaceholder: H || a("Enter tag name here to add new tag..."),
    enterTagNamePlaceholder: Y || a("Enter tag name"),
    newTagInputRef: M,
    searchInputRef: W,
    dropdownRef: b,
    deleteConfirmTag: T,
    handleConfirmDelete: U,
    handleCancelDelete: ee,
    deleteTitle: a('Are you sure you want to delete "{{name}}" tag?'),
    deleteSubtitle: a("After you delete this tag, the devices it's assigned to will no longer use it."),
    cancelText: a("Cancel"),
    confirmDeleteText: a("Yes, delete"),
    editConfirmTag: m,
    handleConfirmStartEdit: X,
    handleCancelStartEdit: Z,
    editTitle: a('Are you sure you want to edit "{{name}}" tag?', {
      defaultValue: 'Are you sure you want to edit "{{name}}" tag?'
    }),
    editSubtitle: a("After you edit this tag, the devices it is assigned to will use the updated name.", {
      defaultValue: "After you edit this tag, the devices it is assigned to will use the updated name."
    }),
    confirmEditText: a("Yes, edit", { defaultValue: "Yes, edit" })
  };
  const ge = ne(() => (t) => {
    const e = te.current;
    return /* @__PURE__ */ l.jsx(
      De,
      {
        ...t,
        searchValue: e.searchValue,
        onSearchChange: e.setSearchValue,
        searchPlaceholder: e.searchPlaceholder,
        isAddingNewTag: e.isAddingNewTag,
        newTagValue: e.newTagValue,
        onNewTagValueChange: e.setNewTagValue,
        onStartAddNewTag: e.handleStartAddNewTag,
        onCreateTag: e.handleCreateTag,
        onCancelAddNewTag: e.handleCancelAddNewTag,
        addNewTagPlaceholder: e.addNewTagPlaceholder,
        enterTagNamePlaceholder: e.enterTagNamePlaceholder,
        newTagInputRef: e.newTagInputRef,
        searchInputRef: e.searchInputRef,
        dropdownRef: e.dropdownRef,
        deleteConfirmTag: e.deleteConfirmTag,
        onConfirmDelete: e.handleConfirmDelete,
        onCancelDelete: e.handleCancelDelete,
        deleteTitle: e.deleteTitle,
        deleteSubtitle: e.deleteSubtitle,
        cancelText: e.cancelText,
        confirmDeleteText: e.confirmDeleteText,
        editConfirmTag: e.editConfirmTag,
        onConfirmStartEdit: e.handleConfirmStartEdit,
        onCancelStartEdit: e.handleCancelStartEdit,
        editTitle: e.editTitle,
        editSubtitle: e.editSubtitle,
        confirmEditText: e.confirmEditText
      }
    );
  }, []), xe = r((n, t) => {
    if (t === "blur") {
      const e = n.relatedTarget;
      if (b.current && b.current.contains(e))
        return;
    }
    t !== "toggleInput" && (C(!1), y(""));
  }, []), Te = r(
    (n, t) => {
      if (h.trim() && !t.name.toLowerCase().includes(h.toLowerCase()))
        return null;
      const e = g === t.id, s = B === t.id;
      return e ? /* @__PURE__ */ l.jsx(
        w,
        {
          component: "li",
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            width: "100%"
          },
          children: /* @__PURE__ */ l.jsx(oe, { onClickAway: P, children: /* @__PURE__ */ l.jsx(w, { sx: { flex: 1 }, children: /* @__PURE__ */ l.jsx(
            le,
            {
              size: "small",
              value: x,
              onChange: (o) => A(o.target.value),
              onKeyDown: (o) => {
                o.key === "Enter" ? (o.preventDefault(), P()) : o.key === "Escape" && D();
              },
              autoFocus: !0,
              fullWidth: !0,
              onClick: (o) => o.stopPropagation(),
              slotProps: {
                input: {
                  endAdornment: /* @__PURE__ */ l.jsxs(be, { position: "end", children: [
                    /* @__PURE__ */ l.jsx(
                      j,
                      {
                        size: "small",
                        onClick: (o) => {
                          o.stopPropagation(), P();
                        },
                        children: /* @__PURE__ */ l.jsx(Ae, { fontSize: "small" })
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      j,
                      {
                        size: "small",
                        onClick: (o) => {
                          o.stopPropagation(), D();
                        },
                        children: /* @__PURE__ */ l.jsx(Se, { fontSize: "small" })
                      }
                    )
                  ] })
                }
              }
            }
          ) }) })
        },
        t.id
      ) : /* @__PURE__ */ we(
        w,
        {
          component: "li",
          ...n,
          key: t.id,
          onMouseEnter: () => v(t.id),
          onMouseLeave: () => v(null),
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            width: "100%",
            px: 1,
            py: 0.5,
            "&:hover": {
              bgcolor: "borders.primary"
            }
          }
        },
        /* @__PURE__ */ l.jsxs(
          w,
          {
            sx: { display: "flex", alignItems: "center", gap: 1, flex: 1 },
            onClick: (o) => {
              o.stopPropagation(), _(t.id);
            },
            children: [
              /* @__PURE__ */ l.jsx(Me, { checked: t.selected }),
              /* @__PURE__ */ l.jsx(Pe, { variant: "body2", children: t.name })
            ]
          }
        ),
        s && /* @__PURE__ */ l.jsxs(w, { sx: { display: "flex", gap: 0.5, flexShrink: 0 }, children: [
          /* @__PURE__ */ l.jsx(
            j,
            {
              size: "small",
              onClick: (o) => {
                o.stopPropagation(), o.preventDefault(), Q(t, o);
              },
              children: /* @__PURE__ */ l.jsx(Ne, {})
            }
          ),
          /* @__PURE__ */ l.jsx(
            j,
            {
              size: "small",
              onClick: (o) => {
                o.stopPropagation(), o.preventDefault(), $(t, o);
              },
              children: /* @__PURE__ */ l.jsx(Ve, {})
            }
          )
        ] })
      );
    },
    [
      h,
      g,
      B,
      P,
      x,
      D,
      v,
      _,
      Q,
      $
    ]
  ), Ce = r(() => {
    S && (C(!1), y(""), I(!1), f(""));
  }, [S]);
  return /* @__PURE__ */ l.jsx(oe, { onClickAway: Ce, children: /* @__PURE__ */ l.jsxs(Ee, { fullWidth: !0, children: [
    /* @__PURE__ */ l.jsx(
      Oe,
      {
        label: re,
        className: S ? "Mui-focused" : void 0,
        sx: {
          "&.MuiInputLabel-shrink": {
            fontSize: "14px",
            lineHeight: "20px",
            top: "8px",
            left: "-12px"
          },
          "&.Mui-focused": {
            color: "primaryColors.accent"
          },
          padding: 0,
          left: "-12px",
          color: "neutral.primary"
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      je,
      {
        multiple: u,
        open: S,
        onOpen: ce,
        onClose: xe,
        disabled: ie,
        options: i,
        value: u ? O : O[0] || null,
        inputValue: se,
        onInputChange: ue,
        onChange: pe,
        getOptionLabel: fe,
        isOptionEqualToValue: he,
        disableCloseOnSelect: u,
        filterOptions: me,
        autoHighlight: !1,
        disableListWrap: !0,
        renderInput: (n) => {
          var e;
          const t = O.map((s) => s.name).join(", ");
          return /* @__PURE__ */ l.jsx(
            le,
            {
              ...n,
              placeholder: t || ae || a("Select tags"),
              slotProps: {
                ...n.slotProps,
                input: {
                  ...n.slotProps.input,
                  startAdornment: null
                },
                htmlInput: {
                  ...n.slotProps.htmlInput,
                  value: t || ((e = n.slotProps.htmlInput) == null ? void 0 : e.value) || "",
                  readOnly: !0
                }
              }
            }
          );
        },
        renderValue: () => null,
        renderOption: Te,
        popupIcon: /* @__PURE__ */ l.jsx(ze, {}),
        sx: {
          "& .MuiOutlinedInput-root": {
            bgcolor: "neutral.grey1",
            borderRadius: "8px",
            height: "36px",
            minHeight: "36px",
            border: "1px solid",
            borderColor: "borders.primary",
            "&:hover": {
              borderColor: "primaryColors.accent"
            },
            "&.Mui-focused": {
              borderColor: "primaryColors.accent"
            }
          },
          "& .MuiInputBase-root": {
            padding: "0 !important",
            paddingRight: "40px !important"
          },
          "& .MuiAutocomplete-option": {
            padding: "0 !important",
            '&[aria-selected="true"]': {
              bgcolor: "transparent !important"
            },
            "&.Mui-focused": {
              bgcolor: "transparent !important"
            }
          },
          "& .MuiAutocomplete-input": {
            padding: "8px 16px !important",
            fontSize: "13px",
            lineHeight: "20px"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          },
          "& fieldset": {
            border: "none"
          },
          "& .MuiAutocomplete-endAdornment": {
            right: "16px !important"
          },
          "& .MuiAutocomplete-popupIndicator:hover": {
            backgroundColor: "transparent"
          }
        },
        slots: {
          paper: ge,
          popper: Re
        },
        slotProps: {
          listbox: {
            style: { scrollBehavior: "auto", maxHeight: "300px", overflow: "auto" }
          }
        }
      }
    )
  ] }) });
};
export {
  Xe as MultiSelectOrCreate
};

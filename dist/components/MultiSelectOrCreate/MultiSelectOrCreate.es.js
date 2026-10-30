import { chirpPalette as e } from "../../theme/palette.es.js";
import { EditIcon as t } from "../../icons/EditIcon/index.es.js";
import { TrashIcon as n } from "../../icons/TrashIcon/index.es.js";
import { InputLabel as r } from "../Select/components/InputLabel/index.es.js";
import { Checkbox as ee } from "../Checkbox/Checkbox.es.js";
import { CustomPaper as i } from "./CustomPaper.es.js";
import { CustomPopper as a } from "./CustomPopper.es.js";
import { createElement as te, useCallback as o, useMemo as s, useRef as c, useState as l } from "react";
import { Autocomplete as ne, Box as u, ClickAwayListener as re, FormControl as ie, IconButton as d, InputAdornment as ae, TextField as f, Typography as oe, styled as p } from "@mui/material";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { useTranslation as se } from "react-i18next";
import { Check as ce, Close as le, KeyboardArrowDown as g } from "@mui/icons-material";
// src/components/MultiSelectOrCreate/MultiSelectOrCreate.tsx
var ue = p(g)(({ theme: t }) => ({
	fontSize: "18px",
	color: e(t).neutral.grey4
})), _ = ({ tags: e, onTagsChange: p, onCreateTag: g, onUpdateTag: _, onDeleteTag: v, placeholder: de, label: fe, disabled: pe = !1, addNewTagPlaceholder: y, enterTagNamePlaceholder: b, multiple: x = !0 }) => {
	let { t: S } = se("uiKit"), [me, he] = l(""), [C, w] = l(""), [T, E] = l(null), [D, O] = l(null), [k, A] = l(""), [j, M] = l(null), [N, P] = l(null), [F, I] = l(!1), [L, R] = l(!1), [z, B] = l(""), V = c(null), H = c(null), U = c(null), W = s(() => e.filter((e) => e.selected), [e]), G = o((t) => {
		x ? p(e.map((e) => e.id === t ? {
			...e,
			selected: !e.selected
		} : e)) : (p(e.map((e) => ({
			...e,
			selected: e.id === t
		}))), I(!1));
	}, [
		e,
		p,
		x
	]), K = o((t) => {
		let n = t.trim();
		n && !e.some((e) => e.name.toLowerCase() === n.toLowerCase()) && (g(n), B(""), R(!1));
	}, [e, g]), q = o(() => {
		R(!0), B(""), setTimeout(() => V.current?.focus(), 0);
	}, []), J = o(() => {
		R(!1), B("");
	}, []), Y = o((e, t) => {
		t.stopPropagation(), P(e);
	}, []), X = o(() => {
		N && (O(N.id), A(N.name), P(null));
	}, [N]), Z = o(() => {
		P(null);
	}, []), Q = o(() => {
		D && k.trim() && _(D, k.trim()), O(null), A("");
	}, [
		D,
		k,
		_
	]), $ = o(() => {
		O(null), A("");
	}, []), ge = o((e, t) => {
		t.stopPropagation(), M(e);
	}, []), _e = o(() => {
		j && (v(j.id), M(null));
	}, [j, v]), ve = o(() => {
		M(null);
	}, []), ye = o(() => I(!0), []), be = o((e, t, n) => {
		n !== "reset" && he(t);
	}, []), xe = o((t, n, r) => {
		if (r === "clear") p(e.map((e) => ({
			...e,
			selected: !1
		})));
		else if (r === "selectOption" || r === "removeOption") {
			if (x) {
				let t = new Set(n.map((e) => e.id));
				p(e.map((e) => ({
					...e,
					selected: t.has(e.id)
				})));
			} else {
				let t = n;
				p(e.map((e) => ({
					...e,
					selected: t ? e.id === t.id : !1
				}))), r === "selectOption" && I(!1);
			}
		}
	}, [
		e,
		p,
		x
	]), Se = o((e) => e, []), Ce = o((e) => e.name, []), we = o((e, t) => e.id === t.id, []), Te = c({
		searchValue: C,
		setSearchValue: w,
		isAddingNewTag: L,
		newTagValue: z,
		setNewTagValue: B,
		handleStartAddNewTag: q,
		handleCreateTag: K,
		handleCancelAddNewTag: J,
		searchPlaceholder: S("Search"),
		addNewTagPlaceholder: y || S("Enter tag name here to add new tag..."),
		enterTagNamePlaceholder: b || S("Enter tag name"),
		newTagInputRef: V,
		searchInputRef: H,
		dropdownRef: U,
		deleteConfirmTag: j,
		handleConfirmDelete: _e,
		handleCancelDelete: ve,
		deleteTitle: S("Are you sure you want to delete \"{{name}}\" tag?"),
		deleteSubtitle: S("After you delete this tag, the devices it's assigned to will no longer use it."),
		cancelText: S("Cancel"),
		confirmDeleteText: S("Yes, delete"),
		editConfirmTag: N,
		handleConfirmStartEdit: X,
		handleCancelStartEdit: Z,
		editTitle: S("Are you sure you want to edit \"{{name}}\" tag?", { defaultValue: "Are you sure you want to edit \"{{name}}\" tag?" }),
		editSubtitle: S("After you edit this tag, the devices it is assigned to will use the updated name.", { defaultValue: "After you edit this tag, the devices it is assigned to will use the updated name." }),
		confirmEditText: S("Yes, edit", { defaultValue: "Yes, edit" })
	});
	Te.current = {
		searchValue: C,
		setSearchValue: w,
		isAddingNewTag: L,
		newTagValue: z,
		setNewTagValue: B,
		handleStartAddNewTag: q,
		handleCreateTag: K,
		handleCancelAddNewTag: J,
		searchPlaceholder: S("Search"),
		addNewTagPlaceholder: y || S("Enter tag name here to add new tag..."),
		enterTagNamePlaceholder: b || S("Enter tag name"),
		newTagInputRef: V,
		searchInputRef: H,
		dropdownRef: U,
		deleteConfirmTag: j,
		handleConfirmDelete: _e,
		handleCancelDelete: ve,
		deleteTitle: S("Are you sure you want to delete \"{{name}}\" tag?"),
		deleteSubtitle: S("After you delete this tag, the devices it's assigned to will no longer use it."),
		cancelText: S("Cancel"),
		confirmDeleteText: S("Yes, delete"),
		editConfirmTag: N,
		handleConfirmStartEdit: X,
		handleCancelStartEdit: Z,
		editTitle: S("Are you sure you want to edit \"{{name}}\" tag?", { defaultValue: "Are you sure you want to edit \"{{name}}\" tag?" }),
		editSubtitle: S("After you edit this tag, the devices it is assigned to will use the updated name.", { defaultValue: "After you edit this tag, the devices it is assigned to will use the updated name." }),
		confirmEditText: S("Yes, edit", { defaultValue: "Yes, edit" })
	};
	let Ee = s(() => (e) => {
		let t = Te.current;
		return /* @__PURE__ */ m(i, {
			...e,
			searchValue: t.searchValue,
			onSearchChange: t.setSearchValue,
			searchPlaceholder: t.searchPlaceholder,
			isAddingNewTag: t.isAddingNewTag,
			newTagValue: t.newTagValue,
			onNewTagValueChange: t.setNewTagValue,
			onStartAddNewTag: t.handleStartAddNewTag,
			onCreateTag: t.handleCreateTag,
			onCancelAddNewTag: t.handleCancelAddNewTag,
			addNewTagPlaceholder: t.addNewTagPlaceholder,
			enterTagNamePlaceholder: t.enterTagNamePlaceholder,
			newTagInputRef: t.newTagInputRef,
			searchInputRef: t.searchInputRef,
			dropdownRef: t.dropdownRef,
			deleteConfirmTag: t.deleteConfirmTag,
			onConfirmDelete: t.handleConfirmDelete,
			onCancelDelete: t.handleCancelDelete,
			deleteTitle: t.deleteTitle,
			deleteSubtitle: t.deleteSubtitle,
			cancelText: t.cancelText,
			confirmDeleteText: t.confirmDeleteText,
			editConfirmTag: t.editConfirmTag,
			onConfirmStartEdit: t.handleConfirmStartEdit,
			onCancelStartEdit: t.handleCancelStartEdit,
			editTitle: t.editTitle,
			editSubtitle: t.editSubtitle,
			confirmEditText: t.confirmEditText
		});
	}, []), De = o((e, t) => {
		if (t === "blur") {
			let t = e.relatedTarget;
			if (U.current && U.current.contains(t)) return;
		}
		t !== "toggleInput" && (I(!1), w(""));
	}, []), Oe = o((e, r) => {
		if (C.trim() && !r.name.toLowerCase().includes(C.toLowerCase())) return null;
		let i = D === r.id, a = T === r.id;
		return i ? /* @__PURE__ */ m(u, {
			component: "li",
			sx: {
				display: "flex",
				alignItems: "center",
				gap: 1,
				p: 1,
				width: "100%"
			},
			children: /* @__PURE__ */ m(re, {
				onClickAway: Q,
				children: /* @__PURE__ */ m(u, {
					sx: { flex: 1 },
					children: /* @__PURE__ */ m(f, {
						size: "small",
						value: k,
						onChange: (e) => A(e.target.value),
						onKeyDown: (e) => {
							e.key === "Enter" ? (e.preventDefault(), Q()) : e.key === "Escape" && $();
						},
						autoFocus: !0,
						fullWidth: !0,
						onClick: (e) => e.stopPropagation(),
						slotProps: { input: { endAdornment: /* @__PURE__ */ h(ae, {
							position: "end",
							children: [/* @__PURE__ */ m(d, {
								size: "small",
								onClick: (e) => {
									e.stopPropagation(), Q();
								},
								children: /* @__PURE__ */ m(ce, { fontSize: "small" })
							}), /* @__PURE__ */ m(d, {
								size: "small",
								onClick: (e) => {
									e.stopPropagation(), $();
								},
								children: /* @__PURE__ */ m(le, { fontSize: "small" })
							})]
						}) } }
					})
				})
			})
		}, r.id) : /* @__PURE__ */ te(u, {
			component: "li",
			...e,
			key: r.id,
			onMouseEnter: () => E(r.id),
			onMouseLeave: () => E(null),
			sx: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				cursor: "pointer",
				width: "100%",
				px: 1,
				py: .5,
				"&:hover": { bgcolor: "borders.primary" }
			}
		}, /* @__PURE__ */ h(u, {
			sx: {
				display: "flex",
				alignItems: "center",
				gap: 1,
				flex: 1
			},
			onClick: (e) => {
				e.stopPropagation(), G(r.id);
			},
			children: [/* @__PURE__ */ m(ee, { checked: r.selected }), /* @__PURE__ */ m(oe, {
				variant: "body2",
				children: r.name
			})]
		}), a && /* @__PURE__ */ h(u, {
			sx: {
				display: "flex",
				gap: .5,
				flexShrink: 0
			},
			children: [/* @__PURE__ */ m(d, {
				size: "small",
				onClick: (e) => {
					e.stopPropagation(), e.preventDefault(), Y(r, e);
				},
				children: /* @__PURE__ */ m(t, {})
			}), /* @__PURE__ */ m(d, {
				size: "small",
				onClick: (e) => {
					e.stopPropagation(), e.preventDefault(), ge(r, e);
				},
				children: /* @__PURE__ */ m(n, {})
			})]
		}));
	}, [
		C,
		D,
		T,
		Q,
		k,
		$,
		E,
		G,
		Y,
		ge
	]), ke = o(() => {
		F && (I(!1), w(""), R(!1), B(""));
	}, [F]);
	return /* @__PURE__ */ m(re, {
		onClickAway: ke,
		children: /* @__PURE__ */ h(ie, {
			fullWidth: !0,
			children: [/* @__PURE__ */ m(r, {
				label: fe,
				className: F ? "Mui-focused" : void 0,
				sx: {
					"&.MuiInputLabel-shrink": {
						fontSize: "14px",
						lineHeight: "20px",
						top: "8px",
						left: "-12px"
					},
					"&.Mui-focused": { color: "primaryColors.accent" },
					padding: 0,
					left: "-12px",
					color: "neutral.primary"
				}
			}), /* @__PURE__ */ m(ne, {
				multiple: x,
				open: F,
				onOpen: ye,
				onClose: De,
				disabled: pe,
				options: e,
				value: x ? W : W[0] || null,
				inputValue: me,
				onInputChange: be,
				onChange: xe,
				getOptionLabel: Ce,
				isOptionEqualToValue: we,
				disableCloseOnSelect: x,
				filterOptions: Se,
				autoHighlight: !1,
				disableListWrap: !0,
				renderInput: (e) => {
					let t = W.map((e) => e.name).join(", ");
					return /* @__PURE__ */ m(f, {
						...e,
						placeholder: t || de || S("Select tags"),
						slotProps: {
							...e.slotProps,
							input: {
								...e.slotProps.input,
								startAdornment: null
							},
							htmlInput: {
								...e.slotProps.htmlInput,
								value: t || e.slotProps.htmlInput?.value || "",
								readOnly: !0
							}
						}
					});
				},
				renderValue: () => null,
				renderOption: Oe,
				popupIcon: /* @__PURE__ */ m(ue, {}),
				sx: {
					"& .MuiOutlinedInput-root": {
						bgcolor: "neutral.grey1",
						borderRadius: "8px",
						height: "36px",
						minHeight: "36px",
						border: "1px solid",
						borderColor: "borders.primary",
						"&:hover": { borderColor: "primaryColors.accent" },
						"&.Mui-focused": { borderColor: "primaryColors.accent" }
					},
					"& .MuiInputBase-root": {
						padding: "0 !important",
						paddingRight: "40px !important"
					},
					"& .MuiAutocomplete-option": {
						padding: "0 !important",
						"&[aria-selected=\"true\"]": { bgcolor: "transparent !important" },
						"&.Mui-focused": { bgcolor: "transparent !important" }
					},
					"& .MuiAutocomplete-input": {
						padding: "8px 16px !important",
						fontSize: "13px",
						lineHeight: "20px"
					},
					"& .MuiOutlinedInput-notchedOutline": { border: "none" },
					"& fieldset": { border: "none" },
					"& .MuiAutocomplete-endAdornment": { right: "16px !important" },
					"& .MuiAutocomplete-popupIndicator:hover": { backgroundColor: "transparent" }
				},
				slots: {
					paper: Ee,
					popper: a
				},
				slotProps: { listbox: { style: {
					scrollBehavior: "auto",
					maxHeight: "300px",
					overflow: "auto"
				} } }
			})]
		})
	});
};
export { _ as MultiSelectOrCreate };

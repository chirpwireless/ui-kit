import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { EditIcon as n } from "../../icons/EditIcon/index.es.js";
import { SearchIcon as r } from "../../icons/SearchIcon/index.es.js";
import { TrashIcon as i } from "../../icons/TrashIcon/index.es.js";
import { Button as a } from "../Button/Button.es.js";
import { Checkbox as o } from "../Checkbox/Checkbox.es.js";
import s from "react";
import { Box as c, ClickAwayListener as l, Paper as u, Stack as d, TextField as f, Typography as p, styled as m, useTheme as h } from "@mui/material";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
// src/components/MultiSelectOrCreate/CustomPaper.tsx
var y = m(c)(({ theme: e }) => ({
	width: "64px",
	height: "64px",
	borderRadius: "50%",
	backgroundColor: t(e).primaryColors.accent,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	margin: "0 auto 16px",
	"& svg": {
		width: "32px",
		height: "32px",
		color: e.palette.common.white
	}
})), b = s.memo(({ children: s, searchValue: m, onSearchChange: b, searchPlaceholder: x, isAddingNewTag: S, newTagValue: C, onNewTagValueChange: w, onStartAddNewTag: T, onCreateTag: E, onCancelAddNewTag: D, addNewTagPlaceholder: O, enterTagNamePlaceholder: k, newTagInputRef: A, searchInputRef: j, dropdownRef: M, deleteConfirmTag: N, onConfirmDelete: P, onCancelDelete: F, deleteTitle: I, deleteSubtitle: L, cancelText: R, confirmDeleteText: z, editConfirmTag: B, onConfirmStartEdit: V, onCancelStartEdit: H, editTitle: U, editSubtitle: W, confirmEditText: G, ...K }) => {
	let q = h(), J = t(q);
	return /* @__PURE__ */ _(u, {
		...K,
		ref: M,
		sx: {
			p: 0,
			overflow: "hidden"
		},
		children: N ? /* @__PURE__ */ v(c, {
			sx: {
				p: 3,
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ _(y, { children: /* @__PURE__ */ _(i, {}) }),
				/* @__PURE__ */ _(p, {
					variant: "h6",
					sx: { mb: 1 },
					children: I.replace("{{name}}", N.name)
				}),
				/* @__PURE__ */ _(p, {
					variant: "body2",
					color: "neutral.grey4",
					sx: { mb: 3 },
					children: L
				}),
				/* @__PURE__ */ v(d, {
					direction: "row",
					spacing: 2,
					children: [/* @__PURE__ */ _(a, {
						variant: "secondary",
						size: "medium",
						fullWidth: !0,
						onClick: F,
						children: R
					}), /* @__PURE__ */ _(a, {
						variant: "primary",
						size: "medium",
						fullWidth: !0,
						onClick: P,
						children: z
					})]
				})
			]
		}) : B ? /* @__PURE__ */ v(c, {
			sx: {
				p: 3,
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ _(y, { children: /* @__PURE__ */ _(n, {}) }),
				/* @__PURE__ */ _(p, {
					variant: "h6",
					sx: { mb: 1 },
					children: U.replace("{{name}}", B.name)
				}),
				/* @__PURE__ */ _(p, {
					variant: "body2",
					color: "neutral.grey4",
					sx: { mb: 3 },
					children: W
				}),
				/* @__PURE__ */ v(d, {
					direction: "row",
					spacing: 2,
					children: [/* @__PURE__ */ _(a, {
						variant: "secondary",
						size: "medium",
						fullWidth: !0,
						onClick: H,
						children: R
					}), /* @__PURE__ */ _(a, {
						variant: "primary",
						size: "medium",
						fullWidth: !0,
						onClick: V,
						children: G
					})]
				})
			]
		}) : /* @__PURE__ */ v(g, { children: [
			/* @__PURE__ */ v(c, {
				sx: {
					p: 1.5,
					borderBottom: "1px solid",
					borderColor: "borders.primary",
					position: "relative",
					overflow: "hidden"
				},
				children: [/* @__PURE__ */ _(c, {
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
					children: /* @__PURE__ */ _(r, { style: {
						fontSize: 20,
						color: J.neutral.primary
					} })
				}), /* @__PURE__ */ _("input", {
					ref: j,
					type: "text",
					placeholder: x,
					value: m,
					onChange: (e) => b(e.target.value),
					onClick: (e) => e.stopPropagation(),
					onMouseDown: (e) => e.stopPropagation(),
					onKeyDown: (e) => e.stopPropagation(),
					onFocus: (e) => e.stopPropagation(),
					autoComplete: "off",
					style: {
						width: "100%",
						padding: "8px 12px 8px 36px",
						border: "none",
						borderRadius: "8px",
						backgroundColor: q.palette.mode === e.Dark ? J.neutral.grey1 : J.neutral.white,
						color: J.neutral.primary,
						fontSize: "14px",
						outline: "none",
						boxSizing: "border-box"
					}
				})]
			}),
			/* @__PURE__ */ _(c, {
				sx: {
					display: "flex",
					alignItems: "center",
					gap: 1,
					px: 1,
					py: .5,
					cursor: "pointer",
					"&:hover": { bgcolor: "borders.primary" }
				},
				onMouseDown: (e) => {
					e.preventDefault(), e.stopPropagation(), S || T();
				},
				children: S ? /* @__PURE__ */ _(l, {
					onClickAway: () => {
						C.trim() ? E(C) : D();
					},
					children: /* @__PURE__ */ v(c, {
						sx: {
							px: 3,
							display: "flex",
							alignItems: "center",
							gap: 1,
							flex: 1
						},
						children: [/* @__PURE__ */ _(o, {
							checked: !1,
							disabled: !0
						}), /* @__PURE__ */ _(f, {
							inputRef: A,
							size: "small",
							fullWidth: !0,
							value: C,
							onChange: (e) => w(e.target.value),
							onKeyDown: (e) => {
								e.stopPropagation(), e.key === "Enter" && C.trim() ? (e.preventDefault(), E(C)) : e.key === "Escape" && D();
							},
							onClick: (e) => e.stopPropagation(),
							onMouseDown: (e) => e.stopPropagation(),
							onFocus: (e) => e.stopPropagation(),
							placeholder: k,
							autoFocus: !0,
							sx: {
								"& .MuiOutlinedInput-root": { bgcolor: "transparent" },
								"& .MuiOutlinedInput-notchedOutline": { border: "none" },
								"& .MuiInputBase-input": { p: 0 }
							}
						})]
					})
				}) : /* @__PURE__ */ v(c, {
					sx: {
						px: 3,
						display: "flex",
						alignItems: "center",
						gap: 1,
						flex: 1,
						cursor: "pointer"
					},
					onClick: (e) => {
						e.stopPropagation(), T();
					},
					onMouseDown: (e) => {
						e.preventDefault(), e.stopPropagation(), T();
					},
					children: [/* @__PURE__ */ _(o, {
						checked: !1,
						disabled: !0
					}), /* @__PURE__ */ _(p, {
						variant: "body2",
						color: "neutral.grey4",
						children: O
					})]
				})
			}),
			s
		] })
	});
});
b.displayName = "CustomPaper";
export { b as CustomPaper };

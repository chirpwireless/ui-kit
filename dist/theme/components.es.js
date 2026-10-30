import { CurrentTheme as e } from "../styles/constants.es.js";
// src/theme/components.ts
var t = (t) => ({
	MuiCssBaseline: { styleOverrides: {
		"html, body, #root": {
			height: "100%",
			backgroundColor: t?.mode === e.Dark ? t?.neutral?.black : t?.neutral?.grey1,
			color: t?.text?.primary,
			"& ::-webkit-scrollbar": { width: "4px" },
			"& ::-webkit-scrollbar-track": { backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.grey2 },
			"& ::-webkit-scrollbar-thumb": { backgroundColor: t?.text?.secondary },
			"& ::-webkit-scrollbar-thumb:hover": { backgroundColor: t?.text?.secondary }
		},
		body: {
			backgroundColor: t?.mode === e.Dark ? t?.neutral?.black : t?.neutral?.grey1,
			color: t?.text?.primary
		},
		a: { color: "inherit" }
	} },
	MuiButton: { styleOverrides: {
		root: {
			borderRadius: "8px",
			textTransform: "none",
			padding: "8px 16px",
			minHeight: "36px",
			boxShadow: "none",
			fontFamily: "\"Alliance No.2\", Arial, sans-serif",
			fontSize: "13px",
			lineHeight: "20px",
			fontWeight: 500,
			letterSpacing: "0.5px",
			"&:hover": { boxShadow: "none" }
		},
		containedPrimary: {
			color: t?.neutral?.white,
			backgroundColor: t?.primaryColors?.accent,
			"&:hover": { backgroundColor: t?.primaryColors?.accentHover },
			"&.Mui-disabled": {
				color: t?.text?.secondary,
				backgroundColor: t?.primaryColors?.accentLight
			}
		},
		outlined: {
			borderColor: t?.borders?.primary,
			color: t?.text?.primary,
			"&:hover": {
				borderColor: t?.primaryColors?.accent,
				backgroundColor: t?.primaryColors?.accentLight
			}
		},
		text: {
			color: t?.primaryColors?.accent,
			"&:hover": { backgroundColor: t?.primaryColors?.accentLight }
		}
	} },
	MuiSelect: { styleOverrides: { icon: {
		top: "calc(50% - 12px)",
		transition: "transform 200ms",
		color: t?.text?.secondary
	} } },
	MuiDialog: { styleOverrides: { paper: {
		borderRadius: "12px",
		backgroundImage: "none",
		minWidth: "544px",
		padding: "32px",
		backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white,
		border: `1px solid ${t?.borders?.primary ?? "transparent"}`,
		boxShadow: `0 8px 32px ${t?.shadow ?? "rgba(0,0,0,0.2)"}`
	} } },
	MuiDialogTitle: { styleOverrides: { root: {
		fontSize: "24px",
		lineHeight: "29px",
		letterSpacing: "0.3px",
		padding: 0,
		marginBottom: "12px"
	} } },
	MuiDialogContent: { styleOverrides: { root: {
		fontFamily: "\"Alliance No.2\", Arial, sans-serif",
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0.2px",
		maxWidth: "330px",
		textAlign: "center",
		padding: 0,
		marginBottom: "40px"
	} } },
	MuiDialogContentText: { styleOverrides: { root: {
		fontFamily: "\"Alliance No.2\", Arial, sans-serif",
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0.2px"
	} } },
	MuiDialogActions: { styleOverrides: { root: {
		flexDirection: "column",
		padding: 0,
		gap: "16px",
		width: "75%"
	} } },
	MuiTooltip: { styleOverrides: {
		tooltip: {
			borderRadius: "8px",
			background: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white,
			border: `1px solid ${t?.borders?.primary ?? "transparent"}`,
			padding: "8px 16px",
			fontSize: "14px",
			lineHeight: "20px",
			color: t?.text?.primary
		},
		arrow: { color: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white }
	} },
	MuiDivider: { styleOverrides: { root: { borderColor: t?.borders?.primary } } },
	MuiSnackbarContent: { styleOverrides: {
		root: {
			background: t?.primaryColors?.accent,
			borderRadius: "12px",
			color: t?.neutral?.white,
			fontFamily: "\"Alliance No.2\", Arial, sans-serif",
			fontSize: "13px",
			lineHeight: "20px",
			padding: "6px 8px 6px 20px",
			width: "100%",
			minHeight: "48px"
		},
		message: { padding: 0 },
		action: { marginRight: 0 }
	} },
	MuiAutocomplete: { defaultProps: { slotProps: { paper: { sx: {
		backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white,
		border: `1px solid ${t?.borders?.primary ?? "transparent"}`,
		boxShadow: `0 8px 32px ${t?.shadow ?? "rgba(0,0,0,0.2)"}`
	} } } } },
	MuiCard: { styleOverrides: { root: {
		backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white,
		borderRadius: "12px",
		border: `1px solid ${t?.borders?.primary ?? "transparent"}`,
		boxShadow: "none",
		backgroundImage: "none"
	} } },
	MuiTableCell: { styleOverrides: {
		root: {
			borderColor: t?.borders?.primary,
			color: t?.text?.primary,
			fontSize: "14px",
			lineHeight: "20px",
			letterSpacing: "0.2px"
		},
		head: {
			color: t?.text?.secondary,
			fontSize: "12px",
			lineHeight: "16px",
			letterSpacing: "0.4px",
			fontWeight: 400,
			backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white
		}
	} },
	MuiTableRow: { styleOverrides: { root: { "&:hover": { backgroundColor: t?.primaryColors?.accentLight } } } },
	MuiOutlinedInput: { styleOverrides: {
		root: {
			borderRadius: "8px",
			backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white,
			"& .MuiOutlinedInput-notchedOutline": { borderColor: t?.borders?.primary },
			"&:hover .MuiOutlinedInput-notchedOutline": { borderColor: t?.primaryColors?.accent },
			"&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: t?.primaryColors?.accent }
		},
		input: { color: t?.text?.primary }
	} },
	MuiPaper: { styleOverrides: { root: {
		backgroundColor: t?.mode === e.Dark ? t?.neutral?.grey1 : t?.neutral?.white,
		backgroundImage: "none"
	} } }
});
export { t as createComponents };

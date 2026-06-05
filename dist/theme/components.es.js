import { CurrentTheme as o } from "../styles/constants.es.js";
const nr = (r) => {
  var i, n, d, s, c, u, g, x, b, m, y, h, C, k, w, v, f, O, M, S, D, A, H, z, R, I, T, $, B, F, L, N, P, W, j, q, E, G, J, K, Q, U, V, X, Y, Z, _, a, l, p, e, t, rr, or;
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          height: "100%",
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (i = r == null ? void 0 : r.neutral) == null ? void 0 : i.black : (n = r == null ? void 0 : r.neutral) == null ? void 0 : n.grey1,
          color: (d = r == null ? void 0 : r.text) == null ? void 0 : d.primary,
          "& ::-webkit-scrollbar": {
            width: "4px"
          },
          "& ::-webkit-scrollbar-track": {
            backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (s = r == null ? void 0 : r.neutral) == null ? void 0 : s.grey1 : (c = r == null ? void 0 : r.neutral) == null ? void 0 : c.grey2
          },
          "& ::-webkit-scrollbar-thumb": {
            backgroundColor: (u = r == null ? void 0 : r.text) == null ? void 0 : u.secondary
          },
          "& ::-webkit-scrollbar-thumb:hover": {
            backgroundColor: (g = r == null ? void 0 : r.text) == null ? void 0 : g.secondary
          }
        },
        body: {
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (x = r == null ? void 0 : r.neutral) == null ? void 0 : x.black : (b = r == null ? void 0 : r.neutral) == null ? void 0 : b.grey1,
          color: (m = r == null ? void 0 : r.text) == null ? void 0 : m.primary
        },
        a: {
          color: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "8px 16px",
          minHeight: "36px",
          boxShadow: "none",
          fontFamily: '"Alliance No.2", Arial, sans-serif',
          fontSize: "13px",
          lineHeight: "20px",
          fontWeight: 500,
          letterSpacing: "0.5px",
          "&:hover": {
            boxShadow: "none"
          }
        },
        containedPrimary: {
          color: (y = r == null ? void 0 : r.neutral) == null ? void 0 : y.white,
          backgroundColor: (h = r == null ? void 0 : r.primaryColors) == null ? void 0 : h.accent,
          "&:hover": {
            backgroundColor: (C = r == null ? void 0 : r.primaryColors) == null ? void 0 : C.accentHover
          },
          "&.Mui-disabled": {
            color: (k = r == null ? void 0 : r.text) == null ? void 0 : k.secondary,
            backgroundColor: (w = r == null ? void 0 : r.primaryColors) == null ? void 0 : w.accentLight
          }
        },
        outlined: {
          borderColor: (v = r == null ? void 0 : r.borders) == null ? void 0 : v.primary,
          color: (f = r == null ? void 0 : r.text) == null ? void 0 : f.primary,
          "&:hover": {
            borderColor: (O = r == null ? void 0 : r.primaryColors) == null ? void 0 : O.accent,
            backgroundColor: (M = r == null ? void 0 : r.primaryColors) == null ? void 0 : M.accentLight
          }
        },
        text: {
          color: (S = r == null ? void 0 : r.primaryColors) == null ? void 0 : S.accent,
          "&:hover": {
            backgroundColor: (D = r == null ? void 0 : r.primaryColors) == null ? void 0 : D.accentLight
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          top: "calc(50% - 12px)",
          transition: "transform 200ms",
          color: (A = r == null ? void 0 : r.text) == null ? void 0 : A.secondary
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          backgroundImage: "none",
          minWidth: "544px",
          padding: "32px",
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (H = r == null ? void 0 : r.neutral) == null ? void 0 : H.grey1 : (z = r == null ? void 0 : r.neutral) == null ? void 0 : z.white,
          border: `1px solid ${((R = r == null ? void 0 : r.borders) == null ? void 0 : R.primary) ?? "transparent"}`,
          boxShadow: `0 8px 32px ${(r == null ? void 0 : r.shadow) ?? "rgba(0,0,0,0.2)"}`
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          lineHeight: "29px",
          letterSpacing: "0.3px",
          padding: 0,
          marginBottom: "12px"
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontFamily: '"Alliance No.2", Arial, sans-serif',
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.2px",
          maxWidth: "330px",
          textAlign: "center",
          padding: 0,
          marginBottom: "40px"
        }
      }
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontFamily: '"Alliance No.2", Arial, sans-serif',
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.2px"
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          flexDirection: "column",
          padding: 0,
          gap: "16px",
          width: "75%"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "8px",
          background: (r == null ? void 0 : r.mode) === o.Dark ? (I = r == null ? void 0 : r.neutral) == null ? void 0 : I.grey1 : (T = r == null ? void 0 : r.neutral) == null ? void 0 : T.white,
          border: `1px solid ${(($ = r == null ? void 0 : r.borders) == null ? void 0 : $.primary) ?? "transparent"}`,
          padding: "8px 16px",
          fontSize: "14px",
          lineHeight: "20px",
          color: (B = r == null ? void 0 : r.text) == null ? void 0 : B.primary
        },
        arrow: {
          color: (r == null ? void 0 : r.mode) === o.Dark ? (F = r == null ? void 0 : r.neutral) == null ? void 0 : F.grey1 : (L = r == null ? void 0 : r.neutral) == null ? void 0 : L.white
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: (N = r == null ? void 0 : r.borders) == null ? void 0 : N.primary
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          background: (P = r == null ? void 0 : r.primaryColors) == null ? void 0 : P.accent,
          borderRadius: "12px",
          color: (W = r == null ? void 0 : r.neutral) == null ? void 0 : W.white,
          fontFamily: '"Alliance No.2", Arial, sans-serif',
          fontSize: "13px",
          lineHeight: "20px",
          padding: "6px 8px 6px 20px",
          width: "100%",
          minHeight: "48px"
        },
        message: {
          padding: 0
        },
        action: {
          marginRight: 0
        }
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        slotProps: {
          paper: {
            sx: {
              backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (j = r == null ? void 0 : r.neutral) == null ? void 0 : j.grey1 : (q = r == null ? void 0 : r.neutral) == null ? void 0 : q.white,
              border: `1px solid ${((E = r == null ? void 0 : r.borders) == null ? void 0 : E.primary) ?? "transparent"}`,
              boxShadow: `0 8px 32px ${(r == null ? void 0 : r.shadow) ?? "rgba(0,0,0,0.2)"}`
            }
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (G = r == null ? void 0 : r.neutral) == null ? void 0 : G.grey1 : (J = r == null ? void 0 : r.neutral) == null ? void 0 : J.white,
          borderRadius: "12px",
          border: `1px solid ${((K = r == null ? void 0 : r.borders) == null ? void 0 : K.primary) ?? "transparent"}`,
          boxShadow: "none",
          backgroundImage: "none"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: (Q = r == null ? void 0 : r.borders) == null ? void 0 : Q.primary,
          color: (U = r == null ? void 0 : r.text) == null ? void 0 : U.primary,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.2px"
        },
        head: {
          color: (V = r == null ? void 0 : r.text) == null ? void 0 : V.secondary,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.4px",
          fontWeight: 400,
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (X = r == null ? void 0 : r.neutral) == null ? void 0 : X.grey1 : (Y = r == null ? void 0 : r.neutral) == null ? void 0 : Y.white
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: (Z = r == null ? void 0 : r.primaryColors) == null ? void 0 : Z.accentLight
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (_ = r == null ? void 0 : r.neutral) == null ? void 0 : _.grey1 : (a = r == null ? void 0 : r.neutral) == null ? void 0 : a.white,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: (l = r == null ? void 0 : r.borders) == null ? void 0 : l.primary
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: (p = r == null ? void 0 : r.primaryColors) == null ? void 0 : p.accent
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: (e = r == null ? void 0 : r.primaryColors) == null ? void 0 : e.accent
          }
        },
        input: {
          color: (t = r == null ? void 0 : r.text) == null ? void 0 : t.primary
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: (r == null ? void 0 : r.mode) === o.Dark ? (rr = r == null ? void 0 : r.neutral) == null ? void 0 : rr.grey1 : (or = r == null ? void 0 : r.neutral) == null ? void 0 : or.white,
          backgroundImage: "none"
        }
      }
    }
  };
};
export {
  nr as createComponents
};

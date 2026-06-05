import { styled as r, ListItem as t, Accordion as i, AccordionSummary as e, AccordionActions as n } from "@mui/material";
const d = r(t)(({ theme: o }) => ({
  padding: "8px 12px",
  width: "100%",
  height: "56px",
  borderBottom: "1px solid",
  borderColor: o.palette.border.border3,
  position: "relative",
  alignItems: "flex-start",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: o.palette.background.background7,
    borderRadius: "8px",
    ".MuiTypography-body1": {
      color: o.palette.base.color6
    }
  },
  ".MuiListItemSecondaryAction-root": {
    position: "relative",
    top: "auto",
    right: "auto",
    transform: "none",
    height: "100%"
  }
})), c = r(t)(({ theme: o }) => ({
  width: "100%",
  borderBottom: "1px solid",
  padding: 0,
  borderColor: o.palette.border.border3,
  position: "relative",
  alignItems: "flex-start",
  justifyContent: "space-between",
  ".MuiAccordionActions-root": {
    svg: {
      color: o.palette.text.text8
    }
  },
  "&:hover": {
    ".MuiTypography-body1.title": {
      color: o.palette.base.color6
    },
    ".accordion-summary-wrapper, .MuiCollapse-root": {
      borderRadius: "8px",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      backgroundColor: o.palette.background.background7
    }
  }
  // '.MuiListItemSecondaryAction-root': {
  //     position: 'relative',
  //     top: 'auto',
  //     right: 'auto',
  //     transform: 'none',
  //     height: '100%',
  // },
})), s = r(i)(() => ({
  width: "100%",
  border: "none",
  backgroundColor: "transparent",
  position: "relative",
  boxShadow: "none",
  margin: 0,
  ".accordion-summary-wrapper": {
    height: "56px",
    borderRadius: "8px",
    padding: "8px 12px"
  },
  ".MuiCollapse-root": {
    marginTop: "4px"
  }
})), p = r(e)(() => ({
  width: "100%",
  position: "relative",
  minHeight: "auto",
  borderRadius: "8px",
  padding: 0,
  ".content-container": {
    order: 0
  },
  "&.Mui-expanded": {
    minHeight: "auto"
  },
  ".MuiAccordionSummary-content": {
    margin: 0,
    alignItems: "center"
  }
})), l = r(n)(() => ({
  padding: 0
}));
export {
  s as Accordion,
  l as AccordionActions,
  c as AccordionListItem,
  p as AccordionSummary,
  d as ListItem
};

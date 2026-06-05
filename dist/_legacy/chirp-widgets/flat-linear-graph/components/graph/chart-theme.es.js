const o = ["#FF4D1499", "#5014FF99"], i = [
  {
    id: "fillGradient",
    type: "linearGradient",
    colors: [
      { offset: 0, color: "inherit", opacity: 0.1 },
      { offset: 100, color: "inherit", opacity: 0 }
    ]
  },
  {
    id: "transparent",
    type: "linearGradient",
    colors: [
      { offset: 0, color: "inherit", opacity: 0 },
      { offset: 100, color: "inherit", opacity: 0 }
    ]
  },
  {
    id: "lines-pattern",
    type: "patternLines",
    spacing: 5,
    rotation: 100,
    lineWidth: 1,
    background: "transparent",
    color: "#FF4D1426"
  }
], r = (t) => ({
  crosshair: {
    line: {
      stroke: "#EBEBEB",
      strokeDasharray: "3 3",
      strokeOpacity: 1
    }
  },
  tooltip: {
    table: {
      marginTop: 0,
      padding: 0
    },
    tableCell: {
      padding: 0
    },
    container: {
      background: t.palette.background.background1,
      borderRadius: 8,
      border: `1px solid ${t.palette.border.border3}`,
      padding: "6px 12px 4px 12px"
    }
  },
  axis: {
    ticks: {
      text: {
        fill: t.palette.text.text8,
        //  8px as was set in Figma is too small
        fontSize: t.typography.caption8.fontSize,
        fontFamily: t.typography.caption8.fontFamily,
        fontWeight: t.typography.caption8.fontWeight,
        color: t.palette.text.titleInput,
        shapeRendering: "crispEdges"
        // textShadow: `${theme.palette.darkShades.primary} 0 0 5px`,
      }
    }
  }
});
export {
  o as DEFAULT_COLORS,
  i as DEFAULT_DEFS,
  r as createFlatChartTheme
};

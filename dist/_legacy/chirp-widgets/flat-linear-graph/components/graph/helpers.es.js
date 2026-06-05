const e = (t, a, n) => [
  {
    id: `flat-lines-pattern-${t}`,
    type: "patternLines",
    spacing: 6,
    rotation: 108,
    lineWidth: 1,
    background: "transparent",
    color: t
  },
  {
    id: "flat-lines-pattern-min",
    type: "patternLines",
    spacing: 6,
    rotation: 108,
    lineWidth: 1,
    background: "transparent",
    color: n.additionalColors.blue
  },
  {
    id: "flat-lines-pattern-max",
    type: "patternLines",
    spacing: 6,
    rotation: 108,
    lineWidth: 1,
    background: "transparent",
    color: "#FFA825"
  },
  {
    id: "flat-lines-pattern-range",
    type: "patternLines",
    spacing: 6,
    rotation: 108,
    lineWidth: 1,
    background: "transparent",
    color: n.additionalColors.mutedGreen
  },
  {
    id: "flat-area-gradient-shadow",
    type: "linearGradient",
    colors: [
      { offset: 0, color: a, opacity: 0 },
      { offset: 100, color: a, opacity: 1 }
    ]
  },
  {
    id: `flat-area-gradient-${t}`,
    type: "linearGradient",
    colors: [
      { offset: 0, color: t, opacity: 0.2 },
      { offset: 100, color: t, opacity: 0 }
    ]
  }
];
export {
  e as getFlatChartDefs
};

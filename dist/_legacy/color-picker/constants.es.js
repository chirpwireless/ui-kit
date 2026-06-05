const F = [
  "#FF1101",
  "#FF7F01",
  "#F7EB01",
  "#04FF21",
  "#0FF7FF",
  "#1F04FF",
  "#FF01DA",
  "#FFFFFF",
  "#000000"
], E = new RegExp(/^#[0-9A-Fa-f]{6}[0-9a-fA-F]{0,2}$/i);
export {
  E as HEX_REGEXP,
  F as INITIAL_PREVIOUS_COLORS
};

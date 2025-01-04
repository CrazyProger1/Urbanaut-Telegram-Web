export type ColorName = "gray" | "purple" | "yellow" | "red" | "green"
export type HEX = `#${string}`;
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type Color = HEX | RGB | RGBA | ColorName;
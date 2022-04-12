export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  grey300: "#EAEAEA",
  grey400: "#ababab",
  grey500: "#4d4949",
  red600: "#cc0000",
} as const;

export type ColorKeys = keyof typeof colors;

export const shadows = {
  dropShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
};

export const device = {
  miniPhone: 350,
  phone: 650,
  tabletPortrait: 900,
  tabletLandscape: 1250,
  smallNotebook: 1400,
  largeNotebook: 1920,
  monitor: 1921,
};

export const breakpoint = {
  miniPhone: `@media (max-width: ${device.miniPhone}px)`,
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px) `,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px) `,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px) `,
};

import { tokens } from './tokens'

export const themes = {
  dark: {
    blue: tokens.color.blue,
    blueOpacity: tokens.color.blueOpacity,
    textColor: tokens.color.textDark,
    background: tokens.color.backgroundDark,

    contrast: tokens.color.contrastDark,
    accent: tokens.color.accentDark,
    buttonColor: tokens.color.white,
  },
  light: {
    blue: tokens.color.blue,
    blueOpacity: tokens.color.blueOpacity,
    textColor: tokens.color.textLight,
    background: tokens.color.backgroundLight,

    contrast: tokens.color.contrastLight,
    accent: tokens.color.accentLight,
    buttonColor: tokens.color.white,
  },
}

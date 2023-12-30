import { tokens } from './tokens'

const light = {
  primary: tokens.color.blue,
  primaryAlpha10: tokens.color.blueAlpha10,
  primaryAlpha20: tokens.color.blueAlpha20,
  background: tokens.color.background_light,
  transparent: tokens.color.transparent_light,
  accent: tokens.color.accent_light,
  textPrimary: tokens.color.textPrimary_light,
  border: tokens.color.border_light,
  danger: tokens.color.danger,
  success: tokens.color.success,
}

type BaseTheme = typeof light

const dark: BaseTheme = {
  primary: tokens.color.blue,
  primaryAlpha10: tokens.color.blueAlpha10,
  primaryAlpha20: tokens.color.blueAlpha20,
  background: tokens.color.background_dark,
  transparent: tokens.color.transparent_dark,
  accent: tokens.color.accent_dark,
  border: tokens.color.border_dark,
  textPrimary: tokens.color.textPrimary_dark,
  danger: tokens.color.danger,
  success: tokens.color.success,
}

export const themes = {
  dark,
  light,
}

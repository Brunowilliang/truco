import { createTokens } from 'tamagui'

export const tokens = createTokens({
  color: {
    // Light
    background_light: '#F3F6F8',
    accent_light: '#FFFFFF',
    textPrimary_light: '#717997',
    border_light: '#BBC4BA',
    transparent_light: 'rgba(255, 255, 255, 0.0)',

    // Dark
    background_dark: '#0E0F0E',
    accent_dark: '#1B1C1B',
    textPrimary_dark: '#969CB2',
    border_dark: '#3B403C',
    transparent_dark: 'rgba(0, 0, 0, 0.0)',

    // Primary's
    blue: '#2666DE',
    blueAlpha10: 'rgba(38, 102, 222, 0.10)',
    blueAlpha20: 'rgba(38, 102, 222, 0.20)',

    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.70)',
    transparent: 'transparent',
    success: '#12a454',
    successOpacity: 'rgba(18, 164, 84, 0.4)',
    danger: '#e83f5b',
    dangerOpacity: 'rgba(232, 63, 91, 0.4)',
  },
  space: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 20,
    full: '100%',
    true: 8,
  },
  size: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 14,
    xl: 20,
    full: '100%',
    true: 8,
  },
  radius: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 14,
    xl: 20,
    full: '100%',
  },
  zIndex: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 14,
    xl: 20,
  },
})

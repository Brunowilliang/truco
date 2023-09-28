import { createTokens } from 'tamagui'

export const tokens = createTokens({
  color: {
    // background
    backgroundDark: '#171719', // dark
    backgroundLight: '#FFFFFF', // light

    // text
    textDark: '#969CB2', // dark
    textLight: '#717997', // light

    // contrast
    contrastDark: '#23232B', // dark
    contrastLight: '#E6E5EF', // light

    // accent
    accentDark: '#434343', // dark
    accentLight: '#B0B0B0', // light

    // shared
    blue: '#2666DE',
    blueOpacity: 'rgba(38, 102, 222, 0.50)',
    white: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.50)',
    transparent: 'transparent',
    success: '#12a454',
    successOpacity: 'rgba(18, 164, 84, 0.5)',
    danger: '#e83f5b',
    dangerOpacity: 'rgba(232, 63, 91, 0.5)',
  },
  space: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    true: 8,
  },
  size: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    true: 8,
  },
  radius: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
  },
  zIndex: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
  },
})

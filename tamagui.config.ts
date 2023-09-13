import { createAnimations } from '@tamagui/animations-react-native'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui } from 'tamagui'

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'timing',
    duration: 100,
    damping: 0,
    mass: 0.9,
    stiffness: 0,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const regular = createFont({
  family: 'MontserratRegular',
  size: {
    h1: 36,
    h2: 24,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
  },
})

const medium = createFont({
  family: 'MontserratMedium',
  size: {
    h1: 36,
    h2: 24,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
  },
})

const semibold = createFont({
  family: 'MontserratSemiBold',
  size: {
    h1: 36,
    h2: 24,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
  },
})

const bold = createFont({
  family: 'MontserratBold',
  size: {
    h1: 36,
    h2: 24,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
  },
})

const config = createTamagui({
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: medium,
    body: regular,
    regular,
    medium,
    semibold,
    bold,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

export type AppConfig = typeof config

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {} // eslint-disable-line @typescript-eslint/no-empty-interface
}

export default config

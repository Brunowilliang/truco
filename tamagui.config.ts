import { createTamagui } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@/theme/tokens'
import { fonts } from '@/theme/fonts'
import { animations } from '@/theme/animations'
import { themes } from '@/theme/theme'

const tamaguiConfig = createTamagui({
  animations,
  defaultTheme: 'dark',
  shorthands,
  fonts,
  tokens,
  themes,
})

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig

import { colors } from '@/styles/theme'
import { Button as TButton, styled } from 'tamagui'

export const Button = styled(TButton, {
  size: 60,
  fontFamily: '$semibold',
  fontSize: '$h3',
  animation: 'lazy',
  borderWidth: 0,
  bg: colors.primary,
  color: colors.white,
  pressStyle: {
    scale: 0.98,
    bg: colors.primaryOpacity,
  },
})

import { colors } from '@/styles/theme'
import { Text as TText, styled } from 'tamagui'

export const Text = styled(TText, {
  fontFamily: '$medium',
  fontSize: '$h4',
  color: colors.gray,
})

import { colors } from '@/styles/theme'
import { Separator as TSeparator, styled } from 'tamagui'

export const Separator = styled(TSeparator, {
  vertical: true,
  borderColor: colors.secondary,
})

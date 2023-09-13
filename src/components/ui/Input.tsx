import { colors } from '@/styles/theme'
import { Input as TInput, styled } from 'tamagui'

export const Input = styled(TInput, {
  px: 0,
  py: 0,
  height: 55,
  multiline: false,
  maxLength: 15,
  textAlignVertical: 'center',
  verticalAlign: 'middle',
  fontFamily: '$medium',
  fontSize: '$h4',
  borderColor: colors.secondary,
  borderRadius: 8,
  borderWidth: 0.5,
  color: colors.gray,
  placeholderTextColor: colors.gray,
  bg: colors.secondary,
  focusStyle: {
    borderWidth: 0.5,
    borderColor: colors.gray,
  },
})

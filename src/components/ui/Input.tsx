import { Input as TInput, styled } from 'tamagui'

// @ts-ignore
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
  borderColor: '$transparent',
  borderRadius: 8,
  borderWidth: 1,
  color: '$textPrimary',
  placeholderTextColor: '$border',
  bg: '$accent',
  focusStyle: {
    borderWidth: 1,
    borderColor: '$textPrimary',
  },
})

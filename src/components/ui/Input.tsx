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
  borderColor: '$contrast',
  borderRadius: 8,
  borderWidth: 0.5,
  color: '$textColor',
  placeholderTextColor: '$textColor',
  bg: '$contrast',
  focusStyle: {
    borderWidth: 0.5,
    borderColor: '$textColor',
  },
})

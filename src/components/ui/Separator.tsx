import { Separator as TSeparator, styled } from 'tamagui'

// @ts-ignore
export const Separator = styled(TSeparator, {
  variants: {
    horizontal: {
      true: {
        vertical: false,
        borderWidth: 0.5,
        borderColor: '$border',
        opacity: 0.5,
      },
    },
    vertical: {
      true: {
        vertical: true,
        borderWidth: 0.5,
        borderColor: '$border',
        opacity: 0.8,
      },
    },
  },
})

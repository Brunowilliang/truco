import { Separator as TSeparator, styled } from 'tamagui'

// @ts-ignore
export const Separator = styled(TSeparator, {
  variants: {
    horizontal: {
      true: {
        vertical: false,
        borderWidth: 0.8,
        borderColor: '$accent',
        opacity: 0.5,
      },
    },
    vertical: {
      true: {
        vertical: true,
        borderWidth: 0.8,
        borderColor: '$contrast',
        opacity: 0.8,
      },
    },
  },
})

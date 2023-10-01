import { Stack, styled } from 'tamagui'

// @ts-ignore
export const IconButton = styled(Stack, {
  name: 'Button',
  height: 50,
  width: 50,
  borderRadius: 10,
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'lazy',
  bg: '$transparent',
  pressStyle: {
    scale: 0.98,
    opacity: 0.5,
  },

  variants: {
    secondary: {
      true: {
        bg: '$contrast',
        pressStyle: {
          bg: '$contrast',
          opacity: 0.8,
        },
      },
    },
    left: {
      true: {
        alignItems: 'flex-start',
      },
    },
    right: {
      true: {
        alignItems: 'flex-end',
      },
    },
  } as const,
})

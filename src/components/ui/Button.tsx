import { Button as TButton, styled } from 'tamagui'

// @ts-ignore
export const Button = styled(TButton, {
  size: 60,
  fontFamily: '$semibold',
  fontSize: '$h3',
  animation: 'lazy',
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  bg: '$blue',
  color: '$buttonColor',
  pressStyle: {
    scale: 0.98,
    opacity: 0.8,
  },

  variants: {
    secondary: {
      true: {
        bg: '$contrast',
        color: '$textColor',
        pressStyle: {
          bg: '$contrast',
          opacity: 0.8,
        },
      },
    },
    noScale: {
      true: {
        pressStyle: {
          scale: 1,
        },
      },
    },
  },
})

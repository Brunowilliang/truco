import {
  Stack,
  Text,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

export const ButtonContext = createStyledContext({})

// @ts-ignore
export const ButtonFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  height: 60,
  width: '100%',
  borderRadius: 10,
  animation: 'lazy',
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  bg: '$primary',
  pressStyle: {
    scale: 0.98,
    opacity: 0.8,
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
    noScale: {
      true: {
        pressStyle: {
          scale: 1,
        },
      },
    },
  },
})

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  fontFamily: '$semibold',
  fontSize: '$h3',
  color: '$accent',
})

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
})

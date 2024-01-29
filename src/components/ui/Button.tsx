import {
  Stack,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'
import { Text } from './Text'

export const ButtonContext = createStyledContext({
  variant: 'primary' as 'primary' | 'secondary' | 'danger',
})

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
    variant: {
      primary: {
        bg: '$primary',
      },
      secondary: {
        bg: '$background',
      },
      danger: {
        bg: '$danger',
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
  semibold: true,
  color: '$accent',

  variants: {
    variant: {
      primary: {
        color: '$accent',
      },
      secondary: {
        color: '$textPrimary',
      },
      danger: {
        color: '$accent',
      },
    },
  },
})

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
})

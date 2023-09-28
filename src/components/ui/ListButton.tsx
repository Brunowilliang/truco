import {
  Stack,
  Text,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

export const ButtonContext = createStyledContext({})

// @ts-ignore
export const ListFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  width: '100%',
  animation: 'lazy',
  flexDirection: 'row',
  gap: 10,
  alignItems: 'center',
  padding: 20,
  borderRadius: 0,
  justifyContent: 'flex-start',
  bg: '$contrast',
  pressStyle: {
    opacity: 0.8,
  },

  variants: {
    first: {
      true: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
    },
    last: {
      true: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      },
    },
  },
})

// @ts-ignore
export const ListText = styled(Text, {
  name: 'Text',
  context: ButtonContext,
  flex: 1,
  fontFamily: '$medium',
  fontSize: '$h4',
  color: '$textColor',
})

export const ListButton = withStaticProperties(ListFrame, {
  Props: ButtonContext.Provider,
  Text: ListText,
})

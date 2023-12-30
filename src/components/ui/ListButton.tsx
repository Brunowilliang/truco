import {
  Stack,
  Text,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'
import Icon, { IconProps } from './Icon'
import ExpoIcon, { ExpoIconProps, IconLibraryNames } from './ExpoIcon'

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
  bg: '$accent',
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
  color: '$textPrimary',
})

const IconFrame = ({ name, size, weight, ...props }: IconProps) => {
  // const { variant } = useContext(IconButtonContext.context)
  return (
    <Icon
      name={name}
      color={'$textPrimary'}
      size={size || 20}
      weight={weight || 'Linear'}
      {...props}
    />
  )
}

const ExpoIconFrame = ({
  size,
  color,
  ...props
}: ExpoIconProps<IconLibraryNames>) => {
  return (
    <ExpoIcon color={color || '$textPrimary'} size={size || 20} {...props} />
  )
}

export const ListButton = withStaticProperties(ListFrame, {
  Props: ButtonContext.Provider,
  Text: ListText,
  Icon: IconFrame,
  ExpoIcon: ExpoIconFrame,
})

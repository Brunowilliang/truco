import { createStyledContext, styled, withStaticProperties } from 'tamagui'
import Icon, { IconProps } from './Icon'
import { HStack } from './Stacks'
import ExpoIcon, { ExpoIconProps, IconLibraryNames } from './ExpoIcon'

export const IconButtonContext = createStyledContext({
  variant: 'light' as 'solid' | 'bordered' | 'light' | 'flat' | 'inverted',
})

// @ts-ignore
export const ButtonFrame = styled(HStack, {
  name: 'Button',
  context: IconButtonContext,
  width: 56,
  height: 56,
  borderRadius: '$lg',
  borderCurve: 'continuous',
  alignItems: 'center',
  justifyContent: 'center',
  pressable: true,
  backgroundColor: '$transparent',

  variants: {
    variant: {
      solid: {
        bg: '$primary',
      },
      bordered: {
        bg: '$transparent',
        borderWidth: 2,
        borderColor: '$primary',
      },
      light: {
        bg: '$transparent',
      },
      flat: {
        bg: '$primaryAlpha20',
        borderWidth: 0,
      },
      inverted: {
        bg: '$accent',
      },
    },
  } as const,
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

export const IconButton = withStaticProperties(ButtonFrame, {
  Props: IconButtonContext.Provider,
  Icon: IconFrame,
  ExpoIcon: ExpoIconFrame,
})

import React, { forwardRef } from 'react'
import * as ExpoIcons from '@expo/vector-icons'
import { ThemeTokens, styled } from 'tamagui'
import { RFValue } from 'react-native-responsive-fontsize'

export type IconLibraryNames = keyof typeof ExpoIcons
type IconName<T extends IconLibraryNames> = T extends IconLibraryNames
  ? keyof (typeof ExpoIcons)[T]['glyphMap']
  : never

export interface ExpoIconProps<T extends IconLibraryNames> {
  library: T
  name: IconName<T>
  size?: number
  color?: ThemeTokens
}

// Uso de forwardRef para permitir a passagem de refs ao componente
const ExpoIcon = forwardRef<
  React.ElementRef<any>,
  ExpoIconProps<IconLibraryNames>
>(({ library, name, size = 16, color }, ref) => {
  const IconComponent = ExpoIcons[library] as React.ComponentType<any>

  // Verificar se a biblioteca de ícones existe
  if (!IconComponent) {
    console.warn(`Icon library "${library}" not found.`)
    return null
  }

  // @ts-ignore
  const Icon = styled(IconComponent, {})

  return <Icon ref={ref} name={name} size={RFValue(size)} color={color} />
})

ExpoIcon.displayName = 'Icon'

export default ExpoIcon

// exemple phospor icons

// import React from 'react'
// import { useTheme, ThemeTokens } from 'tamagui'
// import { View } from 'react-native'
// import { IconProps as PhosphorIconProps } from 'phosphor-react-native'

// // Importe os ícones
// import Star from 'phosphor-react-native/src/icons/Star'
// import Heart from 'phosphor-react-native/src/icons/Heart'
// import CircleHalf from 'phosphor-react-native/src/icons/CircleHalf'
// import CaretDown from 'phosphor-react-native/src/icons/CaretDown'
// import CaretLeft from 'phosphor-react-native/src/icons/CaretLeft'
// import CaretRight from 'phosphor-react-native/src/icons/CaretRight'
// import User from 'phosphor-react-native/src/icons/User'
// import Lightbulb from 'phosphor-react-native/src/icons/Lightbulb'
// import Info from 'phosphor-react-native/src/icons/Info'
// import Lock from 'phosphor-react-native/src/icons/Lock'
// import Password from 'phosphor-react-native/src/icons/Password'
// import Check from 'phosphor-react-native/src/icons/Check'
// import CurrencyEur from 'phosphor-react-native/src/icons/CurrencyEur'
// import SignIn from 'phosphor-react-native/src/icons/SignIn'
// import SignOut from 'phosphor-react-native/src/icons/SignOut'
// import Eye from 'phosphor-react-native/src/icons/Eye'
// import EyeSlash from 'phosphor-react-native/src/icons/EyeSlash'
// import At from 'phosphor-react-native/src/icons/At'

// const iconMap = {
//   Star,
//   Heart,
//   CircleHalf,
//   CaretDown,
//   CaretLeft,
//   CaretRight,
//   User,
//   Lightbulb,
//   Info,
//   Lock,
//   Password,
//   Check,
//   CurrencyEur,
//   SignIn,
//   SignOut,
//   Eye,
//   EyeSlash,
//   At,
// }

// type IconName = keyof typeof iconMap

// export interface IconProps extends PhosphorIconProps {
//   name: IconName
//   fill?: ThemeTokens
// }

// const Icon = React.forwardRef<View, IconProps>(
//   ({ name, fill, ...props }, ref) => {
//     const IconComponent = iconMap[name]
//     const theme = useTheme()

//     const resolvedColor = fill
//       ? theme[fill as keyof typeof theme]?.val
//       : undefined

//     if (!IconComponent) {
//       console.warn(`Icon ${name} não encontrado`)
//       return null
//     }

//     const iconProps = fill ? { ...props, color: resolvedColor } : props

//     return (
//       <View ref={ref}>
//         <IconComponent {...iconProps} />
//       </View>
//     )
//   },
// )

// export default Icon

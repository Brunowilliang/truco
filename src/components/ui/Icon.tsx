import React, { forwardRef } from 'react'
import { SvgProps } from 'react-native-svg'
import * as Icons from 'iconsax-react-native'
import { ThemeTokens, styled } from 'tamagui'
import { RFValue } from 'react-native-responsive-fontsize'

export interface IconProps extends SvgProps {
  name: keyof typeof Icons
  weight?: 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone'
  color?: ThemeTokens
  size?: string | number
}

const DynamicIcon = forwardRef<
  React.ElementRef<(typeof Icons)[keyof typeof Icons]>,
  IconProps
>(({ name, weight, size, ...props }, ref) => {
  const IconComponent = Icons[name]
  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent
      ref={ref}
      size={RFValue(Number(size))}
      variant={weight}
      {...props}
    />
  )
})

// @ts-ignore
const Icon = styled(DynamicIcon, {})

export default Icon

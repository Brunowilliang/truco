import { RFValue } from 'react-native-responsive-fontsize'
import { createFont } from 'tamagui'

const sizes = {
  h1: RFValue(20),
  h2: RFValue(18),
  h3: RFValue(16),
  h4: RFValue(14),
  h5: RFValue(13),
  h6: RFValue(11),
}

export const regular = createFont({
  family: 'MontserratRegular',
  size: sizes,
})

export const medium = createFont({
  family: 'MontserratMedium',
  size: sizes,
})

export const semibold = createFont({
  family: 'MontserratSemiBold',
  size: sizes,
})

export const bold = createFont({
  family: 'MontserratBold',
  size: sizes,
})

export const fonts = {
  heading: regular,
  body: regular,
  regular,
  medium,
  semibold,
  bold,
}

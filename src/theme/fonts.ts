import { createFont } from 'tamagui'

const sizes = {
  h1: 36,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
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

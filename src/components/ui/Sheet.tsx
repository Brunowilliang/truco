import { Stack, styled } from '@tamagui/core'
import { createSheet } from '@tamagui/sheet'

// @ts-ignore
const Handle = styled(Stack, {
  bg: '$accent',
  h: 5,
  w: 80,
  alignSelf: 'center',
  my: 15,
  borderRadius: 5,
})

const Overlay = styled(Stack, {
  bg: '$overlay',
  position: 'absolute',
  w: '100%',
  h: '100%',
  animation: 'modal',
  enterStyle: { opacity: 1 },
  exitStyle: { opacity: 0 },
})

// @ts-ignore
const Frame = styled(Stack, {
  bg: '$background',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
})

export const Sheet = createSheet({
  Frame,
  Handle,
  Overlay,
})

import { createAnimations } from '@tamagui/animations-moti'

export const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'timing',
    duration: 100,
    damping: 0,
    mass: 0.9,
    stiffness: 0,
  },
  typing: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  modal: {
    type: 'timing',
    duration: 300,
    damping: 0,
    mass: 0.9,
    stiffness: 0,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

import { styled, Stack as Box, XStack } from 'tamagui'
import { Keyboard } from 'react-native'
import Animated from 'react-native-reanimated'

const styles = {
	borderCurve: 'continuous',
	animation: 'lazy',
}

const variants = {
	centered: {
		true: {
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	pressable: {
		true: {
			pressStyle: {
				scale: 0.99,
				opacity: 0.8,
			},
		},
	},
} as const

// @ts-ignore
export const Stack = styled(Box, {
	...styles,
	variants,
})

// @ts-ignore
export const HStack = styled(XStack, {
	...styles,
	variants,
})

export const AnimatedStack = Animated.createAnimatedComponent(Stack)
export const AnimatedHStack = Animated.createAnimatedComponent(HStack)

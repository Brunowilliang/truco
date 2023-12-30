import React, { forwardRef } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatedStack } from './Stacks'
import { useTheme } from 'tamagui'

interface CustomBackdropProps {
  animatedIndex: Animated.SharedValue<number>
  onPress: () => void
}

const CustomBackdrop: React.FC<CustomBackdropProps> = ({
  animatedIndex,
  onPress,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [-1, 0, 1],
      [0, 1, 1],
      Extrapolate.CLAMP,
    )

    return {
      opacity,
    }
  })

  return (
    <AnimatedStack
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={'$overlay'}
      style={[animatedStyle]}
      onPress={onPress}
    />
  )
}

export type ModalRef = BottomSheetModal

interface ModalProps extends BottomSheetModalProps {
  children: React.ReactNode
}

const Modal = forwardRef<BottomSheetModal, ModalProps>(
  ({ children, ...props }, ref) => {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()
    // const snapPoints = useMemo(() => ['50%', '100%'], [])

    const handleClose = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.close()
      }
    }

    return (
      <BottomSheetModal
        topInset={top + 10}
        ref={ref}
        index={0}
        backdropComponent={(backdropProps) => (
          <CustomBackdrop {...backdropProps} onPress={handleClose} />
        )}
        handleIndicatorStyle={{
          backgroundColor: theme.border.val,
        }}
        backgroundStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderCurve: 'continuous',
          backgroundColor: theme.background.val,
        }}
        {...props}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    )
  },
)

export default Modal

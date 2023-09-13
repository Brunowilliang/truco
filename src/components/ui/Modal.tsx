import React, {
  useMemo,
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
} from 'react'
import { StyleSheet } from 'react-native'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '@/styles/theme'
import { Text } from './Text'
import { Stack, XStack } from 'tamagui'

interface CustomBackdropProps {
  animatedIndex: Animated.SharedValue<number>
}

const CustomBackdrop: React.FC<CustomBackdropProps> = ({ animatedIndex }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [-1, 0, 1],
      [0, 0.5, 0.8],
      Extrapolate.CLAMP,
    )

    return {
      opacity,
    }
  })

  return <Animated.View style={[styles.backdrop, animatedStyle]} />
}

export interface ModalProps {
  open: () => void
  close: () => void
}

interface ModalTesteProps {
  children?: ReactNode
  title?: string
  leftComponent?: ReactNode
  rightComponent?: ReactNode
  snapPoints?: string[];
}

const Modal = forwardRef<ModalProps, ModalTesteProps>(
  (props, ref) => {
    const { top, bottom } = useSafeAreaInsets()
    const bottomSheetModalRef = useRef<BottomSheetModal | null>(null)

    // expose methods to parent components
    useImperativeHandle(ref, () => ({
      open: () => {
        bottomSheetModalRef.current?.present()
      },
      close: () => {
        bottomSheetModalRef.current?.dismiss()
      },
    }))

    const calculatedSnapPoints = useMemo(() => {
      return props.snapPoints || ['70%', '100%'];
    }, [props.snapPoints]);


    // renders
    return (
      <BottomSheetModal
        topInset={top + 10}
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={calculatedSnapPoints}
        backdropComponent={CustomBackdrop}
        handleIndicatorStyle={{
          backgroundColor: colors.gray,
          width: 40,
        }}
        backgroundStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: colors.background,
        }}
      >
        <BottomSheetScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: bottom + 40,
          }}
        >
          <XStack
            display={props.title ? 'flex' : 'none'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bg={colors.background}
            py={20}
            px={20}
          >
            <Stack w={'20%'} alignItems={'flex-start'}>
              {props.leftComponent}
            </Stack>
            <Text textAlign={'center'} fontSize={'$h3'} fontFamily={'$semibold'}>
              {props.title}
            </Text>
            <Stack w={'20%'} alignItems={'flex-end'}>
              {props.rightComponent}
            </Stack>
          </XStack>
          {props.children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
})

export default Modal

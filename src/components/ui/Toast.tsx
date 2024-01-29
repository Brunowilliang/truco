import {
  toast,
  Toast,
  ToastOptions,
  ValueOrFunction,
} from '@backpackapp-io/react-native-toast'
import { useWindowDimensions } from 'react-native'
import { Stack } from './Stacks'
import { Text } from './Text'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Options = ToastOptions & {
  message: string
  width?: number
  safeArea?: boolean
}

type CustomToastProps = {
  message: ValueOrFunction<Element, Toast>
  width: number
  height: number
  type?: 'success' | 'error'
}

const CustomToast = ({ message, width, height, type }: CustomToastProps) => {
  return (
    <Stack
      w={width}
      h={height}
      centered
      pressable
      br={'$md'}
      bg={type === 'success' ? '$success' : '$danger'}
    >
      <Text color={'$accent'} h5 semibold>
        {message}
      </Text>
    </Stack>
  )
}

export const useToast = () => {
  const screen = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const toastWidth = screen.width - 20 * 2

  const getCommonStyles = (width?: number, safeArea = true) => ({
    styles: {
      pressable: {
        left: width
          ? (screen.width - width) / 2
          : (screen.width - toastWidth) / 2,
        marginTop: safeArea ? 10 : -insets.top + 16,
      },
    },
    disableShadow: true,
  })

  const success = ({ message, width, safeArea, ...options }: Options) => {
    toast.success(message, {
      customToast: (toast) => (
        <CustomToast
          message={toast.message as any}
          width={width || toastWidth}
          height={toast.height || 50}
          type="success"
        />
      ),
      ...getCommonStyles(width, safeArea),
      ...options,
    })
  }

  const error = ({ message, width, safeArea, ...options }: Options) => {
    toast.error(message, {
      customToast: (toast) => (
        <CustomToast
          message={toast.message as any}
          width={width || toastWidth}
          height={toast.height || 50}
          type="error"
        />
      ),
      ...getCommonStyles(width, safeArea),
      ...options,
    })
  }

  return { success, error }
}

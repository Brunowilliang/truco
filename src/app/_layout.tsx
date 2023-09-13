import { Slot, SplashScreen, Stack } from 'expo-router'
import FontProvider from '@/providers/fontProvider'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider } from 'react-native-toast-notifications'
import config from 'tamagui.config'
import React from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const { loaded } = FontProvider()

  if (!loaded) {
    return null
  }

  return <RootLayout />
}

function RootLayout() {  
  return (
    <TamaguiProvider config={config}>
      <ToastProvider>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ animation: 'fade', headerShown: false }} />
        </BottomSheetModalProvider>
      </ToastProvider>
    </TamaguiProvider>
  )
}

import { SplashScreen, Stack } from 'expo-router'
import FontProvider from '@/providers/fontProvider'
import { TamaguiProvider, Theme } from 'tamagui'
import Toast from 'react-native-toast-message'
import config from 'tamagui.config'
import React from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import useThemeStore from '@/store/useThemeStore'
import { toastConfig } from '@/theme/toastconfig'
import { MotiView } from 'moti'

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
  const { theme } = useThemeStore()

  return (
    <>
      <MotiView
        key={theme}
        style={{ flex: 1 }}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 500 }}
      >
        <TamaguiProvider config={config}>
          <Theme name={theme}>
            <BottomSheetModalProvider>
              <Stack
                screenOptions={{
                  animation: 'fade',
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
            </BottomSheetModalProvider>
            <Toast config={toastConfig} />
          </Theme>
        </TamaguiProvider>
      </MotiView>
    </>
  )
}

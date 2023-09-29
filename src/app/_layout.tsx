import { SplashScreen, Stack } from 'expo-router'
import FontProvider from '@/providers/fontProvider'
import Toast from 'react-native-toast-message'
import React from 'react'
import useThemeStore from '@/store/useThemeStore'
import { toastConfig } from '@/theme/toastconfig'
import ThemeConfig from '@/config/ThemeConfig'
import 'moment/locale/pt-br'

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
      <ThemeConfig theme={theme}>
        <Stack
          screenOptions={{
            animation: 'fade',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Toast config={toastConfig} />
      </ThemeConfig>
    </>
  )
}

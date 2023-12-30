import { Stack } from 'expo-router'
import Toast from 'react-native-toast-message'
import React from 'react'
import { toastConfig } from '@/theme/toastconfig'
import 'moment/locale/pt-br'
import PreloadProvider from '@/providers/PreloadProvider'
import ThemeProvider from '@/providers/ThemeProvider'

export default function Layout() {
  return (
    <ThemeProvider>
      <PreloadProvider>
        <Stack
          screenOptions={{
            animation: 'fade',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Toast config={toastConfig} />
      </PreloadProvider>
    </ThemeProvider>
  )
}

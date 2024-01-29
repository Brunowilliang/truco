import { Stack } from 'expo-router'
import React from 'react'
import 'moment/locale/pt-br'
import PreloadProvider from '@/providers/PreloadProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import { LogBox } from 'react-native'
import { Toasts } from '@backpackapp-io/react-native-toast'
import { vexo } from 'vexo-analytics'

LogBox.ignoreAllLogs()

if (__DEV__) {
  vexo('')
} else {
  vexo(process.env.EXPO_PUBLIC_VEXO_API_KEY || '')
}

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
        <Toasts />
      </PreloadProvider>
    </ThemeProvider>
  )
}

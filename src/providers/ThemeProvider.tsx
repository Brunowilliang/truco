import React, { useEffect, useState } from 'react'
import { Stack, TamaguiProvider, Theme } from 'tamagui'
import config from 'tamagui.config'
import { StatusBar, setStatusBarStyle } from 'expo-status-bar'
import * as SystemUI from 'expo-system-ui'
import { useColorScheme } from 'react-native'
import useThemeStore from '@/store/useThemeStore'

SystemUI.setBackgroundColorAsync('#000000')

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemTheme = useColorScheme()
  const { currentTheme } = useThemeStore()

  const appliedTheme =
    currentTheme === 'system' ? systemTheme || 'light' : currentTheme || 'light'

  const [statusBarReady, setStatusBarReady] = useState(false)

  useEffect(() => {
    setStatusBarStyle(appliedTheme === 'dark' ? 'light' : 'dark')
    setStatusBarReady(true)
  }, [appliedTheme])

  return (
    <TamaguiProvider config={config}>
      <Theme name={appliedTheme}>
        {statusBarReady && (
          <StatusBar
            style={appliedTheme === 'dark' ? 'light' : 'dark'}
            animated
            translucent
          />
        )}
        <Stack f={1} bg={'$background'}>
          {children}
        </Stack>
      </Theme>
    </TamaguiProvider>
  )
}

export default ThemeProvider

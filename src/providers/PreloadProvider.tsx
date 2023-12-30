import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Splash from '@/screens/SplashScreen'

SplashScreen.preventAutoHideAsync()

const Fonts = {
  Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  MontserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
  MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
}

interface PreloadProviderProps {
  children: React.ReactNode
}

const PreloadProvider = ({ children }: PreloadProviderProps) => {
  const [appReady, setAppReady] = useState(false)
  const [splashReady, setSplashReady] = useState(false)
  const [fontsLoaded, fontError] = useFonts(Fonts)

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
      setAppReady(true)
    }
  }, [fontsLoaded, fontError])

  if (!appReady || !splashReady) {
    return <Splash setSplashReady={setSplashReady} />
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </SafeAreaProvider>
  )
}

export default PreloadProvider

import React, { useEffect, useRef } from 'react'
import { FadeOut } from 'react-native-reanimated'
import LottieView from 'lottie-react-native'
import { AnimatedStack } from '@/components/ui/Stacks'
import { Image } from 'react-native'

type Props = {
  setSplashReady: (ready: boolean) => void
}

export default function Splash({ setSplashReady }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashReady(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatedStack f={1} centered bg={'$blue'} exiting={FadeOut}>
      <Image
        style={{ width: '100%', height: '100%' }}
        resizeMode="contain"
        alt="SplashScreen"
        source={require('../../../assets/images/splash.png')}
      />
    </AnimatedStack>
  )
}

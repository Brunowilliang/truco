import React, { useEffect } from 'react'
import { FadeOut } from 'react-native-reanimated'
import { AnimatedStack } from '@/components/ui/Stacks'
import { ImageBackground } from 'react-native'

type Props = {
  setSplashReady: (ready: boolean) => void
}

export default function Splash({ setSplashReady }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashReady(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatedStack f={1} centered bg={'$blue'} exiting={FadeOut}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        alt="SplashScreen"
        defaultSource={require('../../../assets/images/splash.png')}
        source={require('../../../assets/images/splash.png')}
      />
    </AnimatedStack>
  )
}

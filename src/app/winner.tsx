import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { Stack } from 'tamagui'
import LottieView from 'lottie-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { useScoreStore } from '@/store/useScoreStore'
import { colors } from '@/styles/theme'
import { useInterstitialAd } from 'react-native-google-mobile-ads'
import { getAdUnitId } from '@/utils/adConfig'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function Winner() {
  const router = useRouter()
  const params = useGlobalSearchParams<{ name: string }>()
  const { setFinishedGame } = useScoreStore()
  const { top } = useSafeAreaInsets()
  const adUnitId = getAdUnitId('winner_Intersticial')
  const animation = useRef(null)
  const { isLoaded, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  })

  useEffect(() => {
    load()
  }, [load])

  const resetGame = () => {
    if (isLoaded) {
      show()
    }
    setFinishedGame(true)
    router.push({
      pathname: '/',
    })
  }

  const Confetti = () => {
    return (
      <LottieView
        autoPlay
        resizeMode="cover"
        ref={animation}
        style={{
          alignSelf: 'center',
          position: 'absolute',
          width: WIDTH,
          height: HEIGHT * 0.9,
        }}
        source={require('@/assets/lottie/confetti.json')}
      />
    )
  }

  const Trophy = () => {
    return (
      <LottieView
        autoPlay
        loop={false}
        duration={3000}
        resizeMode="cover"
        ref={animation}
        style={{
          alignSelf: 'center',
          width: WIDTH + 100,
        }}
        source={require('@/assets/lottie/trophy3.json')}
      />
    )
  }

  return (
    <Stack
      f={1}
      px={20}
      pt={top}
      bg={colors.background}
      ai={'center'}
      jc={'center'}
    >
      <Confetti />
      <Text h2 bold>
        PARABÉNS
      </Text>
      <Text h2 bold>
        {params.name}
      </Text>
      <Trophy />
      <Button
        width={'100%'}
        onPress={resetGame}
        mt={20}
        bg={colors.primary}
        borderRadius={10}
      >
        Reiniciar Jogo
      </Button>
    </Stack>
  )
}

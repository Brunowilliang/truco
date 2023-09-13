import { Text } from '@/components/ui/Text'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Dimensions, Platform } from 'react-native'
import { Stack } from 'tamagui'
import LottieView from 'lottie-react-native';
import { colors } from '@/styles/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button } from '@/components/ui/Button'
import { useScoreStore } from '@/store/useScoreStore'
import { useInterstitialAd, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.OS === 'ios' ? "ca-app-pub-9513215669385884/8177640471" : "ca-app-pub-9513215669385884/6672987119"

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export default function winner() {
  const router = useRouter();
  const params = useGlobalSearchParams<{ name: string }>()
  const { setFinishedGame } = useScoreStore();
  const { top } = useSafeAreaInsets();

  const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.OS === 'ios' ? "ca-app-pub-9513215669385884/8177640471" : "ca-app-pub-9513215669385884/6672987119"

  const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    load();
  }, [load]);


  const resetGame = () => {
    if (isLoaded) {
      show();
    }
    setFinishedGame(true);
    router.push({
      pathname: '/',
    });
  }
  
  const WIDHT = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const animation = useRef(null);

  const Confetti = () => {
    return (
      <LottieView
        autoPlay
        resizeMode="cover"
        ref={animation}
        style={{
          alignSelf: 'center',
          position: 'absolute',
          width: WIDHT,
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
          width: WIDHT + 100,
        }}
        source={require('@/assets/lottie/trophy3.json')}
      />
    )
  }


  return (
    <Stack f={1} px={20} pt={top} bg={colors.background} ai={'center'} jc={'center'}>
      <Confetti />
      <Text fontSize={'$h2'} fontFamily={'$bold'}>PARABÉNS</Text>
      <Text fontSize={'$h2'} fontFamily={'$bold'}>{params.name}</Text>
      <Trophy />
      <Button width={"100%"} onPress={resetGame} mt={20} bg={colors.primary} borderRadius={10}>
        Reiniciar Jogo
      </Button>
    </Stack>
  )
}
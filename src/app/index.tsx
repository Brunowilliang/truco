import React, { useEffect, useRef } from 'react'
import { ScrollView, XStack } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '@/styles/theme'
import Counter from '@/components/Counter'
import { Separator } from '@/components/ui/Separator'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useScoreStore } from '@/store/useScoreStore'
import Modal, { ModalProps } from '@/components/ui/Modal'
import { Text } from '@/components/ui/Text'
import About from '@/components/About'
import Donate from '@/components/Donate'
import { useInterstitialAd } from 'react-native-google-mobile-ads'
import { getAdUnitId } from '@/utils/adConfig'

export default function index() {
  const { bottom } = useSafeAreaInsets()
  const {finishedGame, setFinishedGame} = useScoreStore()
  const modal = useRef<ModalProps>(null)
  const modalDonate = useRef<ModalProps>(null)
  const adUnitId = getAdUnitId('home_Intersticial');

  const { isLoaded, load, show } = useInterstitialAd(adUnitId, { 
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (isLoaded) {
      show();
    }
  }, [isLoaded, show]);

  useEffect(() => {
    setFinishedGame(false);
  }, [finishedGame]);
  
  return (
    <>
      <Header onPress={() => modal.current?.open() } />
      <ScrollView contentContainerStyle={{ flex: 1 }} pt={20} pb={bottom} bg={colors.background}>
        <XStack f={1} px={20} bg={colors.background} gap={10} >
          <Counter teamName='Equipe A' />
          <Separator />
          <Counter teamName='Equipe B' />
        </XStack>
        <Footer />
      </ScrollView>

      <Modal
        ref={modal}
        snapPoints={['40%']}
        title="Sobre o jogo"
        rightComponent={
          <Text fontSize={'$h6'}>v.2.0.0</Text>
        }
      >
        <About onPress={() => modalDonate.current?.open() }/>
      </Modal>

      <Modal
        ref={modalDonate}
        snapPoints={['73%']}
        title="Doação"
      >
        <Donate />
      </Modal>
    </>
  )
}

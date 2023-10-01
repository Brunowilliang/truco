import React, { useEffect, useState } from 'react'
import { ScrollView, XStack } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Counter from '@/components/Counter'
import { Separator } from '@/components/ui/Separator'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Sheet } from '@/components/ui/Sheet'
import About from '@/components/About'
import { useInterstitialAd } from 'react-native-google-mobile-ads'
import { getAdUnitId } from '@/utils/adConfig'
import Menu from '@/components/Menu'
import { GameProps, useGameStore } from '@/store/useGameStore'
import { IconButton } from '@/components/ui/IconButton'
import { Settings } from '@tamagui/lucide-icons'

export default function index() {
  const { bottom } = useSafeAreaInsets()
  const adUnitId = getAdUnitId('home_Intersticial')

  const [openModalMenu, setOpenModalMenu] = useState(false)
  const [openModalAbout, setOpenModalAbout] = useState(false)

  const { isLoaded, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  })

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (isLoaded) {
      show()
    }
  }, [isLoaded, show])

  const { teamA, teamB, scoreA, scoreB, addGame } = useGameStore()

  const handleGameEnd = (team: string) => {
    const game: GameProps = {
      teamA: teamA || 'Time A',
      teamB: teamB || 'Time B',
      scoreA,
      scoreB,
      winner: team,
    }
    addGame(game)
  }

  return (
    <>
      <Header
        title="Contador de truco"
        rightChildren={
          <IconButton right onPress={() => setOpenModalMenu(true)}>
            <Settings size={23} color={'$textColor'} />
          </IconButton>
        }
      />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        pt={20}
        pb={bottom}
        bg={'$background'}
      >
        <XStack f={1} px={20} gap={10}>
          <Counter
            placeholder="Team A"
            team="A"
            onGameEnd={() => handleGameEnd('teamA')}
          />
          <Separator vertical />
          <Counter
            placeholder="Team B"
            team="B"
            onGameEnd={() => handleGameEnd('teamB')}
          />
        </XStack>
        <Footer />
      </ScrollView>

      <Sheet
        open={openModalMenu}
        onOpenChange={setOpenModalMenu}
        animation={'modal'}
        dismissOnSnapToBottom
        snapPointsMode="fit"
      >
        <Sheet.Overlay />
        <Sheet.Frame>
          <Sheet.Handle />
          <Menu
            AboutOnPress={() => {
              setOpenModalMenu(false)
              setOpenModalAbout(true)
            }}
          />
        </Sheet.Frame>
      </Sheet>

      <Sheet
        open={openModalAbout}
        onOpenChange={setOpenModalAbout}
        animation={'modal'}
        dismissOnSnapToBottom
        snapPointsMode="fit"
      >
        <Sheet.Overlay />
        <Sheet.Frame>
          <Sheet.Handle />
          <About />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

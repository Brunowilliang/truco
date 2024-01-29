import React, { useEffect, useRef } from 'react'
import { ScrollView } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Counter from '@/screens/Home/Counter'
import { Separator } from '@/components/ui/Separator'
import Footer from '@/screens/Home/Footer'
import { useInterstitialAd } from 'react-native-google-mobile-ads'
import { getAdUnitId } from '@/utils/adConfig'
import { GameProps, useGameStore } from '@/store/useGameStore'
import { IconButton } from '@/components/ui/IconButton'
import Menu from '../Menu'
import { ModalRef } from '@/components/ui/Modal'
import About from '../About'
import { AnimatedHStack, HStack, Stack } from '@/components/ui/Stacks'
import Aparence from '../Aparence'
import { Header } from '@/components/ui/Header'
import { Text } from '@/components/ui/Text'
import { FadeInDown } from 'react-native-reanimated'

export default function Home() {
	const { bottom } = useSafeAreaInsets()
	const adUnitId = getAdUnitId('home_Intersticial')
	const refModalMenu = useRef<ModalRef>(null)
	const refModalAbout = useRef<ModalRef>(null)
	const refModalAparence = useRef<ModalRef>(null)

	const { isLoaded, load, show } = useInterstitialAd(adUnitId, {
		requestNonPersonalizedAdsOnly: true,
	})

	useEffect(() => {
		load()
	}, [load])

	// useEffect(() => {
	// 	if (isLoaded) {
	// 		show();
	// 	}
	// }, [isLoaded, show]);

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
		<Stack f={1} bg={'$background'}>
			<Header>
				<Header.Left />
				<Header.Center>
					<Text h3>Contador de truco</Text>
				</Header.Center>
				<Header.Right>
					<IconButton onPress={() => refModalMenu.current?.present()}>
						<IconButton.Icon name='Setting2' />
					</IconButton>
				</Header.Right>
			</Header>
			<ScrollView
				contentContainerStyle={{ flex: 1 }}
				pt={20}
				pb={bottom}
				bg={'$background'}
			>
				<AnimatedHStack
					f={1}
					px={'$lg'}
					gap={'$md'}
					entering={FadeInDown.duration(350)}
				>
					<Counter
						placeholder='Team A'
						team='A'
						onGameEnd={() => handleGameEnd('teamA')}
					/>
					<Separator vertical />
					<Counter
						placeholder='Team B'
						team='B'
						onGameEnd={() => handleGameEnd('teamB')}
					/>
				</AnimatedHStack>
				<Footer />
			</ScrollView>

			<Menu
				ref={refModalMenu}
				aboutOnPress={() => refModalAbout.current?.present()}
				aparenceOnPress={() => refModalAparence.current?.present()}
			/>

			<About ref={refModalAbout} />
			<Aparence ref={refModalAparence} />
		</Stack>
	)
}

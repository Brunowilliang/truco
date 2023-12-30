import React from 'react'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { Game, useGameStore } from '@/store/useGameStore'
import { X } from '@tamagui/lucide-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HistoryCard from '@/screens/MatchHistory/HistoryCard'
import moment from 'moment'
import { SectionList } from 'react-native'
import { IconButton } from '@/components/ui/IconButton'
import { useRouter } from 'expo-router'
import Header from '@/components/ui/Header'
import { HStack, Stack } from '@/components/ui/Stacks'

type Section = {
  title: string
  data: Game[]
}

function groupGamesByDate(games: Game[]): Section[] {
  const grouped: Record<string, Game[]> = games.reduce(
    (acc: Record<string, Game[]>, game) => {
      const date = moment(game.createdAt).format('DD/MM/YYYY')
      acc[date] = acc[date] || []
      acc[date].push(game)
      return acc
    },
    {},
  )

  return Object.keys(grouped)
    .map((date) => ({
      title: date,
      data: grouped[date].sort(
        (a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix(),
      ),
    }))
    .sort(
      (a, b) =>
        moment(b.title, 'DD/MM/YYYY').unix() -
        moment(a.title, 'DD/MM/YYYY').unix(),
    )
}

export default function MatchHistory() {
  const { bottom } = useSafeAreaInsets()
  const router = useRouter()
  const { games, deleteAllGames } = useGameStore()

  const groupedGames = React.useMemo(() => groupGamesByDate(games), [games])

  const renderItem = ({ item }: { item: Game }) => (
    <HStack centered borderRadius={10} zIndex={1} bg={'$accent'}>
      <HistoryCard
        winnerA={item.winner === 'teamA'}
        team={item.teamA}
        score={item.scoreA}
      />
      <X size={35} color="$textPrimary" />
      <HistoryCard
        winnerB={item.winner === 'teamB'}
        team={item.teamB}
        score={item.scoreB}
      />
    </HStack>
  )

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: Section
  }) => (
    <Text pt={20} mb={10} bg={'$background'}>
      {moment(title, 'DD/MM/YYYY').format('DD, MMM [de] YYYY')}
    </Text>
  )

  return (
    <>
      <Header>
        <Header.Left>
          <IconButton onPress={() => router.back()}>
            <IconButton.Icon name="ArrowLeft2" size={21} />
          </IconButton>
        </Header.Left>
        <Header.Title>Últimas partidas</Header.Title>
      </Header>

      <Stack f={1} bg={'$background'} pb={bottom + 20} px={20}>
        <SectionList
          sections={groupedGames}
          stickySectionHeadersEnabled={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={() => <Stack h={10} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <Text center mt={20}>
              Nenhuma partida encontrada
            </Text>
          )}
          renderSectionHeader={renderSectionHeader}
          showsVerticalScrollIndicator={false}
        />
        {groupedGames.length > 0 &&
          groupedGames.some((section) => section.data.length > 0) && (
            <Button secondary onPress={deleteAllGames}>
              <Button.Text color={'$textColor'}>
                Apagar todas as partidas
              </Button.Text>
            </Button>
          )}
      </Stack>
    </>
  )
}

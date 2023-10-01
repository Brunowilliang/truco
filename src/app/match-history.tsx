import React from 'react'
import { Button } from '@/components/ui/Button'
import { Stack } from 'tamagui'
import { Text } from '@/components/ui/Text'
import { Game, useGameStore } from '@/store/useGameStore'
import { ChevronLeft, X } from '@tamagui/lucide-icons'
import Header from '@/components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HistoryCard from '@/components/HistoryCard'
import moment from 'moment'
import { SectionList } from 'react-native'
import { IconButton } from '@/components/ui/IconButton'
import { useRouter } from 'expo-router'

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
    <Stack
      ai={'center'}
      jc={'center'}
      borderRadius={10}
      zIndex={1}
      bg={'$contrast'}
      flexDirection="row"
    >
      <HistoryCard
        winnerA={item.winner === 'teamA'}
        team={item.teamA}
        score={item.scoreA}
      />
      <X size={35} color="$textColor" />
      <HistoryCard
        winnerB={item.winner === 'teamB'}
        team={item.teamB}
        score={item.scoreB}
      />
    </Stack>
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
      <Header
        title="Últimas partidas"
        leftChildren={
          <IconButton left onPress={() => router.back()}>
            <ChevronLeft size={30} color={'$textColor'} />
          </IconButton>
        }
      />
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

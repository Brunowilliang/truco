import React from 'react'
import { Button } from '@/components/ui/Button'
import { ScrollView, Stack, XStack } from 'tamagui'
import { Text } from '@/components/ui/Text'
import { useGameStore } from '@/store/useGame'
import { X } from '@tamagui/lucide-icons'
import Header from '@/components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HistoryCard from '@/components/HistoryCard'

export default function MatchHistory() {
  const { bottom } = useSafeAreaInsets()
  const { games, deleteAllGames } = useGameStore()

  const sortedGames = games.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  console.log(JSON.stringify(games, null, 2))

  return (
    <>
      <Header goBack title="Últimas partidas" />
      <Stack f={1} bg={'$background'} pb={bottom + 20} px={20}>
        <ScrollView
          f={1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 20,
          }}
        >
          {sortedGames.map((match, index) => {
            return (
              <XStack
                key={index}
                ai={'center'}
                jc={'center'}
                borderRadius={10}
                bg={'$contrast'}
              >
                <HistoryCard
                  winnerA={match.winner === 'teamA'}
                  team={match.teamA}
                  score={match.scoreA}
                />

                <Stack>
                  <X size={35} color="$textColor" />
                </Stack>

                <HistoryCard
                  winnerB={match.winner === 'teamB'}
                  team={match.teamB}
                  score={match.scoreB}
                />
              </XStack>
            )
          })}
          {sortedGames.length === 0 && (
            <Text center h4 medium mt={10}>
              Nenhuma partida jogada
            </Text>
          )}
        </ScrollView>
        {sortedGames.length > 0 && (
          <Button secondary onPress={deleteAllGames}>
            Apagar todas as partidas
          </Button>
        )}
      </Stack>
    </>
  )
}

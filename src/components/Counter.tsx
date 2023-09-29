import React, { useEffect, useCallback, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Input } from './ui/Input'
import { Text } from './ui/Text'
import { Button } from './ui/Button'
import { useRouter } from 'expo-router'
import { useToast } from './ui/Toast'
import { useGameStore } from '@/store/useGameStore'

type Props = {
  placeholder: string
  team: 'A' | 'B'
  onGameEnd: (team: string) => void
}

const Counter: React.FC<Props> = ({ placeholder, team, onGameEnd }) => {
  const { teamA, teamB, scoreA, scoreB, resetScores } = useGameStore()

  const { showToast } = useToast()
  const router = useRouter()

  const validateTeamName = useCallback((): boolean => {
    if ((team === 'A' && teamA === '') || (team === 'B' && teamB === '')) {
      showToast({
        message: `Preencha o nome da ${placeholder}!`,
        type: 'error',
      })
      return false
    }
    return true
  }, [team, teamA, teamB, placeholder])

  const updateCount = useCallback(
    (value: number) => {
      if (!validateTeamName()) return
      if (team === 'A') {
        useGameStore.setState((state) => {
          const newScore = state.scoreA + value
          return { scoreA: Math.min(Math.max(0, newScore), 12) }
        })
      } else {
        useGameStore.setState((state) => {
          const newScore = state.scoreB + value
          return { scoreB: Math.min(Math.max(0, newScore), 12) }
        })
      }
    },
    [validateTeamName, team],
  )

  const resetScore = useCallback(() => {
    if (!validateTeamName()) return
    if (team === 'A') {
      useGameStore.setState({ scoreA: 0 })
    } else {
      useGameStore.setState({ scoreB: 0 })
    }
  }, [team, validateTeamName])

  useEffect(() => {
    const currentScore = team === 'A' ? scoreA : scoreB
    if (currentScore >= 12) {
      onGameEnd(team)
      router.push({
        pathname: '/winner',
        params: { name: team === 'A' ? teamA : teamB },
      })
      resetScores()
    }
  }, [team, scoreA, scoreB, onGameEnd, router, resetScores])

  const handleNameChange = (text: string) => {
    if (team === 'A') {
      useGameStore.setState({ teamA: text })
    } else {
      useGameStore.setState({ teamB: text })
    }
  }

  const [lastScore, setLastScore] = useState(team === 'A' ? scoreA : scoreB)

  useEffect(() => {
    setLastScore(team === 'A' ? scoreA : scoreB)
  }, [team, scoreA, scoreB])

  const currentScore = team === 'A' ? scoreA : scoreB
  const isIncreasing = currentScore > lastScore

  return (
    <YStack f={1} gap={10}>
      <Input
        placeholder={placeholder}
        textAlign="center"
        value={team === 'A' ? teamA : teamB}
        onChangeText={handleNameChange}
      />
      <Text
        fontSize={50}
        bold
        center
        my={10}
        key={currentScore}
        animation={'typing'}
        enterStyle={{
          opacity: 0,
          y: isIncreasing ? 30 : -30,
        }}
        exitStyle={{
          opacity: 0,
          y: isIncreasing ? -30 : 30,
        }}
      >
        {team === 'A' ? scoreA : scoreB}
      </Text>
      <XStack gap={10}>
        <Button f={1} onPress={() => updateCount(-3)}>
          -3
        </Button>
        <Button f={1} onPress={() => updateCount(3)}>
          +3
        </Button>
      </XStack>
      <XStack gap={10}>
        <Button f={1} onPress={() => updateCount(-1)}>
          -1
        </Button>
        <Button f={1} onPress={() => updateCount(1)}>
          +1
        </Button>
      </XStack>
      <XStack>
        <Button
          f={1}
          onPress={() => {
            validateTeamName() && resetScore()
          }}
        >
          Resetar
        </Button>
      </XStack>
    </YStack>
  )
}

export default Counter

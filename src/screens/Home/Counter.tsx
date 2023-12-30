import React, { useEffect, useCallback, useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'expo-router'
import { useToast } from '@/components/ui/Toast'
import { useGameStore } from '@/store/useGameStore'
import { HStack, Stack } from '@/components/ui/Stacks'

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
    <Stack f={1} gap={10}>
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
      <HStack gap={10}>
        <Button f={1} onPress={() => updateCount(-3)}>
          <Button.Text>-3</Button.Text>
        </Button>
        <Button f={1} onPress={() => updateCount(3)}>
          <Button.Text>+3</Button.Text>
        </Button>
      </HStack>
      <HStack gap={10}>
        <Button f={1} onPress={() => updateCount(-1)}>
          <Button.Text>-1</Button.Text>
        </Button>
        <Button f={1} onPress={() => updateCount(1)}>
          <Button.Text>+1</Button.Text>
        </Button>
      </HStack>
      <HStack>
        <Button
          f={1}
          onPress={() => {
            validateTeamName() && resetScore()
          }}
        >
          <Button.Text>Resetar</Button.Text>
        </Button>
      </HStack>
    </Stack>
  )
}

export default Counter
import React, { useEffect, useCallback } from 'react'
import { Input } from '@/components/ui/Input'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'expo-router'
import { useGameStore } from '@/store/useGameStore'
import { HStack, Stack } from '@/components/ui/Stacks'
import { useToast } from '@/components/ui/Toast'

type Props = {
  placeholder: string
  team: 'A' | 'B'
  onGameEnd: (team: string) => void
}

const Counter: React.FC<Props> = ({ placeholder, team, onGameEnd }) => {
  const { teamA, teamB, scoreA, scoreB, resetScores } = useGameStore()

  const toast = useToast()
  const router = useRouter()

  const validateTeamName = useCallback((): boolean => {
    if ((team === 'A' && teamA === '') || (team === 'B' && teamB === '')) {
      toast.error({
        message: `Preencha o nome da ${placeholder}!`,
        width: 300,
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

  return (
    <Stack f={1} gap={10}>
      <Input
        placeholder={placeholder}
        textAlign="center"
        value={team === 'A' ? teamA : teamB}
        onChangeText={handleNameChange}
      />
      <Text bold center fontSize={50} my={10}>
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

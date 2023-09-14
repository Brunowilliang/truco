import React, { useEffect, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Input } from './ui/Input'
import { Text } from './ui/Text'
import { Button } from './ui/Button'
import { useRouter } from 'expo-router'
import useToast from './ui/Toast'
import { useScoreStore } from '@/store/useScoreStore'

type Props = {
  teamName: string
}

export default function Counter({ teamName }: Props) {
  const { showToast } = useToast()
  const { finishedGame } = useScoreStore()
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [result, setResult] = useState(0)
  const [, setError] = useState(false)
  const router = useRouter()

  const validateNome = (): boolean => {
    if (name === '') {
      setError(true)
      showToast({
        message: `Preencha o nome da ${teamName}!`,
        type: 'danger',
      })
      return false
    }
    setError(false)
    return true
  }

  const updateCount = (value: number) => {
    if (!validateNome()) return
    setCount((prevCount) => prevCount + value)
  }

  useEffect(() => {
    if (finishedGame) {
      setCount(0)
      setResult(count)
      setName('')
    } else {
      if (count >= 12) {
        setCount(12)
        router.push({
          pathname: '/winner',
          params: { name },
        })
      }
      if (count < 0) {
        setCount(0)
      }
      setResult(count)
    }

    if (name !== '') {
      setError(false)
    }
  }, [finishedGame, count, name])

  return (
    <YStack f={1} gap={10}>
      <Input
        placeholder={teamName}
        textAlign="center"
        value={name}
        onChangeText={setName}
      />
      <Text fontSize={50} bold center my={10}>
        {result}
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
            validateNome() && setCount(0)
          }}
        >
          Resetar
        </Button>
      </XStack>
    </YStack>
  )
}

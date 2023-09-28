import { Trophy } from '@tamagui/lucide-icons'
import React from 'react'
import { Stack, XStack } from 'tamagui'
import { Text } from './ui/Text'

type Props = {
  team: string
  score: number
  winnerA?: boolean
  winnerB?: boolean
}

export default function HistoryCard({ team, score, winnerA, winnerB }: Props) {
  return (
    <XStack f={1} p={10} ai={'center'} jc={'center'} position="relative">
      <Stack
        w={40}
        ai={'center'}
        jc={'center'}
        position="absolute"
        display={winnerA || winnerB ? 'flex' : 'none'}
        left={winnerA ? 5 : null}
        right={winnerB ? 5 : null}
        bottom={10}
      >
        <Trophy size={25} color={winnerA || winnerB ? '$blue' : '$textColor'} />
      </Stack>
      <Stack f={1} ai={'center'} jc={'center'}>
        <Text
          h4
          semibold
          numberOfLines={2}
          color={winnerA || winnerB ? '$blue' : '$textColor'}
        >
          {team}
        </Text>
        <Text
          fontSize={30}
          bold
          color={winnerA || winnerB ? '$blue' : '$textColor'}
        >
          {score}
        </Text>
      </Stack>
      {/* winnerB desse lado */}
    </XStack>
  )
}

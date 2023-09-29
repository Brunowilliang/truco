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
        p={8}
        borderRadius={10}
        borderTopLeftRadius={winnerA ? 0 : 10}
        borderTopRightRadius={winnerB ? 0 : 10}
        borderBottomRightRadius={winnerA ? 0 : 10}
        borderBottomLeftRadius={winnerB ? 0 : 10}
        ai={'center'}
        jc={'center'}
        bg={winnerA || winnerB ? '$blue' : '$textColor'}
        position="absolute"
        display={winnerA || winnerB ? 'flex' : 'none'}
        left={winnerA ? 0 : null}
        zIndex={10}
        right={winnerB ? 0 : null}
        bottom={0}
      >
        <Trophy size={20} color={'white'} />
      </Stack>
      <Stack f={1} ai={'center'} jc={'center'}>
        <Text
          h4
          semibold
          numberOfLines={1}
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
    </XStack>
  )
}

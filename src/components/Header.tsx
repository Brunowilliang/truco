import React from 'react'
import { Stack, StackProps, XStack } from 'tamagui'
import { Text } from './ui/Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChevronLeft, Settings } from '@tamagui/lucide-icons'
import { Button } from './ui/Button'
import { useRouter } from 'expo-router'
import { IconButton } from './ui/IconButton'

type Props = StackProps & {
  goBack?: boolean
  title?: string
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
}

export default function Header({
  title,
  leftChildren,
  rightChildren,
  ...props
}: Props) {
  const { top } = useSafeAreaInsets()

  return (
    <XStack
      pt={top + 10}
      pb={10}
      px={20}
      bg={'$contrast'}
      ai={'center'}
      jc={'flex-end'}
      {...props}
    >
      <Stack w={50} h={50}>
        {leftChildren}
      </Stack>
      <Text f={1} h3 semibold center>
        {title}
      </Text>
      <Stack w={50} h={50}>
        {rightChildren}
      </Stack>
    </XStack>
  )
}

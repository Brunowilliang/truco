import React from 'react'
import { colors } from '@/styles/theme'
import { Stack, StackProps, XStack } from 'tamagui'
import { Text } from './ui/Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Settings } from '@tamagui/lucide-icons'
import { Button } from './ui/Button'

type Props = StackProps & {
  settingsOnPress?: () => void
}

export default function Header(props: Props) {
  const { top } = useSafeAreaInsets()

  return (
    <XStack
      pt={top + 10}
      pb={10}
      px={20}
      bg={colors.secondary}
      ai={'center'}
      jc={'flex-end'}
      {...props}
    >
      <Stack w={50} h={50} />
      <Text f={1} h3 semibold center>
        Contador de truco
      </Text>
      <Button
        w={50}
        h={50}
        ai={'center'}
        jc={'center'}
        bg={colors.transparent}
        onPress={props.settingsOnPress}
        pressStyle={{
          scale: 0.97,
          bg: colors.transparent,
        }}
      >
        <Settings size={23} color={colors.gray} />
      </Button>
    </XStack>
  )
}

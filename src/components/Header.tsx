import React from 'react'
import { Stack, StackProps, XStack } from 'tamagui'
import { Text } from './ui/Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChevronLeft, Settings } from '@tamagui/lucide-icons'
import { Button } from './ui/Button'
import { useRouter } from 'expo-router'

type Props = StackProps & {
  settingsOnPress?: () => void
  goBack?: boolean
  title?: string
}

export default function Header({
  settingsOnPress,
  goBack,
  title,
  ...props
}: Props) {
  const { top } = useSafeAreaInsets()
  const router = useRouter()

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
        {goBack && (
          <Button
            w={50}
            h={50}
            ai={'center'}
            jc={'center'}
            bg={'$transparent'}
            onPress={() => router.back()}
            pressStyle={{
              scale: 0.97,
              bg: '$transparent',
            }}
          >
            <ChevronLeft size={30} color={'$textColor'} />
          </Button>
        )}
      </Stack>
      <Text f={1} h3 semibold center>
        {title}
      </Text>
      <Stack w={50} h={50}>
        {settingsOnPress && (
          <Button
            w={50}
            h={50}
            ai={'center'}
            jc={'center'}
            bg={'$transparent'}
            onPress={settingsOnPress}
            pressStyle={{
              scale: 0.97,
              bg: '$transparent',
            }}
          >
            <Settings size={23} color={'$textColor'} />
          </Button>
        )}
      </Stack>
    </XStack>
  )
}

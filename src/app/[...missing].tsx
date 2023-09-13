import React from 'react'
import { useRouter } from 'expo-router'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { Stack } from 'tamagui'
import { colors } from '@/styles/theme'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <Stack f={1} ai={'center'} jc={'center'} bg={colors.background}>
      <Text fontFamily={'$semibold'}>Ooops!</Text>
      <Text fontFamily={'$semibold'}>página não encontrada!</Text>
      <Button onPress={() => router.push('/')} mt={20}>
        Voltar
      </Button>
    </Stack>
  )
}

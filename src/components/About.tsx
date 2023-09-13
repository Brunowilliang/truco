import React from 'react'
import { Stack } from 'tamagui'
import { Text } from './ui/Text'
import { Button } from './ui/Button'

type Props = {
  onPress: () => void;
}  

export default function About({ onPress }: Props) {
  return (
    <Stack gap={30} px={20}>
      <Text fontSize={'$h3'} fontFamily={'$semibold'} textAlign='center'>
        Desenvolvido com dedicação e carinho por um jovem desenvolvedor.
      </Text>
      <Button w={'100%'} onPress={onPress}>
        Faça uma doação
      </Button>
    </Stack>
  )
}
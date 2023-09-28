import React, { ReactNode } from 'react'
import { XStack, Stack } from 'tamagui'
import { Text } from './ui/Text'

type Props = {
  title?: string
  leftComponent?: ReactNode
  rightComponent?: ReactNode
}

export default function HeaderModal(props: Props) {
  return (
    <XStack
      justifyContent={'space-between'}
      alignItems={'center'}
      bg={'$background'}
    >
      <Stack w={'20%'} alignItems={'flex-start'}>
        {props.leftComponent}
      </Stack>
      <Text h3 semibold center>
        {props.title}
      </Text>
      <Stack w={'20%'} alignItems={'flex-end'}>
        {props.rightComponent}
      </Stack>
    </XStack>
  )
}

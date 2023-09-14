import React from 'react'
import { Stack, XStack } from 'tamagui'
import { Text } from './ui/Text'
import { Button } from './ui/Button'
import { Github, Heart, Linkedin, Twitter } from '@tamagui/lucide-icons'
import { colors } from '@/styles/theme'
import { Linking } from 'react-native'

const TWITTER_URL = 'https://twitter.com/Brunowgarcia'
const LINKEDIN_URL = 'https://www.linkedin.com/in/brunowilliang'
const GITHUB_URL = 'https://www.github.com/brunowilliang'

const openUrl = (url: string) => {
  Linking.openURL(url)
}

type Props = {
  onPress: () => void
}

export default function About({ onPress }: Props) {
  return (
    <Stack gap={20} px={20}>
      <Stack gap={10}>
        <Text h5 center>
          Este jogo é o resultado da paixão e determinação de um jovem
          desenvolvedor que buscou combinar inovação, desafio e diversão em uma
          única experiência.
        </Text>
        <Text h5 center>
          Cada detalhe foi pensado para proporcionar momentos únicos aos
          jogadores. Esperamos que você aproveite cada segundo desta aventura
          tanto quanto nós apreciamos criá-la.
        </Text>
      </Stack>
      <Text h5 center>
        Siga-me nas redes sociais.
      </Text>
      <XStack gap={10}>
        <Button
          secondary
          f={1}
          onPress={() => openUrl(TWITTER_URL)}
          accessibilityLabel="Abrir Twitter"
        >
          <Twitter size={25} strokeWidth={0} fill={colors.gray} />
        </Button>
        <Button
          secondary
          f={1}
          onPress={() => openUrl(LINKEDIN_URL)}
          accessibilityLabel="Abrir LinkedIn"
        >
          <Linkedin size={25} strokeWidth={0} fill={colors.gray} />
        </Button>
        <Button
          secondary
          f={1}
          onPress={() => openUrl(GITHUB_URL)}
          accessibilityLabel="Abrir GitHub"
        >
          <Github size={25} strokeWidth={0} fill={colors.gray} />
        </Button>
      </XStack>
      <Button
        w={'100%'}
        gap={-5}
        onPress={onPress}
        accessibilityLabel="Fazer uma doação"
      >
        Faça uma doação
        <Heart size={23} strokeWidth={0} fill={colors.white} />
      </Button>
    </Stack>
  )
}

import React from 'react'
import { Stack, XStack } from 'tamagui'
import { Text } from './ui/Text'
import { Button } from './ui/Button'
import { Github, Linkedin, Twitter } from '@tamagui/lucide-icons'
import { Linking } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TWITTER_URL = 'https://twitter.com/Brunowgarcia'
const LINKEDIN_URL = 'https://www.linkedin.com/in/brunowilliang'
const GITHUB_URL = 'https://www.github.com/brunowilliang'

const openUrl = (url: string) => {
  Linking.openURL(url)
}

export default function About() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Stack gap={20} px={20} pt={20} pb={bottom + 20}>
      <Text semibold center h3>
        Sobre o jogo
      </Text>
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

      <XStack gap={10}>
        <Button
          secondary
          f={1}
          onPress={() => openUrl(TWITTER_URL)}
          accessibilityLabel="Abrir Twitter"
        >
          <Twitter size={25} color="$textColor" />
        </Button>
        <Button
          secondary
          f={1}
          onPress={() => openUrl(LINKEDIN_URL)}
          accessibilityLabel="Abrir LinkedIn"
        >
          <Linkedin size={25} color="$textColor" />
        </Button>
        <Button
          secondary
          f={1}
          onPress={() => openUrl(GITHUB_URL)}
          accessibilityLabel="Abrir GitHub"
        >
          <Github size={25} color="$textColor" />
        </Button>
      </XStack>
      <Text h5 center>
        Siga-me nas redes sociais.
      </Text>
    </Stack>
  )
}

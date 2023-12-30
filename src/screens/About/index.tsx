import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Modal, { ModalRef } from '@/components/ui/Modal'
import { HStack, Stack } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'
import { Linking } from 'react-native'
import { IconButton } from '@/components/ui/IconButton'

const TWITTER_URL = 'https://twitter.com/Brunowgarcia'
const LINKEDIN_URL = 'https://www.linkedin.com/in/brunowilliang'
const GITHUB_URL = 'https://www.github.com/brunowilliang'

const openUrl = (url: string) => {
  Linking.openURL(url)
}

const About = React.forwardRef<ModalRef>((_, ref) => {
  const { bottom } = useSafeAreaInsets()
  const snapPoints = React.useMemo(() => ['100%'], [])

  return (
    <Modal ref={ref} enableDynamicSizing snapPoints={snapPoints}>
      <Stack gap={20} px={20} pt={20} pb={bottom + 20}>
        <Text semibold center h3>
          Sobre o jogo
        </Text>
        <Stack gap={10}>
          <Text h5 center>
            Este jogo é o resultado da paixão e determinação de um jovem
            desenvolvedor que buscou combinar inovação, desafio e diversão em
            uma única experiência.
          </Text>
          <Text h5 center>
            Cada detalhe foi pensado para proporcionar momentos únicos aos
            jogadores. Esperamos que você aproveite cada segundo desta aventura
            tanto quanto nós apreciamos criá-la.
          </Text>
        </Stack>

        <HStack gap={10}>
          <IconButton
            variant="inverted"
            f={1}
            onPress={() => openUrl(TWITTER_URL)}
          >
            <IconButton.ExpoIcon library="AntDesign" name="twitter" />
          </IconButton>
          <IconButton
            variant="inverted"
            f={1}
            onPress={() => openUrl(LINKEDIN_URL)}
          >
            <IconButton.ExpoIcon library="Entypo" name="linkedin" />
          </IconButton>
          <IconButton
            variant="inverted"
            f={1}
            onPress={() => openUrl(GITHUB_URL)}
          >
            <IconButton.ExpoIcon library="AntDesign" name="github" />
          </IconButton>
        </HStack>
        <Text h5 center>
          Siga-me nas redes sociais.
        </Text>
      </Stack>
    </Modal>
  )
})

export default About

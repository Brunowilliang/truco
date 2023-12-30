import { Image } from 'react-native'
import React from 'react'
import { colors } from '@/styles/theme'
import { Copy } from '@tamagui/lucide-icons'
import * as Clipboard from 'expo-clipboard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'
import { HStack, Stack } from '@/components/ui/Stacks'

export default function Donate() {
  const { bottom } = useSafeAreaInsets()
  const { showToast } = useToast()
  const chavePix =
    '00020101021126570014br.gov.bcb.pix0111376427498050220Obrigado pelo apoio 5204000053039865802BR5920Bruno Willian Garcia6009SAO PAULO622905251GCG3CTTMBXY6BTB27XDE804863045B25'

  const copyChavePix = () => {
    Clipboard.setStringAsync(chavePix)
    showToast({ message: 'Chave Pix copiada com sucesso!', type: 'success' })
  }

  return (
    <Stack gap={30} px={20} pt={20} pb={bottom + 20}>
      <Image
        source={require('@/assets/qrcode.jpeg')}
        alt="QR Code"
        style={{
          width: 220,
          height: 220,
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 3,
          borderColor: colors.primary,
        }}
      />

      <HStack
        bg={colors.secondary}
        py={5}
        px={10}
        br={10}
        ai={'center'}
        jc={'center'}
      >
        <Stack gap={5} f={1}>
          <Text h6 semibold left>
            Chave Pix
          </Text>
          <Text h4 semibold left numberOfLines={1}>
            {chavePix}
          </Text>
        </Stack>
        <Button
          w={50}
          h={50}
          ai={'center'}
          jc={'center'}
          bg={colors.transparent}
          onPress={() => copyChavePix()}
          pressStyle={{
            scale: 0.97,
            bg: colors.transparent,
          }}
        >
          <Copy size={23} color={colors.gray} />
        </Button>
      </HStack>
      <Stack gap={10}>
        <Text h4 center>
          Basta copiar a chave pix acima ou escanear o QR Code e fazer sua
          doação.
        </Text>
        <Text h4 center>
          Obrigado pela apoio!
        </Text>
      </Stack>
    </Stack>
  )
}

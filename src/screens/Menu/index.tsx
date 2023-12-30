import React, { MutableRefObject } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Modal, { ModalRef } from '@/components/ui/Modal'
import { Stack } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'
import { ListButton } from '@/components/ui/ListButton'
import { useRouter } from 'expo-router'

type ModalProps = {
  aboutOnPress: () => void
  aparenceOnPress: () => void
}

const isRefObject = (ref: any): ref is MutableRefObject<ModalRef | null> => {
  return ref && typeof ref === 'object' && 'current' in ref
}

const Menu = React.forwardRef<ModalRef, ModalProps>(
  ({ aboutOnPress, aparenceOnPress }, ref) => {
    const { bottom } = useSafeAreaInsets()
    const router = useRouter()

    const snapPoints = React.useMemo(() => ['100%'], [])

    const goToMatchHistory = () => {
      if (isRefObject(ref)) {
        ref.current?.dismiss()
      }
      router.push('/match-history')
    }

    return (
      <Modal ref={ref} enableDynamicSizing snapPoints={snapPoints}>
        <Stack br={8} m={20} mb={bottom + 20} gap={20}>
          <Text semibold center h3>
            Configurações
          </Text>
          <Stack gap={2}>
            <ListButton first onPress={goToMatchHistory}>
              <ListButton.ExpoIcon library="Ionicons" name="trophy-outline" />
              <ListButton.Text>Últimas Partidas</ListButton.Text>
            </ListButton>
            <ListButton last onPress={aparenceOnPress}>
              <ListButton.ExpoIcon library="Ionicons" name="contrast" />
              <ListButton.Text>Trocar o tema</ListButton.Text>
              <ListButton.Text textAlign="right">Escuro</ListButton.Text>
            </ListButton>
          </Stack>

          <Stack gap={2}>
            <ListButton first onPress={aboutOnPress}>
              <ListButton.Icon name="Game" />
              <ListButton.Text>Sobre o jogo</ListButton.Text>
            </ListButton>
            <ListButton last disabled>
              <ListButton.Text>Versão</ListButton.Text>
              <ListButton.Text textAlign="right">v3.0.0</ListButton.Text>
            </ListButton>
          </Stack>
        </Stack>
      </Modal>
    )
  },
)

export default Menu

import React from 'react'
import { Stack } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useThemeStore from '@/store/useThemeStore'
import { ListButton } from './ui/ListButton'
import { Separator } from './ui/Separator'
import { Text } from './ui/Text'
import { Moon, Sun, Trophy, Gamepad2 } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'

type Props = {
  AboutOnPress: () => void
}

export default function Menu({ AboutOnPress }: Props) {
  const { bottom } = useSafeAreaInsets()
  const { toggleTheme, theme } = useThemeStore()
  const router = useRouter()

  return (
    <Stack br={8} m={20} mb={bottom + 20} gap={20}>
      <Text semibold center h3>
        Configurações
      </Text>
      <Stack gap={-1}>
        <ListButton first onPress={() => router.push('/match-history')}>
          <Trophy size={21} color="$textColor" />
          <ListButton.Text>Últimas Partidas</ListButton.Text>
        </ListButton>
        <Separator horizontal />
        <ListButton last onPress={toggleTheme}>
          {theme === 'dark' ? (
            <Moon size={21} color="$textColor" />
          ) : (
            <Sun size={21} color="$textColor" />
          )}
          <ListButton.Text>Trocar o tema</ListButton.Text>
          <ListButton.Text textAlign="right">
            {theme === 'dark' ? 'Escuro' : 'Claro'}
          </ListButton.Text>
        </ListButton>
      </Stack>

      <Stack gap={-1}>
        <ListButton first onPress={AboutOnPress}>
          <Gamepad2 size={21} color="$textColor" />
          <ListButton.Text>Sobre o jogo</ListButton.Text>
        </ListButton>
        <Separator horizontal />
        <ListButton last disabled>
          <ListButton.Text>Versão</ListButton.Text>
          <ListButton.Text textAlign="right">v3.0.0</ListButton.Text>
        </ListButton>
      </Stack>
    </Stack>
  )
}

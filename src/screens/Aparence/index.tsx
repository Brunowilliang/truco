import React, { MutableRefObject } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Modal, { ModalRef } from '@/components/ui/Modal'
import { Stack } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'
import { ListButton } from '@/components/ui/ListButton'
import switchTheme from 'react-native-theme-switch-animation'
import useThemeStore, { ThemesProps, themes } from '@/store/useThemeStore'
import { IconLibraryNames } from '@/components/ui/ExpoIcon'

const isRefObject = (ref: any): ref is MutableRefObject<ModalRef | null> => {
  return ref && typeof ref === 'object' && 'current' in ref
}

const ThemeIcon = ({ theme, currentTheme }: any) => {
  let iconName: string
  let iconLibrary: IconLibraryNames

  switch (theme) {
    case 'light':
      iconLibrary = 'Feather'
      iconName = 'sun'
      break
    case 'dark':
      iconLibrary = 'Feather'
      iconName = 'moon'
      break
    case 'system':
      iconLibrary = 'Ionicons'
      iconName = 'phone-portrait-sharp'
      break
    default:
      iconLibrary = 'AntDesign'
      iconName = 'question'
  }

  return (
    <ListButton.ExpoIcon
      library={iconLibrary}
      name={iconName}
      color={theme === currentTheme ? '$primary' : '$textPrimary'}
    />
  )
}

const Aparence = React.forwardRef<ModalRef>((_, ref) => {
  const { bottom } = useSafeAreaInsets()
  const snapPoints = React.useMemo(() => ['100%'], [])
  const { selectTheme, currentTheme } = useThemeStore()

  const toogleTheme = (theme: ThemesProps) => {
    if (currentTheme === theme) return
    switchTheme({
      switchThemeFunction: () => {
        selectTheme(theme)
      },
      animationConfig: {
        type: 'circular',
        duration: 900,
        startingPoint: {
          cxRatio: 1,
          cyRatio: 0,
        },
      },
    })
  }

  return (
    <Modal ref={ref} enableDynamicSizing snapPoints={snapPoints}>
      <Stack br={8} m={20} mb={bottom + 20} gap={20}>
        <Text semibold center h3>
          Selecione o tema
        </Text>
        <Stack gap={2}>
          {themes.map((theme) => {
            return (
              <ListButton
                key={theme}
                first={theme === themes[0]}
                last={theme === themes[themes.length - 1]}
                onPress={() => toogleTheme(theme)}
              >
                <ThemeIcon theme={theme} currentTheme={currentTheme} />
                <ListButton.Text
                  color={theme === currentTheme ? '$primary' : '$textPrimary'}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </ListButton.Text>
              </ListButton>
            )
          })}
        </Stack>
      </Stack>
    </Modal>
  )
})

export default Aparence

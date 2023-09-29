import { TamaguiProvider, Theme, Stack, ThemeProps } from 'tamagui'
import config from 'tamagui.config'
import React, { ReactNode } from 'react'

interface ThemeConfigProps {
  children: ReactNode
  theme: ThemeProps['name']
}

const ThemeConfig = ({ children, theme }: ThemeConfigProps) => {
  return (
    <TamaguiProvider config={config}>
      <Theme name={theme}>
        <Stack f={1} bg={'$background'}>
          <Stack
            f={1}
            key={theme}
            animation={'theme'}
            enterStyle={{
              opacity: 0,
              y: -10,
            }}
            exitStyle={{
              opacity: 0,
              y: 10,
            }}
          >
            {children}
          </Stack>
        </Stack>
      </Theme>
    </TamaguiProvider>
  )
}

export default ThemeConfig

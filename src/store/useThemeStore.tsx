import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const themes = ['light', 'dark', 'system'] as const
export type ThemesProps = (typeof themes)[number]

type ThemeState = {
  currentTheme: ThemesProps
  selectTheme: (theme: ThemesProps) => void
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: 'system',
      selectTheme: (theme: ThemesProps) => set({ currentTheme: theme }),
    }),
    {
      name: '@ContadorDeTruco/Theme',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useThemeStore

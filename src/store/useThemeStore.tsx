import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type ThemeState = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const useThemeStore = create<ThemeState>(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state: ThemeState) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ) as any,
)

export default useThemeStore

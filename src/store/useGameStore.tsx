import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type Game = {
  teamA: string
  teamB: string
  scoreA: number
  scoreB: number
  winner: string
  createdAt: string
}

export type GameProps = Omit<Game, 'createdAt'>

export type Store = {
  teamA: string
  teamB: string
  scoreA: number
  scoreB: number
  games: Game[]
  addGame: (game: GameProps) => void
  deleteAllGames: () => void
  resetScores: () => void
  resetInputs: () => void
}

export const useGameStore = create<Store>()(
  persist(
    (set) => ({
      teamA: '',
      teamB: '',
      scoreA: 0,
      scoreB: 0,
      games: [],
      addGame: (gameProps: GameProps) =>
        set((state: Store) => ({
          games: [
            ...state.games,
            {
              ...gameProps,
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteAllGames: () => set({ games: [] }),
      resetScores: () => set({ scoreA: 0, scoreB: 0 }),
      resetInputs: () => set({ teamA: '', teamB: '' }),
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

import { create } from 'zustand'

type Props = {
  finishedGame: boolean
  setFinishedGame: (value: boolean) => void
}

export const useScoreStore = create<Props>((set) => ({
  finishedGame: false,
  setFinishedGame: (value: boolean) => set({ finishedGame: value }),
}))

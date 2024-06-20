import { create } from 'zustand'

type ExitModaState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useExitModal = create<ExitModaState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))

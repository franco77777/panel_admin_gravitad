import { create } from 'zustand'

export interface Store {
  primary: string
  secondary: string
  bg: string
  bgDarker: string
  setPrimary: (value: string) => void
  setSecondary: (value: string) => void
  setBg: (value: string) => void
  setBgDarker: (value: string) => void
}

export const storeTheme = create<Store>((set) => ({
  primary: '',
  bg: '',
  bgDarker: '',
  secondary: '',
  setPrimary: (value) => set(() => ({ primary: value })),
  setSecondary: (value) => set(() => ({ secondary: value })),
  setBg: (value) => set(() => ({ bg: value })),
  setBgDarker: (value) => set(() => ({ bgDarker: value })),
}))

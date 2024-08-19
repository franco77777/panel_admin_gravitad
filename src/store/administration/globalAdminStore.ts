import { create } from 'zustand'

export interface GlobalAdminStore {
  idCode: number | null
  idFile: number | null
  setIdCode: (value: number) => void
  setIdFile: (value: number) => void
}

export const globalAdminStore = create<GlobalAdminStore>((set) => ({
  idCode: null,
  idFile: null,
  setIdCode: (value) => set(() => ({ idCode: value })),
  setIdFile: (value) => set(() => ({ idFile: value })),
}))

import { create } from 'zustand'

export interface Store {
  name: string
  setName: (value: string) => void
}

export const storeAdministration = create<Store>((set) => ({
  name: '',
  setName: (value) => set(() => ({ name: value })),
}))

export interface Store6 {
  url: string
  setUrl: (value: string) => void
}

export const storeAdministration6 = create<Store6>((set) => ({
  url: '',
  setUrl: (value) => set(() => ({ url: value })),
}))

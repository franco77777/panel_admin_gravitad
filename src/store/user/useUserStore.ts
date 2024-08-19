import type { User } from '@/types'

export type UserState = {
  User: User | null
  Authenticated: boolean
  LoadingUser: boolean
  LoadingRefresh: boolean
  LoadingUserEdit: boolean
}

export type UserActions = {
  setUser: (user: User) => void
  setAuthenticated: (value: boolean) => void
  setLoadingUser: (value: boolean) => void
  setLoadingRefresh: (value: boolean) => void
  setLoadingUserEdit: (value: boolean) => void
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useUserStore = (set: any) => ({
  User: null,
  Authenticated: false,
  LoadingUser: false,
  LoadingRefresh: true,
  UserById: null,
  LoadingUserEdit: false,

  setLoadingUser: (value: boolean) => set({ LoadingUser: value }),
  setUser: (user: User) => set(() => ({ User: user })),
  setAuthenticated: (value: boolean) => set({ Authenticated: value }),
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setUserById: (user: any) => set(() => ({ UserById: user })),
  setLoadingUserEdit: (value: boolean) => set({ LoadingUserEdit: value }),
  setLoadingRefresh: (value: boolean) => set({ LoadingRefresh: value }),
})

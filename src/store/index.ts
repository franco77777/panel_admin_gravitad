import { useUserStore } from '@/store/user/useUserStore'
import type { User } from '@/types'
import { createWithEqualityFn } from 'zustand/traditional'

export type UserState = {
  User: User | null
  Authenticated: boolean
  LoadingUser: boolean
  LoadingRefresh: boolean
}

export type UserActions = {
  setUser: (user: User) => void
  setAuthenticated: (authenticated: boolean) => void
  setLoadingUser: (loading: boolean) => void
  setLoadingRefresh: (loading: boolean) => void
}

export const useBoundStore = createWithEqualityFn<UserState & UserActions>()((...a) => ({
  ...useUserStore(...a),
}))

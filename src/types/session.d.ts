import type { $UserType } from '@/modules/auth/enum'

export type AuthToken = {
  sessionToken: string
}

export type UserType = (typeof $UserType)[keyof typeof $UserType]

export type Session = {
  email: string
  id: string
  username: string
  fullName: string
  type: UserType
} & AuthToken

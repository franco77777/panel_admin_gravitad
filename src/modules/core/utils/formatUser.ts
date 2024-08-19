import type UserResponse from '@/mockData/users/getUserById.json'
import type { Session, UserType } from '@/types'

export function formatUserSession(data: typeof UserResponse): Session {
  const { user } = data
  const attributes = user?.attributes
  return {
    id: user?.id,
    email: attributes?.email,
    username: attributes?.username,
    fullName: attributes?.fullName,
    sessionToken: attributes?.sessionToken,
    type: attributes?.user_type as UserType,
  }
}

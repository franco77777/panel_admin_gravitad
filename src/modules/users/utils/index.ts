import type UsersResponse from '@/mockData/users/getAllUsers.json'
import type { User } from '@/types'

export const formatUsers = (users: typeof UsersResponse): User[] => {
  return users.user.map((user) => ({
    id: user.id,
    fullName: user.attributes.fullName,
    email: user.attributes.username,
    username: user.attributes.username,
    user_type: user.attributes.user_type,
  }))
}

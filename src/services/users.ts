import type { SignUp } from '@/modules/auth/types'
import { formatUserSession } from '@/modules/core/utils/formatUser'
import { formatUsers } from '@/modules/users/utils'
import { Services } from '@/services'
import type { OrderBy, Pagination, Search } from '@/types'
import { Moralis } from 'moralis-v1'

export const signUpUser = async ({ email, password, fullName, username }: SignUp) => {
  try {
    const response = await Moralis.Cloud.run(Services.auth.signUp, {
      objectData: {
        email,
        password,
        username,
        fullName,
      },
    })

    if (response.status === 'error') {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    return {
      success: 'Registro exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}

export const getUserById = async ({ id }: { id: string } & OrderBy) => {
  try {
    const response = await Moralis.Cloud.run(Services.users.getUserById, {
      userId: id,
    })

    console.log({ response })

    const data = formatUserSession(response)

    return {
      data,
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}

export const getAllUsers = async ({ q, orderBy, page }: Pagination & Search & OrderBy) => {
  try {
    const response = await Moralis.Cloud.run(Services.users.getAll, {
      q,
      orderBy,
      page,
    })

    if (response?.status === 'error') {
      return {
        error: response?.errorDetails?.message as string,
      }
    }

    const data = formatUsers(response)

    return {
      data,
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}

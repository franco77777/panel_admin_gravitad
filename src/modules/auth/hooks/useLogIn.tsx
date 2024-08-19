import { Moralis } from 'moralis-v1'
import { useState } from 'react'
import type { LogIn } from '../types'
import handleError from '@/errors'

function useLogIn() {
  const [loading, setLoading] = useState(false)

  const logIn = async ({ email, password }: LogIn) => {
    setLoading(true)

    try {
      const response = await Moralis.User.logIn(email, password)
      if (response.id) {
        return { success: 'Registro exitoso' }
      }
    } catch (error) {
      return handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    logIn,
    loading,
  }
}

export default useLogIn

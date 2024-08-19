import { Services } from '@/services'
import { Moralis } from 'moralis-v1'
import type { SignUp } from '../types'
import { useState } from 'react'
import { signUpUser } from '@/services/users'

function useSignUp() {
  const [loading, setLoading] = useState(false)

  const signUp = async ({ email, password, fullName, username }: SignUp) => {
    try {
      const result = await signUpUser({ email, password, fullName, username })

      return result
    } catch (error) {
      console.error(error)
      return {
        error: 'Ha ocurrido un error',
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    signUp,
    loading,
  }
}

export default useSignUp

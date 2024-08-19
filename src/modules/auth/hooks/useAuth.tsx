import { Routes } from '@/routes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { $SessionStatus } from '@/modules/auth/enum'
import useSession from '@/modules/core/hooks/useSession'

const useAuth = ({ redirectTo, redirect }: { redirectTo?: string; redirect?: boolean } = {}) => {
  const { user, status } = useSession()
  const navigate = useNavigate()
  // const param = useParams()

  const routes = {
    user: {
      redirectTo: Routes.user.profile,
      allowed: [Routes.user.profile as string],
    },
    admin: {
      redirectTo: Routes.admin.dashboard,
      allowed: [Routes.admin.dashboard as string],
    },
  } as const

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (status === $SessionStatus.LOADING) return

    const redirectOptions = {
      path: redirectTo || Routes.logIn,
      redirect,
    }

    if (user?.type && !routes[user.type].allowed.includes(globalThis.window.location.pathname)) {
      redirectOptions.path = routes[user?.type].redirectTo
      redirectOptions.redirect = true
    }

    if (!user?.sessionToken) {
      redirectOptions.path = Routes.logIn
      redirectOptions.redirect = true
    }

    if (redirectOptions.redirect) {
      navigate(redirectOptions.path, { replace: true })
    }
  }, [user?.sessionToken, status, redirectTo, redirect])
}

export default useAuth

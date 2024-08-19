import { useBoundStore } from '@/store/index'
import { Navigate, Outlet } from 'react-router-dom'

export default function IsLogged({ redirectPath = '/log-in' }) {
  const { Authenticated, LoadingRefresh } = useBoundStore()

  if (LoadingRefresh) {
    return null
  }

  if (!Authenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}

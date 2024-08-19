import { useBoundStore } from '@/store/index'
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminRoutes({ redirectPath = '/log-in' }) {
  const { User, Authenticated, LoadingRefresh } = useBoundStore()

  if (LoadingRefresh) {
    return null
  }

  if (!Authenticated) return <Navigate to={redirectPath} replace={true} />
  // Verificar si User existe y si tiene la propiedad userType
  if (User?.user_type && User.user_type !== 'admin') {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}

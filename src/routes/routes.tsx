import { Loader } from '@/modules/core/icons'
import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { Routes } from '.'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import { useBoundStore } from '@/store/index'
import IsLogged from './guard/isLogged'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from '@/screens/errorPage'
import logError from '@/logging'

const Home = lazy(() => import('@/screens/home'))
// Auth
const LogIn = lazy(() => import('@/screens/auth/logIn'))
const SignUp = lazy(() => import('@/screens/auth/signUp'))
// User

const NotFoundPage = lazy(() => import('@/screens/notFoundPage'))
const LoggedExampleScreen = lazy(() => import('@/screens/loggedExampleScreen'))
const ExcalidrawFiles = lazy(() => import('@/screens/excalidrawFiles'))
const ExcalidrawFilesSection = lazy(() => import('@/screens/excalidrawFilesSection'))
const ExcalidrawFiles2 = lazy(() => import('@/screens/excalidrawFiles2'))
const ExcalidrawFiles2Section = lazy(() => import('@/screens/excalidrawFiles2Section'))
const UserProfile = lazy(() => import('@/screens/user/profile'))
const Administration = lazy(() => import('@/screens/admin/administration'))
const Administration2 = lazy(() => import('@/screens/admin/administration2'))
const Administration3 = lazy(() => import('@/screens/admin/administration3'))
const Administration4 = lazy(() => import('@/screens/admin/administration4'))
const Administration6 = lazy(() => import('@/screens/admin/administration6'))
const GlobalAdmin = lazy(() => import('@/screens/admin/globalAdmin'))
const GlobalAdmin2 = lazy(() => import('@/screens/admin/globalAdmin2'))
const GlobalAdmin3 = lazy(() => import('@/screens/admin/globalAdmin3'))
const GlobalAdmin4 = lazy(() => import('@/screens/admin/globalAdmin4'))
const Canvas = lazy(() => import('@/screens/canvas'))
const FileReader = lazy(() => import('@/screens/fileReader'))
const Test = lazy(() => import('@/screens/test'))

// usar Routes de la siguiente manera: <Link to={Roues.home}>Home</Link>

export default function Navigator() {
  const { setUser, setAuthenticated, LoadingRefresh, setLoadingRefresh } = useBoundStore()
  const projectId = import.meta.env.VITE_MORALIS_APP_ID ?? ''

  useEffect(() => {
    const localStorageData = localStorage.getItem(`Parse/${projectId}/currentUser`)
    if (localStorageData) {
      setAuthenticated(true)
      const data = JSON.parse(localStorageData)
      setUser(data)
      return setLoadingRefresh(false)
    }
    setAuthenticated(false)
    return setLoadingRefresh(false)
  }, [setUser, setAuthenticated, setLoadingRefresh])

  if (LoadingRefresh) {
    return (
      <div className="grid w-full h-screen place-content-center">
        <Loader className="h-[1.5rem] w-[1.5rem]" />
      </div>
    )
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={logError}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
        console.log(details)
      }}
    >
      <Suspense
        fallback={
          <div className="grid w-full h-screen place-content-center">
            <Loader className="h-[1.5rem] w-[1.5rem]" />
          </div>
        }
      >
        <RouterRoutes>
          <Route path={Routes.fileReader} element={<FileReader />} />
          <Route path={Routes.canvas} element={<Canvas />} />
          <Route path={Routes.globalAdmin} element={<GlobalAdmin />} />
          <Route path={Routes.globalAdmin2} element={<GlobalAdmin2 />} />
          <Route path={Routes.globalAdmin3} element={<GlobalAdmin3 />} />
          <Route path={Routes.globalAdmin4} element={<GlobalAdmin4 />} />
          <Route path={Routes.test} element={<Test />} />
          <Route path={Routes.administration} element={<Administration />} />
          <Route path={Routes.administration2} element={<Administration2 />} />
          <Route path={Routes.administration3} element={<Administration3 />} />
          <Route path={Routes.administration4} element={<Administration4 />} />
          <Route path={Routes.administration6} element={<Administration6 />} />
          <Route path={Routes.user.profile} element={<UserProfile />} />
          <Route path={Routes.excalidrawFiles2Section} element={<ExcalidrawFiles2Section />} />
          <Route path={Routes.excalidrawFiles2} element={<ExcalidrawFiles2 />} />
          <Route path={Routes.excalidrawFilesSection} element={<ExcalidrawFilesSection />} />
          <Route path={Routes.excalidrawFiles} element={<ExcalidrawFiles />} />
          <Route path={Routes.signUp} element={<SignUp />} />

          <Route element={<AppLayout />}>
            <Route path={Routes.home} element={<Home />} />
            <Route path={Routes.user.profile} element={<UserProfile />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path={Routes.logIn} element={<LogIn />} />
          </Route>
          <Route element={<IsLogged />}>
            <Route path={Routes.loggedExample} element={<LoggedExampleScreen />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  )
}

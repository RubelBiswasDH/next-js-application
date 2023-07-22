import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import store from '@/redux/store'
import MainLayout from '@/components/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const unprotectedRoutes = [
    '/login', 
    '/registration'
  ]

  return (
    <Provider store={ store }>
      { unprotectedRoutes.includes(router?.pathname)
        ?
        <Component { ...pageProps } />
        :
        <MainLayout>
          <Component { ...pageProps } />
        </MainLayout>
      }
    </Provider>
  )
}

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '../context/AuthContext'
import { CarProvider } from '../context/CarContext'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CarProvider>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </CarProvider>
    </AuthProvider>
  )
}

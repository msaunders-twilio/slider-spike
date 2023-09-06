import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Theme} from '@twilio-paste/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme.Provider theme="evergreen">
      <Component {...pageProps} />
    </Theme.Provider>
  )
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
        <link rel={'Shortcut icon'} href={'https://mageguildwars.pl/images/revolution/favicon.ico'} />
      </Head>
      <MantineProvider
        theme={{
          colors: {
            mgw: ['#301e38', '#301e38', '#301e38', '#301e38', '#301e38', '#301e38', '#301e38', '#301e38', '#301e38', '#301e38'],
          },
          primaryColor: 'mgw',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </Fragment>
  )
}

export default MyApp

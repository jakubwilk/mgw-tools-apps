import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const getInitialProps = createGetInitialProps()

class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head>
          <link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
          <link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={''} />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&amp;family=Poppins:ital,wght@0,200;0,400;0,600;1,400;1,600&amp;display=swap'
            }
            rel={'stylesheet'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document

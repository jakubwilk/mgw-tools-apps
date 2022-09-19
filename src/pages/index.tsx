import Head from 'next/head'
import { HomePage } from '../components/home'
import { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <Head>
        <title>{'Mage Guild Wars - Centrum aplikacji'}</title>
        <meta
          name={'description'}
          content={'Centrum aplikacji wchodzących w skład Mage Guild Wars upraszczające i umilające rozgrywkę na forum'}
        />
      </Head>
      <HomePage />
    </Fragment>
  )
}

export default Home

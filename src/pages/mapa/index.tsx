import { Fragment } from 'react'
import Head from 'next/head'
import { MapsPage } from '../../components/maps'

function Maps() {
  return (
    <Fragment>
      <Head>
        <title>{'Mage Guild Wars - Mapa świata'}</title>
        <meta
          name={'description'}
          content={
            'Mapa świata Mage Guild Wars przedstawiająca tereny należące do królestw oraz ziemie podbitę przez latające bestwie, które czekają na wyzwolenie'
          }
        />
      </Head>
      <MapsPage />
    </Fragment>
  )
}

export default Maps

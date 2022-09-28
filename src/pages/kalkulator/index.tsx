import { Fragment } from 'react'
import Head from 'next/head'
import { CalculatorPage } from '../../components/calculator'

function Calculator() {
  return (
    <Fragment>
      <Head>
        <title>{'Mage Guild Wars - Kalkulator statystyk'}</title>
        <meta
          name={'description'}
          content={'Specjalny kalkulator do obliczania kosztów zakupu statystyk w zależności od przedziału w jakim się znajdują'}
        />
      </Head>
      <CalculatorPage />
    </Fragment>
  )
}

export default Calculator

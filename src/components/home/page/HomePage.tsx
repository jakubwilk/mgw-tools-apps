import { DataLoader } from '../../common/ui'
import { useHomeNavigation } from '../hooks'
import { HomeNavGrid } from '../ui'
import { Fragment } from 'react'
import Layout from '../../common/ui/Layout'

function HomePage() {
  const { data, isLoading } = useHomeNavigation()

  return (
    <Layout>
      <Fragment>{isLoading ? <DataLoader /> : <HomeNavGrid data={data} />}</Fragment>
    </Layout>
  )
}

export default HomePage

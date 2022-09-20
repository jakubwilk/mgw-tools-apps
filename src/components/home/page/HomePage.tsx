import { clsx, createStyles } from '@mantine/core'
import { Content, DataLoader, Header } from '../../common/ui'
import { useHomeNavigation } from '../hooks'
import { HomeNavGrid } from '../ui'

const useStyles = createStyles(() => ({
  body: {
    backgroundColor: '#100011',
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: '30vh auto',
  },
}))

function HomePage() {
  const { classes } = useStyles()
  const { data, isLoading } = useHomeNavigation()

  return (
    <main className={clsx(classes.body, 'min-h-screen h-full')}>
      <div className={'container mx-auto'}>
        <div className={clsx(classes.wrapper, 'min-h-screen h-full')}>
          <Header />
          <Content>{isLoading ? <DataLoader /> : <HomeNavGrid data={data} />}</Content>
        </div>
      </div>
    </main>
  )
}

export default HomePage

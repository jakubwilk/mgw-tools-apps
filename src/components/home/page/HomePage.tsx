import { clsx, createStyles } from '@mantine/core'
import { Content, Header } from '../../common/ui'

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

  return (
    <main className={clsx(classes.body, 'min-h-screen h-full')}>
      <div className={'container mx-auto'}>
        <div className={clsx(classes.wrapper, 'min-h-screen h-full')}>
          <Header />
          <Content>
            <div>{'body'}</div>
          </Content>
        </div>
      </div>
    </main>
  )
}

export default HomePage

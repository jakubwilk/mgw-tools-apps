import { ReactNode } from 'react'
import { clsx, createStyles } from '@mantine/core'
import { Content, Header } from './index'

const useStyles = createStyles(() => ({
  body: {
    backgroundColor: '#100011',
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: '30vh auto',
  },
}))

interface IProps {
  children: ReactNode | ReactNode[]
}

function Layout({ children }: IProps) {
  const { classes } = useStyles()

  return (
    <main className={clsx(classes.body, 'min-h-screen h-full')}>
      <div className={'container max-w-[1080px] mx-auto'}>
        <div className={clsx(classes.wrapper, 'min-h-screen h-full')}>
          <Header />
          <Content>{children}</Content>
        </div>
      </div>
    </main>
  )
}

export default Layout

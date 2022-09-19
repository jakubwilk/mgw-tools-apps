import { ReactNode } from 'react'
import { clsx, createStyles } from '@mantine/core'

interface IProps {
  children: ReactNode
}

const useStyles = createStyles(() => ({
  content: {
    backgroundColor: 'white',
  },
}))

function Content({ children }: IProps) {
  const { classes } = useStyles()

  return <section className={clsx(classes.content, 'rounded-t-md', 'mx-4', 'p-4 md:p-8')}>{children}</section>
}

export default Content

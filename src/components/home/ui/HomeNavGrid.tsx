import { IHomeNavigation } from '../../../models'
import Link from 'next/link'
import { clsx, createStyles } from '@mantine/core'

interface IProps {
  data: IHomeNavigation[]
}

const useStyles = createStyles(() => ({
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    transition: 'background-color .1s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
  },
  title: {
    fontFamily: 'Merriweather, serif',
    color: '#e7e7e7',
    fontSize: '2rem',
    fontWeight: 400,
  },
  text: {
    color: '#c1c1c1',
    fontSize: '1rem',
    lineHeight: '24px',
  },
}))

function HomeNavGrid({ data }: IProps) {
  const { classes } = useStyles()

  if (!data.length) {
    return <div />
  }

  return (
    <div className={'grid gap-8 grid-cols-1 md:grid-cols-2 grid-rows-[auto]'}>
      {data.map((panel) => (
        <Link key={panel.id} href={panel.url}>
          <article
            className={'md:min-h-[250px] rounded overflow-hidden'}
            style={{
              background: `url(${panel.backgroundImage}) center no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <div className={clsx(classes.content, 'flex flex-col justify-end', 'p-8')}>
              <h3 className={clsx(classes.title, 'mb-4 md:mt-16')}>{panel.name}</h3>
              <p className={classes.text}>{panel.description}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default HomeNavGrid

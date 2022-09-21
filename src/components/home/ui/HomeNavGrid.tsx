import { IHomeNavigation } from '../../../models'
import Link from 'next/link'
import { clsx, createStyles } from '@mantine/core'
import { Fragment } from 'react'

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
  contentDisabled: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  headerTitle: {
    fontSize: '1.7rem',

    '& > span': {
      color: '#583270',
    },
  },
  headerText: {
    color: '#2b2b2b;',
    fontSize: '1rem',
    lineHeight: '24px',
  },
  linkDisabled: {
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  title: {
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
    <Fragment>
      <header className={'flex flex-col items-center w-full mb-8'}>
        <h2 className={clsx(classes.headerTitle, 'mb-2')}>
          {'Dodatki '}
          <span>{'Mage Guild Wars'}</span>
        </h2>
        <p className={classes.headerText}>{'Centrum aplikacji i narzędzi pomocnicznych dla forum Mage Guild Wars'}</p>
      </header>
      <div className={'grid gap-8 grid-cols-1 md:grid-cols-2 grid-rows-[auto]'}>
        {data.map((panel) => (
          <Link key={panel.id} href={panel.url} className={panel.isDisabled ? classes.linkDisabled : ''}>
            <article
              className={'md:min-h-[300px] rounded overflow-hidden'}
              style={{
                background: `url(${panel.backgroundImage}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            >
              <div className={clsx(panel.isDisabled ? classes.contentDisabled : classes.content, 'flex flex-col justify-end', 'p-8')}>
                <h3 className={clsx(classes.title, 'mb-4 md:mt-16')}>{panel.name}</h3>
                <p className={classes.text}>{panel.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Fragment>
  )
}

export default HomeNavGrid

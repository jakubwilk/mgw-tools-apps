import { Button, clsx, createStyles, Grid, Tooltip } from '@mantine/core'
import Link from 'next/link'
import Layout from '../../common/ui/Layout'

const useStyles = createStyles((theme) => ({
  headerTitle: {
    fontSize: '1.7rem',
  },
  headerText: {
    color: '#2b2b2b;',
    fontSize: '1rem',
    lineHeight: '24px',
  },
  linkToImage: {
    textDecoration: 'none',
    color: '#2b2b2b',
    opacity: '.6',
    transition: 'opacity .1s ease-in-out',

    '&:hover, &:focus': {
      opacity: '1',
    },
  },
  link: {
    color: 'white',
    transition: 'all .1s ease-in-out',

    '&:hover, &:focus': {
      color: theme.colors.mgw[9],
      backgroundColor: 'transparent',
    },
  },
}))

function MapsPage() {
  const { classes } = useStyles()

  return (
    <Layout>
      <div className={clsx('h-full', 'flex flex-col justify-between items-center')}>
        <div className={'h-full w-full mb-8'}>
          <header className={'text-center mb-12'}>
            <h2 className={clsx(classes.headerTitle, 'mb-2')}>{'Mapa świata'}</h2>
            <p className={classes.headerText}>
              {
                'Polityczna mapa świata Mage Guild Wars przedstawiająca tereny królestw razem z dokładnymi granicami oraz ziemie opanowane przez smoki'
              }
            </p>
          </header>
          <Grid gutter={'xl'}>
            <Grid.Col xs={12}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={'w-full'} src={'https://i.imgur.com/BTfgrAr.jpg'} alt={'Mapa świata Mage Guild Wars'} />
              <footer className={'mt-4 text-center w-full'}>
                <a className={classes.linkToImage} href={'https://i.imgur.com/BTfgrAr.jpg'} target={'_blank'} rel={'noreferrer'}>
                  {'Kliknij tutaj, by otworzyć obraz w pełnej rozdzielczości'}
                </a>
              </footer>
            </Grid.Col>
          </Grid>
        </div>
        <Link href={'/'} passHref>
          <Tooltip label={'Powrót do strony głównej'} withArrow>
            <Button component={'a'} className={clsx(classes.link, 'px-4 py-2')}>
              {'Wstecz'}
            </Button>
          </Tooltip>
        </Link>
      </div>
    </Layout>
  )
}

export default MapsPage

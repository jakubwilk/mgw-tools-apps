import Layout from '../../common/ui/Layout'
import Link from 'next/link'
import { Button, clsx, createStyles, Grid, Tooltip } from '@mantine/core'
import { SingleCalculator } from '../ui'
import { useCalculatorItemsDefinition } from '../hooks'

const useStyles = createStyles((theme) => ({
  headerTitle: {
    fontSize: '1.7rem',
  },
  headerText: {
    color: '#2b2b2b;',
    fontSize: '1rem',
    lineHeight: '24px',
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

function CalculatorPage() {
  const { classes } = useStyles()
  const { statistics } = useCalculatorItemsDefinition()

  return (
    <Layout>
      <div className={clsx('h-full', 'flex flex-col justify-between items-center')}>
        <div className={'h-full w-full mb-8'}>
          <header className={'text-center mb-12'}>
            <h2 className={clsx(classes.headerTitle, 'mb-2')}>{'Kalkulator statystyk'}</h2>
            <p className={classes.headerText}>{'W przypadku braku podania liczb, domyślną wartością będzie cyfra 1'}</p>
          </header>
          <Grid gutter={'xl'}>
            {statistics.map(({ title, startValue, endValue }) => (
              <Grid.Col key={title} md={6} lg={4}>
                <SingleCalculator
                  title={title}
                  startValue={{
                    label: startValue.label,
                    placeholder: startValue.placeholder,
                    name: startValue.name,
                  }}
                  endValue={{
                    label: endValue.label,
                    placeholder: endValue.placeholder,
                    name: endValue.name,
                  }}
                />
              </Grid.Col>
            ))}
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

export default CalculatorPage

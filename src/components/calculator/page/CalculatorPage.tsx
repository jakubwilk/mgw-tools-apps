import Layout from '../../common/ui/Layout'
import Link from 'next/link'
import { Button, clsx, createStyles, Tooltip } from '@mantine/core'
import { SingleCalculator } from '../ui'

const useStyles = createStyles((theme) => ({
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

  return (
    <Layout>
      <div className={clsx('h-full', 'flex flex-col justify-between items-center')}>
        <p>{'W przypadku braku podania liczb, domyślną wartością będzie cyfra 1'}</p>
        <SingleCalculator
          startValue={{ label: 'Wartość początkowa', placeholder: 'Podaj początkową wartość Twojej siły' }}
          endValue={{
            label: 'Wartość końcowa',
            placeholder: 'Podaj końcową wartość Twojej siły, którą chcesz zyskać',
          }}
        />
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

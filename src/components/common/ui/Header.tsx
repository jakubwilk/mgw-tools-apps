import { clsx, createStyles, Tooltip } from '@mantine/core'

const useStyles = createStyles(() => ({
  header: {
    gridRow: '1',
  },
}))

function Header() {
  const { classes } = useStyles()

  return (
    <header className={clsx(classes.header, 'flex justify-center items-end')}>
      <h1 className={'mb-8'}>
        <Tooltip label={'Powrót na forum Mage Guild Wars'} withArrow>
          <a href={'https://mageguildwars.pl/'}>
            <img
              src={'https://mageguildwars.pl/images/revolution/logo.png'}
              alt={'Srebrny napis mage guild wars fairy tail play by forun'}
            />
          </a>
        </Tooltip>
      </h1>
    </header>
  )
}

export default Header

import { useCallback, useEffect, useState } from 'react'
import { clsx, createStyles, Divider, NumberInput, Paper } from '@mantine/core'
import { ISingleCalculatorValues } from '../models'

interface IProps {
  title: string
  startValue: ISingleCalculatorValues
  endValue: ISingleCalculatorValues
  // eslint-disable-next-line no-unused-vars
  setSingleCost: (value: number) => void
}

const useStyles = createStyles(() => ({
  title: {
    color: '#583270',
  },
}))

function SingleCalculator({ title, startValue, endValue, setSingleCost }: IProps) {
  const { classes } = useStyles()
  const [cost, setCost] = useState(0)
  const [startVal, setStartValue] = useState(0)
  const [endVal, setEndValue] = useState(0)

  const handleStartChange = useCallback((value: number | undefined) => {
    if (value && value <= 1000) {
      setStartValue(value)
    } else {
      setStartValue(0)
    }
  }, [])

  const handleEndChange = useCallback((value: number | undefined) => {
    if (value && value <= 1000) {
      setEndValue(value)
    } else {
      setEndValue(0)
    }
  }, [])

  useEffect(() => {
    let current = Number(startVal)
    let difference = Number(endVal) - current
    let points = 0

    for (let i = 0; i < difference; i++) {
      if (current < 50) {
        points += 1
      } else if (current < 100) {
        points += 2
      } else if (current < 150) {
        points += 3
      } else if (current < 200) {
        points += 4
      } else {
        points += 5
      }

      current++
    }

    setCost(points)
  }, [startVal, endVal])

  useEffect(() => {
    setSingleCost(cost)
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [cost])

  return (
    <Paper shadow={'xs'} p={'xl'} className={'h-full'} withBorder>
      <h3 className={clsx(classes.title, 'mt-0', 'text-center')}>{title}</h3>
      <NumberInput
        placeholder={startValue.placeholder}
        label={startValue.label}
        description={`Podaj początkową wartość Twojej ${startValue.name.toLowerCase()}`}
        size={'md'}
        onChange={handleStartChange}
        className={'mb-4'}
        max={1000}
        withAsterisk
        hideControls
      />
      <Divider my={'sm'} variant={'dashed'} />
      <NumberInput
        placeholder={endValue.placeholder}
        label={endValue.label}
        description={`Podaj końcową wartość statystyki ${endValue.name.toLowerCase()}, którą chcesz zyskać`}
        size={'md'}
        onChange={handleEndChange}
        max={1000}
        withAsterisk
        hideControls
      />
    </Paper>
  )
}

export default SingleCalculator

import { Fragment, useCallback, useEffect, useState } from 'react'
import { NumberInput } from '@mantine/core'

interface IProps {
  startValue: {
    label: string
    placeholder: string
  }
  endValue: {
    label: string
    placeholder: string
  }
}

function SingleCalculator({ startValue, endValue }: IProps) {
  const [cost, setCost] = useState(0)
  const [startVal, setStartValue] = useState(0)
  const [endVal, setEndValue] = useState(0)

  // 1-50 -> 1PU
  // 51-100 -> 2PU
  // 101-150 -> 3PU
  // 151-200 -> 4PU
  // 201 >= -> 5PU
  const handleStartChange = useCallback((value: number | undefined) => {
    setStartValue(value ?? 0)
  }, [])

  const handleEndChange = useCallback((value: number | undefined) => {
    setEndValue(value ?? 0)
  }, [])

  useEffect(() => {
    let difference = endVal - startVal
    let points = 0

    if (difference <= 50) {
      points = difference
      difference = difference - points
    } else if (difference <= 100) {
      points = difference * 2
      difference = difference - points / 2
    } else if (difference <= 150) {
      points = difference * 3
      difference = difference - points / 3
    } else if (difference <= 200) {
      points = difference * 4
      difference = difference - points / 4
    } else {
      points = difference * 5
      difference = difference - points / 5
    }

    setCost(points)
  }, [startVal, endVal])

  console.log('cost', cost)

  return (
    <Fragment>
      <NumberInput
        placeholder={startValue.placeholder}
        label={startValue.label}
        size={'md'}
        onChange={handleStartChange}
        withAsterisk
        hideControls
      />
      <NumberInput
        placeholder={endValue.placeholder}
        label={endValue.label}
        size={'md'}
        onChange={handleEndChange}
        withAsterisk
        hideControls
      />
    </Fragment>
  )
}

export default SingleCalculator

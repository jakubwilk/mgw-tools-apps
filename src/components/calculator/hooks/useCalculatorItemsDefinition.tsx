import { ISingleCalculatorSchema } from '../models'
import { useMemo, useState } from 'react'

function useCalculatorItemsDefinition() {
  const [str, setStr] = useState(0)
  const [dex, setDex] = useState(0)
  const [spd, setSpd] = useState(0)
  const [agi, setAgi] = useState(0)
  const [will, setWill] = useState(0)
  const [force, setForce] = useState(0)

  const cost = useMemo(() => str + dex + spd + agi + will + force, [agi, dex, force, spd, str, will])

  const statistics: Array<ISingleCalculatorSchema> = [
    {
      title: 'Siła',
      startValue: {
        label: 'Wartość początkowa',
        placeholder: '1',
        name: 'siły',
      },
      endValue: {
        label: 'Wartość końcowa',
        placeholder: 'Na przykład: 35',
        name: 'siły',
      },
      setSingleCost: setStr,
    },
    {
      title: 'Wytrzymałość',
      startValue: {
        label: 'Wartość początkowa',
        placeholder: '10',
        name: 'wytrzymałości',
      },
      endValue: {
        label: 'Wartość końcowa',
        placeholder: 'Na przykład: 50',
        name: 'wytrzymałości',
      },
      setSingleCost: setDex,
    },
    {
      title: 'Szybkość',
      startValue: {
        label: 'Wartość początkowa',
        placeholder: '15',
        name: 'szybkości',
      },
      endValue: {
        label: 'Wartość końcowa',
        placeholder: 'Na przykład: 120',
        name: 'szybkości',
      },
      setSingleCost: setSpd,
    },
    {
      title: 'Reakcje',
      startValue: {
        label: 'Wartość początkowa',
        placeholder: '5',
        name: 'reakcji',
      },
      endValue: {
        label: 'Wartość końcowa',
        placeholder: 'Na przykład: 200',
        name: 'reakcji',
      },
      setSingleCost: setAgi,
    },
    {
      title: 'Koncentracja',
      startValue: {
        label: 'Wartość początkowa',
        placeholder: '50',
        name: 'koncentracji',
      },
      endValue: {
        label: 'Wartość końcowa',
        placeholder: 'Na przykład: 125',
        name: 'koncentracja',
      },
      setSingleCost: setWill,
    },
    {
      title: 'Kontrola energii magicznej',
      startValue: {
        label: 'Wartość początkowa',
        placeholder: '100',
        name: 'kontroli energii magicznej',
      },
      endValue: {
        label: 'Wartość końcowa',
        placeholder: 'Na przykład: 300',
        name: 'kontrola energii magicznej',
      },
      setSingleCost: setForce,
    },
  ]

  return { cost, statistics }
}

export default useCalculatorItemsDefinition

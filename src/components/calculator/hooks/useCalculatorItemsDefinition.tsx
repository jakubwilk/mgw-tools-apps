import { ISingleCalculatorSchema } from '../models'

function useCalculatorItemsDefinition() {
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
    },
  ]

  return { statistics }
}

export default useCalculatorItemsDefinition

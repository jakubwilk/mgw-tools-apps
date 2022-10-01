export interface ISingleCalculatorValues {
  label: string
  placeholder: string
  name: string
}

export interface ISingleCalculatorSchema {
  title: string
  startValue: ISingleCalculatorValues
  endValue: ISingleCalculatorValues
}

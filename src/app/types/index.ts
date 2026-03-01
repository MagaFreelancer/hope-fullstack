export interface IFilterCheckbox {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (value: boolean | string) => void
  checked?: boolean
  name?: string
}

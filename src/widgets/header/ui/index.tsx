import { cn } from '@shared/lib/utils'

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn('', className)}>
      <h1>Header</h1>
    </header>
  )
}

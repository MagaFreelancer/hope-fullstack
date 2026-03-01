import { cn } from '@shared/lib/utils'
import * as UI from '@shared/ui'

interface Props {
  className?: string
}

export const FiltersSlider = ({ className }: Props) => {
  return (
    <div className={cn('', className)}>
      <p className='font-bold mb-3'>Цена от и до:</p>
      <div className='flex gap-3 mb-5'>
        <UI.Input
          type='number'
          placeholder='0'
          min={0}
          max={30000}
          defaultValue={0}
        />
        <UI.Input type='number' min={100} max={30000} placeholder='30000' />
      </div>
      <UI.Slider
        min={0}
        max={30000}
        defaultValue={[25, 50]}
        step={5}
        className='mx-auto w-full max-w-xs'
      />
    </div>
  )
}

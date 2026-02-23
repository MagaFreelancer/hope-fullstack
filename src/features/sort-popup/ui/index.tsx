import React from 'react'
import { ArrowUpDown } from 'lucide-react'
import { cn } from '@shared/lib/utils'
import * as UI from '@shared/ui/popover'

interface Props {
  className?: string
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <UI.Popover>
      <UI.PopoverTrigger asChild>
        <div
          className={cn(
            'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
            className,
          )}
        >
          <ArrowUpDown className='w-4 h-4' />
          <b>Сортировка:</b>

          <b className='text-primary'>популярное</b>
        </div>
      </UI.PopoverTrigger>
      <UI.PopoverContent className='w-[240px]'>
        <ul>
          <li className='hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md'>
            Сначала популярное
          </li>
          <li className='hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md'>
            Сначала недорогие
          </li>
          <li className='hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md'>
            Сначала дорогие
          </li>
          <li className='hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md'>
            С лучшей оценкой
          </li>
        </ul>
      </UI.PopoverContent>
    </UI.Popover>
  )
}

import { CheckboxFiltersGroup } from './filters-checkbox-group'
import { cn } from '@shared/lib/utils'
import { FiltersSlider } from './filters-slider'
interface Props {
  className?: string
}
const items = [
  {
    text: 'Сырный соус',
    value: '1',
  },
  {
    text: 'Моццарелла',
    value: '2',
  },
  {
    text: 'Пепперони',
    value: '3',
  },
  {
    text: 'Грибы',
    value: '4',
  },
  {
    text: 'Ветчина',
    value: '5',
  },
  {
    text: 'Ананасы',
    value: '6',
  },
  {
    text: 'Оливки',
    value: '7',
  },
]
export const Filters: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={cn('', className)}>
      <div className='flex flex-col gap-4'>
        <CheckboxFiltersGroup title='Тип пиццы' items={items} />
        {/* <CheckboxFiltersGroup  defaultItems={
                    [
                        {
                            text: 'Сырный соус',
                            value: '1'
                        },
                        {
                            text: 'Моццарелла',
                            value: '2'
                        }
                    ]
                } /> */}
      </div>

      <FiltersSlider className='mt-5 border-y border-y-neutral-100 py-6 pb-7' />
    </div>
  )
}

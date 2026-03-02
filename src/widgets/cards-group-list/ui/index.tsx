import { Title } from '@shared/ui'
import { cn } from '@shared/lib/utils'
import { Card } from '@/src/entities/card'
interface Props {
  className?: string
  title: string
  items: any[]
  listClassName?: string
  categoryId?: number
}

export const CardsGroupList = ({
  className,
  title,
  items,
  listClassName,
}: Props) => {
  return (
    <div className={cn('', className)}>
      <Title text={title} className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item: any) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.items[0].price}
            imageUrl={item.imageUrl}
            className='w-full'
          />
        ))}
      </div>
    </div>
  )
}

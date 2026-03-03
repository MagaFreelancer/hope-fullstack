'use client'

import { Title } from '@shared/ui'
import { cn } from '@shared/lib/utils'
import { Card } from '@/src/entities/card'
import { useIntersection } from 'react-use'
import React from 'react'
import { useCategoryStore } from '../model/category'
interface Props {
  className?: string
  title: string
  items: any[]
  listClassName?: string
  categoryId: number
}

export const CardsGroupList = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}: Props) => {
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
  const intersectionRef = React.useRef(null)
  //@ts-ignore
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [intersection, setActiveCategoryId, categoryId])

  return (
    <div className={cn('', className)} id={title} ref={intersectionRef}>
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

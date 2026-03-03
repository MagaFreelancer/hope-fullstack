import { Filters } from '@widgets/filters/ui'
import * as UI from '@shared/ui'
import { TopBar } from '@widgets/top-bar'
import { CardsGroupList } from '@/src/widgets/cards-group-list'

const items = [
  {
    id: 1,
    name: 'Пепперони',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/019a897c5ea574b889475bd98412de7b.avif',
    items: [
      {
        price: 395,
      },
    ],
  },
  {
    id: 2,
    name: 'Маргарита',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif',
    items: [
      {
        price: 345,
      },
    ],
  },
  {
    id: 3,
    name: 'Гавайская',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif',
    items: [
      {
        price: 375,
      },
    ],
  },
]
export default function Home() {
  return (
    <div>
      <TopBar />

      <UI.Container className='py-10'>
        <div className='flex gap-10'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <CardsGroupList title='Пиццы' items={items} categoryId={1} />
              <CardsGroupList title='Комбо' items={items} categoryId={2} />
              <CardsGroupList title='Закуски' items={items} categoryId={3} />
            </div>
          </div>
        </div>
      </UI.Container>
    </div>
  )
}

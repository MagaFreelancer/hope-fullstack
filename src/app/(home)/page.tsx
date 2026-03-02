import { Filters } from '@widgets/filters/ui'
import * as UI from '@shared/ui'
import { TopBar } from '@widgets/top-bar'
import { CardsGroupList } from '@/src/widgets/cards-group-list'

const items = [
  {
    id: 1,
    name: 'Пепперони',
    imageUrl:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a7580507507.jpg',
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
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/4a668c6e-733f-4a1b-9cfd-0c8e9e7680c8.jpg',
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
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5c8e9e86-1a1b-4d9c-8e0f-2bdeeeae5a87.jpg',
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

          <div>
            <CardsGroupList title='Пицца' items={items} />
          </div>
        </div>
      </UI.Container>
    </div>
  )
}

import * as UI from '@shared/ui'
import { TopBar } from '@widgets/top-bar'

export default function Home() {
  return (
    <div>
      <UI.Container className='py-10'>
        <UI.Title text='Hello world' size='2xl' className='font-extrabold' />
        <TopBar />
      </UI.Container>

      {/* <UI.Container className='py-10'>
        <div>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div>
            Список товаров
          </div>
        </div>
      </UI.Container> */}
    </div>
  )
}

import { Filters } from '@widgets/filters/ui'
import * as UI from '@shared/ui'
import { TopBar } from '@widgets/top-bar'

export default function Home() {
  return (
    <div>
      <TopBar />

      <UI.Container className='py-10'>
        <div className='flex gap-10'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div>Список товаров</div>
        </div>
      </UI.Container>
    </div>
  )
}

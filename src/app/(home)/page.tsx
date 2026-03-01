import { Filters } from '@widgets/filters/ui'
import * as UI from '@shared/ui'
import { TopBar } from '@widgets/top-bar'
import { Card } from '@entities/card/ui'
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
            <Card
              id={1}
              name='Пепперони'
              price={599}
              imageUrl='https://media.dodostatic.net/image/r:584x584/019ac604bad37209b1ec496bbdd98560.avif'
              className='w-[300px]'
            />
          </div>
        </div>
      </UI.Container>
    </div>
  )
}

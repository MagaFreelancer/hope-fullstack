import * as UI from '@shared/ui'
import { Categories } from '@features/categories'
import { SortPopup } from '@features/sort-popup'

export default function Home() {
  return (
    <div>
      <UI.Container className='py-10'>
        <UI.Title text='Hello world' size='2xl' />
        <div className='flex items-center justify-between'>
          <Categories />
          <SortPopup />
        </div>
      </UI.Container>
    </div>
  )
}

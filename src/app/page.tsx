import * as UI from '@shared/ui'
import { Categories } from '@features/categories/ui'

export default function Home() {
  return (
    <div>
      <UI.Container>
        <UI.Title text='Hello world' size='2xl' />
        <div>
          <Categories />
        </div>
      </UI.Container>
    </div>
  )
}

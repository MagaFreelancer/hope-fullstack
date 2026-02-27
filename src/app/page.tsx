import * as UI from '@shared/ui'
import { TopBar } from '@widgets/top-bar'

export default function Home() {
  return (
    <div>
      <UI.Container className='py-10'>
        <UI.Title text='Hello world' size='2xl' />
        <TopBar />
      </UI.Container>
    </div>
  )
}

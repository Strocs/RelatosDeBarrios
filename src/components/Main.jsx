import '../styles/Main.css'
import { Domestico } from './Domestico'
import { Proyecto } from './Proyecto'

export const Main = () => {
  return (
    <main className='main'>
      <Proyecto />
      <Domestico />
    </main>
  )
}

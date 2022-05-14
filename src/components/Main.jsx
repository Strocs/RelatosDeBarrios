import '../styles/Main.css'
import { Descubre } from './descubre/Descubre'
import { Domestico } from './domestico/Domestico'
import { Imaginario } from './imaginario/Imaginario'
import { Proyecto } from './proyecto/Proyecto'

export const Main = () => {
  return (
    <main className='main'>
      <Proyecto />
      <Domestico />
      <Imaginario />
      <Descubre />
    </main>
  )
}

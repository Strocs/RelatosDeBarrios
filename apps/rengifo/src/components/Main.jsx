import '../styles/Main.css'
import { Descubre } from './5_descubre/Descubre'
import { Domestico } from './3_domestico/Domestico'
import { Imaginario } from './4_imaginario/Imaginario'
import { Proyecto } from './2_proyecto/Proyecto'

export const Main = ({toggleGallery}) => {
  return (
    <main className='main'>
      <Proyecto />
      <Domestico toggleGallery={toggleGallery} />
      <Imaginario toggleGallery={toggleGallery} />
      <Descubre />
    </main>
  )
}

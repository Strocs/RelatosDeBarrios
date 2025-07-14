import Image from 'next/image'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='container relative w-full'>
      <NavBar />
      <section className='flex flex-col items-center justify-center pt-20'>
        <Image
          src='/images/hero-image.png'
          alt='Hero Image'
          width={3829}
          height={1693}
          sizes='640px'
          className='-mr-4 w-[40rem] mix-blend-luminosity'
        />
        <p className='text-hub-primary relative max-w-lg text-center text-2xl font-light leading-tight'>
          <i>
            Voces que construyen identidad en los barrios de la Región de
            Coquimbo.
          </i>
        </p>
      </section>
    </header>
  )
}

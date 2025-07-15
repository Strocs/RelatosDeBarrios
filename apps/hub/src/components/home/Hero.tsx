import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='mx-auto grid w-fit place-items-center pt-10'>
      <Image
        src='/images/hero-image.png'
        alt='Hero Image'
        width={3829}
        height={1693}
        sizes='640px'
        className='-mb-10 -mr-4 w-[40rem] mix-blend-luminosity'
      />
      <p className='text-hub-primary relative max-w-lg text-center text-2xl font-light leading-tight'>
        <i>
          Voces que construyen identidad en los barrios de la Región de
          Coquimbo.
        </i>
      </p>
    </section>
  )
}

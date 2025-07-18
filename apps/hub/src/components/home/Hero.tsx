import Image from 'next/image'
import { hubConfig } from '@relatos/content'

export const Hero = () => {
  return (
    <section className='mx-auto grid w-fit place-items-center pt-10'>
      <Image
        {...hubConfig.hero_img}
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
        className='w-full max-w-[40rem] mix-blend-luminosity md:-mb-10 md:-mr-4'
      />
      <p className='text-hub-primary relative max-w-lg text-center text-xl font-light leading-none md:text-2xl md:leading-tight'>
        <i>{hubConfig.description}</i>
      </p>
    </section>
  )
}

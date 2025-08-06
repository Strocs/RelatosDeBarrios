import { heroContent } from '@relatos/content/hub'
import { HeroLogo } from './HeroLogo'

export const HeroSection = () => {
  return (
    <section
      id={heroContent.id}
      className='mx-auto grid min-h-[60dvh] w-fit place-items-center pt-10'
    >
      <div>
        <HeroLogo {...heroContent.utilityImages!.logo} />
        <p className='text-hub-primary relative mx-auto max-w-lg text-center text-xl font-light leading-none md:text-2xl md:leading-tight'>
          <i>{heroContent.description}</i>
        </p>
      </div>
    </section>
  )
}

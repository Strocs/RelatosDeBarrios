import { heroContent } from '@/hub/content/hero'
import { HeroLogo } from './HeroLogo'
import { ProjectsNavigator } from './ProjectNavigator'

export const HeroSection = () => {
  return (
    <section
      id={heroContent.id}
      className='mx-auto grid min-h-[90dvh] w-fit place-items-center pt-10'
    >
      <div>
        <HeroLogo {...heroContent.utilityImages!.logo} />
        <p className='text-hub-primary relative mx-auto max-w-lg text-center text-xl leading-none font-light md:text-2xl md:leading-tight'>
          <i>{heroContent.description}</i>
        </p>
      </div>
      <ProjectsNavigator />
    </section>
  )
}

import { BarrioCard } from '@/components/sections/project/BarrioCard'
import { NewBadge } from '@/components/NewBadge'
import { projectContent } from '@relatos/content/hub'

const { rengifo, covico } = projectContent.cards!

export const ProjectsNavigator = () => {
  return (
    <section className='not-landscape:flex-col mx-auto flex w-fit gap-4 landscape:gap-20'>
      <BarrioCard
        href={rengifo.href!}
        title={rengifo.title}
        videoSrc={rengifo.bg.src}
      />
      <BarrioCard
        href={covico.href!}
        title={covico.title}
        badge={<NewBadge />}
        disabled
      />
    </section>
  )
}

import { BarrioCard } from './BarrioCard'
import { NewBadge } from '@/hub/components/NewBadge'
import { projectContent } from '@/hub/content/project'

const { rengifo, covico } = projectContent.cards!

export const ProjectsNavigator = () => {
  return (
    <section className='mx-auto flex w-fit gap-4 not-landscape:flex-col landscape:gap-20'>
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

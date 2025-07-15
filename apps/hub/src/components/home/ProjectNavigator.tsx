import { BarrioCard } from '@/components/home/BarrioCard'
import { NewBadge } from '@/components/NewBadge'
import data from '@relatos/config/config.json'

export const ProjectsNavigator = () => {
  return (
    <section className='mx-auto flex w-fit gap-20'>
      <BarrioCard
        href={'/'}
        title={data.projects.rengifo.name}
        imageSrc='/images/rengifo-image.png'
      />
      <BarrioCard
        href={'/'}
        title={data.projects.covico.name}
        badge={<NewBadge />}
      />
    </section>
  )
}

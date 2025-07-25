import { BarrioCard } from '@/components/home/BarrioCard'
import { NewBadge } from '@/components/NewBadge'
import { brandConfig } from '@relatos/content/core'
import { hubConfig } from '@relatos/content/hub'

const { rengifo, covico } = hubConfig.projects

const { rengifoUrl, covicoUrl } = {
  rengifoUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3002'
      : brandConfig.paths.rengifo,
  covicoUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : brandConfig.paths.covico,
}

export const ProjectsNavigator = () => {
  return (
    <section className='not-landscape:flex-col mx-auto flex w-fit gap-4 landscape:gap-20'>
      <BarrioCard
        href={rengifoUrl}
        title={rengifo.name}
        videoSrc={rengifo.teaser.src}
      />
      <BarrioCard
        href={covicoUrl}
        title={covico.name}
        badge={<NewBadge />}
        disabled
      />
    </section>
  )
}

import { BarrioCard } from '@/components/home/BarrioCard'
import { NewBadge } from '@/components/NewBadge'
import { brandConfig, projectsConfig } from '@relatos/content'

const { rengifo, covico } = projectsConfig

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
        videoSrc='/videos/rengifo-teaser.mp4'
      />
      <BarrioCard href={covicoUrl} title={covico.name} badge={<NewBadge />} />
    </section>
  )
}

import { Title } from '@/hub/components/ui/Title'
import { teamContent } from '@/hub/content/team'
import { TeamList } from './TeamList'

export const TeamSection = () => {
  return (
    <article
      id={teamContent.id}
      className='flex min-h-screen w-full flex-col items-center justify-center py-14'
    >
      <Title>{teamContent.title}</Title>
      <TeamList />
    </article>
  )
}

import { Title } from '@/hub/components/ui/Title'
import { teamContent } from '@/hub/content/team'

export const TeamSection = () => {
  return (
    <article id={teamContent.id} className='flex flex-col py-10'>
      <Title>{teamContent.title}</Title>
      <section></section>
    </article>
  )
}

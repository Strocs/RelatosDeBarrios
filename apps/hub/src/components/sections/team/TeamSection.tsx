import { Title } from '@/components/ui/Title'
import { teamContent } from '@relatos/content/hub'

export const TeamSection = () => {
  return (
    <article id={teamContent.id} className='flex flex-col py-10'>
      <Title>{teamContent.title}</Title>
      <section></section>
    </article>
  )
}

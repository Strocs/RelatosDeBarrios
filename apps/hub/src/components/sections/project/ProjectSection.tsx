import Markdown from 'react-markdown'
import { ProjectsNavigator } from './ProjectNavigator'
import { projectContent } from '@relatos/content/hub'
import { Title } from '@/components/ui/Title'

export const ProjectSection = () => {
  return (
    <section id={projectContent.id} className='container flex flex-col py-10'>
      <ProjectsNavigator />
      <article className='space-y-10 pt-10'>
        <Title>{projectContent.title}</Title>
        <div className='text-hub-primary mx-auto max-w-prose space-y-8 px-4 py-2'>
          <Markdown>{projectContent.description}</Markdown>
        </div>
      </article>
    </section>
  )
}

import Markdown from 'react-markdown'
import { projectContent } from '@/hub/content/project'
import { Title } from '@/hub/components/ui/Title'

export const ProjectSection = () => {
  return (
    <section
      id={projectContent.id}
      className='container flex min-h-screen flex-col items-center justify-center'
    >
      <article className='space-y-10 pt-14'>
        <Title>{projectContent.title}</Title>
        <div className='text-hub-primary mx-auto max-w-prose space-y-8 px-1 py-2 md:px-4'>
          <Markdown>{projectContent.description}</Markdown>
        </div>
      </article>
    </section>
  )
}

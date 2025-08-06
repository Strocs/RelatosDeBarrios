import { Title } from '@/components/ui/Title'
import { contactContent } from '@relatos/content/hub'

export const ContactSection = () => {
  return (
    <article id={contactContent.id}>
      <Title>{contactContent.title}</Title>
    </article>
  )
}

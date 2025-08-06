import { Title } from '@/hub/components/ui/Title'
import { contactContent } from '@/hub/content/contact'

export const ContactSection = () => {
  return (
    <article id={contactContent.id}>
      <Title>{contactContent.title}</Title>
    </article>
  )
}

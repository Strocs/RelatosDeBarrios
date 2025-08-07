import { Title } from '@/hub/components/ui/Title'
import { contactContent } from '@/hub/content/contact'
import { Form } from './Form'

const { id, title, subTitle } = contactContent

export const ContactSection = () => {
  // Placeholder for custom hook integration
  // const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm()

  return (
    <article
      id={id}
      className='flex min-h-screen flex-col items-center justify-center pt-14'
    >
      <div className='container mx-auto px-4'>
        <Title>{title}</Title>
        <h3 className='text-hub-text mb-8 text-center text-xl'>{subTitle}</h3>
      </div>
      <Form />
    </article>
  )
}

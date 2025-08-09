import { contactContent } from '../../content/contact'
import { sendEmail } from '../../actions/contactAction'
import { FormWithAction } from './FormWithAction'

const { form } = contactContent

export const Form = () => {
  return <FormWithAction data={form} action={sendEmail} />
}

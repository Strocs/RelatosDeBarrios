import { sendEmail } from '../../actions/contactAction'
import { contactContent } from '../../content/contact'
import { FormContribution } from './FormContribution'
import { FormButton } from './FormButton'
import { FormInput } from './FormInput'

const { name, email, commentary, contribution, attachments, submit } =
  contactContent.form

export const Form = () => {
  return (
    <form
      action={sendEmail}
      className='bg-hub-background/20 mx-auto w-full max-w-2xl rounded-2xl p-4 backdrop-blur-2xl md:p-8'
    >
      {/* Name field */}
      <FormInput inputContent={name} />
      {/* Email field */}
      <FormInput inputContent={email} />
      {/* Message/Commentary field */}
      <FormInput inputContent={commentary} />
      {/* Material contribution */}
      <FormContribution contribution={contribution} attachments={attachments} />
      {/* Submit button */}
      <FormButton submitContent={submit} />
    </form>
  )
}

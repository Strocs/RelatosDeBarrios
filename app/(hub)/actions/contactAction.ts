'use server'
import { brandContent } from '@/content/brand'
import { contactContent } from '../content/contact'
import { Attachment, CreateEmailOptions, Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const { name, email, commentary, contribution, attachments } =
  contactContent.form

export async function sendEmail(formData: FormData) {
  const formName = formData.get(name.id) ?? ''
  const formEmail = formData.get(email.id) ?? ''
  const formCommentary = formData.get(commentary.id) ?? ''
  const formContribution = formData.get(contribution.id) ?? ''
  // TODO: have receive the attachments as an object with content, and filename
  const formAttachments = formData.getAll(attachments.id) ?? []

  const projectContribution =
    brandContent.projects[
      formContribution as keyof typeof brandContent.projects
    ]
  // server validations

  const emailMessage: CreateEmailOptions = {
    from: `${formName} <${formEmail}>`,
    to: ['strocsdev@gmail.com'],
    subject: 'Contacto desde el sitio web de ' + formName,
    text: formCommentary as string,
    attachments: formAttachments as Attachment[],
    html: `
       ${projectContribution ? `<p>Aporte: ${projectContribution}</p>` : ''} 
        <p>Mensaje: ${formCommentary}</p>`,
  }

  // send email
  try {
    const { data, error } = await resend.emails.send(emailMessage)

    if (error) {
      console.error('Error sending email:', error)
    }

    console.log('Email sent successfully:', data)
  } catch (error) {
    console.error(error)
  }
}

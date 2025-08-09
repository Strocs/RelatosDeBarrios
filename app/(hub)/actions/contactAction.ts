'use server'
import { brandContent } from '@/content/brand'
import { contactContent } from '../content/contact'
import { Resend } from 'resend'
import { EmailTemplate } from '../components/contact/EmailTemplate'
import { ActionState, SendEmailResponse } from '../types/attachments'

const resend = new Resend(process.env.RESEND_API_KEY)

const {
  name: { id: name },
  email: { id: email },
  commentary: { id: commentary },
  contribution: { id: contribution },
  attachments: { id: attachments },
} = contactContent.form

export async function sendEmail(
  prevState: ActionState,
  formData: FormData
): SendEmailResponse {
  const formName = (formData.get(name) ?? '') as string
  const formEmail = (formData.get(email) ?? '') as string
  const formCommentary = (formData.get(commentary) ?? '') as string
  const formContribution = (formData.get(contribution) ?? '') as string
  const formAttachments = (formData.getAll(attachments) ?? []) as File[]

  const projectContribution =
    brandContent.projects[
      formContribution as keyof typeof brandContent.projects
    ]

  const resendAttachments =
    formAttachments.length > 0
      ? await Promise.all(
          formAttachments.map(async (file) => ({
            content: Buffer.from(await file.arrayBuffer()).toString('base64'),
            filename: file.name,
          }))
        )
      : []

  // send email
  try {
    const { data, error } = await resend.emails.send({
      from: `${formName} <web@contacto.relatosdebarrios.cl>`,
      replyTo: formEmail,
      to: ['strocsdev@gmail.com'],
      subject: 'Contacto desde el sitio web de ' + formName,
      text: formCommentary as string,
      attachments: resendAttachments,
      react: EmailTemplate({
        name: formName,
        commentary: formCommentary,
        contribution: projectContribution,
      }),
    })

    if (error) {
      console.error('Error sending email:', error)
      return { ok: false }
    }

    console.log('Email sent successfully:', data)
    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}

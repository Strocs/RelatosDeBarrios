export type DropzoneFile = {
  file: File
  src?: string
  width?: number
  height?: number
  type: string
  name: string
}

export type SendEmailAction = (
  prevState: ActionState,
  formData: FormData
) => SendEmailResponse

export type SendEmailResponse = Promise<ActionState>

export type ActionState = {
  ok: boolean | null
}

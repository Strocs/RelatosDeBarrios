'use client'

import { SubmitButtonType } from '../../types/content'

interface FormButtonProps {
  submitContent: SubmitButtonType
}

export const FormButton = ({ submitContent }: FormButtonProps) => {
  return (
    <button
      type={submitContent.type}
      className='bg-hub-primary hover:bg-hub-accent w-full cursor-pointer rounded-lg px-6 py-3 font-medium text-white transition-colors'
    >
      {submitContent.label}
    </button>
  )
}

'use client'
import { cn } from '@/utils/css'
import { InputType } from '../../types/content'

interface InputFormProps {
  inputContent: InputType
  className?: string
}

export const FormInput = ({ inputContent, className }: InputFormProps) => {
  const Element = inputContent.type === 'textarea' ? Textarea : Input

  return (
    <label
      htmlFor={inputContent.id}
      className='text-hub-text mb-4 block font-medium'
    >
      {inputContent.label}
      {inputContent.required && (
        <span className='text-hub-error ml-1 align-middle text-sm'>*</span>
      )}
      <Element
        inputContent={inputContent}
        className={cn(
          className,
          'border-hub-border focus:ring-hub-accent bg-hub-background/60 w-full rounded-lg border px-3 py-2 focus:ring-1 focus:outline-none md:px-4 md:py-3'
        )}
      />
    </label>
  )
}

const Input = ({ inputContent, className }: InputFormProps) => {
  return (
    <input
      type={inputContent.type}
      id={inputContent.id}
      name={inputContent.id}
      placeholder={inputContent.placeholder}
      required={inputContent.required}
      className={className}
    />
  )
}

const Textarea = ({ inputContent, className }: InputFormProps) => {
  return (
    <textarea
      id={inputContent.id}
      name={inputContent.id}
      placeholder={inputContent.placeholder}
      required={inputContent.required}
      rows={5}
      className={className}
    />
  )
}

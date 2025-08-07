'use client'
import { useState } from 'react'
import {
  AttachmentsType,
  ContributionType,
  projectCards,
} from '../../types/content'

interface FormAttachmentsProps {
  contribution: ContributionType
  attachments: AttachmentsType
}

export const FormAttachments = ({
  contribution,
  attachments,
}: FormAttachmentsProps) => {
  const [selectedProject, setSelectedProject] = useState<projectCards | ''>('')

  return (
    <>
      {/* Contribution question and project selection */}
      <div className='mb-2'>
        <p className='text-hub-text block font-medium'>{contribution.label}</p>
        <select
          id={contribution.id}
          name={contribution.id}
          value={selectedProject}
          onChange={(e) =>
            setSelectedProject((e.target.value as projectCards) || '')
          }
          className='border-hub-border focus:ring-hub-accent bg-hub-background/60 w-full rounded-lg border px-4 py-3 focus:ring-1 focus:outline-none'
        >
          <option value=''>{contribution.placeholder}</option>
          {Object.values(contribution.options).map((option) => (
            <option key={option.id} value={option.id}>
              Sí, para {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* File attachments - conditionally rendered */}
      {selectedProject && (
        <div className='mb-6'>
          <label
            htmlFor={attachments.id}
            className='text-hub-text mb-2 block font-medium'
          >
            {attachments.label}
          </label>
          <div className='border-hub-border rounded-lg border-2 border-dashed px-6 py-8 text-center'>
            <p className='text-hub-text mb-2'>{attachments.placeholder}</p>
            <p className='text-sm text-gray-500'>
              Tamaño máximo: {attachments.maxSize}MB
            </p>
            <input
              type={attachments.type}
              id={attachments.id}
              name={attachments.id}
              multiple
              accept={attachments.allowedTypes.join(',')}
              className='hidden'
            />
            <button
              type='button'
              onClick={() => document.getElementById(attachments.id)?.click()}
              className='bg-hub-primary hover:bg-hub-accent mt-4 cursor-pointer rounded-lg px-6 py-2 text-white transition-colors'
            >
              Seleccionar archivos
            </button>
          </div>
        </div>
      )}
    </>
  )
}

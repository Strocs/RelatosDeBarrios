'use client'
import { useState } from 'react'
import {
  AttachmentsType,
  ContributionType,
  projectCards,
} from '../../types/content'
import { FormAttachments } from './FormAttachments'

interface FormAttachmentsProps {
  contribution: ContributionType
  attachments: AttachmentsType
}

export const FormContribution = ({
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
      {selectedProject && <FormAttachments attachments={attachments} />}
    </>
  )
}

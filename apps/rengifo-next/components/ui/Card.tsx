'use client'

import { Image as ImageType } from '@relatos/content/rengifo'
import { cn } from '@relatos/utils'
import Image from 'next/image'
import { uiConfig } from '@relatos/content/ui'

interface CardProps {
  title: string
  subTitle?: string
  image: ImageType
  action?: () => void
  className?: string
  disabled?: boolean
}

export const Card = ({
  title,
  image,
  subTitle,
  action,
  className,
  disabled,
}: CardProps) => {
  return (
    <button
      onClick={!disabled ? action : () => {}}
      className={cn([
        'bg-rengifo-gris/20 border-rengifo-pastel min-h-38 xl:min-h-auto group relative grid w-full max-w-lg cursor-pointer items-end overflow-clip rounded-lg border-2 p-4 shadow-2xl transition-transform duration-500 hover:scale-105',
        className,
      ])}
    >
      {disabled && (
        <div className='bg-rengifo-azul/20 backdrop-blur-xs absolute inset-0 z-20 hidden size-full place-items-center group-hover:grid'>
          <p className='text-4xl font-bold text-white'>
            {uiConfig.messages.not_available}
          </p>
        </div>
      )}
      <h3 className='text-shadow-lg text-shadow-rengifo-azul/20 relative z-10 text-left text-3xl font-black uppercase leading-7 text-white md:text-4xl'>
        {title} <br />
        <span className='text-2xl font-medium md:text-3xl'>{subTitle}</span>
      </h3>
      <Image
        {...image}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='pointer-events-none absolute inset-0 size-full select-none object-cover transition-transform delay-75 duration-700 group-hover:scale-125'
      />
    </button>
  )
}

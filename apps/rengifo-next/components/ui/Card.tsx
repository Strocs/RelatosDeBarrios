import { Image as ImageType } from '@relatos/content/rengifo'
import { cn } from '@relatos/utils'
import Image from 'next/image'

interface CardProps {
  title: string
  subTitle?: string
  image: ImageType
  action?: () => void
  className?: string
}

export const Card = ({
  title,
  image,
  subTitle,
  action,
  className,
}: CardProps) => {
  return (
    <button
      onClick={action}
      className={cn(
        'bg-rengifo-gris/20 border-rengifo-pastel min-w-sm group relative grid w-full cursor-pointer items-end overflow-clip rounded-lg border-2 p-4 shadow-2xl transition-transform duration-500 hover:scale-105',
        className
      )}
    >
      <h3 className='text-shadow-lg text-shadow-rengifo-azul/20 relative z-10 text-left text-4xl font-black uppercase leading-7 text-white'>
        {title} <br />
        <span className='text-3xl font-medium'>{subTitle}</span>
      </h3>
      <Image
        {...image}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='pointer-events-none absolute inset-0 size-full select-none object-cover transition-transform delay-75 duration-700 group-hover:scale-125'
      />
    </button>
  )
}

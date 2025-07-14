import { cn } from '@relatos/utils'
import Image from 'next/image'
import Link from 'next/link'

interface BarrioCardProps {
  title: string
  imageSrc?: string
  href: string
  badge?: React.ReactNode
}

export const BarrioCard = ({
  title,
  imageSrc,
  badge,
  href,
}: BarrioCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'w-md group relative aspect-video content-end overflow-hidden rounded-2xl p-8',
        {
          'bg-hub-primary/10': !imageSrc,
        }
      )}
    >
      {!!badge && badge}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={1879}
          height={964}
          className='absolute inset-0 h-full object-cover opacity-25 mix-blend-hard-light transition-opacity group-hover:opacity-40'
        />
      )}
      <h3 className='text-hub-text relative w-full max-w-xs text-4xl font-bold leading-none'>
        {title}
      </h3>
    </Link>
  )
}

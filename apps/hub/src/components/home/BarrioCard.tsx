'use client'

import { cn } from '@relatos/utils'
import Link from 'next/link'
import { useRef } from 'react'
import Markdown from 'react-markdown'

interface BarrioCardProps {
  title: string
  videoSrc?: string
  posterSrc?: string
  href: URL | string
  badge?: React.ReactNode
}

export const BarrioCard = ({
  title,
  videoSrc,
  posterSrc,
  badge,
  href,
}: BarrioCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <Link
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
      href={href}
      className={cn(
        'ring-hub-accent/50 md:w-md group relative aspect-video w-full content-end overflow-hidden rounded-2xl p-8 transition-all hover:ring-2',
        {
          'bg-hub-primary/10': !videoSrc,
        }
      )}
    >
      {!!badge && badge}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          loop
          muted
          playsInline
          className='absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-hard-light transition-opacity group-hover:opacity-40'
        />
      )}
      <Markdown
        components={{
          h2: ({ ...props }) => (
            <h2
              {...props}
              className='text-hub-text relative w-full max-w-xs text-4xl leading-none'
            />
          ),
        }}
      >
        {title}
      </Markdown>
    </Link>
  )
}

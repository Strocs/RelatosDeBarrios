import { cn } from '@relatos/utils'

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        'text-hub-primary mx-auto max-w-prose text-center text-8xl font-bold lowercase tracking-tight md:text-8xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
